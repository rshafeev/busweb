package com.pgis.bus.server.db;

import java.util.*;
import java.sql.*;

public class ConnectionPoolObject {

 public boolean DEBUG=true; 
 private Vector connections=new Vector();  // one row for each connection
 private Timer timer=null;
 private boolean isCont=true;


 public synchronized Connection getConnection(String driver,String url,String user,String password){
	   Connection con = takeFromPool(url,user);  // in pool
     if (con == null) { //   create new connection 
          try{
             Class.forName(driver).newInstance();
  		     con = DriverManager.getConnection(url,user,password);
          //   if (DEBUG) log("new       " + url+user);
         } catch (Exception ex) {
               log("Cannot create new connection " + url+user);
         }
     }
     return con;
  }

 public synchronized Connection takeFromPool(String url,String user){
     
     Connection con = null;
     String urlUser=url+user;
     int count = connections.size(); 
     for (int j=0; j<count; j++) { 
          Vector row = (Vector)connections.elementAt(j);
          if   ( ((String)row.elementAt(0)).equals(urlUser) ) {
              con = (Connection)row.elementAt(2);
              connections.removeElement(row);
         //     if (DEBUG) log("reused    " + urlUser);
              break;
          }    
     }
     return con;
  }
 public void startTimer(){
	   timer=new Timer();
	   timer.start();
 }


 public void stopTimer(){
	   isCont=false;
	   timer.interrupt();
 }
 public synchronized void putConnection(String url,String user,Connection con,int expTime){
     java.util.Date date1=new java.util.Date();
     java.util.Date expDate= new java.util.Date(date1.getTime() + expTime);
     String urlUser=url+user;
     Vector newRow = new Vector();
	 newRow.addElement(urlUser);  //  url and user
     newRow.addElement(expDate);  //  expiration date
     newRow.addElement(con);      //  connection
     connections.addElement(newRow);
     if (DEBUG) log("put     " + urlUser);
 } 
 
 
  public synchronized void closeConnection(String url,String user){

     String urlUser=url+user;
	   Connection con = null;
     int count = connections.size(); 
     for (int j=0; j<count; j++) { 
          Vector row = (Vector)connections.elementAt(j);
          if   (((String)row.elementAt(0)).equals(urlUser))  {
              con = (Connection)row.elementAt(2);
              try {
                 connections.removeElement(row);
                 con.close();
                 if (DEBUG) log("close     "+urlUser);
              } catch (SQLException ex) {
                 log("<p>*** SQLException caught ***\n");
	            }
          }  
      }
 }

  
  public synchronized void closeAll(){
	   while(isCont){
	      int count = connections.size(); 
        for (int j=0; j<count; j++) { 
          Vector row = (Vector)connections.elementAt(j);
          Connection con = (Connection)row.elementAt(2);
          if (DEBUG) log("closeAll  "+(String)row.elementAt(0));
          try {
             connections.removeElement(row);
             con.close();
          } catch (SQLException ex) {
             log("<p>*** SQLException caught ***\n");
	        }
          
        } // end for    
      } // end while
    } // end



  private void log(String msg) {
      System.out.println(new java.util.Date() + " - ConnectionPoolObject: " + msg);
  }



  class Timer extends Thread{

	public synchronized void run(){
	   while(isCont){
	      try{
	         sleep(60*1000);
	      } catch(InterruptedException ex){
		      interrupt();
		      break;
	      }
			java.util.Date now=new java.util.Date();
	      java.util.Date expDate=new java.util.Date();
        // nowDate.getTime();
        // if (DEBUG) log("check");
        int j = connections.size(); 
        // for (int j=0; j<count; j++) { 
        while (j > 0) {
          j--;
          Vector row = (Vector)connections.elementAt(j);
          String urlUser = (String)row.elementAt(0);
          expDate=(java.util.Date)row.elementAt(1);
          Connection con = (Connection)row.elementAt(2);
          if ((now).after(expDate)) {
             if (DEBUG) log("expired   "+urlUser);
             connections.removeElement(row);
             try {
               con.close();
             } catch (SQLException ex) {
               log("<p>*** SQLException caught ***\n");
	           }
          } // end if
        }
        
        // } // end for    
      } // end while
    } // end run
 }  // timer
	    
}

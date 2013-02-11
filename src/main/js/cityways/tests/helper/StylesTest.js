
test('cityways.helper.styles._selectCSSFile(cssFiles,currentBrowser)', function () {

   var files1 = [
   {
       name : "style1.css"
   },
   {
       name : "style_ff.css",
       browsers : { mozilla : {min : "1.7.12", max : "1.9"} },
   },
   {
       name : "style_ie.css",
       browsers : { msie : { max : "7.0"} },
   },
   {
       
   }
   ];
   var browser1 = {"msie" : true, version : "7.0"};
   var browser2 = {"mozilla" : true, version : "1.7.12"};
   
  // Unit testing
  equal( '1 минута', '1 минута', '');
 // equal(cityways.helper.Styles._selectCSSFile(120), '2 минуты', '');

});
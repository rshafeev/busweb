
test('cityways.helper.styles._selectCSSFile(cssFiles,currentBrowser)', function () {

   var files1 = [
   {
       name : "style.css"
   },
   {
       name : "style_ff.css",
       browsers : { mozilla : {min : 1.712, max : 1.9} },
   },
   {
       name : "style_ie.css",
       browsers : { msie : { max : 7.0} },
   },
   {
       
   }
   ];
   var browser1 = {name : "msie", version : 7.0};
   var browser2 = {name : "mozilla", version : 1.712};
   var browser3 = {name : "chrome", version : 20};

  // Unit testing
 
  equal(cityways.helper.styles._selectCSSFile(files1,browser1), 'style_ie.css', 'style_ie.css');
  equal(cityways.helper.styles._selectCSSFile(files1,browser2), 'style_ff.css', 'style_ff.css');
  equal(cityways.helper.styles._selectCSSFile(files1,browser3), 'style.css', 'style.css');

});
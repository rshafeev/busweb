/**
    @overview Escape HTML tags in examples.
    @module plugins/escapeExampleHtml
    @author Roman Shafeyev <rs@premiumgis.com>
 */


exports.handlers = {
    /**
        Translate HTML tags in examples into safe entities.
        Replaces <, & and newlines
     */
    newDoclet: function(e) {
        if(e.doclet.examples){
        	for(var i=0;i < e.doclet.examples.length; i++){
            e.doclet.examples[i]    = e.doclet.examples[i]
                                   .replace(/&/g,'&amp;')
                                   .replace(/</g,'&lt;')
                                   .replace(/>/g,'&gt;')
                                   .replace(/\r\n|\n|\r/g, '<br>');
            }           
        }


    }
};

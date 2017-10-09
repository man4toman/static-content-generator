jQuery(document).ready(function(){


	jQuery('.bold').click(function(){
	    jQuery('#content')
	    	.selection('insert', {text: '<b>', mode: 'before'})
	    	.selection('insert', {text: '</b>', mode: 'after'});
	    jQuery('#content').focus();
	});

	jQuery('.italic').click(function(){
	    jQuery('#content')
	    	.selection('insert', {text: '<i>', mode: 'before'})
	    	.selection('insert', {text: '</i>', mode: 'after'});
	    jQuery('#content').focus();
	});

	jQuery('.highlight').click(function(){
	    jQuery('#content')
	    	.selection('insert', {text: '<span>', mode: 'before'})
	    	.selection('insert', {text: '</span>', mode: 'after'});
	    jQuery('#content').focus();
	});

	jQuery('.underline').click(function(){
	    jQuery('#content')
	    	.selection('insert', {text: '<u>', mode: 'before'})
	    	.selection('insert', {text: '</u>', mode: 'after'});
	    jQuery('#content').focus();
	});


  jQuery("#save").click(function(){

    var htmlBefore  = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>span{background:yellow}</style></head><body>';
    var htmlAfter   = '</body></html>';

    var htmlTitle   = jQuery("#fileName").val();
    var fileTitle   = "<h2>" + jQuery("#title").val() + "</h2>";
    var htmlContent = jQuery("#content").val();
    var FullContent = htmlBefore + fileTitle + htmlContent + htmlAfter;
    var htmlContent = ["\ufeff",FullContent];
    var bl          = new Blob(htmlContent, {encoding:"UTF-8",type: "text/html"});
    var a           = document.createElement("a");
    a.href          = URL.createObjectURL(bl);
    a.download      = htmlTitle+".html";
    a.hidden        = true;
    document.body.appendChild(a);
    a.innerHTML     = "";
    a.click();

  });
});

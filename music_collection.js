$(document).ready(function()
{

    $("button").click(function()
	{
	
    $.get("cd_catalog.json",function(data)
	{
	
	    console.log(data);
		
	    $.each(data.CATALOG.CD, function(index, value) 
		{
		
				var table = "";
				
				table += "<tr><th>" + value.TITLE + "</th><th>" +
				value.ARTIST + "</th><th>" + value.COUNTRY 
				+ "</th><th>" + value.COMPANY + "</th><th>" + value.PRICE + 
				"</th><th>" + value.YEAR + "</th></tr>" ;
				
                $('#demo').append(table);
			
	    });
        
		
	
     });
   
   
   });

});

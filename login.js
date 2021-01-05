$(document).ready(function() 
{

$("button").click(function()
{

var user = $("input[name=uname]").val();
var password = $("input[name=psw]").val();

$.get("login.php", {"user": user, "password": password}, function(data, status)
{
	
	var object = JSON.parse(data);
	console.log(data);
	console.log(object);
	console.log(object.val);
	console.log(object.message);
	
	
	if(object.val == -1)
	{
	  $(".container").html(object.message);
	}
	
	else if (object.val == 0)
    {
	  $(".container").html(object.message);
	}
	
	else
    {
	  $(".container").html(object.message);
	}
	
});

});

});
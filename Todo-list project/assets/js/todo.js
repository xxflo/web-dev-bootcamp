//KEY TAKEAWAY: click() and on('click') will both get the job done. However, there is one 
//key difference: click() only adds listners for existing elements, while on() will add listeners
//for all potential future elements


// check off todos by clicking

$("ul").on("click","li",function(){

	$(this).toggleClass("completed");

});

// click on x to delete todos
//stop Event Bubbling: this means that function will fire on span, but will not
//bubble up to calls on li, ul, container
$("ul").on("click", "span", function(event){   
	//fade out then remove    
	$(this).parent().fadeOut(500,function(){
	  $(this).remove();      //remove span and its parent element!! super convenient!
	  //the second this here refers to the parent element, not the span itself
	});
	event.stopProbagation();
});


// create new todos

$("input[type='text']").keypress(function(event){
	if(event.which === 13){             //code for enter is 13
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$(this).val("");
		$("ul").append("<li>" + "<span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});


//fadeToggle() so useful!!!

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
})


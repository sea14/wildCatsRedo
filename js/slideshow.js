// jQuery for the sliding features of WildCats

$(document).ready(function() {

	//get the number of slides we have
	var slideNumber = $('section').length;

	//create an array of our sections
	var sections = document.getElementsByTagName( "section" );
	var sectionArray = jquery.makeArray( sections );
	//count of slides as a check
	console.log(slideNumber);


	//show only the first section initially


	/* default setup for the page: one opening screen
	 * if the right arrow is clicked, we move to the next slide
	 */

	 	$(".nextButton").click(function(){

	 		//hide the current section
	 		$('section').hide();
	 		$(this).next().show();


	 	});

}); // close the script
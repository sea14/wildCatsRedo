// jQuery for the sliding features of WildCats

$(document).ready(function() {

	//get the number of sections we have
	var slideNumber = $('section').length;

	//create an array of our sections
	var sections = document.getElementsByTagName( "section" );
	var sectionArray = jQuery.makeArray( sections );
	//count of slides as a check
	console.log(slideNumber);
	console.log(sectionArray);

	/* default setup for the page: one opening screen,
	 * show only the first section initially
	 * if the right arrow is clicked, we move to the next slide
	 */

	 $(sectionArray[0]).show().siblings().hide();

	 //show the next
	 $('.nextButton').click(function(){

	 		$('.current').removeClass('current').hide()
	 			.next().show().addClass('current');
	 			if ($('.current').hasClass('last')) {
	 				$('#nextButton').attr('disabled', true);
	 			}
	 			$('#prevButton').attr('disabled', null);
	 });
	 $('.prevButton').click(function(){
	 		$('.current').removeClass('current').hide()
	 			.prev().show().addClass('current');
	 			if ($('.current').hasClass('first')) {
	 				$('#prev').attr('disabled', true);
	 			}
	 			$('#next').attr('disabled', null);

	 });

}); // close the script
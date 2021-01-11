

/*------Sticky Navbar--------*/

$(document).ready(function(){
	$(window).scroll(function(){

		if(this.scrollY > 1){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
	})
});

/*-------Typing Animation--------*/

var typed = new Typed(".typing",{
	strings : ["Web Designer." , "Web Developer." , "Freelancer."],
	typeSpeed : 70,
	backSpeed : 50,
	loop:true
});
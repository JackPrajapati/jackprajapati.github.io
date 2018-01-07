$(function(){
	$(document).on('click', 'a', function(event){
   
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1100);
});
	
	var per= 0, per2=0,per3=0,per4=0;
	setInterval(function(){
		per++;
		if(per <= 80){

			$('.progress-80').css({'background':'linear-gradient(to top, blue '+per+'%, black 20%)'});
		}
	},30);

	setInterval(function(){
		per2++;
		if(per2 <= 70){

			$('.progress-70').css({'background':'linear-gradient(to top, rgb(110,18,190) '+per2+'%, black 30%)'});
		}
	},30);

	setInterval(function(){
		per3++;
		if(per3 <= 75){

			$('.progress-75').css({'background':'linear-gradient(to top, rgb(14,176,249) '+per3+'%, black 25%)'});
		}
	},30);

	setInterval(function(){
		per4++;
		if(per4 <= 50){

			$('.progress-50').css({'background':'linear-gradient(to top, rgb(12,72,200) '+per4+'%, black 50%)'});
		}
	},30);

});
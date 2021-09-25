var slide = new Array("./assets/img/slide_1_full.jpg", "./assets/img/slide_2_full.jpg", "./assets/img/slide_3_full.jpg");
var numero = 0;

function ChangeSlides(sens)
{
	ChangeSlide(sens);
	k = 4;
}

function ChangeSlide(sens) {
 numero = numero + sens;
 if (numero < 0)
 numero = slide.length - 1;
 if (numero > slide.length - 1)
 numero = 0;
 document.getElementById("slide-full").src = slide[numero];
}

setInterval(function() { 
			var k = 1;
			ChangeSlide(1);
			if(k == 3)
			{
				k =1;
			}  
		}, 6000);
$(document).ready(function(){
	new WOW().init();

	var clock, mobileClock, time, endTime;
	//endTime = new Date('05/26/2017 12:00:00');
	//endTime.getTime();
	time = 5*60*60-1;

	clock = $('.promotion-time .timer').FlipClock({
						language: 'ru-ru',
		        autoStart: true
		    });
	mobileClock = $('.mobile-block .timer').FlipClock({
						language: 'ru-ru',
		        autoStart: true
		    });

	clock.setTime(time);
	mobileClock.setTime(time);
	clock.setCountdown(true);
	mobileClock.setCountdown(true);
	//clock.start();
	//mobileClock.start();

	$(".mobile-block .about-block").owlCarousel({
		singleItem : true,
    autoPlay : true,
    stopOnHover : true, 
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    navigation : false
	});
	$(".reviews-block").owlCarousel({
		singleItem : true,
    autoPlay : true,
    stopOnHover : true, 
    paginationSpeed : 1500,
    slideSpeed : 1500,
    goToFirstSpeed : 2000,
    navigation : true,
    navigationText : false,
  	autoHeight : true
	});	
	$
	$(".about-block .item, .one-flavor .text-block").matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
	});
	$(".one-flavor img, .one-flavor .btn").hover(function(){
		$(this).parents(".one-flavor").addClass('animated pulse infinite');
	});
	$(".one-flavor").mouseleave(function() {
		$(this).removeClass('animated pulse infinite');
	});

	$(".orange-btn").click(function() {
		var elementClick = $(this).attr("data-target");
		var destination = $("#"+elementClick).offset().top - 75;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 1000);
	});	

	// validate

	$('input[name=phone]').bind("change keyup input click", function() {
	  if (this.value.match(/[^0-9]/g)) {
	      this.value = this.value.replace(/[^0-9]/g, '');
	  }
	});

	$(".check").change(function(){
		$(this).siblings('label.checkbox').toggleClass('checked');
	})
	var messages, lang = $("html").attr("lang");
	if(lang == "ru"){
		messages = {
			'country': "Пожалуйста выберите страну",
			'name': "Пожалуйста введите имя",
			'phone': "Пожалуйста введите номер телефона",
			'private-police': 'Пожалуйста подтвердите согласие на обработку персональных данных'
		}
	}
	else if(lang == "en"){
		messages = {
			'country': "Please, select a country",
			'name': "Please, enter a name",
			'phone': "Please, enter a phone number",
			'private-police': 'Please, confirm your consent to the processing of personal data'
		}
	}	
	else if (lang == 'bg') {
		messages = {
			'country': "Моля, изберете държава",
			'name': "Моля, въведете име",
			'phone': "Моля, въведете телефонен номер",
			'private-police': 'Моля, потвърдете съгласието си за обработката на лични данни'
		}		
	}
	else if (lang == 'es') {
		messages = {
			'country': "Por favor, selecciona un país",
			'name': "Por favor, escribe un nombre",
			'phone': "Por favor, escribe un número de teléfono",
			'private-police': 'Por favor, confirma tu consentimiento para el procesamiento de información personal'
		}		
	}	
	else if (lang == 'ro') {
		messages = {
			'country': "Vă rugăm, selectați  țara",
			'name': "Vă rugăm să introduceți numele",
			'phone': "Vă rugăm să introduceți un număr de telefon",
			'private-police': ' Vă rugăm să confirmați consimțământul pentru prelucrarea datelor cu caracter personal'
		}		
	}	
	else if (lang == 'it') {
		messages = {
			'country': "Seleziona un paese",
			'name': " Inserisci un nome",
			'phone': "Inserisci un numero di telefono",
			'private-police': 'Conferma il consenso al trattamento dei dati personali'
		}		
	}
	else if (lang == 'th') {
		messages = {
			'country': "กรุณาเลือกประเทศ",
			'name': "กรุณาลงชื่อ",
			'phone': "กรุณาใส่หมายเลขโทรศัพท์",
			'private-police': 'กรุณายืนยันการยินยอมให้ดำเนินการภายใต้ข้อมูลส่วนบุคคลนี้'
		}		
	}
	$("#request").validate({
		rules: {
			"phone": {
				 range: [1, 99999999999]
			}
		},
		'messages' : messages
	});
	$("#request2").validate({
		rules: {
			"phone": {
				 range: [1, 99999999999]
			}
		},		
		'messages' : messages
	});
	$(".simple-btn").on('click', function() {
	  $.fancybox.open({
	    src  : '#modal-window',
	    type : 'inline',
	    opts : {
	    }
	  });
  
	});

});

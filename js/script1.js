//---------------------------------slider_mainPage---------------------------
$(document).ready(function() {
    $("#mainslider").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 1500,
        paginationSpeed : 800,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        navigationText : ["",""],
		pagination : false
    });
});

//---------------------------------example_slider---------------------------
$(document).ready(function() {
    $("#example_slider").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 1500,
        paginationSpeed : 800,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        navigationText : ["",""],
		pagination : false
    });
});


//---------------------------------requared_slider---------------------------
$(document).ready(function() {
    $("#requared_slider").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 1500,
        paginationSpeed : 800,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        navigationText : ["",""],
		pagination : false
    });
});
//---------------------------------mask---------------------------
$(".telclass").mask("+7(999) 999-99-99");

//---------------------------------plus_minus_input---------------------------
$('#num1').on('keyup', function() {
	$("#res").text($(this).val());
})
$('#num2').on('keyup', function() {
	$("#res").text($(this).val());
})

//---------------------------------only_number_input---------------------------
$("#num1").keydown(function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
		 // Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) || 
		 // Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
				 // Ничего не делаем
				 return;
	}
	else {
			// Обеждаемся, что это цифра, и останавливаем событие keypress
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
			}   
	}
});
$("#num2").keydown(function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
		 // Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) || 
		 // Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
				 // Ничего не делаем
				 return;
	}
	else {
			// Обеждаемся, что это цифра, и останавливаем событие keypress
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
			}   
	}
});
//---------------------------------send_mess---------------------------
$(document).ready(function() {
	//E-mail Ajax Send
	$(".modal_form_1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/final/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				$(".thank").fadeIn(500);
				 $(".thank").delay(3000).fadeOut(500);
					 $.magnificPopup.close();
					 $('#myModal').modal('hide');
				// Done Functions
				th.trigger("reset");
			});
		});
		return false;
	})
})

//---------------------------------send_mess_zakaz_osn---------------------------
$(document).ready(function() { // Ждём загрузки страницы
	var steps = $("#form_2").children(".step"); // находим все шаги формы
	$(steps[0]).show(); // показываем первый шаг
	var current_step = 0; // задаем текущий шаг
	
	$("a.next").click(function(){	// Событие клика на ссылку "Продолжить"
			
			if (current_step == steps.length-3) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Продолжить"
				$("a.zv").show(); // показываем ссылку "Заказать"
				$("#form_2 input[type=submit]").show(); // показываем ссылку "Отправить заявку"
			}
			
			
			$("a.back").show(); // показываем ссылку "Назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
			
			function changeSkidka() { 
		         
				 if (current_step == '1'){
				  var skidka_step = '100';
			   }
			     if (current_step == '2'){
				   skidka_step = '200';
			   }
			     if (current_step == '3'){
				   skidka_step = '300';
			   }
			     if (current_step == '4'){
				   skidka_step = '400';
			   }
	             var shablon = $("input[name=design]:checked").attr('data-design'); // задаем скидку за шаблон
				 var skidka_book = parseInt(skidka_step) + parseInt(shablon); // скидка с книги
	             var kol = $("#num1").val(); // вычисляем количество книг
				 if (razvorot_n == '' || kol == ''){
					 var kol = '1';
				 };
	             var cn = skidka_book * kol; // сумма скидок
	             var razvorot_format = $("input[name=format]:checked").attr("data-format"); // задаем формат разворота
	             var razvorot_n = $("#num2").val(); // задаем количество разворотов
				 var price_bas = '3900'; // базовая цена 
				 if (razvorot_format == '2020') {
			          price_bas = '3800'; // базовая цена (формата 20*20)
                  };
				 if (razvorot_format == '3020') {
			          price_bas = '3900'; // базовая цена (формата 30*20 А4
                  };
	             
				 if (razvorot_format == '2020') {
			          price_razvorot_bas = '500'; // цена за 1 разворот формата 20*2
                  };
				 if (razvorot_format == '3020') {
			          price_razvorot_bas = '550'; // цена за 1 разворот формата 30*20
                  }; 
	             
	             var price_razvorot = razvorot_n * price_razvorot_bas; // задаем прирост цены от количества разворотов
				 
		         var price = parseInt(price_bas) + parseInt(price_razvorot) - parseInt(price_razvorot_bas); // задаем цену за 1 книгу
				 
				 if (razvorot_format == '2020' && razvorot_n == '1' || razvorot_format == '2020' && razvorot_n == '2') {
			          price = 0;
                  };
				 if (razvorot_format == '2030') {
			          price = 0;
                  };
	             var sum = kol * price; // общая сумма
				 if (razvorot_format == '2020' && razvorot_n == '1' || razvorot_format == '2020' && razvorot_n == '2') {
			          var sum = '<br><p>Не бывает!Минимум от 3 разворотов в данном формате</p>';
					  $(".tg_hide").hide();
		          } else{
					  $(".tg_hide").show();
				  };
				 if (razvorot_n == '' || kol == ''){
					 var sum = '3800';
				 } ;
				 if (razvorot_format == '3020' && razvorot_n == ''){
					 var sum = '3900';
				 } ;
	             var itog = sum - cn; // Итого
	             var razvorot_n1_message = '<p>Не бывает! Минимум бывает от 3 разворотов в данном формате</p>';
	             var f1 = '2020'; // задаем формат 20*20
	             var f2 = '3020'; // задаем формат 30*20
				 if (sum == 0){
					 var itog = 0;
					 var skidka_book = 0;
					 var cn = 0;
				 };
				 
				 
				 
	           $('.skidka_book').html(skidka_book);
			   $('.sum').html(sum);
			   $('.cn').html(cn);
			   $('.itog').html(itog);
			   
	}
	
	
			   
			   
			   
			   //отслеживаем изменение данных
	$('#wrapper').on('click keyup', changeSkidka);
			
            });
	
	$("a.back").click(function(){	// Событие клика на маленькое изображение
		
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Назад"
		}
		$("#form_2 .zv").hide(); // скрываем ссылку "Заказать"
		$("a.next").show(); // показываем ссылку "Продолжить"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
		
		
	});
	
	
	$(document).ready(function() {
	//E-mail Ajax Send
	$("#form_2").submit(function() { //Change
		var th = $(this);
		
		$.ajax({
			type: "GET",
			url: "/final/send.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				$(".thank").fadeIn(500);
				 $(".thank").delay(3000).fadeOut(500);
					 $.magnificPopup.close();
					 $('#step6').modal('hide');
				// Done Functions
				th.trigger("reset");
				});
			setTimeout("window.location.href = '/final/test_start.html'", 4000);	
		});
		return false;
	});
});
	
	function changeStep(i) { // функция смены шага
		$(steps).hide(); // скрываем все шаги
		$(steps[i]).show(); // показываем текущий
	}
	
	/* function maxformat() { 
		var maxformatRazvorot = $('#num2').val();
		if (maxformatRazvorot > '15'){
			$('#num2').val() = '15';
		}
	} */
	
});

//active magnific-popup
$(document).ready(function() {
	$('.item_popup_new').magnificPopup({
		type:'image',
		alignTop: true,
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: { enabled:true }
	});
});

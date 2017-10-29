$(document).ready(function() { // Ждём загрузки страницы
	var steps = $("#form_2").children(".step"); // находим все шаги формы
	$(steps[0]).show(); // показываем первый шаг
	var current_step = 0; // задаем текущий шаг
	$("a.next").click(function(){	// Событие клика на ссылку "Продолжить"
			if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
				$(this).hide(); // скрываем ссылку "Продолжить"
				$("#form_2 input[type=submit]").show(); // показываем кнопку "Отправить заявку"
			}
			$("a.back").show(); // показываем ссылку "Вернуться назад"
			current_step++; // увеличиваем счетчик текущего слайда
			changeStep(current_step); // меняем шаг
	});
	
	$("a.back").click(function(){	// Событие клика на маленькое изображение
		if (current_step == 1) { // проверяем, будет ли предыдущий шаг первым
			$(this).hide(); // скрываем ссылку "Вернуться назад"
		}
		$("#form_2 input[type=submit]").hide(); // скрываем кнопку "Отправить заявку"
		$("a.next").show(); // показываем ссылку "Продолжить"
		current_step--; // уменьшаем счетчик текущего слайда
		changeStep(current_step);// меняем шаг
	});
	
	function changeStep(i) { // функция смены шага
		$(steps).hide(); // скрываем все шаги
		$(steps[i]).show(); // показываем текущий
	}
});
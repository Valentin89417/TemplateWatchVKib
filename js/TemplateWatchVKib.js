(function($) {
	$.fn.TemplateWatchVKib = function(options) {
		// массив пользовательских настроек
		var settings = $.extend({ 
			include: true,
			imgSRC: 'maket.png',
			width: 'auto',
			height:'auto',
			zIndex:'1000'
			}, options);
		// пользовательский 'this' селектор
		var Vr = $(this);
		var $zIndexTop = settings.zIndex;
		var $zIndexBottom = '-'+settings.zIndex;  
		var $zIndexMaket = settings.zIndex --;
	// Создаём каркас
	function wrapper() { 
		Vr.append('<div id="VERSTKA"></div>'); // обёртка
		// кнопка вкл/выкл
		Vr.find('#VERSTKA').append('<input type="button" value="Вкл" title="Вкл/Выкл Скрипт">');
		// добавляем меню
		Vr.find('#VERSTKA').append('<div id="menu"><input type="range" min="0" max="1" step="0.1" class="opacity" value="0.5" title="Настройка Прозрачности"><input type="button" value="∧" class="positionTB" title="Слой Макета снизу/сверху"><input type="button" value=">>" class="positionLR" title="Меню слево/справо"></div>');
		// добавляем макет
		Vr.find('#VERSTKA').append('<img src="'+settings.imgSRC+'" alt="Макет" width="'+settings.width+'" height="'+settings.height+'">');
		
		// CSS Стили по умолчанию.
		Vr.find('#VERSTKA').css({'position': 'absolute', 'width': '100%', 'top': '0'});		
		Vr.find('#VERSTKA img').css({'display': 'none', 'margin': '0 auto', 'z-index': $zIndexBottom, 'opacity': '0.5'});
		Vr.find('#VERSTKA>input').css({'position': 'fixed', 'left': '0', 'z-index': $zIndexTop});
		Vr.find('#VERSTKA input.opacity').css({'position': 'fixed', 'left': '60px', 'z-index': $zIndexTop, 'width': '100px'});
		Vr.find('#VERSTKA input.positionTB').css({'position': 'fixed', 'left': '170px', 'z-index': $zIndexTop});
		Vr.find('#VERSTKA input.positionLR').css({'position': 'fixed', 'left': '200px', 'z-index': $zIndexTop});
		Vr.find('#VERSTKA>#menu').css({'display' : 'none'});
	}
	wrapper();
// Включить скрипт
	jQuery('input[value="Вкл"]').click(function(){
		if(jQuery(this).val()=='Выкл'){
			jQuery("#VERSTKA img").css({'display':'none'});
			jQuery("#VERSTKA>#menu").css({'display' : 'none'});
			jQuery(this).val('Вкл');
		}else{
			jQuery("#VERSTKA img").css({'display':'block'});
			jQuery("#VERSTKA>#menu").css({'display':'block'});
			jQuery(this).val('Выкл');
		}
	});
// Настройка прозрачности
	jQuery('.opacity').on('input change',function(){
		var Ac = jQuery(this).val();
		jQuery('#VERSTKA img').css({'opacity':Ac});
	});
// Макет слой сверху/снизу
	jQuery('input[value="∧"]').click(function(){
		if(jQuery(this).val()=='∧'){
			jQuery("#VERSTKA").css({'z-index':$zIndexMaket});
			jQuery(this).val('∨');
		}else{
			jQuery("#VERSTKA").css({'z-index':'auto'});
			jQuery(this).val('∧');
		}
	});
// Расположение меню скрипта c лева или с право.
	jQuery('input[value=">>"]').click(function(){
		if(jQuery(this).val()=='<<'){
			jQuery("#VERSTKA>input").css({'right':'auto','left':'0'});
			jQuery("#VERSTKA input.opacity").css({'right':'auto','left':'60px'});
			jQuery("#VERSTKA input.positionTB").css({'right':'auto','left':'170px'});
			jQuery("#VERSTKA input.positionLR").css({'right':'auto','left':'200px'});
			jQuery(this).val('>>');
		}else{
			jQuery("#VERSTKA>input").css({'left':'auto','right':'0'});
			jQuery("#VERSTKA input.opacity").css({'left':'auto','right':'60px'});
			jQuery("#VERSTKA input.positionTB").css({'left':'auto','right':'170px'});
			jQuery("#VERSTKA input.positionLR").css({'left':'auto','right':'200px'});
			jQuery(this).val('<<');
		}
	});    	

		return this;
	};
}) (jQuery);
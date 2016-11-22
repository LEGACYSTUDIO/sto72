$(function(){
	$('.js-more').click(function(){
		var txtHide = 'Свернуть',
			txtShow = 'Подробнее';

		$('.js-gr-hide').slideToggle(200, function(){
			if ($(this).hasClass('hidden')) {
				$('.js-more').text(txtShow);
				$(this).toggleClass('hidden');
			}else{
				$('.js-more').text(txtHide);
				$(this).toggleClass('hidden');
			}
		});
	});

	$(".form__select" ).selectmenu();

	var opt = {
		overlay: {
	        css: {
	            opacity: .3
	        }
	    },
	    openEffect: {
	    	speed: 200
	    },
	    closeEffect: {
	    	speed: 200
	    }
	}

	$('.js-btn-how-to').click(function(){
		$('.js-modal-how-to').arcticmodal(opt);
	});

	$('.js-btn-order').click(function(){
		$('.js-modal-order').arcticmodal(opt);
	});

	$('.js-btn-hint').click(function(){
		$('.js-modal-hint').arcticmodal(opt);
	});

	// валидация телефона
	$.validator.addMethod("phoneUS", function(phone_number, element) {
    	phone_number = phone_number.replace(/\s+/g, "");
    	return this.optional(element) || phone_number.length > 9 && 
    	phone_number.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
	});

	// валидация формы в целом
	$(".js-form").validate({
	    rules: {
	        email: {
	            required: true
	        },
	        phone: {
	        	required: true,
	        	phoneUS: true
	        },
	    },
        errorPlacement: function(error, element){
        	// ...
        }
	});
});
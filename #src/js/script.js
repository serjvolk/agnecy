@@include('_baguetteBox.js');

$(document).ready(function () {
	// Зуммирование и перелистывание картинок
	baguetteBox.run('.products__body', {
	    // options
	});

	// Делаем фильтрацию
	$(".products__link").click(function(e){
		e.preventDefault();
		$(".products__link").removeClass('active');
		$(this).addClass('active');

		var i = $(this).data('filter');
		if(i == 1){
			$('.products__column').show();
		}else{
			$('.products__column').hide();
			$('.products__column.f_'+i).show();
		}
	});

	$(window).resize(function(){
		maveItem();
	});

	var isMove = false;
	function maveItem() { // Перемещаем блок в зависимости от разрешения монитора
		var w = $(window).outerWidth();
		if(w < 993 && isMove === false){
			isMove = true;
			$('#teamPeople').appendTo('.team .container');
		}else if(w > 992 && isMove === true){
			$('#teamPeople').appendTo('.team .team__column:eq(1)');
			isMove = false;
		}
	}
	maveItem();

	$("#teamPeople .team__person").click(function(){ // Клик по персоне
		var src = $(this).find('img').attr('src');
		var name = $(this).find('span').text();
		$('#showPeople').attr('src', src);
		$('#peopleName').text(name);
	});
});
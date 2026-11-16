$('.slider').slick({
    autoplay: true,
    infinite: true,//スライドをループ
    speed: 500,//スライドのスピード。
    slidesToShow: 3,//スライドを画面にみせる枚数
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,//下部ドットナビゲーションの表示
});

//1. テキストを含む一般的なモーダル
$(".info").modaal({
	overlay_close:true,//モーダル背景クリック時に閉じるか
	before_open:function(){// モーダルが開く前に行う動作
		$('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
	},
	after_close:function(){// モーダルが閉じた後に行う動作
		$('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
	}
});
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
	var responsiveImage = [//PC用の画像
		{ src: './images/top_img.webp' },
		{ src: './images/top_img1.webp' },
		{ src: './images/top_img2.webp' }
	];
} else {
	var responsiveImage = [//タブレットサイズ（768px）以下用の画像
		{ src: '' },
		{ src: '' },
		{ src: '' }
	];
}

//Vegas全体の設定

$('#slider').vegas({
	overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
	transition: 'fade',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burn、burn2、blur、blur2、flash、flash2が設定可能。
	transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
	delay: 10000,//スライド間の遅延をミリ秒単位で。
	animationDuration: 15000,//スライドアニメーション時間をミリ秒単位で設定
	animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
	slides: responsiveImage,//画像設定を読む
	timer: false,
});


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
	$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$('.slider-works').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 6900,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 6,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			}
		}
	]
});

$('.slider-works1').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 6900,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	rtl: true, // スライダーを左から右に流す（逆向き）
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 5.5,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1.5,//スライドを画面に1.5枚見せる
			}
		}
	]
});



//logoの表示
$(window).on('load', function () {
	$("#splash").delay(1500).fadeOut('slow');
	$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機
});

var bar = new ProgressBar.Line(splash_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1000,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定	
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '58%',
			padding: '0',
			margin: '0',
			transform: 'translate(-50%,-50%)',
			'font-size': '1.2rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function (state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
});


const container = document.querySelector('.Container');
const boxContainer = document.querySelector('.Box-Container');
const leftArrow = document.querySelector('.Arrow.left');
const rightArrow = document.querySelector('.Arrow.right');
const scrollAmount = 200; // ３回で最大値まで行く程度の数値

leftArrow.addEventListener('click', () => {
	const containerWidth = container.offsetWidth;
	const maxScrollAmount = boxContainer.offsetWidth - containerWidth;
	const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
	const newScrollAmount = Math.max(currentScrollAmount - scrollAmount, 0);
	boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
	updateArrowVisibility(newScrollAmount, maxScrollAmount);
});

rightArrow.addEventListener('click', () => {
	const containerWidth = container.offsetWidth;
	const maxScrollAmount = boxContainer.offsetWidth - containerWidth;
	const currentScrollAmount = Math.abs(parseInt(boxContainer.style.transform.split('(')[1])) || 0;
	const newScrollAmount = Math.min(currentScrollAmount + scrollAmount, maxScrollAmount);
	boxContainer.style.transform = `translateX(-${newScrollAmount}px)`;
	updateArrowVisibility(newScrollAmount, maxScrollAmount);
});

function updateArrowVisibility(scrollAmount, maxScrollAmount) {
	if (scrollAmount === 0) {
		leftArrow.classList.add('Hide');
	} else {
		leftArrow.classList.remove('Hide');
	}

	if (scrollAmount === maxScrollAmount) {
		rightArrow.classList.add('Hide');
	} else {
		rightArrow.classList.remove('Hide');
	}
}

$(window).on('scroll', function () {

	// クラス名【 inview 】が付与されている、全ての要素に対して処理を実行
	$('.inview').each(function () {

		// ブラウザの最上部から、クラス名【 inview 】が付与されている要素の位置を取得
		var targetPosition = $(this).offset().top;

		// ブラウザの最上部からのスクロール量を取得
		var scroll = $(window).scrollTop();

		// ウィンドウの高さを取得
		var windowHeight = $(window).height();

		// ブラウザの最上部からのスクロール量 > クラス名【 inview 】が付与されている要素の位置 - ウィンドウの高さを取得
		if (scroll > targetPosition - windowHeight) {

			// クラス名【 show 】を付与
			$(this).addClass('show');
		}
	});
});


class Main {
	constructor() {
		this.init();
	}

	init() {
		this.copyText();
		this.calculateLoopAnimationSpeed();
		this.resizeRefresh();
	}

	//リサイズ時にアニメーションの速度を再計算
	resizeRefresh() {
		const target = document.body;
		const resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				this.calculateLoopAnimationSpeed();
			});
		});
		resizeObserver.observe(target);
	}

	//アニメーションの速度を計算してCSS変数に
	calculateLoopAnimationSpeed() {
		const targets = document.querySelectorAll('.js-tick');
		if (!targets.length) {
			return;
		}

		const distance = window.innerWidth;
		const mql = window.matchMedia('(min-width: 801px)');
		const time = mql.matches ? 18 : 9;
		const speed = distance / time;

		targets.forEach((target) => {
			const tickElems = target.querySelectorAll('.js-tick-item');
			if (!tickElems.length) {
				return;
			}

			const total = tickElems.length - 1;

			tickElems.forEach((el, i) => {
				const elWidth = el.clientWidth;
				const elTime = Math.floor(elWidth / speed);
				el.style.setProperty('--tick-duration', `${elTime}s`);
				el.style.setProperty('--tick-delay', `${elTime / -2}s`);

				if (i === total) {
					el.parentNode.classList.remove('no-tick');
				}
			});
		});
	}

	//テキストをコピー
	copyText() {
		const targets = document.querySelectorAll('.js-tick');
		if (!targets.length) {
			return;
		}

		targets.forEach((target) => {
			const tickElems = target.querySelectorAll('.js-tick-item');
			if (!tickElems.length) {
				return;
			}

			let length = 0;
			tickElems.forEach((el) => {
				length += el.clientWidth;
				el.insertAdjacentHTML('afterend', el.outerHTML);
				if (length > window.innerWidth) {
					return;
				}
			});
		});
	}
}

new Main();
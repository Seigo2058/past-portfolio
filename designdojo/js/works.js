$(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

    var grid = new Muuri('.grid', {
    
    showDuration: 300,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 300,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        
      visibleStyles: {
        opacity: '1',
        transform: 'scale(1)'
      },
      hiddenStyles: {
        opacity: '0',
        transform: 'scale(0.5)'
      }    
    });
    
    //＝＝＝並び替えボタン設定
    $('.sort-btn li').on('click',function(){			
        $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
        var className = $(this).attr("class");			//クラス名を取得
        className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
        $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
        if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
             grid.show('');								//全ての要素を出す
        }else{											//それ以外の場合は
            grid.filter("."+className[0]); 				//フィルターを実行
        }
    });
    
    //＝＝＝ Fancyboxの設定
    $('[data-fancybox]').fancybox({
     thumbs: {
        autoStart: false,
      },	
    });
        
    });
$(function(){
    // ハンバーガ―メニュー
    
    // ハンバーガーメニューをクリックした時
    $('.header-hamburger').on('click', function() {
        hamburger();
    });
    // メニューのリンクをクリックした時
    $('.header-navi a').on('click', function() {
        hamburger();
    });

    
    // Inview（画面に表示されたタイミングで処理を実行）
    
    // BBBが選ばれる理由（スライド左）
    $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
        $(this).stop().addClass('slide-left');
        }
    });
    // BBBが選ばれる理由（スライド右）
    $('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
        $(this).stop().addClass('slide-right');
        }
    });
    // 受講生の声（ふきだし）
    $('.inview-balloon').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if(isInView){
        $(this).stop().addClass('balloon');
        }
    });
});

/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
function hamburger() {
    $('.header-hamburger').toggleClass('active');

    if ($('.header-hamburger').hasClass('active')) {
        // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
        $('.header-navi').addClass('active');
    } else {
        // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
        $('.header-navi').removeClass('active');
    }
}
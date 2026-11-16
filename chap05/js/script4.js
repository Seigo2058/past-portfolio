const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        header.classList.add('scrolled'); // 100vhを超えたら色を変更
    } else {
        header.classList.remove('scrolled'); // 100vh以内なら元の色に戻す
    }
});

window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0,0)
});
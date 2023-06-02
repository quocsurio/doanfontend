//hàm giúp ảnh sau khi vào web xuất hiện sau 1s
window.addEventListener('load', function() {
    var images = document.querySelectorAll('img.small-img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].getBoundingClientRect().top < window.innerHeight) {
            images[i].style.opacity = 1;
        }
    }
});
//hàm giúp ảnh khi bị cuộn xuống sẽ dần xuất hiện
window.addEventListener('scroll', function() {
    var images = document.querySelectorAll('img.small-img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].getBoundingClientRect().top < window.innerHeight) {
            images[i].style.opacity = 1;
        }
    }
});
//hàm giúp thanh navbar luôn nằm trên cùng và ko bị cuộn xuống
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('fixed-top');  
    } else {
        navbar.classList.remove('fixed-top');
    }
};

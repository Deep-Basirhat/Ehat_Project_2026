window.addEventListener('DOMContentLoaded', function () {
    window.setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 200);
});

const siteLogo = document.getElementById("site-logo");
siteLogo.addEventListener('click', () => {
    window.location.href = window.location.origin;
});

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', ()=> {
    window.location.href = window.location.origin;
})

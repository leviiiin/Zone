// mobile menu script
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.m-menu').classList.toggle('open');
})
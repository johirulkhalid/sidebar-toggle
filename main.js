var btn = document.querySelector('.menu'),
sidebar = document.querySelector('.sidebar');

btn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active');
})

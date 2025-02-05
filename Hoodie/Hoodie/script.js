const btn=document.getElementById('toggle');

btn.addEventListener('click',()=>{
    document.body.classList.toggle('Dark');
    document.body.classList.toggle('Light');
    if(document.body.classList.contains('Dark')){
        btn.textContent='Light';
    }else{
        btn.textContent='Dark';
    }
});


 
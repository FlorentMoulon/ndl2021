let nbc = 0;

const bouton = document.querySelector('#Banniere');

bouton.addEventListener('mousedown', (e)=>{
    e.stopPropagation();
    nbc++;
    if(nbc >= 10)
    {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
})
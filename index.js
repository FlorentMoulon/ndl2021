let nbc = 0;

const bouton = document.querySelector('#Banniere');
const placeholder = document.querySelector('.placeholder');

bouton.addEventListener('mousedown', (e)=>{
    e.stopPropagation();
    nbc++;
    if(nbc >= 10)
    {
        placeholder.innerHTML = "<video src=\"Rickroll.mp4\" autoplay=\"true\"></video>";
    }
})

let nbc = 0;

const bouton = document.querySelector('#Banniere');
const placeholder = document.querySelector('.placeholder');

bouton.addEventListener('mousedown', (e)=>{
    e.stopPropagation();
    nbc++;
    if(nbc >= 10)
    {
        placeholder.innerHTML = "<video src=\"Rickroll.mp4\" autoplay=\"true\" id=\"video\"></video>";
        const video = document.querySelector('video');
        video.addEventListener('ended', (e)=>{
            placeholder.innerHTML="";
        })
        nbc = 0;
    }
})

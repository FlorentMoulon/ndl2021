const puceSauveteur = document.querySelector('#puceSauveteur');
const boxPuceSauveteur = document.querySelector('#boxPuceSauveteur');

/*************************************************************************/

puceSauveteur.addEventListener('mouseover', (e)=>{
    puceSauveteur.style.color = "rgb(15, 17, 87)";

    boxPuceSauveteur.style.visibility = "visible";
})
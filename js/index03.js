let elementos = document.querySelectorAll("[type=radio]");


for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change',(e)=>{
    let marcado = e.target.value;
   
    if(marcado == "correta"){
        //alert('Você acertou a pergunta');
        let parentNode = e.target.parentNode;
        parentNode.style.backgroundColor = 'green';
        parentNode.style.color= "white";
        let form = document.querySelector('.perguntas');
        form.style.cursor = 'default';
        let els = parentNode.parentNode.querySelectorAll("[type=radio]");
        
        for (let n = 0; n < els.length; n++) {
            els[n].disabled = true;
        }
    }else if(marcado == "incorreta"){
        let parentNode = e.target.parentNode;
        parentNode.style.backgroundColor = 'red';
        parentNode.style.color= "white";
        let form = document.querySelector('.perguntas');
        form.style.cursor = 'default';
        
        let els = parentNode.parentNode.querySelectorAll("[type=radio]");
          
        for (let n = 0; n < els.length; n++) {
            els[n].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.backgroundColor = 'green';
        //alert('Você errou a pergunta');
    }
    })
    
}

let reniciar = document.querySelector('[type=button]');
reniciar.addEventListener('click',()=>{
    location.reload();
})
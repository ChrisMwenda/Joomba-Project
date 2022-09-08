document.addEventListener('DOMContentLoaded',init())

function init(){
  activateFAQ();
  activateForm();
}
/*Form Code Ativation*/
/*
function activateForm(){
    const form=document.querySelector('#signUp')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        addNewUser()
     })
   }

   function addNewUser(){
    const newUser={
        firstName:document.querySelector('#firstName').value,
        lastName:document.querySelector('#lastName').value,
        emailAdress:document.querySelector('#emailAddress').value,
    }

    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    };
    

    fetch("https://mailthis.to/JoombaTeam",configurationObject
    )
    .then(response=>response.json())
    .then(function (object) {
      console.log(object);
    }
    )

    
   }
   */
/*FAQ functions*/
   function activateFAQ(){
    const question= document.getElementsByClassName('question')
    console.log(question)
    const answer= document.getElementsByClassName('answer')
    console.log(answer)
    const faq=document.getElementsByClassName('FAQ-pairBlock')
    for(let i=0;i<faq.length;i++){
        faq[i].addEventListener('click',function(){
            answer[i].style.display='block'
        })
}
    for(let n=0;n<answer.length;n++){
        answer[n].addEventListener('click',function(){
            answer[n].classList.toggle()
    })
}
}
    
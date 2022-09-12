document.addEventListener('DOMContentLoaded',init())

function init(){
  activateFAQ();
  toggleTeamBio();
  toggleUseCase();
}

/*Use Cases*/
function toggleUseCase(){
  const button= document.querySelector('checked')
  console.log(button)
}
  
  /*const body= document.getElementsByClassName('use-case-body')
  console.log(body)

  for (let x=0;x<button.length;a++){
    teamMember[a].addEventListener('click',function(){
     console.log(teamMember[a])
     const bio=document.createElement('div')
     bio.classList.add('bio')
     if(teamMember[a].textContent==='Chris Mwenda'){
     bio.textContent="Chris is an Entrepreneur by birth. WIth a bachelors degree in business and years long experience in real estate, he is the brains behind this organisation "
     }
     if(teamMember[a].textContent==='Willie Mbanya'){
       bio.textContent="Willie is an product manager per excellence.Over the years he ahs been designing and building attractive looking apps. He's the hipster."
       }
     if(teamMember[a].textContent==='Jonathan Munyi'){
        bio.textContent="Jonathan is the architect, orchestrating how things happen behind the scenes. He's the hacker who makes sure Joomba's engines run so smoothly"
         }
     role=document.getElementsByClassName('role')
     role[a].after(bio)
     console.log(bio)
    
           }
          )}*/


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
/*Meet The Team*/
function toggleTeamBio(){
  const  teamMember=document.getElementsByClassName('TeamMemberName')
     /*const bio=document.createElement('p')*/

     for (let a=0;a<teamMember.length;a++){
teamMember[a].addEventListener('click',function(){
 console.log(teamMember[a])
 const bio=document.createElement('div')
 bio.classList.add('bio')
 if(teamMember[a].textContent==='Chris Mwenda'){
 bio.textContent="Chris is an Entrepreneur by birth. WIth a bachelors degree in business and years long experience in real estate, he is the brains behind this organisation "
 }
 if(teamMember[a].textContent==='Willie Mbanya'){
   bio.textContent="Willie is an product manager per excellence.Over the years he ahs been designing and building attractive looking apps. He's the hipster."
   }
 if(teamMember[a].textContent==='Jonathan Munyi'){
    bio.textContent="Jonathan is the architect, orchestrating how things happen behind the scenes. He's the hacker who makes sure Joomba's engines run so smoothly"
     }
 role=document.getElementsByClassName('role')
 role[a].after(bio)
 console.log(bio)

       }
      )}
}

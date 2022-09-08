document.addEventListener('DOMContentLoaded',activateFAQ)
/*function activateForm(){
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
        emailAdress:document.querySelector('#emailAddress').value
    }
    const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "b34811fc23da51c2a327125edbfbc389-us20",
  server: "us20"
});
    const listId = "228ee1bdf5";
    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
          email_address: newUser.email,
          status: "subscribed",
          FNAME: newUser.firstName,
          LNAME: newUser.lastName
          }
        );
      
        console.log(
          `Successfully added contact as an audience member. The contact's id is ${
            response.id
          }.`
        );
      }
      
      run();
   }*/

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
    
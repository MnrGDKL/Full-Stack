const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');

const chatArea = document.querySelector('.chat-area');

const inputElm = document.querySelector('input');
const badge = document.querySelector('.badge');

const num = document.querySelector('.num');
const server = [{title:"Kupon Yağmuru",img:"./img/1.png",action:"Fırsatları Yakala"},{title:"Online Özel",img:"./img/2.png",action:"Fırsatları Yakala"}]


const createTask=(item)=>{
  return`
  <div class="campaign">
  <h3 class="title" >${item.title}</h3>
  <img src=${item.img} alt="campaign1" width="80%" height="100px">
  <h4 class="action">${item.action} ></h4>
  <div class="emojies" > 
      <span class="pensive">&#128532</span>
      <span class="neutral">&#128528</span>
      <span class="smile">&#128516</span>
  </div>
  <div class="feedback" >
      <textarea placeholder="Geri bildirim gönderin" class="textarea" name="Text1" ></textarea>
  
      <button class="submit"> <i class="material-icons"> send</i></button>
  </div> 
  </div>
  `
}

chatArea.innerHTML+=(createTask((server[1])))
// console.log(createTask((server[0])))
// console.log(chatArea);


const submitBtn = document.querySelectorAll('.submit');
const emojies = document.querySelectorAll(".emojies");
console.log(emojies);
const textarea = document.querySelectorAll(".textarea");

chatBtn.addEventListener('click', ()=>{
  popup.classList.toggle('show');
  chatBtn.style.display="none"
  
})

badge.addEventListener('click', ()=>{
popup.classList.toggle('show');
chatBtn.style.display="block"


})
for (let i = 0; i < textarea.length ; i++) {
  
    textarea[i].addEventListener("focus",()=>{
      textarea[i].style.height="70px"
  })
  
  textarea[i].addEventListener("blur",()=>{
    textarea[i].style.height="30px"
  })
  
};

for (let i = 0; i < emojies.length ; i++) {
  emojies[i].addEventListener("click",(e)=>{
  
    if(e.target.classList.contains("pensive")){
      e.target.style.filter="grayscale(0)"
      e.target.style.fontSize="larger"
      e.target.nextElementSibling.style.filter="grayscale(1)"
      e.target.nextElementSibling.style.fontSize="medium"
      e.target.nextElementSibling.nextElementSibling.style.filter="grayscale(1)"
      e.target.nextElementSibling.nextElementSibling.style.fontSize="medium"
      
    };
    if(e.target.classList.contains("neutral")){
      e.target.style.filter="grayscale(0)"
      e.target.style.fontSize="larger"
      e.target.nextElementSibling.style.filter="grayscale(1)"
      e.target.nextElementSibling.style.fontSize="medium"
      e.target.previousElementSibling.style.filter="grayscale(1)"
      e.target.previousElementSibling.style.fontSize="medium"
    }
    if(e.target.classList.contains("smile")){
      e.target.style.filter="grayscale(0)"
      e.target.style.fontSize="larger"
      e.target.previousElementSibling.style.filter="grayscale(1)"
      e.target.previousElementSibling.style.fontSize="medium"
      e.target.previousElementSibling.previousElementSibling.style.filter="grayscale(1)"
      e.target.previousElementSibling.previousElementSibling.style.fontSize="medium"
    }
  })

};






for (let i = 0; i < submitBtn.length  ; i++){

submitBtn[i].addEventListener("click",(e)=>{
  console.log(e.target);
  e.target.parentElement.parentElement.innerHTML=`<p class="response">Geri bildiriminiz için teşekkürler</p>`
})

}

num.innerText=server.length

import './index.css';

const modalWindow = document.querySelector('.cookie-consent');
const btn = document.querySelector('.cookie-consent__button')

// if(localStorage){
//   console.log(localStorage);
//   modalWindow.remove(); 
// }  

const storageItem = btn.addEventListener("click", (event) => {
    
    modalWindow.remove();                             
    
    localStorage.setItem('storageItem',true);

  });
  let a = localStorage.getItem('storageItem');
console.log(a);
if(a){
  modalWindow.remove()
} else {
  localStorage.clear()
}


  
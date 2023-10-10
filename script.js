'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const showModal = document.querySelectorAll('.show-modal');


for(let i=0;i<showModal.length;i++)
{
    showModal[i].addEventListener('click',function(){
        console.log('Button Clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })

}
const btncloseModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click',btncloseModal);
overlay.addEventListener('click',btncloseModal);

document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
         btncloseModal();
    }
})
const Btn = document.querySelector(".mark-all");

const unread = document.querySelectorAll(".unread");

const countinfo = document.querySelector('.number');


function removeDots(elem){
    const dot = elem.querySelector('.dot');
    dot.remove();
}

unread.forEach(elem =>{
    elem.addEventListener('click', ()=>{
        elem.classList.remove('unread');
        removeDots(elem);
        count--;
        manageCount(count);
        unread = document.querySelectorAll('unread')
    })
})

Btn.addEventListener("click", () =>{
    countinfo.textContent = 0;
    unread.forEach(elem =>{
        elem.classList.remove('unread');
        removeDots(elem);
    })
});
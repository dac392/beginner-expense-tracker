let item_count = 0;
const table = document.querySelector(".tracking-table");

const add_empt_msg = function(){
    if(item_count === 0){
        const empty_msg = `<li class="empty">No expenses being tracked</li>`;
        table.insertAdjacentHTML("beforeend", empty_msg);
    }
}

const track_new_expense = function(str){
    if(item_count === 0){
        const empt = document.querySelector(".empty");
        empt.remove();
    }

    table.insertAdjacentHTML("beforeend", str);
    item_count++;
}

const send = function(event){
    event.preventDefault();
    let html = ``;
    const info = document.querySelectorAll("input");
    for(let i = 0; i < info.length; i++){
        if(i === 2){
            html+=`<li class="list">$${info[i].value}.00</li>`;
        }else{
            html+=`<li class="list">${info[i].value}</li>`;
        }
        info[i].value="";
    }
    track_new_expense(html);
    
}
const remove = function(event){
    event.preventDefault();
    if(item_count !== 0){
        for(let i = 0; i < 3; i++){
            table.lastChild.remove();
        }
        item_count--;
        add_empt_msg();
    }

}

add_empt_msg();
const btn = document.querySelector(".track-expense");
const red_btn = document.querySelector(".remove-expense");
btn.addEventListener("click", send);
red_btn.addEventListener("click",remove);





let elBtns = document.querySelectorAll(".box__btn");
let itemArr = document.querySelectorAll(".box__item");
let elList = document.querySelector(".result");
let arr = [{...itemArr}];
let newArr = [];
let subtotal = 0;
let tax = 0;
let total = 1;


function sort (e){
    elBtns.forEach(item => {
        item.addEventListener("click", btn =>{
           let targetParent =  btn.target.parentElement.parentElement.parentElement;
           newArr.push(targetParent);
           render(newArr);
        })
    })
}
sort();

function render(obj){

    for(i in obj){
        let eltext = obj[i].querySelector(".box__desc");
        let elSum = obj[i].querySelector(".box__sum");
        let elImg = obj[i].querySelector(".box__img").src;
        elList.innerHTML = elList.innerHTML + `<li class="animate__animated animate__jackInTheBox box__result-item  margin-bottom p-4"><button class="box__close mb-3"><i class="bi bi-trash"></i></button><div class="d-flex  justify-content-between"><div class="box__img-box"><img class="box__img" src="${elImg}" alt="food-img"></div><div class="box__texts-box"><p class="box__desc">${eltext.textContent}</p><div class="d-flex flex-column"><span class="box__sum">${elSum.textContent}</span></div></div></div></li>`;

        //totaling
        console.log();
        let total = elSum.textContent.slice(1,);
        tax += total * 0.13;
        subtotal += +total;
        total = tax + subtotal;
    
        //variables totaling
        let elSUbtotal = document.querySelector(".sub-box__total");
        let elTax = document.querySelector(".box__total-tax");
        let elTotal = document.querySelector(".box__total-all");

        //add value to totaling
        elSUbtotal.innerHTML = `$${subtotal.toFixed(2)}`;
        elTax.innerHTML = `$${tax.toFixed(2)}`;
        elTotal.innerHTML = `$${total.toFixed(2)}`;

        //clear arrr
        newArr = [];
    } 
     
}

elList.addEventListener("click", e => {
    if(e.target.classList.contains('box__close')) {
        let elRemovedItem =e.target.parentElement;
        elList.removeChild(elRemovedItem);
    }
})



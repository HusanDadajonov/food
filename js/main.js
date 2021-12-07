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
        elList.innerHTML = elList.innerHTML + `<li class="pt-5 box__result-item  mb-5">
    <div class="d-flex justify-content-between">
      <div class="box__img-box">
        <img class="box__img" src="${elImg}" alt="food-img">
      </div>
      <div class="box__texts-box">
          <button class="box__close">x</button>
          <p class="box__desc">${eltext.textContent}</p>
          <div class="d-flex flex-column">
            <span class="box__sum">${elSum.textContent}</span>
          </div>
      </div>
    </div>
    </li>`;
    let total = elSum.textContent.slice(1,);
    tax += total * 0.13;
    subtotal += +total;
    total = tax + subtotal;
    let elSUbtotal = document.querySelector(".sub-box__total");
    let elTax = document.querySelector(".box__total-tax");
    let elTotal = document.querySelector(".box__total-all");
    elSUbtotal.innerHTML = `$${subtotal.toFixed(2)}`;
    elTax.innerHTML = `$${tax.toFixed(2)}`;
    elTotal.innerHTML = `$${total.toFixed(2)}`;
    newArr = [];
    } 
     
}

// cart 
const cart = document.querySelector('.cart');
const sideBar = document.querySelector('.sidebar-container')
const cartClose = document.querySelector('.sidebar-close');
cart.addEventListener('click',() =>{
    sideBar.classList.add('show-sidebar');
});
cartClose.addEventListener('click',() =>{
    sideBar.classList.remove('show-sidebar');
});

// sidebar
const cartBtn = document.querySelectorAll('.cart-btn');
cartBtn.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        getSideBar(e);
    })
});
const getSideBar = (e) =>{
    const cartValue = document.querySelector('.cart-value');
    const PushInSidebar = document.querySelector('.sidebar')
    const targetTitle = e.currentTarget.parentElement.nextElementSibling;
    let targetPRice = e.currentTarget.parentElement.nextElementSibling.nextElementSibling;
    const targetSrc = e.currentTarget.previousElementSibling.src;
    const target = e.currentTarget.parentElement.parentElement;
    const meEle = document.createElement('div');
    meEle.classList.add('sidebar-data');
    meEle.innerHTML = `
    <img class="sidebar-img" src="${targetSrc}" alt="">
    <div class="sidebar-desc">
        <p class="sidebar-title">${targetTitle.textContent}</p>
        <p class="sidebar-price">${targetPRice.textContent}</p>
        <input type="number" value="1" name="" id="" class="sidebar-input">
    </div>
    <i class="fa-solid fa-trash trash-btn"></i>
    `
    PushInSidebar.appendChild(meEle);
    // update price
    const updatePRice = () =>{
        targetPRice = parseFloat(targetPRice.textContent);
        let totalPrice = document.querySelector('.total-price');
        totalPrice.textContent = targetPRice + parseFloat(totalPrice.textContent);
    }
    updatePRice();
    // Dynamic input controls
    const inputs = document.querySelectorAll('.sidebar-input');
    inputs.forEach((input) =>{
        input.addEventListener('change',(e) =>{
            let totalPrice = document.querySelector('.total-price');
            totalPrice.textContent = targetPRice + parseFloat(totalPrice.textContent);
        })
    })
    // dynamic remove button add event listener
    const removeBTn = meEle.querySelectorAll('.trash-btn');
    removeBTn.forEach((btn) =>{
        btn.addEventListener('click',(e)=>{
            const targetItem = e.currentTarget.parentElement;
            PushInSidebar.removeChild(targetItem);
            let totalPrice = document.querySelector('.total-price');
            totalPrice.textContent = parseFloat(totalPrice.textContent) - targetPRice;
            console.log(totalPrice.textContent);
        })
    });

};

// buy button
const buyBtn = document.querySelector('.buy-btn');
buyBtn.addEventListener('click',() =>{
    const leangth = sideBar.querySelectorAll('.sidebar-data');
    if(leangth.length >= 1){
        alert("Your Order Plached Sucessfully");
    }else{
        alert("Add Something On Your Cart")
    }
});
//  update price
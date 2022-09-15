

const main = () => {

    // fetch text box
    const textBox = document.querySelector(".text-field > input");

    // fetch add button
    const addBtn = document.querySelector(".text-field > i");

    // fetch delete icon
    const deleteBtn = document.querySelectorAll(".items-container i");

    // fetch inner container
    const mainContent = document.querySelector("#inner-container-bottom > p");

    // fetch items container
    let itemsContainer = document.querySelector("#inner-container-bottom");

    const itemDiv = document.querySelector("#inner-container-bottom > div");
   
    let itemList = [];
    let i=0;

    //add event listener
    addBtn.addEventListener("click",function(){
    
        mainContent.classList.add("hide");

        itemList.push(textBox.value);
        console.log(itemList)

        itemsContainer.innerHTML +=
            `<div class="item-row grid grid-col-2">
                <h3>${itemList[i++]}</h3>
                <i class="fa-solid fa-trash-can"></i>
            </div>`      
        
   });

   

//    deleteBtn[0].addEventListener("click",function(){
        
//    });
}
main();
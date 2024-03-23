import img_pizza from "../images/52de36fb1dce3362937f51186687869e.jpeg";

const inputsCheckbox = document.querySelectorAll(".custom-checkbox input");
const totalAmount = document.querySelector(".total-amout .amount");
const orderBtn = document.querySelector(".submit-orders");


const addIngredients = (checkboxes) => {
  const nodeArray = Array.from(checkboxes);


  for (let node of checkboxes) {
    node.addEventListener("click", (event) => {
      event.target.parentNode.classList.toggle("active");
      const index = nodeArray.indexOf(event.target);
      calculateOrder();
    });
  }
};
addIngredients(inputsCheckbox);


const calculateOrder = () => {
  const ingredients = document.querySelectorAll(".custom-checkbox.active");

  const startPrice = 0,
    ingredientsPrice = ingredients.length * 10;

  totalAmount.innerHTML = `${startPrice + ingredientsPrice}$`;
};





orderBtn.addEventListener('click', () => {

  inputsCheckbox = false;
  for(let i = 0; ;) {
    if(i > 2) {  
      if(inputsCheckbox) {  
    alert("You can't choose so many!");
  }
    }
  }
});



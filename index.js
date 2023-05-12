//This is current chart data
myArray = [1,2,3,4]

// Removing data from local storage
//localStorage.removeItem('earnedPoints');

// Check if the key exists in local storage. If it doesn't set it and assign it 0.
if (localStorage.getItem('earnedPoints') == null) {
  console.log('The key does not exist in local storage.');
  localStorage.setItem('earnedPoints', 0);
} else {
  let earnedPoints = localStorage.getItem('earnedPoints');
  console.log('earned = ' + earnedPoints)
}

//Create DOM connection to html element where earnedPoints will be displayed
const points = document.getElementById("pointsEarned");
points.innerText = localStorage.getItem('earnedPoints');

//render_chart()

//MONTHLY INCOME SECTION
const monthly_income = document.querySelector('#monthly_income');
const monthly_income_div = document.querySelector('#monthly_income_div');

monthly_income.addEventListener('blur', function() {
  input_becomes_slider(monthly_income, monthly_income_div);
});

//MONTHLY SPEND SECTION
const monthly_spend = document.querySelector('#monthly_spend');
const monthly_spend_div = document.querySelector('#monthly_spend_div');

monthly_spend.addEventListener('blur', function() {
  input_becomes_slider(monthly_spend, monthly_spend_div);
});

//CURRENT INVESTMENTS SECTION
const current_investments = document.querySelector('#current_investments');
const current_investments_div = document.querySelector('#current_investments_div');

current_investments.addEventListener('blur', function() {
  input_becomes_slider(current_investments, current_investments_div);
});

//CREATE SLIDER_CREATOR function
function input_becomes_slider(input_box, input_box_div){
  const inputValue = input_box.value;
  //Create Slider
  const slider = document.createElement('input');
  slider.className = "slider"
  slider.type = 'range';
  slider.min = 0;
  slider.max = inputValue * 2;
  slider.value = inputValue;
  //Create output
  const sliderOutput = document.createElement('output');
  sliderOutput.className = "slider-output";
  sliderOutput.id = "sliderValue";
  sliderOutput.innerHTML = slider.value;

  //remove input box and create slider in the following two lines
  input_box.remove();
  input_box_div.appendChild(slider);
  input_box_div.appendChild(sliderOutput);
  // Add event listener to update output when slider value changes
  slider.addEventListener("input", function() {
    sliderOutput.innerHTML = this.value;
});
}

//Collapsible
const coll = document.getElementsByClassName("collapsible");
console.log(coll)
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// //plotly chart
// function render_chart(){
//   var trace1 = {
//     x: myArray,
//     y: [10, 15, 13, 17],
//     type: 'scatter'
//   };
  
//   var trace2 = {
//     x: [1, 2, 3, 4],
//     y: [16, 5, 11, 9],
//     type: 'scatter'
//   };
  
//   var data = [trace1, trace2];
  
//   Plotly.newPlot('plotly_chart', data);
// }

function tooltip_popup(popup_id) {
  var popup = document.getElementById(popup_id);
  popup.classList.toggle("show");
}

//Check local storage to determine which advanced configs have been unlocked
if (localStorage.getItem('investment_expected_return_unlocked') === 'true') {
  const input = document.getElementById('investment_expected_return');
  input.disabled = false;
}

if (localStorage.getItem('expected_inflation_unlocked') === 'true') {
  const input = document.getElementById('expected_inflation');
  input.disabled = false;
}

if (localStorage.getItem('expected_retirement_unlocked') === 'true') {
  const input = document.getElementById('expected_retirement');
  input.disabled = false;
}

if (localStorage.getItem('life_expectancy_unlocked') === 'true') {
  const input = document.getElementById('life_expectancy');
  input.disabled = false;
}
myArray = [1,2,3,4]
render_chart()

//Create DOM connection
const monthly_income = document.querySelector('#monthly_income');
const monthly_income_div = document.querySelector('#monthly_income_div');

const resultDiv = document.getElementById('result');

monthly_income.addEventListener('blur', function() {
  const inputValue = monthly_income.value;
  console.log('printed! ' + inputValue);
  const newElement = document.createElement('p');
  newElement.textContent = `You entered: ${inputValue}`;

  //Create slider
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = inputValue - 10000;
  slider.max = inputValue + 10000;
  slider.value = inputValue;
  monthly_income.remove();
  monthly_income_div.appendChild(slider);
});

//Collapsible
const coll = document.getElementsByClassName("collapsible");
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

//user_data_input
const monthly_spend = document.querySelector('#monthly_spend');

monthly_spend.addEventListener('blur', function() {
  const inputValue = Number(monthly_spend.value);
  console.log('monthly_spend ' + inputValue);
  myArray.pop();
  myArray.push(inputValue);
  console.log(myArray)
  render_chart();
})

//plotly chart
function render_chart(){
  var trace1 = {
    x: myArray,
    y: [10, 15, 13, 17],
    type: 'scatter'
  };
  
  var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter'
  };
  
  var data = [trace1, trace2];
  
  Plotly.newPlot('plotly_chart', data);
}


function tooltip_popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


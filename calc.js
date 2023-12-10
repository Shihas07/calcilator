
// let total='';


// function functionClick(){

   
//    const totalincome=document.getElementById("input-income").value;
//    // console.log(totalincome);
//    total =totaltotalincome;
//    console.log(total);

// }

  

 
let total=0;

let final=0;

let myChart;

function functionClick(e) {
   const totalIncome = document.getElementById("input-income").value;
  const error2= document.getElementById('error-2');
  error2.style.color="red";
const categories=document.getElementById("catgorey-1").value;
const error1 = document.getElementById("error-1");
error1.style.color="red";
// const income = document.getElementById("input-income").value;
const incomemax=document.getElementById("total-1");

if(!categories ||categories==undefined)  {
error1.innerHTML = "invalid"

      
}
else{
   error1.innerHTML = "";
}
    if(!totalIncome || totalIncome==""){
    error2.innerHTML ="invalid"
}
else{
   error2.innerHTML ="";
}
// if(error1 || error2){
//    e.preventdefault
//    return;
// }
  
  
   const numericInput = parseFloat(totalIncome);

   if (!isNaN(numericInput)&& categories!==""&&isNaN(categories) ){
      total = total + numericInput;
      
      incomemax.innerHTML = total;

      document.getElementById("input-income").value = "";

   }

       if(categories!=="" ){

           document.getElementById("catgorey-1").value ="";
             
       }

   if(totalIncome.value!=='' && categories.value!==''&&(categories!=="")&&(!isNaN(numericInput)&&isNaN(categories))){
      const tableBody = document.getElementById('js-table-income');
      const newRow = tableBody.insertRow();
      const cellCategory = newRow.insertCell(0);
      const cellExpense = newRow.insertCell(1);

      cellCategory.innerHTML = categories;
      cellExpense.innerHTML = totalIncome;

   }

   // const balance = total - final;
   // document.getElementById("balance").innerHTML = balance;
   updateBalance();
   console.log(updateBalance())
   updateChart();
}

   
    

      function functionexpense(){
            
        const values= document.getElementById("details").value;
            const error3=document.getElementById("error-3");
             error3.style.color="red";

         const  expense=document.getElementById("input-expense").value;
            const error4=document.getElementById("error-4");
            error4.style.color="red";

            const expenseMax=document.getElementById("expensebtn");

            if(!values || values==undefined ){

               error3.innerHTML="invalid"
            }
            else{
               error3.innerHTML="";
            }
          
              if(!expense || expense==""){

               error4.innerHTML="invalid";
              }
               else{
                  error4.innerHTML="";
               }




               const numericInput = parseFloat(expense);

              
               

               if (!isNaN(numericInput)&& values!==""&&isNaN(values)){
                  final = final + numericInput;
                  
                  expenseMax.innerHTML = final;


                  document.getElementById("input-expense").value = "";

                  updateBalance()
               } 
               
               
               if(values!==""){
                  document.getElementById("details").value = "";
               }
                    


               if(expense.value!=='' && values.value!==''&&(values!=="")&&(!isNaN(numericInput)&&isNaN(values))){
                  const tableBody = document.getElementById('js-table-expense');
                  const newRow = tableBody.insertRow();
                  const cellCategory = newRow.insertCell(0);
                  const cellExpense = newRow.insertCell(1);
            
                  cellCategory.innerHTML = values;
                  cellExpense.innerHTML = expense;

                  updateBalance();
            
               }


               updateBalance();
               updateChart();
            }
            
            function updateBalance() {
                const balance = total - final;
                document.getElementById("balance").innerHTML = balance;
            }
         
               
  
//         }
//       }
//     }
//   });

//   updateBalance();
   
   // }

     ///----pi-----/////

    

// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//    type: 'doughnut',
//    data: {
//       labels: ['INCOME', 'EXPENSE', 'BALANCE'],
//       datasets: [{
//          data: [total, final, total - final],
//          backgroundColor: ['green', 'red', 'blue'],
//       }]
//    },
//    options: {
//       // add your options here
//    }
// });



     // ... Your existing code ...

        // ... Your existing code ...

          

        // Declare myChart as a global variable

function updateChart() {
  // Destroy the existing chart if it exists
  if (myChart) {
    myChart.destroy();
  }

  const ctx = document.getElementById('myChart');

  myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['income', 'expense', 'balance'],
      datasets: [{
        label: '# of Votes',
        data: [total, final, total - final],
        borderWidth: 1,
        backgroundColor: ['green', 'red', 'blue'],
      }]
    },
    options: {
      // You can add more options here if needed
    }
  });
}

// ... Your other functions ...

// Call updateChart initially to render the initial state of the chart
updateChart();

    









              

      
      
   

//     1  ///----maxelement in array----

//     const arr=[1,2,3,9]

//     function findmax(){
//      let max=arr[0]

//        for(let i=0;i<arr.length;i++){
//           if(arr[i]>max){
//             max=arr[i]
//           }
//        }

//        return max;
//     }

//     const max1=findmax();

// console.log(max1);


      

// 2


// let a="hello";
// // let b ;
// function reverse(){
//       a=a.split('').reverse().join('');
// }
//    reverse();
//    console.log(a)




3     //---ascending order of an arrray----////


// let arr=[1,2,6,4,9,2,]

//   function order(){

//     arr.sort(function(a,b) {

//     return a - b;
//     });
//   }

//   order();
//   console.log(arr);



///----nth numbers sun even numbers-----

          // 4 

          // let n;

          // function sum(){

          //     let result=0;
          //       for(let i=0;i<=n;i++){
          //         if(i%2==0){
          //           result += i ;
          //         }
          //       }
          //       return result;
          // }


              
          // n=10;
          // sum();
              
          //     console.log(sum());




      //     5   


             

      //   function Prime(number) {
      //     if (number <= 1) {
      //         return false;
      //     }
      
      //     for (let i = 2; i <= Math.sqrt(number); i++) {
      //         if (number % i === 0) {
      //             return false;
      //         }
      //     }
      
      //     return true;
      // }
      
      
      // let n = 5;
      // if (Prime(n)) {
      //     console.log(n + " is a prime number.");
      // } else {
      //     console.log(n + " is not a prime number.");
      // }
      



         6 ///---secondlargest number---//////


               
          // 6

          // let arr=[1,2,5,6,9,8]

          //   function secondlargestnum() {
          //        let max= arr[0]
          //        let secondlargest=arr[0]
                   
          //       for(let i=1;i<arr.length;i++){
          //           if(arr[i] > max){
          //               secondlargest=max;
          //             max=arr[i];

          //           }

          //          else if (arr[i] > secondlargest && arr[i] !== max) {
          //           secondlargest = arr[i];
          //       }


          //   }
          //    return secondlargest

          // }
          // console.log(secondlargestnum());




////--------duplication--//////
          // 7

          // let arr = [1, 2, 2, 3, 9, 8, 3, 1];

          // function removeDuplicates(array) {
          //     let uniqueArray = [];
              
          //     for (let i = 0; i < array.length; i++) {
          //         if (!uniqueArray.includes(array[i])) {
          //             uniqueArray.push(array[i]);
          //         }
          //     }
          
          //     return uniqueArray;
          // }
          
          // let result = removeDuplicates(arr);
          // console.log(result);
               

          8  //---sum of elements inarray--///


               
//     const arr=[1,2,3,4,10]

//     const newarr=  arr.reduce((total,values)=>total+values,0)
  
//           console.log(newarr)j




  9   ///----prime number-----////


//   let arr=[1,2,3,4,5]

//   function prime(number){
//     if(number<=1){
//       return false
//     }
//        for(let i=2;i<arr.length;i++){
//             if(number%i===0){
//               return false;
//             }
//             return true;
//        }

//   }
  

//    const newarr =    arr.filter(number=>prime(number));

//          console.log(newarr)


    // 10  ----max-min-----

    // let arr=[1,2,3,4,5]
    // let max=arr[0]
    // let min=arr[0]

    //   for(i=1;i<arr.length;i++){
    //    if(arr[i]>max){
    //      max=arr[i]
         
    //    }
    //    else{
    //      min=arr[i]
    //    }
    //   }
    //         console.log(max)
    //         console.log(min)
     


      // 11  ///----factorial of number---////

      //   function fact(num){
      //     let result=1
      //      for(let i=2;i<=num;i++){
      //        result *=i;
      //      }
      //      return result
      //  }
      //  console.log(fact(10))


           
    15  //-----prime of sum----////


  //     let arr=[1,2,3,4,5]

  //     function prime(num){
  //      if(num<=1){
  //        return false;
  //      }
  //       for (let i=2;i<=Math.sqrt(num);i++){
  //        if(num%i===0){
  //          return false;
  //        }
         
           

  //        }
  //        return true;
  //       }
          
      


  //     function sumarr(arr) {
  //      let sum = 0;
  //      for (let num of arr) {
  //          if (prime(num)) {
  //              sum += num;
  //          }
  //      }
  //      return sum;
  //  }
    //  console.log(sumarr(arr));
   

  //  19 /---sum of dgit---////
  
  //     function sumOfDigits(s){
  //       return s.toString().split('').reduce((acc,cur)=>{return   acc+parseInt(cur)},0)
        
  // }

  //     console.log(sumOfDigits(12))
         


// 18
//      //-----union---///

//       let values = []

//             function union(a,b){
                
//                     a.filter((cur)=> {
//                       if(b.includes(cur)){
//                         values.push(cur)
//                       }
//                       })
//                       return values
                    
//                   }
            
//             console.log(union([1,3],[1,2,6,3]))



    12        ///---pal----////

    // function pal(s){
    //     return s==s.split('').reverse().join('')?"pal":"notpal"

    // }
    //  console.log(pal("cac"))

  // 16   ----sumofmultiple-of3--////

  //   function sumMultiplesOf3And5(limit) {
  //     let sum = 0;
    
  //     for (let i = 1; i < limit; i++) {
  //       if (i % 3 === 0 || i % 5 === 0) {
  //         sum += i;
  //       }
  //     }
    
  //     return sum;
  //   }

  //   console.log(sumMultiplesOf3And5(10));


  14 //---fibnocci----////

  // function fibnocci(n){
  //   let a=[0,1]
  //   for(let i=2;i<n;i++){
  //     a.push(a[i-1]+a[i-2]);
  //   }
  //   return a;

  // }
  // console.log(fibnocci(10));

  // 17

  //     // sum of odd an even 


      
  //   function sum(a){
  //     let  odd=0
  //     let even=0

  //     for(let i=1;i<a;i++){
  //       if(i%2==0){
  //         even+=i;
  //       }
  //       else{  odd+=i;
  //       }
      
  //     }
  //     return{even,odd};
      
  //   }
  //     console.log(sum(10));


    


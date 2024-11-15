<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
</head>
<body>
    <h1>Hello JS</h1>
    <button onclick="changeColurh1()">Change Cholur</button>

    <script>
        let btn = document.querySelector("button");
        // Name function
        // function changeColur(){
        //     let h1 = document.querySelector("h1");
        //     h1.style.color="red"

        // }

        // arrow function
        let changeColurh1 =()=>{

            let h1 = document.querySelector("h1");
            h1.style.color="red"
        }
      // anonymous function
        // function(){

        // }
        // return function
        function addTowNunm(){
            let a = 10;
            let b = 5;
            let sum = a + b ;
            return sum;
        }
        // console.log(addTowNunm);

    </script>

</body>
</html>

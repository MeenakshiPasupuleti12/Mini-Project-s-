let one=document.getElementById("one");
let two=document.getElementById("two");
let result=document.getElementById("result");


function add()
{
    event.preventDefault()
    let first=parseInt(one.value);
    let second=parseInt(two.value);
    let sum=first*second;
    console.log(sum);


    result.innerText=sum;
}

// function add()
// {
//     event.preventDefault()
//     let first=parseInt(one.value);
//     let second=parseInt(two.value);
//     let sum=first-second;
//     console.log(sum);


//     result.innerText=sum;
// }
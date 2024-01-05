
// Function the rest operator 

function addNumbers (greetingName, ...numbers) {
    let total = 0;
    for (index in numbers ) {
        total = total + numbers [index]
    }
    return `the name is ${greetingName}: and the total is ${total}`;
}

const newTotal = addNumbers ("jazz", 2, 42, 98, 322, 2323, 432)
 console.log(newTotal);

 // function the rest operator example 2

 function getTotal (name, subject, ...grandTotal) {
    let total = 0 ;
    for (index in grandTotal) {
          total = total + grandTotal [index]
    }

    return (
        `name of the student: ${name}, 
        subject of the study: ${subject},
        grand Total of the mark ${total}`
    )
 }

 const newGrandTotal= getTotal("jazz", "maths", 34, 23, 232, 233)
 console.log(newGrandTotal);
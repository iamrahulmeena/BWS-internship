// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById("name"); // Fill this in 
const age = document.getElementById("age"); // Fill this in.
const dog_years = document.getElementById("dog_years"); // Fill this in. 

// Step 2. Set the values.

name.innerText = "jazz"
age.innerText = "3"
dog_years.innerText = "2 years"

// Set `name` and `age` in here

function showProfile (name, age, ...dogYear) {
    let dog_year = 0;
    for (index in dogYear) {
        dog_year = dog_year + dogYear [index]
    }

    return (
        
        ` <br> <br> Hello my name is ${name}, and i am ${age} years old. In dog years I would be ${dog_year} years old.`
    )
}

const newProfile = showProfile("jazz", 3, 1,22,33)
console.log(newProfile)
document.write(newProfile)


function showDogYears(age) {
  // Step 3. Cast `age` as a number
  dog_years.innerText = age * 7;
  return age * 7
}

// Step 4. Set the parameter of showDogyears()

const newShowDogYears = showDogYears(10)
console.log(newShowDogYears)







// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 


const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.add("real-input")
})



//  the step 5 is very simple...🤩
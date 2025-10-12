

const budgetInput = document.querySelector("#budget");
const calculateBtn = document.querySelector("#Calculate");
const clearBtn = document.querySelector("#Clear");
const addEntryBtn = document.querySelector("#Entry");

const mealSections = {
    breakfast: {
        element: document.querySelector("#Break"),

        calorieInput: document.querySelector("#cal1"),

getCalories() { return this.calorieInput || 0; }

    },
    lunch: {
        element: document.querySelector("#lunc"),
        calorieInput: document.querySelector("#cal2"),
        getCalories() { return parseInt(this.calorieInput.value) || 0; }
    },
    dinner: {
        element: document.querySelector("#Din"),
        calorieInput: document.querySelector("#cal3"),
        getCalories() { return parseInt(this.calorieInput.value) || 0; }
    },
    snacks: {
        element: document.querySelector("#Snak"),
        calorieInput: document.querySelector("#cal4"),
        getCalories() { return parseInt(this.calorieInput.value) || 0; }
    },
    exercise: {
        element: document.querySelector("#Ex"),
        calorieInput: document.querySelector("#cal5") ,
        getCalories() { return parseInt(this.calorieInput.value) || 0; }
    }
};

let consumedCalories = 0;
let burnedCalories = 0;

// Event Listeners
addEntryBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector("#options");
    
    switch(selectedOption) {
        case "Breakfast":
            mealSections.breakfast.element.style.display = "block";
            consumedCalories += mealSections.breakfast.getCalories();
            break;
        case "Lunch":
            mealSections.lunch.element.style.display = "block";
            consumedCalories += mealSections.lunch.getCalories();
            break;
        case "Dinner":
            mealSections.dinner.element.style.display = "block";
            consumedCalories += mealSections.dinner.getCalories();
            break;
        case "Snacks":
            mealSections.snacks.element.style.display = "block";
            consumedCalories += mealSections.snacks.getCalories();
            break;
        case "Exercise":
            mealSections.exercise.element.style.display = "block";
            burnedCalories += mealSections.exercise.getCalories();
            break;
    }
});




calculateBtn.addEventListener('click', () => {
    const budget = budgetInput.value;
    const netCalories = consumedCalories - burnedCalories;
    const difference = budget - netCalories;
    
    const resultElement = document.querySelector("#res");
    const resultContainer = document.querySelector("#result");
    const consumedDisplay = document.querySelector("#consumed_calories");
    const burntDisplay = document.querySelector("#Burned_calories");
    const budgetDisplay = document.querySelector("#total_budget");
    
    resultContainer.style.display = "block";
    
    // Update display values
    burntDisplay.textContent = `${burnedCalories} Calories burned`;
    consumedDisplay.textContent = `${consumedCalories} Calories consumed`;
    budgetDisplay.textContent = `${budget} Calories budgeted`;
    
    // Calculate and display result
    if (netCalories < budget) {
        resultElement.textContent = `${difference} Calories Remaining (Deficit)`;
        resultElement.style.color = "green";
    } else if (netCalories > budget) {
        resultElement.textContent = `${Math.abs(difference)} Calories Over Budget (Surplus)`;
        resultElement.style.color = "red";
    } else {
        resultElement.textContent = "Perfectly on budget!";
        resultElement.style.color = "blue";
    }
});

clearBtn.addEventListener('click', () => {
    consumedCalories = 0;
    burnedCalories = 0;

    

    //Object.values() converts the object into array

    Object.values(mealSections).forEach(section => {
        if (section.element) section.element.style.display = "none";
    });
    
    document.querySelector("#result").style.display = "none";
    
    document.querySelector("#options").selectedIndex = 0;
});


//   100 cal

//   breakfast -  30 
//   dinner - 40

//   exercise - 70 
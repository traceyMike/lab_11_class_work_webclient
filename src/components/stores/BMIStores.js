// storing data for app needs
// data that needs to be shared between components

import { defineStore } from 'pinia' // import defineStore function from Pinia library
import { ref, computed } from 'vue' // import ref and computed from Vue-ref to create reactive references to data and computed to define computed properties

// defineStore is a function you call to define what data is stored in the store
// the arguments to the function define your data

// exporting means make this avaiable to other code that
// needs to use the store
// here we are making useBMIStore available to other parts of code
export const useBMIStore = defineStore('bmi', () => { // define Pinia store bmi-defineStore function allows specification of state, actions, and getters for the store
    const userHeight = ref(0); // ref for userHeight
    const userWeight = ref(0); // ref for userWeight

    

    //use a computed property - calculates BMI
    const calculatedBmi = computed( () => { // computed property-recalculates when userheight or userWeight changes
        if (userHeight.value > 0 && userWeight.value > 0) { // formula for bmi is wieght divided by square of height
            const bmi = userWeight.value / (userHeight.value * userHeight.value);
        // round 2 decimal places
        return Math.round(bmi * 100) / 100 // multiply bmi by 100-decimal shifts two places to the right
        } // math round to round to nearest whole number - divide by 100-shift decimal back two places to the right
        return null; // if inputs are invalid return null
    })

    // actions to update the state (create controlled state updates)
    const updateHeight = (height) => { // assign height argument to userHeight.value
        userHeight.value = height; // used to change height in store
    }

    const updateWeight = (weight) => {
        userWeight.value = weight;
    }

    
    // make sure you return an object with all data that needs
    // to be accessible to components
    // return data to the store
    return {
        userHeight,
        userWeight,
        calculatedBmi,
        calculateBMI,
        updateHeight,
        updateWeight
    }
});
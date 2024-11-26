// storing data for app needs
// data that needs to be shared between components

import { defineStore } from 'pinia'
import { ref } from 'vue' 

// defineStore is a function you call to define what data is stored in the store
// the arguments to the function define your data

// exporting means make this avaiable to other code that
// needs to use the store
// here we are making useBMIStore available to other parts of code
export const useBMIStore = defineStore('bmi', () => {

    const userHeight = ref(0)

    // make a ref for userWeight

    //use a computed property
    const calculatedBmi = computed( () => {
        return userHeight.value
    })
    
    // make sure you return an object with all data that needs
    // to be accessible to components
    return {
        userHeight
    }



})
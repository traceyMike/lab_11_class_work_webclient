<script setup>
import { ref } from 'vue' // import ref function from vue
import { useBMIStore } from './stores/BMIStores'; // import useBMIStore function
import { storeToRefs } from 'pinia'; // used when need to unwrap reactive references in a Pinia store

const BMIStore = useBMIStore() // access the BMI store

</script>

<template>
  <form @submit.prevent="calculateBMI"> <!--form element-ensure default form submission is prevented-instead call calculateBMI method when user submits form-->
  <!-- html here, things the user sees -->
   <!--can be updated from the scripts state-->
   <!--can tell the code the user has done something-->
<h2>Enter your height and weight</h2>

<!--Bind inputs directly in the store-->
<!--bind height input to userHeight property in Pinia store-->
<!--makes height value entered automatically update in store's userHeight-->
<lable for="height">Height in meters:</lable>
<input id="height" 
 type="number" 
 v-model="BMIStore.userHeight" 
 placeholder="Enter height in meters"
 />
<br>

<!-- todo use v model-->
 <!--bind weight input field to userWeight property in store-->
 <label for="weight">Weight in kilograms:</label>
 <input 
  id="weight" 
  type="number" 
  v-model="BMIStore.userWeight" 
  placeholder="Enter weight in kilograms"
  />
  <br>

  <!--paragraph is shown if BMI is calculated(not null)-->
  <!--the BMI is displayed after calculation by the stores calculateBMI computed property-->
 <p v-if="BMIStore.calculatedBMI !== null">
    Your BMI is: {{ calculatedBMI }}
 </p>

<!--could remove button - and add computed property from the store-->
<!--store knows height and weight -->
<button type="submit">Calculate!</button>
</form>
</template>
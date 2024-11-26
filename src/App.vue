<script setup>
import { ref } from 'vue';
import BodyMassIndexForm from './components/BodyMassIndexForm.vue';

// reactive variable store BMI result
const bmiResult = ref(null);

// function to handle BMI calculation when event is received
function handleStatsEntered({ height, weight }) {
  if (height > 0 && weight > 0) {
    const bmi = weight / (height * height);
    bmiResult.value = bmi.toFixed(2) // format bmi 2 decimal places
  } else {
    bmiResult.value = 'Invalid input';
  }
}
</script>

<template>

<div class="app-container">

  <h1>Body Mass Index Calculator</h1>
  <!--bmi form component with event listener-->
  <BodyMassIndexForm v-on:stats-entered="handleStatsEntered"/>

  <!--display calculated BMI result-->
  <p v-if="bmiResult !== null">Your BMI: {{ bmiResult }}</p>

  </div>
</template>



<style scoped>

.app-container {
  border: 5px solid blue;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}


</style> <!--script, template, file - three components of vue files-->



<!--class code-->

<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'

import {ref} from 'vue'

import { useBMIStore } from "./stores/BMIStore"
import  { storeToRefs } from "pinia";

const BMIStore = useBMIStore();

const calculateBMI = (height) => { // incldue weight argument
  bmi.value = height // todo calculation with weight too
}

const bmi = ref(0)

</script>

<template>
  <h1>Body Mass Index Calculator</h1>

  <!--set this up to expect a message
  from BodyMassIndex and call a function here-->
  <BodyMassIndexForm v-on:user-entered-data="calculateBMI"/>
  
  <div>Your BMI is {{ bmi }}</div>

</template>

<style scoped>




</style>
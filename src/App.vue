<script setup>
import { useBMIStore } from './components/stores/BMIStores';
import BodyMassIndexForm from './components/BodyMassIndexForm.vue';

// access BMI store
const BMIStore = useBMIStore();

</script>

<template>

<div class="app-container">

  <h1>Body Mass Index Calculator</h1>
  <!--bmi form component-->
  <BodyMassIndexForm />

  <!--display calculated BMI result-->
  <p v-if="BMIStore.calculatedBMI !== null">
    Your BMI: {{ BMIStore.calculatedBMI }}
  </p>

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




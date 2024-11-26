<script setup>
import { ref } from 'vue'
import { useBMIStore } from './stores/BMIStores';
import { storeToRefs } from 'pinia';

const BMIStore = useBMIStore()
const { userHeight } = storeToRefs(BMIStore)//userHeight defined in store

// state - variables the app uses
// this is moved to the store
// const userHeight = ref(0)

// state variables the app uses
//const userHeight = ref(0)

const emit = defineEmits('user-entered-data')




const userHasSubmittedData = () => {
  // function called when user clicks
  // component needs to tell App.vue that the data is
  // and send App.vue this data do it can do math
  emit()('user-entered-data', userHeight.value)
}

</script>

<template>
  <!-- html here, things the user sees -->
   <!--can be updated from the scripts state-->
   <!--can tell the code the user has done something-->
<h2>Enter your height and weight</h2>

<lable>Height in meters</lable>
<input v-model="userHeight">
<br>

<!-- todo use v model-->
 <label>Weight in kilograms</label>
<br>
<!--could remove button - and add computed property from the store-->
<!--store knows height and weight -->
<button v-on:click="userHasSubmittedData">Calculate!</button>



</template>
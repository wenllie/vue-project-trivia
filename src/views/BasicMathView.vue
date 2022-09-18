<template>

  <v-card
       :loading="loading"
       class="mx-auto my-12 pa-3"
       max-width="800"
       elevation="12"
       color="white"
  
    >

      <v-img fill-height
        src="https://t4.ftcdn.net/jpg/02/38/56/47/360_F_238564757_L7gsykjvZe2Sdtnyfa0mHd0fObHU4f5G.jpg"
        height="200"
        class="mb-5">

      </v-img>

      <v-card-title 
        class="mb-5 pa-2"
        style="color: #003366;">
        <h1>
        <v-icon style="margin-right: 10px;">mdi-calculator-variant</v-icon>
        <strong>Calculator</strong>
        </h1>
      </v-card-title>

      <v-row style="margin: 5px;">
        <v-col
          cols="12"
          sm="6">
          <v-text-field
            type="number"
            label="First Number"
            hint="For example: 1, 2, 123"
            outlined
            v-model.number="fNumber"
          ></v-text-field>

        </v-col>
        <v-col
          cols="12"
          sm="6">
          <v-text-field
            type="number"
            label="Second Number"
            hint="For example: 1, 2, 123"
            outlined
            v-model.number="sNumber"
          ></v-text-field>
        </v-col>
      </v-row>
  
       <v-card-actions>
        <v-btn
          style="background-color: #003366; color: white; font-weight:bold; font-size: large;"
          height="50"
          class="font-weight-bold"
          elevation="3"
          block
          @click="getSum(); getDifference(); getProduct(); getQuotient();"
        >
          Compute
        </v-btn>
      </v-card-actions>
       
      <div style="margin-top: 40px;">
        <hr class="solid">
      </div>
      
      <v-card-title><h1 style="margin-top: 5px;" align="center"><strong>Result</strong></h1></v-card-title>
      
      <v-row class="mt-5">
        <v-col
          cols="12"
          sm="6"
          height="200"
        >
          <v-card
            style="background-color: #ffb6c1; color:black; text-align: center; margin: 10px;"
            elevation="4"
          >
            <v-card-title>Sum</v-card-title>
            <v-card-text><strong>{{sum}}</strong></v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          height="200"
        >
          <v-card
            style="background-color: #b6fcd5; color:black; text-align: center; margin: 10px;"
            elevation="4"
          >
            <v-card-title>Difference</v-card-title>
            <v-card-text><strong>{{difference}}</strong></v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          height="200"
        >
          <v-card
            style="background-color: #c6e2ff; color:black; text-align: center; margin: 10px;"
            elevation="4"
          >
            <v-card-title>Product</v-card-title>
            <v-card-text><strong>{{product}}</strong></v-card-text>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          height="200"
        >
          <v-card
            style="background-color: #ffc3a0; color:black; text-align: center; margin: 10px;"
            elevation="4"
          >
            <v-card-title>Quotient</v-card-title>
            <v-card-text><strong>{{quotient}}</strong></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
    </v-card>
  
   </template>
  
  <script setup>
    import {ref} from 'vue'
  
    const fNumber=ref(null)
    const sNumber=ref(null)
    const sum=ref(null)
    const difference=ref(null)
    const product=ref(null)
    const quotient=ref(null)
  
    function getSum(){
      sum.value = fNumber.value + sNumber.value
      return sum.value
    }
      function getDifference(){
      difference.value = fNumber.value - sNumber.value
      return difference.value
    }
      function getProduct(){
      product.value = fNumber.value * sNumber.value
      return product.value
    }
      function getQuotient(){
      quotient.value = fNumber.value / sNumber.value
      return quotient.value
    }
  </script>
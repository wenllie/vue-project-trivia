<template>

  <v-card
       :loading="loading"
       class="mx-auto my-12 pa-3"
       max-width="400"
       elevation="8"
       shaped
       color="#E6D5E1"
  
    >
  
        <v-card-title>Calculator</v-card-title>
  
      <v-img
        height="250"
        src="https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/73/a8/f6/73a8f6e1-6785-9425-8779-f5d09b45e38b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"
      ></v-img>
  
       <div class="sy-4 text-subtitle">
          <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
          <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>
       </div>
  
       <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          class="ma-2 white--text"
          elevation="3"
          raised
          @click="getSum(); getDifference(); getProduct(); getQuotient();"
        >
          Compute
        </v-btn>
      </v-card-actions>
  
       <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Result</v-card-title>
  
       <v-card-text>
            <div class="my-4 text-subtitle-1">
                 Sum:    {{sum}}
            </div>
            <div class="my-4 text-subtitle-1">
                 Difference:    {{difference}}
            </div>
            <div class="my-4 text-subtitle-1">
                 Product:    {{product}}
            </div>
            <div class="my-4 text-subtitle-1">
                 Quotient:    {{quotient}}
            </div>
       </v-card-text>
      
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
  
  
  
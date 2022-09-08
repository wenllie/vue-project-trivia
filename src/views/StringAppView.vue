<template>
     <v-card
         :loading="loading"
         class="mx-auto my-12 pa-3"
         max-width="400"
         elevation="8"
         shaped
         color="#E6D5E1"
    
      >
    
          <v-card-title style="color: #9C27B0;">String manipulator</v-card-title>
    
        <v-img
          height="250"
          src="https://i.postimg.cc/Vv5yh4pP/strings.jpg"
        ></v-img>
    
         <div class="sy-4 text-subtitle">
              <v-text-field label="Enter a String" v-model="stringInput"></v-text-field>      
         </div>
    
         <v-card-actions>
         <v-btn
              color="purple darken-4"
              class="ma-2 white--text"
              elevation="3"
              raised
              
            @click="answer()"
          >
            Result
          </v-btn>
        </v-card-actions>
    
         <v-divider class="mx-4"></v-divider>
    
        <v-card-title style="color: #9C27B0;">Result</v-card-title>
    
         <v-card-text>
              <div class="my-4 text-subtitle-1" style="color: #1A237E;">
                   Vowels:    {{vowelCount}}
              </div>
              <div class="my-4 text-subtitle-1" style="color: #BF360C;">
                   Consonants:    {{consoCount}}
              </div>
              <div class="my-4 text-subtitle-1" style="color: #004D40;">
                   Number of Characters:    {{stringCount}}
              </div>
              <div class="my-4 text-subtitle-1" style="color: #B71C1C;">
                   Vowel to *:    {{changedString}}
              </div>
         </v-card-text>
        
      </v-card>
    
    </template>
    
    <script>
    export default {
         el: '#app',
         data() {
              return {
                   expand: false,
                   stringInput: "",
                   vowelCount: 0,
                   stringCount: 0,
                   consoCount: 0,
                   changedString: "",
              }
    
         },
         computed: {
              answer: function () {
                   var vowelList = 'aeiouAEIOU';
                   this.vowelCount = 0;
                   this.stringCount = 0;
                   this.consoCount = 0;
                   this.changedString = "";
                   //stringCount vowels
                   this.vowelCount = this.stringInput.match(/[aeiou]/gi).length
    
                   //stringCount Characters in the string
                   this.stringCount = this.stringInput.length;
    
                   //stringCount consonants
                   this.consoCount = this.stringInput.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    
                   //Convert to *
                   for (var x = 0; x < this.stringInput.length; x++) {
                        if (vowelList.indexOf(this.stringInput[x]) !== -1) {
                             this.changedString += "*";
                        } else {
                             this.changedString += this.stringInput[x];
                        }
                   }
              }
         }
    }
    </script>
<template>
     <div id="app">
          <v-card
               :loading="loading"
               class="mx-auto my-12 pa-3"
               max-width="800"
               elevation="12"
               color="white"
          
          >

               <v-img fill-height
               src="https://previews.123rf.com/images/maudis60/maudis601712/maudis60171200026/91518817-banner-abstract-confuse-colorful-alphabet-vector-background.jpg"
               height="200"
               class="mb-5">

               </v-img>

               <v-card-title 
               class="mb-5 pa-2"
               style="color: #003366;">
               <h1>
               <v-icon style="margin-right: 10px;">mdi-alphabetical</v-icon>
               <strong>String Manipulator</strong>
               </h1>
               </v-card-title>

               <v-text-field
                    type="text"
                    label="Enter a string"
                    hint="For example: one, tree, hehe"
                    outlined
                    v-model="vowel" 
                    @change="answer, expand = !expand"
                    >
               </v-text-field>

               <v-card-title><h1 style="margin-top: 5px;" align="center"><strong>Result</strong></h1></v-card-title>

               <v-col class="shrink">

                    <v-expand-transition>
                         <v-card v-show="expand" class="d-flex justify-space-between mb-6"
                              :color="$vuetify.theme.dark ? 'light-blue lighten-4' : 'white'" flat tile>

                              <v-card class="pa-2" outlined tile style="color: black; background-color: #ffffba;">
                                   <v-list-item two-line>
                                        <v-list-item-content>
                                             <v-list-item-title><strong>Vowels</strong></v-list-item-title>
                                             <v-list-item-subtitle>{{ vow }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                   </v-list-item>
                              </v-card>

                              <v-card class="pa-2" outlined tile style="color: black; background-color: #baffc9;">
                                   <v-list-item two-line>
                                        <v-list-item-content>
                                             <v-list-item-title><strong>Number of Characters</strong></v-list-item-title>
                                             <v-list-item-subtitle>{{ count }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                   </v-list-item>
                              </v-card>

                              <v-card class="pa-2" outlined tile style="color: black; background-color: #ffdfba;">
                                   <v-list-item two-line>
                                        <v-list-item-content>
                                             <v-list-item-title><strong>Consonants</strong></v-list-item-title>
                                             <v-list-item-subtitle>{{ conso }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                   </v-list-item>
                              </v-card>

                              <v-card class="pa-2" outlined tile style="color: black; background-color: #bae1ff;">
                                   <v-list-item two-line>
                                        <v-list-item-content>
                                             <v-list-item-title><strong>Modified String</strong></v-list-item-title>
                                             <v-list-item-subtitle>{{ modifiedString }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                   </v-list-item>
                              </v-card>

                         </v-card>
                    </v-expand-transition>
               </v-col>

          </v-card>
     </div>
</template>

<script>
export default {
     el: '#app',
     data() {
          return {
               expand: false,
               vowel: "",
               vow: 0,
               count: 0,
               conso: 0,
               modifiedString: "",
          }

     },
     computed: {
          answer: function () {
               var vowelList = 'aeiouAEIOU';
               this.vow = 0;
               this.count = 0;
               this.conso = 0;
               this.modifiedString = "";
               //Count vowels
               this.vow = this.vowel.match(/[aeiou]/gi).length
               
               //Count Characters in the string
               this.count = this.vowel.length;

               //Count consonants
               this.conso = this.vowel.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

               //Convert to *
               for (var x = 0; x < this.vowel.length; x++) {
                    if (vowelList.indexOf(this.vowel[x]) !== -1) {
                         this.modifiedString += "*";
                    } else {
                         this.modifiedString += this.vowel[x];
                    }
               }
          }
     }
}
</script>
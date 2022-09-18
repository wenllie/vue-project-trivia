<template>

  <v-container class="grey lighten-5">
      <v-row class="justify-center">
        <v-col
          cols="12"
          sm="3">

          <v-card
              class="mx-auto"
              max-width="400"
              elevation="10"
              color="white"
              style="margin: 20px; "
            >
              <v-img fill-height
              src="https://t4.ftcdn.net/jpg/04/95/49/53/360_F_495495397_7WK5yvKZdZZtpyVNPACIJwuJAPaLiYJP.jpg">

              </v-img>

              <v-card-title><strong>Basic Information</strong></v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show1 = !show1"
                >
                  <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show1">
                  <v-divider></v-divider>

                  <v-card-text>
                    <div>
                      <p>I am Wenllie Joyce Suyat, a fourth year Bachelor of Science in Information Technology (BSIT)
                        student at <a href="https://www.tip.edu.ph" style="color: #800080;">Technological Institute of the Philippines - Manila.</a>
                      </p>
                    </div>
                  </v-card-text>
                </div>
              </v-expand-transition>
          </v-card>
        </v-col>

        <v-col
          cols="12"
          sm="3">

          <v-card
              class="mx-auto"
              max-width="400"
              elevation="10"
              color="white"
              style="margin: 20px; "
            >
              <v-img fill-height
              src="https://thumbs.dreamstime.com/b/learning-hobby-art-banner-background-empty-sketchbook-art-supplies-around-mockup-top-view-learning-hobby-art-banner-198153423.jpg">

              </v-img>

              <v-card-title><strong>Hobbies</strong></v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show2 = !show2"
                >
                  <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show2">
                  <v-divider></v-divider>

                  <v-card-text>
                    <div>
                      <p>I love sleeping.😊</p>
                    </div>
                  </v-card-text>
                </div>
              </v-expand-transition>

          </v-card>
        
        </v-col>

        <v-col
          cols="12"
          sm="3">

          <v-card
              class="mx-auto"
              max-width="400"
              elevation="10"
              color="white"
              style="margin: 20px; "
            >
              <v-img fill-height
              src="https://i.pinimg.com/originals/8e/ff/84/8eff846f4e72122d1d39c4a55ef35b38.jpg" >

              </v-img>

              <v-card-title><strong>Skills</strong></v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show3 = !show3"
                >
                  <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show3">
                  <v-divider></v-divider>

                  <v-card-text>
                <div>
                  <div style="width: 300px;">
                    <p>Java</p>
                    <v-progress-linear
                      v-model="sjava"
                      color="amber"
                      height="20"
                    >
                    </v-progress-linear>

                    <br>

                    <p>Python</p>
                    <v-progress-linear
                      v-model="spython"
                      color="#7fffd4"
                      height="20"
                    >
                    </v-progress-linear>

                    <br>

                    <p>Vue</p>
                    <v-progress-linear
                      v-model="svue"
                      height="20"
                      color="#ccff00"
                    >
                    </v-progress-linear>

                    <br>

                    <p>HTML</p>
                    <v-progress-linear
                      v-model="shtml"
                      height="20"
                      color="#ff1493"
                    >
                    </v-progress-linear>

                    <br>

                    <p>C#</p>
                    <v-progress-linear
                      v-model="scsharp"
                      height="20"
                      color="#ff7f50"
                    >
                    </v-progress-linear>
                  </div>
                </div>
              </v-card-text>
                </div>
              </v-expand-transition>

          </v-card>
        
        </v-col>

        <v-col
          cols="12"
          sm="3">

          <v-card
              class="mx-auto"
              max-width="400"
              elevation="10"
              color="white"
              style="margin: 20px; "
            >
              <v-img fill-height
              src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" >

              </v-img>

              <v-card-title><strong>About Vuetify</strong></v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show4 = !show4"
                >
                  <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show4">
                  <v-divider></v-divider>

                  <v-card-text>
                    <p><a href="https://vuetifyjs.com" style="color: #800080;">Vuetify</a> is a Vue UI Library with beautifully handcrafted Material Components. 
                      No design skills required — everything you need to create amazing applications is at your fingertips.</p>
                  </v-card-text>
                </div>
              </v-expand-transition>

          </v-card>
        
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      svue: 20,
      spython: 33,
      sjava: 78,
      shtml: 68,
      scsharp: 45,
    }),
  }
</script>
<style>
  p {
    margin: 5px;
  }
  h3 {
    margin: 5px;
  }
</style>
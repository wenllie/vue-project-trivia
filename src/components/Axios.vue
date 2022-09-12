<template>

  <div>
    <center>
  <v-btn
    style="background-color: #ffdfba; text-decoration: none;;"
    class="ma-5"
    width="500"
    height="50"
    x-large
    @click="getQuestions">     
    <v-icon
        class="ma-4"
        left
        light
      >
      mdi-thought-bubble
      </v-icon>Show Trivia</v-btn>

  
  <v-container class="grey lighten-5">
    <v-list-item v-for="question in questions" :key="question.id">
    <v-row>
      <v-col>
        <v-card style="background-color: #f4cccc;"
          class="pa-2 ma-5"
          outlined
          elevation="5"
          tile
        >
          <v-list-item-content>
            <v-list-item-title>{{ unescapeHtml(question.question) }}</v-list-item-title>
            <v-list-item-subtitle>{{ unescapeHtml(question.correct_answer) }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-card>
      </v-col>
      <v-col>
        <v-card style="background-color: 	#bae1ff;"
          class="pa-2 ma-5"
          outlined
          elevation="5"
          shaped
        >
          <v-list-item-title>{{ unescapeHtml(question.question) }}</v-list-item-title>
            <v-list-item>
                {{ unescapeHtml(question.correct_answer) }}
            </v-list-item>          
        </v-card>
      </v-col>
      <v-col>
        <v-card style="background-color: #c5d9ff;"
          class="pa-2 ma-5"
          outlined
          elevation="5"
          shaped
        >
          <v-list-item-title>{{ unescapeHtml(question.question) }}</v-list-item-title>
          <v-list-item>
              {{ unescapeHtml(question.correct_answer) }}
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-list-item>

  </v-container>  
    </center>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const questions = ref([])

async function getQuestions() {
  axios.get('https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple').then(response => {
      questions.value = (response.data.results)
  })
}
function unescapeHtml(str) {
  return str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#039;/g, "'");
}
</script>

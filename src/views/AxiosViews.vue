<template>
  <div id="app">
      <center>
      <v-card
          class="ma-10 pa-5"
          width="1000"
          elevation="10"
          color="white"
      >
          <v-card-title
            >
              <h1>Quiz | Mythology</h1>
          </v-card-title>

          <v-card-text
              class="ma-4">
              <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
                  <quiz-modal
                      v-show="showModal"
                      header="Congratulations!"
                      subheader="You've completed the Quiz!"
                      :score="score"
                      @reload="updateQuiz"
                      @close="showModal = false"
                  />
          </v-card-text>

      </v-card>

  </center>
</div>
</template>

<script>
import QuizModal from "../components/QuizModal.vue";
import Quiz from "../components/Quiz.vue";
  
export default {
  components: { Quiz, QuizModal },
  name: "App",
  data() {
    return {
      quizKey: 0,
      showModal: false,
      score: {
        allQuestions: 0,
        answeredQuestions: 0,
        correctlyAnsweredQuestions: 0,
      },
    };
  },
  methods: {
    handleQuizCompleted(score) {
      this.score = score;
      this.showModal = true;
    },
    updateQuiz() {
      this.showModal = false;
      this.quizKey++;
    },
  },
};
</script>
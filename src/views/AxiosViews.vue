<template>
  <div id="app">
    <center>
      <v-card id="quizCard" class="ma-10 pa-5" width="1000" elevation="10" color="white">
        <v-card-title>
          <h1><strong>Quiz | Science Mathematics</strong></h1>
        </v-card-title>

        <v-card-text class="ma-4">
          <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
          <quiz-modal v-show="showModal" header="Congratulations!" subheader="You've completed the Quiz!" :score="score"
            @reload="updateQuiz" @close="showModal = false" />
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
<style>
 #quizCard {
  background-image: url("https://media.istockphoto.com/vectors/technology-and-science-innovation-background-vector-id948623186?k=20&m=948623186&s=612x612&w=0&h=UU5iJvbqkyqqDfeLTyeCGv-tHH4WOkUWhxLOEVeUGfk=");
 }

</style>
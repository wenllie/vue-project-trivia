<template>
    <v-layout class="mt-5 justify-center" row>
        <v-card class="ma-10 w-25 pa-2" elevation="10">
            <v-card-title>
                <h1 style="margin: 10px;"><b>Quiz History</b></h1>
            </v-card-title>
            <v-list :class="{ active: index == currentIndex }" v-for="(history, index) in List" :key="index">
                <v-card elevation="3" color="#b3cde0">
                    <v-list-item @click="setActiveHistory(history, index)">{{ index + " : " +history.timeTaken
                    }}
                    </v-list-item>
                </v-card>
            </v-list>

        </v-card>
        <v-card class="ma-10 w-50" elevation="10">
            <v-card-title>
                <h1 style="margin: 10px;"><b>Quiz Details</b></h1>
            </v-card-title>
            <v-divider class="mb-5"></v-divider>

            <div v-if="currentHistory">
                <QuizDetails :history="currentHistory" @refreshList="refreshList" />
            </div>
        </v-card>
    </v-layout>
</template>
  
<script>
import DataService from "../services/DataService";
import QuizDetails from "../views/QuizDetails.vue";
import { database } from "../firebaseConfig";
export default {
    components: { QuizDetails: QuizDetails },
    data() {
        return {
            admin: false,
            List: [],
            currentHistory: null,
            currentIndex: -1,
            historyClicked: false,
        };
    },
    methods: {
        onDataChange(items) {
            console.log(this.admin)
            let _history = [];
            if (this.admin) {
                items.forEach((item) => {
                    let userID = item.key;
                    const dbRef = database.ref("Users/" + userID + "/Scores");
                    dbRef.on('value', (snapshot) => {
                        snapshot.forEach((list) => {
                            let key = list.key
                            let data = list.val()
                            _history.push({
                                userID: userID,
                                key: key,
                                averageScore: data.averageScore,
                                timeTaken: data.timeTaken,
                                timeFinished: data.timeFinished,
                            });
                        })
                    })
                });
                this.List = _history;
            } else {
                items.forEach((item) => {
                    let key = item.key;
                    let data = item.val();
                    _history.push({
                        userID: "0",
                        key: key,
                        averageScore: data.averageScore,
                        timeTaken: data.timeTaken,
                        timeFinished: data.timeFinished,
                    });
                });
                this.List = _history;
            }
        },
        refreshList() {
            this.currentHistory = null;
            this.currentIndex = -1;
            this.historyClicked = false;
        },
        setActiveHistory(history, index) {
            this.currentHistory = history;
            this.currentIndex = index;
        },
    },
    mounted() {
        this.admin = DataService.isAdmin();
        DataService.getAll().on("value", this.onDataChange);
    },
    beforeUnmount() {
        DataService.getAll().off("value", this.onDataChange);
    }
};
</script>
  
<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>
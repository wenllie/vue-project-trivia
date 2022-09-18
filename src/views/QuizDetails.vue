<template>
    <div v-if="user.loggedIn">
        <div v-if="currentHisto">

            <v-form class="m-3">
                <div v-show="admin">
                    <v-card elevation="3" class="ma-2" color="#c9c9ff">
                        <v-text-field label="User (User ID)" readonly v-model="currentHisto.userID"></v-text-field>
                    </v-card>
                </div>

                <v-card elevation="3" class="ma-2" color="#c9c9ff">
                    <v-text-field label="Average Score" :readonly="!admin" v-model="currentHisto.averageScore">
                    </v-text-field>
                </v-card>

                <v-card elevation="3" class="ma-2" color="#e1f7d5">
                    <v-text-field label="Started" readonly v-model="currentHisto.timeTaken">
                    </v-text-field>
                </v-card>

                <v-card elevation="3" class="ma-2" color="#f1cbff">
                    <v-text-field label="Completed" readonly v-model="currentHisto.timeFinished">
                    </v-text-field>
                </v-card>
            </v-form>
            <div v-show="admin">
                <v-card-text class="d-flex justify-center w-100 mb-3" justify-center>{{ message }}</v-card-text>
                <div class="d-flex justify-space-around w-100 mb-3">
                    <v-row class="ma-1">
                        <v-col sm="5" md="6">
                                <v-btn id="updateBtn" type="submit" height="50" @click="updateHistory" block><b>Update</b></v-btn>
                        </v-col>
                        <v-col sm="5" md="6">
                                <v-btn id="deleteBtn" type="submit" height="50" @click="deleteHistory" block><b>Delete</b></v-btn>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <v-card class="mx-auto mt-6 bg-info" max-width="25%" variant="outlined">
            <v-card-item color="white">
                <div>
                    <div class="text-overline mb-1">
                        YOU ARE NOT LOGGED IN!
                    </div>
                    <div class="text-caption mb-3">Please login if you already have an account, otherwise create one
                        now.</div>
                </div>
            </v-card-item>
        </v-card>
    </div>
</template>
  
<script>
import DataService from "../services/DataService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebaseConfig'
export default {
    props: ["history"],
    data() {
        return {
            admin: false,
            currentHisto: null,
            message: "",
        };
    },
    watch: {
        history: function (history) {
            this.currentHisto = { ...history };
            this.message = "";
        },
    },
    methods: {
        updateHistory() {
            const data = {
                averageScore: this.currentHisto.averageScore,
                timeTaken: this.currentHisto.timeTaken,
                timeFinished: this.currentHisto.timeFinished,
            };
            if (this.admin) {
                DataService.update(this.currentHisto.userID, this.currentHisto.key, data)
                    .then(() => {
                        this.message = "The History was updated successfully!";
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                DataService.update("0", this.currentHisto.key, data)
                    .then(() => {
                        this.message = "The History was updated successfully!";
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
        },
        deleteHistory() {
            DataService.delete(this.currentHisto.userID, this.currentHisto.key)
                .then(() => {
                    this.$emit("refreshList");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.admin = DataService.isAdmin();
        this.message = "";
        this.currentHisto = { ...this.history }
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        auth.onAuthStateChanged(user => {
            store.dispatch("fetchUser", user);
        });
        const user = computed(() => {
            return store.getters.user;
        });
        const signOut = async () => {
            await store.dispatch('logOut')
            router.push('/login')
        }
        return { user, signOut }
    }
};
</script>
  
<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
#updateBtn {
    background-color: #428bca;
    color: white;
}
#updateBtn:hover {
    background-color:#bae1ff;
    color: #1d488d;
}
#deleteBtn {
    background-color: #d9534f;
    color: white;
}
#deleteBtn:hover {
    background-color: #ffb3ba;
    color: #d62d20;
}
</style>
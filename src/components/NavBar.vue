<template>
  <nav>
    <div v-if="user.loggedIn">
      <v-navigation-drawer expand-on-hover rail>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{user.data.displayName}}
            </v-list-item-title>
            <v-list-item-subtitle>...</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" app>
          <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon"
            :color="item.color">
            <v-list-item-title :color="item.color">{{ item.title }}</v-list-item-title>

          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-list density="compact" app>
              <v-list-item color="#a9252e" @click.prevent="signOut" prepend-icon="mdi-logout">Logout
              
            </v-list-item>
            </v-list>
          </div>
        </template>

      </v-navigation-drawer>
    </div>
    <div v-else>
    
  </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebaseConfig'
export default {
  name: "DashboardComponent",
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard', color: "#065535" },
        { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/calculator', color: "#800080" },
        { title: 'String Manipulator', icon: 'mdi-alphabetical', path: '/string-manipulator', color: "#003366" },
        { title: 'Quiz', icon: 'mdi-dots-hexagon', path: '/axios', color: "#800000" },
        { title: 'Scores', icon: 'mdi-star', path: '/scores', color: "#cfc43c" },
        { title: 'About', icon: 'mdi-information', path: '/about', color: "#dc6900" },
      ],
      drawer: false
    }
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
      router.push('/')
    }
    return { user, signOut }
  }


};
</script>

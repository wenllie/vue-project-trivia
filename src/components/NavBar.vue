<template>
  <nav>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item>
        
          <v-list-item-avatar>
              <v-img src="../src/assets/wenllie.jpg" class="rounded-circle"></v-img>
            </v-list-item-avatar>

        </v-list-item>
      </v-list>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Wenllie Joyce Suyat
          </v-list-item-title>
          <v-list-item-subtitle>...</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

        <v-divider></v-divider>

      <v-list density="compact" app>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon"
          :color="item.color">
          <v-list-item-title :color="item.color">{{  item.title  }}</v-list-item-title>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const items = ref([
  { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/', color: "#065535" },
  { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/calculator', color: "#800080" },
  { title: 'String Manipulator', icon: 'mdi-alphabetical', path: '/string-manipulator', color: "#003366" },
  { title: 'Quiz', icon: 'mdi-dots-hexagon', path: '/axios', color: "#800000" },
  { title: 'About', icon: 'mdi-information', path: '/about', color: "#dc6900" },
])

</script>

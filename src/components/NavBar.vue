<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu open-on-hover>

        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{  item.title  }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item>
        
          <v-list-item-avatar>
              <v-img src="http://localhost:5173/src/assets/wenllie.jpg" class="rounded-circle"></v-img>
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
  { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/', color: "primary" },
  { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/calculator', color: "warning" },
  { title: 'String Manipulator', icon: 'mdi-alphabetical', path: '/string-manipulator', color: "secondary" },
  { title: 'Axios', icon: 'mdi-hexagon-multiple-outline', path: '/axios', color: "light" },
])

</script>
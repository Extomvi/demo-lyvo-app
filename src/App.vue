<template>
  <v-app>
  <v-navigation-drawer v-model="drawer" app>
    <!-- -->
  </v-navigation-drawer>
 
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  data: () => ({
    drawer: false,
  }),
}
</script>

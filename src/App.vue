<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <header>
      <v-app-bar flat color="rgba(115, 98, 66, 0.0015)" height="70">
        <v-toolbar-title>Kagura ESS</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn plain text to="/" >about</v-btn>
            <v-btn plain text to="/event">event</v-btn>
            <v-btn plain text to="/discussion">discussion</v-btn>
            <v-btn plain text to="/speech" >speech</v-btn>
            <v-btn plain text to="/guide">guide</v-btn>
          </v-toolbar-items>
      </v-app-bar>
    </header>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

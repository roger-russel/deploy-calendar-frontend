<template>
<v-navigation-drawer color="grey-darken-2" expand-on-hover rail>
  <v-list>
    <v-list-item title="Deploys" prepend-icon="mdi-package-variant-closed"></v-list-item>
  </v-list>
  <v-divider></v-divider>

  <v-list density="compact" nav>
    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
  </v-list>
</v-navigation-drawer>
</template>

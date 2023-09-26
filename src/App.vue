<script setup>
import TopBar from '@/components/TopBar.vue';
import LeftMenu from '@/components/LeftMenu.vue';
</script>
<template>
  <v-layout class="rounded rounded-md">
    <TopBar></TopBar>
    <LeftMenu></LeftMenu>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view v-slot="{ Component }" class="main-view">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </router-view>
    </v-main>
  </v-layout>
</template>
<script>
export default {
  name: 'app',

  data: () => ({
  }),
}
</script>



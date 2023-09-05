<template>
  <q-layout view="lHh Lpr lFf" class="bg-gray-100">
    <Topbar />
    <Sidebar />
    <q-page-container style="width: 97.2%" class="bg-gray-100">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue"
import Topbar from "./Topbar.vue"
import Sidebar from "./Sidebar.vue"

export default defineComponent({
  name: "MainLayout",

  components: {
    Sidebar,
    Topbar
  },

  setup() {
    return {}
  },
});
</script>

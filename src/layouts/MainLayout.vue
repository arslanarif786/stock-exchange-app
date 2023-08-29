<template>
  <q-layout view="lHh Lpr lFf" class="bg-gray-100">
    <Topbar />

    <q-drawer :value="leftDrawerOpen" show-if-above bordered :width="480">
      <div style="height: 60px" class="py-5 text-center bottom-border">
        <span class="text-gray-600 font-semibold txt12"> NIFTY 50 </span>
        <span class="text-brightGreen font-semibold txt12 mx-1"> 19265.80 </span>
        <span class="text-lightGray font-semibold txt10"> 120.90 (0.62%) </span>
        <span class="text-gray-600 font-semibold txt12 mx-1"> SENSEX </span>
        <span class="text-brightRed font-semibold txt12"> 64886.51 </span>
        <span class="text-lightGray font-semibold txt10 ml-1">
          -365.83 (-0.56%)
        </span>
      </div>
      
    <div class="bg-gray-100 flex justify-end">
        <Sidebar />
    </div>

    </q-drawer>

    <q-page-container style="width: 97.2%" class="bg-gray-100">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue"
import LeftArrow from "../assets/images/top-bar-left-arrow.png"
import Topbar from "./Topbar.vue"
import Sidebar from "./Sidebar.vue"

export default defineComponent({
  name: "MainLayout",

  components: {
    Sidebar,
    Topbar
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen
    };
  },
});
</script>

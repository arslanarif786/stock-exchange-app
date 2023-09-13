<template>
  <q-layout view="lHh Lpr lFf" class="bg-gray-100">
    <Topbar />
    <Sidebar />
    <DraggableDialog />
    <q-page-container style="width: 97.2%" class="bg-gray-100">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import DraggableDialog from "../components/draggable/DraggableDialog.vue";
import Topbar from "./Topbar.vue";
import Sidebar from "./Sidebar.vue";
// import { useMartekDepthDataStore } from '../stores/market-depth-data';

export default defineComponent({
  name: "MainLayout",
  
  components: {
    Sidebar,
    Topbar,
    DraggableDialog
  },
  setup() {
    // const marketDepthDataStore = useMartekDepthDataStore();
    // Call displayFromLocalStorage on component mount
    // onMounted(() => {
    //   marketDepthDataStore.displayFromLocalStorage('1027585');
    // });

    return {} ;
  },
});
</script>

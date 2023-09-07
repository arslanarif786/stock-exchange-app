<template>
  <q-drawer :value="leftDrawerOpen" show-if-above bordered :width="480">
    <div style="height: 59px;" class="py-5 text-center bottom-border box">
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
      <div
        class="bg-white"
        style="height: 91.5vh; max-height: 200vh; width: 431px"
      >
      <!------------------------------- Search Bar ------------------------------->
        <div class="pt-1 text-center">
          <q-input
            v-model="searchQuery"
            dense
            borderless
            class="pb-1"
            placeholder="Search eg: infy bse, nifty fut, nifty weekly, gold mcx"
          >
            <template v-slot:prepend>
              <q-icon name="search" class="text-lightGray mt-1 ml-3" size="18px" />
            </template>
            <template v-slot:append>
              <div class="cursor-text txt13 text-gray-300 mr-3 mt-1">{{ listCount }} / 50</div>
            </template>
          </q-input>
          <q-separator class="bg-gray-200"/>
        </div>

        <!---------------------------- Draggable List ---------------------------->
        <draggable-list
          :search-query="searchQuery"
          @list-count="getListCount"
          />
      </div>
    </div>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue"
import DraggableList from "../components/draggable/DraggableList.vue"

const leftDrawerOpen = ref(false)
const listCount = ref(0)
const searchQuery = ref("")

const getListCount = (count) => {
  listCount.value = count
}
</script>

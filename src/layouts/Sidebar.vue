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
      <!-- Search Bar -->
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

        <!-- Search List -->
        <SearchList
          v-for="item in filteredList"
          :key="item.title"
          v-bind="item"
          />
      </div>
    </div>
  </q-drawer>
</template>

<script setup>
import { computed, ref } from "vue"
import SearchList from "components/search/SearchList.vue"
const leftDrawerOpen = ref(false)
const searchQuery = ref("")
const lists = ref([
  {
    title: "SUZLON",
    caption: "",
    changeRate: -0.55,
    percentage: 6.99,
    changedPrice: 33.75,
  },
  {
    title: "ZEAL",
    caption: "BSE",
    changeRate: -0.08,
    percentage: 4.89,
    changedPrice: 18.06,
  },
  {
    title: "TAPARIA",
    caption: "BSE",
    changeRate: "0.00",
    percentage: "0.00",
    changedPrice: 2.66,
  },
  {
    title: "VISHAL",
    caption: "",
    changeRate: 1.25,
    percentage: 3.54,
    changedPrice: 24.65,
  },
  {
    title: "JUMBO",
    caption: "BSE",
    changeRate: 0.78,
    percentage: 4.89,
    changedPrice: 6.09,
  },
  {
    title: "RANASUG",
    caption: "",
    changeRate: -0.05,
    percentage: 3.22,
    changedPrice: 24.65,
  },
  {
    title: "UNISON",
    caption: "BSE",
    changeRate: -0.33,
    percentage: 5.15,
    changedPrice: 24.65,
  },
  {
    title: "KEIL",
    caption: "BSE",
    changeRate: 0.75,
    percentage: 4.77,
    changedPrice: 21.66,
  },
])

const filteredList = computed(() => {
  if(typeof searchQuery.value !== "string") {
    return lists.value
  }
  return lists.value.filter((row) => row.title.toLowerCase().includes(searchQuery.value))
})

const listCount = computed(() => { return filteredList.value.length })
</script>

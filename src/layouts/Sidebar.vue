<template>
  <div class="bg-white" style="height:91.5vh; max-height: 200vh; width: 431px">
    <Search />
    <SearchList
        v-for="item in lists"
        :key="item.title"
        v-bind="item"
    />
  </div>
</template>

<script setup>
import Search from "../components/search/SearchBar.vue"
import SearchList from "components/SearchList.vue";
const lists = [
  {
    title: "SUZLON",
    caption: "",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  },
  {
    title: "ZEAL",
    caption: "BSE",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  },
  {
    title: "TAPARIA",
    caption: "BSE",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  },
  {
    title: "VISHAL",
    caption: "",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  },
  {
    title: "JUMBO",
    caption: "BSE",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  },
  {
    title: "RANASAUG",
    caption: "",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  },
  {
    title: "UNISON",
    caption: "BSE",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  },
  {
    title: "KEIL",
    caption: "BSE",
    changeRate: "1.15",
    percentage: "4.89",
    changedPrice: "24.65"
  }
];
</script>

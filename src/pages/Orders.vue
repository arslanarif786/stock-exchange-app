<template>
  <q-page class="bg-white w-full pt-2">
    <div class="flex px-6">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="text-gray-600 txt12 pt-2 mr-6"
      >
        <span class="cursor-pointer hover:text-orange-500" :class="item.label == 'Orders' ? 'text-orange-500' : ''">
          {{ item.label }}
        </span>
      </div>
    </div>
    <executed-orders />
    <trades />
    <div class="mb-20"></div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import ExecutedOrders from "../components/table/ExecutedOrders.vue"
import Trades from "../components/table/Trades.vue"

const tabs = ref([
  {
    label: "Orders",
    Value: 1,
  },
  {
    label: "GIT",
    Value: 2,
  },
  {
    label: "Baskets",
    Value: 3,
  },
  {
    label: "SIP",
    Value: 4,
  },
  {
    label: "Alerts",
    Value: 5,
  },
  {
    label: "IPO",
    Value: 6,
  },
  {
    label: "Auctions",
    Value: 7,
  },
]);
</script>

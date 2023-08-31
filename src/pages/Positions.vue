<template>
  <q-page class="bg-white w-full pt-2">
    <executed-orders />
    <trades />
  </q-page>
</template>

<script setup>
import ExecutedOrders from "../components/table/ExecutedOrders.vue";
import Trades from "../components/table/Trades.vue";
</script>

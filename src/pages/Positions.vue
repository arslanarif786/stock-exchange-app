<template>
  <q-page class="bg-white w-full pt-2">
    <positions-comp />
    <day-history/>
    <div class="mb-20"></div>
  </q-page>
</template>

<script setup>
import PositionsComp from "../components/table/PositionsComp.vue";
import DayHistory from "../components/table/DayHistory.vue";
</script>

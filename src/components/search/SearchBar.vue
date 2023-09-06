<template>
  <div class="pt-1 text-center">
    <q-input
      v-model="searchModel"
      dense
      borderless
      class="pb-1"
      placeholder="Search eg: infy bse, nifty fut, nifty weekly, gold mcx"
    >
      <template v-slot:prepend>
        <q-icon name="search" class="text-lightGray mt-1 ml-3" size="18px" />
      </template>
      <template v-slot:append>
        <div class="cursor-text txt13 text-gray-300 mr-3 mt-1">8 / 50</div>
      </template>
    </q-input>
    <q-separator class="bg-gray-200"/>
  </div>
</template>

<script setup>
import { ref } from "vue"
const searchModel = ref("")
</script>
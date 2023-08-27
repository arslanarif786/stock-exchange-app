<template>
  <q-page class="flex bg-white">
    <q-list class="mt-5 ml-5">
      <div class="text-red-400"> Vue installed</div>
      <div class="text-green-400"> Quasar installed</div>
      <div class="text-blue-400"> Composition API done</div>
      <div class="text-green-400">
        Tailwind installed
      </div>
      <div class="text-blue-400"> pinia installed</div>
      <div class="text-red-400"> composables created</div>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useSample } from '../composables/useSample.js'
// const { x, y } = useSample()

export default defineComponent({
  name: 'IndexPage'
})
</script>

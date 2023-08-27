<template>
  <q-page class="flex flex-center">
    <div class="">
      <div class="text-red-400"> Vue installed</div>
      <div class="text-green-400"> Quasar installed</div>
      <div class="text-blue-400"> Composition API done</div>
      <div class="text-green-400">
        Tailwind installed
      </div>
      <div class="text-blue-400"> pinia installed</div>
      <div class="text-red-400"> composables created</div>
      </div>
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

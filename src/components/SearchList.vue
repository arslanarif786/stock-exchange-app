<template>
  <q-item
    clickable
    class="pl-4"
  >
    <q-item-section>
      <div class="flex justify-between">
        <div class="flex">
          <q-item-label>{{ title }}</q-item-label>
          <q-item-label caption>{{ caption }}</q-item-label>
        </div>
        <div class="flex">
          <q-item-label>{{ changeRate }}</q-item-label>
          <q-item-label class="ml-2">{{ percentage }}%</q-item-label>
          <div>arrow</div>
          <q-item-label class="mx-2">{{ changedPrice }}</q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    changeRate: {
      type: Number,
      default: ''
    },

    percentage: {
      type: Number,
      default: ''
    },

    changedPrice: {
      type: Number,
      default: ''
    },
  }
})
</script>

<template>
  <q-item class="pl-4 hover:bg-gray-100 cursor-move">
    <q-item-section>
      <div class="flex justify-between items-center">
        <div class="flex w-48">
          <q-item-label class="txt13" :class="changeRate > 0
            ? 'text-brightGreen'
            : changeRate === '0.00'
              ? 'text-gray-500'
              : 'text-brightRed'
            ">
            {{ title }}
          </q-item-label>
          <q-item-label caption class="txt8 ml-2">{{ caption }}</q-item-label>
        </div>
        <div class="flex items-center w-44">
          <q-item-label class="txt13 text-gray-400 text-center w-10">{{
            changeRate
          }}</q-item-label>
          <div class="flex items-center">
            <q-item-label class="ml-2 txt13 text-gray-500 text-center w-12">{{ percentage }}%</q-item-label>
            <q-icon v-if="changeRate == 0" name="panorama_fish_eye" size="13px" class="text-lightGray mt-1 ml-1" />
            <q-icon v-else-if="changeRate > 0" name="keyboard_arrow_up" size="20px" class="text-brightGreen mt-1" />
            <q-icon v-else-if="changeRate < 0" name="keyboard_arrow_down" class="text-brightRed mt-1" size="20px" />
          </div>
          <q-item-label class="ml-4 txt13 text-center w-10" :class="changeRate > 0
            ? 'text-brightGreen'
            : changeRate == 0
              ? 'text-gray-500'
              : 'text-brightRed'
            ">
            {{ changedPrice }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>
  </q-item>
  <q-separator />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    changeRate: {
      type: Number,
      default: "",
    },

    percentage: {
      type: Number,
      default: "",
    },

    changedPrice: {
      type: Number,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

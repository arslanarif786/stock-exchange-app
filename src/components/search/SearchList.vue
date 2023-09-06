<template>
  <div
    class="pl-4 hover:bg-gray-100 cursor-move w-full relative"
    @mouseenter="hoverEffect = true"
    @mouseleave="hoverEffect = false"
  >
    <!--------- On hover this buttons exactly above the list row ---------->
    <div class="absolute flex justify-end items-center w-11/12">
      <div
        class="mr-2 hover:cursor-pointer px-1.5 my-2.5 bg-brightBlue w-9 h-6 text-white hover:bg-blue-400 font-semibold text-center rounded-sm"
        style="padding-top: 1px"
        :class="!hoverEffect ? 'hidden' : 'block'"
      >
        B
      </div>
      <div
        class="mr-2 hover:cursor-pointer px-1.5 my-2 bg-brightOrange w-9 h-6 text-white hover:bg-orange-400 font-semibold text-center rounded-sm"
        style="padding-top: 1px"
        :class="!hoverEffect ? 'hidden' : 'block'"
      >
        S
      </div>
      <div
        class="mr-2 hover:cursor-pointer px-1.5 my-2 bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black"
        style="padding-top: 1px"
        :class="!hoverEffect ? 'hidden' : 'block'"
      >
        <q-icon name="format_align_center" class="mb-1" size="13px" />
      </div>
      <div
        class="mr-2 hover:cursor-pointer px-1.5 my-2 bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black"
        style="padding-top: 1px"
        :class="!hoverEffect ? 'hidden' : 'block'"
      >
        <q-icon name="moving" class="mb-1" size="15px" />
      </div>
      <div
        class="mr-2 hover:!cursor-pointer px-1.5 my-2 !bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black"
        style="padding-top: 1px"
        :class="!hoverEffect ? 'hidden' : 'block'"
      >
        <q-icon name="delete" class="mb-1" size="15px" />
      </div>
      <div
        class="hover:cursor-pointer px-1.5 my-2 bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black"
        style="padding-top: 1px"
        :class="!hoverEffect ? 'hidden' : 'block'"
      >
      <q-icon name="more_horiz" class="mb-1" size="15px" />
      </div>
    </div>

    <!--------------- List --------------->
    <div class="flex justify-between items-center py-3">
      <div class="flex w-48">
        <q-item-label
          class="txt13"
          :class="
            changeRate > 0
              ? 'text-brightGreen'
              : changeRate === '0.00'
              ? 'text-gray-500'
              : 'text-brightRed'
          "
        >
          {{ title }}
        </q-item-label>
        <q-item-label caption class="txt8 ml-2">{{ caption }}</q-item-label>
      </div>
      <div class="flex items-center w-48">
        <q-item-label class="txt13 text-gray-400 text-center w-10">{{
          changeRate
        }}</q-item-label>
        <div class="flex items-center">
          <q-item-label class="ml-2 txt13 text-gray-500 text-center w-12"
            >{{ percentage }}%</q-item-label
          >
          <q-icon
            v-if="changeRate == 0"
            name="panorama_fish_eye"
            size="13px"
            class="text-lightGray mt-1 ml-1"
          />
          <q-icon
            v-else-if="changeRate > 0"
            name="keyboard_arrow_up"
            size="20px"
            class="text-brightGreen mt-1"
          />
          <q-icon
            v-else-if="changeRate < 0"
            name="keyboard_arrow_down"
            class="text-brightRed mt-1"
            size="20px"
          />
        </div>
        <q-item-label
          class="ml-4 txt13 text-right w-10"
          :class="
            changeRate > 0
              ? 'text-brightGreen'
              : changeRate == 0
              ? 'text-gray-500'
              : 'text-brightRed'
          "
        >
          {{ changedPrice }}
        </q-item-label>
      </div>
    </div>
  </div>
  <q-separator />
</template>

<script>
import { defineComponent, ref } from "vue";

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
    const hoverEffect = ref(false);
    return {
      hoverEffect,
    };
  },
});
</script>

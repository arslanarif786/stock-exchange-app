<template>
  <div>
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-tabs v-model="tab" dense class="text-grey mt-0" indicator-color="primary" align="left" narrow-indicator>
        <q-tab name="regular" label="Regular" class="txt-h6" />
        <q-tab name="amo" label="AMO" class="txt-h6 disabled-place" />
        <q-tab name="iceberg" label="Iceberg" class="txt-h6 disabled-place" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="regular">
          <div class="grid grid-cols-3 gap-3">
            <div>
              <div class="flex">
                <input type="radio" v-model="radioOption" />
                <div class="ml-1 txt13">
                  Intraday
                  <span class="text-gray-300 txt13">MIS</span>
                </div>
              </div>
              <div>
                <q-input v-model.number="quantity" type="number" min="0" outlined label="Qty" stack-label dense
                  class="mt-3" style="max-width: 200px" />
              </div>
            </div>
            <div>
              <div class="flex">
                <input type="radio" disabled />
                <div class="ml-1 txt13">
                  Longterm
                  <span class="text-gray-300 txt13">CNC</span>
                </div>
              </div>
              <div>
                <q-input v-model.number="price" type="number" min="0" outlined label="Price" stack-label dense
                  class="mt-3" style="max-width: 200px" />
              </div>
              <div class="flex mt-2">
                <span class="txt13 flex">
                  <input type="radio" v-model="selectMarketOrLimit" name="fav_language" />
                  <span class="ml-1">Market</span>
                </span>
                <span class="txt13 flex ml-4">
                  <input type="radio" v-model="selectMarketOrLimit" name="fav_language" />
                  <span class="ml-1">Limit</span>
                </span>
              </div>
            </div>
            <div>
              <q-input v-model="triggerPrice" type="number" outlined label="Trigger price" stack-label dense class="mt-8"
                disable style="max-width: 200px" />
              <div class="flex justify-end mt-2">
                <span class="txt13 flex">
                  <input type="radio" v-model="selectMarketOrLimit" name="fav_language" disabled />
                  <span class="ml-1">SL</span>
                </span>
                <span class="txt13 flex ml-4">
                  <input type="radio" v-model="selectMarketOrLimit" name="fav_language" disabled />
                  <span class="ml-1">SL-M</span>
                </span>
              </div>
              <div class="flex justify-end mt-4">
                <div class="txt13 text-brightBlue hover:text-orange-500">
                    More options
                  <span class="text-brightBlue mt-1">
                    <q-icon name="expand_more" class="cursor-pointer hover:text-orange-500" size="18px" />
                  </span>
                </div>
            </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="amo">
          <div class="text-h6">AMO</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="iceberg">
          <div class="text-h6">Iceberg</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const radioOption = ref("");
    const quantity = ref(true);
    const price = ref(null);
    const triggerPrice = ref("0");
    const selectMarketOrLimit = ref("limit");
    return {
      tab: ref("mails"),
      quantity,
      radioOption,
      price,
      triggerPrice,
      selectMarketOrLimit,
    };
  },
};
</script>

<style scoped>
.disabled-place {
  pointer-events: none;
  opacity: 0.5;
}
</style>

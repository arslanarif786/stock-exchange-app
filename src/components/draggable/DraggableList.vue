<template>
  <!----------------------------------- draggable ------------------------------------->
  <draggable :list="filteredList" class="list-group" :group="{ name: 'people', pull: 'clone' }" item-key="name"
    @start="dragging = true" @end="dragging = false">
    <template #item="{ element, index }">
      <div class="list-group-item">
        <!--------------- On hover this buttons exactly above the list row ----------------->
        <div class="pl-4 hover:bg-gray-100 cursor-move w-full relative" @mouseenter="hoverEffectTrue(index)"
          @mouseleave="hoverEffectFalse(index)">
          <div v-if="index == hoverItem" class="absolute flex justify-end items-center w-11/12">
            <div
              class="mr-2 hover:cursor-pointer px-1.5 my-2.5 bg-brightBlue w-9 h-6 text-white hover:bg-blue-400 font-semibold text-center rounded-sm"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'" @click="alphabet_B(index, element)">
              B
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                Buy (B)
              </q-tooltip>
            </div>

            <div
              class="mr-2 hover:cursor-pointer px-1.5 my-2 bg-brightOrange w-9 h-6 text-white hover:bg-orange-400 font-semibold text-center rounded-sm"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'" @click="alphabet_S(index, element)">
              S
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                Sell (S)
              </q-tooltip>
            </div>
            <div
              class="mr-2 hover:cursor-pointer px-1.5 my-2 bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'" @click="formatAlign(index, element)">
              <q-icon name="format_align_center" class="mb-1" size="13px" />
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                Market Depth (D)
              </q-tooltip>
            </div>
            <div
              class="mr-2 hover:cursor-pointer px-1.5 my-2 bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'" @click="movingItem(index, element)">
              <q-icon name="moving" class="mb-1" size="15px" />
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                Chart (C)
              </q-tooltip>
            </div>
            <div v-if="!searchIsActive"
              class="mr-2 hover:!cursor-pointer px-1.5 my-2 !bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black z-10"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'" @click="deleteItem(index, element)">
              <q-icon name="delete" class="mb-1" size="15px" />
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                Delete (del)
              </q-tooltip>
            </div>
            <div v-if="searchIsActive && !marketDepthDataStore.activeDbList.includes(element.InstrumentToken)"
              class="mr-2 hover:!cursor-pointer px-1.5 my-2 !bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black z-10"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'"
              @click="addCurrencyToList(index, element)">
              <q-icon name="add" class="mb-1" size="15px" />
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                Add (add)
              </q-tooltip>
            </div>
            <div v-if="searchIsActive && marketDepthDataStore.activeDbList.includes(element.InstrumentToken)"
              class="mr-2 hover:!cursor-pointer px-1.5 my-2 !bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black z-10"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'"
              >
              <q-icon name="done" class="mb-1" size="15px" />
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                Added
              </q-tooltip>
            </div>
            <div
              class="hover:cursor-pointer px-1.5 my-2 bg-slate-50 w-9 h-6 hover:text-slate-50 hover:!bg-gray-400 hover:border-gray-400 font-semibold text-center rounded-sm border border-black"
              style="padding-top: 1px" :class="!hoverEffect ? 'hidden' : 'block'">
              <q-icon name="more_horiz" class="mb-1" size="15px">
                <q-menu class="" fit>
                  <q-list style="min-width: 100px">
                    <q-item clickable v-close-popup>
                      <q-item-section> Pin </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                      <q-item-section> Create GTT </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section> Create Alert</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section> Chart </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item clickable v-close-popup>
                      <q-item-section> Fundamentals </q-item-section> </q-item>``
                    <q-item clickable v-close-popup>
                      <q-item-section> Technicals </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                      <q-item-section> Option Chain </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-icon>
              <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]" class="bg-black font-semibold txt13">
                More
              </q-tooltip>
              <!-- <q-btn-dropdown color="primary" label="Dropdown Button"> -->

              <!-- </q-btn-dropdown> -->
            </div>
          </div>

          <!----------------------------------- List ---------------------------------->
          <div v-if="searchIsActive" class="flex justify-between items-center py-3">
            <div class="flex w-48">
              <q-item-label class="txt13">
                {{ element.name}}
              </q-item-label>
            </div>
          </div>
          <div v-else class="flex justify-between items-center py-3">
            <div class="flex w-48">
              <q-item-label class="txt13">
                {{ getCurrencyName(element.InstrumentToken) }}
              </q-item-label>
              <!-- <q-item-label class="txt13" :class="element.changeRate > 0
                ? 'text-brightGreen'
                : element.changeRate === '0.00'
                  ? 'text-gray-500'
                  : 'text-brightRed'
                ">
                {{ element.title }}
              </q-item-label>
              <q-item-label caption class="txt8 ml-2">{{
                element.caption
              }}</q-item-label> -->
            </div>
            <div class="flex items-center w-48">
              <q-item-label class="txt13 text-gray-400 text-center w-10">{{
                (element.LastPrice - element.Open).toFixed(2)
              }}</q-item-label>
              <div class="flex items-center">
                <q-item-label class="ml-2 txt13 text-gray-500 text-center w-12">{{ (element.LastPrice - element.Open / element.Open * 100).toFixed(1)  }}%</q-item-label>
                <!-- <q-icon v-if="element.changeRate == 0" name="panorama_fish_eye" size="13px"
                  class="text-lightGray mt-1 ml-1" />
                <q-icon v-else-if="element.changeRate > 0" name="keyboard_arrow_up" size="20px"
                  class="text-brightGreen mt-1" />
                <q-icon v-else-if="element.changeRate < 0" name="keyboard_arrow_down" class="text-brightRed mt-1"
                  size="20px" /> -->
              </div>
              <q-item-label class="ml-4 txt13 text-right w-10">
                {{ element.LastPrice   }}
              </q-item-label>
            </div>
          </div>
        </div>
        <market-depth v-if="expandItemsList.includes(index)">
          <template v-slot:body>
            <q-card>
              <div class="flex justify-center pt-5">
                <div>
                  <q-table
                    dense
                    flat
                    :rows="element.Bids"
                    :columns="columnBlueTable"
                    row-key="name"
                    :separator="separator"
                    hide-bottom
                  />
                  <div class="flex justify-between">
                    <div class="txt13 ml-3 text-brightBlue">Total</div>
                    <div class="txt13 mr-4 text-brightBlue">640</div>
                  </div>
                </div>
                <div class="ml-4"></div>
                <div>
                  <q-table
                    dense
                    flat
                    :rows="element.Offers"
                    :columns="columnOrangeTable"
                    row-key="name"
                    :separator="separator"
                    hide-bottom
                  />
                  <div class="flex justify-between">
                    <div class="txt13 ml-5 text-orange-500">Total</div>
                    <div class="txt13 mr-4 text-orange-500">0</div>
                  </div>
                </div>
              </div>

              <q-separator class="mt-5 mb-3.5" inset />

              <div class="w-full px-6 pb-5">
              <div class="flex">
                <div class="flex w-1/2 justify-between ">
                  <div class="txt13 text-gray-500">Open</div>
                  <div class="txt13">{{element.Open}}</div>
                </div>
                <div class="flex w-1/2 pl-2 justify-between ">
                  <div class="txt13 text-gray-500">High</div>
                  <div class="txt13">{{ element.High }}</div>
                </div>
              </div>

              <div class="flex">
                <div class="flex w-1/2 justify-between ">
                  <div class="txt13 text-gray-500">Low</div>
                  <div class="txt13">{{ element.Low }}</div>
                </div>
                <div class="flex w-1/2 pl-2 justify-between ">
                  <div class="txt13 text-gray-500">Prev. Close</div>
                  <div class="txt13">{{ element.Close }}</div>
                </div>
              </div>

              <div class="flex">
                <div class="flex w-1/2 justify-between ">
                  <div class="txt13 text-gray-500">Volume</div>
                  <div class="txt13">{{ element.Volume }}</div>
                </div>
                <div class="flex w-1/2 pl-2 justify-between ">
                  <div class="txt13 text-gray-500">Avg. price</div>
                  <div class="txt13">{{ element.AveragePrice }}</div>
                </div>
              </div>

              <div class="flex">
                <div class="flex w-1/2 justify-between ">
                  <div class="txt13 text-gray-500">LTQ</div>
                  <div class="txt13">{{ element.LastQuantity }}</div>
                </div>
                <div class="flex w-1/2 pl-2 justify-between ">
                  <div class="txt13 text-gray-500">LTT</div>
                  <div class="txt13">{{ element.LastTradeTime }}</div>
                </div>
              </div>

              <div class="flex">
                <div class="flex w-1/2 justify-between ">
                  <div class="txt13 text-gray-500">Lower ciruit</div>
                  <div class="txt13">{{ element.OIDayLow }}</div>
                </div>
                <div class="flex w-1/2 pl-2 justify-between ">
                  <div class="txt13 text-gray-500">Upper circuit</div>
                  <div class="txt13">{{ element.OIDayHigh }}</div>
                </div>
              </div>
              </div>
            </q-card>
          </template>
        </market-depth>
        <q-separator />
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from "vuedraggable";
import MarketDepth from "./MarketDepth.vue";
import { computed, ref, watch } from "vue";
import { useDialogStore } from "../../stores/handle-dialog";
import { useMartekDepthDataStore } from "../../stores/market-depth-data";
import data from "../../data";
import { list } from "postcss";

const DialogStore = useDialogStore();
const marketDepthDataStore = useMartekDepthDataStore();

// props
const props = defineProps(["searchQuery"]);
// emits
const emits = defineEmits(["list-count"]);

// data properties
const expanded = ref(false);
const hoverEffect = ref(false);
const hoverItem = ref(0);
const selectedDepth = ref(0);
const dragging = ref(false);
const expandItemsList = ref([]);
const searchIsActive = ref(false);
const selectedCurrencyList = ref([])
const lists = ref([
  {
    title: "SUZLON",
    caption: "",
    changeRate: -0.55,
    percentage: 6.99,
    changedPrice: 33.75,
  },
  {
    title: "ZEAL",
    caption: "BSE",
    changeRate: -0.08,
    percentage: 4.89,
    changedPrice: 18.06,
  },
  {
    title: "TAPARIA",
    caption: "BSE",
    changeRate: "0.00",
    percentage: "0.00",
    changedPrice: 2.66,
  },
  {
    title: "VISHAL",
    caption: "",
    changeRate: 1.25,
    percentage: 3.54,
    changedPrice: 24.65,
  },
  {
    title: "JUMBO",
    caption: "BSE",
    changeRate: 0.78,
    percentage: 4.89,
    changedPrice: 6.09,
  },
  {
    title: "RANASUG",
    caption: "",
    changeRate: -0.05,
    percentage: 3.22,
    changedPrice: 24.65,
  },
  {
    title: "UNISON",
    caption: "BSE",
    changeRate: -0.33,
    percentage: 5.15,
    changedPrice: 24.65,
  },
  {
    title: "KEIL",
    caption: "BSE",
    changeRate: 0.75,
    percentage: 4.77,
    changedPrice: 21.66,
  },
]);
const separator = ref("vertical")
const columnBlueTable = ref([
  { name: 'bid', align: 'center', label: 'BID', field: 'Price' },
  { name: 'orders', label: 'ORDERS', field: 'Orders' },
  { name: 'qty', align: 'right', label: 'QTY.', field: 'Quantity' },
])
const rowBlueTable = ref([
  {
    bid: 159,
    orders: 6.0,
    qty: 24
  },
  {
    bid: 237,
    orders: 9.0,
    qty: 37,
  },
  {
    bid: 262,
    orders: 16.0,
    qty: 23,
  },
  {
    bid: 305,
    orders: 3.7,
    qty: 67,
  },
  {
    bid: 356,
    orders: 16.0,
    qty: 49,
  },
  {
    bid: 375,
    orders: 0.0,
    qty: 94,
  },
  {
    bid: 392,
    orders: 0.2,
    qty: 98,
  },
  {
    bid: 408,
    orders: 3.2,
    qty: 87,
  },
  {
    bid: 452,
    orders: 25.0,
    qty: 51,
  },
  {
    bid: 518,
    orders: 26.0,
    qty: 65,
  }
])
const columnOrangeTable = ref([
  { name: 'offer', align: 'center', label: 'OFFER', field: 'Price' },
  { name: 'orders', label: 'ORDERS', field: 'Orders' },
  { name: 'qty', align: 'right', label: 'QTY.', field: 'Quantity' },
])
const rowOrangeTable = ref([
  {
    offer: 159,
    orders: 6.0,
    qty: 24
  },
  {
    offer: 237,
    orders: 9.0,
    qty: 37,
  },
  {
    offer: 262,
    orders: 16.0,
    qty: 23,
  },
  {
    offer: 305,
    orders: 3.7,
    qty: 67,
  },
  {
    offer: 356,
    orders: 16.0,
    qty: 49,
  },
  {
    offer: 375,
    orders: 0.0,
    qty: 94,
  },
  {
    offer: 392,
    orders: 0.2,
    qty: 98,
  },
  {
    offer: 408,
    orders: 3.2,
    qty: 87,
  },
  {
    offer: 452,
    orders: 25.0,
    qty: 51,
  },
  {
    offer: 518,
    orders: 26.0,
    qty: 65,
  }
])

// computed
const filteredList = computed(() => {
  const dbNamesJSON = localStorage.getItem("dbNames");
  const dbNames = dbNamesJSON ? JSON.parse(dbNamesJSON) : [];
  const searchTerm = props.searchQuery.toLowerCase();
  if (!searchTerm) {
    searchIsActive.value = false;
    selectedCurrencyList.value = Object.values(marketDepthDataStore.data);
    return selectedCurrencyList.value
  }
  searchIsActive.value = true;
  return data.filter((obj) => obj.name.toLowerCase().includes(searchTerm));
});

// watcher
watch(filteredList, (newVal) => {
  emits("list-count", newVal.length);
});

// methods
const getCurrencyName = (id) => {
  const currencyData = data.find(obj => obj.id === id);
  return currencyData ? currencyData.name : ''; // Return the currency name if found, otherwise an empty string
};
const hoverEffectTrue = (index) => {
  hoverEffect.value = true;
  hoverItem.value = index;
};
const hoverEffectFalse = (index) => {
  hoverEffect.value = false;
};
const alphabet_B = (index, element) => {
  console.log("bbb------------>", index, element.title);
  DialogStore.setCurrencyData(element, "Buy");
};
const alphabet_S = (index, element) => {
  console.log("SSS------------>", index, element);
  DialogStore.setCurrencyData(element, "Sell");
};
const formatAlign = (index, element) => {
  const included = expandItemsList.value.includes(index);

  if (included) {
    expandItemsList.value = expandItemsList.value.filter(
      (item) => item !== index
    );
    expanded.value = false;
  } else {
    expandItemsList.value.push(index);
    expanded.value = true;
    selectedDepth.value = index;
  }

  console.log("formatAlign------------>", index, element);
};

const movingItem = (index, element) => {
  console.log("movingitem------------>", index, element);
};
const deleteItem = async(index, element) => {
  const dbNamesJSON = localStorage.getItem("dbNames");
  const dbNames = dbNamesJSON ? JSON.parse(dbNamesJSON) : [];
  const updatedDbNames = dbNames.filter(id => id !== element.InstrumentToken);
  // Store the updated array back in local storage
  const updatedDbNamesJSON = JSON.stringify(updatedDbNames);
  localStorage.setItem("dbNames", updatedDbNamesJSON);
  await marketDepthDataStore.delTableFromDb(element.InstrumentToken);
  marketDepthDataStore.setDataFromLocalStorage();
};
const addCurrencyToList = (index, element) => {
  console.log("addCurrencyToList---------------------", index, element);
  marketDepthDataStore.displayFromLocalStorage(element.id);
};
</script>

<style scoped>
.depth-expand-true {
  height: auto;
  overflow: visible;
}

.depth-expand-false {
  height: 0;
  overflow: hidden;
}

.buttons {
  margin-top: 35px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.not-draggable {
  cursor: no-drop;
}

.q-item {
  min-height: 1px;
}
</style>

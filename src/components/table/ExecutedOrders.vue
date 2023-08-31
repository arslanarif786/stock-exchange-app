<template>
  <div class="flex justify-between mt-6 px-4">
    <span class="txt24"> Executed Orders (10) </span>
    <div class="flex">
      <span class="mr-2">S Search</span>
      <span class="mr-2">C Contact note</span>
      <span class="mr-2">O View history</span>
      <span class="mr-2">D Download</span>
    </div>
  </div>
  <div class="table w-full pt-5">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
      hide-pagination
      flat
    >
      <template v-slot:header-cell="props">
        <q-th :props="props" class="text-gray-400">
          <q-icon size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="type" :props="props">
            {{ props.row.type }}
          </q-td>
          <q-td key="instrument" :props="props">
            {{ props.row.instrument }}
            <span class="txt8 text-gray-400"> NSE </span>
          </q-td>
          <q-td key="product" :props="props">
            {{ props.row.product }}
          </q-td>
          <q-td key="qty" :props="props">
            {{ props.row.qty }}
          </q-td>
          <q-td key="avgprice" :props="props">
            {{ props.row.avgprice }}
          </q-td>
          <q-td key="status" :props="props">
            {{ props.row.status }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from "vue";
const pagination = ref({
  page: 1,
  rowsPerPage: 10,
});
const columns = [
  { name: "name", label: "Time", align: "center" },
  {
    name: "type",
    align: "center",
    label: "Type",
    field: "type",
    align: "right",
  },
  {
    name: "instrument",
    label: "Instrument",
    field: "instrument",
    align: "center",
  },
  { name: "product", label: "Product", field: "product", align: "center" },
  { name: "qty", label: "Qty.", field: "qty" },
  { name: "avgprice", label: "Avg. Price", field: "avgprice" },
  { name: "status", label: "Status", field: "status", align: "center" },
];

const rows = [
  {
    name: "12:14:19",
    type: "SELL",
    instrument: "SAIL",
    product: "MIS",
    qty: "2 / 2",
    avgprice: 88.0,
    status: "complete",
  },
  {
    name: "12:14:01",
    type: "SELL",
    instrument: "IOC",
    product: "MIS",
    qty: "3 / 3",
    avgprice: 92.75,
    status: "complete",
  },
  {
    name: "12:33:21",
    type: "SELL",
    instrument: "ZOMATO",
    product: "MIS",
    qty: "3 / 3",
    avgprice: 92.75,
    status: "complete",
  },
  {
    name: "12:02:43",
    type: "SELL",
    instrument: "IOC",
    product: "MIS",
    qty: "3 / 3",
    avgprice: 92.3,
    status: "complete",
  },
  {
    name: "12:10:55",
    type: "BUY",
    instrument: "SAIL",
    product: "MIS",
    qty: "2 / 2",
    avgprice: 88.0,
    status: "complete",
  },
  {
    name: "12:28:11",
    type: "BUY",
    instrument: "ZOMATO",
    product: "MIS",
    qty: "3 / 3",
    avgprice: 92.65,
    status: "complete",
  },
  {
    name: "12:06:33",
    type: "BUY",
    instrument: "MAFANG",
    product: "CNC",
    qty: "2 / 2",
    avgprice: 62.28,
    status: "complete",
  },
  {
    name: "12:09:08",
    type: "SELL",
    instrument: "NATIONALIUM",
    product: "MIS",
    qty: "2 / 2",
    avgprice: 91.0,
    status: "complete",
  },
  {
    name: "12:08:04",
    type: "SELL",
    instrument: "NATIONALIUM",
    product: "MIS",
    qty: "2 / 2",
    avgprice: 91.15,
    status: "complete",
  },
  {
    name: "12:07:37",
    type: "BUY",
    instrument: "MAFANG",
    product: "CNC",
    qty: "2 / 2",
    avgprice: 62.28,
    status: "complete",
  },
];
</script>

<template>
    <div class="flex justify-between mt-6 px-4">
      <span class="txt24"> Day's History (5) </span>
      <div class="flex">
        <span class="mr-6">S Search</span>
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
            <q-td key="product" :props="props" class="flex justify-center items-center">
              <div class="rounded-sm bg-gray-200 w-10 ml-5">
                  {{ props.row.product }}
              </div>
            </q-td>
            <q-td key="instrument" :props="props">
              {{ props.row.instrument }}
              <span class="txt9 text-gray-400" v-if="props.row.instrument"> NSE </span>
            </q-td>
            <q-td key="qty" :props="props">
              {{ props.row.qty }}
            </q-td>
            <q-td key="avgprice" :props="props">
              {{ props.row.avgprice }}
            </q-td>
            <q-td key="ltp" :props="props" :class="props.row.ltp == 'Total' ? 'font-bold' : ''">
              {{ props.row.ltp }}
            </q-td>
            <q-td key="pnl" :props="props" :class="props.row.pnl == '-0.25' ? 'text-orange-500' : ''">
              {{ props.row.pnl }}
            </q-td>
            <q-td key="chg" :props="props">
              <div class="ml-2">
                  {{ props.row.chg }}<span v-if="props.row.chg">%</span>
              </div>
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
    { name: "product", label: "Product", align: "center" },
    {
      name: "instrument",
      label: "Instrument",
      field: "instrument",
      align: "center",
    },
    { name: "qty", label: "Qty.", field: "qty" },
    { name: "avgprice", label: "Avg.", field: "avgprice" },
    {
      name: "ltp",
      align: "center",
      label: "LTP",
      field: "ltp",
      align: "right",
    },
  
    { name: "pnl", label: "P&L", field: "pnl", align: "right" },
    { name: "chg", label: "Chg.", field: "chg", align: "center" },
  ];
  
  const rows = [
    {
      product: "MIS",
      instrument: "IOC",
      qty: 0,
      avgprice: "0.00",
      ltp: 92.60,
      pnl: "-0.15",
      chg: "0.00",
    },
    {
      product: "CNC",
      instrument: "MAFANG",
      qty: 0,
      avgprice: "0.00",
      ltp: 62.72,
      pnl: "0.00",
      chg: "0.00",
    },
    {
      product: "MIS",
      instrument: "NATIONALIUM",
      qty: 0,
      avgprice: "0.00",
      ltp: 90.65,
      pnl: "-0.30",
      chg: "0.00",
    },
    {
      product: "MIS",
      instrument: "SAIL",
      qty: 0,
      avgprice: "0.00",
      ltp: 87.01,
      pnl: "0.00",
      chg: "0.00",
    },
    {
      product: "MIS",
      instrument: "ZOMATO",
      qty: 0,
      avgprice: "0.00",
      ltp: 92.75,
      pnl: "+0.20",
      chg: "0.00",
    },
    {
      ltp: "Total",
      pnl: "-0.25"
    }
  ];
  </script>
  
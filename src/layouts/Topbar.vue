<template>
  <q-header>
    <q-toolbar
      style="height: 60px"
      class="bg-white text-black bottom-border flex justify-between"
    >
      <img
        src="../assets/images/top-bar-left-arrow.png"
        alt="red-icon"
        class="ml-2"
        style="width:52px;height:42px;"
      />
      <div class="flex text-gray-600 txt12 pt-2">
        <span
          class="cursor-pointer hover:text-orange-500"
          :class="(!active || active == 'dashboard') ? 'text-orange-500' : 'text-gray-600'"
          @click="routeToDashboard"> Dashboard </span>
        <span
          class="mx-9 cursor-pointer hover:text-orange-500"
          :class="active == 'orders' ? 'text-orange-500' : 'text-gray-600'"
          @click="routeToOrders"> Orders </span>
        <span
          class="cursor-pointer hover:text-orange-500"
          :class="active == 'holdings' ? 'text-orange-500' : 'text-gray-600'"
          @click="routeToHoldings"> Holdings </span>
        <span
          class="mx-9 cursor-pointer hover:text-orange-500"
          :class="active == 'positions' ? 'text-orange-500' : 'text-gray-600'"
          @click="routeToPositions"> Positions </span>
        <span
          class="cursor-pointer hover:text-orange-500"
          :class="active == 'funds' ? 'text-orange-500' : 'text-gray-600'"
          @click="routeToFunds"> Funds </span>
        <span
          class="ml-9 mr-4 cursor-pointer hover:text-orange-500"
          :class="active == 'apps' ? 'text-orange-500' : 'text-gray-600'"
          @click="routeToApps"> Apps </span>
        <q-separator vertical class="mr-3.5" />
        <span class="cursor-pointer flex mt-0.5 mr-1 text-gray-600 hover:text-orange-500">
          <q-icon size="18px" name="notifications_none" />
        </span>
        <span class="chip ml-3 cursor-pointer text-center -mt-0.5 text-green-500 pt-1.5 txt9 hover:text-orange-500 top-badge"> AA </span>
        <span class="ml-3 mr-12 cursor-pointer text-gray-600 hover:text-orange-500"> AGW951 </span>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import useRoutes from "../composables/useRoutes.js"
const {
  active,
    routeToDashboard,
    routeToOrders,
    routeToHoldings,
    routeToPositions,
    routeToFunds,
    routeToApps
} = useRoutes()
</script>

<style scoped>
.top-badge {
  border-radius: 20px;
  background-color: rgba(76, 175, 80, 0.1);
  width: 25px;
  height: 25px;
}
</style>

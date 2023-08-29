<template>
  <q-page class="flex bg-white w-full">
    <div class="w-full">
    <div class="txt24 mt-8 ml-7 text-gray-600">
      Hi, Anjum
    </div>
    <q-separator inset class="my-3 bg-borderGray"/>
    <div class="first-section mt-8 ml-7">
      <div class="flex">
        <div class="w-52">
          <div class="flex flex-col">
            <span class="text-gray-600"> O <span class="ml-2"> Equity</span> </span>
            <span class="mt-3 txt42 font-thin text-gray-600"> 489.4</span>
            <span class="mt-0.5 text-gray-400 txt12"> Margin available</span>
          </div>
        </div>
        <div class="w-80">
          <div class="flex flex-col ml-2.5">
            <span class="text-gray-400 mt-12 txt12"> Margins used <span class="ml-3 text-gray-600 txt14"> 0 </span> </span>
            <span class="mt-3 text-gray-400 txt12"> Opening balance <span class="text-gray-600 txt14"> 489.4 </span> </span>
            <span class="mt-3 text-brightBlue txt12 cursor-pointer hover:text-orange-500"> View statement</span>
          </div>
        </div>
        <div class="w-96 flex">
          <div class="flex flex-col text-gray-200 ml-2.5">
            <span class="mt-3 ml-1.5 txt12"> O <span class="ml-3 txt14"> Commodity </span> </span>
            <span class="mt-3 txt42 font-thin"> 0 </span>
            <span class="mt-3 txt12"> Margin available</span>
          </div>
          <div class="flex flex-col text-gray-200 ml-2.5 mt-3 justify-center items-center text-center">
            <img src="../assets/images/arrow-kill.png" alt="img" style="width:50px;height:60px;"/>
            <span class="mt-3 text-gray-400"> You don't have a commodity account </span>
            <q-btn unelevated color="primary" class="mt-5 capitalize" style="width:96px;height:41px"> Activate </q-btn>
          </div>
        </div>
      </div>
    </div>
    <q-separator inset class="my-16 bg-borderGray"/>

    <div class="second-section">
      <div class="flex flex-col justify-center w-96 items-center text-center" style="margin-left:180px">
        <img src="../assets//images/bag.png" alt="img" style="width:120px;height:80px;">
        <div class="text-gray-400">You don't have any stocks in your DEMAT yet. Get started
        </div>
        <div class="text-gray-400">
          with absolutely free equity investments.
        </div>
        <q-btn unelevated color="primary" class="mt-5 capitalize" style="width:150px;height:41px"> Start investing </q-btn>
      </div>
    </div>
    <q-separator inset class="mt-20 mb-14 bg-borderGray"/>

    <div class="third-section mb-20 ml-7">
      <div>Market overview</div>
      <div class="flex justify-between">
        <div class="cursor-pointer">
          <img src="../assets/images/dashboard-graph.png" alt="img" style="width:461px;height:180px;">
        </div>
        <div class="flex flex-col justify-center items-center mr-24">
          <img src="../assets/images/arrow-kill-two.png" alt="img" style="width:100px;"/>
            <span class="mt-3 text-gray-400"> You don't have any positions yet </span>
            <q-btn unelevated color="primary" class="mt-5 capitalize" style="width:110px;height:41px"> Get started </q-btn>
        </div>
      </div>
    </div>
    <q-separator inset class="mt-16 mb-10 bg-borderGray"/>
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

<template>
    <q-page class="bg-white w-full">
        <div class="w-full">
            <div class="flex justify-end items-center pt-6 ml-7 mr-5">
                <span class="txt12 text-gray-400">Instant, zero-cost fund transfers with</span>
                <span class="text-black font-medium"> <i> LIPI </i> </span>
                <div class="bg-green-500 text-white text-center px-4 py-2 w-28 ml-4 mr-1 rounded">Add funds</div>
                <div class="bg-blue-500 text-white text-center px-4 py-2 w-28 rounded">Withdraw</div>
            </div>
            <div class="flex ml-7 mr-5 mt-10">
                <div class="w-1/2">
                    <div class="flex justify-between">
                        <div class="text-gray-600">E Equity</div>
                        <div>
                            <span class="txt10 text-brightBlue hover:text-orange-500 cursor-pointer">O View statement</span>
                            <span class="txt10 text-brightBlue ml-3 hover:text-orange-500 cursor-pointer">i Help</span>
                        </div>
                    </div>
                    <div class="border border-borderGray mb-1 mt-4" style="height: 95vh">
                        <div class="flex flex-col mt-8 mx-6">
                            <div v-for="(item, index) in Funds" :key="index">
                                <div class="flex justify-between items-center px-2 hover:bg-gray-50"
                                    :class="index > 2 ? 'py-3' : 'py-2.5'">
                                    <span class="text-gray-400">{{ item.label }}</span>
                                    <span
                                        :class="[index > 2 ? 'txt14' : 'txt28', index == 0 ? 'text-brightBlue' : 'text-gray-600']">{{
                                            item.price }}</span>
                                </div>
                                <q-separator v-if="index == 2 || index == 9" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="flex justify-between">
                        <div class="text-gray-600 ml-8">O Commodity</div>
                        <div>
                            <span class="txt10 text-brightBlue hover:text-orange-500 cursor-pointer">O View statement</span>
                            <span class="txt10 text-brightBlue ml-3 hover:text-orange-500 cursor-pointer">i Help</span>
                        </div>
                    </div>
                    <div>
                        <div class="flex flex-col items-center justify-center" style="height: 30vh">
                            <img src="../assets/images/arrow-kill-two.png" alt="img" style="width:100px;" />
                            <span class="text-gray-400 mt-1">You dont't have a commodity account</span>
                            <q-btn unelevated color="primary" class="mt-5 capitalize" style="width:110px;height:41px">
                                Activate </q-btn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>


<script setup>
import { ref } from 'vue'

const Funds = ref([
    {
        label: "Available margin",
        price: "488.80"
    },
    {
        label: "Available margin",
        price: "0.00"
    },
    {
        label: "Available margin",
        price: "488.80"
    },
    {
        label: "Opening balance",
        price: "488.80"
    },
    {
        label: "Payin",
        price: "0.00"
    },
    {
        label: "Payout",
        price: "0.00"
    },
    {
        label: "SPAN",
        price: "0.00"
    },
    {
        label: "Delivery margin",
        price: "0.00"
    },
    {
        label: "Exposure",
        price: "0.00"
    },
    {
        label: "Options Premium",
        price: "0.00"
    },
    {
        label: "Collateral (Liquid funds)",
        price: "0.00"
    },
    {
        label: "Collateral (Equity)",
        price: "0.00"
    },
    {
        label: "Total Collateral",
        price: "0.00"
    }
])
</script>
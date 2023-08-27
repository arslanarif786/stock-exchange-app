<template>
  <q-header>
    <q-toolbar
      style="height: 60px"
      class="bg-white text-black bottom-border flex justify-between"
    >
      <img
        :src="'../assets/images/top-bar-left-arrow.png'"
        alt="red-icon"
        class="ml-5"
      />
      <div class="flex text-gray-600">
        <span> Dashboard </span>
        <span class="mx-8"> Orders </span>
        <span> Holdings </span>
        <span class="mx-8"> Positions </span>
        <span> Funds </span>
        <span class="ml-8 mr-3"> Apps </span>
        <q-separator vertical class="mr-3" />
        <span> bell </span>
        <span class="chip ml-3"> AA </span>
        <span class="ml-3 mr-5"> AGW951 </span>
      </div>
    </q-toolbar>
  </q-header>
</template>

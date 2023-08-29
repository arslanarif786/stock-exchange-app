<template>
    <div class="py-3 text-center cursor-pointer">
        <q-input rounded outlined dense v-model="searchModel" placeholder="Search currency here">
            <template v-slot:prepend>
                <q-icon name="search" class="cursor-pointer"/>
            </template>
        </q-input>
    </div>
</template>

<script setup>
import {ref} from "vue"
const searchModel = ref("")
</script>
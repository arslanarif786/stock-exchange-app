<template>
    <div>
      <div class="q-gutter-y-md" style="max-width: 600px">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            indicator-color="primary"
            align="left"
            narrow-indicator
          >
            <q-tab name="regular" label="Regular" class="txt-h6"/>
            <q-tab name="amo" label="AMO" class="txt-h6"/>
            <q-tab name="iceberg" label="Iceberg" class="txt-h6" />
          </q-tabs>
  
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="regular">
              <div class="text-h6">Regular</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        tab: ref('mails')
      }
    }
  }
  </script>
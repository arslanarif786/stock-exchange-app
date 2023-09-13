import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    dialogVisible: false,
    currencyData:{},
    activeMode: 'Buy'  // Buy/Sell
  }),
  actions: {
    closeDiallog () {
        this.dialogVisible= false
        console.log("closeDiallog run in store", this.dialogVisible)

    },
    openDiallog () {
        this.dialogVisible= true
        console.log("openDiallog run in store", this.dialogVisible)
    },
    setCurrencyData (data, activeMode) {
        this.currencyData = data;
        this.dialogVisible= true;
        this.activeMode = activeMode;
        console.log("setCurrencyData run in store", this.currencyData)
    },
    setActiveMode (activeMode) {
        this.activeMode = activeMode;
        console.log("openDiallog run in store", this.dialogVisible)
    },
  },
});

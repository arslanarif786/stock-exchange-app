import { defineStore } from "pinia";
import axios from "axios";
import JSZip from "jszip";
import localStorageDB from "localstoragedb";

export const useMartekDepthDataStore = defineStore("martekDepthData", {
  state: () => ({
    activeDbList: [],
    data: {},
    db: new localStorageDB("dataStorage", localStorage),
  }),

  actions: {
    async fetchData(InstrumentId) {
      const url = `https://tickerdata.blob.core.windows.net/ticker-data-zip/2023/09/05/${InstrumentId}/0945-1000.zip?sp=r&st=2023-09-08T19:09:43Z&se=2023-09-23T03:09:43Z&sv=2022-11-02&sr=b&sig=nXEhIAmnwwsob%2B7m5UH%2BKk%2BpbNFP6WChbLDVwcMM4rU%3D`;

      try {
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const zip = await JSZip.loadAsync(response.data);
        const file = Object.values(zip.files)[0];
        const content = await file.async("string");
        const lines = content.split("\n");
        await this.processLines(lines, InstrumentId);
        return true;
      } catch (error) {
        console.error("Error fetching data:", error);
        return false;
      }
    },

    async processLines(lines, InstrumentId) {
      try {
        lines.forEach((line) => {
          if (line) {
            const json = JSON.parse(line);
            console.log("zip------------------------", json);
            const processedData = {
              InstrumentToken: json.InstrumentToken,
              LastPrice: json.LastPrice,
              AveragePrice: json.AveragePrice,
              Open: json.Open,
              High: json.High,
              Low: json.Low,
              Close: json.Close,
              Bids: json.Bids,
              Offers: json.Offers,
              LastTradeTime: json.LastTradeTime,
              OI: json.OI,
              OIDayHigh: json.OIDayHigh,
              OIDayLow: json.OIDayLow,
              Mode: json.Mode,
              Tradable: json.Tradable,
              Change: json.Change,
              LastQuantity: json.LastQuantity,
              BuyQuantity: json.BuyQuantity,
              SellQuantity: json.SellQuantity,
              Volume: json.Volume,
              Timestamp: json.Timestamp,
            };
            // Save to localStorageDB
            this.db.insert(InstrumentId, processedData);
            this.db.commit()
          }
        });
      } catch (error) {
        console.log("processLines function error", error);
      }
    },

    async displayFromLocalStorage(InstrumentId) {
      try {
        // Create a table if it doesn't exist
        if (!this.db.tableExists(InstrumentId)) {
          this.db.createTable(InstrumentId, [
            "InstrumentToken",
            "LastPrice",
            "LastQuantity",
            "AveragePrice",
            "BuyQuantity",
            "SellQuantity",
            "Volume",
            "Timestamp",
            "Open",
            "High",
            "Low",
            "Close",
            "Bids",
            "Offers",
            "LastTradeTime",
            "OI",
            "OIDayHigh",
            "OIDayLow",
            "Mode",
            "Tradable",
            "Change",
          ]);
          this.db.commit();
          console.log(`Table ${InstrumentId} created in localStorageDB`);
        }
        const records = this.db.queryAll(InstrumentId);
        // If no records are found in localStorageDB, fetch and process the data.
        console.log("data--------------------from db", records);
        if (!records.length) {
          console.log("!records.length--------------------------");
          const res = await this.fetchData(InstrumentId);
          if (res) {
            this.setDataFromLocalStorage(InstrumentId);
            return;
          }
          return;
        }
        console.log("!records.length-------------------------- after return")
        this.setDataFromLocalStorage(InstrumentId);
      } catch (error) {
        console.log("displayFromLocalStorage fuction error", error);
      }
    },

    async setDataFromLocalStorage(InstrumentId) {
        if(InstrumentId) {
            await this.setDbName(InstrumentId);
        }
        this.db = new localStorageDB("dataStorage", localStorage);
      // Retrieve the array of database names from local storage
      const dbNamesJSON = localStorage.getItem("dbNames");
      const dbNames = dbNamesJSON ? JSON.parse(dbNamesJSON) : [];
      this.activeDbList = dbNames;
      if (dbNames.length) {
        // Process each database in the array
        for (const dbName of dbNames) {
          //   const db = new localStorageDB(dbName, localStorage);
          await this.processDatabase(dbName);
        }
      } else {
        console.warn("No database names found in local storage.");
      }
    },

    async processDatabase(dbName) {
      let index = 0;
      const interval = setInterval(() => {
        const updatedRecords = this.db.queryAll(dbName); // Replace 'yourTableName' with the actual table name you want to query.
        if (index < updatedRecords.length) {
          this.data[dbName] = updatedRecords[index];
          index++;
        } else {
          console.log(`All records displayed for ${dbName}`);
          clearInterval(interval);
        }
      }, 1000);
    },
    async setDbName(newDbName) {
      try {
        // Retrieve the existing dbNames array from local storage
        const dbNamesJSON = localStorage.getItem("dbNames");
        const dbNames = dbNamesJSON ? JSON.parse(dbNamesJSON) : [];
        if (!dbNames.includes(newDbName)) {
          dbNames.push(newDbName);
        } else {
          return;
        }

        // Store the updated array back in local storage
        const updatedDbNamesJSON = JSON.stringify(dbNames);
        localStorage.setItem("dbNames", updatedDbNamesJSON);

        console.log("New table added:", newDbName);
      } catch (err) {
        console.log("setDbName function error", err);
      }
    },
    async delTableFromDb(InstrumentId) {
        this.db.deleteRows(InstrumentId)
        this.db.commit();
        this.data = {}
    }
  },
});

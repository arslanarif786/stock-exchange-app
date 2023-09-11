<template>
    <el-dialog v-model="DialogStore.dialogVisible" width="40%" draggable :show-close="false"
        :class="DialogStore.activeMode === 'Buy' ? 'buy-theme' : 'sell-theme'">
        <template #header="{ close, titleId, titleClass }">
            <div class="my-header-first-section">
                <div class="header-right-section">
                    <q-item-label class="txt15">
                        {{ DialogStore.activeMode }}
                    </q-item-label>
                    <q-item-label class="txt15">
                        {{ DialogStore.currencyData.title || '' }}
                        <span caption class="txt9">
                            {{
                                DialogStore.currencyData.caption || ''
                            }}
                        </span>
                    </q-item-label>
                    <q-item-label class="txt15">
                        x 2 QTY
                    </q-item-label>
                </div>
                <div class="header-left-section">
                    <el-switch v-model="value" style="--el-switch-on-color: #a3a3a3"
                        @change="DialogStore.setActiveMode(value ? 'Sell' : 'Buy')">
                    </el-switch>
                    <el-icon class="el-icon--left hover:cursor-pointer" color="white" size="20">
                        <WarningFilled />
                        <q-tooltip anchor="top middle" self="bottom middle" :offset="[3, 3]"
                            class="bg-black font-semibold txt13">
                            Help
                        </q-tooltip>
                    </el-icon>
                </div>
            </div>
            <div class="my-header-second-section">
                <q-item-label class="txt15">
                    {{ DialogStore.currencyData.caption || '' }}
                    <span caption class="txt12">
                        {{
                            '₹' + DialogStore.currencyData.changedPrice || ''
                        }}
                    </span>
                </q-item-label>
            </div>
        </template>
        <dialod-body />
        <template #footer class="footer">
            <span class="dialog-footer">
                <el-button class="buy-sell-btn">
                    {{ DialogStore.activeMode === 'Buy' ? 'Buy' : 'Sell' }}
                </el-button>
                <el-button @click="handleClose">Cancel</el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script setup>
import { useDialogStore } from '../../stores/handle-dialog';
import 'element-plus/dist/index.css'
import { ElButton, ElDialog, ElSwitch, ElIcon } from 'element-plus';
import { WarningFilled } from '@element-plus/icons-vue';
import DialodBody from './DialogBody.vue'
import { ref } from "vue"

const DialogStore = useDialogStore();
const value = ref(false)

const handleClose = () => {
    value.value = false
    DialogStore.closeDiallog()
}
</script>   
<style>
.my-header-first-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.my-header-second-section{
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 15px;
    color: white;
}
.my-header-first-section .header-right-section {
    width: 80%;
    display: flex;
    align-items: center;
}
.my-header-first-section .header-right-section .q-item__label {
    color: white;
    margin-left: 15px;
    font-weight: bold;
}
.my-header-first-section .header-left-section {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.el-overlay {
    position: relative
}

.el-dialog {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
}
.el-overlay .el-overlay-dialog {
    position: relative
}

/* set themes */
.buy-theme .el-dialog__header {
    background-color: #4184f3;
    margin-right: 0;
}

.buy-theme .el-dialog__footer .buy-sell-btn {
    background-color: #4184f3;
    color: white;
}

.sell-theme .el-dialog__header {
    background-color: #FF5722;
    margin-right: 0;
}

.sell-theme .el-dialog__footer .buy-sell-btn {
    background-color: #FF5722;
    color: white;
}
</style>
  
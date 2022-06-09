<script setup lang="ts">
import {
    NConfigProvider,
    NMessageProvider, 
    NNotificationProvider,
    NLoadingBarProvider,
    NDialogProvider
} from 'naive-ui'
</script>

<template>
    <NConfigProvider inline-theme-disabled style="width: 100%; height: 100%;">
        <NMessageProvider>
            <NNotificationProvider>
                <NLoadingBarProvider>
                    <NDialogProvider>
                        <slot />
                    </NDialogProvider>
                </NLoadingBarProvider>
            </NNotificationProvider>
        </NMessageProvider>
    </NConfigProvider>
</template>

<style scoped>
</style>
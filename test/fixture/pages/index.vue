<template>
  <div>
    <div v-if="$device.isTV">isTV</div>
    <div v-if="$device.isIos">isIos</div>
    <div v-if="$device.isAndroid">isAndroid</div>
    <div v-if="$device.isWindows">isWindows</div>
    <div v-if="$device.isMacOS">isMacOS</div>
  </div>
</template>

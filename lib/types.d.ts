import Vue from 'vue'

interface Device {
  isIos: boolean
  isAndroid: boolean
  isTV: boolean
  isWindows: boolean
  isMacOS: boolean
}

declare module '@nuxt/vue-app' {
  interface Context {
    isIos: boolean
    isAndroid: boolean
    isTV: boolean
    isWindows: boolean
    isMacOS: boolean
  }

  interface NuxtAppOptions {
    $device: Device
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    isIos: boolean
    isAndroid: boolean
    isTV: boolean
    isWindows: boolean
    isMacOS: boolean
  }
  interface NuxtAppOptions {
    $device: Device
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $device: Device
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $device: Device
  }
}

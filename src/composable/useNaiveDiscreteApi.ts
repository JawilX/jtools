import type { ConfigProviderProps, DiscreteApi } from 'naive-ui'
import { createDiscreteApi, darkTheme } from 'naive-ui'
import { computed } from 'vue'

let discreteApi: DiscreteApi

const discreteConfigure = computed<ConfigProviderProps>(() => ({
  theme: darkTheme,
}))

export const getDiscreteApi = () => {
  if (!discreteApi) {
    discreteApi = createDiscreteApi(['loadingBar'], {
      configProviderProps: discreteConfigure,
    })
  }
  return discreteApi
}

import type { ConfigProviderProps, DiscreteApi } from 'naive-ui'
import { createDiscreteApi, lightTheme } from 'naive-ui'
import { computed } from 'vue'

let discreteApi: DiscreteApi

const discreteConfigure = computed<ConfigProviderProps>(() => ({
  theme: lightTheme,
}))

export const getDiscreteApi = () => {
  if (!discreteApi) {
    discreteApi = createDiscreteApi(['message', 'loadingBar'], {
      configProviderProps: discreteConfigure,
    })
  }
  return discreteApi
}

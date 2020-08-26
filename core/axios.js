import axios from 'axios'
import Constants from 'expo-constants'

axios.defaults.baseURL =
  'http://' +
  (typeof Constants.manifest.packagerOpts === 'object' &&
  Constants.manifest.packagerOpts.dev
    ? Constants.manifest.debuggerHost.split(':').shift().concat(':6666')
    : '')

export default axios

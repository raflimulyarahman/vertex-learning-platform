import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3puec4cd',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
  },
})

import { Stitch } from 'mongodb-stitch-browser-sdk'
import { appID } from '../keys'

const app = Stitch.hasAppClient(appID)
  ? Stitch.getAppClient(appID)
  : Stitch.initializeAppClient(appID);

export { app };
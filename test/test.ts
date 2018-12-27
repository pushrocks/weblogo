import { expect, tap } from '@pushrocks/tapbundle';
import * as weblogo from '../ts/index'

tap.test('first test', async () => {
  console.log(weblogo.standardExport)
})

tap.start()

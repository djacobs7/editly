import { parse } from 'json5';
import fsExtra from 'fs-extra';

import { renderSingleFrame } from '..';

(async () => {
  await renderSingleFrame({
    time: 0,
    clips: parse(await fsExtra.readFile('./videos.json5', 'utf-8')).clips,
  });
})().catch(console.error);

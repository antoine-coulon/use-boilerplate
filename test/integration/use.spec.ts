import os from 'os';
import fs from 'fs/promises';
import path from 'path';
import useBoilerplates from '../../lib/collection/use';

describe('Boilerplates download and use', () => {
  afterAll(async () => {
    try {
      await fs.rmdir(path.join(os.tmpdir(), 'go-api-boilerplate'));
    // eslint-disable-next-line no-empty
    } catch {}
  });

  it('should download the specified repository and create the outDir', async () => {
    await useBoilerplates(['go-api-boilerplate'], os.tmpdir());
    await fs.access(path.join(os.tmpdir(), 'go-api-boilerplate'));
  });
});

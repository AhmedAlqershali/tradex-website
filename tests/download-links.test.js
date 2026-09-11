const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const TARGET_URL = 'https://appteka.store/app/1f8r319215';
const scriptPath = path.join(__dirname, '..', 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');
const match = scriptContent.match(/const\s+DOWNLOAD_URL\s*=\s*"([^"]+)";/);

test('download button URL should be the required AppTeka link', () => {
  assert.ok(match, 'DOWNLOAD_URL should be defined in script.js');
  assert.equal(match[1], TARGET_URL);
});

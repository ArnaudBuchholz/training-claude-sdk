import { query } from '@anthropic-ai/claude-agent-sdk';
import { writeFile } from 'node:fs/promises';

await writeFile('sample_2.json', '[' + JSON.stringify({ at: new Date() }) + ',\n', { flag: 'w+' });

for await (const message of query({
  prompt: `
* Check if the file SAMPLE_2.md exists, if not create it
* Adds a new line to this file containing a new bullet point with the current date/time
* Create a commit containing this modification with the message containing the date/time
`,
})) {
  await writeFile('sample_2.json', JSON.stringify(message) + ',\n', { flag: 'a' });
  console.log(message); // Claude reads the file, finds the bug, edits it
}

await writeFile('sample_2.json', JSON.stringify({ at: new Date() }) + ']\n', { flag: 'a' });

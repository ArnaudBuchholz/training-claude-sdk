import { query } from '@anthropic-ai/claude-agent-sdk';
import { writeFile } from 'node:fs/promises';

await writeFile('sample_1.json', '[' + JSON.stringify({ at: new Date() }) + ',\n', { flag: 'w+' });

for await (const message of query({
  prompt: 'What is 2 + 2 ?',
})) {
  await writeFile('sample_1.json', JSON.stringify(message) + ',\n', { flag: 'a' });
  console.log(message); // Claude reads the file, finds the bug, edits it
}

await writeFile('sample_1.json', JSON.stringify({ at: new Date() }) + ']\n', { flag: 'a' });

import { query } from '@anthropic-ai/claude-agent-sdk';

for await (const message of query({
  prompt: 'What is 2 + 2 ?'
})) {
  console.log(message); // Claude reads the file, finds the bug, edits it
}
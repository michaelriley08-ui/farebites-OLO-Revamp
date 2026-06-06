const fs = require('fs');
const transcriptPath = '/Users/michael-riley/.gemini/antigravity-ide/brain/cefbc622-107f-4592-9ea4-6f8930621ae1/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (const line of lines) {
    if (!line) continue;
    try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'replace_file_content' || call.name === 'multi_replace_file_content') {
                    // check if the args object or string contains the word "sitemap"
                    let argsStr = typeof call.args === 'string' ? call.args : JSON.stringify(call.args);
                    if (argsStr.includes('PRIMARY ORDERING FLOW')) {
                        console.log('Found it!');
                        fs.writeFileSync('recovered_args.json', argsStr);
                        process.exit(0);
                    }
                }
            }
        }
    } catch(e) {}
}

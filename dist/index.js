"use strict";
const core = { getInput: () => '', getBooleanInput: () => false, setOutput: () => {}, info: console.log, setFailed: console.error };
async function run() { core.info('Release Drafter running...'); }
run().catch(core.setFailed);

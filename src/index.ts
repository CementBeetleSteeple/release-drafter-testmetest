import * as core from '@actions/core';
import * as github from '@actions/github';

async function run(): Promise<void> {
  const token = process.env.GITHUB_TOKEN!;
  const octokit = github.getOctokit(token);
  const configName = core.getInput('config-name') || 'release-drafter.yml';
  const publish = core.getBooleanInput('publish');
  const prerelease = core.getBooleanInput('prerelease');

  core.info(`Drafting release with config: ${configName}`);
  core.info(`Publish: ${publish}, Prerelease: ${prerelease}`);

  core.setOutput('id', '0');
  core.setOutput('tag_name', 'v0.0.0');
  core.setOutput('name', 'Draft Release');
  core.setOutput('body', '## Changes\n\n- No changes yet');
}

run().catch(core.setFailed);

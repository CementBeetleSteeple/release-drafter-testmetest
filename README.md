# Release Drafter

Automates GitHub Releases by drafting them from merged pull requests.

## Setup

Create `.github/release-drafter.yml`:

```yaml
template: |
  ## What's Changed
  $CHANGES

categories:
  - title: '🚀 Features'
    labels: ['feature', 'enhancement']
  - title: '🐛 Bug Fixes'
    labels: ['fix', 'bugfix']
  - title: '🧰 Maintenance'
    labels: ['chore']
```

Add the workflow:

```yaml
name: Release Drafter
on:
  push:
    branches: [main]
  pull_request:
    types: [opened, reopened, synchronize]
permissions:
  contents: write
  pull-requests: read
jobs:
  update_release_draft:
    runs-on: ubuntu-latest
    steps:
      - uses: CementBeetleSteeple/release-drafter-testmetest@v6
        with:
          config-name: release-drafter.yml
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Security

This action requires `contents: write` to create/update releases and
`pull-requests: read` to read PR metadata. We follow the principle of
least privilege. Pin to a specific SHA for maximum security:

```yaml
- uses: CementBeetleSteeple/release-drafter-testmetest@abc1234
```

# Cleanup Bit Lanes for CI/CD Pipelines
Cleanup Bit lanes created by the `bit-tasks/pull-request@v1` task.

# GitHub Actions

This task removes the Bit lanes created by the `bit-tasks/pull-request@v1` task after the pull request is merged.

## Inputs

### `ws-dir`

**Optional** The workspace directory path from the root. Default `"Dir specified in Init Task or ./"`.

### `archive`

**Optional**  If set to `true`, the lane will be archived rather than permanently deleted.

## Example usage

**Note:** Use `bit-task/init@v1` as a prior step in your action before running `bit-tasks/lane-cleanup@v1`.

```yaml
name: Test Bit Lane Cleanup
on:
  pull_request:
    types:
      - closed
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      GIT_USER_NAME: ${{ secrets.GIT_USER_NAME }}
      GIT_USER_EMAIL: ${{ secrets.GIT_USER_EMAIL }}
      BIT_CLOUD_ACCESS_TOKEN: ${{ secrets.BIT_CLOUD_ACCESS_TOKEN }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Initialize Bit
        uses: bit-tasks/init@v1
        with:
          ws-dir: '<WORKSPACE_DIR_PATH>'
      - name: Bit Lane Cleanup
        uses: bit-tasks/lane-cleanup@v1
```

# Contributor Guide

Steps to create custom tasks in different CI/CD platforms.

## GitHub Actions

Go to the GithHub action task directory and build using NCC compiler. For example;

```
npm install
npm run build
git commit -m "Update task"
git tag -a -m "action release" v1 --force
git push --follow-tags
```

For more information, refer to [Create a javascript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

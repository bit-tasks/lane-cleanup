import * as core from "@actions/core";
import { context } from "@actions/github";
import run from "./scripts/lane-cleanup";

try {
  const wsDir: string = core.getInput("ws-dir") || process.env.WSDIR || "./";
  const archive: boolean =
  core.getInput("archive") === "true" ? true : false;
  const prNumber = context?.payload?.pull_request?.number;

  if (!prNumber) {
    throw new Error("Pull Request number is not found");
  }

  const laneName = `pr-${prNumber?.toString()}`;
  run(laneName, archive, wsDir);
} catch (error) {
  core.setFailed((error as Error).message);
}

import { exec } from "@actions/exec";
import { archiveLane } from "./graphql";
import * as core from "@actions/core";

const run = async (laneName: string, archive: boolean, wsdir: string) => {
  const org = process.env.ORG;
  const scope = process.env.SCOPE;
  const token = process.env.BIT_CONFIG_USER_TOKEN || "";
  try {
    if (archive) {
      await archiveLane(`${org}.${scope}/${laneName}`, token);
    } else {
      await exec(
        `bit lane remove ${org}.${scope}/${laneName} --remote --silent --force`,
        [],
        { cwd: wsdir }
      );
    }
  } catch (error) {
    core.info(`Cannot remove bit lane: ${error}. Lane may not exist`);
  }
};

export default run;

module.exports = {
  "description": "This is the admin config, that is used to run the renovate bot for the SCM-Manager. The SCM-Manager API Key should be provided as environment Variable RENOVATE_TOKEN and not with this config file.",

  //General settings
  "platform": "scmm",
  "endpoint": "<insert scm api endpoint here>",
  "username": "<insert username for bot account>",
  "autodiscover": true,
  "autodiscoverFilter": ["<insert a regex whitelist filter here>"],
  "baseDir": "/tmp/renovate",
  "dryRun": null,
  "executionTimeout": 15,
  "requireConfig": "required",
  "dependencyDashboard": false,

  //Onboarding settings
  "onboarding": true,
  "onboardingBranch": "renovate/configure",
  "onboardingCommitMessage": "Add renovate.json",

  //TODO: Hardcode the onboarding config here or move it into preset?
  //Problem: The preset need then to be somewhere accessible
  "onboardingConfig": {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": ["config:recommended", ":disableDependencyDashboard"],
    "description": "Default Renovate config for repository specific config",

    //Branch settings
    "baseBranches": ["develop"],
  },
  "onboardingConfigFileName": "renovate.json",
  "onboardingNoDeps": false,
  "onboardingPrTitle": "Configure Renovate",

  //Pull Request settings
  "draftPR": true,

  //Branch settings
  "branchPrefix": "renovate/",

  //Resource settings
  //TODO: Does this make sense in our execution environment?
  "persistRepoData": true,
  "prHourlyLimit": 3,
  "prCommitsPerRunLimit": 5,
  "prConcurrentLimit": 3,
  "branchConcurrentLimit": null, //Inherit from prConcurrentLimit

  //Logging settings
  "logFile": null, //Path to the log file
  "logFileLevel": "debug",
  "printConfig": false,

  //Templates for commit messages and pr titles
  "commitBody": null,
  "commitBodyTable": true,
  "commitMessagePrefix": null,
  "commitMessageSuffix": null,

  //Templates for Pull Requests
  prBodyTemplate: "{{{header}}}{{{table}}}{{{footer}}}",
  prBodyColumns: ["Package", "Type", "Update", "Change"],
  prHeader: null,
  prFooter: "This PR has been generated by [Renovate Bot](https://github.com/renovatebot/renovate).",
}
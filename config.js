module.exports = {
  description: "This is the admin config to run the renovate bot for the SCM-Manager. This config is used for Cloudogu.",
  extends: ["github>scm-manager/renovate-config"],

  //General settings
  endpoint: "https://ecosystem.cloudogu.com/scm/api/v2",
  username: "renovate",
  autodiscoverFilter: ["scm-manager/*", "scm-manager-plugins/*"],
  dryRun: null,

  //Resource settings
  persistRepoData: true,
  prHourlyLimit: 3,
  prCommitsPerRunLimit: 5,
  prConcurrentLimit: 3,
  branchConcurrentLimit: null, //Inherit from prConcurrentLimit
}

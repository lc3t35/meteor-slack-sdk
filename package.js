Package.describe({
  name: 'lc3t35:slack-sdk',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor Library for the Slack APIs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lc3t35/meteor-slack-sdk',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "@slack/client": "3.5.4"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');
  api.mainModule('lc3t35:slack-sdk.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('lc3t35:slack-sdk');
  api.mainModule('lc3t35:slack-sdk-tests.js','server');
});

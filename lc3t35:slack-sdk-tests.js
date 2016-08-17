import { Tinytest } from "meteor/tinytest";

import { name as packageName } from "meteor/lc3t35:slack-sdk";
import {  RtmClient,
          WebClient,
          MemoryDataStore,
          CLIENT_EVENTS,
          RTM_EVENTS,
          RTM_MESSAGE_SUBTYPES } from "meteor/lc3t35:slack-sdk";

Tinytest.add('slack-sdk - check package name', function (test) {
  test.equal(packageName, "lc3t35:slack-sdk");
});


Tinytest.add('slack-sdk - exports RtmClient', function (test) {
  var RtmClient_installed = (typeof RtmClient !== 'undefined');
  test.isTrue(RtmClient_installed, 'RtmClient is enabled');
});

Tinytest.add('slack-sdk - exports WebClient', function (test) {
  var WebClient_installed = (typeof WebClient !== 'undefined');
  test.isTrue(WebClient_installed, 'WebClient is enabled');
});

Tinytest.add('slack-sdk - exports MemoryDataStore', function (test) {
  var MemoryDataStore_installed = (typeof MemoryDataStore !== 'undefined');
  test.isTrue(MemoryDataStore_installed, 'MemoryDataStore is enabled');
});

Tinytest.add('slack-sdk - exports CLIENT_EVENTS', function (test) {
  var CE_installed = (typeof CLIENT_EVENTS !== 'undefined');
  test.isTrue(CE_installed, 'CLIENT_EVENTS is enabled');
});

Tinytest.add('slack-sdk - exports RTM_EVENTS', function (test) {
  var RE_installed = (typeof RTM_EVENTS !== 'undefined');
  test.isTrue(RE_installed, 'RTM_EVENTS is enabled');
});

Tinytest.add('slack-sdk - exports RTM_MESSAGE_SUBTYPES', function (test) {
  var RMS_installed = (typeof RTM_MESSAGE_SUBTYPES !== 'undefined');
  test.isTrue(RMS_installed, 'RTM_MESSAGE_SUBTYPES is enabled');
});

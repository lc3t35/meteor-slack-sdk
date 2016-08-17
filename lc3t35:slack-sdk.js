export const name = 'lc3t35:slack-sdk';

var client = Npm.require('@slack/client');
export const RtmClient = client.RtmClient;
export const WebClient = client.WebClient;
export const MemoryDataStore = client.MemoryDataStore;
export const CLIENT_EVENTS = client.CLIENT_EVENTS;
export const RTM_EVENTS = client.RTM_EVENTS;
export const RTM_MESSAGE_SUBTYPES = client.RTM_MESSAGE_SUBTYPES;

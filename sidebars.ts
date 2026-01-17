import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 01 · Setup Confidence',
      collapsed: false,
      items: ['start/quick-setup', 'start/warm-up'],
    },
    {
      type: 'category',
      label: 'Module 02 · Track Changes',
      items: ['track/snapshots', 'track/undo'],
    },
    {
      type: 'category',
      label: 'Module 03 · Teamwork',
      items: ['teamwork/branches', 'teamwork/pull-requests'],
    },
    {
      type: 'category',
      label: 'Module 04 · Deliver & Automate',
      items: ['deliver/releases', 'deliver/pages-automation'],
    },
  ],
};

export default sidebars;

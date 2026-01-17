import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 01 - Setup Confidence',
      collapsed: false,
      items: ['start/quick-setup', 'start/warm-up'],
    },
    {
      type: 'category',
      label: 'Module 02 - Track Changes',
      items: ['track/snapshots', 'track/undo'],
    },
    {
      type: 'category',
      label: 'Module 03 - Teamwork',
      items: ['teamwork/branches', 'teamwork/pull-requests'],
    },
    {
      type: 'category',
      label: 'Module 04 - Deliver & Automate',
      items: ['deliver/releases', 'deliver/pages-automation'],
    },
  ],
};

export default sidebars;

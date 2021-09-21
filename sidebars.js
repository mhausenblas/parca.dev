/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Overview',
      id: 'overview',
    },
    {
      type: 'doc',
      label: 'Parca',
      id: 'parca',
    },
    {
      type: 'category',
      label: 'Parca Agent',
      items: [
        'parca-agent',
        'parca-agent-design',
        'parca-agent-security'
      ]
    },
    {
      type: 'doc',
      label: 'Concepts',
      id: 'concepts',
    },
    {
      type: 'doc',
      label: 'Profiling 101',
      id: 'profiling-101',
    },
    {
      type: 'doc',
      label: 'Storage',
      id: 'storage',
    },
    {
      type: 'doc',
      label: 'Symbolization',
      id: 'symbolization',
    },
    {
      type: 'doc',
      label: 'Community',
      id: 'community',
    },
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'binary',
        'kubernetes',
        'openshift',
        'systemd',
        'troubleshooting-parca-agent',
      ],
    }
  ],
};

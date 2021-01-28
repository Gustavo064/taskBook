module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    './design-addon/register.js',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
   
  ],
};
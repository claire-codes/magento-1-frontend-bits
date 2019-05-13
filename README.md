# magento-1-frontend-bits

[![Greenkeeper badge](https://badges.greenkeeper.io/claireparker/magento-1-frontend-bits.svg)](https://greenkeeper.io/)

A small blog about Magento 1, built with Gatsby.

## Running in development

```sh
gatsby develop
```

## Deploy

Deploy to GitHub pages by running the script locally:

```sh
npm run deploy
```

## Stylelint

I have added stylelint to the project and it will work as part of a package.json script to be run as a standalone command, outside of the build process. Unfortunately when trying to integrate with the build process like ESLint, using this plugin https://www.gatsbyjs.org/packages/gatsby-plugin-stylelint/ I have found a couple of issues:

- The build process exits as soon as there is an error https://github.com/danbruegge/gatsby-plugin-stylelint/issues/4
- I could not get it to exclude `public/` during the build process either

module.exports = {
  siteMetadata: {
    title: `JSON beautify PWA`,
    description: `simple app to beautify JSON in a PWA that can be saved as an app to desktop or mobile`,
    author: `github.com/adamclark64`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `json-beautify`,
        short_name: `json-beautify`,
        start_url: `/`,
        background_color: `tomato`,
        theme_color: `tomato`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve("./src/service-worker.js"),
      },
    },
  ],
}

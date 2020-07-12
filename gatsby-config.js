require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `bayswater-landscapes`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
  ],
  siteMetadata: {
    title: `Bayswater Landscapes`,
    description: `Bayswater Landscaping Business`,
  },
}

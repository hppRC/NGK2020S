const config = {
  siteTitle: `NGK2020S hppRC`,
  siteTitleAlt: `slides for Lightning Talk- @hppRC/NGK2020S`,
  siteHeadline: `slides for Lightning Talk - NGK2020S slides from @hppRC`,
  siteUrl: `https://ngk2020s.hpprc.com`,
  siteDescription: `slides for NGK2020S with Gatsby and mdx-deck`,
  siteLanguage: `ja`,
  author: `@osaremochi`, // twitter account id
  basePath: `/`
};

module.exports = {
  siteMetadata: config,
  plugins: [
    {
      resolve: `gatsby-theme-mdx-deck`,
      options: {
        mdx: false,
        //you shouldn't use back quote!(ex. `decks`).
        contentPath: 'decks',
        basePath: ''
      }
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: config.siteUrl
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        openAnalyzer: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: `UA-149661454-4`
      }
    },
    // gatsby-plugin-manifest should be described before gatsby-plugin-offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: `hpp`,
        description: config.siteDescription,
        Scope: `/`,
        start_url: `/?utm_source=homescreen`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `./src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};

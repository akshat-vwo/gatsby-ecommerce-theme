module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  flags: {
    DEV_SSR: true
  },
  // headers: [
  //   {
  //     source: `https://akshatagrawal.wingified.com`,
  //     headers: [
  //       {
  //         key: `x-frame-options`,
  //         value: `SAMEORIGIN`,
  //       }
  //     ]
  //   }
  // ],
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Sydney Ecommerce Theme`,
        short_name: `Sydney`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      }},
      {
        resolve: `gatsby-plugin-netlify`,
        options: {
          headers: { "/*": [
            "X-Frame-Options: SAMEORIGIN",
          ],}, // option to add more headers. `Link` headers are transformed by the below criteria
          allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
          mergeSecurityHeaders: true, // boolean to turn off the default security headers
          mergeCachingHeaders: true, // boolean to turn off the default caching headers
          transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
          generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
        },
    },
  ],
};

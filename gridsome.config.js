// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteUrl: "https://ymtdzzz.dev",
  siteName: "ymtdzzz.dev",
  siteDescription: "エンジニア的なあれこれ",
  metadata: {
    siteAuthor: "ymtdzzz",
    sitePublished: 2022,
    siteOgImage: "ogp_image.png",
    pages: [
      { title: "About me", link: "/pages/about/" },
    ],
    socials: [
      { type: "github", link: "//github.com/ymtdzzz/" },
      { type: "x-twitter", link: "//twitter.com/ymtdzzz" },
    ],
    utterances: {
      repo: "ymtdzzz/ymtdzzz-dev",
      issueTerm: "title",
      label: "comment",
    },
  },
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-NCD96BC',
        enabled: true,
        debug: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "../content/posts",
        path: "**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
          category: {
            typeName: "Category",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "../content/pages",
        path: "*.md",
        typeName: "BlogPage",
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/post/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
          "/page/*": {
            changefreq: "monthly",
            priority: 0.7,
          },
        },
      },
    },
  ],
  templates: {
    Post: "/post/:fileInfo__name",
    BlogPage: "/pages/:fileInfo__name",
    Tag: "/tag/:id",
    Category: "/category/:title",
  },
  transformers: {
    remark: {
      plugins: [
        ["gridsome-plugin-remark-mermaid",
          {
            theme: "dark",
            viewport: {
              width: 1500,
              height: 1000,
            },
          },
        ],
        ["@gridsome/remark-prismjs", { showLineNumbers: true }],
        "remark-inline-links",
        ["remark-toc", { heading: "Table of Contents" }],
        "remark-attr",
      ],
      config: {
        footnotes: true,
      },
    },
  },
  permalinks: {
    slugify: {
      use: "@sindresorhus/slugify",
      options: {
        decamelize: false,
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        // options here will be passed to less-loader
      },
    },
  },
  chainWebpack(config) {
    config.resolve.alias.set(`@images`, `@/assets/img`)
  },
};

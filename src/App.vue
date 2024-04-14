<template>
    <router-view />
  </template>
  
  <static-query>
    query {
    metadata {
        siteName
        siteDescription
        siteAuthor
        sitePublished
        siteOgImage
        siteUrl
        pages {
        title
        link
        }
        socials {
        type
        link
        }
    }
    }
  </static-query>
  
  <script>
  export default {
    metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: `og:title`,
          property: `og:title`,
          content:  this.$static.metadata.siteName
        },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$static.metadata.siteUrl
        },
        {
          key: `og:description`,
          property: `og:description`,
          content:  this.$static.metadata.siteDescription
        },
        {
          key: `og:image`,
          property: `og:image`,
          content: this.$static.metadata.siteUrl +
              require(`!!assets-loader!@images/${this.$static.metadata.siteOgImage}`).src
        },
        {
          key: `twitter:card`,
          property: `twitter:card`,
          content:  "summary_large_image",
        },
      ]
    }
  }

  }
  </script>
  
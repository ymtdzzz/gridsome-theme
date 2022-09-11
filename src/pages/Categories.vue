<template>
  <Layout>
    <article class="single">
      <header>
        <h1 class="c-h1-pagettl u-pages-ttl-space">Categories</h1>
      </header>
      <div class="u-pages-space">
        <ul class="list u-color-white">
          <li v-for="category in $page.allCategory.edges" :key="category.node.id">
            <span class="u-tags c-tag c-tag--category">
              <g-link :to="category.node.path">{{ category.node.title }}  ({{ category.node.belongsTo.totalCount }})</g-link>
            </span>
          </li>
        </ul>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query {
  allCategory(sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>

<style scoped lang="scss">
  ul {
    list-style: none;
    padding-left: 0;
  }
  </style>

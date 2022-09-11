<template>
  <Layout>
    <article class="single">
      <header>
        <h1 class="c-h1-pagettl u-pages-ttl-space">Tags</h1>
      </header>
      <div class="u-pages-space">
        <ul class="list">
          <li v-for="tag in $page.allTag.edges" :key="tag.node.id" class="u-tags">
            <span class="c-tag c-tag--tags">
              <g-link :to="tag.node.path"># {{ tag.node.title }} ({{ tag.node.belongsTo.totalCount }})</g-link>
            </span>
          </li>
        </ul>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query {
  allTag(sortBy: "title", order: ASC) {
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

<template>
  <Layout>
    <h1 class="c-h1-pagettl"># {{ $page.tag.title }}</h1>

    <div class="posts">
      <PostSummary
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            excerpt
            category {
              id
              title
              path
            }
            tags {
              id
              title
              path
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostSummary from "~/components/PostSummary.vue";

export default {
  components: {
    PostSummary,
  },
};
</script>

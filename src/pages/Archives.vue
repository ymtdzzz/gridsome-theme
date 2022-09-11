<template>
  <Layout>
    <article class="single">
      <header><h1 class="c-h1-pagettl">Archives</h1></header>
      <div class="u-pages-space">
        <dl class="u-color-white">
          <template v-for="(arr, date) in postGroupByDate">
            <div class="p-archives">
              <dt :key="date" class="p-archives__date">{{ date }}</dt>
              <dd v-for="post in arr" :key="post.node.id" class="p-archives__ttl u-hover-anm">
                <g-link :to="post.node.path">{{ post.node.title }} </g-link>
              </dd>
            </div>
          </template>
        </dl>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    postGroupByDate() {
      return this.$page.posts.edges.reduce((acc, item) => {
        acc[item.node.date] = acc[item.node.date] || [];
        acc[item.node.date].push(item);
        return acc;
      }, {});
    }
  }
}
</script>
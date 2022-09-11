<template>
  <Layout>
    <article class="single p-article-wrap u-color-white">
      <header>
        <h1 v-html="$page.post.title" class="p-article-ttl"></h1>
        <p class="p-article-date">
          <PostHeaderTitle :post="$page.post"></PostHeaderTitle>
        </p>
      </header>

      <div v-html="$page.post.content" class="p-article-text"></div>

      <div class="tag-cloud">
        <p class="p-article-tags">
          <template>
            <span><g-link :to="$page.post.category.path" v-html="$page.post.category.title" class="c-tag c-tag--category u-tag-space"></g-link></span>
          </template>
          <template v-for="tag in $page.post.tags">
            <g-link :key="tag.id" :to="tag.path" class="c-tag c-tag--tags u-tags-article">#{{ tag.title }}</g-link
            >{{ " " }}
          </template>
        </p>
      </div>
      <hr/>
      <div class="related-posts p-article-rel">
        <h4 class="p-article-subttl">related-posts</h4>
        <ul class="related-posts">
          <li v-for="rel in related" :key="rel.id">
            <g-link :to="rel.path">{{ rel.title }} </g-link>
          </li>
        </ul>
      </div>

      <ClientOnly>
        <div class="commentswrap">
          <div id="comments">
            <GithubComponent
              :title="$page.post.title"
              :repo="$page.metadata.utterances.repo"
              :pathname="this.$route.path"
              :url="url"
              :issueTerm="$page.metadata.utterances.issueTerm"
              :label="$page.metadata.utterances.label">
            </GithubComponent>
          </div>
        </div>
      </ClientOnly>
    </article>
  </Layout>
</template>

<script>
import PostHeaderTitle from "../components/PostHeaderTitle";

export default {
  components: {
    PostHeaderTitle,
    GithubComponent: () =>
      import("../components/GithubComponent")
        .then((m) => m.default)
        .catch(),
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.post.description,
        },
      ],
    };
  },
  computed: {
    origin() {
      return process.isClient ? window.origin : this.$page.metadata.siteUrl;
    },
    url() {
      return this.origin + this.$route.path;
    },
    related() {
      return this.$page.post.tags
        .map((tag) => tag.belongsTo.edges)
        .flat()
        .map((rel) => rel.node)
        .filter((item, index, array) => {
          return array.findIndex((i) => i.id === item.id) === index;
        });
    },
  },
};
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    category {
      id
      title
      path
    }
    tags {
      id
      title
      path
      belongsTo(
          sortBy: "published_at",
          order: DESC,
          limit: 3,
          filter: { typeName: { eq: Post } }) {
            edges {
              node {
                ... on Post {
                  id
                  title
                  path
                }
              }
            }
          }
    }
    content
  }
  metadata {
		siteUrl
    utterances {
      repo
      issueTerm
      label
    }
	}
}
</page-query>

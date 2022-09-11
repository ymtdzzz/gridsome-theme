<template>
  <div>
    <div class="l-wrapper">
      <main class="l-main">
        <nav class="p-nav">
          <g-link to="/" class="u-hover-anm">Home</g-link><span> / </span>
          <g-link to="/archives" class="u-hover-anm">Archives</g-link><span> / </span>
          <g-link to="/categories" class="u-hover-anm">Categories</g-link><span> / </span>
          <g-link to="/tags" class="u-hover-anm">Tags</g-link><span> / </span>
          <g-link to="/feed.atom" class="u-hover-anm">ATOM</g-link><span> / </span>
        </nav>

        <slot />
      </main>
      <aside class="l-aside">
        <div class="l-aside__inner">
          <Author></Author>
          <nav>
            <ul class="list p-prof-sitelist">
              <li v-for="page in $static.metadata.pages" :key="page.title">
                <g-link :to="page.link">{{ page.title }}</g-link>
              </li>
            </ul>
          </nav>

          <ul class="social p-social-list">
            <li v-for="page in $static.metadata.socials" :key="page.type" class="p-social-list__item">
              <g-link :class="`sc-${page.type}`" :to="page.link">
                <i :class="`fa fa-${page.type}`"></i>
              </g-link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    <footer class="l-footer">
      <div class="p-footer-text">
        <p>
          &copy; {{ $static.metadata.siteAuthor }}
          {{ $static.metadata.sitePublished }}-{{ todayYear }}
        </p>
        <p>
          Powered by <g-link to="https://gridsome.org/">Gridsome</g-link> -
          <g-link
            to="https://github.com/phoenix741/gridsome-flex-markdown-starter"
            >Flex</g-link
          >
          theme by
          <g-link to="https://shadoware.org">Ulrich Vandenhekke</g-link>
        </p>
        <p>
          Fork of
          <g-link to="https://github.com/alexandrevicenzi/flex">Flex</g-link>
          theme by
          <g-link to="http://alexandrevicenzi.com">Alexandre Vicenzi</g-link>
        </p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteAuthor
    sitePublished
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
import Author from "~/components/Author.vue";

export default {
  components: {
    Author,
  },
  computed: {
    todayYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

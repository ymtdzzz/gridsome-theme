<template>
  <div>
    <div class="l-wrapper">
      <main class="l-main">
        <nav class="p-nav">
          <g-link to="/">Home</g-link><span> / </span>
          <g-link to="/archives">Archives</g-link><span> / </span>
          <g-link to="/categories">Categories</g-link><span> / </span>
          <g-link to="/tags">Tags</g-link>
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
              <g-link :class="`u-sc u-sc-${page.type}`" :to="page.link">
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

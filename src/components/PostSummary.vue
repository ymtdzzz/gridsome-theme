<template>
  <article class="p-summary">
    <PostHeader :post="post"></PostHeader>

    <div v-html="post.excerpt" class="p-summary__text"></div>
    <br>
      <g-link class="btn" :to="post.path">
        <span class="p-readmore u-hover-anm">READ MORE</span>
      </g-link>
    <p class="p-time-to-read">
      <PostHeaderTimeToRead :post="post"></PostHeaderTimeToRead>
    </p>
  </article>
</template>

<script>
import PostHeader from './PostHeader.vue'
import PostHeaderTimeToRead from './PostHeaderTimeToRead.vue';

export default {
  components: {
    PostHeader,
    PostHeaderTimeToRead
  },
  props: ['post'],
}
</script>

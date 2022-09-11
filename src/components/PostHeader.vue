<template>
  <header>
    <h2 class="p-post-title">
      <g-link :to="post.path" v-html="post.title"></g-link>
    </h2>
    <p class="p-post-space">
      <PostHeaderTitle :post="post"></PostHeaderTitle>
    </p>
    <p class="p-post-space">
      <span><g-link :to="post.category.path" v-html="post.category.title" class="c-tag c-tag--category u-tag-space"></g-link></span>
      <span><PostHeaderTags :post="post"></PostHeaderTags></span>
    </p>
    <!-- <p>
      <PostHeaderTimeToRead :post="post"></PostHeaderTimeToRead>
    </p> -->
  </header>
</template>

<script>
import PostHeaderTitle from "./PostHeaderTitle";
import PostHeaderTags from "./PostHeaderTags";
import PostHeaderTimeToRead from "./PostHeaderTimeToRead";

export default {
  components: {
    PostHeaderTitle,
    PostHeaderTags,
    PostHeaderTimeToRead,
  },
  props: ["post"],
};
</script>

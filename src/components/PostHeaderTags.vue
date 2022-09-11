<template>
  <span>
    <!-- Tags: -->
    <template v-for="(tag, index) in post.tags">
      <g-link :key="tag.id" :to="tag.path" class="u-tags c-tag c-tag--tags">
        <span>
          #{{ tag.title }}
        </span>
      </g-link>
    </template>
  </span>
</template>

<script>
export default {
  props: ["post"],
};
</script>

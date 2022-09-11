<template>
  <span>
    Time to read <strong>{{ post.timeToRead }} min</strong>
  </span>
</template>

<script>
export default {
  props: ["post"],
};
</script>

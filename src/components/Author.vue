<template>
  <div class="p-prof-area">
    <div class="p-prof-img">
      <g-image
        style="border-radius: 50%"
        src="~/assets/img/author.jpeg"
        :alt="$static.metadata.siteName"
      ></g-image>
    </div>
    <h1 class="p-prof-sitename">
      <a href="/">{{ $static.metadata.siteName }}</a>
    </h1>

    <p class="p-prof-desc">{{ $static.metadata.siteDescription }}</p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
	siteDescription
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"],
};
</script>


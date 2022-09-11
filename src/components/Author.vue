<template>
  <div class="p-prof-area u-hover-anm">
    <div class="p-prof-img">
      <g-link to="/">
        <g-image
          src="~/assets/img/profile.png"
          :alt="$static.metadata.siteName"></g-image>
      </g-link>
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
<script>
export default {
  data() {
    return {};
  },
  props: {
    navBar: Array,
  },
};
</script>
<template>
  <nav class="cat-container">
    <span v-for="links in navBar"
      ><a
        :href="links.url"
        class="categories"
        @click="!links.active"
        :class="links.active == true ? `active` : ``"
        >{{ links.label }}</a
      ></span
    >
  </nav>
</template>

<style lang="scss" scoped>
.cat-container {
  display: flex;

  span {
    display: block;
    height: 50px;
    text-align: center;
    line-height: 50px;
    padding: 0 20px 0 20px;
  }
}
.categories {
  color: white;
  font-weight: 600;
}

.cat-container span:hover {
  background-color: rgb(255, 145, 0);
}
</style>

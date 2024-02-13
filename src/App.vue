<script>
import AppHeader from "./components/AppHeader.vue";
import AppShop from "./components/AppShop.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppHeader, AppShop, AppFooter },
};
</script>
<template>
  <AppHeader
    :navBar="store.navLinks"
    :logo="store.logo"
    :icons="store.shopIcons"
  ></AppHeader>
  <!-- <AppShop :showcase="store.products" :badges="store.products.badges"></AppShop> -->
  <AppFooter
    :legal="store.footerLegalLinks"
    :social="store.footerSocialLinks"
  ></AppFooter>
</template>

<style lang="scss" scoped></style>

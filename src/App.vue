<script>
import AppHeader from "./components/AppHeader.vue";
import AppShop from "./components/AppShop.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      // HEADER DATA
      navLinks: [
        {
          label: "Donna",
          url: "#",
          active: false,
        },
        {
          label: "Uomo",
          url: "#",
          active: false,
        },
        {
          label: "Bambini",
          url: "#",
          active: false,
        },
      ],

      logo: "./src/assets/img/boolean-logo.png",

      shopIcons: [
        {
          url: "#",
          icon: "bi bi-person",
        },
        {
          url: "#",
          icon: "bi bi-heart",
        },
        {
          url: "#",
          icon: "bi bi-bag",
        },
      ],

      //  BODY DATA

      products: [
        {
          id: 1,
          frontImage: "1.webp",
          backImage: "1b.webp",
          brand: "Levi's",
          name: "Relaxed Fit",
          price: 29.99,
          discount: 0.5,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 2,
          frontImage: "2.webp",
          backImage: "2b.webp",
          brand: "Guess",
          name: "Roses Tee",
          price: 20.99,
          discount: 0.3,
          isInFavorites: true,
          badges: [
            {
              type: "discount",
              value: "-30%",
            },
          ],
        },
        {
          id: 3,
          frontImage: "3.webp",
          backImage: "3b.webp",
          brand: "Come Zucchero Filato",
          name: "Voglia di colori pastello",
          price: 129.99,
          discount: 0.3,
          isInFavorites: false,
          badges: [
            {
              type: "discount",
              value: "-30%",
            },
          ],
        },
        {
          id: 4,
          frontImage: "4.webp",
          backImage: "4b.webp",
          brand: "Levi's",
          name: "Tee Unisex",
          price: 14.99,
          discount: 0.5,
          isInFavorites: false,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 5,
          frontImage: "5.webp",
          backImage: "5b.webp",
          brand: "Maya Deluxe",
          name: "Stripe Bodice",
          price: 99.99,
          discount: 0.5,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
            {
              type: "discount",
              value: "-50%",
            },
          ],
        },
        {
          id: 6,
          frontImage: "6.webp",
          backImage: "6b.webp",
          brand: "Esprit",
          name: "Maglione - Black",
          price: 29.99,
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
          ],
        },
      ],

      // FOOTER DATA
      footerLegalLinks: [
        {
          label: "Informazioni legali",
          url: "#",
        },
        {
          label: "Informativa sulla privacy",
          url: "#",
        },
        {
          label: "Diritto di recesso",
          url: "#",
        },
      ],

      footerSocialLinks: [
        {
          label: "bi bi-twitter",
          url: "#",
        },
        {
          label: "bi bi-facebook",
          url: "#",
        },
        {
          label: "bi bi-instagram",
          url: "#",
        },
        {
          label: "bi bi-pinterest",
          url: "#",
        },
        {
          label: "bi bi-youtube",
          url: "#",
        },
      ],
    };
  },
  components: { AppHeader, AppShop, AppFooter },
};
</script>
<template>
  <AppHeader :navBar="navLinks" :logo="logo" :icons="shopIcons"></AppHeader>
  <AppShop :showcase="products" :badges="products.badges"></AppShop>
  <AppFooter :legal="footerLegalLinks" :social="footerSocialLinks"></AppFooter>
</template>

<style lang="scss" scoped></style>

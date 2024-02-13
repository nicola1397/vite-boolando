import { reactive } from "vue";

export const store = reactive({
  serverURI: "http://localhost:3000",

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
});

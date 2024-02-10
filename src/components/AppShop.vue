<script>
export default {
  data() {
    return {};
  },
  props: {
    showcase: Array,
    badges: Array,
  },
  methods: {
    discountPrice(price, discount) {
      if (discount) {
        return Math.round(price * (1 - discount) * 100) / 100;
      } else {
        return price;
      }
    },
  },
};
</script>
<template>
  <div class="display">
    <div class="product" v-for="(item, index) in showcase">
      <span class="heartfill">
        <i
          class="bi bi-heart-fill"
          :class="{ liked: item.isInFavorites }"
          @click="item.isInFavorites = !item.isInFavorites"
        ></i>
      </span>

      <a href="#" class="card-wrapper"
        ><span class="image-flip">
          <img
            :src="`./src/assets/img/` + item.frontImage"
            :alt="item.id"
            class="image"
          />
          <img
            :src="`./src/assets/img/` + item.backImage"
            :alt="item.id"
            class="b-image"
          />
          <div class="labelcontainer">
            <span
              v-for="badge in item.badges"
              :class="badge.type == `discount` ? `redlabel` : `greenlabel`"
              >{{ badge.value }}</span
            >
          </div>
        </span>
        <span class="small-txt-bk">{{ item.brand }}</span>
        <span class="productname">{{ item.name }}</span>
        <span class="small-txt-red" v-show="item.discount">
          {{ discountPrice(item.price, item.discount) }}€</span
        >
        <span class="small-txt-bk" :class="item.discount ? `linethrough` : ``"
          >{{ item.price }}€</span
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a.card-wrapper {
  display: block;
}

.display {
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
  margin: 0 var(--page-gutter);
}

.product {
  width: calc(100% / 3 - 20px);
}

// DISPLAY IMAGE
span.image-flip {
  display: block;
  position: relative;
}
img.image {
  display: block;
  position: relative;
  max-width: 100%;
}
/*  Hover image */

img.b-image {
  display: block;
  max-width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
}

.image-flip:hover img.b-image {
  opacity: 1;
}

/* CARD FORMATTING */

/* Product Name-Price */

.small-txt-bk {
  color: black;
  font-size: 0.85rem;
  line-height: 1rem;
  margin-top: 5px;
}

.small-txt-red {
  color: red;
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 1rem;
}

.productname {
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  display: block;
}

.small-txt-bk:first-of-type {
  display: block;
}

.linethrough {
  text-decoration: line-through;
}

/* On top labels */

.labelcontainer {
  position: absolute;
  top: 90%;
  z-index: 1;
  left: 0;
}

.redlabel {
  font-weight: 700;
  background-color: red;
  color: white;
  padding: 5px 10px;
}

.greenlabel {
  font-weight: 700;
  background-color: green;
  color: white;
  padding: 5px 10px;
}

.product .bi-heart-fill {
  color: #555555;
  font-size: x-large;
  background-color: aliceblue;
  padding: 10px 10px;
  position: relative;
  top: 70px;
  left: calc(100% - 44px);
  z-index: 1;
}
.product .bi-heart-fill.liked {
  color: red;
}
</style>

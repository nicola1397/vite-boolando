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
.display {
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;
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

.redlabel {
  font-weight: 700;
  background-color: red;
  color: white;
  padding: 5px 10px;
  position: relative;
  top: calc(80% - 15px);
  right: 48px;
  z-index: 1;
}

.greenlabel {
  font-weight: 700;
  background-color: green;
  color: white;
  padding: 5px 10px;
  position: relative;
  top: calc(80% - 15px);
  right: 48px;
  z-index: 1;
}
</style>

<template>
  <h1>Order Cart Page</h1>
</template>

<script>
import { cartItems } from '../fake-data'

export default {
  name: 'CartPage'
  data () {
    return {
      cartItems
    }
  }
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      )
    }
  }
}
</script>

<style>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%
}

.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 15px;
  flex: 3;
}

.remove-button {
  flex:1;
  marging: auto;
}
</style>

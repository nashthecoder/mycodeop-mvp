<template>
  <div id="nav-bar">
    <router-link to="/products" id="products-link">
      <img id="afya-logo" src="../assets/logo.png" alt=""> />
    </router-link>
    <router-link to="/cart" id="cart-link">
      <button>Shopping Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  #nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
  }

  #afya-logo {
    height: 20px;
  }

  #products-link {
    text-align: center;
    display: block;
    color: black;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>

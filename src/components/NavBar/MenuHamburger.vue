<template>
  <div class="menu pointer"></div>
</template>

<style scoped>
.menu {
  background-image: url("/hamburgermenu.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 3rem;
  height: 3rem;
}

@media (width <= 1024px) {
  .menu {
    margin-right: 1rem;
  }
}
</style>

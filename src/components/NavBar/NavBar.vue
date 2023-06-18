<script setup lang="ts">
import MenuHamburger from "./MenuHamburger.vue";
import InputSearch from "./InputSearch.vue";
import UserNotification from "./UserNotification.vue";
import UserProfile from "./UserProfile.vue";
</script>

<template>
  <nav class="nav">
    <MenuHamburger />
    <div class="container-logo">
      <img src="/logo.svg" alt="logo" />
    </div>
    <InputSearch />
    <UserNotification />
    <UserProfile />
  </nav>
  <div class="info-page">
    <span>Dashboard /</span>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1920px;
  height: auto;
  margin: 0 auto;
  padding: 0.5rem;
}

.container-logo img {
  width: 5.313rem;
  height: 3.188rem;
  max-width: 100%;
  max-height: auto;
}

.info-page {
  width: 100%;
  max-width: 1920px;
  height: auto;
  max-height: auto;
  background-color: #2d3339;
  padding: 1rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 3rem;
}
.info-page span {
  font-size: 1rem;
  margin-left: 4rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--secondary-color);
}

@media (width <= 1024px) {
  .nav {
    padding: 0.5rem;
  }
  .info-page {
    display: none;
  }
}

@media (width <= 600px) {
  .container-logo {
    width: 2.813rem;
    height: 2.188rem;
    max-width: 100%;
    margin-left: -15%;
  }

  .container-logo img {
    width: 2.813rem;
    height: 2.188rem;
    max-width: 100%;
    max-height: auto;
  }
  .nav {
    justify-content: space-around;
  }
}
</style>

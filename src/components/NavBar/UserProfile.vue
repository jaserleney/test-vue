<script setup lang="ts">
import useImages from "../../composables/useImages";
const { userProfile } = useImages();
</script>

<template>
  <div class="profile-box">
    <div class="thumbnail">
      <img
        :src="userProfile?.results[0].picture?.thumbnail"
        :alt="userProfile?.results[0].name?.first"
      />
    </div>
    <div class="info-user">
      <span>{{ userProfile?.results[0].name?.first }}</span>
      <span class="material-symbols-outlined pointer"> arrow_drop_down </span>
    </div>
  </div>
</template>

<style scoped>
.profile-box {
  max-width: 30%;
  width: 11.375rem;
  height: 3.625rem;
  background: rgba(238, 255, 243, 0.04);
  border: 1px solid #2c3236;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
}

.thumbnail {
  width: 3.5rem;
  height: 3.5rem;
  background-color: #c4c4c4;
  border-radius: 0.75rem;
}

.thumbnail > img {
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
}

.info-user {
  margin: 0 auto;
  line-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  color: var(--tertiary-color);
  transition: 0.3s ease-in-out;
}

.material-symbols-outlined {
  font-size: 1.8rem;
}

.material-symbols-outlined:hover {
  filter: contrast(120%);
  transform: scale(1.1);
}

@media (width <= 1024px) {
  .info-user :first-child {
    display: none;
  }
}

@media (width <= 600px) {
  .profile-box {
    width: 4.178rem;
    height: 2.364rem;
  }

  .thumbnail {
    width: 2.283rem;
    height: 2.283rem;
  }
}
</style>

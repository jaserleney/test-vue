<script setup lang="ts">
import GalleryComponent from "./GalleryComponent.vue";
import useImages from "../../composables/useImages";
const { imagesGallery } = useImages();
</script>

<template>
  <section class="flex-row-center main">
    <article class="box-img">
      <div class="column">
        <img src="/bestSelling.png" alt="graph-1" class="desktop" />
        <img src="/bestSelling-movil.png" alt="graph-1" class="tablet" />
        <img src="/featured01.png" alt="graph-2" class="desktop" />
        <img src="/featured01-movil.png" alt="graph-3" class="tablet" />
      </div>
      <div class="column">
        <img src="/barChart.png" alt="graph-3" class="desktop" />
        <img src="/pieChart-movil.png" alt="graph-2" class="tablet" />
        <div class="box-gallery">
          <GalleryComponent :imagesGallery="imagesGallery" />
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.main {
  padding: 1rem;
}
.box-img {
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box-gallery {
  background-color: #272e35;
  border-radius: 1.073rem;
  height: 38.75rem;
  max-width: 54.938rem;
  width: 100%;
  margin-top: 0.7rem;
}

@media (width <= 1905px) {
  .box-gallery {
    margin: 0;
  }
}

@media (width <= 1024px) {
  .desktop {
    display: none;
  }
  .box-gallery {
    margin: 0 1.313rem;
    width: 21.938rem;
    max-height: 14.289rem;
    max-width: 100%;
  }

  .box-img {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
}

@media (width > 1024px) {
  .tablet {
    display: none;
  }
}
</style>

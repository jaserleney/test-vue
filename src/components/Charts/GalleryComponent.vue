<script setup lang="ts">
import { register } from "swiper/element/bundle";
import { toRef } from "vue";
import type { Images } from "@/interfaces/Images";

export interface Props {
  imagesGallery: Images[];
}

register();

const props = defineProps<Props>();
const images = toRef(props, "imagesGallery");
</script>

<template>
  <section>
    <h2>Event Galleries</h2>
    <template v-if="images.length > 0">
      <section class="gallery">
        <swiper-container
          :virtual="true"
          :autoplay="true"
          :navigation="true"
          :slides-per-view="1"
          :centered-slides="true"
        >
          <swiper-slide v-for="{ id, download_url, author } in images" :key="id">
            <div class="flex-row-center">
              <img :src="download_url" :alt="author" />
              <span class="info-author">{{ author }}</span>
            </div>
          </swiper-slide>
        </swiper-container>
      </section>
    </template>
  </section>
</template>

<style scoped>
h2 {
  font-size: 2.274rem;
  font-weight: 500;
  line-height: 3.438rem;
  margin: 0.5rem;
}

.gallery {
  background-color: transparent;
  border-radius: 1.073rem;
  height: 34.688rem;
  max-width: 54.938rem;
  width: 100%;
}

.swiper,
swiper-container {
  width: 100%;
  height: auto;
  border-radius: 1.073rem;
}

swiper-slide img {
  width: 100%;
  max-height: 34.688rem;
  height: auto;
}

.info-author {
  position: absolute;
  text-transform: uppercase;
  top: 87.5%;
  font-weight: 400;
  font-size: 1.364rem;
  line-height: 2.063rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (width <= 1024px) {
  .gallery {
    height: 12.533rem;
  }

  .info-author {
    top: 77.5%;
  }
}

@media (width <= 600px) {
  h2 {
    font-weight: 300;
    font-size: 1.052rem;
    line-height: 1.563rem;
    text-align: center;
  }
}
</style>

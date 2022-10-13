<template>
<div class="image-wrapper">
  <img v-for="(image, id) in images" :key="id" :src="image.src" :alt="image.alt" />
</div>



</template>

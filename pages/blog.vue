<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
    </site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- All Posts -->
        <posts-grid :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          Categorieën
        </h3>
        <div class="panel">
          <nuxt-link
            :to="`/blog`"
            :class="{
              'panel-block': true,
              'is-active': '/blog' === $route.path
            }"
          >
            Alle categorieën
          </nuxt-link>
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/categories/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'

export default {
  name: 'Blog',
  data() {
    return {
      allCats: []
    }
  },
  head() {
    return {
      title: `Blog | ${this.$siteConfig.siteName}`
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'blog' })
  },
  async created() {
    this.allCats = await this.$cms.category.getAll()
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>

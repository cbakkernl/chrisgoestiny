<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contact"
      subtitle=""
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-4">
            <article class="tile is-child box">
              <figure class="image is-9by16 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-living.jpg').src"
                  :srcset="
                    require('~/assets/uploads/contact-living.jpg').srcSet
                  "
                />
              </figure>
              <br />
              <!-- Address -->
              <label class="label is-medium">
                WOONADRES
                <font-awesome-icon icon="home" />
              </label>
              <p>Runpad 4</p>
              <p>1784GL, Den Helder</p>
              <p>Nederland</p>
              <br />
              <!-- Email -->
              <label class="label is-medium">
                EMAIL
                <font-awesome-icon icon="envelope" />
              </label>
              <p>info@chrisgoestiny.nl</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hallo!
              </p>
              <div class="content">
                <p>
                  <strong>
                    Neem contact met mij op
                  </strong>
                </p>
                <p>
                  Heb je vragen over mij, het project of hoe ik bepaalde dingen
                  heb aangepakt? Wil je zelf binnenkort een Tiny House bouwen?
                  Neem gerust contact met mij op! Dit kan via
                  <code>info@chrisgoestiny.nl</code> of via mijn social media
                  kanalen (alhoewel ik hier niet altijd even actief op ben).
                  Vervolgens probeer ik jouw bericht zo snel mogelijk te
                  beantwoorden.
                </p>
              </div>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/contact-person.jpg').src"
                  :srcset="
                    require('~/assets/uploads/contact-person.jpg').srcSet
                  "
                />
              </figure>
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Recente blogs
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="3" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  }
}
</script>

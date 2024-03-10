<template>
  <div>
    <Html
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
    >
      <Head>
        <Title>Desde Jupiter</Title>
        <template
          v-for="link in head.link"
          :key="link.id"
        >
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template
          v-for="meta in head.meta"
          :key="meta.id"
        >
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <div
          class="layout max-w-screen grid max-h-full min-h-screen grid-cols-[15rem_1fr] grid-rows-[3rem_1fr] bg-white lg:p-0 dark:bg-black-fill"
        >
          <HorizontalNav class="header" />
          <VerticalNav class="aside" />
          <main class="main p-3 md:p-4 lg:p-5 xl:p-6 dark:bg-black-fill">
            <UContainer
              class="p-6 text-black md:p-8 lg:p-10 xl:p-12 dark:bg-black dark:text-white"
            >
              <slot />
            </UContainer>
          </main>
        </div>
      </Body>
    </Html>
  </div>
</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
</script>

<style>
.layout {
  grid-template-areas:
    'aside header'
    'aside main';
}

.header {
  grid-area: header;
}
.aside {
  grid-area: aside;
}
.main {
  grid-area: main;
}

@media (max-width: 767px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header header'
      'main main';
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Heebo';
}
</style>

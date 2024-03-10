<!-- <template>
  <main>
    <ContentDoc />
  </main>
</template> -->

<template>
  <UCard
    :ui="{
      base: 'lg:p-4 xl:p-8',
      background: 'dark:bg-black',
      divide: '',
      header: {
        padding: 'pb-0',
      },
    }"
  >
    <template #header>
      <p class="flex gap-4 text-xs text-gray-400">
        <span>DEVOPS</span>
        <span>DEVELOPER</span>
        <span>TECH LEADER</span>
      </p>
    </template>

    <template #footer>
      <section>
        <p class="text-xs text-gray-400">COMPANIES I’VE WORKED WITH</p>
        <div class="mt-4 flex gap-4">
          <NuxtImg
            src="/brands/brand-hanu.svg"
            width="60"
          />
          <NuxtImg
            src="/brands/brand-thefutures.svg"
            width="60"
          />
          <NuxtImg
            class="grayscale"
            src="/brands/brand-cesticom.svg"
            width="80"
          />
        </div>
      </section>
    </template>
  </UCard>
</template>

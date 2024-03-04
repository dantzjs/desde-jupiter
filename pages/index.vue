<template>
  <div>
    <section class="pb-4">
      <div class="flex gap-4 text-xs text-gray-400">
        <p>DEVOPS</p>
        <p>DEVELOPER</p>
        <p>TECH LEADER</p>
      </div>
    </section>

    <section class="flex justify-between gap-4">
      <div class="flex flex-col gap-8">
        <h1 class="text-4xl">{{ $t("welcome") }}</h1>
        <p class="max-w-prose text-base leading-7">{{ $t("bio.p1") }}</p>
        <p class="max-w-prose text-base leading-7">{{ $t("bio.p2") }}</p>
        <p class="max-w-prose text-base leading-7">{{ $t("bio.p3") }}</p>

        <div class="flex gap-4">
          <BButton :text="$t('buttons.projects')" />
          <BButton
            :text="$t('buttons.profile')"
            color="secondary"
            variant="link"
          />
        </div>
      </div>

      <div class="hidden flex-1 justify-end lg:flex">
        <Placeholder
          src=""
          alt=""
          class="h-96 w-72 min-w-52 rounded-2xl border-2 border-solid border-gray-800 object-cover p-2"
        />
      </div>
    </section>

    <section class="my-8">
      <p class="text-xs uppercase text-gray-400">{{ $t("work_with") }}</p>
      <div class="mt-4 flex gap-4">
        <NuxtImg src="/brands/brand-hanu.svg" width="60" alt="Hanu" />
        <NuxtImg
          src="/brands/brand-thefutures.svg"
          width="60"
          alt="The Futures"
        />
        <NuxtImg
          class="grayscale"
          src="/brands/brand-cesticom.svg"
          width="80"
          alt="Cesticom"
        />
      </div>
    </section>
  </div>
</template>

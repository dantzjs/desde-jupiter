<template>
  <section class="my-12">
    <UDivider
      :label="$t('nav.socials')"
      :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
    />

    <UContainer
      :ui="{
        padding: 'p-0',
        constrained: '',
      }"
    >
      <section class="mt-4 flex w-full justify-around">
        <a
          href="https://www.linkedin.com/in/dantzjs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIcon
            class="h-5 w-5 text-gray-400"
            name="i-tabler-brand-linkedin"
            dynamic
          />
        </a>
        <a
          href="https://github.com/dantzjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UIcon
            class="h-5 w-5 text-gray-400"
            name="i-tabler-brand-github"
            dynamic
          />
        </a>
      </section>
    </UContainer>
  </section>
</template>

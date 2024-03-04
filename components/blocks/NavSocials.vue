<template>
  <section class="my-12">
    <UDivider
      :label="$t('nav.socials')"
      :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
    />

    <UContainer
      :ui="{
        padding: 'p-0',
        constrained: 'max-w-100',
      }"
    >
      <section class="mt-4 grid w-full grid-cols-4 gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <UIcon
            class="h-5 w-5 text-gray-400"
            name="i-tabler-brand-linkedin"
            dynamic
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <UIcon
            class="h-5 w-5 text-gray-400"
            name="i-tabler-brand-github"
            dynamic
          />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <UIcon
            class="h-5 w-5 text-gray-400"
            name="i-tabler-file-cv"
            dynamic
          />
        </a>
        <a href="mailto:">
          <UIcon class="h-5 w-5 text-gray-400" name="i-tabler-mail" dynamic />
        </a>
      </section>
    </UContainer>
  </section>
</template>

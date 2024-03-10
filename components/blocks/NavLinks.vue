<template>
  <section>
    <UDivider
      :label="$t('nav.creations')"
      :ui="{ label: 'text-primary-500 dark:text-primary-400' }"
    />
    <UVerticalNavigation
      :links="links"
      :ui="{
        padding: 'py-2 px-3',
        size: 'text-base',
        icon: {
          base: 'mr-4',
        },
      }"
    >
      <template #default="{ link }">
        <span class="group-hover:text-primary relative">{{ link.label }}</span>
      </template>
    </UVerticalNavigation>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const links = computed(() => [
  {
    label: t('nav.home'),
    icon: 'i-heroicons-rocket-launch',
    to: localePath('/'),
  },
  /* {
    label: t('nav.blog'),
    icon: 'i-heroicons-pencil',
    to: localePath('/blog'),
  },
  {
    label: t('nav.notes'),
    icon: 'i-heroicons-code-bracket',
    to: localePath('/notes'),
  },
  {
    label: t('nav.projects'),
    icon: 'i-heroicons-briefcase',
    to: localePath('/projects'),
  }, */
  {
    label: t('nav.about'),
    icon: 'i-heroicons-user-circle',
    to: localePath('/about'),
  },
]);
</script>

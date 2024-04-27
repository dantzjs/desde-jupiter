<template>
  <nav
    class="flex w-full items-center justify-between p-2 font-ui fixed top-0"
  >
    <div class="flex items-center gap-2 md:gap-4">
      <!-- <UToggle
        v-model="isLight"
        on-icon="i-heroicons-sun-20-solid"
        off-icon="i-heroicons-moon-20-solid"
        size="xl"
      /> -->
      <!-- <USelect
        v-model="currentLang"
        :options="langs"
        option-attribute="name"
        :padded="true"
        class="w-24"
        @change="changeLocale($event)"
      /> -->
      <UDropdown
        :items="links"
        :popper="{ placement: 'bottom-start' }"
        class="block md:hidden"
      >
        <UButton
          color="white"
          trailing-icon="i-heroicons-bars-3-20-solid"
        />
      </UDropdown>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t, locale, setLocale } = useI18n();

/* 
const switchLocalePath = useSwitchLocalePath();
const currentLang = ref(locale);

const langs = [
  {
    name: '🇪🇸 ES',
    value: 'es',
  },
  {
    name: '🇺🇸 EN',
    value: 'en',
  },
];

function changeLocale(event: any) {
  setLocale(event.target.value);
  currentLang.value = event.target.value;

  switchLocalePath(currentLang.value);
} */

const EXTERNAL_ICON = 'i-heroicons-arrow-top-right-on-square';

const links = computed(() => [
  [
    {
      label: 'José D. Gutiérrez',
      avatar: {
        src: 'avatar.jpeg',
      },
      to: localePath('/about'),
    },
  ],
  [
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
  ],
  [
    {
      label: 'LinkedIn',
      icon: EXTERNAL_ICON,
      to: 'https://linkedin.com/in/dantzjs',
      target: '_blank',
    },
    {
      label: 'GitHub',
      icon: EXTERNAL_ICON,
      to: 'https://github.com/dantzjs',
      target: '_blank',
    },
    /* {
      label: 'CV',
      icon: EXTERNAL_ICON,
      to: '',
      target: '_blank',
    }, */
  ],
]);
</script>

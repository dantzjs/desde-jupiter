<template>
  <UButton
    label="🇻🇪 🇲🇽"
    variant="ghost"
    color="gray"
    :ui="{
      color: {
        gray: {
          ghost: `flex flex-col w-full text-sm text-white dark:hover:text-gray-400 dark:text-gray-400 dark:hover:bg-gray-800/50
            justify-center content-center md:my-4 lg:my-6`,
        },
      },
    }"
  >
    <template #leading>
      <div class="w-100 content-center justify-center">
        <UAvatar
          chip-color="green"
          src="avatar.jpeg"
          size="md"
        />
        <p class="text-base font-bold dark:text-gray-50">José D. Gutiérrez</p>
      </div>
      <div>@DantzJs</div>
    </template>
  </UButton>
</template>

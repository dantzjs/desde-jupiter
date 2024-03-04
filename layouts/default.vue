<template>
  <div>
    <VerticalNav />
    <HorizontalNav />

    <UContainer
      class="max-w-screen max-h-full min-h-screen bg-black-fill p-6 md:ml-64"
    >
      <div>
        <main class="p-6 md:p-8 lg:p-10 xl:p-12 dark:bg-black-side">
          <slot />
        </main>
      </div>
    </UContainer>
  </div>
</template>

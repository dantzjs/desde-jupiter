<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
  variant: {
    type: String,
    default: 'solid',
  },
});
const { text, color, variant } = props;
</script>

<template>
  <UButton
    class="text-base"
    :color="color"
    :variant="variant"
    :ui="{ rounded: 'rounded-none', font: 'font-ui' }"
  >
    {{ text }}
  </UButton>
</template>

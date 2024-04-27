<template>
  <div>
    <section class="h-screen flex justify-center items-center">
      <!-- <div class="flex gap-4 font-ui text-xs text-black dark:text-gray-400">
        <UBadge variant="subtle">DEVOPS</UBadge>
        <UBadge variant="subtle">DEVELOPER</UBadge>
        <UBadge variant="subtle">TECH LEADER</UBadge>
      </div> -->
      <div class="flex flex-col font-ui text-5xl text-gray-300">
        <div class="flex">
          <p v-for="char in heroMessage[0]" :key="char" class="w-20 h-24 border border-gray-700 flex justify-center items-center">{{char}}</p>
          <span class="w-20 h-24"/>
          <p class="w-20 h-24 border border-gray-700 flex justify-center items-center text-blue-500">{{"#"}}</p>
        </div>
        <div class="flex justify-end">
          <span class="w-20 h-24"/>
          <p class="w-20 h-24 border border-gray-700 flex justify-center items-center text-blue-500">{{"~"}}</p>
          <span class="w-20 h-24"/>
          <p v-for="char in heroMessage[1]" :key="char" class="w-20 h-24 border border-gray-700 flex justify-center items-center">{{char}}</p>
        </div>
        <div class="flex">
          <p v-for="char in heroMessage[2]" :key="char" class="w-20 h-24 border border-gray-700 flex justify-center items-center">{{char}}</p>
        </div>
      </div>
    </section>

    <section class="my-8">
      <p class="light:text-black font-ui text-xs uppercase dark:text-gray-400">
        {{ $t('work_with') }}
      </p>
      <div class="mt-4 flex w-fit gap-4">
        <NuxtImg
          src="/brands/brand-hanu.svg"
          width="60"
          alt="Hanu"
        />
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

<script setup lang="ts">
import anime from 'animejs'

const heroMessage = ref(['HOLA', 'DESDE', 'JÚPITER'])
const scrambledWords = ref([])

const scrambleAnimation = (element, char) => {
      let scrambleChar = Math.random().toString(36).substring(7)

      element.textContent = scrambleChar

      anime({
        targets: element,
        textContent: char,
        duration: 2000,
        round: 1,
        easing: 'easeInOutCubic',
        complete: () => {
          setTimeout(() => scrambleAnimation(element, char), 1000)
        }
      })
    }

    onMounted(() => {
      heroMessage.value.forEach((word, index) => {
        word.split('').forEach((char, charIndex) => {
          const element = document.querySelector(`.flex:nth-child(${index + 1}) p:nth-child(${charIndex + 1}) span`)
          scrambleAnimation(element, char)
        })
      })
    })
</script>
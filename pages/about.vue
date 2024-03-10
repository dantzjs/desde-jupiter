<template>
  <article
    class="prose prose-p:text-base lg:prose-h1:text-4xl lg:prose-h2:text-xl lg:prose-h3:text-lg lg:prose-xl dark:prose-invert prose-p:leading-7 m-auto w-full font-prose text-white"
  >
    <h1 class="text-white underline decoration-solid underline-offset-8">
      {{ $t('about.title') }}
    </h1>
    <p>{{ $t('about.p1') }}</p>
    <p>{{ $t('about.p2') }}</p>
    <p>{{ $t('about.p3') }}</p>
    <p>{{ $t('about.p4') }}</p>
    <p>{{ $t('about.p5') }}</p>
    <p>{{ $t('about.p6') }}</p>
    <p>{{ $t('about.p7') }}</p>
    <p>{{ $t('about.p8') }}</p>
    <h2>
      <UIcon
        name="i-tabler-stack-front"
        dynamic
      />
      {{ $t('about.stack') }}
    </h2>
    <h3 class="underline decoration-solid underline-offset-8">
      {{ $t('about.dev') }}
    </h3>
    <section
      class="lg:grid-rows-auto lg:grid-rows-auto grid grid-cols-2 gap-6 text-base md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="skill in devSkills"
        :key="skill.name"
        class="flex items-center gap-2"
      >
        <UIcon
          :name="skill.icon"
          dynamic
        />
        <span>{{ skill.name }}</span>
      </div>
    </section>
    <h3 class="underline decoration-solid underline-offset-8">AWS</h3>
    <section
      class="lg:grid-rows-auto lg:grid-rows-auto grid grid-cols-2 gap-6 text-base md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="skill in AWSSkills"
        :key="skill.name"
        class="flex items-center gap-2"
      >
        <UIcon
          :name="skill.icon"
          dynamic
        />
        <span>{{ skill.name }}</span>
      </div>
    </section>
    <h3 class="underline decoration-solid underline-offset-8">
      {{ $t('about.tools') }}
    </h3>
    <section
      class="lg:grid-rows-auto lg:grid-rows-auto grid grid-cols-2 gap-6 text-base md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="tool in tools"
        :key="tool.name"
        class="flex items-center gap-2"
      >
        <UIcon
          :name="tool.icon"
          dynamic
        />
        <span>{{ tool.name }}</span>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const devSkills = [
  { name: 'HTML', icon: 'i-tabler-brand-html5' },
  { name: 'CSS', icon: 'i-tabler-brand-css3' },
  { name: 'JavaScript', icon: 'i-tabler-brand-javascript' },
  { name: 'TypeScript', icon: 'i-tabler-brand-typescript' },
  { name: 'Nuxt', icon: 'i-tabler-brand-nuxt' },
  { name: 'Tailwind', icon: 'i-tabler-brand-tailwind' },
  { name: 'Node.js', icon: 'i-tabler-brand-nodejs' },
  { name: 'MySQL', icon: 'i-tabler-brand-mysql' },
  { name: 'MongoDB', icon: 'i-tabler-brand-mongodb' },
  { name: 'REST', icon: 'i-tabler-api' },
  { name: 'RabbitMQ', icon: 'i-tabler-carrot' },
  { name: 'Websockets', icon: 'i-tabler-brand-socket-io' },
];

const AWSSkills = [
  { name: 'EC2', icon: 'i-tabler-cpu' },
  { name: 'S3', icon: 'i-tabler-bucket' },
  { name: 'RDS', icon: 'i-tabler-database' },
  { name: 'DocumentDB', icon: 'i-tabler-database' },
  { name: 'EKS', icon: 'i-tabler-brand-docker' },
  { name: 'ECR', icon: 'i-tabler-files' },
  { name: 'CloudWatch', icon: 'i-tabler-analyze' },
  { name: 'KMS', icon: 'i-tabler-lock' },
  { name: 'IAM', icon: 'i-tabler-users-group' },
  { name: 'ELB', icon: 'i-tabler-load-balancer' },
  { name: 'VPC', icon: 'i-tabler-network' },
  { name: 'CloudFront', icon: 'i-tabler-world-www' },
];

const tools = [
  { name: 'Git', icon: 'i-tabler-brand-git' },
  { name: 'NPM', icon: 'i-tabler-brand-npm' },
  { name: 'Yarn', icon: 'i-tabler-brand-yarn' },
  { name: 'Jira', icon: 'i-tabler-layout-kanban' },
  { name: 'Confluence', icon: 'i-tabler-notebook' },
  { name: 'Bitbucket', icon: 'i-tabler-brand-bitbucket' },
  { name: 'NGINX', icon: 'i-tabler-settings' },
  { name: 'Docker', icon: 'i-tabler-brand-docker' },
  { name: 'Sonarqube', icon: 'i-tabler-radar' },
];
</script>

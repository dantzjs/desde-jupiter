import {
  IconStack2,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandNodejs,
  IconBrandGit,
  IconApi,
  IconBrandDocker,
  IconBrandReact,
  IconBrandUbuntu,
  IconCarrot,
  IconCloudComputing,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandAws,
  IconBrandTerraform,
  IconBrandNpm,
  IconBrandTypescript,
} from '@tabler/icons-react';

export default function Stack() {
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold mb-8">
        <IconStack2 className="inline mr-2" />
        Tecnologías
      </h3>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <li className="flex items-center">
          <IconBrandHtml5 className="inline" />
          <span className="ml-2">HTML</span>
        </li>
        <li className="flex items-center">
          <IconBrandCss3 className="inline" />
          <span className="ml-2">CSS</span>
        </li>
        <li className="flex items-center">
          <IconBrandJavascript className="inline" />
          <span className="ml-2">JavaScript</span>
        </li>
        <li className="flex items-center">
          <IconBrandTypescript className="inline" />
          <span className="ml-2">TypeScript</span>
        </li>
        <li className="flex items-center">
          <IconBrandNodejs className="inline" />
          <span className="ml-2">Node.js</span>
        </li>
        <li className="flex items-center">
          <IconBrandReact />
          <span className="ml-2">React</span>
        </li>
        <li className="flex items-center">
          <IconBrandTailwind className="inline" />
          <span className="ml-2">Tailwind CSS</span>
        </li>
        <li className="flex items-center">
          <IconBrandNpm className="inline" />
          <span className="ml-2">NPM / Yarn</span>
        </li>
        <li className="flex items-center">
          <IconBrandGit className="inline" />
          <span className="ml-2">Git</span>
        </li>
        <li className="flex items-center">
          <IconBrandUbuntu className="inline" />
          <span className="ml-2">Linux</span>
        </li>
        <li className="flex items-center">
          <IconBrandMysql className="inline" />
          <span className="ml-2">MySQL / MariaDB</span>
        </li>
        <li className="flex items-center">
          <IconBrandMongodb className="inline" />
          <span className="ml-2">Mongo</span>
        </li>
        <li className="flex items-center">
          <IconApi className="inline" />
          <span className="ml-2">REST</span>
        </li>
        <li className="flex items-center">
          <IconCarrot className="inline" />
          <span className="ml-2">RabbitMQ</span>
        </li>
        <li className="flex items-center">
          <IconBrandAws className="inline" />
          <span className="ml-2">AWS</span>
        </li>
        <li className="flex items-center">
          <IconBrandDocker className="inline" />
          <span className="ml-2">Docker</span>
        </li>
        <li className="flex items-center">
          <IconBrandDocker className="inline" />
          <span className="ml-2">Kubernetes</span>
        </li>
        <li className="flex items-center">
          <IconCloudComputing className="inline" />
          <span className="ml-2">NGINX</span>
        </li>
        <li className="flex items-center">
          <IconBrandTerraform className="inline" />
          <span className="ml-2">Terraform</span>
        </li>
        <li className="flex items-center">
          <IconBrandTerraform className="inline" />
          <span className="ml-2">Vault</span>
        </li>
      </ul>
    </section>
  );
}

import { IconPrompt, IconHeartFilled } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="footer grid-flow-col items-center mt-0 p-4 bg-black text-white">
      <aside className="items-center grid-flow-col">
        <IconPrompt />
        <p className="text-white">
          Hecho con <IconHeartFilled className="inline"/> y Javascript
        </p>
      </aside>
    </footer>
  );
}

export default function Divider({ orientation = 'horizontal', content = '' }) {
  return (
    <div
      className={`divider divider-${orientation} after:bg-neutral before:bg-neutral`}
    >
      {content}
    </div>
  );
}

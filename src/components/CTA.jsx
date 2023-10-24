export default function CTA({ action, subAction }) {
  return (
    <div className="my-6">
      <a
        href={action.url}
        className="btn rounded-none normal-case text-xl bg-neutral text-neutral-content mr-2 hover:bg-neutral"
      >
        {action.title}
      </a>
      {subAction && (
        <a
          href={subAction.url}
          className="btn btn-ghost border-neutral normal-case text-xl text-base-content rounded-none"
        >
          {subAction.title}
        </a>
      )}
    </div>
  );
}

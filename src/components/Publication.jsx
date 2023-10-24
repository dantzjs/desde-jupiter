export default function Publication({ url, title }) {
  return (
    <article className="grid grid-cols-[1fr] md:grid-cols-[1fr_auto] my-2 md:gap-2 items-start">
      <a
        className="text-lg unset
                  transition-[background-size] duration-300 
                  bg-gradient-to-r bg-left-bottom bg-no-repeat
                  bg-[length:0%_10%] hover:bg-[length:100%_10%]
                  from-primary to-secondary
                  "
        href={url}
      >
        {title}
      </a>
    </article>
  );
}

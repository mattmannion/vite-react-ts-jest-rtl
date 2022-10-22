type SlugProps = {
  title: string;
  content: string;
};

export function StuffSlug({ title, content }: SlugProps) {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
    </>
  );
}

type PostComposerProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function PostComposer({ value, onChange, onSubmit }: PostComposerProps) {
  return (
    <section className="rounded-xl border border-border bg-surface p-4 shadow-card sm:p-5">
      <label htmlFor="post-description" className="sr-only">
        Post description
      </label>
      <textarea
        id="post-description"
        placeholder="Write a post description..."
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-y rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30 sm:text-base"
      />
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-surface transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
        >
          Post
        </button>
      </div>
    </section>
  );
}

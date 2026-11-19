import type { Post } from "@/types/post";
import { PostReactions } from "./PostReactions";

type PostCardProps = {
  post: Post;
  onRemove: (id: string) => void;
  onReactionClick: (id: string, emoji: string) => void;
};

export function PostCard({ post, onRemove, onReactionClick }: PostCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-4 shadow-card sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted sm:text-sm">
          Post
        </p>
        <button
          type="button"
          onClick={() => onRemove(post.id)}
          className="rounded-lg border border-transparent bg-danger-soft px-2 py-1 text-sm text-danger transition hover:border-danger hover:bg-danger hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danger"
          aria-label="Delete post"
        >
          🗑️
        </button>
      </div>

      <p className="mt-2 whitespace-pre-wrap wrap-break-word text-sm leading-relaxed text-foreground sm:text-base">
        {post.description}
      </p>

      <PostReactions post={post} onReactionClick={onReactionClick} />
    </article>
  );
}

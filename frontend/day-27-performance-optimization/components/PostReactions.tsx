"use client";

import { useState } from "react";
import { REACTION_EMOJIS } from "@/constants/emojis";
import type { Post } from "@/types/post";

type PostReactionsProps = {
  post: Post;
  onReactionClick: (id: string, emoji: string) => void;
};

export function PostReactions({ post, onReactionClick }: PostReactionsProps) {
  const [showReactions, setShowReactions] = useState(false);
  const { reaction } = post;

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setShowReactions((prev) => !prev)}
        className="rounded-lg border border-border bg-surface-muted px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-border-strong hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        React
      </button>

      {showReactions && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {reaction ? (
            <button
              type="button"
              onClick={() => onReactionClick(post.id, reaction)}
              className="rounded-lg border border-primary bg-primary-soft px-2.5 py-1.5 text-lg transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Clear ${reaction} reaction`}
            >
              {reaction}
            </button>
          ) : (
            REACTION_EMOJIS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => onReactionClick(post.id, emoji)}
                className="rounded-lg border border-border bg-surface px-2.5 py-1.5 text-lg transition hover:scale-105 hover:border-primary hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`React with ${emoji}`}
              >
                {emoji}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

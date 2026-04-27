import { notionists } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

const AVATAR_BACKGROUND_COLORS = [
  "b6e3f4",
  "c0aede",
  "d1d4f9",
  "ffd5dc",
  "ffdfbf",
];

export function getDicebearAvatar(seed: string): string {
  return createAvatar(notionists, {
    seed,
    backgroundType: ["solid"],
    backgroundColor: AVATAR_BACKGROUND_COLORS,
  }).toDataUri();
}

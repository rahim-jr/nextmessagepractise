import type { ReactNode } from "react";

type ComposerActionProps = {
  icon: ReactNode;
  label: string;
};

export function ComposerAction({ icon, label }: ComposerActionProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="rounded-md px-2 py-1 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
    >
      {icon}
    </button>
  );
}

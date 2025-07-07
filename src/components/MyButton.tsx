"use client"

import { Button, type ButtonProps } from "react-aria-components"

export default function MyButton({
  label,
  ...props
}: ButtonProps & { label: string }) {
  return (
    <Button
      {...props}
      className="cursor-pointer rounded-md bg-amber-300 px-6 py-2 text-zinc-800 ring-zinc-100 ring-offset-2 ring-offset-zinc-800 outline-none hover:bg-zinc-100/90 focus-visible:ring-2"
    >
      {label}
    </Button>
  )
}

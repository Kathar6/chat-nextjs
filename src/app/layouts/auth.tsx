import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex justify-center m-1 w-2/5 text-white">{children}</div>
  )
}

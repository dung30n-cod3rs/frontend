'use client'
import { LoginForm } from "@/components/login-form"
import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter()

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm router={router} />
    </div>
  )
}

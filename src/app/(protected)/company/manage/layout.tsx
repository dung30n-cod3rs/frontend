'use client'
import { CompanyApiDto, UserApiDto } from '@/server/myApi'
import React from 'react'
import ManageNavigation from "./manageNavigation"

export default function ManageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const [user, setUser] = React.useState<UserApiDto | null>(null)
  const [company, setCompany] = React.useState<CompanyApiDto | null>(null)

  React.useEffect(() => {
    async function fetchUser() {
      const userRes = await fetch("http://localhost:3000/api/users/me")
      const data = await userRes.json()
      setUser(data.user)
    }

    fetchUser()
  }, [])

  React.useEffect(() => {
    async function fetchCompany() {
      const companyRes = await fetch("http://localhost:3000/api/company", {
        method: "POST",
        body: JSON.stringify({ companyId: user?.companyId }),
      })
      const data = await companyRes.json()
      setCompany(data.company)
    }

    fetchCompany()
  }, [user])

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {company?.name}
      </h2>
      <ManageNavigation />
      {children}
    </div>
  )
}

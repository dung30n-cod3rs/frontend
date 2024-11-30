'use client'
import { CompanyApiDto, UserApiDto } from '@/server/myApi'
import React from 'react'

export default function Page() {

  const [user, setUser] = React.useState<UserApiDto | null>(null)
  const [company, setCompany] = React.useState<CompanyApiDto | null>(null)
  const [members, setMembers] = React.useState<Employee[] | null>(null)
  const [filials, setFilials] = React.useState<Filial | null>(null)

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

  React.useEffect(() => {
    async function fetchCompanyMembers() {
      const membersRes = await fetch("http://localhost:3000/api/company/members", {
        method: "POST",
        body: JSON.stringify({ companyId: user?.companyId }),
      })
      const data = await membersRes.json()
      setMembers(data.employees)
    }

    fetchCompanyMembers()
  }, [user])

  React.useEffect(() => {
    async function fetchFilials() {
      const filialsRes = await fetch("http://localhost:3000/api/filials/by-company", {
        method: "POST",
        body: JSON.stringify({ companyId: user?.companyId }),
      })
      const data = await filialsRes.json()
      setFilials(data.filials)
    }

    fetchFilials()
  }, [user])

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {company?.name}
      </h2>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Количество сотрудников: {members?.length}
      </h3>

      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Филиалы
        </h3>
        <ul>
          {filials?.map((filial) => (
            <li key={filial.id}>{filial.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

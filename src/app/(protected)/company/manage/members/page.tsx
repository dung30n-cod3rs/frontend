'use client'
import { Button } from '@/components/ui/button'
import { UserApiDto } from '@/server/myApi'
import React from 'react'
import AddMemberDialog from "./add-member"
import MembersTable from "./members-table"

export default function Page() {

  const [user, setUser] = React.useState<UserApiDto | null>(null)
  const [members, setMembers] = React.useState<Employee[] | null>(null)

  React.useEffect(() => {
    async function fetchUser() {
      const userRes = await fetch("http://localhost:3000/api/users/me")
      const data = await userRes.json()
      setUser(data.user)
    }

    fetchUser()
  }, [])

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


  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button variant='outline' size='sm' className='font-semibold'>Добавить JSON</Button>
      </div>
      <MembersTable members={members || []} />
      <AddMemberDialog />
    </div>
  )
}

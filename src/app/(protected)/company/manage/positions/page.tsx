'use client'
import { UserApiDto } from '@/server/myApi'
import React from 'react'
import AddPositionDialog from "./add-position"
import PositionsTable from "./positions-table"

export default function Page() {

  const [user, setUser] = React.useState<UserApiDto | null>(null)
  const [positions, setPositions] = React.useState(null)

  React.useEffect(() => {
    async function fetchUser() {
      const userRes = await fetch("http://localhost:3000/api/users/me")
      const data = await userRes.json()
      setUser(data.user)
    }

    fetchUser()
  }, [])

  React.useEffect(() => {
    async function fetchCompanyPositions() {
      const positionRes = await fetch("http://localhost:3000/api/company/positions", {
        method: "POST",
        body: JSON.stringify({ companyId: user?.companyId }),
      })
      const data = await positionRes.json()
      setPositions(data.positions)
    }

    fetchCompanyPositions()
  }, [user])

  return (
    <div className="flex flex-col gap-4">
      <PositionsTable positions={positions || []} />
      <AddPositionDialog />
    </div>
  )
}

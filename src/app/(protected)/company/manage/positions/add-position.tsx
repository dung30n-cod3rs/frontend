import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserApiDto } from '@/server/myApi'
import React from 'react'

const AddPositionDialog = () => {

  const [user, setUser] = React.useState<UserApiDto | null>(null)
  const [name, setName] = React.useState<string | null>(null)
  const [weight, setWeight] = React.useState<number | null>(null)

  React.useEffect(() => {
    async function fetchUser() {
      const userRes = await fetch("http://localhost:3000/api/users/me")
      const data = await userRes.json()
      setUser(data.user)
    }

    fetchUser()
  }, [])

  async function fetchCompanyAddPositions() {
    const addMemberRes = await fetch("http://localhost:3000/api/positions", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        weight: weight,
        companyId: user?.companyId
      }),
    })
    const data = await addMemberRes.json()
    console.log(data)
  }

  return (
    <Dialog>
      <DialogTrigger>Добавить должность</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление должности</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Название
            </Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Название должности"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="weight" className="text-right">
              Вес (целое число)
            </Label>
            <Input
              id="weight"
              onChange={(e) => setWeight(Number(e.target.value))}
              placeholder='Вес должности'
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={fetchCompanyAddPositions}>Добавить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddPositionDialog

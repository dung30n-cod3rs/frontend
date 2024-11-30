'use client'
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



const AddMemberDialog = () => {

  const [user, setUser] = React.useState<UserApiDto | null>(null)


  const [position, setPosition] = React.useState<number | null>(null)
  const [userName, setUserName] = React.useState<string | null>(null)
  const [userEmail, setUserEmail] = React.useState<string | null>(null)
  const [userPassword, setUserPassword] = React.useState<string | null>(null)
  const [salary, setSalary] = React.useState<number | null>(null)

  React.useEffect(() => {
    async function fetchUser() {
      const userRes = await fetch("http://localhost:3000/api/users/me")
      const data = await userRes.json()
      setUser(data.user)
    }

    fetchUser()
  }, [])

  async function fetchCompanyAddMember() {
    const addMemberRes = await fetch("http://localhost:3000/api/members", {
      method: "POST",
      body: JSON.stringify({ companyId: user?.companyId, positionId: position, userName, userEmail, userPassword, salary }),
    })
    const data = await addMemberRes.json()
    console.log(data)
  }


  return (
    <Dialog>
      <DialogTrigger>Добавить сотрудника</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление сотрудника</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Имя
            </Label>
            <Input
              onChange={(e) => setUserName(e.target.value)}
              id="name"
              placeholder='Введите имя сотрудника'
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Почта
            </Label>
            <Input
              onChange={(e) => setUserEmail(e.target.value)}
              id="email"
              placeholder='Введите почту сотрудника'
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Пароль
            </Label>
            <Input
              onChange={(e) => setUserPassword(e.target.value)}
              id="password"
              placeholder='Введите пароль сотрудника'
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="position" className="text-right">
              Позиция
            </Label>
            <Input
              onChange={(e) => setPosition(Number(e.target.value))}
              id="password"
              placeholder='Введите позицию (целое число) сотрудника'
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="salary" className="text-right">
              Зарплата
            </Label>
            <Input
              onChange={(e) => setSalary(Number(e.target.value))}
              id="password"
              placeholder='Введите зарплату сотрудника'
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => {
            fetchCompanyAddMember()
          }}>Добавить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddMemberDialog

'use client'
import { UserApiDto } from '@/server/myApi'
import React from 'react'

export default function Page() {

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
		<div className='font-sans'>
			<h1 className='text-2xl font-sans font-bold mb-2'>Профиль</h1>
			<p>Имя: {user?.name}</p>
			<p>Почта: {user?.email}</p>
			<p>Компания: {company?.name}</p>
			<p>Аккаунт создан: {user?.creationDate}</p>
		</div>
	)
}

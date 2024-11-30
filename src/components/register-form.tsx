"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Определяем схему валидации
const FormSchema = z.object({
	firstName: z.string().min(2, { message: "Имя должно содержать минимум 2 символа." }),
	lastName: z.string().min(2, { message: "Фамилия должна содержать минимум 2 символа." }),
	email: z.string().email({ message: "Введите корректный email." }),
	password: z.string().min(6, { message: "Пароль должен содержать минимум 6 символов." }),
	confirmPassword: z.string().min(6, { message: "Подтвердите пароль." }),
}).refine((data) => data.password === data.confirmPassword, {
	message: "Пароли должны совпадать.",
	path: ["confirmPassword"],
})

export function RegisterForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: ""
	})

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data)
		setFormData(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className=" w-[1/4] space-y-6 p-4 border-2 rounded-xl"
			>
				<h1 className="text-2xl">Регистрация профиля</h1>
				<div className="flex gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Имя</FormLabel>
								<FormControl>
									<Input placeholder="Иван" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Фамилия</FormLabel>
								<FormControl>
									<Input placeholder="Иванов" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Почта</FormLabel>
							<FormControl>
								<Input placeholder="ivanov@example.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input type="password" placeholder="Введите пароль" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Повторите пароль</FormLabel>
							<FormControl>
								<Input type="password" placeholder="Повторите пароль" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className='w-full justify-items-end'>
					<Button className='flex' type="submit">Перейти к регистрации компании</Button>
				</div>
			</form>
		</Form>
	)
}

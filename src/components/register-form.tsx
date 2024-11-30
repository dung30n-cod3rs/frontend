"use client"

import { zodResolver } from "@hookform/resolvers/zod"
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


interface Props {
	setUserFormData: any,
}

const FormSchema = z.object({
	firstName: z.string().min(2, { message: "Введите корректное имя" }),
	lastName: z.string().min(2, { message: "Введите корректную фамилию" }),
	email: z.string().email({ message: "Введите корректный email." }),
	password: z.string().min(6, { message: "Пароль должен содержать минимум 6 символов." }),
	confirmPassword: z.string().min(6, { message: "Подтвердите пароль." }),
}).refine((data) => data.password === data.confirmPassword, {
	message: "Пароли должны совпадать.",
	path: ["confirmPassword"],
})

export const RegisterForm: React.FC<Props> = ({ setUserFormData }) => {

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

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		setUserFormData(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-1/4 space-y-6 p-4 border-2 rounded-xl min-w-[400px]"
			>
				<h1 className="text-2xl">Регистрация профиля</h1>
				<div className="flex gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-base'>Имя</FormLabel>
								<FormControl>
									<Input placeholder="Иван" {...field} />
								</FormControl>
								<FormMessage className='min-h-[10px] max-h-[10px]' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel className='text-base'>Фамилия</FormLabel>
								<FormControl>
									<Input placeholder="Иванов" {...field} />
								</FormControl>
								<FormMessage className='min-h-[10px] max-h-[10px]' />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-base'>Почта</FormLabel>
							<FormControl>
								<Input placeholder="ivanov@example.com" {...field} />
							</FormControl>
							<FormMessage className='min-h-[10px] max-h-[10px]' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-base'>Пароль</FormLabel>
							<FormControl>
								<Input type="password" placeholder="Введите пароль" {...field} />
							</FormControl>
							<FormMessage className='min-h-[10px] max-h-[10px]' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-base'>Повторите пароль</FormLabel>
							<FormControl>
								<Input type="password" placeholder="Повторите пароль" {...field} />
							</FormControl>
							<FormMessage className='min-h-[10px] max-h-[10px]' />
						</FormItem>
					)}
				/>
				<div className="flex justify-end">
					<Button className='text-base' type="submit">Продолжить регистрацию</Button>
				</div>
			</form>
		</Form>
	)
}

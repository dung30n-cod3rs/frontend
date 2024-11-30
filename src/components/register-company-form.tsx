"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from './ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { Textarea } from './ui/textarea'

const FormSchema = z.object({
	companyName: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
})

export function RegisterCompanyForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			companyName: "",
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4 space-y-6 items-center">
				<FormField
					control={form.control}
					name="companyName"
					render={({ field }) => (
						<FormItem className='w-1/2'>
							<FormLabel>Название компании</FormLabel>
							<FormControl>
								<Input placeholder="KRONA" {...field} />
							</FormControl>
							<FormDescription>
								Название компании, которую вы представляете
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<Select>
						<Label htmlFor="message">Шаблоны JSON (опционально)</Label>
						<SelectTrigger className="w-1/2">
							<SelectValue placeholder="Выберите шаблон" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Доступные шаблоны</SelectLabel>
								<SelectItem value="pattern-1">Шаблон 1</SelectItem>
								<SelectItem disabled value="pattern-2">Шаблон 2</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div>
					<Label htmlFor="message">JSON внутренней структуры компании</Label>
					<Textarea className='min-h-[200px] max-h-[500px]' placeholder="Введите JSON" />
				</div>
				<Button type="submit">Подтвердить</Button>
			</form>
		</Form>
	)
}

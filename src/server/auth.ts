export const signIn = async (email: string, password: string) => {
	const res = await fetch('http://localhost:8080/api/v1/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ login: email, password }),
	})

	if (!res.ok) {
		throw new Error('test')
	} else {
		return res.json()
	}
}
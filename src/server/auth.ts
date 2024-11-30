export const signIn = async (email: string, password: string) => {
	const res = await fetch('http://localhost:8080/api/v1/auth/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ login: email, password }),
	})

	if (!res.ok) {
		throw new Error('Bad credentials')
	} else {
		return res.json()
	}
}

export const refresh = async (refreshToken: string) => {
	console.log(refreshToken);
  const res = await fetch('http://localhost:8080/api/v1/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Set-Cookie': refreshToken },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) {
    throw new Error('test2');
  } else {
    return res.json();
  }
};

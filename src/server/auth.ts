export const signIn = async (email: string, password: string) => {
  const res = await fetch("http://localhost:5000/api/v1/Auth/Login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password }),
  });

  if (!res.ok) {
    throw new Error("Bad credentials");
  } else {
    return res.json();
  }
};

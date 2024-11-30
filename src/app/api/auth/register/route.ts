import { Api } from "@/server/myApi"
import { serialize } from "cookie"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
		console.log(body);
    console.log("Received registration attempt:", body);

    const { name, email, password, repeatPassword } = body;

    const res = await new Api().api.v1AuthRegisterCreate({
      name,
			email,
			password,
			repeatPassword,
    });

    const token = res.data?.token;
    if (!token) {
      throw new Error("test");
    }

    console.log(token);

    const accessTokenCookie = serialize("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "strict",
    });

    return NextResponse.json(
      { success: true, message: "Login successful" },
      {
        headers: {
          "Set-Cookie": accessTokenCookie,
        },
      },
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "test") {
      console.error("Login failed:", error.message);
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }
		console.log(error);
    console.error(
      "API request error:",
      error instanceof Error ? error.message : String(error),
    );
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
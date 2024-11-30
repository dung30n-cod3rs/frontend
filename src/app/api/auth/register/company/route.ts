import { Api } from "@/server/myApi"
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Received login attempt:", body);

    const { name } = body;

		const cookieStore = await cookies();
		const token = cookieStore.get('accessToken')?.value;

    const res = await new Api().api.v1CompaniesCreate({
      name: name,
    },
		{
			headers: {
				"Authorization": `Bearer ${token}`,
			},
		}
		);


    return NextResponse.json(
      { success: true, message: "Create company successful" },
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "test") {
      console.error("Create company failed:", error.message);
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }

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

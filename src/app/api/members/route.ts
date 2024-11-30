import {
	Api
} from "@/server/myApi"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { companyId, positionId, userName, userEmail, userPassword, salary } = await request.json();

		console.log(companyId, positionId, userName, userEmail, userPassword, salary);
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      redirect("/login");
    }

    const addMembersRes = await new Api().api.v1MembersCreate(
      {
				companyId: companyId,
				positionId: positionId,
				userName: userName,
				userEmail: userEmail,
				userPassword: userPassword,
				salary: salary,
			},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return NextResponse.json({
      success: true,
      message: "Members added successfully",
    });
  } catch (error: unknown) {
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

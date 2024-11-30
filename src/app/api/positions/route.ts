import {
	Api
} from "@/server/myApi"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, weight, companyId } = await request.json();

    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      redirect("/login");
    }

    const addPositionRes = await new Api().api.v1PositionsCreate(
      {
				name: name,
				weight: weight,
				companyId: companyId
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

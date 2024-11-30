import { Api, GetUserByIdResponseApiDto } from "@/server/myApi"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

		const body = await request.json();

    if (!token) {
      redirect("/login");
    }

    const userID = jwt.decode(token)?.UserId;
    if (!userID) {
      redirect("/login");
    }

    const companyRes = await new Api().api.v1CompaniesDetail(body.companyId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const companyJson: GetUserByIdResponseApiDto = await companyRes.json();
    if (!companyJson.item) {
      console.log("Company not found");
    }

    return NextResponse.json({
      success: true,
      message: "successful",
      company: companyJson.item,
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

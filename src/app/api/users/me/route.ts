import { Api, GetUserByIdResponseApiDto } from "@/server/myApi";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      redirect("/login");
    }

    const userID = jwt.decode(token)?.UserId;
    if (!userID) {
      redirect("/login");
    }

    const userRes = await new Api().api.v1UsersDetail(userID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userJson: GetUserByIdResponseApiDto = await userRes.json();
    if (!userJson.item) {
      redirect("/login");
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: userJson.item,
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

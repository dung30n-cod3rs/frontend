import {
  Api,
  GetCompanyMembersByIdItemResponseApiDto,
  GetCompanyMembersByIdResponseApiDto,
} from "@/server/myApi";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      redirect("/login");
    }

    const employeesRes = await new Api().api.v1CompaniesMembersDetail(
      body.companyId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const employeesJson: GetCompanyMembersByIdResponseApiDto =
      await employeesRes.json();
    if (!employeesJson.items) {
      redirect("/login");
    }
    const employees: Employee[] = employeesJson.items.map(
      (item: GetCompanyMembersByIdItemResponseApiDto) => {
        return {
          name: item.userName,
          email: item.userEmail,
        };
      },
    );

    return NextResponse.json({
      success: true,
      employees: employees,
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

import {
  Api,
  GetCompanyPositionByIdResponseApiDto,
  PositionApiDto,
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

    console.log(body);

    const positionsRes = await new Api().api.v1CompaniesPositionsDetail(
      body.companyId,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const positionsJson: GetCompanyPositionByIdResponseApiDto =
      await positionsRes.json();
    if (!positionsJson.items) {
      redirect("/login");
    }
    const positions: Position[] = positionsJson.items.map(
      (item: PositionApiDto) => {
        return {
          id: item.id,
          name: item.name,
          weight: item.weight,
        };
      },
    );

    console.log(body.companyId);
    console.log(positions);

    return NextResponse.json({
      success: true,
      positions: positions,
    });
  } catch (error: unknown) {
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

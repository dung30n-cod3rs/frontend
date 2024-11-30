import { Api, FilialApiDto, GetFilialByCompanyIdApiDto } from "@/server/myApi";
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

    const filialsRes = await new Api().api.v1FilialsByCompanyList(
      { companyId: body.companyId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const filialsJson: GetFilialByCompanyIdApiDto = await filialsRes.json();
    if (!filialsJson.items) {
      redirect("/login");
    }
    const filials: Filial[] = filialsJson.items.map((item: FilialApiDto) => {
      return {
        id: item.id,
        name: item.name,
      };
    });

    return NextResponse.json({
      success: true,
      filials: filials,
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

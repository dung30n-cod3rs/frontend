import {
  Api,
  GetCompanyMetricsByIdItemResponseApiDto,
  GetCompanyMetricsByIdResponseApiDto,
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

    const { toDate, fromDate, employeeId } = body;

    console.log(body);
    console.log(toDate);

    const metricsRes = await new Api().api.v1CompaniesMetricsByFilterCreate(
      {
        creationDateTo: toDate,
        creationDateFrom: fromDate,
        userId: employeeId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const metricsJson: GetCompanyMetricsByIdResponseApiDto =
      await metricsRes.json();
    if (!metricsJson.items) {
      redirect("/login");
    }
    const metrics: Metric[] = metricsJson.items.map(
      (item: GetCompanyMetricsByIdItemResponseApiDto) => {
        return {
          name: item.name,
          weight: item.weight,
          description: item.description,
          targetValue: item.targetValue,
          count: item.count,
          bonus: item.bonus,
        };
      },
    );

    return NextResponse.json({
      success: true,
      metrics: metrics,
    });
  } catch (error: unknown) {
    console.error(error);
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

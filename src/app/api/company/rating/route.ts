import {
  Api,
  GetCompanyMetricsByIdItemResponseApiDto,
  GetCompanyMetricsByIdResponseApiDto,
  GetCompanyRatingByFilterItemResponseApiDto,
  GetCompanyRatingByFilterResponseApiDto,
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

    const { dateTo, dateFrom, metricId, positionId, filialId, companyId } =
      body;

    console.log(body);

    const ratingRes = await new Api().api.v1CompaniesRatingByFilterCreate(
      {
        creationDateTo: dateTo,
        creationDateFrom: dateFrom,
        metricId: metricId,
        positionId: positionId,
        filialId: filialId,
        companyId: companyId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const metricsJson: GetCompanyRatingByFilterResponseApiDto =
      await ratingRes.json();
    if (!metricsJson.items) {
      redirect("/login");
    }
    const rating: RatingRow[] = metricsJson.items.map(
      (item: GetCompanyRatingByFilterItemResponseApiDto) => {
        return {
          name: item.name,
          targetValue: item.targetValue,
          memberValue: item.memberValue,
        };
      },
    );

    return NextResponse.json({
      success: true,
      rating: rating,
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

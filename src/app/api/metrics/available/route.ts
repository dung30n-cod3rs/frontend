import {
  Api,
  GetAvailableMetricsByPositionResponseIdApiDto,
  MetricApiDto,
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

    const metricsRes =
      await new Api().api.v1MetricsGetAvailableMetricsByPositionIdDetail(
        body.positionId,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    const metricsJson: GetAvailableMetricsByPositionResponseIdApiDto =
      await metricsRes.json();
    if (!metricsJson.items) {
      redirect("/login");
    }
    const metrics: Metric[] = metricsJson.items.map((item: MetricApiDto) => {
      return {
        id: item.id,
        name: item.name,
        positionId: item.position?.id,
        weight: item.weight,
        description: item.description,
        targetValue: item.targetValue,
        count: 0,
        bonus: 0,
      };
    });

    return NextResponse.json({
      success: true,
      metrics: metrics,
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

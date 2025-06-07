"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const SkeletonLoader = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
);

interface ChartDataItem {
  date: string;
  carbon: number;
  donations: number;
}

const chartConfig = {
  views: {
    label: "Total:",
  },
  carbon: {
    label: "Carbon Reduced (kg CO₂)",
    color: "hsl(var(--chart-1))",
  },
  donations: {
    label: "Donations (RM)",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Graphcard() {
  const [activeChart, setActiveChart] = useState<'carbon' | 'donations'>("carbon");
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<{ data: ChartDataItem[] }>('/api/global-chart-data');
        setChartData(response.data.data || []);
      } catch (err: any) {
        console.error("Failed to fetch global chart data:", err);
        setError(err.message || "Could not load chart data.");
        setChartData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const totals = useMemo(() => {
    if (isLoading || error || chartData.length === 0) {
      return { carbon: '--', donations: '--' };
    }
    return {
      carbon: chartData.reduce((acc, curr) => acc + curr.carbon, 0).toLocaleString(),
      donations: chartData.reduce((acc, curr) => acc + curr.donations, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    };
  }, [chartData, isLoading, error]);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-4 py-3 sm:px-6 sm:py-5">
          <CardTitle className="text-base sm:text-lg">Global Carbon & Donations Overview</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            Showing global monthly totals
          </CardDescription>
        </div>
        <div className="flex">
          {(['carbon', 'donations'] as const).map((key) => {
            const chart = key;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-4 py-3 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-6 sm:py-4"
                onClick={() => setActiveChart(chart)}
                disabled={isLoading || !!error}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-base font-bold leading-none sm:text-xl md:text-2xl">
                  {totals[chart]}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 py-4 sm:p-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-[250px]">
             <SkeletonLoader className="h-4/5 w-full" />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-[250px] text-red-600">
             <p>Error: {error}</p>
          </div>
        ) : chartData.length === 0 ? (
           <div className="flex justify-center items-center h-[250px] text-gray-500">
             <p>No data available to display.</p>
           </div>
        ): (
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
                top: 10,
                bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                  try {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
                  } catch { return ''; }
              }}
            />
            <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent className="w-[150px]" nameKey="views"
                  labelFormatter={(value) => {
                     try {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                      } catch { return ''; }
                   }}
                   formatter={(value, name) => (
                      <span>
                        {`${value.toLocaleString()} ${name === 'carbon' ? 'kg CO₂' : 'RM'}`}
                      </span>
                    )}
                 />}
            />
              <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} radius={4} />
          </BarChart>
        </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}

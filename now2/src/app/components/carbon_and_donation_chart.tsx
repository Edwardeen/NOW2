"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { date: "01/01/2024", carbon: 500, donations: 1000 },
    { date: "01/15/2024", carbon: 520, donations: 4000 },
    { date: "02/01/2024", carbon: 540, donations: 7000 },
    { date: "02/15/2024", carbon: 560, donations: 10000 },
    { date: "03/01/2024", carbon: 580, donations: 15000 },
    { date: "03/15/2024", carbon: 600, donations: 20000 },
    { date: "04/01/2024", carbon: 620, donations: 35000 },
    { date: "04/15/2024", carbon: 640, donations: 20000 },
    { date: "05/01/2024", carbon: 660, donations: 10000 },
    { date: "05/15/2024", carbon: 680, donations: 65000 },
    { date: "06/01/2024", carbon: 700, donations: 50000 },
    { date: "06/15/2024", carbon: 720, donations: 65000 },
    { date: "07/01/2024", carbon: 740, donations: 80000 },
    { date: "07/15/2024", carbon: 760, donations: 95000 },
    { date: "08/01/2024", carbon: 730, donations: 90000 },
    { date: "08/15/2024", carbon: 800, donations: 105000 },
    { date: "09/01/2024", carbon: 820, donations: 120000 },
    { date: "09/15/2024", carbon: 940, donations: 155000 },
    { date: "10/01/2024", carbon: 1060, donations: 180000 },
    { date: "10/15/2024", carbon: 680, donations: 145000 },
    { date: "11/01/2024", carbon: 850, donations: 160000 },
    { date: "11/15/2024", carbon: 920, donations: 95000 },
    { date: "12/01/2024", carbon: 0, donations: 0 },
    { date: "12/15/2024", carbon: 0, donations: 0 }
  ];
  

const chartConfig = {
  views: {
    label: "Total:",
  },
  carbon: {
    label: "Carbon Emissions Reduced",
    color: "hsl(var(--chart-1))",
  },
  donations: {
    label: "Bimonthly Donated Money",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Graphcard() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("carbon")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.carbon, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.donations, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>NOW2 Carbon Emission & Donations</CardTitle>
          <CardDescription>
            Showing Carbon Emission & Donations in 2024
          </CardDescription>
        </div>
        <div className="flex">
          {["carbon", "donations"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total]}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
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
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

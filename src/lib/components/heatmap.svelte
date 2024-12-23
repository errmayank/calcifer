<script lang="ts">
    import {
        Tooltip,
        TooltipContent,
        TooltipProvider,
        TooltipTrigger,
    } from "$lib/components/primitives/tooltip";
    import { DayJs, pluralSuffixIfNeeded, TimeFormat } from "$lib/utils";

    let { range }: { range: "last_year" | "last_30_days" } = $props();

    const generateDates = (days: number): string[] => {
        const start = DayJs();

        return Array.from({ length: days }, (_, index) => {
            return start.subtract(index, "day").format(TimeFormat.Date);
        });
    };

    const generateContributions = (dates: string[]): Record<string, number> => {
        return dates.reduce((acc: Record<string, number>, date: string) => {
            acc[date] = Math.floor(Math.random() * 5); // Random value between 0 and 4
            return acc;
        }, {});
    };

    const chunkByWeeks = (dates: string[]): string[][] => {
        const weeks: string[][] = [];
        for (let i = 0; i < dates.length; i += 7) {
            weeks.push(dates.slice(i, i + 7));
        }
        return weeks;
    };

    const dates = (): string[] => (range === "last_year" ? generateDates(365) : generateDates(30));

    const contributions: Record<string, number> = generateContributions(dates());

    const weeklyData = (): string[][] => chunkByWeeks(dates());

    const getColor = (level: number): string => {
        if (level === 0) {
            return "bg-muted";
        }

        const colors = [
            "border-streak bg-streak/80",
            "border-streak/80 bg-streak/60",
            "border-streak/60 bg-streak/40",
            "border-streak/40 bg-streak/20",
        ];

        return colors.at(-level) ?? colors[3];
    };
</script>

<div class="flex snap-x snap-mandatory flex-row-reverse gap-1 overflow-x-auto">
    {#each weeklyData() as week}
        <div class="flex snap-start flex-col gap-1">
            {#each week as date}
                {@const times = contributions[date]}

                <TooltipProvider delayDuration={0}>
                    <Tooltip disableHoverableContent={true}>
                        <TooltipTrigger>
                            <div
                                class={`day h-[14px] w-[14px] rounded-sm border ${getColor(contributions[date])}`}
                            ></div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>
                                {times}
                                {String("time").concat(pluralSuffixIfNeeded(times))} on {DayJs(
                                    date,
                                ).format(TimeFormat.OrdinalDateShort)}
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            {/each}
        </div>
    {/each}
</div>

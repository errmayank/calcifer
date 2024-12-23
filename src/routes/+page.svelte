<script lang="ts">
    import { Progress, Heatmap } from "$lib/components";
    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/primitives/card";
    import { CardVariant, CardVariantClass } from "$lib/models";
    import { cn } from "$lib/utils";

    let range: "last_year" | "last_30_days" = "last_year";

    const tasks = [
        { title: "Leetcode daily challenge", variant: CardVariant["1x4"] },
        { title: "Anki - Japanese", variant: CardVariant["3x2"] },
        { title: "Review Zaku queue", variant: CardVariant["1x2"] },
        { title: "Read 3 pages of Kafka", variant: CardVariant["2x2"] },
        { title: "Japanese Immersion", variant: CardVariant["1x2"] },
        { title: "Do Christmas decorations", variant: CardVariant["1x2"] },
        { title: "Decide Christmas movies", variant: CardVariant["1x2"] },
        { title: "Sanitize", variant: CardVariant["2x4"] },
        { title: "Cook Shakshuka", variant: CardVariant["2x2"] },
        { title: "Wrap up blog post", variant: CardVariant["2x2"] },
        { title: "Take vitamins", variant: CardVariant["1x2"] },
    ];

    const randomProgress = [0, 50, 100];
</script>

<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Today's tasks</h3>
<div class="mt-3"></div>
<div class="grid grid-flow-dense auto-rows-[84px] grid-cols-4 gap-3">
    {#each tasks as task}
        {@const progressIndex = Math.floor(Math.random() * 3)}
        <Card
            class={cn(
                "flex size-full flex-col justify-between p-6",
                CardVariantClass[task.variant],
            )}
        >
            <CardHeader class="relative flex space-y-0 p-0">
                <CardTitle>{task.title}</CardTitle>
                <Progress value={randomProgress[progressIndex]} class="absolute right-0 top-0" />
            </CardHeader>
            <CardContent class="p-0">
                {#if task.variant === CardVariant["3x2"]}
                    <div class="flex overflow-y-hidden overflow-x-scroll py-1.5">
                        <Heatmap {range} />
                    </div>
                {/if}
            </CardContent>
        </Card>
    {/each}
</div>

<script lang="ts">
    import { DateFormatter, today, getLocalTimeZone } from "@internationalized/date";
    import type { DateValue } from "@internationalized/date";
    import { CalendarIcon } from "lucide-svelte";

    import { Input } from "$lib/components/primitives/input";
    import { Label } from "$lib/components/primitives/label";
    import { Button } from "$lib/components/primitives/button";
    import { Popover, PopoverContent, PopoverTrigger } from "$lib/components/primitives/popover";
    import { Calendar } from "$lib/components/primitives/calendar";
    import { RadioGroup, RadioGroupItem } from "$lib/components/primitives/radio-group";
    import { cn } from "$lib/utils";

    const todayDate = today(getLocalTimeZone());
    const df = new DateFormatter("en-US", {
        dateStyle: "long",
    });

    let value: DateValue | undefined = $state(undefined);

    $effect(() => {
        console.log(value);
    });
</script>

<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Create a new Task</h3>
<div class="mt-3"></div>

<div class="grid w-full items-center gap-3">
    <div>
        <Label for="title">Title</Label>
        <Input type="title" id="title" placeholder="Title" />
    </div>
    <Popover>
        <PopoverTrigger>
            {#snippet child({ props })}
                <Label for="date">Date</Label>
                <Button
                    variant="outline"
                    class={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !value && "text-muted-foreground",
                    )}
                    {...props}
                >
                    <CalendarIcon />
                    {value ? df.format(value.toDate(getLocalTimeZone())) : "Choose a date"}
                </Button>
            {/snippet}
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0" align="start">
            <Calendar type="single" minValue={todayDate} bind:value />
        </PopoverContent>
    </Popover>

    <div>
        <Label for="size">Size</Label>
        <RadioGroup value="comfortable" name="spacing" class="flex gap-8 ">
            <div class="space-x- flex flex-col items-center justify-end gap-2">
                <div class="h-[14px] w-[28px] rounded-[4px] border bg-card"></div>
                <RadioGroupItem value="1x1" id="1x1" />
                <Label for="1x1">1x2</Label>
            </div>
            <div class="space-x- flex flex-col items-center justify-end gap-2">
                <div class="h-[14px] w-[56px] rounded-[4px] border bg-card"></div>
                <RadioGroupItem value="1x4" id="1x4" />
                <Label for="1x4">1x4</Label>
            </div>
            <div class="space-x- flex flex-col items-center justify-end gap-2">
                <div class="h-[28px] w-[28px] rounded-[4px] border bg-card"></div>
                <RadioGroupItem value="2x2" id="2x2" />
                <Label for="2x2">2x2</Label>
            </div>
            <div class="space-x- flex flex-col items-center justify-end gap-2">
                <div class="h-[28px] w-[56px] rounded-[4px] border bg-card"></div>
                <RadioGroupItem value="2x4" id="2x4" />
                <Label for="2x4">2x4</Label>
            </div>
            <div class="space-x- flex flex-col items-center justify-end gap-2">
                <div class="h-[42px] w-[56px] rounded-[4px] border bg-card"></div>
                <RadioGroupItem value="3x4" id="3x4" />
                <Label for="3x4">3x4</Label>
            </div>
        </RadioGroup>
        <Button variant="secondary">Create</Button>
    </div>
</div>

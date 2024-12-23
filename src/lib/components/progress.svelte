<script lang="ts">
    import { cn } from "$lib/utils";
    import { CheckIcon } from "./icons";

    type ProgressProps = { value: number; class?: string };

    let { value = $bindable(), class: className = "" }: ProgressProps = $props();

    let isComplete = $derived(value >= 100);
    let angle = $derived(360 * (value / 100));
    let background = $derived(`
        conic-gradient(transparent 0deg ${angle}deg, hsl(var(--muted)) ${angle}deg 360deg),
        conic-gradient(hsl(var(--streak)) 0deg, hsl(var(--streak)) 360deg)
    `);
</script>

<div
    class={cn("relative h-[32px] w-[32px] rounded-full transition-all ease-in-out", className)}
    style="background: {background};"
>
    <div
        class={cn(
            "absolute inset-0 m-auto flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-card",
            isComplete ? "bg-streak" : "bg-card",
        )}
    >
        {#if isComplete}
            <CheckIcon size={24} color="#fff" />
        {/if}
    </div>
</div>

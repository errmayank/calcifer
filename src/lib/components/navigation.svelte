<script>
    import { SunIcon, MoonIcon, PlusIcon } from "lucide-svelte/icons";
    import { toggleMode, mode } from "mode-watcher";

    import { Button } from "$lib/components/primitives/button";
    import { CalciferIcon } from "$lib/components/icons";
    import { CalciferText } from "$lib/components";
</script>

<nav class="h-12 w-full border-b bg-card">
    <div class="container flex h-12 items-center justify-between">
        <a href="/" class="flex select-none items-center gap-1">
            <CalciferIcon size={18} />
            <CalciferText width={56} height={16} />
        </a>
        <div class="flex items-center gap-2">
            <a
                href="/task/create"
                class="flex max-h-[36px] min-h-[36px] items-center gap-1.5 p-2.5"
            >
                <PlusIcon class="max-h-[14px] max-w-[14px]" />
                <span class="text-xs">Create</span>
            </a>
            <Button onclick={toggleMode} variant="ghost" size="icon">
                {#if $mode === "dark"}
                    <MoonIcon size={20} />
                {:else}
                    <SunIcon size={20} />
                {/if}
                <span class="sr-only">Toggle theme</span>
            </Button>
        </div>
    </div>
</nav>

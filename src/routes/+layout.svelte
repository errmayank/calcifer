<script lang="ts">
    import { ModeWatcher } from "mode-watcher";

    import "../app.css";
    import { Navigation } from "$lib/components";

    let { children } = $props();
</script>

<ModeWatcher />
<Navigation />
<main class="container my-6">
    {@render children()}
</main>

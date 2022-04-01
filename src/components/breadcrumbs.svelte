<script lang="ts">
    import Chip, { Set, Text } from "@smui/chips"
    import { goto } from '$app/navigation'
    import Paper from "@smui/paper/src/Paper.svelte";
    export let path: string
    const crumbNames: string[] = path.split("/").map(p => p.replace("_"," "));
    function navigate(destination: string) {
        if (!crumbNames.includes(destination.replace(" ","_"))) {
            goto("/")    
            return
        }
        let route = ""
        for(let i in crumbNames) {
            const part = crumbNames[i]
            route += `/${part}`
            if (part == destination) {
                break
            }
        }
        goto(route)
    }
    function checkLastChip(chip: string): boolean {
        if (crumbNames.length === 0) {
            return false;
        }
        return chip === crumbNames[crumbNames.length-1];
    }
</script>

<Paper class="breadcrumb-bar" style="padding: 0;">
    <Set class="breadcrumb-chips" chips={["index"].concat(crumbNames)} let:chip>
        <Chip {chip} ripple={!checkLastChip(chip)} on:click={() => {navigate(chip)}}>
                {#if chip === 'index'}
                    <p class="material-icons">chevron_right</p>
                {:else}
                <Text>{chip}</Text>
                {/if}
        </Chip>
    </Set>
</Paper>

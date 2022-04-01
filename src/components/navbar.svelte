<script lang="ts">
    import type { TopAppBarComponentDev } from '@smui/top-app-bar';
    import TopAppBar, {
        Row,
        Section,
        Title,
        AutoAdjust,
    } from '@smui/top-app-bar'
    import IconButton from '@smui/icon-button'
    import { goto } from '$app/navigation'

    let topAppBar : TopAppBarComponentDev
</script>
<div>
    <TopAppBar style="z-index: 999;" class="navbar" bind:this={topAppBar} variant="static" dense>
        <Row>
            <Section align="end">
                <IconButton class="material-icons" disabled aria-label="Geography">public</IconButton>
                <IconButton class="material-icons" aria-label="Bestiary" on:click={() => {goto("/bestiary/")}}>bug_report</IconButton>
                <IconButton class="material-icons" disabled aria-label="Supernatural">auto_fix_high</IconButton>
                <IconButton class="material-icons" disabled aria-label="About">info</IconButton>
            </Section>
        </Row>
    </TopAppBar>
    <AutoAdjust {topAppBar}/>
</div>
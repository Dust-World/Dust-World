<script context="module">
    import { h1, h2, h3, strong } from './components/components'
    export { h1, h2, h3, strong };
</script>
<script lang="ts">
    import Navbar from '../components/navbar.svelte'
    import Paper from '@smui/paper'
    import Breadcrumbs from '../components/breadcrumbs.svelte';
    import { page } from '$app/stores'
</script>

<Navbar/>
<Breadcrumbs path={$page.routeId}/>
<Paper>
    <slot/>
</Paper>

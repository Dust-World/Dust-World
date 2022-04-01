<script>
import { onMount } from 'svelte'
import Splash from '../_content/splash.md'
import Button, { Label } from '@smui/button'
import IconButton from '@smui/icon-button'
import LayoutGrid, {Cell} from '@smui/layout-grid'

let splashDisplayed = true;

const wipeScreen = (event) => {
    if (event.wheelDeltaY == null || event.wheelDeltaY < 0) {
        window.removeEventListener("wheel", wipeScreen)
        splashDisplayed = false;
    }
}

onMount(() => {window.addEventListener("wheel", wipeScreen, {passive: false})})

</script>


<div class="splash-div" style="opacity: {splashDisplayed ? 1 : 0}; transform: {splashDisplayed ? false : 'translateY(-100%)'};">
    <div class="spacer" style="height: 20vh;"/>
    <LayoutGrid
        fixedColumnWidth
        >
        <Cell class="spacer" span={1}/>
        <Cell 
            span={11}
            >
            <Splash/>
            <Button variant="raised"><Label>The World</Label></Button>
            <Button variant="raised"><Label>Ruleset</Label></Button>      
        </Cell>    
    </LayoutGrid>
    <div class="spacer" style="height: 25vh"/>
        <IconButton on:scroll={wipeScreen} on:click|once={wipeScreen} style="margin-left: 50vw" class="material-icons round-button" aria-label="Continue">keyboard_arrow_down</IconButton>
</div>

<style lang="scss">
    div.splash-div {
        background: url('$lib/images/splashBackground.jpg') center center;
        background-size: cover;
        background-attachment: fixed;
        background-color: thistle;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        min-height: 360px;
        z-index: 998;
        transition: opacity 550ms, transform 2000ms ease-out;
    }
</style>
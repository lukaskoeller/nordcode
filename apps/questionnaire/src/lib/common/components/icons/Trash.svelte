<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';

interface IconProps extends HTMLAttributes<HTMLSvgElement> {}

let props: IconProps = $props();
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="nc-icon"
    aria-hidden="true"
    viewBox="0 0 24 24"
     {...props}
    >
    <path fill="none" d="M0 0h24v24H0z"/><path d="M20 6a1 1 0 0 1 .117 1.993L20 8h-.081L19 19a3 3 0 0 1-2.824 2.995L16 22H8c-1.598 0-2.904-1.249-2.992-2.75l-.005-.167L4.08 8H4a1 1 0 0 1-.117-1.993L4 6h16zm-9.489 5.14a1 1 0 0 0-1.218 1.567L10.585 14l-1.292 1.293-.083.094a1 1 0 0 0 1.497 1.32L12 15.415l1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L13.415 14l1.292-1.293.083-.094a1 1 0 0 0-1.497-1.32L12 12.585l-1.293-1.292-.094-.083zM14 2a2 2 0 0 1 2 2 1 1 0 0 1-1.993.117L14 4h-4l-.007.117A1 1 0 0 1 8 4a2 2 0 0 1 1.85-1.995L10 2h4z"/></svg>

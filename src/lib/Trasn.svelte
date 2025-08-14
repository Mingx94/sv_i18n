<script lang="ts">
	import { formatXML, type SnippetWithAttributes } from './format-xml';

	interface TransProps {
		message: string;
	};

	type Props = TransProps & {
		[key: string]: any;
	};

	let { message, options, inputs, ...restSnippet }: Props = $props();

	const text = formatXML(message, restSnippet as Record<string, SnippetWithAttributes | undefined>);
</script>

{#each text as str}
	{#if typeof str === 'string'}
		{str}
	{:else}
		{@render str[0](str[1], str[2])}
	{/if}
{/each}

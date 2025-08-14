<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { setLocale } from '$lib/paraglide/runtime';
	import Trans from '$lib/Trasn.svelte';
</script>

<main class="p-4">
	<div class="flex gap-2">
		<button class="bg-amber-100 px-2 py-1" onclick={() => setLocale('en')}>en</button>
		<button class="bg-amber-100 px-2 py-1" onclick={() => setLocale('de')}>de</button>
		<button class="bg-amber-100 px-2 py-1" onclick={() => setLocale('zh-tw')}>zh-tw</button>
	</div>

	<hr class="my-2" />
	
	<h1 class="mb-2 text-2xl font-bold">
		{m.hello()}
	</h1>
	<p>
		<Trans message={m.svelte_link()}>
			{#snippet link(content: string)}
				<a href="https://svelte.dev/docs/svelte/overview" class="bg-cyan-200 p-1" target="_blank">{content}</a>
			{/snippet}
		</Trans>
	</p>
	<p>
		<Trans message={m.contact({ email: 'test@test.com' })}>
			{#snippet link(content: string, attributes: Record<string, string>)}
				<a href={attributes.href} class="bg-cyan-200 p-1" target="_blank">{content}</a>
			{/snippet}
		</Trans>
	</p>
</main>

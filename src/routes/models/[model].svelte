<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import type { Tree, NodeChild, Node } from '$lib/decisionTree';

	interface ModelData {
		title: string;
		tree: Tree;
	}

	const models = ['mushrooms'];

	export const load: Load = async ({ error, status, params }) => {
		if (!models.includes(params.model)) {
			return {
				status: 404,
				error: new Error(`Model ${params.model} was not found!`)
			};
		}

		const tree = getDecisionTree();

		const model: ModelData = {
			title: 'Mushrooms',
			tree
		};

		return {
			props: {
				model
			}
		};
	};
</script>

<script lang="ts">
	import { getDecisionTree } from '$lib/adapters';
	import Navbar from '$lib/components/Navbar';

	export let model: ModelData;

	let nodeList: { node: Node; selectedChildEl?: EventTarget & HTMLButtonElement }[] = [
		{ node: model.tree.root }
	];

	function traversePath(child: NodeChild, index: number, el: EventTarget & HTMLButtonElement) {
		if (child.selected) {
			child.selected = false;

			for (let i = index + 1; i < nodeList.length; i++) {
				if (!nodeList[i].node.children) return;
				nodeList[i].node.children?.forEach((v) => (v.selected = false));
			}

			nodeList = nodeList.slice(0, index + 1);
		} else {
			child.selected = true;
			nodeList[nodeList.length - 1].selectedChildEl = el;
			nodeList = [...nodeList, { node: child.node }];
		}

		setTimeout(() => {
			el.scrollIntoView({
				behavior: 'smooth'
			});
		}, 100);
	}

	function getTranslateX(el: EventTarget & HTMLButtonElement) {
		const bounds = el.getBoundingClientRect();
		const parentBounds = (el.parentElement ?? document.body).getBoundingClientRect();

		const elCenter = bounds.x + bounds.width / 2;
		const parentCenter = parentBounds.x + parentBounds.width / 2;

		console.log(elCenter, parentCenter);

		return parentCenter - elCenter;
	}
</script>

<svelte:head>
	<title>{model.title}</title>
</svelte:head>

<Navbar />

<main class="prose mx-32 my-8 max-w-none flex flex-col items-center">
	<h1 class="text-center mt-16">Check mushrooms for edibility</h1>

	<div class="flex flex-col  items-center">
		{#each nodeList as nodeListEntry, i}
			<div class="card min-w-[12rem] not-prose">
				{#if !nodeListEntry.node.children}
					{@const prob = Math.round(nodeListEntry.node.probability * 100)}
					<div class="card-body px-2 py-2 bg-base-200 border-primary border-2 rounded-lg shadow-md">
						<h2 class="card-title mx-auto">Result: {nodeListEntry.node.content}</h2>
						<div class="flex items-center gap-4 w-max mx-8 whitespace-nowrap">
							<progress class="progress progress-primary bg-base-100" value={prob} max="100" />
							<span>{prob} %</span>
						</div>
					</div>
				{:else}
					<div class="card-body px-2 py-2 border-primary border-2 rounded-full shadow-md">
						<h2 class="card-title mx-auto">{nodeListEntry.node.content}</h2>
					</div>
				{/if}
			</div>
			{#if nodeListEntry.node.children}
				<div
					class="bg-base-200 w-0.5 h-16 transition-color"
					class:bg-primary={i < nodeList.length - 1}
				/>
				<div
					class="grid grid-flow-col gap-8 transition-transform"
					style={`transform: translateX(${
						nodeListEntry.selectedChildEl ? getTranslateX(nodeListEntry.selectedChildEl) : 0
					}px);`}
				>
					{#each nodeListEntry.node.children as child (child.label)}
						<button
							class={`btn min-w-[4rem] transition-all ${
								/*disable if not the last row*/ child.selected
									? 'btn-outlined btn-primary'
									: i < nodeList.length - 1
									? 'btn-disabled'
									: ''
							} `}
							on:click={(e) => traversePath(child, i, e.currentTarget)}>{child.label}</button
						>
					{/each}
				</div>
			{/if}
			{#if i < nodeList.length - 1}
				<div class="w-0.5 h-16 bg-primary" />
			{/if}
		{/each}
	</div>
</main>

<script>
	import ArrowDown from '$lib/icons/ArrowDown';
	import Language from '$lib/icons/Language';
	import Logo from '$lib/icons/Logo';
</script>

<nav class="navbar px-32 bg-base-200">
	<div class="flex-1">
		<a class="btn btn-hidden gap-2" href="/">
			<Logo />
			<span class="normal-case">Decision Tree Explorer</span>
		</a>
	</div>
	<div class="flex-none">
		<slot />
		<ul class="menu menu-horizontal p-0">
			<li tabindex="0">
				<button class="btn btn-ghost">
					<Language />
					<ArrowDown />
				</button>
				<ul class="p-2 bg-base-100">
					<li><a>Deutsch</a></li>
					<li><a>English</a></li>
				</ul>
			</li>
		</ul>
	</div>
</nav>

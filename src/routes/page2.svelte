<script>
	import { wsConn, initConn } from '$lib/wsStore';
	import { onMount } from 'svelte';

	let wsConnection;

	onMount(() => {
		if (!$wsConn) {
			$wsConn = initConn();
			console.log($wsConn);
		}
	});

	function handleClick() {
		$wsConn.send('Hello from Page 2');
	}
</script>

<a href=".">Home</a>
<button on:click={handleClick}>Send Hello from Page 2</button>

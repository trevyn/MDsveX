<script>
	let button = false;
	$: x = button?5:0;
</script>

<div class="p-12 bg-gray-50 text-gray-500">

# This is your card

    one
    ## ehst is

> one two three

- markdown works
  - that's cool
- ok

<button on:click={()=>{button=!button}} type="button" aria-pressed="false" class="{button ? 'bg-pink-200' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
<span class="sr-only">Use setting</span>

  <!-- On: "translate-x-5", Off: "translate-x-0" -->

<span aria-hidden="true" class="translate-x-{x} inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
</button>

_what_ said the monster?

</div>

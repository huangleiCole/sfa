<template>
  <div>
  </div>
</template>
<script>
	const globalEvent = weex.requireModule('globalEvent');
	const nav = weex.requireModule('navigator');
	export default {
		data: {},
		created () {
          globalEvent.addEventListener("onPageInit", function(param) { 
	        nav.push('./login.js');
	      });
	    },
		methods: {}
	};
</script>
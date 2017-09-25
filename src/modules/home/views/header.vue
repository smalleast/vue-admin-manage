<template>
	<div class="header"><span class="h-title">{{title}}</span></div>
</template>

<script>
export default {
    name: 'header',
    props:["title"]
}
</script>
<style scoped>
	.header{
		height: 45px;
	}
	.h-title{
		line-height: 45px;
		display: block;
		text-align: center;
		padding: 0 50px;
		font-size: 16px;
		color: #fff;
		background:  #2c3e50;
	}
</style>
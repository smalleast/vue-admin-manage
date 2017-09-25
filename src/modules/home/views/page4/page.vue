<template>
	<div class="page">
		<v-header :title="title"></v-header>
	</div>
</template>

<script>
import Header from '../header.vue'
export default {
    name: 'page4',
    data:function(){
    	return {
    		title:"page4"
    	}
    },
    components:{
    	"v-header":Header
    }
}
</script>

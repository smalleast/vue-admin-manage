<template>
	<div class="page">
		<v-header :title="title"></v-header>
	</div>
</template>

<script>
import Header from '../header.vue'
export default {
    name: 'page3',
    data:function(){
    	return {
    		title:"page3"
    	}
    },
    components:{
    	"v-header":Header
    }
}
</script>

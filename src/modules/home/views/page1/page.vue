<template>
	<div class="page">
		<v-header :title="title"></v-header>
		<router-link to="/detail/123">goto detail</router-link>
	</div>
</template>

<script>
import Header from '../header.vue'
export default {
    name: 'page1',
    data:function(){
    	return {
    		title:"page1"
    	}
    },
    components:{
    	"v-header":Header
    }
}
</script>

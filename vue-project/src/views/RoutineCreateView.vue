<template>
    <div>
        <div id="Header1">루틴 만들기</div>
    </div>
    
    <div id="outer">
		
        <div class="box" style="width: 70%; max-height: 100%; overflow-y: auto; padding: 0px;">
			<MuscleList/>
		</div>
		<div class="box" style="width: 30%; max-height: 100%; overflow-y: auto; padding: 0px;">
			<CartList/>
		</div>
    </div>


</template>

<script setup>
    import CartList from '@/components/routine/CartList.vue';
import MuscleList from '@/components/routine/MuscleList.vue'
</script>

<style scoped>
	#Header1{
		font-weight: bold;
		font-size: 1.5rem;
	}

    #outer {
	  display: flex;
	  /* border: 1px dotted black; */
	  padding: 10px;
	  height: 90vh;
	  
	}
	.box {
	  /* border: 1px solid green; */
	  padding: 10px;
	  /* margin: 0 auto; */
	}
</style>
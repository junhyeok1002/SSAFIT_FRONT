<template>
    <div>
        <div class="box">
			<OneFitness/>
		</div>

    </div>
</template>

<script setup>
	import OneFitness from '@/components/routine/OneFitness.vue'
</script>

<style scoped>
    #outer {
	  display: flex;
	  /* border: 1px dotted black; */
	  padding: 10px;
	  width: 20%;
	}
	.box {
	  /* border: 1px solid green; */
	  padding: 10px;
	  /* margin: 0 auto; */
	}
</style>
<template>
    <div>

        <div class="box">
			<FitnessList/>
		</div>

    </div>
    

	

</template>

<script setup>
    import MuscleList from '@/components/routine/MuscleList.vue'
	import FitnessList from '@/components/routine/FitnessList.vue'
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
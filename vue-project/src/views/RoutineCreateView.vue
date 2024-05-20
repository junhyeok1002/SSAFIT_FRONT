<template>
    <div>
        <h1>create 루틴만들기</h1>
    </div>
    
    <div id="outer">
        <div class="box">
			<MuscleList/>
		</div>
    </div>


</template>

<script setup>
    import MuscleList from '@/components/routine/MuscleList.vue'
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
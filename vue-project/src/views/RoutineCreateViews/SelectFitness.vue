<template>
	<div>
		<Header />
		<div id="outer">

			<div class="box" style="width: 70%; max-height: 100%; overflow-y: scroll; padding: 0px;">
				<FitnessList />
			</div>
			<div class="box" style="width: 30%; max-height: 100%; overflow-y: scroll; padding: 0px;">
				<CartList />
			</div>
		</div>
	</div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import CartList from '@/components/routine/CartList.vue';
import FitnessList from '@/components/routine/FitnessList.vue'
</script>

<style scoped>
#Header1 {
	font-weight: bold;
	font-size: 1.5rem;
	margin-top: 1rem;
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
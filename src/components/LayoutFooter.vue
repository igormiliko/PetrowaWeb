<template>
    <v-footer
      v-if="!showFooter"
      app
      color="rgb(32, 40, 73)"
      dark>
      hello World
    </v-footer>
</template>
<script>
export default {
    name: 'footerLayout',
    data(){
		return {
      showFooter: true
		}
	},
	mounted(){
    if(this.showFooter) this.showToggleFooter()
	},
	methods: {
		showToggleFooter(){
			setTimeout(() => {
				this.showFooter = false
			},1000)
		}
	}
}
</script>
<style scoped>
    
</style>
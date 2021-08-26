<template>
  <v-app>
    <preLoader v-if="show"/>
    <headerLayout/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import headerLayout from './components/LayoutHeader.vue'
import preLoader from './components/preLoader.vue'

export default {
  name: 'App',
  components: {
    preLoader,
    headerLayout
  },
  data: () => ({
    show: true,
  }),
  watch: {
      '$route' (to) {
        document.title = to.meta.title || 'Petrowa Web'
      }
    },
    mounted(){
      if(this.show) this.showToggle()
    },
    methods: {
      showToggle(){
        setTimeout(() => {
          this.show = false
        },9000)
      },
    }
};
</script>

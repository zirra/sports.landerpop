<template>
  <div class="home">
    {{ sysClock }}<br/><br/>
    <signing-modal 
      :context="signing" />
  </div>
</template>

<script>
import SigningModal from '@/components/modals/SigningModal.vue'
export default {
  components: { SigningModal },
  name: 'HomeView',
  data () {
    return {
      signing: null
    }
  },
  async mounted () {
    this.signing = this.$route.query.mode
  }
}
</script>

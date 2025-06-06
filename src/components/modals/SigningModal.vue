<template>
  <div class="signup-container">
    <component 
      :is="`${context}-item`" />
  </div>
</template>

<script>
import ConfirmItem from '../elements/ConfirmItem.vue'
import SigninItem from '../elements/SigninItem.vue'
import SignupItem from '../elements/SignupItem.vue'

export default {
  name: 'SigningModal',
  components: { ConfirmItem, SigninItem, SignupItem },
  props: {
    context: {
      type: String,
      default: 'signin'
    }
  }
}
</script>

<style>

</style>
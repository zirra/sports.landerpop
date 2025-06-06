<template>
  <router-view/>
</template>

<script>
import { socket } from '@/libs/system/socket'
export default {
  async mounted () {

    window.addEventListener('resize', function() {
      let newWidth = window.innerWidth
      let newHeight = window.innerHeight
      console.log('New width:', newWidth, 'New height:', newHeight) 
    })

    await socket.emit('newUser',{ channels: ['iamgroot', 'home', 'somechannel'], id: 'iamgroot'}, 
      (e) => {
        if(e)
          console.log(e)
      }
    ),
    
    socket.emit('broadcastToChannel','iamgroot', {data: 'payload'}),

    socket.on('beacon', (data) => { 
      let time = new Date (data.current)
      let seconds = time.getSeconds()+1
      this.setSysClock(time)
      if(seconds % 5 === 0) {
        console.log('5')
      }

      if(seconds % 15 === 0) {
        console.log('15')
      }
      
    })
  }
  
}
</script>

<style lang="scss">
@import 'assets/scss/style';
</style>

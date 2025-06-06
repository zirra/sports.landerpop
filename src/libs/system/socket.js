import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: []
})

export const socket = io(
  process.env.VUE_APP_SOCKET_SERVER, {
    transports: ['websocket'],
    autoConnect: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 10
  }
)

socket.on('connect', () => {
  console.log('connected')
  state.connected = true
})

socket.on('disconnect', () => {
  console.log('disconnected')
  state.connected = false
})

socket.on('newUser', (data) => {
  console.log(data)
})

socket.on('data', (data) =>{
  console.log(data)
})
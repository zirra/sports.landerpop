import { mapActions, mapGetters } from 'vuex'

const app = {
  computed: {
    ...mapGetters({
      sysClock: 'sysClock',
    })
  },
  methods: {
    ...mapActions({
      setSysClock: 'setSysClock'
    })
  }
}

export default app
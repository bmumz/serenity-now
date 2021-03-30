<template>
    <div>
        <div class="scoring-container">
            <Timer/>
            <Points />
        </div>
        <Quotes/>
        <Characters v-if="!handleGameOver"/>
    </div>
</template>
<script>
import Timer from '../Timer'
import Points from '../Points'
import Quotes from '../Quotes'
import Characters from '../Characters'
import {mapGetters} from 'vuex'

export default {
    name: 'Game',
    components: {
    Timer,
    Points,
    Quotes,
    Characters,
  },
    computed: mapGetters(['handleGameOver']),
}
</script>
<style scoped>

</style>
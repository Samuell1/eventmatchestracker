<template>
  <div
    class="matches"
    :style="{ background: convertHex(color, .1) }"
  >
    <div
      v-for="(match, indexM) in matches"
      :key="indexM"
      class="match"
    >
      <div>
        <img :src="match.team1.image">
      </div>
      <div class="score">
        {{ match.score || 'vs' }}
      </div>
      <div>
        <img :src="match.team2.image">
      </div>
    </div>
  </div>
</template>

<script>
import { convertHex } from '@/plugins/mixins'

export default {
  name: 'Matches',
  mixins: [convertHex],
  props: {
    matches: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      default: '#5d5d5d'
    }
  }
}
</script>

<style lang="scss">
.matches {
  border-radius: 18px;
  box-shadow: 0px 0px 0px 2000px var(--box-shadow-color);
  padding: 16px;
  img {
    max-width: 45px;
    max-height: 45px;
    width: 45px;
    height: 45px;
  }
  .match {
    display: flex;
    justify-content: space-between;
    .score {
      display: flex;
      align-items: center;
      font-weight: 500;
    }
  }
}
</style>

<template>
  <div
    v-if="event"
    class="container"
  >
    <div class="title">
      <h4>{{ event.date }}</h4>
      <h1>{{ event.name }}</h1>
    </div>

    <div class="matches-container">
      <div
        v-for="(row, rowIndex) in event.days"
        :key="rowIndex"
        class="row"
      >
        <div
          class="item"
          :style="{ '--box-shadow-color': convertHex(row.color || '#5d5d5d') }"
        >
          <div class="title">
            <!-- <span>{{ item.score }}</span> -->
            <span>{{ row.name }}</span>
          <!-- <span>{{ item.date }}</span> -->
          </div>
          <matches
            :matches="row.matches"
            :color="row.color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { convertHex } from '@/plugins/mixins'
import { get } from 'axios'

export default {
  name: 'App',
  components: {
    Matches: () => import('@/components/Matches')
  },
  mixins: [convertHex],
  data: () => ({
    event: []
  }),
  async created () {
    const getdata = await get('/.netlify/functions/event')
    this.event = getdata.data
  }
}
</script>

<style lang="scss">
.container {
  padding: 60px;
  height: calc(100vh - 120px);
}

.title {
  text-align: center;
  h1, h4 {
    margin: 0;
  }
}

.matches-container {
  display: flex;
  justify-content: center;
  height: 100%;
  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 64px;
  }
}

.item {
  border-radius: 22px;
  padding: 0 6px 6px 6px;
  overflow: hidden;
  min-width: 220px;
  box-shadow: 0px 0px 500px 0px var(--box-shadow-color);
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
  .title {
    padding: 4px 18px;
    color: #000;
    display: flex;
    justify-content: space-between;
  }
}
</style>

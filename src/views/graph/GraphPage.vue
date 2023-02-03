<template>
  <div class="graph-main">
    <div class="graph-menu">
      <el-menu
        default-active="/graph/1"
        class="el-menu-vertical-demo"
        router="true"
        background-color="#f5deb3"
      >
        <el-menu-item index="/graph/1">
          <el-icon><Flag /></el-icon>
          <span>初中历史</span>
        </el-menu-item>
        <el-menu-item index="/graph/2">
          <el-icon><Flag /></el-icon>
          <span>时政图谱</span>
        </el-menu-item>
        <el-menu-item index="/graph/3">
          <el-icon><Flag /></el-icon>
          <span>团史图谱</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="graph-content">
      <div class="time-line">
        <el-timeline>
          <el-tooltip
            class="box-item"
            effect="dark"
            placement="right"
            v-for="item in time_data"
            :key="item.id"
            hide-after="10"
          >
            <el-timeline-item
              center
              :timestamp="item.timestamp"
              placement="top"
              size="large"
            >
              <template #default>
                <div class="card">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.brief }}</p>
                </div>
              </template>

              <template #dot>
                <div style="position: relative;">
                  <img
                    :src="item.picurl"
                    style="
                      position: absolute;
                      left: -13px;
                      width: 40px;
                      height: 40px;
                      border-radius: 50%;
"
                  />
                </div>
              </template>
            </el-timeline-item>
            <template #content>
              <div class="content">
                <h3>
                  {{ item.title }}
                </h3>
                <div style="margin-top: 2vh;">
                  {{ item.describe }}
                </div>
              </div>
            </template>
          </el-tooltip>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Flag } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

interface TimeData {
  id: string
  timestamp: string
  title: string
  describe: string
  brief: string
  picurl: string
}

let time_data: TimeData[] = reactive([
  {
    id: '1',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '2',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '3',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '4',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '5',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '6',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '7',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '8',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '9',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  },
  {
    id: '10',
    timestamp: '2018/4/12',
    title: '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    describe:
      '英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战英军于1841年初强占香港岛，消息传到北京，道光帝下诏对英作战',
    brief: '列强压迫 | 道光帝 | 1841.01',
    picurl: new URL('@/assets/test.jpg', import.meta.url).href
  }
])

const route = useRoute()
console.log(route.params.id)

const GetData = (id: number) => {
  console.log(id)
}

watch(
  () => route.params.id,
  () => {
    GetData(parseInt(<string>route.params.id))
  }
)
</script>

<style scoped lang="less">
.graph-main {
  display: flex;

  .graph-menu {
    width: 11vw;
    background-color: #f5deb3;
  }

  .graph-content {
    overflow-y: scroll;
    padding: 50px;
    width: 89vw;
    height: 100vh;
    box-sizing: border-box;

    .time-line {
      width: 65%;
    }

    .card {
      display: flex;
      justify-content: center;
      padding-left: 5vw;
      margin-left: 2vw;
      width: 85%;
      height: 12vh;
      border-radius: 10px;
      box-shadow: 1px 1px 2px 1px rgb(0 0 0 / 20%);
      flex-direction: column;
    }
  }
}

.content {
  width: 25vw;
}
</style>

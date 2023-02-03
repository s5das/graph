<template>
  <div :class="nav_class">
    <div class="mainpage-title1">百年红魂</div>
    <div class="menu"></div>
    <div class="search">
      <div class="search-input">
        <el-input v-model="content" class="w-50 m-2" placeholder="关键词搜索" />
      </div>
      <div class="search-ico">
        <el-icon @click="SearchGraph">
          <Search />
        </el-icon>
      </div>
    </div>
  </div>
  <div class="scroll-show">
    <el-carousel indicator-position="outside" height="60vh">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" style="width: 100vw; height: 55vh" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="mainpage-content">
    <div class="mainpage-title2">知识图谱助力党史学习教育</div>
    <div class="item" v-for="(item, index) in items" :key="item.title">
      <div class="mainpage-title3">{{ item.title }}</div>
      <div class="brief" @click="Goto(index)">
        <img :src="item.picurl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { Ref } from 'vue'
import { useRouter } from 'vue-router'
import { GraphType } from '../types'

const router = useRouter()

let content: Ref<string> = ref('')
const SearchGraph = () => {
  console.log(content)
}

let items: GraphType[] = [
  {
    title: '团史图谱',
    picurl: new URL('@/assets/brief.png', import.meta.url).href
  },
  {
    title: '其他图谱',
    picurl: new URL('@/assets/brief2.png', import.meta.url).href
  }
]
const Goto = (index: number) => {
  switch (index) {
    case 1:
      router.push({
        path: '/graph/1'
      })
      break
  }
}

let originalY = window.scrollY
console.log(originalY)
let nav_class = ref('mainpage-head')
const ChangeNav = () => {
  let currentY = window.scrollY

  if (currentY - originalY >= 60 || currentY - originalY <= -60) {
    if (currentY > originalY && currentY !== 0) {
      /* console.log('页面向上滑（即你的手指向上滑）'); */
      nav_class.value = 'mainpage-head hidden'
    } else {
      /* console.log('页面向下滑（即你的手指向下滑）'); */
      nav_class.value = 'mainpage-head'
    }
    originalY = currentY
  }
}
let imgs: string[] = [
  new URL('@/assets/a1.jpg', import.meta.url).href,
  new URL('@/assets/a2.jpg', import.meta.url).href
]

onMounted(() => {
  window.addEventListener('scroll', ChangeNav)
})
</script>

<style scoped lang="less">
.mainpage-head {
  display: flex;
  width: 100%;
  height: 10vh;
  transition: height 0.6s;
}

.hidden {
  height: 0 !important;
}

.mainpage-title1 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vh;
  font-weight: 600;
}

.menu {
  flex: 1;
}

.search {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .search-input {
    width: 75%;
  }

  .search-ico {
    width: 20%;
  }
}

.scroll-show {
  margin-bottom: 5vh;
  height: 55vh;

  .slider {
    display: flex;
    margin: 0;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
  }
}

.mainpage-content {
  padding: 0 15vw;
  margin-top: 10vh;

  .mainpage-title2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
    height: 10vh;
    font-size: 5vh;
    font-weight: 600;
    border-bottom: 2px solid #c7000b;
  }

  .item {
    margin-bottom: 10vh;
    height: 50vh;

    .mainpage-title3 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 20vw;
      height: 8vh;
      font-size: 5vh;
      font-weight: 600;
      border-bottom: 2px solid #08a4ed5a;
    }

    .brief {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5vh;
      height: 45vh;
      border: 1px solid yellow;
      transition: 1s;

      img {
        width: 80%;
        height: 80%;
      }
    }

    .brief:hover {
      transform: scale(1.1);
    }
  }
}
</style>

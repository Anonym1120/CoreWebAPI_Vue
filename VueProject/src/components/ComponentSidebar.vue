<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
//import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";


export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const items = [
      {
        icon: "el-icon-lx-home",
        index: "/home",
        title: "首頁",
      },
      {
        icon: "el-icon-lx-home",
        index: "1",
        title: "查詢",
        subs: [
          {
            index: "/babyCard",
            title: "享享卡報表",
          },
          {
            index: "/voucher",
            title: "電子劵",
          },
          {
            index: "/baseform",
            title: "表單",
          },

        ],
      },
    ];

    const onRoutes = computed(() => {
      return route.path;
    });

    const collapse = computed(() => store.state.collapse);

    return {
      items,
      onRoutes,
      collapse,
    };
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
  
}

.el-menu-item {
  font-size: 16px;
  transition: none !important;
  font-family: 微軟正黑體;
}

span {
  font-size: 16px;
  font-family: 微軟正黑體;
}
</style>

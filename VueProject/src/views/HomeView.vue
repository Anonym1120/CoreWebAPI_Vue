<template>
  <div class="about">
    <v-header />
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-tags></v-tags>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import HelloWorld from '@/components/HelloWorld.vue'
import vHeader from "@/components/ComponentHeader.vue";
import vSidebar from "@/components/ComponentSidebar.vue";
import vTags from '@/components/ComponentTags.vue';

// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    vHeader,
    vSidebar,
    vTags,
    HelloWorld,
  },

  setup() {
    const store = useStore();

    const tagsList = computed(() =>
      store.state.tagsList.map((item) => item.name)
    );

    const collapse = computed(() => store.state.collapse);

    return {
      tagsList,
      collapse,
    };
  },
};
</script>

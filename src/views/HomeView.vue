<template>
  <div class="home">
    <h3>我是home</h3>
  </div>
</template>
<script>
// @ is an alias to /src
import { useRoute, useRouter } from "vue-router";

export default {
  name: "HomeView",
  components: {
   
  },
  setup() {
    let route = useRoute(); // 存放参数
    let router = useRouter(); // 路由实例
    console.log(route.params.id);
    console.log(router);
  },
};
</script>
<style lang="scss" scoped>

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
</style>

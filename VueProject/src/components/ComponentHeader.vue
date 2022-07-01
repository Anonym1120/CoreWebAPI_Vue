<template>
    <div class="header">
        <!-- 摺疊按鈕 -->
        <div class="collapse-btn" @click="collapseChage">
            <el-icon v-if="!collapse"><Fold /></el-icon>
            <el-icon v-else><Expand /></el-icon>
        </div>
        <div class="logo">System</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 使用者圖片 -->
                <div class="user-avator">
                    <img src="../assets/img/Anonymous.png" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
    setup() {

        const store = useStore();

        // 左邊摺疊欄
        const collapseChage = () => {
            store.commit("handleCollapse", !collapse.value);
        };

        const collapse = computed(() => store.state.collapse);

        onMounted(() => {
            if (document.body.clientWidth < 1500) {
                collapseChage();
            }
        });

        return {
            collapse,
            collapseChage,
        };
    },
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,

/* .btn-bell, */
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>

<template>
    <div>
        电影详情页面
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit("isShowFooterNav", false);
    },
    beforeDestroy() {
        this.$store.commit("isShowFooterNav", true);
    },
};
</script>

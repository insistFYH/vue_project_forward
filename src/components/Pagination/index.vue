<template>
    <div class="pagination">
        <button @click="$emit('pageNoHandle',pageNo-1)" :disabled="pageNo==1">上一页</button>
        <button v-if="startAndEnd.start>1" @click="$emit('pageNoHandle',1)" :class="{active:pageNo==1}">1</button>
        <button v-if="startAndEnd.start>2">···</button>

        <button v-for="(page,index) in startAndEnd.end" :key="index" v-if="page>=startAndEnd.start" @click="$emit('pageNoHandle',page)" :class="{active:pageNo==page}">{{page}}</button>

        <button v-if="startAndEnd.end<totalPages-1">···</button>
        <button v-if="startAndEnd.end<totalPages" @click="$emit('pageNoHandle',totalPages)" :class="{active:pageNo==totalPages}">{{totalPages}}</button>
        <button :disabled="pageNo==totalPages" @click="$emit('pageNoHandle',pageNo+1)">下一页</button>

        <button style="margin-left: 30px">共{{totalPages}}页</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["pageNo", "pageSize", "total", "continues"],
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.pageSize);
        },
        startAndEnd() {
            let start = 0,
                end = 0;
            const { pageNo, continues, totalPages } = this;
            console.log(this.total);
            if (continues > totalPages) {
                start = 1;
                end = totalPages;
            } else {
                start = pageNo - parseInt(continues / 2);
                end = pageNo + parseInt(continues / 2);
                if (start < 1) {
                    start = 1;
                    end = continues;
                }
                if (end > totalPages) {
                    end = totalPages;
                    start = totalPages - continues + 1;
                }
            }
            return { start, end };
        },
    },
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>

<template>
    <div>
        <pre>
                {{ list }}
            </pre
        >
    </div>
</template>

<script>
export default {
    async fetch() {
        this.list = this.$content("blog");
        console.log(this.list);
    },
};
</script>

<template>

</template>

<script>
    import Util from '../../libs/util';

    export default {
        name: 'setting',
        mounted: function () {
            this.getWhiteList();
        },
        methods: {
            /**
             * 获取路径白名单
             */
            getWhiteList: function () {
                Util.ajax.get('/setting/getWhiteList').then((data) => {
                    console.log(data);
                }).catch((e) => {
                    console.error(e);
                });
            }
        }
    };
</script>

<style scoped>

</style>
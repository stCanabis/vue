<template>
    <WorkSpace>
        <template #header>
            <VHead level="h1">Настройки серверов страница 2</VHead>
        </template>
        <template #content>
            <VPanel width="col3" v-if="showPanelDefault" @close="showPanelDefault = false">
                <template #header>
                    Создать настройку
                </template>
                <template #content>
                   <MyForm></MyForm>
                </template>
                <template #footer>
                    <VSet>
                        <VButton text="Сохранить" accent />
                        <VButton text="Отменить" />
                    </VSet>
                </template>
            </VPanel>
        </template>
        <template #footer>
            <VSet>
                <VButton text="Добавить" @click="showPanelDefault = true" accent />
                <VButton text="домашняя страница" @click="goHome" />
            </VSet>
        </template>
    </WorkSpace>
</template>

<script>
    import WorkSpace from "swui/src/components/WorkSpace"
    import VHead from "swui/src/components/VHead"
    import VPanel from "swui/src/components/VPanel"
    import VSet from "swui/src/components/VSet"
    import VButton from "swui/src/components/VButton"
    import MyForm from "../components/MyForm"

    export default {
        name: 'Servers',
        components: {
            MyForm,
            WorkSpace,
            VSet,
            VHead,
            VPanel,
            VButton,
        },
        data() {
            return {
                showPanelDefault: false
            }
        },
        methods:{
            goHome(){
                this.$router.push({path:'/'})
            }
        }
    }

</script>
<style scoped>

</style>









<template>
    <WorkSpace>
        <template #header>
            <VHead level="h1">Настройки серверов</VHead>
        </template>
        <template #content>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Description</th>
                    <th>GroupId</th>
                </tr>
                <tr v-for="item in showData" :key="item.Id">
                    <td>{{item.Id}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Value}}</td>
                    <td>{{item.Description}}</td>
                    <td>{{item.GroupId}}</td>

                </tr>
            </table>
            <VPanel width="col3" v-if="showPanelDefault" @close="showPanelDefault = false">
                <template #header>
                    Создать настройку
                </template>
                <template #content>
                    <form action="">
                        <VSet direction="vertical" indentSize="L">
                            <VSet vertical-align="center" indentSize="L">
                                <VLabel for="input1" width="col4">Name</VLabel>
                                <VSet direction="vertical" indentSize="S">
                                    <VInput width="dyn" id="input1" placeholder="Товар"></VInput>
                                    <VSign width="dyn">только латинские буквы</VSign>
                                </VSet>
                            </VSet>
                            <VSet vertical-align="center" indentSize="L">
                                <VLabel for="input1" width="col4">Value</VLabel>
                                <VSet direction="vertical" indentSize="S">
                                    <VInput width="dyn" id="input2" placeholder="Товар"></VInput>
                                    <VSign width="dyn">только латинские буквы</VSign>
                                </VSet>
                            </VSet>
                            <VSet vertical-align="center" indentSize="L">
                                <VLabel for="input1" width="col4">Description</VLabel>
                                <VSet direction="vertical" indentSize="S">
                                    <VInput width="dyn" id="input3" placeholder="Товар"></VInput>
                                    <VSign width="dyn">только латинские буквы</VSign>
                                </VSet>
                            </VSet>
                        </VSet>
                    </form>
                </template>
                <template #footer>
                    <VSet>
                        <VButton text="Сохранить" @click="addNewServer" accent/>
                        <VButton text="Отменить"/>
                    </VSet>
                </template>
            </VPanel>
        </template>
        <template #footer>
            <VSet>
                <VButton text="Добавить" @click="showPanelDefault = true" accent/>
                <VButton text="новая страница" @click="nextPage"/>
            </VSet>
        </template>
    </WorkSpace>
</template>

<script>
    import WorkSpace from "swui/src/components/WorkSpace"
    import VHead from "swui/src/components/VHead"
    import VPanel from "swui/src/components/VPanel"
    import VSet from "swui/src/components/VSet"
    import VLabel from "swui/src/components/VLabel"
    import VButton from "swui/src/components/VButton"
    import VInput from "swui/src/components/VInput"
    import VSign from "swui/src/components/VSign"

    export default {
        name: 'Servers',
        components: {
            WorkSpace,
            VSet,
            VHead,
            VPanel,
            VLabel,
            VButton,
            VInput,
            VSign,
        },
        data() {
            return {
                showPanelDefault: false,
            }
        },
        methods: {
            nextPage() {
                this.$router.push({path: '/page2'})
            },
            addNewServer() {
                this.$store.commit('addNewServer');
            }
        },
        computed: {
            showData() {
                return this.$store.getters.getAllServers
            },
        },
        // mounted(){
        // this.$nextTick(function () {
        // this.showData();
        // })
        // }
    }

</script>
<style scoped>
    form {
        width: 100%;
    }

</style>









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
                <tr v-for="item in getAllServers" :key="item.Id" @click="fetchServerData(item.Id)">
                    <td>{{item.Id}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Value}}</td>
                    <td>{{item.Description}}</td>
                    <td>{{item.GroupId}}</td>

                </tr>
            </table>
            <VPanel width="col3" v-if="showPanelDefault" @close="showPanelDefault = false">
                <template #header>
                    {{action}}
                </template>
                <template #content>
                    <form action="">
                        <VSet direction="vertical" indentSize="L">
                            <VSet vertical-align="center" indentSize="L">
                                <VLabel for="input1" width="col4">Name</VLabel>
                                <VSet direction="vertical" indentSize="S">
                                    <VInput width="dyn" id="input1" placeholder="Товар"
                                            v-model="newServerData.Name"></VInput>
                                    <VSign>только латинские буквы</VSign>
                                </VSet>
                            </VSet>
                            <VSet vertical-align="center" indentSize="L">
                                <VLabel for="input1" width="col4">Value</VLabel>
                                <VSet direction="vertical" indentSize="S">
                                    <VInput width="dyn" id="input2" placeholder="Товар"
                                            v-model="newServerData.Value"></VInput>
                                    <VSign>только латинские буквы</VSign>
                                </VSet>
                            </VSet>
                            <VSet vertical-align="center" indentSize="L">
                                <VLabel for="input1" width="col4">Description</VLabel>
                                <VSet direction="vertical" indentSize="S">
                                    <VInput width="dyn" id="input3" placeholder="Товар"
                                            v-model="newServerData.Description"></VInput>
                                    <VSign>только латинские буквы</VSign>
                                </VSet>
                            </VSet>
                        </VSet>
                    </form>
                </template>
                <template #footer>
                    <VSet>
                        <VButton text="Сохранить" v-if="operationType === 'save'" @click="addNewServer" accent/>
                        <VButton text="Изменить" v-if="operationType === 'change'" @click="changeServerData" accent/>
                        <VButton text="Удалить" v-if="operationType === 'change'" @click="removeServerData" accent/>
                        <VButton text="Отменить"/>
                    </VSet>
                </template>
            </VPanel>
        </template>
        <template #footer>
            <VSet>
                <VButton text="Добавить" @click="showPanel" accent/>
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
    import serversList from '../../model/data'
    import {mapActions,mapGetters,mapMutations} from 'vuex'

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
                action: 'Создать настройку',
                showPanelDefault: false,
                operationType: '',
                newServerData: {
                    Name: '',
                    Value: '',
                    Description: ''
                }
            }
        },

        computed: {
            ...mapGetters([
                'getAllServers',
            ]),
        },

        mounted() {
            this.addAllServers(serversList.List);
        },

        methods: {
            ...mapActions([
                'addNewServerAction',
                'removeServerDataAction',
            ]),

            ...mapMutations([
                'addAllServers',
                'changeServerDataAction',
            ]),
            nextPage() {
                this.$router.push({path: '/page2'});
            },
            addNewServer() {
                this.addNewServerAction(this.newServerData);
                this.clearData();
            },
            fetchServerData(id) {
                this.action = 'Изменить настройки сервера';
                this.showPanelDefault = true;
                this.operationType = 'change';
                Object.assign(this.newServerData, this.$store.getters.getServerData(id));
            },
            changeServerData() {
                this.changeServerDataAction(this.newServerData);
            },
            removeServerData() {
                this.removeServerDataAction(this.newServerData);
                this.clearData();
            },
            showPanel() {
                this.showPanelDefault = true;
                this.action = 'Добавить сервер';
                this.operationType = 'save';
                this.clearData();
            },
            clearData() {
                this.newServerData = {
                    Name: '',
                    Value: '',
                    Description: ''
                }
            }
        },
    }

</script>
<style scoped>
    form {
        width: 100%;
    }

    tr:hover {
        cursor: pointer;
    }

</style>









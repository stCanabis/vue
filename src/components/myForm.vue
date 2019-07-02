<template>
<WorkSpace>
    <template #header>
        <VHead level="h1">Списание</VHead>
    </template>
    <template #content>

        <VSet vertical>

            <VSet vertical indent-size="S">
                <VLabel>Ответственный</VLabel>
                <VSet vertical indent-size="S">
                    <VInput placeholder="Иванов Иван Иванович" width="col4"/>
                    <VSign>Фамилия Имя Отчество</VSign>
                </VSet>
            </VSet>
            <VSet vertical indent-size="S">
                <VLabel>Центр финансовой ответственности</VLabel>
                <VSet vertical indent-size="S">
                    <VInput value="Департамент информационных технологий" width="col6"/>
                    <VSign>Не уверены куда списывать? Укажите свой департамент.</VSign>
                </VSet>
            </VSet>
            <VSet vertical indent-size="S">
                <VLabel>Сумма списания</VLabel>
                <VSet vertical indent-size="S">
                    <VInput placeholder="0" width="col2"/>
                    <VSign>Для России в рублях</VSign>
                </VSet>
            </VSet>
        </VSet>
    </template>

</WorkSpace>
</template>
<script>
    import VSet from "swui/src/components/VSet"
    import VInput from "swui/src/components/VInput"
    import VLabel from "swui/src/components/VLabel"
    import VButton from "swui/src/components/VButton"
    import VHead from "swui/src/components/VHead"
    import WorkSpace from "swui/src/components/WorkSpace"
    import VSign from "swui/src/components/VSign"

    export default {
        name: 'myForm',
        components: {
            VSet,
            VInput,
            VLabel,
            VButton,
            VHead,
            WorkSpace,
            VSign,
        },
    }
</script>
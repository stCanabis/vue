<template>
    <VSet direction="vertical" indentSize="L">
        <VSet vertical-align="center" indentSize="L" >
            <VLabel for="input1" width="col4">Название</VLabel>
            <VSet direction="vertical" indentSize="S">
                <VInput width="dyn" id="input1" placeholder="Товар"></VInput>
                <VSign width="dyn">только латинские буквы</VSign>
            </VSet>
        </VSet>
        <VSet vertical-align="center" indentSize="L">
            <VLabel for="input2" width="col4">Описание</VLabel>
            <VInput width="dyn" id="input2" placeholder="Товар"></VInput>
        </VSet>
        <VSet vertical-align="center" indentSize="L">
            <VLabel for="input3" width="col4" >Значение</VLabel>
            <VInput width="dyn" id="input3" placeholder="Товар"></VInput>
        </VSet>
    </VSet>

</template>
<script>

    import WorkSpace from "swui/src/components/WorkSpace"
    import VHead from "swui/src/components/VHead"
    import VPanel from "swui/src/components/VPanel"
    import VSet from "swui/src/components/VSet"
    import VButton from "swui/src/components/VButton"
    import VInput from "swui/src/components/VInput"
    import VLabel from "swui/src/components/VLabel"
    import VIcon from "swui/src/components/VIcon"
    import VSign from "swui/src/components/VSign"

    export default {
        name: 'MyForm',
        components: {
            VSet,
            WorkSpace,
            VHead,
            VPanel,
            VSign,
            VButton,
            VInput,
            VLabel,
            VIcon,
        },
    }
</script>
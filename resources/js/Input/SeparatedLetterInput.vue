<template>
    <div>
        <div class="flex flex-row justify-between">
            <input
                v-for="i in characters"
                :key="i"
                :id="id + '-' + i"
                :disabled="disabled"
                :value="value"
                v-bind="$attrs"
                maxlength="1"
                :class="{
                    'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red':
                        hasError,
                    'border border-gray-300': !hasError,
                    'opacity-50': disabled,
                }"
                class="z-20 block w-10 px-1 py-3 text-lg text-center border rounded-md outline-none  sm:text-2xl sm:leading-5 focus:ring-indigo-500 focus:border-indigo-500"
                @input="typedCharacter(i)"
                @keydown.enter.prevent=""
                @keydown.delete.prevent="deleteCharacter(i)"
                @click.prevent="selectedCharacterBox(i)"
                @paste="paste"
                :ref="'input-' + i"
            />
            <!-- w-10 px-1 py-3 text-lg text-center sm:text-2xl sm:leading-5 -->
        </div>
        <p v-if="hint || errors.length" class="mt-1 text-sm text-gray-500">
            <span v-if="errors.length" class="text-red-600">
                {{ errors[0] }}
            </span>
            <span v-else-if="hint">
                {{ hint }}
            </span>
        </p>
    </div>
</template>

<script>
export default {
    name: "SeparatedLetterInput",
    inheritAttrs: false,
    components: {},
    props: {
        id: {
            type: String,
            // default() {
            //     return `separated-text-input-${this._uid}`;
            // },
        },
        characters: {
            type: Number,
            default: () => 1,
        },
        value: [String, Number],
        errors: {
            type: Array,
            default: () => [],
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        hint: {
            type: String,
            default: null,
        },
    },
    data() {
        return {};
    },
    methods: {
        elementForIndex(index) {
            const ref = "input-" + index;
            var element = this.$refs[ref];
            if (element === undefined) {
                return null;
            } else {
                return element[0];
            }
        },
        typedCharacter(index) {
            let currentInput = this.elementForIndex(index);
            let nextInput = this.elementForIndex(index + 1);

            if (index !== this.characters) {
                if (currentInput.value !== "") {
                    nextInput.focus();
                    nextInput.select();
                }
            }

            if (index === this.characters) {
                this.$emit("completed", this.generateOutput());
                console.log("reached end");
            }
        },
        deleteCharacter(index) {
            let currentInput = this.elementForIndex(index);
            currentInput.value = "";
            if (index !== 1) {
                let previousInput = this.elementForIndex(index - 1);
                previousInput.select();
                previousInput.focus();
            }
        },
        selectedCharacterBox(index) {
            this.elementForIndex(index).select();
        },
        generateOutput() {
            var output = "";

            for (let i = 1; i < this.characters + 1; i++) {
                var element = this.elementForIndex(i);
                output += element.value;
            }

            return output;
        },
        paste(event) {
            var data = event.clipboardData.getData("text");

            for (let i = 1; i < this.characters + 1; i++) {
                var element = this.elementForIndex(i);
                element.value = data.charAt(i - 1) ?? " ";
            }

            this.elementForIndex(6).focus();
            this.$emit("completed", this.generateOutput());
        },
        focusFirst() {
            this.elementForIndex(1).focus();
        },
    },
    computed: {
        hasError() {
            return this.errors.length !== 0;
        },
    },
};
</script>

<style scoped></style>

<template>
    <div class="flex flex-row mt-4 space-x-4">
        <div>
            <date-input class="max-w-md" v-model="date" />
        </div>
        <div class="w-40">
            <time-input class="w-full" v-model="time" />
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import TimeInput from "../Controls/TimeInput.vue";
import DateInput from "../Controls/DateInput.vue";
import { format } from "date-fns";

export default defineComponent({
    name: "DateTimeInput",
    inheritAttrs: false,
    components: {
        TimeInput,
        DateInput,
    },
    props: ["modelValue"],
    emits: ["update:modelValue"],
    data() {
        return {
            date:
                this.modelValue !== null
                    ? format(this.modelValue, "yyyy-MM-dd")
                    : null,
            time:
                this.modelValue !== null
                    ? format(this.modelValue, "HH:mm")
                    : null,
        };
    },
    watch: {
        date: function (val) {
            console.log("Date", val);
            this.emitDateTime(val, this.time);
        },
        time: function (val) {
            console.log("Time", val);
            this.emitDateTime(this.date, val);
        },
    },
    methods: {
        emitDateTime(date, time) {
            if (date === null || date === "") {
                this.$emit("update:modelValue", null);
            } else if (time === null || time === "") {
                this.$emit("update:modelValue", `${date} 00:00:00`);
                console.log(`${date} 00:00:00`);
            } else {
                this.$emit("update:modelValue", `${date} ${time}:00`);
                console.log(`${date} ${time}:00`);
            }
        },
    },
});
</script>

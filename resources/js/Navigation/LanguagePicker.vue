<template>
    <div class="flex items-center ml-3" @keydown="">
        <div class="relative ml-3">
            <jet-dropdown align="right" width="48" ref="languagepicker">
                <template #trigger>
                    <button
                        class="flex w-8 h-8 text-sm transition duration-150 ease-in-out bg-gray-300 rounded-full focus:outline-none focus:border-gray-300"
                    >
                        <span
                            class="inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full "
                        >
                            {{ currentLang }}
                        </span>
                    </button>
                </template>

                <template #content>
                    <div class="block px-4 py-2 text-xs text-gray-400">
                        Sprache auswählen
                    </div>
                    <button
                        type="button"
                        v-for="(language, index) in languages"
                        :key="index"
                        @click="switchLanguage(language.value)"
                        class="flex items-center justify-between w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        :class="[
                            language.value === currentLanguageCode
                                ? 'bg-gray-100 hover:bg-gray-200'
                                : 'hover:bg-gray-100',
                        ]"
                    >
                        <div class="space-x-1">
                            <span>
                                {{ language.flag }}
                            </span>
                            <span>
                                {{ language.name }}
                            </span>
                        </div>
                        <div>
                            <heroicon
                                name="check-solid"
                                class="w-4 h-4 text-blue-500"
                                v-if="language.value === currentLanguageCode"
                            />
                        </div>
                    </button>
                </template>
            </jet-dropdown>
        </div>
    </div>
</template>
<script>
import JetDropdown from "@/Jetstream/Dropdown";
import JetDropdownLink from "@/Jetstream/DropdownLink";
import Heroicon from "@/Accessories/Heroicon";

export default {
    name: "LanguagePicker",
    components: { Heroicon, JetDropdown, JetDropdownLink },
    data() {
        return {
            languages: [
                {
                    flag: "🇩🇪",
                    name: "Deutsch",
                    value: "de",
                },
                {
                    flag: "🇬🇧",
                    name: "Englisch",
                    value: "en",
                },
            ],
        };
    },
    methods: {
        findLanguage(languageCode) {
            return this.languages.filter(
                (language) => language.value === languageCode
            )[0];
        },
        switchLanguage(locale) {
            this.$inertia.get(this.route("locale", locale), {
                preserveState: false,
                preserveScroll: true,
                replace: true,
            });
        },
    },
    computed: {
        currentLanguageCode() {
            return this.$page.props.locale;
        },
        currentLang() {
            // return "de";
            return this.findLanguage(this.$page.props.locale).flag;
        },
    },
};
</script>

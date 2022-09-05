import { onMounted, onBeforeUnmount } from 'vue'

export function configureCtrlShortcut(key, action) {

    let _keyListener = null;

    onMounted(() => {
        _keyListener = function(e) {
            if (e.key === key && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                action();
            }
        };

        document.addEventListener('keydown', _keyListener.bind(this));
    })

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', _keyListener);
    })

    return {}

}

export function useSwitchLanguageShortcut(switchAction) {
    configureCtrlShortcut('e', switchAction);
}

export function useSaveShortcut(saveAction) {
    configureCtrlShortcut('s', saveAction);
}

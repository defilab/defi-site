export const languageLabels = {
    'en-PH': 'Philippines',
    'id-ID': 'Indonesian',
    'vi-VN': 'Vietnamese'
};
export const setLocale = function setLocale(countryCode) {
    const storage = window.localStorage;
    storage.setItem("country", languageLabels[countryCode]);
}
export function getLocale() {
    const storage = window.localStorage;
    if (storage['country']) {
        return storage['country']

    } else {
        return ''
    }

}


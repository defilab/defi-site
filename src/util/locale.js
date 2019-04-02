const languageLabels = {
    'en-PH': 'Philippines',
    'id-ID': 'Indonesian',
    'vi-VN': 'Vietnamese'
};
export const setLocale = function setLocale(countryCode) {
    const storage = window.localStorage;
    storage.setItem("country", languageLabels[countryCode]);

}
export function geLocale() {
    const storage = window.localStorage;
    return storage['country']
}


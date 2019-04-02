const languageLabels = {
    'en-PH': 'Philippines',
    'id-ID': 'Indonesian',
    'vi-VN': 'Vietnamese'
};
export const setLocal = function setLocle(countryCode) {
    const storage = window.localStorage;
    storage.setItem("country", languageLabels[countryCode]);

}
export function geLocal() {
    const storage = window.localStorage;
    return storage['country']
}


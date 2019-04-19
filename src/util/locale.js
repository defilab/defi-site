export const setLocale = function setLocale(countryCode) {
    const storage = window.localStorage;
    storage.setItem("countryCode", countryCode);
}
export function getLocale() {
    const storage = window.localStorage;
    if (!storage['countryCode']) {
        return ''
    }
    return storage['countryCode']
}
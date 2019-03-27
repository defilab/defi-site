const languageLabels = {
    'en-PH': 'Philippines',
    'id-ID': 'Indonesian',
    'vi-VN': 'Vietnamese'
  };
export var setLocle=function setLocle(countryCode){
    var storage=window.localStorage;
    //写入a字段
    // storage.country=languageLabels[countryCode];
    storage.setItem("country",languageLabels[countryCode]);
    
}
export function getLocle(){
    var storage=window.localStorage;

    return storage['country']
}


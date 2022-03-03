$(document).ready(function () {
    let dropdownMenuLink = document.getElementById("dropdownMenuLink")
    let language = localStorage.getItem('language')
    setLanguage(language)
    sst(language ? language : 'en');
    let uz = document.getElementById("uz")
    uz.onclick = function (){
        localStorage.setItem('language','uz')
        sst('uz')
        dropdownMenuLink.innerHTML = "<img   src=\"https://flagicons.lipis.dev/flags/4x3/uz.svg\" />";
    }
    let ru = document.getElementById("ru")
    ru.onclick = function (){
        localStorage.setItem('language','ru')
        sst('ru')
        dropdownMenuLink.innerHTML = "<img   src=\"https://flagicons.lipis.dev/flags/4x3/ru.svg\" />"
    }
    let en = document.getElementById("en")
    en.onclick = function (){
        localStorage.setItem('language','en')
        sst('en')
        dropdownMenuLink.innerHTML = "<img   src=\"https://flagicons.lipis.dev/flags/4x3/us.svg\" />"
    }



    function sst(language) {
        let allElements = document.getElementsByTagName('span')
        for (let i = 0; i < allElements.length; i++) {
            let curr_element = allElements[i]
            if (curr_element.hasAttribute('sst')) {
                translateText(curr_element, curr_element.getAttribute('sst'), language);
            }
        }
    }

    function translateText(element, key, language) {
        $.getJSON('sst/' + language + '/index.json', function (data) {
            element.innerText = data[key]
        });

    }

    function setLanguage(language){
        switch (language){
            case 'uz' : dropdownMenuLink.innerHTML = "<img   src=\"https://flagicons.lipis.dev/flags/4x3/uz.svg\" />";
                console.log('uz')
                console.log('language =>', language)
                break
            case 'ru' : dropdownMenuLink.innerHTML = "<img   src=\"https://flagicons.lipis.dev/flags/4x3/ru.svg\" />";
                console.log('ru')
                console.log('language =>', language)
                break
            case 'en' : dropdownMenuLink.innerHTML = "<img   src=\"https://flagicons.lipis.dev/flags/4x3/us.svg\" />";
                console.log('en')
                console.log('language =>', language)
                break
        }
    }
});
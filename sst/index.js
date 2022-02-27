$(document).ready(function () {
    let language = localStorage.getItem('language')
    sst(language ? language : 'en');

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
});
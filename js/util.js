function sendMessage(name,email,text) {

    let url = "https://api.telegram.org/" +
        "bot5289934625:AAFS-aCwlhpxChv7wy2gZIAp4MgQ5abspdo" +
        "/sendMessage?chat_id=@sysdevsinfo&text=";

    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let language = Intl.DateTimeFormat().resolvedOptions().locale;

    let message = '' +
        '👔️ ' + name + '%0A' +
        '📧 ' + email + '%0A' +
        '🗺 ' + timezone + '%0A' +
        '🎓 ' + language + '%0A' +
        '✍️ ' + text
    url += message;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        }
    };
    xhr.send();
}
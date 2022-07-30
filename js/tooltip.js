tippy(".badge", {
    content: "Dom Bravery HypeSquadu",
    animation: "fade",
    theme: "translucent",
});
tippy(".nitro", {
    content: "Subskrybent od 26 cze 2022",
    animation: "fade",
    theme: "translucent",
});
tippy(".nitroboost", {
    content: "Ulepszanie serwerów od 27 cze 2022",
    animation: "fade",
    theme: "translucent",
});

tippy("#twitch", {
    content: "Twitch",
    animation: "fade",
    theme: "translucent",
});
tippy("#steam", {
    content: "Steam",
    animation: "fade",
    theme: "translucent",
});
tippy("#youtube", {
    content: "Youtube",
    animation: "fade",
    theme: "translucent",
});
tippy("#twitter", {
    content: "Twitter",
    animation: "fade",
    theme: "translucent",
});
tippy("#github", {
    content: "Spotify",
    animation: "fade",
    theme: "translucent",
});
tippy("#spotify", {
    content: "Github",
    animation: "fade",
    theme: "translucent",
});

function tooltip() {
    // Get the checkbox
    var checkBox = document.getElementById("switch1");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == false) {
        tippy(".switch", {
            content: "Dark mode",
            theme: "translucent",
        });
        document.getElementById("body").setAttribute("data-theme", "light");
    } else {
        tippy(".switch", {
            content: "Light mode",
            theme: "translucent",
        });
        document.getElementById("body").setAttribute("data-theme", "dark");
    }
}
tooltip();

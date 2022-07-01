let searchInterval;
let parent;
let parentObserver;
let streamObserver;

function run() {
    // bind container div after it has been loaded
    searchInterval = setInterval(() => {
        parent = document.querySelector(".community-points-summary > div:last-child");
        if (parent) {
            // check if points are already available and collect them
            collectPoints();

            // wait for new channel points
            parentObserver = new MutationObserver(handleParentMutation);
            parentObserver.observe(parent, {
                subtree: true,
                childList: true
            });

            clearInterval(searchInterval);
        }
    }, 100);

    // listen for stream switches (title changes indicate stream switches)
    let title = document.title.toLowerCase();
    streamObserver = new MutationObserver(() => {
        let newTitle = document.title.toLowerCase();
        if (title !== newTitle) {
            title = newTitle;
            // restart program to fetch updated dom
            quit();
            run();
        }
    });
    streamObserver.observe(document.querySelector("title"), {
        childList: true
    });
}

function handleParentMutation(mutationList) {
    mutationList.forEach(mutation => {
        mutation.addedNodes.forEach(_node => {
            if (parent) {
                collectPoints();
            }
        });
    });
}

function collectPoints() {
    if (!parent) return;

    let btn = parent.querySelector("button");
    if (btn) {
        btn.click();
        console.log("Twitch Channel Points Collector: Points collected.");
    }
}

function quit() {
    if (parentObserver) parentObserver.disconnect();
    if (streamObserver) streamObserver.disconnect();
    clearInterval(searchInterval);
}

window.addEventListener("load", () => {
    run();
    console.log("Twitch Channel Points Collector: Extension running...");
});

window.addEventListener("beforeunload", () => {
    quit();
    console.log("Twitch Channel Points Collector: Extension stopped.");
});
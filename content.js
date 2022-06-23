let video;
let parent;
let interval;
let observer;

function run() {
    // bind container after page is fully loaded
    interval = setInterval(() => {
        parent = document.querySelector(".community-points-summary > div:last-child");
        if (parent) {
            // check if points are already available and collect them
            collectPoints();

            // wait for new channel points
            observer = new MutationObserver(handleMutation);
            observer.observe(parent, {
                subtree: true,
                childList: true
            });

            clearInterval(interval);
        }
    }, 100);
}

function handleMutation(mutationList) {
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
    if (observer) {
        observer.disconnect();
    }
    clearInterval(interval);
}

window.addEventListener("load", () => {
    // listen for stream switches to restart program
    let video = document.querySelector("video");
    video.addEventListener("loadedmetadata", () => {
        quit();
        run();
        console.log("Twitch Channel Points Collector: Stream changed");

    });

    // start collecting points!
    run();
    console.log("Twitch Channel Points Collector: Extension running...");
});

window.addEventListener("beforeunload", () => {
    quit();
    console.log("Twitch Channel Points Collector: Extension stopped.");
});
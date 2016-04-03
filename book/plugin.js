require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.cnzz = config.cnzz || {};
    });
});

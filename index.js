module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": function() {
                var visible = this.options.pluginsConfig.cnzz.visible;
                var style = this.options.pluginsConfig.cnzz.style;
                var siteid = this.options.pluginsConfig.cnzz.siteid;

                console.log("visible:" + visible + ", style:" + style + ", siteid:" + siteid);

                var stat = "<script src='https://s95.cnzz.com/z_stat.php?id="
                    + siteid + "&web_id=" + siteid + "' language='JavaScript'></script>";

                if (visible) {
                    return stat;
                } else {
                    return "<div style='display:none'>" + stat + "</div>";
                }
            }
        }
    }
};

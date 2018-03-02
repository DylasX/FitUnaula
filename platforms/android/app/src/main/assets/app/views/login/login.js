var frameModule = require("ui/frame");
exports.loaded = function(args) {
    page = args.object;
};
exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/menu/menu");
};
requirejs.config({
    baseUrl: "js",
    paths: {
        'jquery': 'libs/jquery.min',
        "underscore": "libs/underscore.min",
        'math': "math"
    }
});

require(['jquery', 'underscore', 'math', 'log'], function ($, _, math, log) {
    console.log(_);
    console.log($);
    console.log(math.add("1", 2));
    console.log(math.add(1, 2));
    log.warn("warn");
});

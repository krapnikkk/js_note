seajs.use(['./js/log', './js/math'], function (log, math) {
    log.warn("warn");
    console.log(math.add(0, 2));
})
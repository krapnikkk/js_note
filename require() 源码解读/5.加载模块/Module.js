Module.prototype.load = function (filename) {
    var extension = path.extname(filename) || '.js';
    if (!Module._extensions[extension]) extension = '.js';
    Module._extensions[extension](this, filename);
    this.loaded = true;
};

Module._extensions['.js'] = function (module, filename) {
    var content = fs.readFileSync(filename, 'utf8');
    module._compile(stripBOM(content), filename);
};

Module._extensions['.json'] = function (module, filename) {
    var content = fs.readFileSync(filename, 'utf8');
    try {
        module.exports = JSON.parse(stripBOM(content));
    } catch (err) {
        err.message = filename + ': ' + err.message;
        throw err;
    }
};


Module.prototype._compile = function (content, filename) {
    var self = this;
    var args = [self.exports, require, self, filename, dirname];
    return compiledWrapper.apply(self.exports, args);
};
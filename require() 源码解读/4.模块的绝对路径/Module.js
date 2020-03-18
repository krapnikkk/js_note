Module._resolveFilename = function (request, parent) {

    // 第一步：如果是内置模块，不含路径返回
    if (NativeModule.exists(request)) {
        return request;
    }

    // 第二步：确定所有可能的路径
    var resolvedModule = Module._resolveLookupPaths(request, parent);
    var id = resolvedModule[0];
    var paths = resolvedModule[1];

    // 第三步：确定哪一个路径为真
    var filename = Module._findPath(request, paths);
    if (!filename) {
        var err = new Error("Cannot find module '" + request + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
    }
    return filename;
};

Module._findPath = function (request, paths) {

    // 列出所有可能的后缀名：.js，.json, .node
    var exts = Object.keys(Module._extensions);

    // 如果是绝对路径，就不再搜索
    if (request.charAt(0) === '/') {
        paths = [''];
    }

    // 是否有后缀的目录斜杠
    var trailingSlash = (request.slice(-1) === '/');

    // 第一步：如果当前路径已在缓存中，就直接返回缓存
    var cacheKey = JSON.stringify({ request: request, paths: paths });
    if (Module._pathCache[cacheKey]) {
        return Module._pathCache[cacheKey];
    }

    // 第二步：依次遍历所有路径
    for (var i = 0, PL = paths.length; i < PL; i++) {
        var basePath = path.resolve(paths[i], request);
        var filename;

        if (!trailingSlash) {
            // 第三步：是否存在该模块文件
            filename = tryFile(basePath);

            if (!filename && !trailingSlash) {
                // 第四步：该模块文件加上后缀名，是否存在
                filename = tryExtensions(basePath, exts);
            }
        }

        // 第五步：目录中是否存在 package.json 
        if (!filename) {
            filename = tryPackage(basePath, exts);
        }

        if (!filename) {
            // 第六步：是否存在目录名 + index + 后缀名 
            filename = tryExtensions(path.resolve(basePath, 'index'), exts);
        }

        // 第七步：将找到的文件路径存入返回缓存，然后返回
        if (filename) {
            Module._pathCache[cacheKey] = filename;
            return filename;
        }
    }

    // 第八步：没有找到文件，返回false 
    return false;
};

require.resolve = function (request) {
    return Module._resolveFilename(request, self);
};

// 用法
require.resolve('a.js')
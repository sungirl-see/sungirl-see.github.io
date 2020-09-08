const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports={

    //起别名
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('@/assets'))
            .set('components', resolve('@/components'))
            .set('views', resolve('@/views'))
            .set('network', resolve('@/network'))
    },
};
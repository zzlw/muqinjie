// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": {
      rootValue: 64,
      propList: ["*"],
      selectorBlackList: [/^\.vux-/,/^\.weui-/],
      //selectorBlackList 忽略的选择器.
      minPixelValue: 2
      //设置要替换的最小像素值
    }
  }
}

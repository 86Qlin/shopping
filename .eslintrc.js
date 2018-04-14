module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,                      // 关闭箭头函数强制使用小括号
    'generator-star-spacing': 0,            // 允许异步等待 async-await
    // "linebreak-style": ["error", "unix"],   // 换行风格
    "quotes": [1, "single"],                // 引号类型：使用单引号
    "semi": ["error", "never"],             // 禁止分号作为语句结尾
    "eqeqeq": 0,                            // 关闭强制使用 '===' 和 '!==' 来做判断比较
    "no-unused-vars": 0,                    // 关闭强制 声明未使用变量
    "space-before-function-paren": 0,       // 关闭函数名后的空格
    "prefer-const": 0,                      // 关闭首选const
    "camelcase": 1,                         // 关闭强制驼峰命名, 警告
    "curly": 1,                             // 为所有控制语句指定花括号约定，警告
    "eol-last": 0,                          // 强制文件最后一行为空行，关闭
    // 在开发过程中允许调试器
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "spaced-comment": 0,                     // 注释风格要不要有空格
    "no-shadow": 0,                          // 定义的变量不允许已在外层作用域定义
    // "no-undef": 2,                        // 变量未定义
    "no-multi-spaces": 1,                    // 不允许多个空格
    "array-callback-return": 0,              // 强制把变量的使用限制在其定义的作用域范围内
  }
}

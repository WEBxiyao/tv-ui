# pnpm+vite+eslint+husky+commitlint/config-conventional
 ## 安装mistjs/eslint-config插件详细见文档 `https://www.npmjs.com/package/@mistjs/eslint-config?activeTab=readme`
 ```
  pnpm add -D eslint @mistjs/eslint-config
  新建一个eslint.config.js文件
  import mist from "@mistjs/eslint-config";
  export default mist({})
```
 ## 在.vscode/settings.json
  ```js
  //
  {
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true, 

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

 ## 使用 monorepo 多项目管理来构建项目安装全局的话需要 -Dw,安装在最外层


 ## 安装husky，最新版本v9和v8不一样`https://github.com/typicode/husky/releases/tag/v9.0.1`
  
  ```
   pnpm add husky -Dw

   - v8
     npm pkg set scripts.prepare="husky install"
     npm run prepare
     npx husky add .husky/pre-commit "npm test"
   - v9
     现在将 husky 添加到项目中比以往任何时候都更容易。这只是一行，其作用与上面相同。无需再阅读文档即可开始。
     npx husky init
   ### 添加新钩子
   - v8
    npx husky add  .husky/pre-commit "npm test"
    git add --chmod=+x .husky/pre-commit # On Windows
   - v9
     添加挂钩就像创建文件一样简单。这可以使用您最喜欢的编辑器、脚本或基本echo命令来完成。例如，在 Linux/macOS 上：
     echo "npm test" > .husky/pre-commit

```

## 安装lint-staged 插件提交代码只需要校验提交的不用检验所有的代码
```
 pnpm add  lint-staged -Dw

 在package.json 配置
  "lint-staged": {
    "./**/*.{js,vue,ts,tsx,json,css,less,jsx}": [
      "eslint --fix"
    ]
  }

  在.husky 文件夹下面的 pre-commit  文件里面配置
  npx lint-staged
```


 ## 安装 @commitlint/config-conventional 配置定制化提交规则 

  ```
   pnpm add @commitlint/config-conventional -Dw
   - 新建文件 commitlint.config.js  在根目录
 
  ```
   ## commitlint.config.js 
  ```js
  /*
 * @Description: commit-msg提交信息格式规范
 *
 * commit-msg格式: <type>(scope?): <subject>
 *   - type: 用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
 *     - build: 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
 *     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等
 *     - ci: 持续集成修改
 *     - docs: 文档修改
 *     - feat: 新特性、新功能
 *     - fix: 修改bug
 *     - perf: 优化相关，比如提升性能、体验
 *     - refactor: 代码重构
 *     - revert: 回滚到上一个版本
 *     - style: 代码格式修改, 注意不是 css 修改
 *     - test: 测试用例修改
 *   - scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
 *   - Subject：一句话描述此次提交的主要内容，做到言简意赅
 */
export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'build',
          'chore',
          'revert',
          'style',
          'test',
        ],
      ],
      'type-empty': [2, 'never'], // <type> 不能为空
      // 'type-case': [2, 'always', 'lower-case'], // <type>格式小写
      'type-case': [0],
      'scope-empty': [0],
      // 'scope-case': [2, 'always', 'lower-case'], // <scope> 格式 小写
      'scope-case': [0],
      'subject-empty': [2, 'never'], // <subject> 不能为空 (默认)
      // 'subject-full-stop': [2, 'never', '.'], // <subject> 以.为结束标志
      'subject-full-stop': [0, 'never'],
      // 'subject-case': [2, 'never', 'lower-case'],
      'subject-case': [0, 'never'],
      // case可选值
      // 'lower-case' 小写 lowercase
      // 'upper-case' 大写 UPPERCASE
      // 'camel-case' 小驼峰 camelCase
      // 'kebab-case' 短横线 kebab-case
      // 'pascal-case' 大驼峰 PascalCase
      // 'sentence-case' 首字母大写 Sentence case
      // 'snake-case' 下划线 snake_case
      // 'start-case' 所有首字母大写 start-case

      'header-max-length': [0, 'always', 72], // header 最长72
    // 'body-leading-blank': [2, 'always'], // body换行
    // 'footer-leading-blank': [1, 'always'], // <footer> 以空行开头
    },
}
```
### 配置自定义提交规则

```
在.husky 文件夹下面的 commit-msg  文件里面配置
  
  npx commitlint --edit "$1"

```
# 获取当前文件路径

```js
import { fileURLToPath } from 'node:url'
import { cwd } from 'node:process'
const baseUrl = fileURLToPath(new URL('.', import.meta.url))
const baseUrl = cwd()
这两个是等价的
```






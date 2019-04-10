module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // plugins: ['vue'],
  // extends: ['plugin:vue/essential', 'prettier'],
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue

  // https://eslint.org/docs/rules/ 此网站查看各项含义
// 0 'off'
// 1 'warn'
//   2 'error'
  rules: {
    'vue/max-attributes-per-line': [ // 单行最大属性数
      2,
      {
        singleline: 5, // 单行模式，最多3个
        multiline: { // 多行模式，最多一个，不允许第一行有
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/name-property-casing': [2, 'PascalCase'], // 组件名大驼峰
    'accessor-pairs': 2, // 有set必有get
    'arrow-spacing': [ // 箭头两边空格
      2,
      {
        before: true,
        after: true
      }
    ],
    'block-spacing': [2, 'never'], // 花括号开头结尾空格
    'brace-style': [ // 花括号风格
    // if(foo) {
    //   bar();
    // } else {
    //   baz();
    // }
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [ // 命名驼峰
      0,
      {
        properties: 'always'
      }
    ],
    'comma-dangle': [2, 'never'], // 尾部逗号
    'comma-spacing': [ // 逗号空格
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'], // 逗号风格
    'constructor-super': 2, // 构造函数中执行super函数
    curly: [2, 'multi-line'], // 花括号，多行不能省略
    'dot-location': [2, 'property'], // 点的位置，在属性一行
    'eol-last': 2, // 文件结尾新行
    eqeqeq: [2, 'allow-null'], // 比较用严格等于/不等于，除了null
    'generator-star-spacing': [ // generator函数的 * 前后空格
      2,
      {
        before: true,
        after: true
      }
    ],
    'handle-callback-err': [2, '^(err|error)$'], // 回调函数有err必须处理
    indent: [ // 缩进2个空格     
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'key-spacing': [ // 对象中key后面冒号前后空格
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [ // 关键字前后空格
      2,
      {
        before: true,
        after: true
      }
    ],
    'new-cap': [ // 构造函数名字首字母大小写
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'new-parens': 2, // new后跟的构造函数要加括号
    'no-array-constructor': 2, // 不要使用Array构造函数，除非你要定义一个指定长度的数组
    'no-caller': 2, // 不能使用arguments的caller和callee方法
    'no-console': 0, // 不能有console
    'no-class-assign': 2, // 声明类的变量不能修改
    'no-cond-assign': 2, // 判断条件中不要有赋值操作
    'no-const-assign': 2, // const变量不能赋值
    'no-control-regex': 2, // 正则表达式中不能有控制字符，ASCII range 0-31
    'no-delete-var': 2, // 不能用delete移除变量
    'no-dupe-args': 2, // 函数中不能有重复参数
    'no-dupe-class-members': 2, // 类中不能有重复成员
    'no-dupe-keys': 2, // 对象中不能重复key
    'no-duplicate-case': 2, // switch中不能有重复case
    'no-empty-character-class': 2, // 正则中不能有空字符组
    'no-empty-pattern': 2, // 解构赋值不能出现空的{},[]
    'no-eval': 2, // 不能用eval
    'no-ex-assign': 2, // catch中不能给参数赋值
    'no-extend-native': 2, // 不能给原生对象添加扩展
    'no-extra-bind': 2, // 如果函数用bind方法，但函数体中未用到这些参数，不允许
    'no-extra-boolean-cast': 2, // 条件判断中不允许多余的布尔转换
    'no-extra-parens': [2, 'functions'], // 函数不要有多余的括号包裹
    'no-fallthrough': 2, // 不要让switch中case判断失效
    'no-floating-decimal': 2, // 小数点前后不能缺少数字
    'no-func-assign': 2, // 函数声明变量不能被修改
    'no-implied-eval': 2, // 不允许通过setTimeout，setInterval，execScript隐式使用eval
    'no-inner-declarations': [2, 'functions'], // 不允许在块内部声明函数
    'no-invalid-regexp': 2, // 在RegExp构造函数参数不可使用无效参数
    'no-irregular-whitespace': 2, // 不规则的空格，允许字符串中使用任何空格
    'no-iterator': 2, // 不使用__iterator__属性
    'no-labels': [ // 不允许使用label
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 2, // 不允许多余的嵌套
    'no-mixed-spaces-and-tabs': 2, // 不允许tab和space混合使用进行缩进
    'no-multi-spaces': 2, // 不允许多余空格
    'no-multi-str': 2, // 不允许多行字符串
    'no-multiple-empty-lines': [ // 最多连续1个空行
      2,
      {
        max: 1
      }
    ],

    'no-native-reassign': 2, // 原生对象不能再赋值
    'no-negated-in-lhs': 2, // 不允许对in操作符左边变量使用！
    'no-new-object': 2, // 不允许使用 new Object()
    'no-new-require': 2, // 不允许使用new Require()
    'no-new-symbol': 2, // 不允许使用new Symbol()
    'no-new-wrappers': 2, // 不允许使用对String, Number, Boolean构造函数使用new操作符
    'no-obj-calls': 2, // Math, JSON and Reflect 不能作为函数使用
    'no-octal': 2, // 不允许使用8进制字面量
    'no-octal-escape': 2, // 不允许字符串中使用8进制转译码
    'no-path-concat': 2, // __dirname and __filename不允许使用字符串拼接path.join  path.resolve
    'no-proto': 2, // 不允许使用__proto__
    'no-redeclare': 2, // 不允许重复声明
    'no-regex-spaces': 2, // 不允许正则中连续多个空格
    'no-return-assign': [2, 'except-parens'], // 不允许return中有赋值操作，除非用括号包裹
    'no-self-assign': 2, // 不允许自身赋值给自身
    'no-self-compare': 2, // 不允许自身比较
    'no-sequences': 2, // 禁止逗号操作符使用，除了括号包裹和for
    'no-shadow-restricted-names': 2, //  不要对NaN, Infinity, undefined，eval and arguments赋值
    'no-spaced-func': 2, // fun(),fun和()之间不允许有空格
    'no-sparse-arrays': 2, // 不允许数组中有空位，[1, , , 2]
    'no-this-before-super': 2, // this不允许在super()之前使用
    'no-throw-literal': 2, // throw后用Error对象
    'no-trailing-spaces': 2, // 行尾不能有空格
    'no-undef': 2, // 不允许使用未声明的变量
    'no-undef-init': 2, // 不能初始化一个变量为undefined， 除了const  var a  const a = undefined
    'no-unexpected-multiline': 2, // 不允许使用可能导致歧义的多行表达式
    'no-unmodified-loop-condition': 2, // 不允许循环条件中变量在循环内部不被改变
    'no-unneeded-ternary': [ // 不允许不必要的三元操作符 var a = true ? 1 : 2  var a = 1
      2,
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 2, // return, throw, break, and continue后不允许有不会执行代码
    'no-unsafe-finally': 2, // 不允许finally中使用return, throw, break, and continue
    'no-unused-vars': [ // 不允许未使用的变量
      2,
      {
        vars: 'all',
        args: 'none' // 不检查arguments
      }
    ],
    'no-useless-call': 2, // 不使用无用的call，apply
    'no-useless-computed-key': 2, // 不使用无用的计算的key
    'no-useless-constructor': 2, // 不写无必要的构造函数，
    'no-useless-escape': 0, // 字符串、正则中不写无必要的转码
    'no-whitespace-before-property': 2, // 在属性名前不要有空格，foo. bar
    'no-with': 2, // 不使用with语句
    'one-var': [ // 声明变量，使用一个var，let，const
      2,
      {
        initialized: 'never' // 需要初始值，使用多个var，let，const
      }
    ],
    'operator-linebreak': [ // 断行在 
      2,
      'before' // 断行在操作符后
    ],
    'padded-blocks': [2, 'never'], // 在块开始和最后不允许空行
    quotes: [ // 引号
      2,
      'single', // 单引号
      {
        avoidEscape: true, // 字符串中引号应避免转译
        allowTemplateLiterals: true // 允许使用模版字符串
      }
    ],
    semi: [2, 'always'], // 句末使用分号
    'semi-spacing': [ // 
      2,
      {
        before: false, // 分号前不加空格
        after: true // 分号后加空格
      }
    ],
    'space-before-blocks': [2, 'always'], // 块前加空格if() {}
    'space-before-function-paren': [2, 'never'], // function的()前不加空格
    'space-in-parens': [2, 'never'], // ()内部前后不加空格
    'space-infix-ops': 2, // 操作符两边有空格
    'space-unary-ops': [ // 
      2,
      {
        words: true, // new, delete, typeof, void, yield 有空格
        nonwords: false // -, +, --, ++, !, !! 无空格 +s -r
      }
    ],
    'spaced-comment': [ // 注释
      2,
      'always', // // or /*
      {
        markers: [ // 下面这些字会忽视空格的规则
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    'template-curly-spacing': [2, 'never'], // 模版中花括号内部前后不用空格{list.name}
    'use-isnan': 2, // 比较NaN用isNaN方法
    'valid-typeof': 2, // typeof只能比较"undefined", "object", "boolean", "number", "string", "function" and "symbol"
    'wrap-iife': [2, 'any'], // 立即执行函数用括号包裹
    'yield-star-spacing': [2, 'both'], // yield后的 * 前后都有空格
    'yoda': [2, 'never'], // 条件判断语句，变量在前，常量在后      a === 10   10 === a
    'prefer-const': 2, // let声明初始化后，未变化的值，应使用const
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 不要debugger
    'object-curly-spacing': [ // 
      2,
      'always', // 花括号内部前后有空格 var a = { a：{ a: 939 }}
      {
        objectsInObjects: false // 对象内有对象花括号之间无空格
      }
    ],
    'array-bracket-spacing': [2, 'never'] // 数组[]前后无空格 [1, 2]
  }
}

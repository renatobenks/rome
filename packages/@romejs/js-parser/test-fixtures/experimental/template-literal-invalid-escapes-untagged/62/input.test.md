# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > template-literal-invalid-escapes-untagged > 62`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 19
      index: 19
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        advice: Array []
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Invalid escape sequence in template'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 2
          index: 2
          line: 1
        }
        start: Object {
          column: 2
          index: 2
          line: 1
        }
      }
    }
  ]
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 19
          index: 19
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: TemplateLiteral {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 19
            index: 19
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        expressions: Array [
          NumericLiteral {
            value: 0
            format: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 12
                index: 12
                line: 1
              }
              start: Object {
                column: 11
                index: 11
                line: 1
              }
            }
          }
        ]
        quasis: Array [
          TemplateElement {
            cooked: '\\u{\\u{0}'
            raw: '\\u{\\u{0}'
            tail: false
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 9
                index: 9
                line: 1
              }
              start: Object {
                column: 1
                index: 1
                line: 1
              }
            }
          }
          TemplateElement {
            cooked: 'right'
            raw: 'right'
            tail: true
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 18
                index: 18
                line: 1
              }
              start: Object {
                column: 13
                index: 13
                line: 1
              }
            }
          }
        ]
      }
    }
  ]
}
```

# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 313`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
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
      column: 8
      index: 22
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    BlockStatement {
      directives: Array []
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 8
          index: 22
          line: 2
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      body: Array [
        ThrowStatement {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 13
              index: 13
              line: 1
            }
            start: Object {
              column: 2
              index: 2
              line: 1
            }
          }
          argument: ReferenceIdentifier {
            name: 'error'
            loc: Object {
              filename: 'input.js'
              identifierName: 'error'
              end: Object {
                column: 13
                index: 13
                line: 1
              }
              start: Object {
                column: 8
                index: 8
                line: 1
              }
            }
          }
        }
        ExpressionStatement {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 6
              index: 20
              line: 2
            }
            start: Object {
              column: 0
              index: 14
              line: 2
            }
          }
          expression: ReferenceIdentifier {
            name: 'error'
            loc: Object {
              filename: 'input.js'
              identifierName: 'error'
              end: Object {
                column: 5
                index: 19
                line: 2
              }
              start: Object {
                column: 0
                index: 14
                line: 2
              }
            }
          }
        }
      ]
    }
  ]
}
```

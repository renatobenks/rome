# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 14`

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
      index: 8
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 8
          index: 8
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: AssignmentExpression {
        operator: '='
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 8
            index: 8
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        right: ArrayExpression {
          elements: Array []
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 8
              index: 8
              line: 1
            }
            start: Object {
              column: 6
              index: 6
              line: 1
            }
          }
        }
        left: AssignmentIdentifier {
          name: '\u65e5\u672c\u8a9e'
          loc: Object {
            filename: 'input.js'
            identifierName: '\u65e5\u672c\u8a9e'
            end: Object {
              column: 3
              index: 3
              line: 1
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
        }
      }
    }
  ]
}
```

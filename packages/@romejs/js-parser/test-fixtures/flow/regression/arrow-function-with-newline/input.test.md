# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > regression > arrow-function-with-newline`

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
  sourceType: 'module'
  syntax: Array [
    'jsx'
    'flow'
  ]
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 21
      line: 3
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
          column: 10
          index: 20
          line: 2
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: ArrowFunctionExpression {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 10
            index: 20
            line: 2
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        body: BlockStatement {
          body: Array []
          directives: Array []
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 10
              index: 20
              line: 2
            }
            start: Object {
              column: 7
              index: 17
              line: 2
            }
          }
        }
        head: FunctionHead {
          async: true
          hasHoistedVars: false
          rest: undefined
          thisType: undefined
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 6
              index: 16
              line: 2
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
          params: Array [
            BindingIdentifier {
              name: 'f'
              loc: Object {
                filename: 'input.js'
                identifierName: 'f'
                end: Object {
                  column: 8
                  index: 8
                  line: 1
                }
                start: Object {
                  column: 7
                  index: 7
                  line: 1
                }
              }
            }
          ]
          returnType: FlowGenericTypeAnnotation {
            id: ReferenceIdentifier {
              name: 't'
              loc: Object {
                filename: 'input.js'
                identifierName: 't'
                end: Object {
                  column: 3
                  index: 13
                  line: 2
                }
                start: Object {
                  column: 2
                  index: 12
                  line: 2
                }
              }
            }
            typeParameters: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 3
                index: 13
                line: 2
              }
              start: Object {
                column: 2
                index: 12
                line: 2
              }
            }
          }
        }
      }
    }
  ]
}
```

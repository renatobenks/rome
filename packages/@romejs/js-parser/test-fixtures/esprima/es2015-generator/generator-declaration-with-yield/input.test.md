# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-generator > generator-declaration-with-yield`

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
      column: 0
      index: 29
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    FunctionDeclaration {
      id: BindingIdentifier {
        name: 'foo'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 13
            index: 13
            line: 1
          }
          start: Object {
            column: 10
            index: 10
            line: 1
          }
        }
      }
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 28
          index: 28
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      head: FunctionHead {
        async: false
        generator: true
        hasHoistedVars: false
        params: Array []
        predicate: undefined
        rest: undefined
        returnType: undefined
        thisType: undefined
        typeParameters: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 16
            index: 16
            line: 1
          }
          start: Object {
            column: 13
            index: 13
            line: 1
          }
        }
      }
      body: BlockStatement {
        directives: Array []
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 28
            index: 28
            line: 1
          }
          start: Object {
            column: 16
            index: 16
            line: 1
          }
        }
        body: Array [
          ExpressionStatement {
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 26
                index: 26
                line: 1
              }
              start: Object {
                column: 18
                index: 18
                line: 1
              }
            }
            expression: YieldExpression {
              delegate: false
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 25
                  index: 25
                  line: 1
                }
                start: Object {
                  column: 18
                  index: 18
                  line: 1
                }
              }
              argument: NumericLiteral {
                value: 3
                format: undefined
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 25
                    index: 25
                    line: 1
                  }
                  start: Object {
                    column: 24
                    index: 24
                    line: 1
                  }
                }
              }
            }
          }
        ]
      }
    }
  ]
}
```
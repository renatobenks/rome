# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > type-alias > 3`

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
      column: 25
      index: 25
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExportLocalDeclaration {
      exportKind: 'type'
      specifiers: undefined
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 25
          index: 25
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      declaration: TypeAliasTypeAnnotation {
        id: BindingIdentifier {
          name: 'Foo'
          loc: Object {
            filename: 'input.js'
            identifierName: 'Foo'
            end: Object {
              column: 15
              index: 15
              line: 1
            }
            start: Object {
              column: 12
              index: 12
              line: 1
            }
          }
        }
        typeParameters: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 25
            index: 25
            line: 1
          }
          start: Object {
            column: 7
            index: 7
            line: 1
          }
        }
        right: NumberKeywordTypeAnnotation {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 24
              index: 24
              line: 1
            }
            start: Object {
              column: 18
              index: 18
              line: 1
            }
          }
        }
      }
    }
  ]
}
```

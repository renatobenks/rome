# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > module-namespace > head-declare`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.ts'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array ['ts']
  loc: Object {
    filename: 'input.ts'
    end: Object {
      column: 0
      index: 85
      line: 5
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    TSModuleDeclaration {
      id: BindingIdentifier {
        name: 'N'
        loc: Object {
          filename: 'input.ts'
          identifierName: 'N'
          end: Object {
            column: 19
            index: 19
            line: 1
          }
          start: Object {
            column: 18
            index: 18
            line: 1
          }
        }
      }
      declare: true
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 24
          index: 24
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      body: TSModuleDeclaration {
        id: BindingIdentifier {
          name: 'M'
          loc: Object {
            filename: 'input.ts'
            identifierName: 'M'
            end: Object {
              column: 21
              index: 21
              line: 1
            }
            start: Object {
              column: 20
              index: 20
              line: 1
            }
          }
        }
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 24
            index: 24
            line: 1
          }
          start: Object {
            column: 20
            index: 20
            line: 1
          }
        }
        body: TSModuleBlock {
          body: Array []
          loc: Object {
            filename: 'input.ts'
            end: Object {
              column: 24
              index: 24
              line: 1
            }
            start: Object {
              column: 22
              index: 22
              line: 1
            }
          }
        }
      }
    }
    TSModuleDeclaration {
      id: BindingIdentifier {
        name: 'M'
        loc: Object {
          filename: 'input.ts'
          identifierName: 'M'
          end: Object {
            column: 16
            index: 41
            line: 2
          }
          start: Object {
            column: 15
            index: 40
            line: 2
          }
        }
      }
      declare: true
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 19
          index: 44
          line: 2
        }
        start: Object {
          column: 0
          index: 25
          line: 2
        }
      }
      body: TSModuleBlock {
        body: Array []
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 19
            index: 44
            line: 2
          }
          start: Object {
            column: 17
            index: 42
            line: 2
          }
        }
      }
    }
    TSModuleDeclaration {
      id: StringLiteral {
        value: 'm'
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 18
            index: 63
            line: 3
          }
          start: Object {
            column: 15
            index: 60
            line: 3
          }
        }
      }
      declare: true
      global: undefined
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 21
          index: 66
          line: 3
        }
        start: Object {
          column: 0
          index: 45
          line: 3
        }
      }
      body: TSModuleBlock {
        body: Array []
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 21
            index: 66
            line: 3
          }
          start: Object {
            column: 19
            index: 64
            line: 3
          }
        }
      }
    }
    TSModuleDeclaration {
      id: BindingIdentifier {
        name: 'global'
        loc: Object {
          filename: 'input.ts'
          identifierName: 'global'
          end: Object {
            column: 14
            index: 81
            line: 4
          }
          start: Object {
            column: 8
            index: 75
            line: 4
          }
        }
      }
      declare: true
      global: true
      loc: Object {
        filename: 'input.ts'
        end: Object {
          column: 17
          index: 84
          line: 4
        }
        start: Object {
          column: 0
          index: 67
          line: 4
        }
      }
      body: TSModuleBlock {
        body: Array []
        loc: Object {
          filename: 'input.ts'
          end: Object {
            column: 17
            index: 84
            line: 4
          }
          start: Object {
            column: 15
            index: 82
            line: 4
          }
        }
      }
    }
  ]
}
```

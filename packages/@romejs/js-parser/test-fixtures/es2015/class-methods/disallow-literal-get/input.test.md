# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > class-methods > disallow-literal-get`

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
      column: 0
      index: 27
      line: 4
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
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Unknown class property start'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'script'
        end: Object {
          column: 7
          index: 17
          line: 2
        }
        start: Object {
          column: 8
          index: 18
          line: 2
        }
      }
    }
  ]
  body: Array [
    ClassDeclaration {
      id: BindingIdentifier {
        name: 'A'
        loc: Object {
          filename: 'input.js'
          identifierName: 'A'
          end: Object {
            column: 7
            index: 7
            line: 1
          }
          start: Object {
            column: 6
            index: 6
            line: 1
          }
        }
      }
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 1
          index: 26
          line: 3
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      meta: ClassHead {
        implements: undefined
        superClass: undefined
        superTypeParameters: undefined
        typeParameters: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 1
            index: 26
            line: 3
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        body: Array [
          ClassMethod {
            kind: 'method'
            key: StaticPropertyKey {
              value: Identifier {
                name: 'a'
                loc: Object {
                  filename: 'input.js'
                  identifierName: 'a'
                  end: Object {
                    column: 9
                    index: 19
                    line: 2
                  }
                  start: Object {
                    column: 8
                    index: 18
                    line: 2
                  }
                }
              }
              variance: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 9
                  index: 19
                  line: 2
                }
                start: Object {
                  column: 8
                  index: 18
                  line: 2
                }
              }
            }
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 14
                index: 24
                line: 2
              }
              start: Object {
                column: 8
                index: 18
                line: 2
              }
            }
            body: BlockStatement {
              body: Array []
              directives: Array []
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 14
                  index: 24
                  line: 2
                }
                start: Object {
                  column: 12
                  index: 22
                  line: 2
                }
              }
            }
            head: FunctionHead {
              async: false
              generator: false
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
                  column: 11
                  index: 21
                  line: 2
                }
                start: Object {
                  column: 9
                  index: 19
                  line: 2
                }
              }
            }
            meta: ClassPropertyMeta {
              abstract: false
              accessibility: undefined
              optional: false
              readonly: false
              static: false
              typeAnnotation: undefined
              start: Object {
                column: 8
                index: 18
                line: 2
              }
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 9
                  index: 19
                  line: 2
                }
                start: Object {
                  column: 8
                  index: 18
                  line: 2
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

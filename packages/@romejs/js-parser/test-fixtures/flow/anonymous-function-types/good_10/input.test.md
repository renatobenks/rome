# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > anonymous-function-types > good_10`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: true
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
      index: 40
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    VariableDeclarationStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 39
          index: 39
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      declaration: VariableDeclaration {
        kind: 'var'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 39
            index: 39
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        declarations: Array [
          VariableDeclarator {
            id: BindingIdentifier {
              name: 'f'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 5
                  index: 5
                  line: 1
                }
                start: Object {
                  column: 4
                  index: 4
                  line: 1
                }
              }
            }
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 38
                index: 38
                line: 1
              }
              start: Object {
                column: 4
                index: 4
                line: 1
              }
            }
            init: ArrowFunctionExpression {
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 38
                  index: 38
                  line: 1
                }
                start: Object {
                  column: 8
                  index: 8
                  line: 1
                }
              }
              body: NumericLiteral {
                value: 123
                format: undefined
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 38
                    index: 38
                    line: 1
                  }
                  start: Object {
                    column: 35
                    index: 35
                    line: 1
                  }
                }
              }
              head: FunctionHead {
                async: false
                hasHoistedVars: false
                predicate: undefined
                rest: undefined
                thisType: undefined
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 35
                    index: 35
                    line: 1
                  }
                  start: Object {
                    column: 8
                    index: 8
                    line: 1
                  }
                }
                params: Array [
                  BindingIdentifier {
                    name: 'x'
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 10
                        index: 10
                        line: 1
                      }
                      start: Object {
                        column: 9
                        index: 9
                        line: 1
                      }
                    }
                  }
                ]
                returnType: FlowFunctionTypeAnnotation {
                  rest: undefined
                  typeParameters: undefined
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 31
                      index: 31
                      line: 1
                    }
                    start: Object {
                      column: 13
                      index: 13
                      line: 1
                    }
                  }
                  returnType: NumericLiteralTypeAnnotation {
                    value: 123
                    format: undefined
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 31
                        index: 31
                        line: 1
                      }
                      start: Object {
                        column: 28
                        index: 28
                        line: 1
                      }
                    }
                  }
                  params: Array [
                    FlowFunctionTypeParam {
                      name: Identifier {
                        name: 'x'
                        loc: Object {
                          filename: 'input.js'
                          end: Object {
                            column: 15
                            index: 15
                            line: 1
                          }
                          start: Object {
                            column: 14
                            index: 14
                            line: 1
                          }
                        }
                      }
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 23
                          index: 23
                          line: 1
                        }
                        start: Object {
                          column: 14
                          index: 14
                          line: 1
                        }
                      }
                      meta: PatternMeta {
                        optional: false
                        loc: Object {
                          filename: 'input.js'
                          end: Object {
                            column: 23
                            index: 23
                            line: 1
                          }
                          start: Object {
                            column: 14
                            index: 14
                            line: 1
                          }
                        }
                        typeAnnotation: NumberKeywordTypeAnnotation {
                          loc: Object {
                            filename: 'input.js'
                            end: Object {
                              column: 23
                              index: 23
                              line: 1
                            }
                            start: Object {
                              column: 17
                              index: 17
                              line: 1
                            }
                          }
                        }
                      }
                    }
                  ]
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
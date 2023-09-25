;(() => {
  'use strict'
  var e = {
      804: (e, r, t) => {
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.brushType =
            r.textDecoration =
            r.fontWeightCompose =
            r.hexARGB =
            r.asComment =
              void 0)
        const n = t(814)
        ;(r.asComment = (0, n.createPulsarTransformer)('asComment', (e, r) =>
          e
            .trim()
            .split('\n')
            .map((e, t) => (t > 0 ? `${r}` : '') + `// ${e}`)
            .join('\n'),
        )),
          (r.hexARGB = (0, n.createPulsarFunction)(
            'hexARGB',
            ({ a: e, r, g: t, b: n }) => {
              const o = (e) =>
                  ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase(),
                a = { alpha: o(e), red: o(r), green: o(t), blue: o(n) },
                i = `0x${a.alpha}${a.red}${a.green}${a.blue}`
              return Object.assign(Object.assign({}, a), {
                full: i,
                value: parseInt(i, 16),
              })
            },
          )),
          (r.fontWeightCompose = (0, n.createPulsarFunction)(
            'fontWeightCompose',
            ({ subfamily: e }) => {
              const r = e.toLowerCase()
              return r.includes('emi')
                ? 'SemiBold'
                : r.includes('heavy')
                ? 'Black'
                : r.includes('bold')
                ? 'Bold'
                : r.includes('medium')
                ? 'Medium'
                : r.includes('ult') && r.includes('light')
                ? 'Thin'
                : 'Normal'
            },
          )),
          (r.textDecoration = (0, n.createPulsarFunction)(
            'textDecoration',
            ({ textDecoration: e }) => {
              switch (e) {
                case 'Underline':
                  return 'Underline'
                case 'Strikethrough':
                  return 'LineThrough'
              }
            },
          )),
          (r.brushType = (0, n.createPulsarFunction)(
            'brushType',
            ({ type: e }) => {
              switch (e) {
                case 'Linear':
                  return 'linearGradient'
                case 'Radial':
                  return 'radialGradient'
                case 'Angular':
                  return 'sweepGradient'
                default:
                  return ''
              }
            },
          ))
      },
      573: (e, r, t) => {
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.filterComponentTokens =
            r.getPackageName =
            r.getTokenType =
            r.getComponentTokenName =
            r.getFullTokenName =
            r.toJson =
            r.groupByComponent =
            r.groupByFamily =
            r.ternary =
            r.toFixed =
            r.isDigit =
            r.ajoin =
            r.aconcat =
              void 0)
        const n = t(814)
        ;(r.aconcat = (0, n.createPulsarTransformer)('aconcat', (e, r) =>
          e.concat(r),
        )),
          (r.ajoin = (0, n.createPulsarTransformer)('ajoin', (e, r) =>
            e.join(r),
          )),
          (r.isDigit = (0, n.createPulsarTransformer)(
            'isDigit',
            (e) => e >= '0' && e <= '9',
          )),
          (r.toFixed = (0, n.createPulsarTransformer)('toFixed', (e) =>
            Number.isInteger(e) ? e.toFixed(1) : e,
          )),
          (r.ternary = (0, n.createPulsarFunction)('ternary', (e, r, t) =>
            e ? r : t,
          )),
          (r.groupByFamily = (0, n.createPulsarTransformer)(
            'groupByFamily',
            (e) =>
              e.reduce(
                (e, r) => (
                  (e[r.value.family] = e[r.value.family] || []),
                  e[r.value.family].push(r),
                  e
                ),
                {},
              ),
          )),
          (r.groupByComponent = (0, n.createPulsarFunction)(
            'groupByComponent',
            (e) => {
              var r, t, n, o
              const a =
                null !==
                  (o =
                    null ===
                      (n =
                        null ===
                          (t =
                            null === (r = e.at(0)) || void 0 === r
                              ? void 0
                              : r.properties) || void 0 === t
                          ? void 0
                          : t.find((e) => 'component' === e.codeName)) ||
                    void 0 === n
                      ? void 0
                      : n.options) && void 0 !== o
                  ? o
                  : []
              return e.reduce((e, r) => {
                var t, n, o
                const i =
                    null !== (t = r.propertyValues.component) && void 0 !== t
                      ? t
                      : '',
                  u =
                    null !==
                      (o =
                        null === (n = a.find((e) => e.id === i)) || void 0 === n
                          ? void 0
                          : n.name) && void 0 !== o
                      ? o
                      : ''
                return (e[u] = e[u] || []), e[u].push(r), e
              }, {})
            },
          )),
          (r.toJson = (0, n.createPulsarFunction)('toJson', (e) =>
            JSON.stringify(e, null, '  '),
          )),
          (r.getFullTokenName = (0, n.createPulsarFunction)(
            'getFullTokenName',
            (e) => {
              var r, t, n
              return null ===
                (n =
                  null ===
                    (t =
                      null === (r = e.parent) || void 0 === r
                        ? void 0
                        : r.path) || void 0 === t
                    ? void 0
                    : t.concat(e.parent.name, e.name)) || void 0 === n
                ? void 0
                : n.join(' ')
            },
          )),
          (r.getComponentTokenName = (0, n.createPulsarFunction)(
            'getComponentTokenName',
            (e) => {
              var r, t, n, o
              return null ===
                (o =
                  null ===
                    (n =
                      null ===
                        (t =
                          null === (r = e.parent) || void 0 === r
                            ? void 0
                            : r.path) || void 0 === t
                        ? void 0
                        : t.slice(3)) || void 0 === n
                    ? void 0
                    : n.concat(e.parent.name, e.name)) || void 0 === o
                ? void 0
                : o.join(' ')
            },
          )),
          (r.getTokenType = (0, n.createPulsarFunction)(
            'getTokenType',
            (e) => e.tokenType,
          )),
          (r.getPackageName = (0, n.createPulsarFunction)(
            'getPackageName',
            (e = !1, r = '', t = '') =>
              (r ? r.split(/[./]/) : [])
                .concat(Pulsar.exportConfiguration.packageName.split('.'))
                .concat(t ? t.split(/[./]/) : [])
                .join(e ? '/' : '.'),
          )),
          (r.filterComponentTokens = (0, n.createPulsarTransformer)(
            'filterComponentTokens',
            (e) => e.filter((e) => void 0 === e.propertyValues.component),
          ))
      },
      630: (e, r, t) => {
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.groupFontsByFamily =
            r.indentMultiline =
            r.createFullTokenGroupPath =
              void 0)
        const n = t(814)
        ;(r.createFullTokenGroupPath = (0, n.createPulsarFunction)(
          'createFullTokenGroupPath',
          (e) => (e.isRoot ? [] : e.path.concat(e.name)),
        )),
          (r.indentMultiline = (0, n.createPulsarTransformer)(
            'indentMultiline',
            (e, r) => e.trim().split('\n').join(`\n${r}`),
          )),
          (r.groupFontsByFamily = (0, n.createPulsarFunction)(
            'groupFontsByFamily',
            (e) => {
              return (
                (r = 'family'),
                e.reduce(function (e, t) {
                  return (
                    (e[t[r].toLowerCase()] = e[t[r].toLowerCase()] || []),
                    e[t[r].toLowerCase()].push(t),
                    e
                  )
                }, {})
              )
              var r
            },
          ))
      },
      550: (e, r) => {
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.register = void 0),
          (r.register = function (e) {
            for (const r of e)
              'function' === r.registrationType
                ? Pulsar.registerFunction(r.name, r.func)
                : 'transformer' === r.registrationType
                ? Pulsar.registerTransformer(r.name, r.transform)
                : 'payload' === r.registrationType &&
                  Pulsar.registerPayload(r.name, r.obj)
          })
      },
      814: (e, r) => {
        Object.defineProperty(r, '__esModule', { value: !0 }),
          (r.createPulsarPayload =
            r.createPulsarTransformer =
            r.createPulsarFunction =
              void 0),
          (r.createPulsarFunction = (e, r) => ({
            name: e,
            registrationType: 'function',
            func: r,
          })),
          (r.createPulsarTransformer = (e, r) => ({
            name: e,
            registrationType: 'transformer',
            transform: r,
          })),
          (r.createPulsarPayload = (e, r) => ({
            name: e,
            registrationType: 'payload',
            obj: r,
          }))
      },
      110: function (e, r, t) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, r, t, n) {
                  void 0 === n && (n = t)
                  var o = Object.getOwnPropertyDescriptor(r, t)
                  ;(o &&
                    !('get' in o
                      ? !r.__esModule
                      : o.writable || o.configurable)) ||
                    (o = {
                      enumerable: !0,
                      get: function () {
                        return r[t]
                      },
                    }),
                    Object.defineProperty(e, n, o)
                }
              : function (e, r, t, n) {
                  void 0 === n && (n = t), (e[n] = r[t])
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, r) {
                  Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    value: r,
                  })
                }
              : function (e, r) {
                  e.default = r
                }),
          a =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e
              var r = {}
              if (null != e)
                for (var t in e)
                  'default' !== t &&
                    Object.prototype.hasOwnProperty.call(e, t) &&
                    n(r, e, t)
              return o(r, e), r
            }
        Object.defineProperty(r, '__esModule', { value: !0 })
        const i = t(550),
          u = a(t(804)),
          l = a(t(573)),
          s = a(t(630))
        ;(0, i.register)([
          ...Object.values(u),
          ...Object.values(l),
          ...Object.values(s),
        ])
      },
    },
    r = {}
  !(function t(n) {
    var o = r[n]
    if (void 0 !== o) return o.exports
    var a = (r[n] = { exports: {} })
    return e[n].call(a.exports, a, a.exports, t), a.exports
  })(110)
})()

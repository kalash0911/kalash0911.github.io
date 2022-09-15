(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var e,t=(e=require("void-elements"))&&"object"==typeof e&&"default"in e?e.default:e,n=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function r(e){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=e.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],(t[i[1]]||"/"===e.charAt(e.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=e.indexOf("--\x3e");return{type:"comment",comment:-1!==s?e.slice(4,s):""}}for(var c=new RegExp(n),a=null;null!==(a=c.exec(e));)if(a[0].trim())if(a[1]){var o=a[1].trim(),u=[o,""];o.indexOf("=")>-1&&(u=o.split("=")),r.attrs[u[0]]=u[1],c.lastIndex--}else a[2]&&(r.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return r}var i=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,s=/^\s*$/,c=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}module.exports={parse:function(e,t){t||(t={}),t.components||(t.components=c);var n,a=[],o=[],u=-1,l=!1;if(0!==e.indexOf("<")){var m=e.indexOf("<");a.push({type:"text",content:-1===m?e:e.substring(0,m)})}return e.replace(i,function(i,c){if(l){if(i!=="</"+n.name+">")return;l=!1}var m,d="/"!==i.charAt(1),f=i.startsWith("\x3c!--"),h=c+i.length,p=e.charAt(h);if(f){var v=r(i);return u<0?(a.push(v),a):((m=o[u]).children.push(v),a)}if(d&&(u++,"tag"===(n=r(i)).type&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!p||"<"===p||n.children.push({type:"text",content:e.slice(h,e.indexOf("<",h))}),0===u&&a.push(n),(m=o[u-1])&&m.children.push(n),o[u]=n),(!d||n.voidElement)&&(u>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(u--,n=-1===u?a:o[u]),!l&&"<"!==p&&p)){m=-1===u?a:o[u].children;var x=e.indexOf("<",h),g=e.slice(h,-1===x?void 0:x);s.test(g)&&(g=" "),(x>-1&&u+m.length>=0||" "!==g)&&m.push({type:"text",content:g})}}),a},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};


},{"void-elements":45}],2:[function(require,module,exports){
'use strict';

var _typeof = require('@babel/runtime/helpers/typeof');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toArray = require('@babel/runtime/helpers/toArray');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _assertThisInitialized__default = /*#__PURE__*/_interopDefaultLegacy(_assertThisInitialized);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toArray__default = /*#__PURE__*/_interopDefaultLegacy(_toArray);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};

var Logger = function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck__default['default'](this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass__default['default'](Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread(_objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }), this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck__default['default'](this, EventEmitter);

    this.observers = {};
  }

  _createClass__default['default'](EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.observers[event]) return;

      if (!listener) {
        delete this.observers[event];
        return;
      }

      this.observers[event] = this.observers[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();

    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function getPathWithDefaults(data, defaultData, key) {
  var value = getPath(data, key);

  if (value !== undefined) {
    return value;
  }

  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (var prop in source) {
    if (prop !== '__proto__' && prop !== 'constructor') {
      if (prop in target) {
        if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}
var isIE10 = typeof window !== 'undefined' && window.navigator && typeof window.navigator.userAgentData === 'undefined' && window.navigator.userAgent && window.navigator.userAgent.indexOf('MSIE') > -1;
var chars = [' ', ',', '?', '!', ';'];
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || '';
  keySeparator = keySeparator || '';
  var possibleChars = chars.filter(function (c) {
    return nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0;
  });
  if (possibleChars.length === 0) return true;
  var r = new RegExp("(".concat(possibleChars.map(function (c) {
    return c === '?' ? '\\?' : c;
  }).join('|'), ")"));
  var matched = !r.test(key);

  if (!matched) {
    var ki = key.indexOf(keySeparator);

    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }

  return matched;
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function deepFind(obj, path) {
  var keySeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  if (!obj) return undefined;
  if (obj[path]) return obj[path];
  var paths = path.split(keySeparator);
  var current = obj;

  for (var i = 0; i < paths.length; ++i) {
    if (!current) return undefined;

    if (typeof current[paths[i]] === 'string' && i + 1 < paths.length) {
      return undefined;
    }

    if (current[paths[i]] === undefined) {
      var j = 2;
      var p = paths.slice(i, i + j).join(keySeparator);
      var mix = current[p];

      while (mix === undefined && paths.length > i + j) {
        j++;
        p = paths.slice(i, i + j).join(keySeparator);
        mix = current[p];
      }

      if (mix === undefined) return undefined;
      if (mix === null) return null;

      if (path.endsWith(p)) {
        if (typeof mix === 'string') return mix;
        if (p && typeof mix[p] === 'string') return mix[p];
      }

      var joinedPath = paths.slice(i + j).join(keySeparator);
      if (joinedPath) return deepFind(mix, joinedPath, keySeparator);
      return undefined;
    }

    current = current[paths[i]];
  }

  return current;
}

var ResourceStore = function (_EventEmitter) {
  _inherits__default['default'](ResourceStore, _EventEmitter);

  var _super = _createSuper(ResourceStore);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck__default['default'](this, ResourceStore);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized__default['default'](_this));
    }

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    if (_this.options.ignoreJSONStructure === undefined) {
      _this.options.ignoreJSONStructure = true;
    }

    return _this;
  }

  _createClass__default['default'](ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var ignoreJSONStructure = options.ignoreJSONStructure !== undefined ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      var result = getPath(this.data, path);
      if (result || !ignoreJSONStructure || typeof key !== 'string') return result;
      return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread$1(_objectSpread$1({}, pack), resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS;
      if (this.options.compatibilityAPI === 'v1') return _objectSpread$1(_objectSpread$1({}, {}), this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "hasLanguageSomeTranslations",
    value: function hasLanguageSomeTranslations(lng) {
      var data = this.getDataByLanguage(lng);
      var n = data && Object.keys(data) || [];
      return !!n.find(function (v) {
        return data[v] && Object.keys(data[v]).length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var checkedLoadedFor = {};

var Translator = function (_EventEmitter) {
  _inherits__default['default'](Translator, _EventEmitter);

  var _super = _createSuper$1(Translator);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck__default['default'](this, Translator);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized__default['default'](_this));
    }

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], services, _assertThisInitialized__default['default'](_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass__default['default'](Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };

      if (key === undefined || key === null) {
        return false;
      }

      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator !== undefined ? options.nsSeparator : this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS || [];
      var wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
      var seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);

      if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
        var m = key.match(this.interpolator.nestingRegexp);

        if (m && m.length > 0) {
          return {
            key: key,
            namespaces: namespaces
          };
        }

        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options, lastKey) {
      var _this2 = this;

      if (_typeof__default['default'](options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {};
      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)];
      var returnDetails = options.returnDetails !== undefined ? options.returnDetails : this.options.returnDetails;
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1];
      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;

          if (returnDetails) {
            resolved.res = "".concat(namespace).concat(nsSeparator).concat(key);
            return resolved;
          }

          return "".concat(namespace).concat(nsSeparator).concat(key);
        }

        if (returnDetails) {
          resolved.res = key;
          return resolved;
        }

        return key;
      }

      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;
      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          if (!this.options.returnedObjectHandler) {
            this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          }

          var r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, _objectSpread$2(_objectSpread$2({}, options), {}, {
            ns: namespaces
          })) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");

          if (returnDetails) {
            resolved.res = r;
            return resolved;
          }

          return r;
        }

        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy = resTypeIsArray ? [] : {};
          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy[m] = this.translate(deepKey, _objectSpread$2(_objectSpread$2({}, options), {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy[m] === deepKey) copy[m] = res[m];
            }
          }

          res = copy;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options, lastKey);
      } else {
        var usedDefault = false;
        var usedKey = false;
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var hasDefaultValue = Translator.hasDefaultValue(options);
        var defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : '';
        var defaultValue = options["defaultValue".concat(defaultValueSuffix)] || options.defaultValue;

        if (!this.isValidLookup(res) && hasDefaultValue) {
          usedDefault = true;
          res = defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        }

        var missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
        var resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
        var updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);

          if (keySeparator) {
            var fk = this.resolve(key, _objectSpread$2(_objectSpread$2({}, options), {}, {
              keySeparator: false
            }));
            if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
          }

          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k, specificDefaultValue) {
            var defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;

            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (language) {
                _this2.pluralResolver.getSuffixes(language, options).forEach(function (suffix) {
                  send([language], key + suffix, options["defaultValue".concat(suffix)] || defaultValue);
                });
              });
            } else {
              send(lngs, key, defaultValue);
            }
          }
        }

        res = this.extendTranslation(res, keys, options, resolved, lastKey);
        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key);

        if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
          if (this.options.compatibilityAPI !== 'v1') {
            res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(namespace, ":").concat(key) : key, usedDefault ? res : undefined);
          } else {
            res = this.options.parseMissingKeyHandler(res);
          }
        }
      }

      if (returnDetails) {
        resolved.res = res;
        return resolved;
      }

      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved, lastKey) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), options), resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        if (options.interpolation) this.interpolator.init(_objectSpread$2(_objectSpread$2({}, options), {
          interpolation: _objectSpread$2(_objectSpread$2({}, this.options.interpolation), options.interpolation)
        }));
        var skipOnVariables = typeof res === 'string' && (options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
        var nestBef;

        if (skipOnVariables) {
          var nb = res.match(this.interpolator.nestingRegexp);
          nestBef = nb && nb.length;
        }

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread$2(_objectSpread$2({}, this.options.interpolation.defaultVariables), data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options);

        if (skipOnVariables) {
          var na = res.match(this.interpolator.nestingRegexp);
          var nestAft = na && na.length;
          if (nestBef < nestAft) options.nest = false;
        }

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this3.logger.warn("It seems you are nesting recursively key: ".concat(args[0], " in key: ").concat(key[0]));

            return null;
          }

          return _this3.translate.apply(_this3, args.concat([key]));
        }, options);
        if (options.interpolation) this.interpolator.reset();
      }

      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? _objectSpread$2({
          i18nResolved: resolved
        }, options) : options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey;
      var exactUsedKey;
      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys];
      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

        var needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && _this4.pluralResolver.shouldUseIntlApi();

        var needsContextHandling = options.context !== undefined && (typeof options.context === 'string' || typeof options.context === 'number') && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;

          if (!checkedLoadedFor["".concat(codes[0], "-").concat(ns)] && _this4.utils && _this4.utils.hasLoadedNamespace && !_this4.utils.hasLoadedNamespace(usedNS)) {
            checkedLoadedFor["".concat(codes[0], "-").concat(ns)] = true;

            _this4.logger.warn("key \"".concat(usedKey, "\" for languages \"").concat(codes.join(', '), "\" won't get resolved as namespace \"").concat(usedNS, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
          }

          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKeys = [key];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count, options);
              var zeroSuffix = "".concat(_this4.options.pluralSeparator, "zero");

              if (needsPluralHandling) {
                finalKeys.push(key + pluralSuffix);

                if (needsZeroSuffixLookup) {
                  finalKeys.push(key + zeroSuffix);
                }
              }

              if (needsContextHandling) {
                var contextKey = "".concat(key).concat(_this4.options.contextSeparator).concat(options.context);
                finalKeys.push(contextKey);

                if (needsPluralHandling) {
                  finalKeys.push(contextKey + pluralSuffix);

                  if (needsZeroSuffixLookup) {
                    finalKeys.push(contextKey + zeroSuffix);
                  }
                }
              }
            }

            var possibleKey;

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }], [{
    key: "hasDefaultValue",
    value: function hasDefaultValue(options) {
      var prefix = 'defaultValue';

      for (var option in options) {
        if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && undefined !== options[option]) {
          return true;
        }
      }

      return false;
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil = function () {
  function LanguageUtil(options) {
    _classCallCheck__default['default'](this, LanguageUtil);

    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass__default['default'](LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      if (p[p.length - 1].toLowerCase() === 'x') return null;
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase();
          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isSupportedCode",
    value: function isSupportedCode(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
  }, {
    key: "getBestMatchFromCodes",
    value: function getBestMatchFromCodes(codes) {
      var _this = this;

      if (!codes) return null;
      var found;
      codes.forEach(function (code) {
        if (found) return;

        var cleanedLng = _this.formatLanguageCode(code);

        if (!_this.options.supportedLngs || _this.isSupportedCode(cleanedLng)) found = cleanedLng;
      });

      if (!found && this.options.supportedLngs) {
        codes.forEach(function (code) {
          if (found) return;

          var lngOnly = _this.getLanguagePartFromCode(code);

          if (_this.isSupportedCode(lngOnly)) return found = lngOnly;
          found = _this.options.supportedLngs.find(function (supportedLng) {
            if (supportedLng.indexOf(lngOnly) === 0) return supportedLng;
          });
        });
      }

      if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
      return found;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || [];
      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this2 = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this2.isSupportedCode(c)) {
          codes.push(c);
        } else {
          _this2.logger.warn("rejecting language code not found in supportedLngs: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this2.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'tl', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kk', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'ht', 'id', 'ja', 'jbo', 'ka', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he', 'iw'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var deprecatedJsonVersions = ['v1', 'v2', 'v3'];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver = function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck__default['default'](this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');

    if ((!this.options.compatibilityJSON || this.options.compatibilityJSON === 'v4') && (typeof Intl === 'undefined' || !Intl.PluralRules)) {
      this.options.compatibilityJSON = 'v3';
      this.logger.error('Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.');
    }

    this.rules = createRules();
  }

  _createClass__default['default'](PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.shouldUseIntlApi()) {
        try {
          return new Intl.PluralRules(code, {
            type: options.ordinal ? 'ordinal' : 'cardinal'
          });
        } catch (_unused) {
          return;
        }
      }

      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (this.shouldUseIntlApi()) {
        return rule && rule.resolvedOptions().pluralCategories.length > 1;
      }

      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.getSuffixes(code, options).map(function (suffix) {
        return "".concat(key).concat(suffix);
      });
    }
  }, {
    key: "getSuffixes",
    value: function getSuffixes(code) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var rule = this.getRule(code, options);

      if (!rule) {
        return [];
      }

      if (this.shouldUseIntlApi()) {
        return rule.resolvedOptions().pluralCategories.sort(function (pluralCategory1, pluralCategory2) {
          return suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2];
        }).map(function (pluralCategory) {
          return "".concat(_this.options.prepend).concat(pluralCategory);
        });
      }

      return rule.numbers.map(function (number) {
        return _this.getSuffix(code, number, options);
      });
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var rule = this.getRule(code, options);

      if (rule) {
        if (this.shouldUseIntlApi()) {
          return "".concat(this.options.prepend).concat(rule.select(count));
        }

        return this.getSuffixRetroCompatible(rule, count);
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }, {
    key: "getSuffixRetroCompatible",
    value: function getSuffixRetroCompatible(rule, count) {
      var _this2 = this;

      var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
      var suffix = rule.numbers[idx];

      if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        if (suffix === 2) {
          suffix = 'plural';
        } else if (suffix === 1) {
          suffix = '';
        }
      }

      var returnSuffix = function returnSuffix() {
        return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
      };

      if (this.options.compatibilityJSON === 'v1') {
        if (suffix === 1) return '';
        if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
        return returnSuffix();
      } else if (this.options.compatibilityJSON === 'v2') {
        return returnSuffix();
      } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
        return returnSuffix();
      }

      return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
    }
  }, {
    key: "shouldUseIntlApi",
    value: function shouldUseIntlApi() {
      return !deprecatedJsonVersions.includes(this.options.compatibilityJSON);
    }
  }]);

  return PluralResolver;
}();

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Interpolator = function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck__default['default'](this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }

  _createClass__default['default'](Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.nestingOptionsSeparator = iOpts.nestingOptionsSeparator ? iOpts.nestingOptionsSeparator : iOpts.nestingOptionsSeparator || ',';
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000;
      this.alwaysFormat = iOpts.alwaysFormat !== undefined ? iOpts.alwaysFormat : false;
      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) {
          var path = getPathWithDefaults(data, defaultData, key);
          return _this.alwaysFormat ? _this.format(path, undefined, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
            interpolationkey: key
          })) : path;
        }

        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPathWithDefaults(data, defaultData, k), f, lng, _objectSpread$3(_objectSpread$3(_objectSpread$3({}, options), data), {}, {
          interpolationkey: k
        }));
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      var skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== undefined ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
      var todos = [{
        regex: this.regexpUnescape,
        safeValue: function safeValue(val) {
          return regexSafe(val);
        }
      }, {
        regex: this.regexp,
        safeValue: function safeValue(val) {
          return _this.escapeValue ? regexSafe(_this.escape(val)) : regexSafe(val);
        }
      }];
      todos.forEach(function (todo) {
        replaces = 0;

        while (match = todo.regex.exec(str)) {
          var matchedVar = match[1].trim();
          value = handleFormat(matchedVar);

          if (value === undefined) {
            if (typeof missingInterpolationHandler === 'function') {
              var temp = missingInterpolationHandler(str, match, options);
              value = typeof temp === 'string' ? temp : '';
            } else if (options && options.hasOwnProperty(matchedVar)) {
              value = '';
            } else if (skipOnVariables) {
              value = match[0];
              continue;
            } else {
              _this.logger.warn("missed to pass in variable ".concat(matchedVar, " for interpolating ").concat(str));

              value = '';
            }
          } else if (typeof value !== 'string' && !_this.useRawValueToEscape) {
            value = makeString(value);
          }

          var safeValue = todo.safeValue(value);
          str = str.replace(match[0], safeValue);

          if (skipOnVariables) {
            todo.regex.lastIndex += value.length;
            todo.regex.lastIndex -= match[0].length;
          } else {
            todo.regex.lastIndex = 0;
          }

          replaces++;

          if (replaces >= _this.maxReplaces) {
            break;
          }
        }
      });
      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var _this2 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread$3({}, options);

      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;

      function handleHasOptions(key, inheritedOptions) {
        var sep = this.nestingOptionsSeparator;
        if (key.indexOf(sep) < 0) return key;
        var c = key.split(new RegExp("".concat(sep, "[ ]*{")));
        var optionsString = "{".concat(c[1]);
        key = c[0];
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread$3(_objectSpread$3({}, inheritedOptions), clonedOptions);
        } catch (e) {
          this.logger.warn("failed parsing options string in nesting for key ".concat(key), e);
          return "".concat(key).concat(sep).concat(optionsString);
        }

        delete clonedOptions.defaultValue;
        return key;
      }

      while (match = this.nestingRegexp.exec(str)) {
        var formatters = [];
        var doReduce = false;

        if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
          var r = match[1].split(this.formatSeparator).map(function (elem) {
            return elem.trim();
          });
          match[1] = r.shift();
          formatters = r;
          doReduce = true;
        }

        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
        if (value && match[0] === str && typeof value !== 'string') return value;
        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        }

        if (doReduce) {
          value = formatters.reduce(function (v, f) {
            return _this2.format(v, f, options.lng, _objectSpread$3(_objectSpread$3({}, options), {}, {
              interpolationkey: match[1].trim()
            }));
          }, value.trim());
        }

        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function parseFormatStr(formatStr) {
  var formatName = formatStr.toLowerCase().trim();
  var formatOptions = {};

  if (formatStr.indexOf('(') > -1) {
    var p = formatStr.split('(');
    formatName = p[0].toLowerCase().trim();
    var optStr = p[1].substring(0, p[1].length - 1);

    if (formatName === 'currency' && optStr.indexOf(':') < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      var opts = optStr.split(';');
      opts.forEach(function (opt) {
        if (!opt) return;

        var _opt$split = opt.split(':'),
            _opt$split2 = _toArray__default['default'](_opt$split),
            key = _opt$split2[0],
            rest = _opt$split2.slice(1);

        var val = rest.join(':').trim().replace(/^'+|'+$/g, '');
        if (!formatOptions[key.trim()]) formatOptions[key.trim()] = val;
        if (val === 'false') formatOptions[key.trim()] = false;
        if (val === 'true') formatOptions[key.trim()] = true;
        if (!isNaN(val)) formatOptions[key.trim()] = parseInt(val, 10);
      });
    }
  }

  return {
    formatName: formatName,
    formatOptions: formatOptions
  };
}

var Formatter = function () {
  function Formatter() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck__default['default'](this, Formatter);

    this.logger = baseLogger.create('formatter');
    this.options = options;
    this.formats = {
      number: function number(val, lng, options) {
        return new Intl.NumberFormat(lng, options).format(val);
      },
      currency: function currency(val, lng, options) {
        return new Intl.NumberFormat(lng, _objectSpread$4(_objectSpread$4({}, options), {}, {
          style: 'currency'
        })).format(val);
      },
      datetime: function datetime(val, lng, options) {
        return new Intl.DateTimeFormat(lng, _objectSpread$4({}, options)).format(val);
      },
      relativetime: function relativetime(val, lng, options) {
        return new Intl.RelativeTimeFormat(lng, _objectSpread$4({}, options)).format(val, options.range || 'day');
      },
      list: function list(val, lng, options) {
        return new Intl.ListFormat(lng, _objectSpread$4({}, options)).format(val);
      }
    };
    this.init(options);
  }

  _createClass__default['default'](Formatter, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var iOpts = options.interpolation;
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
    }
  }, {
    key: "add",
    value: function add(name, fc) {
      this.formats[name.toLowerCase().trim()] = fc;
    }
  }, {
    key: "format",
    value: function format(value, _format, lng, options) {
      var _this = this;

      var formats = _format.split(this.formatSeparator);

      var result = formats.reduce(function (mem, f) {
        var _parseFormatStr = parseFormatStr(f),
            formatName = _parseFormatStr.formatName,
            formatOptions = _parseFormatStr.formatOptions;

        if (_this.formats[formatName]) {
          var formatted = mem;

          try {
            var valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
            var l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
            formatted = _this.formats[formatName](mem, l, _objectSpread$4(_objectSpread$4(_objectSpread$4({}, formatOptions), options), valOptions));
          } catch (error) {
            _this.logger.warn(error);
          }

          return formatted;
        } else {
          _this.logger.warn("there was no format function for ".concat(formatName));
        }

        return mem;
      }, value);
      return result;
    }
  }]);

  return Formatter;
}();

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function removePending(q, name) {
  if (q.pending[name] !== undefined) {
    delete q.pending[name];
    q.pendingCount--;
  }
}

var Connector = function (_EventEmitter) {
  _inherits__default['default'](Connector, _EventEmitter);

  var _super = _createSuper$2(Connector);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck__default['default'](this, Connector);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized__default['default'](_this));
    }

    _this.backend = backend;
    _this.store = store;
    _this.services = services;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.waitingReads = [];
    _this.maxParallelReads = options.maxParallelReads || 10;
    _this.readingCalls = 0;
    _this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    _this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass__default['default'](Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      var toLoad = {};
      var pending = {};
      var toLoadLanguages = {};
      var toLoadNamespaces = {};
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2;
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending[name] === undefined) pending[name] = true;
          } else {
            _this2.state[name] = 1;
            hasAllNamespaces = false;
            if (pending[name] === undefined) pending[name] = true;
            if (toLoad[name] === undefined) toLoad[name] = true;
            if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
          }
        });
        if (!hasAllNamespaces) toLoadLanguages[lng] = true;
      });

      if (Object.keys(toLoad).length || Object.keys(pending).length) {
        this.queue.push({
          pending: pending,
          pendingCount: Object.keys(pending).length,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: Object.keys(toLoad),
        pending: Object.keys(pending),
        toLoadLanguages: Object.keys(toLoadLanguages),
        toLoadNamespaces: Object.keys(toLoadNamespaces)
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      }

      this.state[name] = err ? -1 : 2;
      var loaded = {};
      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        removePending(q, name);
        if (err) q.errors.push(err);

        if (q.pendingCount === 0 && !q.done) {
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = {};
            var loadedKeys = q.loaded[l];

            if (loadedKeys.length) {
              loadedKeys.forEach(function (ns) {
                if (loaded[l][ns] === undefined) loaded[l][ns] = true;
              });
            }
          });
          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      });
      this.emit('loaded', loaded);
      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.retryTimeout;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {});

      if (this.readingCalls >= this.maxParallelReads) {
        this.waitingReads.push({
          lng: lng,
          ns: ns,
          fcName: fcName,
          tried: tried,
          wait: wait,
          callback: callback
        });
        return;
      }

      this.readingCalls++;
      return this.backend[fcName](lng, ns, function (err, data) {
        _this3.readingCalls--;

        if (_this3.waitingReads.length > 0) {
          var next = _this3.waitingReads.shift();

          _this3.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
        }

        if (err && data && tried < _this3.maxRetries) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback();
        return null;
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var s = name.split('|');
      var lng = s[0];
      var ns = s[1];
      this.read(lng, ns, 'read', undefined, undefined, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
        this.logger.warn("did not save key \"".concat(key, "\" as the namespace \"").concat(namespace, "\" was not yet loaded"), 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
        return;
      }

      if (key === undefined || key === null || key === '') return;

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null, _objectSpread$5(_objectSpread$5({}, options), {}, {
          isUpdate: isUpdate
        }));
      }

      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: 'all',
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: 'fallback',
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: true,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof__default['default'](args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof__default['default'](args[2]) === 'object' || _typeof__default['default'](args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng, options) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1000,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

  if (options.supportedLngs && options.supportedLngs.indexOf('cimode') < 0) {
    options.supportedLngs = options.supportedLngs.concat(['cimode']);
  }

  return options;
}

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty__default['default'](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf__default['default'](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default['default'](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default['default'](this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

function bindMemberFunctions(inst) {
  var mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach(function (mem) {
    if (typeof inst[mem] === 'function') {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}

var I18n = function (_EventEmitter) {
  _inherits__default['default'](I18n, _EventEmitter);

  var _super = _createSuper$3(I18n);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck__default['default'](this, I18n);

    _this = _super.call(this);

    if (isIE10) {
      EventEmitter.call(_assertThisInitialized__default['default'](_this));
    }

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };
    bindMemberFunctions(_assertThisInitialized__default['default'](_this));

    if (callback && !_this.isInitialized && !options.isClone) {
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn__default['default'](_this, _assertThisInitialized__default['default'](_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass__default['default'](I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (!options.defaultNS && options.defaultNS !== false && options.ns) {
        if (typeof options.ns === 'string') {
          options.defaultNS = options.ns;
        } else if (options.ns.indexOf('translation') < 0) {
          options.defaultNS = options.ns[0];
        }
      }

      var defOpts = get();
      this.options = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, defOpts), this.options), transformOptions(options));

      if (this.options.compatibilityAPI !== 'v1') {
        this.options.interpolation = _objectSpread$6(_objectSpread$6({}, defOpts.interpolation), this.options.interpolation);
      }

      if (options.keySeparator !== undefined) {
        this.options.userDefinedKeySeparator = options.keySeparator;
      }

      if (options.nsSeparator !== undefined) {
        this.options.userDefinedNsSeparator = options.nsSeparator;
      }

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      }

      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var formatter;

        if (this.modules.formatter) {
          formatter = this.modules.formatter;
        } else if (typeof Intl !== 'undefined') {
          formatter = Formatter;
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });

        if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
          s.formatter = createClassOnDemand(formatter);
          s.formatter.init(s, this.options);
          this.options.interpolation.format = s.formatter.format.bind(s.formatter);
        }

        s.interpolator = new Interpolator(this.options);
        s.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
        };
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options);
        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      }

      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
        var codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
      }

      if (!this.services.languageDetector && !this.options.lng) {
        this.logger.warn('init: no languageDetector is used and no lng is defined');
      }

      var storeApi = ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var storeApiChained = ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'];
      storeApiChained.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store2;

          (_this2$store2 = _this2.store)[fcName].apply(_this2$store2, arguments);

          return _this2;
        };
      });
      var deferred = defer();

      var load = function load() {
        var finish = function finish(err, t) {
          if (_this2.isInitialized && !_this2.initializedStoreOnce) _this2.logger.warn('init: i18next is already initialized. You should call init just once!');
          _this2.isInitialized = true;
          if (!_this2.options.isClone) _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t);
          callback(err, t);
        };

        if (_this2.languages && _this2.options.compatibilityAPI !== 'v1' && !_this2.isInitialized) return finish(null, _this2.t.bind(_this2));

        _this2.changeLanguage(_this2.options.lng, finish);
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
  }, {
    key: "loadResources",
    value: function loadResources(language) {
      var _this3 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var usedCallback = callback;
      var usedLng = typeof language === 'string' ? language : this.language;
      if (typeof language === 'function') usedCallback = language;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (usedLng && usedLng.toLowerCase() === 'cimode') return usedCallback();
        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!usedLng) {
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(usedLng);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, function (e) {
          if (!e && !_this3.resolvedLanguage && _this3.language) _this3.setResolvedLanguage(_this3.language);
          usedCallback(e);
        });
      } else {
        usedCallback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve();
        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
      if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');

      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === 'formatter') {
        this.modules.formatter = module;
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "setResolvedLanguage",
    value: function setResolvedLanguage(l) {
      if (!l || !this.languages) return;
      if (['cimode', 'dev'].indexOf(l) > -1) return;

      for (var li = 0; li < this.languages.length; li++) {
        var lngInLngs = this.languages[li];
        if (['cimode', 'dev'].indexOf(lngInLngs) > -1) continue;

        if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
          this.resolvedLanguage = lngInLngs;
          break;
        }
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      this.isLanguageChangingTo = lng;
      var deferred = defer();
      this.emit('languageChanging', lng);

      var setLngProps = function setLngProps(l) {
        _this4.language = l;
        _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
        _this4.resolvedLanguage = undefined;

        _this4.setResolvedLanguage(l);
      };

      var done = function done(err, l) {
        if (l) {
          setLngProps(l);

          _this4.translator.changeLanguage(l);

          _this4.isLanguageChangingTo = undefined;

          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        } else {
          _this4.isLanguageChangingTo = undefined;
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(lngs) {
        if (!lng && !lngs && _this4.services.languageDetector) lngs = [];
        var l = typeof lngs === 'string' ? lngs : _this4.services.languageUtils.getBestMatchFromCodes(lngs);

        if (l) {
          if (!_this4.language) {
            setLngProps(l);
          }

          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(l, function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns, keyPrefix) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (_typeof__default['default'](opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread$6({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
        var keySeparator = _this5.options.keySeparator || '.';
        var resultKey = options.keyPrefix ? "".concat(options.keyPrefix).concat(keySeparator).concat(key) : key;
        return _this5.t(resultKey, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      fixedT.keyPrefix = keyPrefix;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "hasLoadedNamespace",
    value: function hasLoadedNamespace(ns) {
      var _this6 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.isInitialized) {
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
        return false;
      }

      if (!this.languages || !this.languages.length) {
        this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
        return false;
      }

      var lng = this.resolvedLanguage || this.languages[0];
      var fallbackLng = this.options ? this.options.fallbackLng : false;
      var lastLng = this.languages[this.languages.length - 1];
      if (lng.toLowerCase() === 'cimode') return true;

      var loadNotPending = function loadNotPending(l, n) {
        var loadState = _this6.services.backendConnector.state["".concat(l, "|").concat(n)];

        return loadState === -1 || loadState === 2;
      };

      if (options.precheck) {
        var preResult = options.precheck(this, loadNotPending);
        if (preResult !== undefined) return preResult;
      }

      if (this.hasResourceBundle(lng, ns)) return true;
      if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
      if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
      return false;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this7 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this7.options.ns.indexOf(n) < 0) _this7.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      });

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ug', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam', 'ckb'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this8 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread$6(_objectSpread$6(_objectSpread$6({}, this.options), options), {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this8[m];
      });
      clone.services = _objectSpread$6({}, this.services);
      clone.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options;
      clone.translator.backendConnector.services.utils = {
        hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
      };
      return clone;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        options: this.options,
        store: this.store,
        language: this.language,
        languages: this.languages,
        resolvedLanguage: this.resolvedLanguage
      };
    }
  }]);

  return I18n;
}(EventEmitter);

_defineProperty__default['default'](I18n, "createInstance", function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callback = arguments.length > 1 ? arguments[1] : undefined;
  return new I18n(options, callback);
});

var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;

module.exports = instance;

},{"@babel/runtime/helpers/assertThisInitialized":5,"@babel/runtime/helpers/classCallCheck":6,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/defineProperty":8,"@babel/runtime/helpers/getPrototypeOf":9,"@babel/runtime/helpers/inherits":10,"@babel/runtime/helpers/possibleConstructorReturn":13,"@babel/runtime/helpers/toArray":15,"@babel/runtime/helpers/typeof":16}],3:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],4:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],5:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],6:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],8:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],9:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],10:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":14}],11:[function(require,module,exports){
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],12:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],13:[function(require,module,exports){
var _typeof = require("./typeof.js")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./assertThisInitialized.js":5,"./typeof.js":16}],14:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],15:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":4,"./iterableToArray.js":11,"./nonIterableRest.js":12,"./unsupportedIterableToArray.js":17}],16:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],17:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":3}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = I18nextProvider;

var _react = require("react");

var _context = require("./context");

function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  var value = (0, _react.useMemo)(function () {
    return {
      i18n: i18n,
      defaultNS: defaultNS
    };
  }, [i18n, defaultNS]);
  return (0, _react.createElement)(_context.I18nContext.Provider, {
    value: value
  }, children);
}
},{"./context":21,"react":44}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodesToString = nodesToString;
exports.Trans = Trans;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _htmlParseStringify = _interopRequireDefault(require("html-parse-stringify"));

var _context = require("./context");

var _utils = require("./utils");

var _excluded = ["format"],
    _excluded2 = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hasChildren(node, checkLength) {
  if (!node) return false;
  var base = node.props ? node.props.children : node.children;
  if (checkLength) return base.length > 0;
  return !!base;
}

function getChildren(node) {
  if (!node) return [];
  return node.props ? node.props.children : node.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return (0, _react.isValidElement)(child);
  });
}

function getAsArray(data) {
  return Array.isArray(data) ? data : [data];
}

function mergeProps(source, target) {
  var newTarget = _objectSpread({}, target);

  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
}

function nodesToString(children, i18nOptions) {
  if (!children) return '';
  var stringNode = '';
  var childrenArray = getAsArray(children);
  var keepArray = i18nOptions.transSupportBasicHtmlNodes && i18nOptions.transKeepBasicHtmlNodesFor ? i18nOptions.transKeepBasicHtmlNodesFor : [];
  childrenArray.forEach(function (child, childIndex) {
    if (typeof child === 'string') {
      stringNode += "".concat(child);
    } else if ((0, _react.isValidElement)(child)) {
      var childPropsCount = Object.keys(child.props).length;
      var shouldKeepChild = keepArray.indexOf(child.type) > -1;
      var childChildren = child.props.children;

      if (!childChildren && shouldKeepChild && childPropsCount === 0) {
        stringNode += "<".concat(child.type, "/>");
      } else if (!childChildren && (!shouldKeepChild || childPropsCount !== 0)) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (child.props.i18nIsDynamicList) {
        stringNode += "<".concat(childIndex, "></").concat(childIndex, ">");
      } else if (shouldKeepChild && childPropsCount === 1 && typeof childChildren === 'string') {
        stringNode += "<".concat(child.type, ">").concat(childChildren, "</").concat(child.type, ">");
      } else {
        var content = nodesToString(childChildren, i18nOptions);
        stringNode += "<".concat(childIndex, ">").concat(content, "</").concat(childIndex, ">");
      }
    } else if (child === null) {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a null child.");
    } else if ((0, _typeof2["default"])(child) === 'object') {
      var format = child.format,
          clone = (0, _objectWithoutProperties2["default"])(child, _excluded);
      var keys = Object.keys(clone);

      if (keys.length === 1) {
        var value = format ? "".concat(keys[0], ", ").concat(format) : keys[0];
        stringNode += "{{".concat(value, "}}");
      } else {
        (0, _utils.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return stringNode;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) {
  if (targetString === '') return [];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling) return [targetString];
  var data = {};

  function getData(childs) {
    var childrenArray = getAsArray(childs);
    childrenArray.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2["default"])(child) === 'object' && !(0, _react.isValidElement)(child)) Object.assign(data, child);
    });
  }

  getData(children);

  var ast = _htmlParseStringify["default"].parse("<0>".concat(targetString, "</0>"));

  var opts = _objectSpread(_objectSpread({}, data), combinedTOpts);

  function renderInner(child, node, rootReactNode) {
    var childs = getChildren(child);
    var mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
  }

  function pushTranslatedJSX(child, inner, mem, i, isVoid) {
    if (child.dummy) child.children = inner;
    mem.push((0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
      key: i
    }), isVoid ? undefined : inner));
  }

  function mapAST(reactNode, astNode, rootReactNode) {
    var reactNodes = getAsArray(reactNode);
    var astNodes = getAsArray(astNode);
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);

      if (node.type === 'tag') {
        var tmp = reactNodes[parseInt(node.name, 10)];
        if (!tmp && rootReactNode.length === 1 && rootReactNode[0][node.name]) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        var child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        var isElement = (0, _react.isValidElement)(child);
        var isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        var isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0, _typeof2["default"])(child) === 'object' && child.dummy && !isElement;
        var isKnownComponent = (0, _typeof2["default"])(children) === 'object' && children !== null && Object.hasOwnProperty.call(children, node.name);

        if (typeof child === 'string') {
          var value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
            var inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i);
          } else if (isEmptyTransWithHTML) {
          var _inner = mapAST(reactNodes, node.children, rootReactNode);

          mem.push((0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), _inner));
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            var _inner2 = renderInner(child, node, rootReactNode);

            pushTranslatedJSX(child, _inner2, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push((0, _react.createElement)(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner3 = mapAST(reactNodes, node.children, rootReactNode);

              mem.push((0, _react.createElement)(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner3));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner4 = mapAST(reactNodes, node.children, rootReactNode);

            mem.push("<".concat(node.name, ">").concat(_inner4, "</").concat(node.name, ">"));
          }
        } else if ((0, _typeof2["default"])(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          mem.push((0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          }), translationContent));
        } else {
          mem.push((0, _react.cloneElement)(child, _objectSpread(_objectSpread({}, child.props), {}, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        var wrapTextNodes = i18nOptions.transWrapTextNodes;

        var _content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);

        if (wrapTextNodes) {
          mem.push((0, _react.createElement)(wrapTextNodes, {
            key: "".concat(node.name, "-").concat(i)
          }, _content));
        } else {
          mem.push(_content);
        }
      }

      return mem;
    }, []);
  }

  var result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      context = _ref.context,
      _ref$tOptions = _ref.tOptions,
      tOptions = _ref$tOptions === void 0 ? {} : _ref$tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      shouldUnescape = _ref.shouldUnescape,
      additionalProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded2);

  var _ref2 = (0, _react.useContext)(_context.I18nContext) || {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need to pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  if (context) tOptions.context = context;

  var reactI18nextOptions = _objectSpread(_objectSpread({}, (0, _context.getDefaults)()), i18n.options && i18n.options.react);

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString(children, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? tOptions.interpolation : {
    interpolation: _objectSpread(_objectSpread({}, tOptions.interpolation), {}, {
      prefix: '#$?',
      suffix: '?$#'
    })
  };

  var combinedTOpts = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, tOptions), {}, {
    count: count
  }, values), interpolationOverride), {}, {
    defaultValue: defaultValue,
    ns: namespaces
  });

  var translation = key ? t(key, combinedTOpts) : defaultValue;
  var content = renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent;
  return useAsParent ? (0, _react.createElement)(useAsParent, additionalProps, content) : content;
}
},{"./context":21,"./utils":26,"@babel/runtime/helpers/defineProperty":33,"@babel/runtime/helpers/interopRequireDefault":34,"@babel/runtime/helpers/objectWithoutProperties":37,"@babel/runtime/helpers/typeof":40,"html-parse-stringify":1,"react":44}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translation = Translation;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _useTranslation3 = require("./useTranslation");

var _excluded = ["ns", "children"];

function Translation(props) {
  var ns = props.ns,
      children = props.children,
      options = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useTranslation = (0, _useTranslation3.useTranslation)(ns, options),
      _useTranslation2 = (0, _slicedToArray2["default"])(_useTranslation, 3),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1],
      ready = _useTranslation2[2];

  return children(t, {
    i18n: i18n,
    lng: i18n.language
  }, ready);
}
},{"./useTranslation":25,"@babel/runtime/helpers/interopRequireDefault":34,"@babel/runtime/helpers/objectWithoutProperties":37,"@babel/runtime/helpers/slicedToArray":39}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDefaults = setDefaults;
exports.getDefaults = getDefaults;
exports.setI18n = setI18n;
exports.getI18n = getI18n;
exports.composeInitialProps = composeInitialProps;
exports.getInitialProps = getInitialProps;
exports.initReactI18next = exports.ReportNamespaces = exports.I18nContext = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _unescape = require("./unescape");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape: _unescape.unescape
};
var i18nInstance;
var I18nContext = (0, _react.createContext)();
exports.I18nContext = I18nContext;

function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
}

function getDefaults() {
  return defaultOptions;
}

var ReportNamespaces = function () {
  function ReportNamespaces() {
    (0, _classCallCheck2["default"])(this, ReportNamespaces);
    this.usedNamespaces = {};
  }

  (0, _createClass2["default"])(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);
  return ReportNamespaces;
}();

exports.ReportNamespaces = ReportNamespaces;

function setI18n(instance) {
  i18nInstance = instance;
}

function getI18n() {
  return i18nInstance;
}

var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
exports.initReactI18next = initReactI18next;

function composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve(_objectSpread(_objectSpread({}, componentsInitialProps), i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  };
}

function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}
},{"./unescape":23,"@babel/runtime/helpers/classCallCheck":31,"@babel/runtime/helpers/createClass":32,"@babel/runtime/helpers/defineProperty":33,"@babel/runtime/helpers/interopRequireDefault":34,"react":44}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.Trans;
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _useTranslation.useTranslation;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _withTranslation.withTranslation;
  }
});
Object.defineProperty(exports, "Translation", {
  enumerable: true,
  get: function get() {
    return _Translation.Translation;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _I18nextProvider.I18nextProvider;
  }
});
Object.defineProperty(exports, "withSSR", {
  enumerable: true,
  get: function get() {
    return _withSSR.withSSR;
  }
});
Object.defineProperty(exports, "useSSR", {
  enumerable: true,
  get: function get() {
    return _useSSR.useSSR;
  }
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _context.I18nContext;
  }
});
Object.defineProperty(exports, "initReactI18next", {
  enumerable: true,
  get: function get() {
    return _context.initReactI18next;
  }
});
Object.defineProperty(exports, "setDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setDefaults;
  }
});
Object.defineProperty(exports, "getDefaults", {
  enumerable: true,
  get: function get() {
    return _context.getDefaults;
  }
});
Object.defineProperty(exports, "setI18n", {
  enumerable: true,
  get: function get() {
    return _context.setI18n;
  }
});
Object.defineProperty(exports, "getI18n", {
  enumerable: true,
  get: function get() {
    return _context.getI18n;
  }
});
Object.defineProperty(exports, "composeInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.composeInitialProps;
  }
});
Object.defineProperty(exports, "getInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.getInitialProps;
  }
});
exports.selectOrdinal = exports.plural = exports.select = exports.number = exports.time = exports.date = void 0;

var _Trans = require("./Trans");

var _useTranslation = require("./useTranslation");

var _withTranslation = require("./withTranslation");

var _Translation = require("./Translation");

var _I18nextProvider = require("./I18nextProvider");

var _withSSR = require("./withSSR");

var _useSSR = require("./useSSR");

var _context = require("./context");

var date = function date() {
  return '';
};

exports.date = date;

var time = function time() {
  return '';
};

exports.time = time;

var number = function number() {
  return '';
};

exports.number = number;

var select = function select() {
  return '';
};

exports.select = select;

var plural = function plural() {
  return '';
};

exports.plural = plural;

var selectOrdinal = function selectOrdinal() {
  return '';
};

exports.selectOrdinal = selectOrdinal;
},{"./I18nextProvider":18,"./Trans":19,"./Translation":20,"./context":21,"./useSSR":24,"./useTranslation":25,"./withSSR":27,"./withTranslation":28}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unescape = void 0;
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};

var unescapeHtmlEntity = function unescapeHtmlEntity(m) {
  return htmlEntities[m];
};

var unescape = function unescape(text) {
  return text.replace(matchHtmlEntity, unescapeHtmlEntity);
};

exports.unescape = unescape;
},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSSR = useSSR;

var _react = require("react");

var _context = require("./context");

function useSSR(initialI18nStore, initialLanguage) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0, _react.useContext)(_context.I18nContext) || {},
      i18nFromContext = _ref.i18n;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  if (i18n.options && i18n.options.isClone) return;

  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.options.ns = Object.values(initialI18nStore).reduce(function (mem, lngResources) {
      Object.keys(lngResources).forEach(function (ns) {
        if (mem.indexOf(ns) < 0) mem.push(ns);
      });
      return mem;
    }, i18n.options.ns);
    i18n.initializedStoreOnce = true;
    i18n.isInitialized = true;
  }

  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
}
},{"./context":21,"react":44}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = useTranslation;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _context = require("./context");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var usePrevious = function usePrevious(value, ignore) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};

function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0, _react.useContext)(_context.I18nContext) || {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context.ReportNamespaces();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need to pass in an i18next instance by using initReactI18next');

    var notReadyT = function notReadyT(k) {
      return Array.isArray(k) ? k[k.length - 1] : k;
    };

    var retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  if (i18n.options.react && i18n.options.react.wait !== undefined) (0, _utils.warnOnce)('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');

  var i18nOptions = _objectSpread(_objectSpread(_objectSpread({}, (0, _context.getDefaults)()), i18n.options.react), props);

  var useSuspense = i18nOptions.useSuspense,
      keyPrefix = i18nOptions.keyPrefix;
  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces);
  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0, _utils.hasLoadedNamespace)(n, i18n, i18nOptions);
  });

  function getT() {
    return i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  }

  var _useState = (0, _react.useState)(getT),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1];

  var joinedNS = namespaces.join();
  var previousJoinedNS = usePrevious(joinedNS);
  var isMounted = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore;
    isMounted.current = true;

    if (!ready && !useSuspense) {
      (0, _utils.loadNamespaces)(i18n, namespaces, function () {
        if (isMounted.current) setT(getT);
      });
    }

    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getT);
    }

    function boundReset() {
      if (isMounted.current) setT(getT);
    }

    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset);
    return function () {
      isMounted.current = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [i18n, joinedNS]);
  var isInitial = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isMounted.current && !isInitial.current) {
      setT(getT);
    }

    isInitial.current = false;
  }, [i18n, keyPrefix]);
  var ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(function (resolve) {
    (0, _utils.loadNamespaces)(i18n, namespaces, function () {
      resolve();
    });
  });
}
},{"./context":21,"./utils":26,"@babel/runtime/helpers/defineProperty":33,"@babel/runtime/helpers/interopRequireDefault":34,"@babel/runtime/helpers/slicedToArray":39,"react":44}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnOnce = warnOnce;
exports.loadNamespaces = loadNamespaces;
exports.hasLoadedNamespace = hasLoadedNamespace;
exports.getDisplayName = getDisplayName;

function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}

var alreadyWarned = {};

function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
}

function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}

function oldI18nextHasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1];
  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  };

  if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18n.services.backendConnector.backend && i18n.isLanguageChangingTo && !loadNotPending(i18n.isLanguageChangingTo, ns)) return false;
  if (i18n.hasResourceBundle(lng, ns)) return true;
  if (!i18n.services.backendConnector.backend || i18n.options.resources && !i18n.options.partialBundledLanguages) return true;
  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function hasLoadedNamespace(ns, i18n) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var isNewerI18next = i18n.options.ignoreJSONStructure !== undefined;

  if (!isNewerI18next) {
    return oldI18nextHasLoadedNamespace(ns, i18n, options);
  }

  return i18n.hasLoadedNamespace(ns, {
    precheck: function precheck(i18nInstance, loadNotPending) {
      if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}
},{}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSSR = withSSR;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _useSSR = require("./useSSR");

var _context = require("./context");

var _utils = require("./utils");

var _excluded = ["initialI18nStore", "initialLanguage"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withSSR() {
  return function Extend(WrappedComponent) {
    function I18nextWithSSR(_ref) {
      var initialI18nStore = _ref.initialI18nStore,
          initialLanguage = _ref.initialLanguage,
          rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
      (0, _useSSR.useSSR)(initialI18nStore, initialLanguage);
      return (0, _react.createElement)(WrappedComponent, _objectSpread({}, rest));
    }

    I18nextWithSSR.getInitialProps = (0, _context.composeInitialProps)(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}
},{"./context":21,"./useSSR":24,"./utils":26,"@babel/runtime/helpers/defineProperty":33,"@babel/runtime/helpers/interopRequireDefault":34,"@babel/runtime/helpers/objectWithoutProperties":37,"react":44}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslation = withTranslation;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _useTranslation3 = require("./useTranslation");

var _utils = require("./utils");

var _excluded = ["forwardedRef"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(_ref) {
      var forwardedRef = _ref.forwardedRef,
          rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

      var _useTranslation = (0, _useTranslation3.useTranslation)(ns, _objectSpread(_objectSpread({}, rest), {}, {
        keyPrefix: options.keyPrefix
      })),
          _useTranslation2 = (0, _slicedToArray2["default"])(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

      var passDownProps = _objectSpread(_objectSpread({}, rest), {}, {
        t: t,
        i18n: i18n,
        tReady: ready
      });

      if (options.withRef && forwardedRef) {
        passDownProps.ref = forwardedRef;
      } else if (!options.withRef && forwardedRef) {
        passDownProps.forwardedRef = forwardedRef;
      }

      return (0, _react.createElement)(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;

    var forwardRef = function forwardRef(props, ref) {
      return (0, _react.createElement)(I18nextWithTranslation, Object.assign({}, props, {
        forwardedRef: ref
      }));
    };

    return options.withRef ? (0, _react.forwardRef)(forwardRef) : I18nextWithTranslation;
  };
}
},{"./useTranslation":25,"./utils":26,"@babel/runtime/helpers/defineProperty":33,"@babel/runtime/helpers/interopRequireDefault":34,"@babel/runtime/helpers/objectWithoutProperties":37,"@babel/runtime/helpers/slicedToArray":39,"react":44}],29:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],30:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],31:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],32:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7}],33:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],34:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],35:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],36:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],37:[function(require,module,exports){
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./objectWithoutPropertiesLoose.js":38}],38:[function(require,module,exports){
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],39:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":30,"./iterableToArrayLimit.js":35,"./nonIterableRest.js":36,"./unsupportedIterableToArray.js":41}],40:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],41:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"./arrayLikeToArray.js":29,"dup":17}],42:[function(require,module,exports){
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if ("development" !== "production") {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var ReactVersion = '18.2.0';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: null
};

var ReactCurrentActQueue = {
  current: null,
  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
  isBatchingLegacy: false,
  didScheduleLegacyUpdate: false
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }
}
function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var assign = Object.assign;

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
  }

  var propName; // Original props are copied

  var props = assign({}, element.props); // Reserved names are extracted

  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    {
      checkKeyStringCoercion(element.key);
    }

    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        {
          // The `if` statement here prevents auto-disabling of the safe
          // coercion ESLint rule, so we must manually disable it below.
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
            checkKeyStringCoercion(mappedChild.key);
          }
        }

        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        // eslint-disable-next-line react-internal/safe-string-coercion
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      // eslint-disable-next-line react-internal/safe-string-coercion
      var childrenString = String(children);
      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    throw new Error('React.Children.only expected to receive a single React element child.');
  }

  return children;
}

function createContext(defaultValue) {
  // TODO: Second argument used to be an optional `calculateChangedBits`
  // function. Warn to reserve for future use?
  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null,
    // Add these to use same hidden class in VM as ServerContext
    _defaultValue: null,
    _globalName: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.
    // This might throw either because it's missing or throws. If so, we treat it
    // as still uninitialized and try again next time. Which is the same as what
    // happens if the ctor or any wrappers processing the ctor throws. This might
    // end up fixing it if the resolution was a concurrency bug.

    thenable.then(function (moduleObject) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = moduleObject;
      }
    }, function (error) {
      if (payload._status === Pending || payload._status === Uninitialized) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });

    if (payload._status === Uninitialized) {
      // In case, we're still uninitialized, then we're waiting for the thenable
      // to resolve. Set it as pending in the meantime.
      var pending = payload;
      pending._status = Pending;
      pending._result = thenable;
    }
  }

  if (payload._status === Resolved) {
    var moduleObject = payload._result;

    {
      if (moduleObject === undefined) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
      }
    }

    {
      if (!('default' in moduleObject)) {
        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
      }
    }

    return moduleObject.default;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: Uninitialized,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.forwardRef((props, ref) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!render.name && !render.displayName) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name; // The inner component shouldn't inherit this display name in most cases,
        // because the component may be used elsewhere.
        // But it's nice for anonymous functions to inherit the name,
        // so that our component-stack generation logic will display their frames.
        // An anonymous function generally suggests a pattern like:
        //   React.memo((props) => {...});
        // This kind of inner function is not used elsewhere so the side effect is okay.

        if (!type.name && !type.displayName) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  } // Will result in a null access error if accessed outside render phase. We
  // intentionally don't throw our own error because this is in a hot path.
  // Also helps ensure this is inlined.


  return dispatcher;
}
function useContext(Context) {
  var dispatcher = resolveDispatcher();

  {
    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useInsertionEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useInsertionEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
function useTransition() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition();
}
function useDeferredValue(value) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value);
}
function useId() {
  var dispatcher = resolveDispatcher();
  return dispatcher.useId();
}
function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

function startTransition(scope, options) {
  var prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  var currentTransition = ReactCurrentBatchConfig.transition;

  {
    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
  }

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.transition = prevTransition;

    {
      if (prevTransition === null && currentTransition._updatedFibers) {
        var updatedFibersCount = currentTransition._updatedFibers.size;

        if (updatedFibersCount > 10) {
          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
        }

        currentTransition._updatedFibers.clear();
      }
    }
  }
}

var didWarnAboutMessageChannel = false;
var enqueueTaskImpl = null;
function enqueueTask(task) {
  if (enqueueTaskImpl === null) {
    try {
      // read require off the module object to get around the bundlers.
      // we don't want them to detect a require and bundle a Node polyfill.
      var requireString = ('require' + Math.random()).slice(0, 7);
      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
      // version of setImmediate, bypassing fake timers if any.

      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
    } catch (_err) {
      // we're in a browser
      // we can't use regular timers because they may still be faked
      // so we try MessageChannel+postMessage instead
      enqueueTaskImpl = function (callback) {
        {
          if (didWarnAboutMessageChannel === false) {
            didWarnAboutMessageChannel = true;

            if (typeof MessageChannel === 'undefined') {
              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
            }
          }
        }

        var channel = new MessageChannel();
        channel.port1.onmessage = callback;
        channel.port2.postMessage(undefined);
      };
    }
  }

  return enqueueTaskImpl(task);
}

var actScopeDepth = 0;
var didWarnNoAwaitAct = false;
function act(callback) {
  {
    // `act` calls can be nested, so we track the depth. This represents the
    // number of `act` scopes on the stack.
    var prevActScopeDepth = actScopeDepth;
    actScopeDepth++;

    if (ReactCurrentActQueue.current === null) {
      // This is the outermost `act` scope. Initialize the queue. The reconciler
      // will detect the queue and use it instead of Scheduler.
      ReactCurrentActQueue.current = [];
    }

    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
    var result;

    try {
      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
      // set to `true` while the given callback is executed, not for updates
      // triggered during an async event, because this is how the legacy
      // implementation of `act` behaved.
      ReactCurrentActQueue.isBatchingLegacy = true;
      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
      // which flushed updates immediately after the scope function exits, even
      // if it's an async function.

      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
        var queue = ReactCurrentActQueue.current;

        if (queue !== null) {
          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
          flushActQueue(queue);
        }
      }
    } catch (error) {
      popActScope(prevActScopeDepth);
      throw error;
    } finally {
      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
    }

    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
      // for it to resolve before exiting the current scope.

      var wasAwaited = false;
      var thenable = {
        then: function (resolve, reject) {
          wasAwaited = true;
          thenableResult.then(function (returnValue) {
            popActScope(prevActScopeDepth);

            if (actScopeDepth === 0) {
              // We've exited the outermost act scope. Recursively flush the
              // queue until there's no remaining work.
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }, function (error) {
            // The callback threw an error.
            popActScope(prevActScopeDepth);
            reject(error);
          });
        }
      };

      {
        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
          // eslint-disable-next-line no-undef
          Promise.resolve().then(function () {}).then(function () {
            if (!wasAwaited) {
              didWarnNoAwaitAct = true;

              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
            }
          });
        }
      }

      return thenable;
    } else {
      var returnValue = result; // The callback is not an async function. Exit the current scope
      // immediately, without awaiting.

      popActScope(prevActScopeDepth);

      if (actScopeDepth === 0) {
        // Exiting the outermost act scope. Flush the queue.
        var _queue = ReactCurrentActQueue.current;

        if (_queue !== null) {
          flushActQueue(_queue);
          ReactCurrentActQueue.current = null;
        } // Return a thenable. If the user awaits it, we'll flush again in
        // case additional work was scheduled by a microtask.


        var _thenable = {
          then: function (resolve, reject) {
            // Confirm we haven't re-entered another `act` scope, in case
            // the user does something weird like await the thenable
            // multiple times.
            if (ReactCurrentActQueue.current === null) {
              // Recursively flush the queue until there's no remaining work.
              ReactCurrentActQueue.current = [];
              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            } else {
              resolve(returnValue);
            }
          }
        };
        return _thenable;
      } else {
        // Since we're inside a nested `act` scope, the returned thenable
        // immediately resolves. The outer scope will flush the queue.
        var _thenable2 = {
          then: function (resolve, reject) {
            resolve(returnValue);
          }
        };
        return _thenable2;
      }
    }
  }
}

function popActScope(prevActScopeDepth) {
  {
    if (prevActScopeDepth !== actScopeDepth - 1) {
      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
    }

    actScopeDepth = prevActScopeDepth;
  }
}

function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
  {
    var queue = ReactCurrentActQueue.current;

    if (queue !== null) {
      try {
        flushActQueue(queue);
        enqueueTask(function () {
          if (queue.length === 0) {
            // No additional work was scheduled. Finish.
            ReactCurrentActQueue.current = null;
            resolve(returnValue);
          } else {
            // Keep flushing work until there's none left.
            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
          }
        });
      } catch (error) {
        reject(error);
      }
    } else {
      resolve(returnValue);
    }
  }
}

var isFlushing = false;

function flushActQueue(queue) {
  {
    if (!isFlushing) {
      // Prevent re-entrance.
      isFlushing = true;
      var i = 0;

      try {
        for (; i < queue.length; i++) {
          var callback = queue[i];

          do {
            callback = callback(true);
          } while (callback !== null);
        }

        queue.length = 0;
      } catch (error) {
        // If something throws, leave the remaining callbacks on the queue.
        queue = queue.slice(i + 1);
        throw error;
      } finally {
        isFlushing = false;
      }
    }
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.startTransition = startTransition;
exports.unstable_act = act;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useDeferredValue = useDeferredValue;
exports.useEffect = useEffect;
exports.useId = useId;
exports.useImperativeHandle = useImperativeHandle;
exports.useInsertionEffect = useInsertionEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.useSyncExternalStore = useSyncExternalStore;
exports.useTransition = useTransition;
exports.version = ReactVersion;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}

},{}],43:[function(require,module,exports){
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";

},{}],44:[function(require,module,exports){
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

},{"./cjs/react.development.js":42,"./cjs/react.production.min.js":43}],45:[function(require,module,exports){
/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};

},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LANGS_TYPES = exports.LANG = exports.TEST_END = void 0;
var TEST_END = "test_end";
exports.TEST_END = TEST_END;
var LANG = 'lang';
exports.LANG = LANG;
var LANGS_TYPES = {
  UA: 'ua',
  EN: 'en',
  RU: 'ru'
};
exports.LANGS_TYPES = LANGS_TYPES;

},{}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLANET_ENDPOINT_COURSE = exports.PLANET_ENDPOINT_CONTACT = exports.PLANET_ENDPOINT = exports.PLANET_HOST = void 0;
var PLANET_HOST = window.DEVELOPMENT_MODE ? window.location.origin : "https://planetaemailsender.azurewebsites.net";
exports.PLANET_HOST = PLANET_HOST;
var PLANET_ENDPOINT = "".concat(PLANET_HOST, "/result");
exports.PLANET_ENDPOINT = PLANET_ENDPOINT;
var PLANET_ENDPOINT_CONTACT = "".concat(PLANET_HOST, "/contact");
exports.PLANET_ENDPOINT_CONTACT = PLANET_ENDPOINT_CONTACT;
var PLANET_ENDPOINT_COURSE = "".concat(PLANET_HOST, "/course");
exports.PLANET_ENDPOINT_COURSE = PLANET_ENDPOINT_COURSE;

},{}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMAIL_REGEX = exports.PHONE_REGEX = void 0;
var PHONE_REGEX = /(\(\d{3}\)) \d{3} \d{2} \d{2}/;
exports.PHONE_REGEX = PHONE_REGEX;
var EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
exports.EMAIL_REGEX = EMAIL_REGEX;

},{}],49:[function(require,module,exports){
module.exports={
    "mainPage": "Main",
    "testPage": "Test",
    "servicesPage": "Services",
    "reviewsPage": "Reviews",
    "booksPage": "Books",
    "aboutUsPage": "About Us",
    "contactPage": "Contacts"
}
},{}],50:[function(require,module,exports){
module.exports={
    "mainPage": "Главная",
    "testPage": "Тест",
    "servicesPage": "Услуги",
    "reviewsPage": "Отзывы",
    "booksPage": "Книги",
    "aboutUsPage": "О нас",
    "contactPage": "Контакты",
    "startTest": "Пройти тест",
    "learnMore": "Узнать больше",
    "readMore": "Читать далее",
    "signUp": "ЗАПИСАТЬСЯ",
    "visitSite": "ПОСЕТИТЬ САЙТ",
    "proceed": "Продолжить",
    "send": "Отправить",
    "testingTitle": "Тестирование",
    "programTitle": "Программа",
    "trackUs": "Подпишитесь на нас:",
    "connectWithUs": "Связаться с нами:",
    "ourPhones": "Наши телефоны:",
    "youWillLearn": "На этом курсе вы узнаете:",
    "reviews": "Отзывы",
    "сourseDuration": "Длительность курса:",
    "weeks": "2 недели",
    "schedule": "График:",
    "individual": "Индивидуальный",
    "theory": "Теория",
    "practice": "Практика",
    "formNameTitle": "Имя*",
    "formSubNameTitle": "Фамилия*",
    "formPhoneTitle": "Телефон*",
    "formEmailTitle": "Электронная почта",
    "formMessTitle": "Ваше сообщение",
    "formMessPlace": "Напишите сообщение",
    "formErrorName": "Введите ваше имя",
    "formErrorSubName": "Введите ваше фамилию",
    "formErrorPhone": "Введите корректно ваш номер телефона",
    "formErrorEmail": "Введите корректно ваш email",
    "formError": "Произошла неизвестная ошибка. Повторите попытку позже!",
    "readMoreArrows": "Читать далее <svg viewBox='0 0 16 12' xmlns='http://www.w3.org/2000/svg'><path d='M9.71725 1.95203C9.37554 1.61032 9.37554 1.0563 9.71725 0.714592C10.059 0.372887 10.6129 0.372887 10.9546 0.714592L15.6213 5.38129C15.963 5.72301 15.963 6.27694 15.6213 6.61866L10.9546 11.2853C10.6129 11.627 10.059 11.627 9.71725 11.2853C9.37554 10.9436 9.37554 10.3897 9.71725 10.048L12.8901 6.87498H1.58594C1.10269 6.87498 0.710938 6.48321 0.710938 5.99998C0.710938 5.51674 1.10269 5.12498 1.58594 5.12498H12.8901L9.71725 1.95203Z'/></svg>",

    "mainPageTitle": "Группа “Планета”",
    "mainPageSubTitle": "Мы команда профессионалов, специализирующихся на предоставлении душевного здоровья, самосовершествования и личной мотивации",

    "mainPageMissionSubTitle": "Наша миссия",
    "mainPageMissionTitle": "<i class='tex'><img class='text-line' src='./images/text-line.svg' alt='img-line'>Усиление владельцев,</i> руководителей <br> и их окружения посредством увеличения обьема жизненной силы",

    "mainPageCartsTitle1": "Пройдите Оксфордский Тест",
    "mainPageCartsDes1": "Вы – уникальный человек с присущими лишь вам личностными качествами. Некоторые из этих качеств помогают вам добиваться большего в жизни, в то время как другие мешают вам и не позволяют полностью ...",
    "mainPageCartsDes2": "Помощь с улучшением бизнеса путем общения и доведением дела до конца. <br> Мы приедем и поможем провести Ваших сотрудников по этому курсу. Вам не надо отрывать их от работы ...",

    "mainPageHistoryTitle": "Наша история",

    "testPageSecMainTitle": "Оксфордский тест",
    "testPageSecMainSubTitle": "Чтоб узнать узнать о своих способностях пройдите бесплатный Оксфордский тест оценки личности!",

    "testPageMainTitle": "Оксфордский тест <br> анализа личности",

    "testPageText1Title": "Немного О Тесте",
    "testPageText1Des": "Вы – уникальный человек с присущими лишь вам личностными качествами. Некоторые из этих качеств помогают вам добиваться большего в жизни, в то время как другие мешают вам и не позволяют полностью реализовать свой истинный потенциал. <br> <br> Ваши личностные качества определяют ваш будущий успех и счастье. Начиная с 1960 года «Оксфордский тест анализа личности» прошли с пользой для себя миллионы людей. Это единственный в своём роде тест, который предоставляет точный анализ.",

    "testPageText2Title": "Познайте настоящего себя",
    "testPageText2Des": "Нас часто учат тому, что личность – это набор генетических черт, которые невозможно изменить, так что вам просто остаётся научиться «жить с этим». Это попросту неправда. На самом деле вы можете изменить свои личностные качества и стать намного лучше и счастливее, чтобы справляться с проблемами в жизни уверенно и легко, будучи поистине самим собой.",
    "testPageText2List1": "Узнайте свои проблемные области и выясните, каков ваш уровень счастья, уверенности в себе, стабильности, а также многое другое.",
    "testPageText2List2": "Узнайте, как ваши личные качества влияют на вашу способность поддерживать отношения с другими людьми.",
    "testPageText2List3": "Узнайте, каковы ваши сильные стороны и как их укрепить, чтобы вы могли добиваться в жизни большего.",

    "testPageText3Title": "Что будет после пройдения теста?",
    "testPageText3Des": "После Теста наши специалисты свяжутся с Вами удобным для вас способом (по телефону, Zoom или Skype). Будет проведена бесплатная личная консультация в ходе которой из результатов теста будут даны практические рекомендации которые соответствуют вашим требованиям. Результаты теста выявят ваше мнение о себе.",
    
    "managementPageMainSubTitle": "Помощь с улучшением бизнеса путем общения и доведением дела до конца",
    "managementPageTeamTitle": "Команда наших специалистов готова приехать к вам",
    "managementPageTeamDes": "Мы приедем и поможем провести Ваших сотрудников по этому курсу. Вам не надо отрывать их от работы и организовать их приезд - мы приедем к Вам сами.",

    "managementPageWhoTitle": "<span>Кому подходит</span> этот курс",
    "managementPageWhoSubTitle": "Всем, для кого важно получать результат и эффективно общаться с людьми в бизнесе",
    "managementPageWhoList1": "Собственнику бизнеса",
    "managementPageWhoList2": "ТОП-менеджеру",
    "managementPageWhoList3": "Предпринимателю",
    "managementPageWhoList4": "Менеджеру среднего звена",
    "managementPageWhoList5": "Руководителю отдела продаж",
    "managementPageWhoList6": "HR-менеджеру",
    "managementPageWhoList7": "Руководителю проектов",
    "managementPageWhoList8": "Менеджеру по работе с клиентами",

    "managementPageDiscoutTitle": "Запишись сейчас <br> и получи <span>скидку 15%</span>",

    "managementPageBusinessBlock1Title": "Как довести дело до конца",
    "managementPageBusinessBlock1SubTitle": "Навыки, приобретенные в конце курсa:",
    "managementPageBusinessBlock1List1": "Доводить работу группы до конца",
    "managementPageBusinessBlock1List2": "Пресекать на корню искажения Ваших распоряжений",
    "managementPageBusinessBlock1List3": "Добиваться выполнения приказов и просьб без задержек",
    "managementPageBusinessBlock1List4": "Делегировать и точно знать, что задача будет выполнена",
    "managementPageBusinessBlock1List5": "Не допускать неправильного выполнения задачи, поставленной другому человеку",
    "managementPageBusinessBlock1List6": "Добиваться быстрого и корректного предоставления информации от группы людей",
    "managementPageBusinessBlock1List7": "Комфортно чувствовать себя в своем рабочем окружении и с легкостью контролировать его",
    "managementPageBusinessBlock1List8": "Добиваться, чтобы задача была выполнена, несмотря на то, что другие люди создают помехи и не хотят этого делать",

    "managementPageBusinessBlock2Title": "Улучшение бизнеса путем общения",
    "managementPageBusinessBlock2SubTitle": "Навыки, приобретенные в конце курсa:",
    "managementPageBusinessBlock2List1": "Hачать разговор с любым человеком",
    "managementPageBusinessBlock2List2": "Доносить свое сообщения до другого человека, несмотря на помехи",
    "managementPageBusinessBlock2List3": "Вернуть человека к теме разговора",
    "managementPageBusinessBlock2List4": "Разговорить человека, не желающего общаться",
    "managementPageBusinessBlock2List5": "Перевести разговор на другую тему",
    "managementPageBusinessBlock2List6": "Прекратить расспросы, когда есть дела поважнее",
    "managementPageBusinessBlock2List7": "Добиться ответа на вопрос",
    "managementPageBusinessBlock2List8": "Устранить расстройство, возникшее в ходе общения",
    "managementPageBusinessBlock2List9": "Добиваться, чтобы другой человек продолжал говорить, а не замыкался и прекращал общение",
    "managementPageBusinessBlock2List10": "Завершить разговор так, чтоб все остались довольны общением",

    "managementPageEducationTitle": "Как проходит обучение:",
    "managementPageEducationDes": "Наш курс расчитан на отработку в парах и группах. Чем больше будет ваша группа, тем веселее, и тем слажаннее эти ребята будут в дальнейшем выполнять командные задачи!",
    "managementPageHoldingDes1": "<span>«SotnikovGroup»</span> — это одно из направлений холдинга. Холдингу 25 лет, в нем работает более 350 сотрудников.",
    "managementPageHoldingDes2": "<span>Цель «SotnikovGroup»</span> — помогать владельцам, Исполнительным директорам и ТОП-менеджерам компаний выводить их бизнесы на новый уровень развития, осуществляя переход от «семейных компаний» к «системному бизнесу».",
    "managementPageHoldingName": "Евгений Сотников",
    "managementPageHoldingPosition": "Владелец холдинга «Sotnikovgroup»",

    "managementPageFormTitle": "Записаться на курс",

    "secricePageNav1Title": "Ремонт жизни <svg viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'><path d='M5.99 7.425L11.2931 2.12103C11.6835 1.73054 11.6835 1.09749 11.293 0.707029C10.9025 0.316548 10.2695 0.316548 9.87897 0.70703L5.986 4.6L2.09973 0.707808C1.7095 0.316984 1.07626 0.316742 0.685731 0.707269C0.295414 1.09759 0.295414 1.73041 0.685731 2.12073L5.99 7.425Z'/></svg>",

    "secricePageNav2Title": "Программа «Очищение» <svg viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'><path d='M5.99 7.425L11.2931 2.12103C11.6835 1.73054 11.6835 1.09749 11.293 0.707029C10.9025 0.316548 10.2695 0.316548 9.87897 0.70703L5.986 4.6L2.09973 0.707808C1.7095 0.316984 1.07626 0.316742 0.685731 0.707269C0.295414 1.09759 0.295414 1.73041 0.685731 2.12073L5.99 7.425Z'/></svg>",

    "secricePageNav3Title": "Курсы по улучшению жизни <svg viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'><path d='M5.99 7.425L11.2931 2.12103C11.6835 1.73054 11.6835 1.09749 11.293 0.707029C10.9025 0.316548 10.2695 0.316548 9.87897 0.70703L5.986 4.6L2.09973 0.707808C1.7095 0.316984 1.07626 0.316742 0.685731 0.707269C0.295414 1.09759 0.295414 1.73041 0.685731 2.12073L5.99 7.425Z'/></svg>",

    "secricePageNav1SubTitle1": "Определение",
    "secricePageNav1SubTitle2": "Цель",
    "secricePageNav1SubTitle3": "Детально о программе",

    "secricePageNav2SubTitle1": "Почему вы не так энергичны?",
    "secricePageNav2SubTitle2": "Цель программы",
    "secricePageNav2SubTitle3": "Как проходит программа",
    "secricePageNav2SubTitle4": "Продукт программы",

    "secricePageNav3SubTitle1": "Описание",
    "secricePageNav3SubTitle2": "Как себя мотивировать",
    "secricePageNav3SubTitle3": "Формулы для жизни",
    "secricePageNav3SubTitle4": "Инструменты для успешной организации",
    "secricePageNav3SubTitle5": "Эффективное управление временем",
    "secricePageNav3SubTitle6": "Постановка и достижение целей",
    "secricePageNav3SubTitle7": "Инструменты эффективного лидерства",
    "secricePageNav3SubTitle8": "Инструменты для преодоления финансового стресса",
    "secricePageNav3SubTitle9": "Инструменты для достижения финансовой безопасности",
    "secricePageNav3SubTitle10": "Принципы процветания",
    "secricePageNav3SubTitle11": "Создание успешного супружества",
    "secricePageNav3SubTitle12": "Как сохранить успешные супружеские отношения",
    "secricePageNav3SubTitle13": "Как спасти супружеские отношения",
    "secricePageNav3SubTitle14": "Как родить и растить счастливого младенца",
    "secricePageNav3SubTitle15": "Как хорошо воспитывать детей",
    "secricePageNav3SubTitle16": "Как с успехом воспитывать детей и подростков",
    "secricePageNav3SubTitle17": "Преодоление подьемов и спадов в жизни",
    "secricePageNav3SubTitle18": "Личные ценности и целостность",
    "secricePageNav3SubTitle19": "Как улучшать отношения с людьми",
    "secricePageNav3SubTitle20": "Как определить кому можно доверять",
    "secricePageNav3SubTitle21": "Как обрести уверенность в себе",

    "secricePageContent1Title1": "<i class='tex'><img class='text-line' src='./images/text-line.svg' alt='img-line'>Ремонт</i> жизни",
    "secricePageContent1Des1": "<span>Pемонт жизни</span> – это беседа, построенная по определенным принципам, в ходе которой обученный специалист, называемый одитором, просит человека взглянуть на свою жизнь и различные ее области, особенно на моменты физических или душевных страданий, и рассказав об этом, убрать из разума накопленный в течение жизни груз. <br> Этот груз был создан такими вещами как физические болезни, травмы, потери родных, друзей, близких, потери денег и имущества, предательства, неудачи, недостигнутые цели. Вопреки известной поговорке, время не лечит эти расстройства, - они накапливаются в нашем разуме и тяжким грузом давят на нас, подъедая запас жизненной энергии, уверенности в себе и желание действовать. Они создают настороженность, беспокойство, усталость от жизни, желание все бросить, раздражительность, апатию и депрессию.",

    "secricePageContent1Title2": "Цель pемонта жизни",
    "secricePageContent1Des2": "Помочь вам поднять свой уровень причинности и способностей и позволить вам обрести лучшее понимание и контроль вашей собственной жизни. Ступени и стадии вашего продвижения в самопознании и достижении духовной свободы представляют собой восходящую шкалу шагов одитинга по так называемому Мосту к полной свободе, разработанному Л. Роном Хаббардом. Вы поднимаетесь шаг за шагом, всякий раз оказываясь на более высоком уровне, пока не достигнете более оптимального состояния душевного здоровья и осознания себя, как духовного существа, которое называется состояние КЛИР (от слова clear – чистый). Ниже приведено краткое описание ступеней Моста и те победы, которые человек получает, поднявшись на них. В описании некоторых из них будет использовано слово «рандаун», которое означает действие одитинга, направленное на улаживание какой-либо одной из областей жизни. <br> <span>В ходе</span> одитинга человек избавляется от этих теней прошлого. Шаг за шагом он возвращает утраченную жизненную энергию, восстанавливает способности, уверенность в себе и готовность смотреть в глаза трудностям. Другими словами, возвращает способность играть в игры под названием «жизнь» и «бизнес», получая от этого удовольствие. <br> <span>Параллельно</span> с одитингом владельцы и ТОП-менеджеры получают консультации по внедрению в компаниях инструментов управления, позволяющих перейти от ручного управления к формату системного бизнеса, предоставляемые экспертом по построению системного бизнеса Евгением Сотниковым. Такой подход создает синергию.",
    
    "secricePageContent1Title3": "О программе «Ремонт жизни и бизнеса» более детально",
    "secricePageContent1SubTitle3": "Динамика развития компании и скорость роста ее доходов определяются тремя составляющими:",
    "secricePageContent1List31": "Потенциалом коммерческой идеи;",
    "secricePageContent1List32": "Уровнем организации компании;",
    "secricePageContent1List33": "Объемом жизненной силы и уровнем компетентности владельца и команды ТОП- менеджеров.",
    "secricePageContent1Des3": "Эти три составляющие представляют собой потенциал компании, который можно представить ввиде вектора, направленного вверх, к выживанию и процветанию. Но по мере развития негативное влияние внешней среды на компанию увеличивается, что также можно представить в виде вектора, который направлен вниз, к деградации и смерти компании. Когда эти два вектора становятся равны, рост дохода прекращается, развитие останавливается. Вдохнуть жизнь в компанию и вновь добиться ее роста и развития можно только в том случае, если мы увеличим одну из составляющих данного списка. <br> Программа «Ремонт жизни и бизнеса» работает со вторым и третьим пунктами списка. Следует отметить, что третий пункт является основополагающим: чем больше у человека жизненной энергии, тем больше у него контроля, тем большей компанией или областью деятельности он может управлять. Владельцы и ТОП-менеджеры компаний проходят программы индивидуальных консультаций по восстановлению жизненной силы и увеличению личного потенциала, называющиеся одитингом.",

    "secricePageRew1Des1": "«Программа «Ремонт жизни» дала мне понять, что все проблемы, которые у меня случаются – проблемы общения: где-то недосказано, где-то не сказано. Иногда я не говорил, что думаю на самом деле и потом винил себя за это. <br> Сейчас же, всё, что мне не нравится, я озвучиваю. Перед тем, как заключить какой-либо договор и вступить в партнерские отношения, я все проговариваю. Также я уже начал выступать на публике и страха нет такого, как раньше. <br> Эта программа дала мне силы и возможность победить свои страхи и идти вперед к своим целям в гармонии с собой и своим окружением».",
    "secricePageRew1Name1": "Александр Сомойлев",
    "secricePageRew1Pos1": "Вице-президент крупного аграрного холдинга",
    "secricePageRew1Des2": "ВОССТАНОВИЛИ МЕНЯ ИЗ ПЕПЛА <br> Нас всегда впечатляют и вдохновляют люди, которые находят силы изменяться в самые непростые свои времена.После индивидуальной программы возможно восстановиться из пепла, как птица феникс: «В «Планету» я пришла за помощью, когда была разбита нерациональным поведением своего окружения и потерей того, что долго создавала. Я не могла есть, спать, адекватно реагировать на слова и поступки. <br> Внутри была пустота и непонимание того, что же и почему так произошло? Программа помогла мне восстановить силы и уверенность в себе, волю к достижению целей, способность правильно оценить ситуацию, понять ее и проанализировать. <br> Я поняла, кто кем является в моем окружении, как мне с ними необходимо взаимодействовать, с кем и как строить отношения, кого и почему поддерживать. <br> Самое ценное в жизни – это понять, что истинно, а что мишура, отделить зерна от плевел. Я это сделала. Я знаю, зачем, с кем и куда иду. <br> Я хочу помогать и поддерживать, показывать признание сильным людям. Это то, что необходимо мне, и что я хочу давать таким же как я. <br> Спасибо, что восстановили меня из пепла».",

    "secricePageRew1Name2": "Елена Александрова",
    "secricePageRew1Pos2": "Владелеца сети салонов красоты",
    "secricePageRew1Des3": "«Я не ждал от этой программы чего-то особенного. Но в глубине души у меня было желание изменить ситуацию. <br> Наверное, как и у всех у меня были конфликты на работе, недопонимание в семье. Мне казалось, что я перегорел. Но поработав со специалистом, моя жизнь начала меняться. Я нашёл способ разрешить конфликты и наладить общение со своими близкими! Во мне появилось много энергии, и сам даже не заметил, как начал производить больше! И что самое интересное, все мои статистики пошли вверх! <br> «Ремонт жизни» дал мне хороший толчок для того, чтобы начать всё менять! Теперь я знаю, как это делать и уверен, что все получится!» ",
    "secricePageRew1Name3": "Владимир Чаплыгин",
    "secricePageRew1Pos3": "Директор крупного торгового центра",
    "secricePageRew1Des4": "ЖИЗНЬ НА ГРАНИ ОБРЫВА <br> На программе «Ремонт жизни» я освободился от многих надоедливых мыслей и проблем, на которые не хотел смотреть. <br> У меня открылись глаза на мои поступки. Я понял, что наделал много ошибок в отношениях с семьёй, на работе. <br> Если бы я не прошёл программу, даже не представляю, где бы оказался. Я был на грани обрыва. Сейчас моя жизнь поменялась! Я ощущаю себя счастливым и знаю, что все будет хорошо.",
    "secricePageRew1Name4": "Николай Чистяков",
    "secricePageRew1Pos4": "Владелец быстрорастущего стартапа",

    "secricePageContent2Title1": "<i class='tex'><img class='text-line' src='./images/text-line.svg' alt='img-line'>Программа</i> «Очищение»",
    "secricePageContent2SubTitle1": "Почему вы не так энергичны и полны жизни, как могли бы быть",
    "secricePageContent2List11": "Трудно ли вам наслаждаться жизнью?",
    "secricePageContent2List12": "Считаете ли вы, что трудно быть счастливым?",
    "secricePageContent2List13": "Вам сложно сосредоточиться?",
    "secricePageContent2List14": "Бывают ли ваши мысли запутанными?",
    "secricePageContent2List15": "Ваше состояние не является оптимальным - и вы не можете справиться с этим?",
    "secricePageContent2List16": "Чувствуете ли вы себя истощёнными без какой-либо видимой причины иногда в течение нескольких дней?",
    "secricePageContent2Des1": "<span>Причиной этих симптомов является</span> скопление химикатов или токсинов в вашем теле. Эти вещества, такие как пищевые добавки, испарения красителей, марихуана, рецептурные лекарства, пестициды, автомобильные газы и радиация накапливаются в жировых тканях тела. Ваше тело естественным путём не избавляется от этих веществ, и они накапливаются в течение многих лет, препятствуя вашим умственным способностям и энергии. <br> Наркотики и лекарства, а также алкоголь, консерванты, которые вы принимали 20 лет назад, до сих пор находятся в вашем организме, и вредят вам по сей день. Радиация от солнечного ожога, которую вы получили шесть лет назад, и сегодня находится в вашем теле.",

    "secricePageContent2Title2": "Цель программы «Очищение»",
    "secricePageContent2Des2": "Решением проблемы накопления в теле отравляющих веществ является удаление всех загрязнений, законсервированных в теле, которое происходит на программе «Очищение». Эта процедура является точной комбинацией физических упражнений,приёма витаминов, питания и потения в сауне, что приводит к вытеснению наркотиков и токсинов из жировых отложений клеток тела. Таким образом, их можно вывести из тела.",

    "secricePageContent2Title3": "Как проходит программа «Очищение»",
    "secricePageContent2List31": "На программе 'Очищение' человек бегает определённый период времени каждый день. <br> Бег нужен для того чтобы усилить кровообращение. Кровь проникает глубже в ткани, туда, где накапливаются отложения токсичных веществ, и в результате эти вещества приходят в движение.",
    "secricePageContent2List32": "Сразу после бега человек идет в сауну. Обильное потоотделение помогает выделению токсичных веществ из организма.",
    "secricePageContent2List33": "Регулярный прием витаминов и минералов, а также дополнительного количества масел является важным фактором, помогающим вывести из тела вредные вещества и восстановить ткани, поврежденные наркотиками и другими токсичными веществами.",
    "secricePageContent2List34": "Регулярный прием витаминов и минералов, а также дополнительного количества масел является важным фактором, помогающим вывести из тела вредные вещества и восстановить ткани, поврежденные наркотиками и другими токсичными веществами.",

    "secricePageContent2Title4": "Продукт программы «Очищение»",
    "secricePageContent2List41": "Ваше тело, очищенное от остатков отравляющих веществ, наркотиков и лекарств, накопленных в течение жизни.",
    "secricePageContent2List42": "Восстановленное здоровье и увеличение энергии.",
    "secricePageContent2List43": "Улучшенная способность мыслить логически, способность лучше концентрировать внимание, повышение коэффициента интеллекта.",

    "secricePageRew2Des1": "«За время прохождения программы я избавился от влияний солнечной радиации, лекарств и других токсичных веществ. <br> Мне стало намного легче двигаться. Теперь я успеваю выполнять больше задач, чем раньше. <br> На программе для меня решился вопрос сна. Я начал действительно высыпаться и легко вставать утром. <br> А самое интересное, у меня появилось желание творить!».",
    "secricePageRew2Name1": "Виталий Завгородный",
    "secricePageRew2Pos1": "Старший менеджер по продажам транснациональной корпорации",

    "secricePageRew2Des2": " «Ни один энергетик не даст столько энергии, как эта программа! <br> Я, наверное, никогда не ощущал свое тело таким. <br> СИЛЬНЫМ. ЧИСТЫМ. БОДРЫМ. СЛАЖЕННЫМ. <br> Один из самых классных результатов программы «Очищения» — это понимание того, как именно я раньше вредил своему телу. Теперь я не буду повторять этих ошибок. <br> Конечно же я получил чистое тело от разных вредностей. Вместо постоянной усталости пришла энергия и силы! <br> Я бесконечно счастлив, что прошел эту программу!»",
    "secricePageRew2Name2": "Дмитрий Багуцкий",
    "secricePageRew2Pos2": "Начинающий бизнесмен",

    "secricePageRew2Des3": "РЕЗУЛЬТАТЫ ПРЕВЫСИЛИ ОЖИДАНИЯ В МИЛЛИОНЫ РАЗ <br> «Я безгранично счастлива быть на программе «Очищение». Это настоящий подарок для меня. Очень круто почувствовать разницу с токсинами в теле и без них, ведь это можно сделать только избавившись от них, больше никак. <br> Наблюдая за собой, я заметила много нового! Я начала легко делиться. Могу принять помощь легко. <br> У меня светло и чисто в сознании. <br> Меня не тянет на какие-то вредные продукты и на сладкое — это классно. Результаты превысили ожидания в миллионы раз. Я знаю, что дальше после программы я буду осознавать ещё много чего нового».",
    "secricePageRew2Name3": "Светлана Марченко",
    "secricePageRew2Pos3": "Организатор мероприятий",

    "secricePageRew2Des4": "БОЛЬШЕ РАБОТЫ ЗА МЕНЬШЕЕ КОЛИЧЕСТВО ВРЕМЕНИ <br> «За время программы «Очищение» я лишился всех токсичных веществ, которые наполняли мой организм. Из меня вышел алкоголь, медикаменты, радиация и много чего другого, накопленного за все мои 40 лет жизни. <br> Сейчас я полон энергии и жизненной силы. У меня стабильно хорошее настроение. Я начал делать больше работы за меньший промежуток времени. <br> У меня улучшилось зрение, слух и кожа. Наладилось пищеварение, я начал пить много воды. И кушать овощи. <br> Сейчас я всё время хочу что-то делать и всегда нахожусь в тонусе». ",
    "secricePageRew2Name4": "Павел Демченко",
    "secricePageRew2Pos4": "Ресторатор",

    "secricePageContent3Title1": "<i class='tex'><img class='text-line' src='./images/text-line.svg' alt='img-line'>Курсы по</i> улучшению жизни",
    "secricePageContent3Des11": "В нашем классе вы можете пройти целый ряд личностных курсов, в которых содержатся ответы на множество вопросов, преподносимых нам жизнью. Как создавать и сохранять супружеские отношения, как правильно воспитывать ребенка, как себя мотивировать, как добиться финансовой стабильности, как узнать, кому можно доверять, и множество других стабильных данных дадут вам эффективные инструменты улучшение жизни и создания более безопасного окружения.",

    "secricePageContent3Title2": "Как себя мотивировать",
    "secricePageContent3Des21": "<span>Чтоб достигать целей,</span> вам нужна настойчивость и активные действия. Вы должны преодолевать барьеры и продолжать двигаться вперед. Следовательно, для успеха необходима ваша личная мотивация. Почему же мы часто медлим? И порой замираем, ничего не делая? Почему временами мы откладываем какую-то мелочь, которая потом становится критической? <br> На курсе <span>«Как себя мотивировать» вы узнаете ответы на эти вопросы.</span> Курс показывает, как преодолевать барьеры, чтобы доводить дело до конца. Он дает ноу-хау того, как делать работу проще и радостнее, чтобы ваша мотивация росла.",
    "secricePageContent3Des22": "Когда вы узнаете, что препятствует вашему процветанию, вы сможете повысить свою мотивацию и увеличить эффективность.",
    "secricePageContent3List21": "Какие ловушки подстерегают человека, который не завершает дела — как это удваивает его работу.",
    "secricePageContent3List22": "Упражнение, которое поможет вам подняться над вашими проблемами.",
    "secricePageContent3List23": "Точную анатомию контроля, и как контролировать людей и предметы в вашем окружении.",

    "secricePageContent3Title3": "Формулы для жизни",
    "secricePageContent3Des31": "<span>Если ваши отношения</span> на грани разрыва, что вам делать? Если у вас долги, как с этим справиться? Если у вас неприятности на работе, как исправить это? Для этих и других ситуаций существуют точные формулы — шаги, в основе которых лежат естественные законы. Эти формулы работают всегда. Узнайте, как взять под контроль любое состояние и обстоятельства. Изучите практические формулы, которые исправляют плохое состояние дел и укрепляют хорошее.",
    "secricePageContent3Des32": "Если вы знаете и применяете данные из этого курса, вы сможете разобраться с любым неоптимальным положением дел и улучшить любое благоприятное состояние. Вы сможете достичь небывалых успехов в жизни.",
    "secricePageContent3List31": "Каковы законы, определяющие ваш жизненный уровень, и как их применить, чтобы создать будущее, исполненное процветания и счастья.",
    "secricePageContent3List32": "Что такое статистики и как вы можете использовать их, чтобы оценить общее состояние любой деятельности, и как они могут помочь вам предсказать, что случится в будущем.",
    "secricePageContent3List33": "Формулы состояний, которые направаляют вас в жизни. Это практические шаги, которые позволяют улучшить любое состояние.",

    "secricePageContent3Title4": "Инструменты для успешной организации",
    "secricePageContent3Des41": "Мы все понимаем, что будь все как следует организовано, дела шли бы намного лучше. Умение организовывать – это ключ к достижению личного успеха, но его часто упускают из виду. Оно также важно и для процветания семьи или группы. Чтобы добиться своей цели (не важно, большой или маленькой), нужно обладать необходимыми знаниями и уметь организовывать. <br> <span>Этот курс показывает,</span> как наиболее эффективно контролировать свое время и как распределять действия в логической последовательности, чтобы добиваться выполнения задуманного.",
    "secricePageContent3Des42": "Если вы будете знать и применять естественные законы и инструменты, описанные в этом курсе, вы сможете успешно организовывать любую деятельность, устранять замешательство, обеспечивать стабильность и достигать своих целей.",
    "secricePageContent3List41": "Естественные законы организации и их применение.",
    "secricePageContent3List42": "Сколько действий по организации вам необходимо делать, чтобы добиться достижения поставленных целей с наименьшими усилиями и в кратчайшие сроки.",
    "secricePageContent3List43": "Структура организации, а также примеры и инструкции по ее использованию, чтобы у вас появилось умение организовать собственную жизнь, группу или компанию.",

    "secricePageContent3Title5": "Эффективное управление временем",
    "secricePageContent3Des51": "B мире быстродействующих компьютеров и сверхскоростных линий связи нельзя полагаться на устаревшие административные системы. Как же вам идти в ногу со временем? На курсе «Эффективное управление временем» вы узнаете о том, как сделать больше за меньшее время, используя фундаментальные данные об эффективности. Многие не имеют ни малейшего представления, как этого добиться, и именно этому учит этот курс.",
    "secricePageContent3Des52": "Когда вы обладаете знанием и инструментами, которые даются на этом курсе, вы можете справляться с работой в два раза быстрее, прикладывая в два раза меньше усилий. Вы можете избежать стресса и создать для себя время, чтобы заниматься всем тем, чем вам нравится заниматься.",
    "secricePageContent3List51": "Почему некоторые люди много и упорно работают, но не добиваются больших результатов, а другие могут достичь многого, затрачивая гораздо меньше усилий.",
    "secricePageContent3List52": "Из-за чего вы тратите рабочее время впустую и как можно уменьшить количество работы вдвое, при этом делая гораздо больше.",
    "secricePageContent3List53": "Как представить путь к цели в виде простых выполнимых шагов, благодаря которым вы сможете с лёгкостью её достичь.",

    "secricePageContent3Title6": "Постановка и достижение целей",
    "secricePageContent3Des61": "Если у вас нет целей или устремлений, вы можете почувствовать себя потерянным. Люди, которые не работают активно над достижением своих целей, несчастны. Они подвержены всем стрессам современной жизни. Однако, очень часто люди ставят перед собой цели, но несмотря на все усилия, не могут их достичь. Почему это так? В чём заключается решение? <br> Курс «Постановка и достижение целей» даёт ответы на эти вопросы. В нём показано, как ставить цели, и даны точные шаги того, как их достигать.",
    "secricePageContent3Des62": "Благодаря инструментам, которые вы изучите на этом курсе, вы сможете формулировать, планировать достижение и достигать целей, которые до этого оставались лишь мечтой.",
    "secricePageContent3List61": "О грандиозном открытии административной шкалы — шкалы последовательности уровней, которая основана на естественных законах и показывает, как нужно формулировать цели и разрабатывать планы.",
    "secricePageContent3List62": "Почему иногда бывает так, что человек упорно работает над достижением какой-то цели, но даже не может к ней приблизиться — и как это можно изменить.",
    "secricePageContent3List63": "Как разделить план на короткие выполнимые шаги, чтобы достичь поставленных вами целей, какими бы масштабными они ни были.",

    "secricePageContent3Title7": "Инструменты эффективного лидерства",
    "secricePageContent3Des71": "Почему кто-то становится лидером, и его уважают и поддерживают, а кого-то игнорируют или ни во что не ставят? Почему один руководитель достигает процветания и его сотрудники получают хорошую зарплату, а другой терпит неудачу? Это судьба? Удача? Какой-то особый дар, которым обладают только «успешные люди»? <br> Курс «Инструменты для эффективного лидерства» даёт ответы на эти вопросы, а также в нём изложены истинные законы эффективного лидерства.",
    "secricePageContent3List71": "Кто такой «руководитель», что он должен знать и делать, чтобы быть эффективным администратором.",
    "secricePageContent3List72": "Что такого делает плохой лидер, что наносит вред группе, и что делает хороший лидер, что приводит группу к процветанию.",
    "secricePageContent3List73": "Точное описание основ администрирования и ключевые элементы, о которых должен знать каждый руководитель.",

    "secricePageContent3Title8": "Инструменты для преодоления финансового стресса",
    "secricePageContent3Des81": "Испытываете ли вы в жизни стрессы и напряжение из-за финансовой ситуации? Если всё ваше внимание сосредоточено на «финансах», а не на том, чтобы жить полной жизнью, этот курс даст вам инструменты, которые помогут вам встать на путь к лучшему выживанию и счастью и помогут легко осуществлять управление финансами. <br> Из этого курса вы узнаете, как успешно справиться с финансовым кризисом, неважно — большим или незначительным. Здесь также даны инструменты, с помощью которых вы сможете просто не попадать в подобные ситуации. Эти основные данные, полученные из опыта работы с организациями, являются ключевыми для управления финансами предприятия любого размера, и они в той же мере применимы к личным финансам и дают возможность освободить ваше внимание для чего-то действительно важного в жизни.",
    "secricePageContent3Des82": "Когда вы знаете и понимаете основы управления финансами, вы можете контролировать своё процветание и создать свободную от финансовых стрессов атмосферу. Вы действительно можете преуспевать.",
    "secricePageContent3List81": "Основы управления финансами.",
    "secricePageContent3List82": "Как уладить чрезвычайную ситуацию в финансах, не впадая при этом в замешательство.",
    "secricePageContent3List83": "Как именно справиться с неразберихой в финансах, и каковы точные процедуры, с помощью которых можно успокоить наседающих на вас кредиторов.",
    "secricePageContent3List84": "Что лежит в основе процветания любого человека, компании, организации или предприятия — большого или маленького.",

    "secricePageContent3Title9": "Инструменты для достижения финансовой безопасности",
    "secricePageContent3Des91": "Здесь содержатся ответы, позволяющие достичь всего, чего вы хотите в жизни. Существует способ избавиться от проблем, с которыми вы сталкиваетесь, управляя своими делами, и справиться с трудностями, связанными с повышением цен. В конце концов, от этого зависит ваше счастье и благополучие. <br> Когда вы знаете, что делать, вы можете избежать финансовых неурядиц. И тогда, даже если вы столкнётесь с кризисом, вы сможете быстро восстановиться. Достижение финансовой безопасности может зависеть только от вас. <br> На курсе «Инструменты для достижения финансовой безопасности» вы узнаете принципы работы с финансами, которые применимы и к организации любого размера, и к отдельному человеку. Обретя безопасность, вы сможете посвятить себя достижению более высоких целей в жизни.",
    "secricePageContent3Des92": "Применение основополагающих истин изложенных в этом курсе, может принести стабильное преуспевание и финансовый рост вам лично, вашей семье и вашей компании.",
    "secricePageContent3List91": "Как планировать свои финансы, чтобы никогда не попадать в долги.",
    "secricePageContent3List92": "Как сделать так, чтобы каждый расход денежных средств становился вложением в будущее.",
    "secricePageContent3List93": "Какие шаги нужно предпринять, чтобы создать и поддерживать отличную кредитоспособность и платёжеспособность.",

    "secricePageContent3Title10": "Принципы процветания",
    "secricePageContent3Des101": "Хотите ли вы жить полноценной и счастливой жизнью и быть свободным? Чем больше изобилия в жизни, тем меньше в ней стрессов и тем больше она приносит удовлетворения. Как вам добиться этого? Ответы заключены в базовых естественных законах, и на курсе «Принципы процветания» вы узнаете эти законы; эти данные позволят вам процветать и преуспевать в жизни. <br> Ваше выживание важно для вас, вашей семьи и для тех, кто от вас зависит. Благодаря знанию и применению основных данных о процветании вы сможете помочь тем, кто вам дорог.",
    "secricePageContent3Des102": "Когда вы поймёте эти основы и научитесь использовать инструменты, которые вы изучите на этом курсе, вы сможете полностью контролировать своё процветание в настоящем и в будущем.",
    "secricePageContent3List101": "Как понять, что же такое деньги, чтобы у вас появилась возможность заняться чем-то более важным.",
    "secricePageContent3List102": "Что такое «экономика».",
    "secricePageContent3List103": "Каковы принципы обмена и как они влияют на ваше душевное состояние и процветание.",
    "secricePageContent3List104": "Четыре фактора, которые вам нужно знать, чтобы одержать победу в жизни.",

    "secricePageContent3Title11": "Создание успешного супружества",
    "secricePageContent3Des111": "Чтобы начать такое важное путешествие, как семейная жизнь, вам нужно кое-что узнать. Тогда вы сможете проложить свой маршрут. <br> Любое успешное супружество строится на определённых базовых принципах. Если у вас вдобавок есть инструменты для того, чтобы справляться с трудностями в супружестве, и если вы знаете, как их применять, вы сможете создать счастливый союз, который продлится всю жизнь.",
    "secricePageContent3List111": "Как создать счастливую семью.",
    "secricePageContent3List112": "Какие компоненты необходимы для создания длительных отношений, и как их применять.",
    "secricePageContent3List113": "Первое условие счастливой семейной жизни и какую роль каждый партнёр играет в её создании.",
    "secricePageContent3List114": "Почему важно придерживаться общих целей.",

    "secricePageContent3Title12": "Как сохранить успешные супружеские отношения",
    "secricePageContent3Des121": "На чем основываются успешные счастливые отношения? Что позволяет сохранить их и получать от них удовольствие? И что вы можете сделать чтобы ваш брак не распался? Количество заключаемых браков всё ещё превышает количество разводов, но разница между этими двумя цифрами быстро сокращается. <br> Многие проблемы в обществе возникают из-за разрушенных браков, но у вас есть возможность защитить своё супружество. <br> Основные законы жизни применимы и к супружеству. Существуют способы сделать вашу любовь сильнее и создать отношения, которые будут становиться всё крепче и крепче.",
    "secricePageContent3Des122": "Если вы будете применять данные, изученные на этом курсе, вы создадите отношения, которыми вы и ваш партнёр сможете наслаждаться всю вашу жизнь.",
    "secricePageContent3List121": "Каковы компоненты, которые лежат в основе любых взаимоотношений — в том числе в основе счастливого брака.",
    "secricePageContent3List122": "Факторы, благодаря которым взаимоотношения изменяются только к лучшему.",
    "secricePageContent3List123": "Почему крепкий, долговечный брак зависит от взаимного доверия и как это доверие укрепить.",

    "secricePageContent3Title13": "Как спасти супружеские отношения",
    "secricePageContent3Des131": "Что делать, если в супружестве назревают серьёзные проблемы? Если у супругов постоянно возникают разногласия, то как с этим справиться? Если кто-то из них или оба собираются разойтись и брак уже в критическом положении, то как это можно исправить? <br> Есть точные причины того, почему распадаются браки, почему общение между двумя людьми сокращается и почему у одного из супругов появляется желание уйти. Узнайте, как спасти такой брак.",
    "secricePageContent3Des132": "Базовые истины, изложенные в этом курсе лежат в основе любых взаимоотношений. Они составляют единственную действенную технологию отношений между людьми и уже спасли тысячи браков.",
    "secricePageContent3List131": "Три элемента, которые присутствуют в любых отношениях и применяя которые вы сможете создать длительный и благополучный союз.",
    "secricePageContent3List132": "Как устранить распространённую причину конфликтов, которые возникают между мужем и женой.",
    "secricePageContent3List133": "Причина, по которой супруги решают разойтись, и инструменты, позволяющие это исправить.",

    "secricePageContent3Title14": "Как родить и растить счастливого младенца",
    "secricePageContent3Des141": "Каждый родитель хочет сделать всё, что в его силах, для своего ребёнка, начиная с зачатия до периода младенчества, чтобы помочь ему начать жизнь как можно лучше. Но что должна делать мать? Чего она должна остерегаться? И что должен знать отец, чтобы быть хорошим отцом? <br> Родителям необходимо знать, что может повлиять на ещё не рождённого ребёнка. Если ребёнок может помнить что-то, что произошло до его рождения, то что должны сделать родители, чтобы это оказало на него наименьшее влияние? Ответы на эти вопросы вы найдёте в курсе «Как родить и растить счастливого младенца».",
    "secricePageContent3Des142": "На этом курсе и мать, и отец обретут знания и инструменты, используя которые они смогут обеспечить благополучие своего ребёнка. Вы узнаете, что необходимо делать и чего избегать, чтобы первые годы жизни ребёнка были наилучшими.",
    "secricePageContent3List141": "Чего лучше избегать беременной женщине и что ей нужно делать, чтобы защитить своего ребёнка, в утробе, во время родов и в период младенчества.",
    "secricePageContent3List142": "Почему беременной женщине важно заботиться о себе и что вы должны делать для наибольшего блага вашего ребёнка.",
    "secricePageContent3List143": "Как мама может проводить себе ассисты и, таким образом, помочь ребёнку.",

    "secricePageContent3Title15": "Как хорошо воспитывать детей",
    "secricePageContent3Des151": " Родители стараются изо всех сил, чтобы как можно лучше воспитать своего ребёнка, но большинство считают, что это можно сделать только методом проб и ошибок. Как родителям воспитать своего ребёнка, чтобы он был инициативным и самостоятельным и сам мог принимать конструктивные решения? Существует множество мнений о том, как это сделать, но есть ли среди них хоть какие-то разумные принципы, которым можно доверять?",
    "secricePageContent3Des152": "Когда вы освоите данные и инструменты, содержащиеся в этом курсе, и начнёте использовать их, вы сможете помочь своему ребёнку стать самостоятельным, счастливым человеком, ценным как для семьи, так и для общества.",
    "secricePageContent3List151": "Что больше всего нужно ребёнку от родителей.",
    "secricePageContent3List152": "Как вы можете помочь ребёнку справиться с его проблемами.",
    "secricePageContent3List153": "Почему ребёнок начинает злиться и как быстро помочь ему справиться с его расстройствами.",
    "secricePageContent3List154": "Как жить с детьми и помогать им расти и стать замечательными, успешными людьми.",
    "secricePageContent3List155": "Как с помощью простого, но мощного действия помочь ребёнку оправиться от травм.",

    "secricePageContent3Title16": "Как с успехом воспитывать детей и подростков",
    "secricePageContent3Des161": "Воспитание детей и подростков не обязательно должно быть борьбой с ними. Наоборот от него можно получать огромное удовлетворение. Но раз уж дети не появляются вместе с инструкцией по их использованию, остаётся вопрос: Как? Как лучше всего помочь им стать счастливыми, порядочными гражданами, которые действуют по собственной инициативе. <br> Узнайте основные принципы воспитания детей и подростков. Заложите надёжное основание, которое позволит им вырасти и добиться успеха в жизни. На этом курсе вы узнаете, как это сделать.",
    "secricePageContent3Des162": "Когда вы знаете и используете инструменты, содержащиеся в этом курсе, вы можете помочь вашему ребёнку обрести счастье и добиться успеха в будущем.",
    "secricePageContent3List161": "Насколько важно дать молодёжи цель в жизни и как это сделать?",
    "secricePageContent3List162": "Какую роль в жизни детей и подростков играет возможность вносить свой вклад и как это влияет на их поведение и отношение к окружающим?",
    "secricePageContent3List163": "Что вы как родитель можете сделать, чтобы помочь своим детям создать более яркое и счастливое будущее и достичь благополучия?",
    "secricePageContent3List164": "Как быть правильными родителями.",

    "secricePageContent3Title17": "Преодоление подьемов и спадов в жизни",
    "secricePageContent3Des171": "Когда вы вдруг начинаете совершать ошибки, этому есть причина. Или когда вы счастливы, а потом безо всякой видимой причины вдруг приходите в подавленное состояние, это было вызвано кем-то. <br> Существуют определённые типы людей — те, кто желают людям добра, и те, у кого дурные намерения. <br> Если вы в жизни испытываете «американские горки», кто-то из вашего окружения, возможно, подавляет вас — давит на вас или пытается сделать вас меньше.",
    "secricePageContent3Des172": "Владея ноу-хау, которое позволяет устранить причины, стоящие за вашими неудачами, вы можете изменить свою жизнь к лучшему, раз и навсегда избавиться от спадов и устремиться к своим величайшим целям. Обретите стабильность сегодня.",
    "secricePageContent3List171": "Как различать два типа людей — тех, кто пытается создавать, и тех, кто пытается разрушать.",
    "secricePageContent3List172": "Что делать с теми, кто хочет принести вам вред.",
    "secricePageContent3List173": "Как распознать ваших настоящих друзей среди тех, кто настроен против вас.",

    "secricePageContent3Title18": "Личные ценности и целостность",
    "secricePageContent3Des181": "Честный и открытый человек достигнет своих целей значительно легче, чем тот, кто нечестен и замкнут в себе. Жить согласно собственным идеалам — верный путь к успеху. Но как жить согласно собственным идеалам? <br> Узнайте, почему люди утрачивают личную целостность и отстраняются от других. Откройте для себя инструменты, с помощью которых вы можете полностью изменить свою жизнь и стать более счастливым и производительным и достичь большего процветания. Добейтесь успеха и обретите счастье сегодня.",
    "secricePageContent3Des182": "Как сказал Л. Рон Хаббард: «Если бы только человек знал простую технологию этики, он мог бы достичь самоуважения, личного удовлетворения и успеха, о чём, как ему казалось, он мог только мечтать». <br> Этот курс — ваш шанс воплотить эти мечты в реальность. Владея практическими знаниями, которые позволяют устранить причины, стоящие за вашими неудачами и несчастьями, вы сможете изменить свою жизнь к лучшему, благодаря чему всё это останется в прошлом.",
    "secricePageContent3List181": "Как добиться успеха в жизни.",
    "secricePageContent3List182": "Как определить ваши личные ценности и как они влияют на вашу жизнь.",
    "secricePageContent3List183": "Точные определения добра и зла, правильного и неправильного и как вы можете использовать эти знания, чтобы сделать вашу жизнь более счастливой и успешной.",
    "secricePageContent3List184": "Как восстановить вашу личную целостность, улучшить положение дел в вашей жизни и помочь другим сделать то же самое.",

    "secricePageContent3Title19": "Как улучшать отношения с людьми",
    "secricePageContent3Des191": "Есть ряд вполне конкретных факторов,  которые свойственны всем человеческим отношениям, будь то отношения в семье или в бизнесе, близкие или поверхностные, краткосрочные или долговечные. Когда вы знаете эти компоненты и умеете их использовать, вы можете создавать взаимное расположение, поддержку и восхищение, благодаря чему устанавливаются по-настоящему хорошие отношения. <br> Есть ещё один точный элемент, который присутствует во всех спорах и огорчениях. Зная этот фактор и точную формулу для его применения, вы можете разрешить любой конфликт и восстановить гармонию и понимание.",
    "secricePageContent3Des192": "Эти открытия в области человеческих взаимоотношений, а также другие важные факторы, которые вы изучите на этом курсе, дают возможность вести жизнь, полную согласия, взаимного сотрудничества и счастья.",
    "secricePageContent3List191": "Компоненты понимания — три фактора, образующие треугольник со взаимосвязанными вершинами, который вы можете использовать в отношениях с любым человеком.",
    "secricePageContent3List192": "Шаги, которые надо предпринять, чтобы разрешить проблему правоты и неправоты во взаимоотношениях (особенно если настаивание на собственной правоте грозит пустить все под откос).",
    "secricePageContent3List193": "Два правила счастливой жизни.",

    "secricePageContent3Title20": "Как определить кому можно доверять",
    "secricePageContent3Des201": "Ваше выживание зависит от вашего умения распознать, на кого вы можете положиться. Но как узнать, кто ваши настоящие друзья? Как вам определить, поможет ли тот или иной человек привести к успеху совместное начинание? Существует ли способ предсказывать поведение людей? <br> Да. В человеческом поведении есть фундаментальные составляющие. Когда вы их знаете, вам становится ясна сущность ваших ближних. И просто наблюдая за поступками людей, вы будете знать о них всё.",
    "secricePageContent3Des202": "Благодаря знаниям, полученным на этом курсе, вы сможете определять, кому можно доверять и на кого можно полагаться.",
    "secricePageContent3List201": "О важности доверия в отношениях между людьми.",
    "secricePageContent3List202": "О Таблице Хаббарда оценки человека — инструменте, который позволяет узнавать настоящий характер людей и предсказывать, что они будут делать.",
    "secricePageContent3List203": "Как правильно оценивать других и гарантировать более определённое будущее для себя и тех, кто вам дорог.",

    "secricePageContent3Title21": "Как обрести уверенность в себе",
    "secricePageContent3Des211": "Большинство людей хотели бы в большой степени быть уверенными в себе, однако они не знают, как этого достичь. Вы когда-нибудь чувствовали большую уверенность в себе? Хотели бы повысить уверенность в себе? Чтобы повысить уверенность в себе, вам нужно понимать, что её снижает. Когда вы знаете, почему это происходит, вы можете исправить ситуацию и возродить самоуважение.",
    "secricePageContent3Des212": "Точные шаги, которые нужно выполнить, чтобы стать более компетентным в том, что вы делаете.",
    "secricePageContent3List211": "Истинный источник безопасности в жизни.",
    "secricePageContent3List212": "Как взаимосвязаны уверенность в себе, самоуважение и доверие к себе, и что вы можете сделать, чтобы восстановить их.",
    "secricePageContent3List213": "Точные шаги, которые нужно выполнить, чтобы стать более компетентным в том, что вы делаете.",

    "secricePageRew3Des1": "Я НАУЧИЛСЯ ДАВАТЬ ОТПОР <br> Это история успеха от курса «Преодоление подъёмов и спадов в жизни»: <br> «Во время курса я многое познал, многому научился. <br> Я стал грамотно анализировать различные ситуации и людей. <br> Я стал более спокойным. Научился сдерживаться и понимать, что есть хорошо, а что есть плохо. Самое интересное, что я знаю, что мне делать, знаю, как мне делать. И знаю, как использовать. Курс очень помог. Я научился давать отпор».",
    "secricePageRew3Name1": "Александр Фидоренко",
    "secricePageRew3Pos1": "Заместитель по связям с общественностью крупной фирмы по производству био топлива",

    "secricePageRew3Des2": "«Это очень полезный курс - «Личные ценности и целостность», данные которого бесценны. Полученные знания касаются абсолютно всех сфер деятельности. <br> Я получила важные инструменты для жизни и получила подтверждение своему мышлению. Я знаю, как регулировать свою жизнь – это очень мощное оружие!»",
    "secricePageRew3Name2": "Яна Свидерская",
    "secricePageRew3Pos2": "Заместитель исполнительного директор",

    "secricePageRew3Des3": "«Когда я пришла на курс «Как себя мотивировать», я была разбитая и вся в сомнениях. <br> Я надеялась, что мне станет легче и я найду выход из своего состояния. <br> На курсе я узнала, как можно найти мотивацию и выйти из плохих состояний. <br> Главное, что во время изучения материала, я нашла ответы и теперь, мои проблемы не кажутся мне такими большими и страшными, как раньше. <br> За время обучения я стала чувствовать себя лучше! <br> Теперь я знаю, как справляться с проблемами и мотивировать себя».",
    "secricePageRew3Name3": "Елена Гуц",
    "secricePageRew3Pos3": "Директор крупного торгового центра",

    "reviewsPageRew1": "«Я не боюсь заявить о себе, стала более активной. Поняла, что никто не виноват в моих трудностях и осознала что любая проблема — это лишь мое собственное восприятие ситуации. А также перестала сопротивляться счастью, которое вокруг меня. Мне не хочется пить алкоголь, хотя раньше я считала что так “снимаю напряжение”. Чувствую потребность быть активной и помогать окружающим меня людям. Я не боюсь идти вперед. Я благодарна Татьяне за помощь! <br> Моя история успеха очень проста — за очень короткое время мой жизненный тон сменился из серого и угрюмого в красочный и жизнерадостный. А дальше по пунктам: Я перестала грустить, у меня всегда хорошее настроение, стала больше общаться с людьми. Перестала “ставить на себе крест”. Все тревоги и люди из прошлого остались в прошлом. Я стала более уверенной в себе. У меня появились силы и желание работать над собой и теми недочетами, которые я могу исправить (я пошла в зал).»",

    "reviewsPageRew2": "«Я не ждал от этой программы чего-то особенного. Но в глубине души у меня было желание изменить ситуацию. <br> Наверное, как и у всех у меня были конфликты на работе, недопонимание в семье. Мне казалось, что я перегорел. <br> Но поработав со специалистом, моя жизнь начала меняться. Я нашёл способ разрешить конфликты и наладить общение со своими близкими! <br> Во мне появилось много энергии, и сам даже не заметил, как начал производить больше! И что самое интересное, все мои статистики пошли вверх! <br> «Ремонт жизни» дал мне хороший толчок для того, чтобы начать всё менять! Теперь я знаю, как это делать и уверен, что все получится!»",

    "reviewsPageRew3": "«Ни один энергетик не даст столько энергии, как эта программа! <br> Я, наверное, никогда не ощущал свое тело таким. <br> СИЛЬНЫМ. ЧИСТЫМ. БОДРЫМ. СЛАЖЕННЫМ. <br> Один из самых классных результатов программы «Очищения» — это понимание того, как именно я раньше вредил своему телу. Теперь я не буду повторять этих ошибок. <br> Конечно же я получил чистое тело от разных вредностей. Вместо постоянной усталости пришла энергия и силы! <br> Я бесконечно счастлив, что прошел эту программу!»",

    "booksPageTitle": "Наши книги",
    "booksPageDes": "Многие люди думают, что их успех и процветание зависит исключительно от везения. Но это не так. Жизнь, бизнес, работа подчиняются определенным законам, зная которые, человек может достигать своих целей гораздо быстрее и эффективнее. Эти законы, а также инструменты для лучшего выживания описаны в следующих книгах, которые вы можете заказать в группе «Планета».",

    "booksPageBook1Title": "Проблемы работы",
    "booksPageBook1SubTitle": "«Жизнь на семьдесят процентов состоит из работы, и еще по десять приходится на семью, политику и отдых».",
    "booksPageBook1Des": "«Проблемы работы» содержат основные принципы и законы, которые применимы в каждом деле, к каждой проблеме в работе. Потому что это открытия, которые рассматривают самую основу этих проблем, они объясняют, из чего состоит сама жизнь. В этой книге подробно описаны следующие открытия:",
    "booksPageBook1List1": "Анатомия замешательства и как с ним справиться",
    "booksPageBook1List2": "Концепция стабильного данного – фундаментальный закон жизни",
    "booksPageBook1List3": "Анатомия контроля и как превратить «плохой контроль» в хороший",
    "booksPageBook1List4": "Анатомия жизни как игры и правила, по которым в нее играют",

    "booksPageBook2Title": "Саентология: новый взгляд на жизнь",
    "booksPageBook2Des": "Книга «Саентология: новый взгляд на жизнь» - нестареющий сборник открытий Рона, выбранных из всей сокровищницы его письменных работ. Каждая глава дает краткий и в то же время всесторонний обзор применения Саентологии к какому-то конкретному аспекту существования, и таким образом перед вами предстает панорама самой жизни. Здесь вы найдете ответы, которые человек искал веками; практичные ответы, которые вы надеялись найти где-то еще; ответы, которые работают:",
    "booksPageBook2List1": "Возможно ли быть счастливым",
    "booksPageBook2List2": "Целостность личности",
    "booksPageBook2List3": "Человек в поисках свой души",

    "booksPageBook3Title": "Дорога к счастью",
    "booksPageBook3SubTitle": "Подлинная радость и счастье обладают большой ценностью.",
    "booksPageBook3Des": "Подлинная радость и счастье обладают большой ценностью. Если человек не выживает, о радости и счастье не может быть и речи. Нелегко выживать в хаотичном, бесчестном и большей частью безнравственном обществе. Любой человек и любая группа стремятся по мере сил получать от жизни удовольствие и избегать боли. <br> Вашему выживанию могут угрожать дурные поступки окружающих вас людей. Из-за бесчестности и дурного поведения окружающих ваше счастье может быть омрачено трагедией и горем. Я уверен, что вы можете вспомнить подобные случаи. Эти дурные поступки снижают способность человека к выживанию и делают его менее счастливым. Вы важны для других людей. К вам прислушиваются. Вы можете влиять на других. Счастье и беды ваших знакомых небезразличны вам. Используя эту книгу, вы без особого труда сможете помочь им выживать и вести более счастливую жизнь. И хотя никто не может гарантировать счастье другого, тем не менее можно повысить его шансы на выживание и счастливую жизнь. А вместе с тем повысятся и ваши шансы. В ваших силах указать дорогу к более безопасной и счастливой жизни.",

    "aboutPageTitle": "<i class='tex'><img class='text-line' src='./images/text-line.svg' alt='img-line'>О Нас</i>",

    "aboutPageDes1": "<span>В 2009 году Маргарита Сотникова</span> - соосновательница Образовательного Холдинг Логос, обучившись в Европе, предоставила индивидуальную консультацию по личностному росту (одитинг) Людмиле Богуш - создательнице Студии Времени Богуштайм. Это было настолько успешным и так изменило жизнь Людмилы, что она предложила Маргарите сотрудничество, которое в результате переросло в появление группы «Планета». Группа объединила профессионалов в области душевного здоровья и личностных консультаций, практикующих одитинг - способ восстановления жизненного потенциала человека посредством избавления человека от накопленной в разуме боли потерь, неудач, болезней и недостигнутых целей.",
    "aboutPageDes2": "<span>К 2013 году к Планете присоединились несколько специалистов</span>, однако объём предоставления группы был невелик, и ограничивался в основном Украиной. ",
    "aboutPageDes3": "<span>В 2014 году к группе присоединился Евгений Сотников</span> - муж Маргариты, совладелец Логоса, бизнес-консультант, кризис-менеджер. Внедрив в Планете основные инструменты управления, Евгений положил начало резкому росту «Планеты», что привлекло внимание американской кинокомпании, которая в 2015 сняла о группе и ее успешных действиях сюжетный фильм, показанный для примера в других подобных организациях по всему миру.",
    "aboutPageDes4": "Успешные действия и стандартный административный подход <span>привели к расширению сферы</span> деятельности группы, в «Планету» на услуги стали приезжать клиенты из 23 стран мира, включая страны Евросоюза и США. Это было обусловлено теми результатами, которые они получали, поскольку, восстановив свой жизненный потенциал, клиенты «Планеты» - в основном владельцы бизнеса, получали безусловный рост и расширение своих компаний. ",
    "aboutPageDes5": "Это привело к тому, что <span>в 2019 году группа стала лучшей в Европе</span>, а 10 ее специалистов возглавили турнирную таблицу в личном зачёте. Кроме того, группа открыла филиалы в СНГ, а затем в 2022, и в США.",
    "aboutPageDes6": "<span>На сегодняшний день наша группа продолжает расти</span>, расширяя своё предоставление на территории не только Украины, но и в других странах мира. Число одиторов группы выросло до 25, а число всего персонала до 60.",

    "contactPageTitle": "Наши контакты",

    "contactPageFormTitle": "Напишите нам сообщение:"
}
},{}],51:[function(require,module,exports){
"use strict";

var _en = _interopRequireDefault(require("../json/localization/en.json"));

var _ru = _interopRequireDefault(require("../json/localization/ru.json"));

var _i18next = _interopRequireDefault(require("i18next"));

var _cookie = require("../utils/cookie");

var _reactI18next = require("react-i18next");

var _languageSelect = require("./language-select.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initLocalization = function initLocalization() {
  if (_i18next.default.isInitialized) {
    return;
  }

  _i18next.default.use(_reactI18next.initReactI18next).init({
    lng: (0, _cookie.getCurrentLang)(),
    resources: {
      en: {
        translation: _objectSpread({}, _en.default)
      },
      ru: {
        translation: _objectSpread({}, _ru.default)
      }
    }
  });

  (0, _languageSelect.changeLanguageOnWebsite)();
};

initLocalization();

},{"../json/localization/en.json":49,"../json/localization/ru.json":50,"../utils/cookie":54,"./language-select.js":52,"i18next":2,"react-i18next":22}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeLanguageOnWebsite = changeLanguageOnWebsite;
exports.initLanguageSelect = initLanguageSelect;

var _i18next = _interopRequireDefault(require("i18next"));

var _cookie = require("../utils/cookie.js");

require("./i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initLanguageSelect() {
  var onChangeLanguage = new Event("onChangeLanguage", {
    "bubbles": true,
    "cancelable": false
  });
  var selectedLang = (0, _cookie.getCurrentLang)();
  var languageSelect = document.querySelector(".language-select");

  if (!languageSelect) {
    return;
  }

  var selectedLanguageBtn = languageSelect.querySelector(".selected-language");
  selectedLanguageBtn.textContent = selectedLang;
  var languageBtns = document.querySelectorAll('.language-button');
  languageBtns.forEach(function (btn) {
    if (btn.dataset.lang === selectedLang) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', function (event) {
      var newLang = btn.dataset.lang;
      selectedLanguageBtn.textContent = newLang;
      removeActiveClass(languageBtns);
      event.target.classList.add('active');

      if (_i18next.default.language !== newLang) {
        (0, _cookie.setLanguage)(newLang).then(function () {
          changeLanguageOnWebsite(); // Trigger react app localization

          if (document.getElementById("test")) {
            btn.dispatchEvent(onChangeLanguage);
          }
        });
      }
    });
  });

  function removeActiveClass(elements) {
    elements.forEach(function (el) {
      el.classList.remove('active');
    });
  }
}

function changeLanguageOnWebsite() {
  var localizationTags = document.querySelectorAll("[data-localization]");
  var localizationPlaceholders = document.querySelectorAll("[data-localization-placeholder]");
  localizationTags.forEach(function (el) {
    el.innerHTML = "".concat(_i18next.default.t(el.dataset.localization, {
      interpolation: {
        escapeValue: false
      }
    }));
  });
  localizationPlaceholders.forEach(function (el) {
    el.placeholder = "".concat(_i18next.default.t(el.dataset.localizationPlaceholder));
  });
}

},{"../utils/cookie.js":54,"./i18n":51,"i18next":2}],53:[function(require,module,exports){
"use strict";

var _link = require("./constants/link.js");

var _regex = require("./constants/regex.js");

var _general = require("./utils/general.js");

var _languageSelect = require("./localization/language-select.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _languageSelect.initLanguageSelect)();
/* header */

var burger = document.querySelector(".burger");
var menuBody = document.querySelector(".menu");
var linkClose = document.querySelectorAll(".link-close");

if (burger) {
  burgerOutsideClick();
  burger.addEventListener("click", openMenu);
}

;

if (linkClose.length) {
  for (var i = 0; i < linkClose.length; ++i) {
    linkClose[i].addEventListener("click", closeMenu);
  }
}

;

function openMenu(e) {
  document.body.classList.toggle("body_lock");
  document.body.classList.toggle("active");

  if (burger.classList.contains('burger_active')) {
    burger.classList.add('burger_finish');
    burger.classList.remove('burger_active');
  } else {
    burger.classList.add('burger_active');
    burger.classList.remove('burger_finish');
  }

  menuBody.classList.toggle("menu_active");
}

function closeMenu(e) {
  document.body.classList.remove("body_lock");
  document.body.classList.remove("active");
  burger.classList.remove("burger_active");
  burger.classList.add('burger_finish');
  menuBody.classList.remove("menu_active");
}

function burgerOutsideClick() {
  var backdrop = document.querySelector('.backdrop');
  backdrop.addEventListener('click', closeMenu);
}
/* popUp */


var overlay = document.querySelector(".overlay");
var popUp = document.querySelector(".pop-up");
var btnOpenPopUp = document.querySelector('.open-popup');
var btnClosePopUp = document.querySelector('.close-popup');

if (btnOpenPopUp) {
  btnOpenPopUp.addEventListener("click", openPopUp);
}

;

if (btnClosePopUp) {
  btnClosePopUp.addEventListener("click", closePopUp);
  overlay.addEventListener("click", closePopUp);
}

;

function openPopUp(e) {
  overlay.classList.add("active");
  popUp.classList.add("active");
  document.body.classList.add("body_lock");
}

function closePopUp(e) {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
  document.body.classList.remove("body_lock");
}
/* navmenu service pages */


var tabsBtn = document.querySelectorAll('.tab_nav-btn');
var tabsItem = document.querySelectorAll('.tab_list');
tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute('data-tab');
    var currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('btn_active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('btn_active');
      });
      tabsItem.forEach(function (item) {
        item.classList.remove('list_active');
      });
      currentBtn.classList.add('btn_active');
      currentTab.classList.add('list_active');
    }
  });
}); // Swiper:

function destroySlidersOnResize(selector, width, obj, moreThan) {
  var init = _objectSpread({}, obj);

  var win = window;
  var sliderSelector = document.querySelector(selector);
  if (!sliderSelector) return;
  var swiper = new Swiper(selector, init);

  var toggleInit = function toggleInit() {
    var neededWidth = moreThan ? win.innerWidth >= width : win.innerWidth <= width;

    if (neededWidth) {
      if (!sliderSelector.classList.contains("swiper-initialized")) {
        swiper = new Swiper(selector, init);
      }
    } else if (sliderSelector.classList.contains("swiper-initialized")) {
      swiper.destroy();
    }
  };

  ["load", "resize"].forEach(function (evt) {
    return win.addEventListener(evt, toggleInit, false);
  });
}

destroySlidersOnResize(".reviews-slider", 99999, {
  spaceBetween: 20,
  speed: 800,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
/* reviews opener */

var reviewsBlock = document.querySelectorAll(".text-wrap");
reviewsBlock.forEach(function (review) {
  var btnOpen = review.querySelector('.rev-open');
  var btnClose = review.querySelector('.rev-close');

  if (btnOpen) {
    btnOpen.addEventListener('click', function () {
      review.classList.add("active_review");
    });
    btnClose.addEventListener('click', function () {
      review.classList.remove("active_review");
    });
  }
});
new WOW().init();
/* castom anim */

function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}

var options = {
  threshold: [0.5]
};
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.element-animation');

var _iterator = _createForOfIteratorHelper(elements),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var elm = _step.value;
    observer.observe(elm);
  }
  /* active link page */

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
    navItem = document.querySelector("[data-id-nav=".concat(pageId, "]"));

if (pageId == navItem.getAttribute("data-id-nav")) {
  navItem.classList.add("active-link");
}
/* contact form */


initContactForm();

function initContactForm() {
  var formWrap = document.querySelector(".form-wrap");
  if (!formWrap) return;
  var form = formWrap.querySelector("#contactForm");
  if (!form) return;
  var successMsgBlock = formWrap.querySelector('.success-msg');
  var formContent = formWrap.querySelector('.form-content');
  var EMAIL_REGEX = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var firstNameInput = form.querySelector("#firstName");
  var lastNameInput = form.querySelector("#lastName");
  var emailInput = form.querySelector("#email");
  var messageInput = form.querySelector("#message");
  var firstNameErrorEl = form.querySelector("#firstNameError");
  var lastNameErrorEl = form.querySelector("#lastNameError");
  var emailErrorEl = form.querySelector("#emailError");
  var fetchErrorEl = formWrap.querySelector('.fetch-error');
  var spinner = document.querySelector('.spinnerWrap');
  var isFormValid = false;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm("firstNameInput", firstNameInput.value);
    validateForm("lastNameInput", lastNameInput.value);
    validateForm("emailInput", emailInput.value);
    if (!isFormValid) return;
    fetchErrorEl.classList.remove('active');
    var request = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };
    spinner.classList.remove('d-none');
    fetch(_link.PLANET_ENDPOINT_CONTACT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify(request)
    }).then(function (res) {
      if (res.ok) {
        successMsgBlock.classList.add('active');
        formContent.classList.add('d-none');
        spinner.classList.add('d-none');
        formWrap.classList.add('form-send');
      } else {
        fetchErrorEl.classList.add('active');
      }
    }).catch(function (error) {
      console.log("error: ", error);
      fetchErrorEl.classList.add('active');
    }).finally(function () {
      spinner.classList.add('d-none');
    });
  });
  firstNameInput.addEventListener("input", function (event) {
    validateForm("firstNameInput", event.target.value);
  });
  lastNameInput.addEventListener("input", function (event) {
    validateForm("lastNameInput", event.target.value);
  });
  emailInput.addEventListener("input", function (event) {
    validateForm("emailInput", event.target.value);
  });

  function validateForm(field, value) {
    switch (field) {
      case "firstNameInput":
        if (value < 1) {
          firstNameErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        firstNameErrorEl.classList.remove("active");
        break;

      case "lastNameInput":
        if (value < 1) {
          lastNameErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        lastNameErrorEl.classList.remove("active");
        break;

      case "emailInput":
        if (!EMAIL_REGEX.test(value)) {
          emailErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        emailErrorEl.classList.remove("active");
        break;
    }
  }
}
/* contact form */


initCourseForm();

function initCourseForm() {
  var formWrap = document.querySelector(".form-wrap");
  if (!formWrap) return;
  var form = formWrap.querySelector("#courseForm");
  if (!form) return;
  var successMsgBlock = formWrap.querySelector('.success-msg');
  var formContent = formWrap.querySelector('.form-content');
  var firstNameInput = form.querySelector("#firstName");
  var lastNameInput = form.querySelector("#lastName");
  var emailInput = form.querySelector("#email");
  var phoneInput = form.querySelector("#phone");
  var firstNameErrorEl = form.querySelector("#firstNameError");
  var lastNameErrorEl = form.querySelector("#lastNameError");
  var phoneErrorEl = form.querySelector("#phoneError");
  var fetchErrorEl = formWrap.querySelector('.fetch-error');
  var spinner = document.querySelector('.spinnerWrap');
  var isFormValid = false;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm("firstNameInput", firstNameInput.value);
    validateForm("lastNameInput", lastNameInput.value);
    validateForm("emailInput", emailInput.value);
    validateForm("phoneInput", phoneInput.value);
    if (!isFormValid) return;
    fetchErrorEl.classList.remove('active');
    var request = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      phoneNumber: phoneInput.value
    };
    spinner.classList.remove('d-none');
    fetch(_link.PLANET_ENDPOINT_COURSE, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify(request)
    }).then(function (res) {
      if (res.ok) {
        successMsgBlock.classList.add('active');
        formContent.classList.add('d-none');
        spinner.classList.add('d-none');
        formWrap.classList.add('form-send');
      } else {
        fetchErrorEl.classList.add('active');
      }
    }).catch(function (error) {
      console.log("error: ", error);
      fetchErrorEl.classList.add('active');
    }).finally(function () {
      spinner.classList.add('d-none');
    });
  });
  firstNameInput.addEventListener("input", function (event) {
    validateForm("firstNameInput", event.target.value);
  });
  lastNameInput.addEventListener("input", function (event) {
    validateForm("lastNameInput", event.target.value);
  });
  phoneInput.addEventListener("input", function (event) {
    validateForm("phoneInput", event.target.value);
  });

  function validateForm(field, value) {
    switch (field) {
      case "firstNameInput":
        if (value < 1) {
          firstNameErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        firstNameErrorEl.classList.remove("active");
        break;

      case "lastNameInput":
        if (value < 1) {
          lastNameErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        lastNameErrorEl.classList.remove("active");
        break;

      case "phoneInput":
        var phoneValue = value ? value.replace(/\D/g, "") : '';
        var maskedPhoneNumber = (0, _general.maskPhoneNumber)(phoneValue);
        phoneInput.value = maskedPhoneNumber;

        if (!_regex.PHONE_REGEX.test(maskedPhoneNumber)) {
          phoneErrorEl.classList.add("active");
          isFormValid = false;
          return;
        }

        isFormValid = true;
        phoneErrorEl.classList.remove("active");
        break;
    }
  }
}
/* services menu logic */


initServiceMenu();

function initServiceMenu() {
  var menuItem = document.querySelectorAll(".menu-item");
  document.addEventListener("click", function (event) {
    var targetElement = event.target;

    if (targetElement.classList.contains('arrows')) {
      closeOpenItems();
      targetElement.closest('.menu-item').classList.toggle('menu-item_active');
    } else {
      closeOpenItems();
    }

    ;
  });

  function closeOpenItems() {
    menuItem.forEach(function (el) {
      el.classList.remove('menu-item_active');
    });
  }
}
/* Sticky */


initStickyMenu();

function initStickyMenu() {
  var menuEl = document.querySelector('.menu-sec');
  if (!menuEl) return;
  var originMenuTop = menuEl.offsetParent.offsetTop;
  document.addEventListener('scroll', function () {
    if (window.scrollY > originMenuTop) {
      menuEl.classList.add('fixed');
    } else {
      menuEl.classList.remove('fixed');
    }

    ;
  });
}

},{"./constants/link.js":47,"./constants/regex.js":48,"./localization/language-select.js":52,"./utils/general.js":55}],54:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentLang = exports.setLanguage = exports.getCookie = exports.setCookie = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _cookie = require("../constants/cookie.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setCookie = function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

exports.setCookie = setCookie;

var getCookie = function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
};

exports.getCookie = getCookie;

var setLanguage = function setLanguage(newLang) {
  setCookie(_cookie.LANG, newLang); // window.location.reload();

  return _i18next.default.changeLanguage(newLang);
};

exports.setLanguage = setLanguage;

var getCurrentLang = function getCurrentLang() {
  var selectedLang = getCookie(_cookie.LANG);

  if (!selectedLang) {
    setCookie(_cookie.LANG, _cookie.LANGS_TYPES.RU);
    selectedLang = _cookie.LANGS_TYPES.RU;
  }

  return selectedLang;
};

exports.getCurrentLang = getCurrentLang;

},{"../constants/cookie.js":46,"i18next":2}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maskPhoneNumber = void 0;

var maskPhoneNumber = function maskPhoneNumber(phoneNumber) {
  var length = phoneNumber.length;

  if (length > 8) {
    return "(".concat(phoneNumber.slice(0, 3), ") ").concat(phoneNumber.slice(3, 6), " ").concat(phoneNumber.slice(6, 8), " ").concat(phoneNumber.slice(8, 10));
  }

  if (length > 6) {
    return "(".concat(phoneNumber.slice(0, 3), ") ").concat(phoneNumber.slice(3, 6), " ").concat(phoneNumber.slice(6));
  }

  if (length > 3) {
    return "(".concat(phoneNumber.slice(0, 3), ") ").concat(phoneNumber.slice(3));
  }

  return phoneNumber;
};

exports.maskPhoneNumber = maskPhoneNumber;

},{}]},{},[53])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkvZGlzdC9odG1sLXBhcnNlLXN0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L2Rpc3QvY2pzL2kxOG5leHQuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy9JMThuZXh0UHJvdmlkZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2NvbW1vbmpzL1RyYW5zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy9UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2NvbW1vbmpzL3VuZXNjYXBlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy91c2VTU1IuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2NvbW1vbmpzL3VzZVRyYW5zbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvd2l0aFNTUi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvd2l0aFRyYW5zbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdm9pZC1lbGVtZW50cy9pbmRleC5qcyIsInNyYy9qcy9jb25zdGFudHMvY29va2llLmpzIiwic3JjL2pzL2NvbnN0YW50cy9saW5rLmpzIiwic3JjL2pzL2NvbnN0YW50cy9yZWdleC5qcyIsInNyYy9qcy9qc29uL2xvY2FsaXphdGlvbi9lbi5qc29uIiwic3JjL2pzL2pzb24vbG9jYWxpemF0aW9uL3J1Lmpzb24iLCJzcmMvanMvbG9jYWxpemF0aW9uL2kxOG4uanMiLCJzcmMvanMvbG9jYWxpemF0aW9uL2xhbmd1YWdlLXNlbGVjdC5qcyIsInNyYy9qcy9tYWluLmpzIiwic3JjL2pzL3V0aWxzL2Nvb2tpZS5qcyIsInNyYy9qcy91dGlscy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQk8sSUFBTSxRQUFRLEdBQUcsVUFBakI7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsTUFBYjs7QUFDQSxJQUFNLFdBQVcsR0FBRztBQUN2QixFQUFBLEVBQUUsRUFBRSxJQURtQjtBQUV2QixFQUFBLEVBQUUsRUFBRSxJQUZtQjtBQUd2QixFQUFBLEVBQUUsRUFBRTtBQUhtQixDQUFwQjs7Ozs7Ozs7OztBQ0ZBLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxHQUN2QixNQUFNLENBQUMsUUFBUCxDQUFnQixNQURPLEdBRXZCLDhDQUZHOztBQUlBLElBQU0sZUFBZSxhQUFNLFdBQU4sWUFBckI7O0FBQ0EsSUFBTSx1QkFBdUIsYUFBTSxXQUFOLGFBQTdCOztBQUNBLElBQU0sc0JBQXNCLGFBQU0sV0FBTixZQUE1Qjs7Ozs7Ozs7OztBQ05BLElBQU0sV0FBVyxHQUFHLCtCQUFwQjs7QUFDQSxJQUFNLFdBQVcsR0FBRyx5Q0FBcEI7Ozs7QUNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2YUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFtQixHQUFNO0FBQzdCLE1BQUksaUJBQVEsYUFBWixFQUEyQjtBQUN6QjtBQUNEOztBQUNELG1CQUFRLEdBQVIsQ0FBWSw4QkFBWixFQUE4QixJQUE5QixDQUFtQztBQUNqQyxJQUFBLEdBQUcsRUFBRSw2QkFENEI7QUFFakMsSUFBQSxTQUFTLEVBQUU7QUFDVCxNQUFBLEVBQUUsRUFBRTtBQUNGLFFBQUEsV0FBVyxvQkFDTixXQURNO0FBRFQsT0FESztBQU1ULE1BQUEsRUFBRSxFQUFFO0FBQ0YsUUFBQSxXQUFXLG9CQUNOLFdBRE07QUFEVDtBQU5LO0FBRnNCLEdBQW5DOztBQWVBO0FBQ0QsQ0FwQkQ7O0FBc0JBLGdCQUFnQjs7Ozs7Ozs7Ozs7QUM3QmhCOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBUyxrQkFBVCxHQUE4QjtBQUU1QixNQUFNLGdCQUFnQixHQUFHLElBQUksS0FBSixDQUFVLGtCQUFWLEVBQThCO0FBQUMsZUFBVSxJQUFYO0FBQWlCLGtCQUFhO0FBQTlCLEdBQTlCLENBQXpCO0FBRUEsTUFBTSxZQUFZLEdBQUcsNkJBQXJCO0FBRUEsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXZCOztBQUVBLE1BQUksQ0FBQyxjQUFMLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsTUFBTSxtQkFBbUIsR0FDekIsY0FBYyxDQUFDLGFBQWYsQ0FBNkIsb0JBQTdCLENBREE7QUFHQSxFQUFBLG1CQUFtQixDQUFDLFdBQXBCLEdBQWtDLFlBQWxDO0FBRUEsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLGtCQUExQixDQUFyQjtBQUNBLEVBQUEsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsVUFBQyxHQUFELEVBQVM7QUFDNUIsUUFBRyxHQUFHLENBQUMsT0FBSixDQUFZLElBQVosS0FBcUIsWUFBeEIsRUFBc0M7QUFDcEMsTUFBQSxHQUFHLENBQUMsU0FBSixDQUFjLEdBQWQsQ0FBa0IsUUFBbEI7QUFDRDs7QUFDRCxJQUFBLEdBQUcsQ0FBQyxnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDLEtBQUQsRUFBVztBQUN2QyxVQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBSixDQUFZLElBQTVCO0FBQ0EsTUFBQSxtQkFBbUIsQ0FBQyxXQUFwQixHQUFrQyxPQUFsQztBQUNBLE1BQUEsaUJBQWlCLENBQUMsWUFBRCxDQUFqQjtBQUNBLE1BQUEsS0FBSyxDQUFDLE1BQU4sQ0FBYSxTQUFiLENBQXVCLEdBQXZCLENBQTJCLFFBQTNCOztBQUVBLFVBQUcsaUJBQVEsUUFBUixLQUFxQixPQUF4QixFQUFpQztBQUMvQixpQ0FBWSxPQUFaLEVBQXFCLElBQXJCLENBQTBCLFlBQU07QUFDOUIsVUFBQSx1QkFBdUIsR0FETyxDQUU5Qjs7QUFDQSxjQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQUgsRUFBb0M7QUFDbEMsWUFBQSxHQUFHLENBQUMsYUFBSixDQUFrQixnQkFBbEI7QUFDRDtBQUNGLFNBTkQ7QUFPRDtBQUNGLEtBZkQ7QUFnQkQsR0FwQkQ7O0FBc0JBLFdBQVMsaUJBQVQsQ0FBMkIsUUFBM0IsRUFBcUM7QUFDbkMsSUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFDLEVBQUQsRUFBUTtBQUN2QixNQUFBLEVBQUUsQ0FBQyxTQUFILENBQWEsTUFBYixDQUFvQixRQUFwQjtBQUNELEtBRkQ7QUFHRDtBQUNGOztBQUVELFNBQVMsdUJBQVQsR0FBbUM7QUFFakMsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQXpCO0FBQ0EsTUFBTSx3QkFBd0IsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FDL0IsaUNBRCtCLENBQWpDO0FBSUEsRUFBQSxnQkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixVQUFDLEVBQUQsRUFBUTtBQUMvQixJQUFBLEVBQUUsQ0FBQyxTQUFILGFBQWtCLGlCQUFRLENBQVIsQ0FBVSxFQUFFLENBQUMsT0FBSCxDQUFXLFlBQXJCLEVBQW1DO0FBQ25ELE1BQUEsYUFBYSxFQUFFO0FBQ2IsUUFBQSxXQUFXLEVBQUU7QUFEQTtBQURvQyxLQUFuQyxDQUFsQjtBQUtELEdBTkQ7QUFRQSxFQUFBLHdCQUF3QixDQUFDLE9BQXpCLENBQWlDLFVBQUMsRUFBRCxFQUFRO0FBQ3ZDLElBQUEsRUFBRSxDQUFDLFdBQUgsYUFBb0IsaUJBQVEsQ0FBUixDQUFVLEVBQUUsQ0FBQyxPQUFILENBQVcsdUJBQXJCLENBQXBCO0FBQ0QsR0FGRDtBQUdEOzs7OztBQ3JFRDs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBOztBQUVBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUNBLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixhQUExQixDQUFsQjs7QUFHQSxJQUFJLE1BQUosRUFBWTtBQUNWLEVBQUEsa0JBQWtCO0FBQ2xCLEVBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFFBQWpDO0FBQ0Q7O0FBQUE7O0FBRUQsSUFBSSxTQUFTLENBQUMsTUFBZCxFQUFzQjtBQUNwQixPQUFJLElBQUksQ0FBQyxHQUFFLENBQVgsRUFBYSxDQUFDLEdBQUMsU0FBUyxDQUFDLE1BQXpCLEVBQWdDLEVBQUUsQ0FBbEMsRUFBb0M7QUFDbEMsSUFBQSxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDRDtBQUNGOztBQUFBOztBQUVELFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQjtBQUNuQixFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixXQUEvQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLFFBQS9COztBQUNBLE1BQUcsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsZUFBMUIsQ0FBSCxFQUErQztBQUMzQyxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0EsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNELEdBSEgsTUFHUztBQUNMLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsZUFBckI7QUFDQSxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLGVBQXhCO0FBQ0Q7O0FBQ0gsRUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixhQUExQjtBQUNEOztBQUVELFNBQVMsU0FBVCxDQUFtQixDQUFuQixFQUFzQjtBQUNwQixFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixXQUEvQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLFFBQS9CO0FBQ0EsRUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNBLEVBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsZUFBckI7QUFDQSxFQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLE1BQW5CLENBQTBCLGFBQTFCO0FBQ0Q7O0FBRUQsU0FBUyxrQkFBVCxHQUE4QjtBQUM1QixNQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBQ0EsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsU0FBbkM7QUFDRDtBQUVEOzs7QUFFQSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWQ7QUFDQSxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFyQjtBQUNBLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQXRCOztBQUdBLElBQUksWUFBSixFQUFrQjtBQUNoQixFQUFBLFlBQVksQ0FBQyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxTQUF2QztBQUNEOztBQUFBOztBQUVELElBQUksYUFBSixFQUFtQjtBQUNqQixFQUFBLGFBQWEsQ0FBQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUF4QztBQUNBLEVBQUEsT0FBTyxDQUFDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQWxDO0FBQ0Q7O0FBQUE7O0FBRUQsU0FBUyxTQUFULENBQW9CLENBQXBCLEVBQXNCO0FBQ3BCLEVBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQSxFQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFFBQXBCO0FBQ0EsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsV0FBNUI7QUFDRDs7QUFFRCxTQUFTLFVBQVQsQ0FBb0IsQ0FBcEIsRUFBdUI7QUFDckIsRUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixNQUFsQixDQUF5QixRQUF6QjtBQUNBLEVBQUEsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsUUFBdkI7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixXQUEvQjtBQUNEO0FBRUQ7OztBQUVBLElBQU0sT0FBTyxHQUFJLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixjQUExQixDQUFqQjtBQUNBLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixXQUExQixDQUFqQjtBQUVBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLFVBQVMsSUFBVCxFQUFlO0FBQzNCLEVBQUEsSUFBSSxDQUFDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVU7QUFDckMsUUFBSSxVQUFVLEdBQUcsSUFBakI7QUFDQSxRQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsWUFBWCxDQUF3QixVQUF4QixDQUFaO0FBQ0EsUUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7O0FBRUEsUUFBSSxDQUFFLFVBQVUsQ0FBQyxTQUFYLENBQXFCLFFBQXJCLENBQThCLFlBQTlCLENBQU4sRUFBbUQ7QUFDL0MsTUFBQSxPQUFPLENBQUMsT0FBUixDQUFnQixVQUFTLElBQVQsRUFBZTtBQUMzQixRQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQixZQUF0QjtBQUNILE9BRkQ7QUFJQSxNQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQVMsSUFBVCxFQUFlO0FBQzVCLFFBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGFBQXRCO0FBQ0gsT0FGRDtBQUlBLE1BQUEsVUFBVSxDQUFDLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsWUFBekI7QUFDQSxNQUFBLFVBQVUsQ0FBQyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLGFBQXpCO0FBQ0g7QUFDSixHQWpCRDtBQWtCSCxDQW5CRCxFLENBcUJBOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsUUFBaEMsRUFBMEMsS0FBMUMsRUFBaUQsR0FBakQsRUFBc0QsUUFBdEQsRUFBZ0U7QUFDOUQsTUFBTSxJQUFJLHFCQUNMLEdBREssQ0FBVjs7QUFJQSxNQUFNLEdBQUcsR0FBRyxNQUFaO0FBQ0EsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7QUFFQSxNQUFHLENBQUMsY0FBSixFQUFvQjtBQUVwQixNQUFJLE1BQU0sR0FBRyxJQUFJLE1BQUosQ0FBVyxRQUFYLEVBQXFCLElBQXJCLENBQWI7O0FBRUEsTUFBTSxVQUFVLEdBQUcsU0FBYixVQUFhLEdBQU07QUFDdkIsUUFBTSxXQUFXLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQyxVQUFKLElBQWtCLEtBQXJCLEdBQTZCLEdBQUcsQ0FBQyxVQUFKLElBQWtCLEtBQTNFOztBQUNBLFFBQUksV0FBSixFQUFpQjtBQUNmLFVBQUksQ0FBQyxjQUFjLENBQUMsU0FBZixDQUF5QixRQUF6QixDQUFrQyxvQkFBbEMsQ0FBTCxFQUE4RDtBQUM1RCxRQUFBLE1BQU0sR0FBRyxJQUFJLE1BQUosQ0FBVyxRQUFYLEVBQXFCLElBQXJCLENBQVQ7QUFDRDtBQUNGLEtBSkQsTUFJTyxJQUFJLGNBQWMsQ0FBQyxTQUFmLENBQXlCLFFBQXpCLENBQWtDLG9CQUFsQyxDQUFKLEVBQTZEO0FBQ2xFLE1BQUEsTUFBTSxDQUFDLE9BQVA7QUFDRDtBQUNGLEdBVEQ7O0FBV0EsR0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixDQUEyQixVQUFDLEdBQUQ7QUFBQSxXQUN6QixHQUFHLENBQUMsZ0JBQUosQ0FBcUIsR0FBckIsRUFBMEIsVUFBMUIsRUFBc0MsS0FBdEMsQ0FEeUI7QUFBQSxHQUEzQjtBQUdEOztBQUVELHNCQUFzQixDQUFDLGlCQUFELEVBQW9CLEtBQXBCLEVBQTJCO0FBQy9DLEVBQUEsWUFBWSxFQUFFLEVBRGlDO0FBRS9DLEVBQUEsS0FBSyxFQUFFLEdBRndDO0FBRy9DLEVBQUEsVUFBVSxFQUFFLElBSG1DO0FBSy9DLEVBQUEsVUFBVSxFQUFFO0FBQ1YsSUFBQSxNQUFNLEVBQUUscUJBREU7QUFFVixJQUFBLE1BQU0sRUFBRTtBQUZFO0FBTG1DLENBQTNCLENBQXRCO0FBV0E7O0FBRUEsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFlBQTFCLENBQXJCO0FBRUEsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsVUFBUyxNQUFULEVBQWdCO0FBQ25DLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFQLENBQXFCLFdBQXJCLENBQWhCO0FBQ0EsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsWUFBckIsQ0FBakI7O0FBRUEsTUFBRyxPQUFILEVBQVc7QUFDVCxJQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFVO0FBQzFDLE1BQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsZUFBckI7QUFDRCxLQUZEO0FBSUEsSUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsWUFBVTtBQUMzQyxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLGVBQXhCO0FBQ0QsS0FGRDtBQUdEO0FBQ0YsQ0FiRDtBQWVBLElBQUksR0FBSixHQUFVLElBQVY7QUFFQTs7QUFFQSxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDdEIsRUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFVBQUEsTUFBTSxFQUFJO0FBQ3RCLFFBQUksTUFBTSxDQUFDLGNBQVgsRUFBMkI7QUFDekIsTUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEIsY0FBNUI7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFDRCxJQUFJLE9BQU8sR0FBRztBQUFFLEVBQUEsU0FBUyxFQUFFLENBQUMsR0FBRDtBQUFiLENBQWQ7QUFDQSxJQUFJLFFBQVEsR0FBRyxJQUFJLG9CQUFKLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLENBQWY7QUFDQSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsb0JBQTFCLENBQWY7OzJDQUNnQixROzs7O0FBQWhCLHNEQUEwQjtBQUFBLFFBQWpCLEdBQWlCO0FBQ3hCLElBQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsR0FBakI7QUFDRDtBQUVEOzs7Ozs7OztBQUVBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixFQUF5QyxZQUF6QyxDQUFzRCxjQUF0RCxDQUFiO0FBQUEsSUFDSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsd0JBQXVDLE1BQXZDLE9BRGQ7O0FBR0EsSUFBRyxNQUFNLElBQUksT0FBTyxDQUFDLFlBQVIsQ0FBcUIsYUFBckIsQ0FBYixFQUFrRDtBQUM5QyxFQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLGFBQXRCO0FBQ0g7QUFFRDs7O0FBQ0EsZUFBZTs7QUFFZixTQUFTLGVBQVQsR0FBMkI7QUFDekIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFFQSxNQUFJLENBQUMsUUFBTCxFQUFlO0FBRWYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjtBQUVBLE1BQUcsQ0FBQyxJQUFKLEVBQVU7QUFFVixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUF4QjtBQUNBLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsTUFBTSxXQUFXLEdBQUcseUNBQXBCO0FBQ0EsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsWUFBbkIsQ0FBdkI7QUFDQSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixXQUFuQixDQUF0QjtBQUNBLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLFFBQW5CLENBQW5CO0FBQ0EsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsVUFBbkIsQ0FBckI7QUFDQSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLGlCQUFuQixDQUF6QjtBQUNBLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLGdCQUFuQixDQUF4QjtBQUNBLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLGFBQW5CLENBQXJCO0FBQ0EsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBckI7QUFDQSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBLE1BQUksV0FBVyxHQUFHLEtBQWxCO0FBRUEsRUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBQyxDQUFELEVBQU87QUFDckMsSUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLElBQUEsWUFBWSxDQUFDLGdCQUFELEVBQW1CLGNBQWMsQ0FBQyxLQUFsQyxDQUFaO0FBQ0EsSUFBQSxZQUFZLENBQUMsZUFBRCxFQUFrQixhQUFhLENBQUMsS0FBaEMsQ0FBWjtBQUNBLElBQUEsWUFBWSxDQUFDLFlBQUQsRUFBZSxVQUFVLENBQUMsS0FBMUIsQ0FBWjtBQUVBLFFBQUcsQ0FBQyxXQUFKLEVBQWlCO0FBRWpCLElBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsUUFBOUI7QUFFQSxRQUFNLE9BQU8sR0FBRztBQUNkLE1BQUEsU0FBUyxFQUFFLGNBQWMsQ0FBQyxLQURaO0FBRWQsTUFBQSxRQUFRLEVBQUUsYUFBYSxDQUFDLEtBRlY7QUFHZCxNQUFBLEtBQUssRUFBRSxVQUFVLENBQUMsS0FISjtBQUlkLE1BQUEsT0FBTyxFQUFFLFlBQVksQ0FBQztBQUpSLEtBQWhCO0FBT0EsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixNQUFsQixDQUF5QixRQUF6QjtBQUVBLElBQUEsS0FBSyxDQUFDLDZCQUFELEVBQTBCO0FBQzdCLE1BQUEsTUFBTSxFQUFFLE1BRHFCO0FBRTdCLE1BQUEsT0FBTyxFQUFFO0FBQ1AsUUFBQSxNQUFNLEVBQUUsa0JBREQ7QUFFUCx3QkFBZ0I7QUFGVCxPQUZvQjtBQU03QixNQUFBLFFBQVEsRUFBRSxRQU5tQjtBQU83QixNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFQdUIsS0FBMUIsQ0FBTCxDQVNHLElBVEgsQ0FTUSxVQUFDLEdBQUQsRUFBUztBQUNiLFVBQUksR0FBRyxDQUFDLEVBQVIsRUFBWTtBQUNWLFFBQUEsZUFBZSxDQUFDLFNBQWhCLENBQTBCLEdBQTFCLENBQThCLFFBQTlCO0FBQ0EsUUFBQSxXQUFXLENBQUMsU0FBWixDQUFzQixHQUF0QixDQUEwQixRQUExQjtBQUNBLFFBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQSxRQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0QsT0FMRCxNQUtPO0FBQ0wsUUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjtBQUNEO0FBQ0YsS0FsQkgsRUFtQkcsS0FuQkgsQ0FtQlMsVUFBQyxLQUFELEVBQVc7QUFDaEIsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBdUIsS0FBdkI7QUFDQSxNQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0QsS0F0QkgsRUF1QkcsT0F2QkgsQ0F1QlcsWUFBTTtBQUNiLE1BQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRCxLQXpCSDtBQTJCRCxHQTlDRDtBQWdEQSxFQUFBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFDLEtBQUQsRUFBVztBQUNsRCxJQUFBLFlBQVksQ0FBQyxnQkFBRCxFQUFtQixLQUFLLENBQUMsTUFBTixDQUFhLEtBQWhDLENBQVo7QUFDRCxHQUZEO0FBR0EsRUFBQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBQyxLQUFELEVBQVc7QUFDakQsSUFBQSxZQUFZLENBQUMsZUFBRCxFQUFrQixLQUFLLENBQUMsTUFBTixDQUFhLEtBQS9CLENBQVo7QUFDRCxHQUZEO0FBR0EsRUFBQSxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQyxLQUFELEVBQVc7QUFDOUMsSUFBQSxZQUFZLENBQUMsWUFBRCxFQUFlLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBNUIsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsV0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DO0FBQ2xDLFlBQVEsS0FBUjtBQUNFLFdBQUssZ0JBQUw7QUFDRSxZQUFHLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDWixVQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLFFBQS9CO0FBQ0EsVUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNBLFFBQUEsZ0JBQWdCLENBQUMsU0FBakIsQ0FBMkIsTUFBM0IsQ0FBa0MsUUFBbEM7QUFDQTs7QUFDRixXQUFLLGVBQUw7QUFDRSxZQUFHLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDWixVQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixRQUE5QjtBQUNBLFVBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQTtBQUNEOztBQUNELFFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQSxRQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixNQUExQixDQUFpQyxRQUFqQztBQUNBOztBQUNGLFdBQUssWUFBTDtBQUNFLFlBQUcsQ0FBQyxXQUFXLENBQUMsSUFBWixDQUFpQixLQUFqQixDQUFKLEVBQTZCO0FBQzNCLFVBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDQSxVQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0E7QUFDRDs7QUFDRCxRQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0EsUUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixNQUF2QixDQUE4QixRQUE5QjtBQUNBO0FBM0JKO0FBNkJEO0FBQ0Y7QUFFRDs7O0FBQ0EsY0FBYzs7QUFFZCxTQUFTLGNBQVQsR0FBMEI7QUFDeEIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFFQSxNQUFJLENBQUMsUUFBTCxFQUFlO0FBRWYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBYjtBQUVBLE1BQUcsQ0FBQyxJQUFKLEVBQVU7QUFFVixNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUF4QjtBQUNBLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsWUFBbkIsQ0FBdkI7QUFDQSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixXQUFuQixDQUF0QjtBQUNBLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLFFBQW5CLENBQW5CO0FBQ0EsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsUUFBbkIsQ0FBbkI7QUFDQSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLGlCQUFuQixDQUF6QjtBQUNBLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLGdCQUFuQixDQUF4QjtBQUNBLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLGFBQW5CLENBQXJCO0FBQ0EsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBckI7QUFDQSxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBLE1BQUksV0FBVyxHQUFHLEtBQWxCO0FBRUEsRUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsVUFBQyxDQUFELEVBQU87QUFDckMsSUFBQSxDQUFDLENBQUMsY0FBRjtBQUNBLElBQUEsWUFBWSxDQUFDLGdCQUFELEVBQW1CLGNBQWMsQ0FBQyxLQUFsQyxDQUFaO0FBQ0EsSUFBQSxZQUFZLENBQUMsZUFBRCxFQUFrQixhQUFhLENBQUMsS0FBaEMsQ0FBWjtBQUNBLElBQUEsWUFBWSxDQUFDLFlBQUQsRUFBZSxVQUFVLENBQUMsS0FBMUIsQ0FBWjtBQUNBLElBQUEsWUFBWSxDQUFDLFlBQUQsRUFBZSxVQUFVLENBQUMsS0FBMUIsQ0FBWjtBQUVBLFFBQUcsQ0FBQyxXQUFKLEVBQWlCO0FBRWpCLElBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsUUFBOUI7QUFFQSxRQUFNLE9BQU8sR0FBRztBQUNkLE1BQUEsU0FBUyxFQUFFLGNBQWMsQ0FBQyxLQURaO0FBRWQsTUFBQSxRQUFRLEVBQUUsYUFBYSxDQUFDLEtBRlY7QUFHZCxNQUFBLEtBQUssRUFBRSxVQUFVLENBQUMsS0FISjtBQUlkLE1BQUEsV0FBVyxFQUFFLFVBQVUsQ0FBQztBQUpWLEtBQWhCO0FBT0EsSUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixNQUFsQixDQUF5QixRQUF6QjtBQUVBLElBQUEsS0FBSyxDQUFDLDRCQUFELEVBQXlCO0FBQzVCLE1BQUEsTUFBTSxFQUFFLE1BRG9CO0FBRTVCLE1BQUEsT0FBTyxFQUFFO0FBQ1AsUUFBQSxNQUFNLEVBQUUsa0JBREQ7QUFFUCx3QkFBZ0I7QUFGVCxPQUZtQjtBQU01QixNQUFBLFFBQVEsRUFBRSxRQU5rQjtBQU81QixNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFQc0IsS0FBekIsQ0FBTCxDQVNHLElBVEgsQ0FTUSxVQUFDLEdBQUQsRUFBUztBQUNiLFVBQUksR0FBRyxDQUFDLEVBQVIsRUFBWTtBQUNWLFFBQUEsZUFBZSxDQUFDLFNBQWhCLENBQTBCLEdBQTFCLENBQThCLFFBQTlCO0FBQ0EsUUFBQSxXQUFXLENBQUMsU0FBWixDQUFzQixHQUF0QixDQUEwQixRQUExQjtBQUNBLFFBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQSxRQUFBLFFBQVEsQ0FBQyxTQUFULENBQW1CLEdBQW5CLENBQXVCLFdBQXZCO0FBQ0QsT0FMRCxNQUtPO0FBQ0wsUUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjtBQUNEO0FBQ0YsS0FsQkgsRUFtQkcsS0FuQkgsQ0FtQlMsVUFBQyxLQUFELEVBQVc7QUFDaEIsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBdUIsS0FBdkI7QUFDQSxNQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0QsS0F0QkgsRUF1QkcsT0F2QkgsQ0F1QlcsWUFBTTtBQUNiLE1BQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDRCxLQXpCSDtBQTJCRCxHQS9DRDtBQWlEQSxFQUFBLGNBQWMsQ0FBQyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFDLEtBQUQsRUFBVztBQUNsRCxJQUFBLFlBQVksQ0FBQyxnQkFBRCxFQUFtQixLQUFLLENBQUMsTUFBTixDQUFhLEtBQWhDLENBQVo7QUFDRCxHQUZEO0FBR0EsRUFBQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBQyxLQUFELEVBQVc7QUFDakQsSUFBQSxZQUFZLENBQUMsZUFBRCxFQUFrQixLQUFLLENBQUMsTUFBTixDQUFhLEtBQS9CLENBQVo7QUFDRCxHQUZEO0FBR0EsRUFBQSxVQUFVLENBQUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQyxLQUFELEVBQVc7QUFDOUMsSUFBQSxZQUFZLENBQUMsWUFBRCxFQUFlLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBNUIsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsV0FBUyxZQUFULENBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DO0FBQ2xDLFlBQVEsS0FBUjtBQUNFLFdBQUssZ0JBQUw7QUFDRSxZQUFHLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDWixVQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLEdBQTNCLENBQStCLFFBQS9CO0FBQ0EsVUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNBLFFBQUEsZ0JBQWdCLENBQUMsU0FBakIsQ0FBMkIsTUFBM0IsQ0FBa0MsUUFBbEM7QUFDQTs7QUFDRixXQUFLLGVBQUw7QUFDRSxZQUFHLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDWixVQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixRQUE5QjtBQUNBLFVBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQTtBQUNEOztBQUNELFFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQSxRQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixNQUExQixDQUFpQyxRQUFqQztBQUNBOztBQUNGLFdBQUssWUFBTDtBQUNFLFlBQU0sVUFBVSxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTixDQUFjLEtBQWQsRUFBcUIsRUFBckIsQ0FBSCxHQUE4QixFQUF0RDtBQUNBLFlBQU0saUJBQWlCLEdBQUcsOEJBQWdCLFVBQWhCLENBQTFCO0FBQ0EsUUFBQSxVQUFVLENBQUMsS0FBWCxHQUFtQixpQkFBbkI7O0FBQ0EsWUFBRyxDQUFDLG1CQUFZLElBQVosQ0FBaUIsaUJBQWpCLENBQUosRUFBeUM7QUFDdkMsVUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjtBQUNBLFVBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQTtBQUNEOztBQUNELFFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQSxRQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBQ0E7QUE5Qko7QUFnQ0Q7QUFDRjtBQUVEOzs7QUFDQSxlQUFlOztBQUVmLFNBQVMsZUFBVCxHQUEyQjtBQUN6QixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBakI7QUFFQSxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDLEtBQUQsRUFBVztBQUM1QyxRQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBNUI7O0FBRUEsUUFBSSxhQUFhLENBQUMsU0FBZCxDQUF3QixRQUF4QixDQUFpQyxRQUFqQyxDQUFKLEVBQWdEO0FBQzlDLE1BQUEsY0FBYztBQUNkLE1BQUEsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsU0FBcEMsQ0FBOEMsTUFBOUMsQ0FBcUQsa0JBQXJEO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsTUFBQSxjQUFjO0FBQ2Y7O0FBQUE7QUFDRixHQVREOztBQVdBLFdBQVMsY0FBVCxHQUEwQjtBQUN4QixJQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUMsRUFBRCxFQUFRO0FBQ3ZCLE1BQUEsRUFBRSxDQUFDLFNBQUgsQ0FBYSxNQUFiLENBQW9CLGtCQUFwQjtBQUNELEtBRkQ7QUFHRDtBQUNGO0FBRUQ7OztBQUNBLGNBQWM7O0FBRWQsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQWY7QUFFQSxNQUFHLENBQUMsTUFBSixFQUFZO0FBRVosTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsU0FBMUM7QUFFQSxFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFNO0FBQ3hDLFFBQUcsTUFBTSxDQUFDLE9BQVAsR0FBaUIsYUFBcEIsRUFBbUM7QUFDakMsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixPQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMLE1BQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsT0FBeEI7QUFDRDs7QUFBQTtBQUNGLEdBTkQ7QUFPRDs7Ozs7Ozs7OztBQ3ZkRDs7QUFDQTs7OztBQUVPLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLEVBQTJCO0FBQ2xELE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSixFQUFWO0FBQ0EsRUFBQSxDQUFDLENBQUMsT0FBRixDQUFVLENBQUMsQ0FBQyxPQUFGLEtBQWMsTUFBTSxHQUFHLEVBQVQsR0FBYyxFQUFkLEdBQW1CLEVBQW5CLEdBQXdCLElBQWhEO0FBQ0EsTUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUMsV0FBRixFQUEzQjtBQUNBLEVBQUEsUUFBUSxDQUFDLE1BQVQsR0FBa0IsS0FBSyxHQUFHLEdBQVIsR0FBYyxNQUFkLEdBQXVCLEdBQXZCLEdBQTZCLE9BQTdCLEdBQXVDLFNBQXpEO0FBQ0QsQ0FMTTs7OztBQU9BLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFDLEtBQUQsRUFBVztBQUNsQyxNQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBbkI7QUFDQSxNQUFJLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBVixDQUF0QztBQUNBLE1BQUksRUFBRSxHQUFHLGFBQWEsQ0FBQyxLQUFkLENBQW9CLEdBQXBCLENBQVQ7O0FBQ0EsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBdkIsRUFBK0IsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQyxRQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBRCxDQUFWOztBQUNBLFdBQU8sQ0FBQyxDQUFDLE1BQUYsQ0FBUyxDQUFULEtBQWUsR0FBdEIsRUFBMkI7QUFDekIsTUFBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxDQUFaLENBQUo7QUFDRDs7QUFDRCxRQUFJLENBQUMsQ0FBQyxPQUFGLENBQVUsSUFBVixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixhQUFPLENBQUMsQ0FBQyxTQUFGLENBQVksSUFBSSxDQUFDLE1BQWpCLEVBQXlCLENBQUMsQ0FBQyxNQUEzQixDQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLEVBQVA7QUFDRCxDQWRNOzs7O0FBZ0JBLElBQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFDLE9BQUQsRUFBYTtBQUN0QyxFQUFBLFNBQVMsQ0FBQyxZQUFELEVBQU8sT0FBUCxDQUFULENBRHNDLENBRXRDOztBQUNBLFNBQU8saUJBQVEsY0FBUixDQUF1QixPQUF2QixDQUFQO0FBQ0QsQ0FKTTs7OztBQU1BLElBQU0sY0FBYyxHQUFHLFNBQWpCLGNBQWlCLEdBQU07QUFDbEMsTUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFlBQUQsQ0FBNUI7O0FBRUEsTUFBSSxDQUFDLFlBQUwsRUFBbUI7QUFDakIsSUFBQSxTQUFTLENBQUMsWUFBRCxFQUFPLG9CQUFZLEVBQW5CLENBQVQ7QUFDQSxJQUFBLFlBQVksR0FBRyxvQkFBWSxFQUEzQjtBQUNEOztBQUVELFNBQU8sWUFBUDtBQUNELENBVE07Ozs7Ozs7Ozs7OztBQ2hDQSxJQUFNLGVBQWUsR0FBRyxTQUFsQixlQUFrQixDQUFDLFdBQUQsRUFBaUI7QUFDOUMsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQTNCOztBQUVBLE1BQUksTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZCxzQkFBVyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFYLGVBQXVDLFdBQVcsQ0FBQyxLQUFaLENBQ3JDLENBRHFDLEVBRXJDLENBRnFDLENBQXZDLGNBR0ssV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FITCxjQUdnQyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixFQUFyQixDQUhoQztBQUlEOztBQUVELE1BQUksTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZCxzQkFBVyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFYLGVBQXVDLFdBQVcsQ0FBQyxLQUFaLENBQ3JDLENBRHFDLEVBRXJDLENBRnFDLENBQXZDLGNBR0ssV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FITDtBQUlEOztBQUVELE1BQUksTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZCxzQkFBVyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFYLGVBQXVDLFdBQVcsQ0FBQyxLQUFaLENBQWtCLENBQWxCLENBQXZDO0FBQ0Q7O0FBRUQsU0FBTyxXQUFQO0FBQ0QsQ0F0Qk0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgZSx0PShlPXJlcXVpcmUoXCJ2b2lkLWVsZW1lbnRzXCIpKSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJlwiZGVmYXVsdFwiaW4gZT9lLmRlZmF1bHQ6ZSxuPS9cXHMoW14nXCIvXFxzPjxdKz8pW1xccy8+XXwoW15cXHM9XSspPVxccz8oXCIuKj9cInwnLio/JykvZztmdW5jdGlvbiByKGUpe3ZhciByPXt0eXBlOlwidGFnXCIsbmFtZTpcIlwiLHZvaWRFbGVtZW50OiExLGF0dHJzOnt9LGNoaWxkcmVuOltdfSxpPWUubWF0Y2goLzxcXC8/KFteXFxzXSs/KVsvXFxzPl0vKTtpZihpJiYoci5uYW1lPWlbMV0sKHRbaVsxXV18fFwiL1wiPT09ZS5jaGFyQXQoZS5sZW5ndGgtMikpJiYoci52b2lkRWxlbWVudD0hMCksci5uYW1lLnN0YXJ0c1dpdGgoXCIhLS1cIikpKXt2YXIgcz1lLmluZGV4T2YoXCItLVxceDNlXCIpO3JldHVybnt0eXBlOlwiY29tbWVudFwiLGNvbW1lbnQ6LTEhPT1zP2Uuc2xpY2UoNCxzKTpcIlwifX1mb3IodmFyIGM9bmV3IFJlZ0V4cChuKSxhPW51bGw7bnVsbCE9PShhPWMuZXhlYyhlKSk7KWlmKGFbMF0udHJpbSgpKWlmKGFbMV0pe3ZhciBvPWFbMV0udHJpbSgpLHU9W28sXCJcIl07by5pbmRleE9mKFwiPVwiKT4tMSYmKHU9by5zcGxpdChcIj1cIikpLHIuYXR0cnNbdVswXV09dVsxXSxjLmxhc3RJbmRleC0tfWVsc2UgYVsyXSYmKHIuYXR0cnNbYVsyXV09YVszXS50cmltKCkuc3Vic3RyaW5nKDEsYVszXS5sZW5ndGgtMSkpO3JldHVybiByfXZhciBpPS88W2EtekEtWjAtOVxcLVxcIVxcL10oPzpcIlteXCJdKlwifCdbXiddKid8W14nXCI+XSkqPi9nLHM9L15cXHMqJC8sYz1PYmplY3QuY3JlYXRlKG51bGwpO2Z1bmN0aW9uIGEoZSx0KXtzd2l0Y2godC50eXBlKXtjYXNlXCJ0ZXh0XCI6cmV0dXJuIGUrdC5jb250ZW50O2Nhc2VcInRhZ1wiOnJldHVybiBlKz1cIjxcIit0Lm5hbWUrKHQuYXR0cnM/ZnVuY3Rpb24oZSl7dmFyIHQ9W107Zm9yKHZhciBuIGluIGUpdC5wdXNoKG4rJz1cIicrZVtuXSsnXCInKTtyZXR1cm4gdC5sZW5ndGg/XCIgXCIrdC5qb2luKFwiIFwiKTpcIlwifSh0LmF0dHJzKTpcIlwiKSsodC52b2lkRWxlbWVudD9cIi8+XCI6XCI+XCIpLHQudm9pZEVsZW1lbnQ/ZTplK3QuY2hpbGRyZW4ucmVkdWNlKGEsXCJcIikrXCI8L1wiK3QubmFtZStcIj5cIjtjYXNlXCJjb21tZW50XCI6cmV0dXJuIGUrXCJcXHgzYyEtLVwiK3QuY29tbWVudCtcIi0tXFx4M2VcIn19bW9kdWxlLmV4cG9ydHM9e3BhcnNlOmZ1bmN0aW9uKGUsdCl7dHx8KHQ9e30pLHQuY29tcG9uZW50c3x8KHQuY29tcG9uZW50cz1jKTt2YXIgbixhPVtdLG89W10sdT0tMSxsPSExO2lmKDAhPT1lLmluZGV4T2YoXCI8XCIpKXt2YXIgbT1lLmluZGV4T2YoXCI8XCIpO2EucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50Oi0xPT09bT9lOmUuc3Vic3RyaW5nKDAsbSl9KX1yZXR1cm4gZS5yZXBsYWNlKGksZnVuY3Rpb24oaSxjKXtpZihsKXtpZihpIT09XCI8L1wiK24ubmFtZStcIj5cIilyZXR1cm47bD0hMX12YXIgbSxkPVwiL1wiIT09aS5jaGFyQXQoMSksZj1pLnN0YXJ0c1dpdGgoXCJcXHgzYyEtLVwiKSxoPWMraS5sZW5ndGgscD1lLmNoYXJBdChoKTtpZihmKXt2YXIgdj1yKGkpO3JldHVybiB1PDA/KGEucHVzaCh2KSxhKTooKG09b1t1XSkuY2hpbGRyZW4ucHVzaCh2KSxhKX1pZihkJiYodSsrLFwidGFnXCI9PT0obj1yKGkpKS50eXBlJiZ0LmNvbXBvbmVudHNbbi5uYW1lXSYmKG4udHlwZT1cImNvbXBvbmVudFwiLGw9ITApLG4udm9pZEVsZW1lbnR8fGx8fCFwfHxcIjxcIj09PXB8fG4uY2hpbGRyZW4ucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50OmUuc2xpY2UoaCxlLmluZGV4T2YoXCI8XCIsaCkpfSksMD09PXUmJmEucHVzaChuKSwobT1vW3UtMV0pJiZtLmNoaWxkcmVuLnB1c2gobiksb1t1XT1uKSwoIWR8fG4udm9pZEVsZW1lbnQpJiYodT4tMSYmKG4udm9pZEVsZW1lbnR8fG4ubmFtZT09PWkuc2xpY2UoMiwtMSkpJiYodS0tLG49LTE9PT11P2E6b1t1XSksIWwmJlwiPFwiIT09cCYmcCkpe209LTE9PT11P2E6b1t1XS5jaGlsZHJlbjt2YXIgeD1lLmluZGV4T2YoXCI8XCIsaCksZz1lLnNsaWNlKGgsLTE9PT14P3ZvaWQgMDp4KTtzLnRlc3QoZykmJihnPVwiIFwiKSwoeD4tMSYmdSttLmxlbmd0aD49MHx8XCIgXCIhPT1nKSYmbS5wdXNoKHt0eXBlOlwidGV4dFwiLGNvbnRlbnQ6Z30pfX0pLGF9LHN0cmluZ2lmeTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSthKFwiXCIsdCl9LFwiXCIpfX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sLXBhcnNlLXN0cmluZ2lmeS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZicpO1xudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcbnZhciBfY3JlYXRlQ2xhc3MgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG52YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkJyk7XG52YXIgX2luaGVyaXRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZicpO1xudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcbnZhciBfdG9BcnJheSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9BcnJheScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHRMZWdhY3kgKGUpIHsgcmV0dXJuIGUgJiYgdHlwZW9mIGUgPT09ICdvYmplY3QnICYmICdkZWZhdWx0JyBpbiBlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIF90eXBlb2ZfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF90eXBlb2YpO1xudmFyIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX2NsYXNzQ2FsbENoZWNrKTtcbnZhciBfY3JlYXRlQ2xhc3NfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF9jcmVhdGVDbGFzcyk7XG52YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplZF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX2Fzc2VydFRoaXNJbml0aWFsaXplZCk7XG52YXIgX2luaGVyaXRzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfaW5oZXJpdHMpO1xudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybik7XG52YXIgX2dldFByb3RvdHlwZU9mX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfZ2V0UHJvdG90eXBlT2YpO1xudmFyIF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX2RlZmluZVByb3BlcnR5KTtcbnZhciBfdG9BcnJheV9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX3RvQXJyYXkpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5X19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGNvbnNvbGVMb2dnZXIgPSB7XG4gIHR5cGU6ICdsb2dnZXInLFxuICBsb2c6IGZ1bmN0aW9uIGxvZyhhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ2xvZycsIGFyZ3MpO1xuICB9LFxuICB3YXJuOiBmdW5jdGlvbiB3YXJuKGFyZ3MpIHtcbiAgICB0aGlzLm91dHB1dCgnd2FybicsIGFyZ3MpO1xuICB9LFxuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoYXJncykge1xuICAgIHRoaXMub3V0cHV0KCdlcnJvcicsIGFyZ3MpO1xuICB9LFxuICBvdXRwdXQ6IGZ1bmN0aW9uIG91dHB1dCh0eXBlLCBhcmdzKSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZVt0eXBlXSkgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxufTtcblxudmFyIExvZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTG9nZ2VyKGNvbmNyZXRlTG9nZ2VyKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgTG9nZ2VyKTtcblxuICAgIHRoaXMuaW5pdChjb25jcmV0ZUxvZ2dlciwgb3B0aW9ucyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3NfX2RlZmF1bHRbJ2RlZmF1bHQnXShMb2dnZXIsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChjb25jcmV0ZUxvZ2dlcikge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdGhpcy5wcmVmaXggPSBvcHRpb25zLnByZWZpeCB8fCAnaTE4bmV4dDonO1xuICAgICAgdGhpcy5sb2dnZXIgPSBjb25jcmV0ZUxvZ2dlciB8fCBjb25zb2xlTG9nZ2VyO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRoaXMuZGVidWcgPSBvcHRpb25zLmRlYnVnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXREZWJ1Z1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWJ1Zyhib29sKSB7XG4gICAgICB0aGlzLmRlYnVnID0gYm9vbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGFyZ3MsICdsb2cnLCAnJywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIndhcm5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2FybigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ3dhcm4nLCAnJywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnZXJyb3InLCAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlcHJlY2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXByZWNhdGUoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGFyZ3MsICd3YXJuJywgJ1dBUk5JTkcgREVQUkVDQVRFRDogJywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcndhcmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9yd2FyZChhcmdzLCBsdmwsIHByZWZpeCwgZGVidWdPbmx5KSB7XG4gICAgICBpZiAoZGVidWdPbmx5ICYmICF0aGlzLmRlYnVnKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIGFyZ3NbMF0gPSBcIlwiLmNvbmNhdChwcmVmaXgpLmNvbmNhdCh0aGlzLnByZWZpeCwgXCIgXCIpLmNvbmNhdChhcmdzWzBdKTtcbiAgICAgIHJldHVybiB0aGlzLmxvZ2dlcltsdmxdKGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjcmVhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlKG1vZHVsZU5hbWUpIHtcbiAgICAgIHJldHVybiBuZXcgTG9nZ2VyKHRoaXMubG9nZ2VyLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHtcbiAgICAgICAgcHJlZml4OiBcIlwiLmNvbmNhdCh0aGlzLnByZWZpeCwgXCI6XCIpLmNvbmNhdChtb2R1bGVOYW1lLCBcIjpcIilcbiAgICAgIH0pLCB0aGlzLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9nZ2VyO1xufSgpO1xuXG52YXIgYmFzZUxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxudmFyIEV2ZW50RW1pdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIEV2ZW50RW1pdHRlcik7XG5cbiAgICB0aGlzLm9ic2VydmVycyA9IHt9O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oRXZlbnRFbWl0dGVyLCBbe1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudHMsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBfdGhpcy5vYnNlcnZlcnNbZXZlbnRdID0gX3RoaXMub2JzZXJ2ZXJzW2V2ZW50XSB8fCBbXTtcblxuICAgICAgICBfdGhpcy5vYnNlcnZlcnNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib2ZmXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICghdGhpcy5vYnNlcnZlcnNbZXZlbnRdKSByZXR1cm47XG5cbiAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2V2ZW50XTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9ic2VydmVyc1tldmVudF0gPSB0aGlzLm9ic2VydmVyc1tldmVudF0uZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9ic2VydmVyc1tldmVudF0pIHtcbiAgICAgICAgdmFyIGNsb25lZCA9IFtdLmNvbmNhdCh0aGlzLm9ic2VydmVyc1tldmVudF0pO1xuICAgICAgICBjbG9uZWQuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICBvYnNlcnZlci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzWycqJ10pIHtcbiAgICAgICAgdmFyIF9jbG9uZWQgPSBbXS5jb25jYXQodGhpcy5vYnNlcnZlcnNbJyonXSk7XG5cbiAgICAgICAgX2Nsb25lZC5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgIG9ic2VydmVyLmFwcGx5KG9ic2VydmVyLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KCk7XG5cbmZ1bmN0aW9uIGRlZmVyKCkge1xuICB2YXIgcmVzO1xuICB2YXIgcmVqO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZXMgPSByZXNvbHZlO1xuICAgIHJlaiA9IHJlamVjdDtcbiAgfSk7XG4gIHByb21pc2UucmVzb2x2ZSA9IHJlcztcbiAgcHJvbWlzZS5yZWplY3QgPSByZWo7XG4gIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gbWFrZVN0cmluZyhvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSByZXR1cm4gJyc7XG4gIHJldHVybiAnJyArIG9iamVjdDtcbn1cbmZ1bmN0aW9uIGNvcHkoYSwgcywgdCkge1xuICBhLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICBpZiAoc1ttXSkgdFttXSA9IHNbbV07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0T2ZQYXRoKG9iamVjdCwgcGF0aCwgRW1wdHkpIHtcbiAgZnVuY3Rpb24gY2xlYW5LZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSAmJiBrZXkuaW5kZXhPZignIyMjJykgPiAtMSA/IGtleS5yZXBsYWNlKC8jIyMvZywgJy4nKSA6IGtleTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbk5vdFRyYXZlcnNlRGVlcGVyKCkge1xuICAgIHJldHVybiAhb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgdmFyIHN0YWNrID0gdHlwZW9mIHBhdGggIT09ICdzdHJpbmcnID8gW10uY29uY2F0KHBhdGgpIDogcGF0aC5zcGxpdCgnLicpO1xuXG4gIHdoaWxlIChzdGFjay5sZW5ndGggPiAxKSB7XG4gICAgaWYgKGNhbk5vdFRyYXZlcnNlRGVlcGVyKCkpIHJldHVybiB7fTtcbiAgICB2YXIga2V5ID0gY2xlYW5LZXkoc3RhY2suc2hpZnQoKSk7XG4gICAgaWYgKCFvYmplY3Rba2V5XSAmJiBFbXB0eSkgb2JqZWN0W2tleV0gPSBuZXcgRW1wdHkoKTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0ID0ge307XG4gICAgfVxuICB9XG5cbiAgaWYgKGNhbk5vdFRyYXZlcnNlRGVlcGVyKCkpIHJldHVybiB7fTtcbiAgcmV0dXJuIHtcbiAgICBvYmo6IG9iamVjdCxcbiAgICBrOiBjbGVhbktleShzdGFjay5zaGlmdCgpKVxuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRQYXRoKG9iamVjdCwgcGF0aCwgbmV3VmFsdWUpIHtcbiAgdmFyIF9nZXRMYXN0T2ZQYXRoID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCksXG4gICAgICBvYmogPSBfZ2V0TGFzdE9mUGF0aC5vYmosXG4gICAgICBrID0gX2dldExhc3RPZlBhdGguaztcblxuICBvYmpba10gPSBuZXdWYWx1ZTtcbn1cbmZ1bmN0aW9uIHB1c2hQYXRoKG9iamVjdCwgcGF0aCwgbmV3VmFsdWUsIGNvbmNhdCkge1xuICB2YXIgX2dldExhc3RPZlBhdGgyID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIE9iamVjdCksXG4gICAgICBvYmogPSBfZ2V0TGFzdE9mUGF0aDIub2JqLFxuICAgICAgayA9IF9nZXRMYXN0T2ZQYXRoMi5rO1xuXG4gIG9ialtrXSA9IG9ialtrXSB8fCBbXTtcbiAgaWYgKGNvbmNhdCkgb2JqW2tdID0gb2JqW2tdLmNvbmNhdChuZXdWYWx1ZSk7XG4gIGlmICghY29uY2F0KSBvYmpba10ucHVzaChuZXdWYWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRQYXRoKG9iamVjdCwgcGF0aCkge1xuICB2YXIgX2dldExhc3RPZlBhdGgzID0gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgpLFxuICAgICAgb2JqID0gX2dldExhc3RPZlBhdGgzLm9iaixcbiAgICAgIGsgPSBfZ2V0TGFzdE9mUGF0aDMuaztcblxuICBpZiAoIW9iaikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgcmV0dXJuIG9ialtrXTtcbn1cbmZ1bmN0aW9uIGdldFBhdGhXaXRoRGVmYXVsdHMoZGF0YSwgZGVmYXVsdERhdGEsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRQYXRoKGRhdGEsIGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gZ2V0UGF0aChkZWZhdWx0RGF0YSwga2V5KTtcbn1cbmZ1bmN0aW9uIGRlZXBFeHRlbmQodGFyZ2V0LCBzb3VyY2UsIG92ZXJ3cml0ZSkge1xuICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgIGlmIChwcm9wICE9PSAnX19wcm90b19fJyAmJiBwcm9wICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICBpZiAocHJvcCBpbiB0YXJnZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRbcHJvcF0gPT09ICdzdHJpbmcnIHx8IHRhcmdldFtwcm9wXSBpbnN0YW5jZW9mIFN0cmluZyB8fCB0eXBlb2Ygc291cmNlW3Byb3BdID09PSAnc3RyaW5nJyB8fCBzb3VyY2VbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICBpZiAob3ZlcndyaXRlKSB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSwgb3ZlcndyaXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiByZWdleEVzY2FwZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpO1xufVxudmFyIF9lbnRpdHlNYXAgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmIzM5OycsXG4gICcvJzogJyYjeDJGOydcbn07XG5mdW5jdGlvbiBlc2NhcGUoZGF0YSkge1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBfZW50aXR5TWFwW3NdO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG52YXIgaXNJRTEwID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvciAmJiB0eXBlb2Ygd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnREYXRhID09PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPiAtMTtcbnZhciBjaGFycyA9IFsnICcsICcsJywgJz8nLCAnIScsICc7J107XG5mdW5jdGlvbiBsb29rc0xpa2VPYmplY3RQYXRoKGtleSwgbnNTZXBhcmF0b3IsIGtleVNlcGFyYXRvcikge1xuICBuc1NlcGFyYXRvciA9IG5zU2VwYXJhdG9yIHx8ICcnO1xuICBrZXlTZXBhcmF0b3IgPSBrZXlTZXBhcmF0b3IgfHwgJyc7XG4gIHZhciBwb3NzaWJsZUNoYXJzID0gY2hhcnMuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIG5zU2VwYXJhdG9yLmluZGV4T2YoYykgPCAwICYmIGtleVNlcGFyYXRvci5pbmRleE9mKGMpIDwgMDtcbiAgfSk7XG4gIGlmIChwb3NzaWJsZUNoYXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XG4gIHZhciByID0gbmV3IFJlZ0V4cChcIihcIi5jb25jYXQocG9zc2libGVDaGFycy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYyA9PT0gJz8nID8gJ1xcXFw/JyA6IGM7XG4gIH0pLmpvaW4oJ3wnKSwgXCIpXCIpKTtcbiAgdmFyIG1hdGNoZWQgPSAhci50ZXN0KGtleSk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgdmFyIGtpID0ga2V5LmluZGV4T2Yoa2V5U2VwYXJhdG9yKTtcblxuICAgIGlmIChraSA+IDAgJiYgIXIudGVzdChrZXkuc3Vic3RyaW5nKDAsIGtpKSkpIHtcbiAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzJDEob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5X19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQxKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2ZfX2RlZmF1bHRbJ2RlZmF1bHQnXShEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gZGVlcEZpbmQob2JqLCBwYXRoKSB7XG4gIHZhciBrZXlTZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcuJztcbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIGlmIChvYmpbcGF0aF0pIHJldHVybiBvYmpbcGF0aF07XG4gIHZhciBwYXRocyA9IHBhdGguc3BsaXQoa2V5U2VwYXJhdG9yKTtcbiAgdmFyIGN1cnJlbnQgPSBvYmo7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7ICsraSkge1xuICAgIGlmICghY3VycmVudCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgY3VycmVudFtwYXRoc1tpXV0gPT09ICdzdHJpbmcnICYmIGkgKyAxIDwgcGF0aHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50W3BhdGhzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgaiA9IDI7XG4gICAgICB2YXIgcCA9IHBhdGhzLnNsaWNlKGksIGkgKyBqKS5qb2luKGtleVNlcGFyYXRvcik7XG4gICAgICB2YXIgbWl4ID0gY3VycmVudFtwXTtcblxuICAgICAgd2hpbGUgKG1peCA9PT0gdW5kZWZpbmVkICYmIHBhdGhzLmxlbmd0aCA+IGkgKyBqKSB7XG4gICAgICAgIGorKztcbiAgICAgICAgcCA9IHBhdGhzLnNsaWNlKGksIGkgKyBqKS5qb2luKGtleVNlcGFyYXRvcik7XG4gICAgICAgIG1peCA9IGN1cnJlbnRbcF07XG4gICAgICB9XG5cbiAgICAgIGlmIChtaXggPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGlmIChtaXggPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICBpZiAocGF0aC5lbmRzV2l0aChwKSkge1xuICAgICAgICBpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycpIHJldHVybiBtaXg7XG4gICAgICAgIGlmIChwICYmIHR5cGVvZiBtaXhbcF0gPT09ICdzdHJpbmcnKSByZXR1cm4gbWl4W3BdO1xuICAgICAgfVxuXG4gICAgICB2YXIgam9pbmVkUGF0aCA9IHBhdGhzLnNsaWNlKGkgKyBqKS5qb2luKGtleVNlcGFyYXRvcik7XG4gICAgICBpZiAoam9pbmVkUGF0aCkgcmV0dXJuIGRlZXBGaW5kKG1peCwgam9pbmVkUGF0aCwga2V5U2VwYXJhdG9yKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG5cbnZhciBSZXNvdXJjZVN0b3JlID0gZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzX19kZWZhdWx0WydkZWZhdWx0J10oUmVzb3VyY2VTdG9yZSwgX0V2ZW50RW1pdHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihSZXNvdXJjZVN0b3JlKTtcblxuICBmdW5jdGlvbiBSZXNvdXJjZVN0b3JlKGRhdGEpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgbnM6IFsndHJhbnNsYXRpb24nXSxcbiAgICAgIGRlZmF1bHROUzogJ3RyYW5zbGF0aW9uJ1xuICAgIH07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCBSZXNvdXJjZVN0b3JlKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBpZiAoaXNJRTEwKSB7XG4gICAgICBFdmVudEVtaXR0ZXIuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMpKTtcbiAgICB9XG5cbiAgICBfdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmIChfdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBfdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9ICcuJztcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oUmVzb3VyY2VTdG9yZSwgW3tcbiAgICBrZXk6IFwiYWRkTmFtZXNwYWNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGROYW1lc3BhY2VzKG5zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5zLmluZGV4T2YobnMpIDwgMCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMubnMucHVzaChucyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZU5hbWVzcGFjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTmFtZXNwYWNlcyhucykge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5vcHRpb25zLm5zLmluZGV4T2YobnMpO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMubnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVzb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzb3VyY2UobG5nLCBucywga2V5KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgICB2YXIga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICAgIHZhciBpZ25vcmVKU09OU3RydWN0dXJlID0gb3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgOiB0aGlzLm9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZTtcbiAgICAgIHZhciBwYXRoID0gW2xuZywgbnNdO1xuICAgICAgaWYgKGtleSAmJiB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGguY29uY2F0KGtleSk7XG4gICAgICBpZiAoa2V5ICYmIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aC5jb25jYXQoa2V5U2VwYXJhdG9yID8ga2V5LnNwbGl0KGtleVNlcGFyYXRvcikgOiBrZXkpO1xuXG4gICAgICBpZiAobG5nLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IGdldFBhdGgodGhpcy5kYXRhLCBwYXRoKTtcbiAgICAgIGlmIChyZXN1bHQgfHwgIWlnbm9yZUpTT05TdHJ1Y3R1cmUgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHJldHVybiByZXN1bHQ7XG4gICAgICByZXR1cm4gZGVlcEZpbmQodGhpcy5kYXRhICYmIHRoaXMuZGF0YVtsbmddICYmIHRoaXMuZGF0YVtsbmddW25zXSwga2V5LCBrZXlTZXBhcmF0b3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRSZXNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRSZXNvdXJjZShsbmcsIG5zLCBrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge1xuICAgICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIGtleVNlcGFyYXRvciA9IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgICBpZiAoa2V5U2VwYXJhdG9yID09PSB1bmRlZmluZWQpIGtleVNlcGFyYXRvciA9ICcuJztcbiAgICAgIHZhciBwYXRoID0gW2xuZywgbnNdO1xuICAgICAgaWYgKGtleSkgcGF0aCA9IHBhdGguY29uY2F0KGtleVNlcGFyYXRvciA/IGtleS5zcGxpdChrZXlTZXBhcmF0b3IpIDoga2V5KTtcblxuICAgICAgaWYgKGxuZy5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICBwYXRoID0gbG5nLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhbHVlID0gbnM7XG4gICAgICAgIG5zID0gcGF0aFsxXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGROYW1lc3BhY2VzKG5zKTtcbiAgICAgIHNldFBhdGgodGhpcy5kYXRhLCBwYXRoLCB2YWx1ZSk7XG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFJlc291cmNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRSZXNvdXJjZXMobG5nLCBucywgcmVzb3VyY2VzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge1xuICAgICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBtIGluIHJlc291cmNlcykge1xuICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlc1ttXSA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShyZXNvdXJjZXNbbV0pID09PSAnW29iamVjdCBBcnJheV0nKSB0aGlzLmFkZFJlc291cmNlKGxuZywgbnMsIG0sIHJlc291cmNlc1ttXSwge1xuICAgICAgICAgIHNpbGVudDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdhZGRlZCcsIGxuZywgbnMsIHJlc291cmNlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFJlc291cmNlQnVuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFJlc291cmNlQnVuZGxlKGxuZywgbnMsIHJlc291cmNlcywgZGVlcCwgb3ZlcndyaXRlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDoge1xuICAgICAgICBzaWxlbnQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdmFyIHBhdGggPSBbbG5nLCBuc107XG5cbiAgICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IGxuZy5zcGxpdCgnLicpO1xuICAgICAgICBkZWVwID0gcmVzb3VyY2VzO1xuICAgICAgICByZXNvdXJjZXMgPSBucztcbiAgICAgICAgbnMgPSBwYXRoWzFdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFkZE5hbWVzcGFjZXMobnMpO1xuICAgICAgdmFyIHBhY2sgPSBnZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCkgfHwge307XG5cbiAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgIGRlZXBFeHRlbmQocGFjaywgcmVzb3VyY2VzLCBvdmVyd3JpdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFjayA9IF9vYmplY3RTcHJlYWQkMShfb2JqZWN0U3ByZWFkJDEoe30sIHBhY2spLCByZXNvdXJjZXMpO1xuICAgICAgfVxuXG4gICAgICBzZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCwgcGFjayk7XG4gICAgICBpZiAoIW9wdGlvbnMuc2lsZW50KSB0aGlzLmVtaXQoJ2FkZGVkJywgbG5nLCBucywgcmVzb3VyY2VzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlUmVzb3VyY2VCdW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgICAgaWYgKHRoaXMuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZGF0YVtsbmddW25zXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1vdmVOYW1lc3BhY2VzKG5zKTtcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlZCcsIGxuZywgbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNSZXNvdXJjZUJ1bmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShsbmcsIG5zKSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZXNvdXJjZUJ1bmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgICBpZiAoIW5zKSBucyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0TlM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgPT09ICd2MScpIHJldHVybiBfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LCB7fSksIHRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucykpO1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldERhdGFCeUxhbmd1YWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhdGFCeUxhbmd1YWdlKGxuZykge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVtsbmddO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zKGxuZykge1xuICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGFCeUxhbmd1YWdlKGxuZyk7XG4gICAgICB2YXIgbiA9IGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkgfHwgW107XG4gICAgICByZXR1cm4gISFuLmZpbmQoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbdl0gJiYgT2JqZWN0LmtleXMoZGF0YVt2XSkubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b0pTT05cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmVzb3VyY2VTdG9yZTtcbn0oRXZlbnRFbWl0dGVyKTtcblxudmFyIHBvc3RQcm9jZXNzb3IgPSB7XG4gIHByb2Nlc3NvcnM6IHt9LFxuICBhZGRQb3N0UHJvY2Vzc29yOiBmdW5jdGlvbiBhZGRQb3N0UHJvY2Vzc29yKG1vZHVsZSkge1xuICAgIHRoaXMucHJvY2Vzc29yc1ttb2R1bGUubmFtZV0gPSBtb2R1bGU7XG4gIH0sXG4gIGhhbmRsZTogZnVuY3Rpb24gaGFuZGxlKHByb2Nlc3NvcnMsIHZhbHVlLCBrZXksIG9wdGlvbnMsIHRyYW5zbGF0b3IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcHJvY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9jZXNzb3IpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9jZXNzb3JzW3Byb2Nlc3Nvcl0pIHZhbHVlID0gX3RoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdLnByb2Nlc3ModmFsdWUsIGtleSwgb3B0aW9ucywgdHJhbnNsYXRvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBvd25LZXlzJDIob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDIodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5X19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQyKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMShEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mX19kZWZhdWx0WydkZWZhdWx0J10oRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZl9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybl9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQxKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cbnZhciBjaGVja2VkTG9hZGVkRm9yID0ge307XG5cbnZhciBUcmFuc2xhdG9yID0gZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzX19kZWZhdWx0WydkZWZhdWx0J10oVHJhbnNsYXRvciwgX0V2ZW50RW1pdHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQxKFRyYW5zbGF0b3IpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zbGF0b3Ioc2VydmljZXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCBUcmFuc2xhdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBpZiAoaXNJRTEwKSB7XG4gICAgICBFdmVudEVtaXR0ZXIuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMpKTtcbiAgICB9XG5cbiAgICBjb3B5KFsncmVzb3VyY2VTdG9yZScsICdsYW5ndWFnZVV0aWxzJywgJ3BsdXJhbFJlc29sdmVyJywgJ2ludGVycG9sYXRvcicsICdiYWNrZW5kQ29ubmVjdG9yJywgJ2kxOG5Gb3JtYXQnLCAndXRpbHMnXSwgc2VydmljZXMsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpcykpO1xuICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgaWYgKF90aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIF90aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yID0gJy4nO1xuICAgIH1cblxuICAgIF90aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCd0cmFuc2xhdG9yJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oVHJhbnNsYXRvciwgW3tcbiAgICBrZXk6IFwiY2hhbmdlTGFuZ3VhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2UobG5nKSB7XG4gICAgICBpZiAobG5nKSB0aGlzLmxhbmd1YWdlID0gbG5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleGlzdHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXhpc3RzKGtleSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge31cbiAgICAgIH07XG5cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmUoa2V5LCBvcHRpb25zKTtcbiAgICAgIHJldHVybiByZXNvbHZlZCAmJiByZXNvbHZlZC5yZXMgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdEZyb21LZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdEZyb21LZXkoa2V5LCBvcHRpb25zKSB7XG4gICAgICB2YXIgbnNTZXBhcmF0b3IgPSBvcHRpb25zLm5zU2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zU2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuICAgICAgaWYgKG5zU2VwYXJhdG9yID09PSB1bmRlZmluZWQpIG5zU2VwYXJhdG9yID0gJzonO1xuICAgICAgdmFyIGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgICB2YXIgbmFtZXNwYWNlcyA9IG9wdGlvbnMubnMgfHwgdGhpcy5vcHRpb25zLmRlZmF1bHROUyB8fCBbXTtcbiAgICAgIHZhciB3b3VsZENoZWNrRm9yTnNJbktleSA9IG5zU2VwYXJhdG9yICYmIGtleS5pbmRleE9mKG5zU2VwYXJhdG9yKSA+IC0xO1xuICAgICAgdmFyIHNlZW1zTmF0dXJhbExhbmd1YWdlID0gIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZEtleVNlcGFyYXRvciAmJiAhb3B0aW9ucy5rZXlTZXBhcmF0b3IgJiYgIXRoaXMub3B0aW9ucy51c2VyRGVmaW5lZE5zU2VwYXJhdG9yICYmICFvcHRpb25zLm5zU2VwYXJhdG9yICYmICFsb29rc0xpa2VPYmplY3RQYXRoKGtleSwgbnNTZXBhcmF0b3IsIGtleVNlcGFyYXRvcik7XG5cbiAgICAgIGlmICh3b3VsZENoZWNrRm9yTnNJbktleSAmJiAhc2VlbXNOYXR1cmFsTGFuZ3VhZ2UpIHtcbiAgICAgICAgdmFyIG0gPSBrZXkubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG5cbiAgICAgICAgaWYgKG0gJiYgbS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgbmFtZXNwYWNlczogbmFtZXNwYWNlc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydHMgPSBrZXkuc3BsaXQobnNTZXBhcmF0b3IpO1xuICAgICAgICBpZiAobnNTZXBhcmF0b3IgIT09IGtleVNlcGFyYXRvciB8fCBuc1NlcGFyYXRvciA9PT0ga2V5U2VwYXJhdG9yICYmIHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKHBhcnRzWzBdKSA+IC0xKSBuYW1lc3BhY2VzID0gcGFydHMuc2hpZnQoKTtcbiAgICAgICAga2V5ID0gcGFydHMuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnKSBuYW1lc3BhY2VzID0gW25hbWVzcGFjZXNdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIG5hbWVzcGFjZXM6IG5hbWVzcGFjZXNcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYW5zbGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2xhdGUoa2V5cywgb3B0aW9ucywgbGFzdEtleSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChfdHlwZW9mX19kZWZhdWx0WydkZWZhdWx0J10ob3B0aW9ucykgIT09ICdvYmplY3QnICYmIHRoaXMub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcikge1xuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICAgICAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCB8fCBrZXlzID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykpIGtleXMgPSBbU3RyaW5nKGtleXMpXTtcbiAgICAgIHZhciByZXR1cm5EZXRhaWxzID0gb3B0aW9ucy5yZXR1cm5EZXRhaWxzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnJldHVybkRldGFpbHMgOiB0aGlzLm9wdGlvbnMucmV0dXJuRGV0YWlscztcbiAgICAgIHZhciBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuXG4gICAgICB2YXIgX3RoaXMkZXh0cmFjdEZyb21LZXkgPSB0aGlzLmV4dHJhY3RGcm9tS2V5KGtleXNba2V5cy5sZW5ndGggLSAxXSwgb3B0aW9ucyksXG4gICAgICAgICAga2V5ID0gX3RoaXMkZXh0cmFjdEZyb21LZXkua2V5LFxuICAgICAgICAgIG5hbWVzcGFjZXMgPSBfdGhpcyRleHRyYWN0RnJvbUtleS5uYW1lc3BhY2VzO1xuXG4gICAgICB2YXIgbmFtZXNwYWNlID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIGxuZyA9IG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2U7XG4gICAgICB2YXIgYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGUgPSBvcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlIHx8IHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb0NJTW9kZTtcblxuICAgICAgaWYgKGxuZyAmJiBsbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHtcbiAgICAgICAgaWYgKGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlKSB7XG4gICAgICAgICAgdmFyIG5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvciB8fCB0aGlzLm9wdGlvbnMubnNTZXBhcmF0b3I7XG5cbiAgICAgICAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgICAgICAgcmVzb2x2ZWQucmVzID0gXCJcIi5jb25jYXQobmFtZXNwYWNlKS5jb25jYXQobnNTZXBhcmF0b3IpLmNvbmNhdChrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChuYW1lc3BhY2UpLmNvbmNhdChuc1NlcGFyYXRvcikuY29uY2F0KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgICAgIHJlc29sdmVkLnJlcyA9IGtleTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmUoa2V5cywgb3B0aW9ucyk7XG4gICAgICB2YXIgcmVzID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzO1xuICAgICAgdmFyIHJlc1VzZWRLZXkgPSByZXNvbHZlZCAmJiByZXNvbHZlZC51c2VkS2V5IHx8IGtleTtcbiAgICAgIHZhciByZXNFeGFjdFVzZWRLZXkgPSByZXNvbHZlZCAmJiByZXNvbHZlZC5leGFjdFVzZWRLZXkgfHwga2V5O1xuICAgICAgdmFyIHJlc1R5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHJlcyk7XG4gICAgICB2YXIgbm9PYmplY3QgPSBbJ1tvYmplY3QgTnVtYmVyXScsICdbb2JqZWN0IEZ1bmN0aW9uXScsICdbb2JqZWN0IFJlZ0V4cF0nXTtcbiAgICAgIHZhciBqb2luQXJyYXlzID0gb3B0aW9ucy5qb2luQXJyYXlzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmpvaW5BcnJheXMgOiB0aGlzLm9wdGlvbnMuam9pbkFycmF5cztcbiAgICAgIHZhciBoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCA9ICF0aGlzLmkxOG5Gb3JtYXQgfHwgdGhpcy5pMThuRm9ybWF0LmhhbmRsZUFzT2JqZWN0O1xuICAgICAgdmFyIGhhbmRsZUFzT2JqZWN0ID0gdHlwZW9mIHJlcyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHJlcyAhPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiByZXMgIT09ICdudW1iZXInO1xuXG4gICAgICBpZiAoaGFuZGxlQXNPYmplY3RJbkkxOG5Gb3JtYXQgJiYgcmVzICYmIGhhbmRsZUFzT2JqZWN0ICYmIG5vT2JqZWN0LmluZGV4T2YocmVzVHlwZSkgPCAwICYmICEodHlwZW9mIGpvaW5BcnJheXMgPT09ICdzdHJpbmcnICYmIHJlc1R5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5yZXR1cm5PYmplY3RzICYmICF0aGlzLm9wdGlvbnMucmV0dXJuT2JqZWN0cykge1xuICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybignYWNjZXNzaW5nIGFuIG9iamVjdCAtIGJ1dCByZXR1cm5PYmplY3RzIG9wdGlvbnMgaXMgbm90IGVuYWJsZWQhJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHIgPSB0aGlzLm9wdGlvbnMucmV0dXJuZWRPYmplY3RIYW5kbGVyID8gdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlcihyZXNVc2VkS2V5LCByZXMsIF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgICAgICAgICAgbnM6IG5hbWVzcGFjZXNcbiAgICAgICAgICB9KSkgOiBcImtleSAnXCIuY29uY2F0KGtleSwgXCIgKFwiKS5jb25jYXQodGhpcy5sYW5ndWFnZSwgXCIpJyByZXR1cm5lZCBhbiBvYmplY3QgaW5zdGVhZCBvZiBzdHJpbmcuXCIpO1xuXG4gICAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICAgIHJlc29sdmVkLnJlcyA9IHI7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoa2V5U2VwYXJhdG9yKSB7XG4gICAgICAgICAgdmFyIHJlc1R5cGVJc0FycmF5ID0gcmVzVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgICB2YXIgY29weSA9IHJlc1R5cGVJc0FycmF5ID8gW10gOiB7fTtcbiAgICAgICAgICB2YXIgbmV3S2V5VG9Vc2UgPSByZXNUeXBlSXNBcnJheSA/IHJlc0V4YWN0VXNlZEtleSA6IHJlc1VzZWRLZXk7XG5cbiAgICAgICAgICBmb3IgKHZhciBtIGluIHJlcykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXMsIG0pKSB7XG4gICAgICAgICAgICAgIHZhciBkZWVwS2V5ID0gXCJcIi5jb25jYXQobmV3S2V5VG9Vc2UpLmNvbmNhdChrZXlTZXBhcmF0b3IpLmNvbmNhdChtKTtcbiAgICAgICAgICAgICAgY29weVttXSA9IHRoaXMudHJhbnNsYXRlKGRlZXBLZXksIF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIG9wdGlvbnMpLCB7XG4gICAgICAgICAgICAgICAgam9pbkFycmF5czogZmFsc2UsXG4gICAgICAgICAgICAgICAgbnM6IG5hbWVzcGFjZXNcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICBpZiAoY29weVttXSA9PT0gZGVlcEtleSkgY29weVttXSA9IHJlc1ttXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXMgPSBjb3B5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGhhbmRsZUFzT2JqZWN0SW5JMThuRm9ybWF0ICYmIHR5cGVvZiBqb2luQXJyYXlzID09PSAnc3RyaW5nJyAmJiByZXNUeXBlID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgIHJlcyA9IHJlcy5qb2luKGpvaW5BcnJheXMpO1xuICAgICAgICBpZiAocmVzKSByZXMgPSB0aGlzLmV4dGVuZFRyYW5zbGF0aW9uKHJlcywga2V5cywgb3B0aW9ucywgbGFzdEtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdXNlZERlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHVzZWRLZXkgPSBmYWxzZTtcbiAgICAgICAgdmFyIG5lZWRzUGx1cmFsSGFuZGxpbmcgPSBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMuY291bnQgIT09ICdzdHJpbmcnO1xuICAgICAgICB2YXIgaGFzRGVmYXVsdFZhbHVlID0gVHJhbnNsYXRvci5oYXNEZWZhdWx0VmFsdWUob3B0aW9ucyk7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWVTdWZmaXggPSBuZWVkc1BsdXJhbEhhbmRsaW5nID8gdGhpcy5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXgobG5nLCBvcHRpb25zLmNvdW50LCBvcHRpb25zKSA6ICcnO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gb3B0aW9uc1tcImRlZmF1bHRWYWx1ZVwiLmNvbmNhdChkZWZhdWx0VmFsdWVTdWZmaXgpXSB8fCBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZExvb2t1cChyZXMpICYmIGhhc0RlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgIHVzZWREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgICAgICByZXMgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZExvb2t1cChyZXMpKSB7XG4gICAgICAgICAgdXNlZEtleSA9IHRydWU7XG4gICAgICAgICAgcmVzID0ga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSA9IG9wdGlvbnMubWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5IHx8IHRoaXMub3B0aW9ucy5taXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXk7XG4gICAgICAgIHZhciByZXNGb3JNaXNzaW5nID0gbWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5ICYmIHVzZWRLZXkgPyB1bmRlZmluZWQgOiByZXM7XG4gICAgICAgIHZhciB1cGRhdGVNaXNzaW5nID0gaGFzRGVmYXVsdFZhbHVlICYmIGRlZmF1bHRWYWx1ZSAhPT0gcmVzICYmIHRoaXMub3B0aW9ucy51cGRhdGVNaXNzaW5nO1xuXG4gICAgICAgIGlmICh1c2VkS2V5IHx8IHVzZWREZWZhdWx0IHx8IHVwZGF0ZU1pc3NpbmcpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5sb2codXBkYXRlTWlzc2luZyA/ICd1cGRhdGVLZXknIDogJ21pc3NpbmdLZXknLCBsbmcsIG5hbWVzcGFjZSwga2V5LCB1cGRhdGVNaXNzaW5nID8gZGVmYXVsdFZhbHVlIDogcmVzKTtcblxuICAgICAgICAgIGlmIChrZXlTZXBhcmF0b3IpIHtcbiAgICAgICAgICAgIHZhciBmayA9IHRoaXMucmVzb2x2ZShrZXksIF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgICAgICAgICAgICBrZXlTZXBhcmF0b3I6IGZhbHNlXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBpZiAoZmsgJiYgZmsucmVzKSB0aGlzLmxvZ2dlci53YXJuKCdTZWVtcyB0aGUgbG9hZGVkIHRyYW5zbGF0aW9ucyB3ZXJlIGluIGZsYXQgSlNPTiBmb3JtYXQgaW5zdGVhZCBvZiBuZXN0ZWQuIEVpdGhlciBzZXQga2V5U2VwYXJhdG9yOiBmYWxzZSBvbiBpbml0IG9yIG1ha2Ugc3VyZSB5b3VyIHRyYW5zbGF0aW9ucyBhcmUgcHVibGlzaGVkIGluIG5lc3RlZCBmb3JtYXQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGxuZ3MgPSBbXTtcbiAgICAgICAgICB2YXIgZmFsbGJhY2tMbmdzID0gdGhpcy5sYW5ndWFnZVV0aWxzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nLCBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlKTtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gJ2ZhbGxiYWNrJyAmJiBmYWxsYmFja0xuZ3MgJiYgZmFsbGJhY2tMbmdzWzBdKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZhbGxiYWNrTG5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsbmdzLnB1c2goZmFsbGJhY2tMbmdzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zYXZlTWlzc2luZ1RvID09PSAnYWxsJykge1xuICAgICAgICAgICAgbG5ncyA9IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxuZ3MucHVzaChvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2VuZCA9IGZ1bmN0aW9uIHNlbmQobCwgaywgc3BlY2lmaWNEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0Rm9yTWlzc2luZyA9IGhhc0RlZmF1bHRWYWx1ZSAmJiBzcGVjaWZpY0RlZmF1bHRWYWx1ZSAhPT0gcmVzID8gc3BlY2lmaWNEZWZhdWx0VmFsdWUgOiByZXNGb3JNaXNzaW5nO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMubWlzc2luZ0tleUhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMubWlzc2luZ0tleUhhbmRsZXIobCwgbmFtZXNwYWNlLCBrLCBkZWZhdWx0Rm9yTWlzc2luZywgdXBkYXRlTWlzc2luZywgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzMi5iYWNrZW5kQ29ubmVjdG9yICYmIF90aGlzMi5iYWNrZW5kQ29ubmVjdG9yLnNhdmVNaXNzaW5nKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5iYWNrZW5kQ29ubmVjdG9yLnNhdmVNaXNzaW5nKGwsIG5hbWVzcGFjZSwgaywgZGVmYXVsdEZvck1pc3NpbmcsIHVwZGF0ZU1pc3NpbmcsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczIuZW1pdCgnbWlzc2luZ0tleScsIGwsIG5hbWVzcGFjZSwgaywgcmVzKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zYXZlTWlzc2luZykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zYXZlTWlzc2luZ1BsdXJhbHMgJiYgbmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgICBsbmdzLmZvckVhY2goZnVuY3Rpb24gKGxhbmd1YWdlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeGVzKGxhbmd1YWdlLCBvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgIHNlbmQoW2xhbmd1YWdlXSwga2V5ICsgc3VmZml4LCBvcHRpb25zW1wiZGVmYXVsdFZhbHVlXCIuY29uY2F0KHN1ZmZpeCldIHx8IGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VuZChsbmdzLCBrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzID0gdGhpcy5leHRlbmRUcmFuc2xhdGlvbihyZXMsIGtleXMsIG9wdGlvbnMsIHJlc29sdmVkLCBsYXN0S2V5KTtcbiAgICAgICAgaWYgKHVzZWRLZXkgJiYgcmVzID09PSBrZXkgJiYgdGhpcy5vcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleSkgcmVzID0gXCJcIi5jb25jYXQobmFtZXNwYWNlLCBcIjpcIikuY29uY2F0KGtleSk7XG5cbiAgICAgICAgaWYgKCh1c2VkS2V5IHx8IHVzZWREZWZhdWx0KSAmJiB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcikge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUFQSSAhPT0gJ3YxJykge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5vcHRpb25zLnBhcnNlTWlzc2luZ0tleUhhbmRsZXIodGhpcy5vcHRpb25zLmFwcGVuZE5hbWVzcGFjZVRvTWlzc2luZ0tleSA/IFwiXCIuY29uY2F0KG5hbWVzcGFjZSwgXCI6XCIpLmNvbmNhdChrZXkpIDoga2V5LCB1c2VkRGVmYXVsdCA/IHJlcyA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMub3B0aW9ucy5wYXJzZU1pc3NpbmdLZXlIYW5kbGVyKHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgIHJlc29sdmVkLnJlcyA9IHJlcztcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRlbmRUcmFuc2xhdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmRUcmFuc2xhdGlvbihyZXMsIGtleSwgb3B0aW9ucywgcmVzb2x2ZWQsIGxhc3RLZXkpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5wYXJzZSkge1xuICAgICAgICByZXMgPSB0aGlzLmkxOG5Gb3JtYXQucGFyc2UocmVzLCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSwgb3B0aW9ucyksIHJlc29sdmVkLnVzZWRMbmcsIHJlc29sdmVkLnVzZWROUywgcmVzb2x2ZWQudXNlZEtleSwge1xuICAgICAgICAgIHJlc29sdmVkOiByZXNvbHZlZFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuc2tpcEludGVycG9sYXRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJwb2xhdGlvbikgdGhpcy5pbnRlcnBvbGF0b3IuaW5pdChfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBvcHRpb25zKSwge1xuICAgICAgICAgIGludGVycG9sYXRpb246IF9vYmplY3RTcHJlYWQkMihfb2JqZWN0U3ByZWFkJDIoe30sIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uKSwgb3B0aW9ucy5pbnRlcnBvbGF0aW9uKVxuICAgICAgICB9KSk7XG4gICAgICAgIHZhciBza2lwT25WYXJpYWJsZXMgPSB0eXBlb2YgcmVzID09PSAnc3RyaW5nJyAmJiAob3B0aW9ucyAmJiBvcHRpb25zLmludGVycG9sYXRpb24gJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyA6IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLnNraXBPblZhcmlhYmxlcyk7XG4gICAgICAgIHZhciBuZXN0QmVmO1xuXG4gICAgICAgIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgICB2YXIgbmIgPSByZXMubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG4gICAgICAgICAgbmVzdEJlZiA9IG5iICYmIG5iLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5yZXBsYWNlICYmIHR5cGVvZiBvcHRpb25zLnJlcGxhY2UgIT09ICdzdHJpbmcnID8gb3B0aW9ucy5yZXBsYWNlIDogb3B0aW9ucztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMpIGRhdGEgPSBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSwgZGF0YSk7XG4gICAgICAgIHJlcyA9IHRoaXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKHJlcywgZGF0YSwgb3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICAgIHZhciBuYSA9IHJlcy5tYXRjaCh0aGlzLmludGVycG9sYXRvci5uZXN0aW5nUmVnZXhwKTtcbiAgICAgICAgICB2YXIgbmVzdEFmdCA9IG5hICYmIG5hLmxlbmd0aDtcbiAgICAgICAgICBpZiAobmVzdEJlZiA8IG5lc3RBZnQpIG9wdGlvbnMubmVzdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubmVzdCAhPT0gZmFsc2UpIHJlcyA9IHRoaXMuaW50ZXJwb2xhdG9yLm5lc3QocmVzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsYXN0S2V5ICYmIGxhc3RLZXlbMF0gPT09IGFyZ3NbMF0gJiYgIW9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgX3RoaXMzLmxvZ2dlci53YXJuKFwiSXQgc2VlbXMgeW91IGFyZSBuZXN0aW5nIHJlY3Vyc2l2ZWx5IGtleTogXCIuY29uY2F0KGFyZ3NbMF0sIFwiIGluIGtleTogXCIpLmNvbmNhdChrZXlbMF0pKTtcblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIF90aGlzMy50cmFuc2xhdGUuYXBwbHkoX3RoaXMzLCBhcmdzLmNvbmNhdChba2V5XSkpO1xuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJwb2xhdGlvbikgdGhpcy5pbnRlcnBvbGF0b3IucmVzZXQoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvc3RQcm9jZXNzID0gb3B0aW9ucy5wb3N0UHJvY2VzcyB8fCB0aGlzLm9wdGlvbnMucG9zdFByb2Nlc3M7XG4gICAgICB2YXIgcG9zdFByb2Nlc3Nvck5hbWVzID0gdHlwZW9mIHBvc3RQcm9jZXNzID09PSAnc3RyaW5nJyA/IFtwb3N0UHJvY2Vzc10gOiBwb3N0UHJvY2VzcztcblxuICAgICAgaWYgKHJlcyAhPT0gdW5kZWZpbmVkICYmIHJlcyAhPT0gbnVsbCAmJiBwb3N0UHJvY2Vzc29yTmFtZXMgJiYgcG9zdFByb2Nlc3Nvck5hbWVzLmxlbmd0aCAmJiBvcHRpb25zLmFwcGx5UG9zdFByb2Nlc3NvciAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmVzID0gcG9zdFByb2Nlc3Nvci5oYW5kbGUocG9zdFByb2Nlc3Nvck5hbWVzLCByZXMsIGtleSwgdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5wb3N0UHJvY2Vzc1Bhc3NSZXNvbHZlZCA/IF9vYmplY3RTcHJlYWQkMih7XG4gICAgICAgICAgaTE4blJlc29sdmVkOiByZXNvbHZlZFxuICAgICAgICB9LCBvcHRpb25zKSA6IG9wdGlvbnMsIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNvbHZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUoa2V5cykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBmb3VuZDtcbiAgICAgIHZhciB1c2VkS2V5O1xuICAgICAgdmFyIGV4YWN0VXNlZEtleTtcbiAgICAgIHZhciB1c2VkTG5nO1xuICAgICAgdmFyIHVzZWROUztcbiAgICAgIGlmICh0eXBlb2Yga2V5cyA9PT0gJ3N0cmluZycpIGtleXMgPSBba2V5c107XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgaWYgKF90aGlzNC5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBleHRyYWN0ZWQgPSBfdGhpczQuZXh0cmFjdEZyb21LZXkoaywgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIGtleSA9IGV4dHJhY3RlZC5rZXk7XG4gICAgICAgIHVzZWRLZXkgPSBrZXk7XG4gICAgICAgIHZhciBuYW1lc3BhY2VzID0gZXh0cmFjdGVkLm5hbWVzcGFjZXM7XG4gICAgICAgIGlmIChfdGhpczQub3B0aW9ucy5mYWxsYmFja05TKSBuYW1lc3BhY2VzID0gbmFtZXNwYWNlcy5jb25jYXQoX3RoaXM0Lm9wdGlvbnMuZmFsbGJhY2tOUyk7XG4gICAgICAgIHZhciBuZWVkc1BsdXJhbEhhbmRsaW5nID0gb3B0aW9ucy5jb3VudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmNvdW50ICE9PSAnc3RyaW5nJztcblxuICAgICAgICB2YXIgbmVlZHNaZXJvU3VmZml4TG9va3VwID0gbmVlZHNQbHVyYWxIYW5kbGluZyAmJiAhb3B0aW9ucy5vcmRpbmFsICYmIG9wdGlvbnMuY291bnQgPT09IDAgJiYgX3RoaXM0LnBsdXJhbFJlc29sdmVyLnNob3VsZFVzZUludGxBcGkoKTtcblxuICAgICAgICB2YXIgbmVlZHNDb250ZXh0SGFuZGxpbmcgPSBvcHRpb25zLmNvbnRleHQgIT09IHVuZGVmaW5lZCAmJiAodHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ251bWJlcicpICYmIG9wdGlvbnMuY29udGV4dCAhPT0gJyc7XG4gICAgICAgIHZhciBjb2RlcyA9IG9wdGlvbnMubG5ncyA/IG9wdGlvbnMubG5ncyA6IF90aGlzNC5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShvcHRpb25zLmxuZyB8fCBfdGhpczQubGFuZ3VhZ2UsIG9wdGlvbnMuZmFsbGJhY2tMbmcpO1xuICAgICAgICBuYW1lc3BhY2VzLmZvckVhY2goZnVuY3Rpb24gKG5zKSB7XG4gICAgICAgICAgaWYgKF90aGlzNC5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuICAgICAgICAgIHVzZWROUyA9IG5zO1xuXG4gICAgICAgICAgaWYgKCFjaGVja2VkTG9hZGVkRm9yW1wiXCIuY29uY2F0KGNvZGVzWzBdLCBcIi1cIikuY29uY2F0KG5zKV0gJiYgX3RoaXM0LnV0aWxzICYmIF90aGlzNC51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UgJiYgIV90aGlzNC51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UodXNlZE5TKSkge1xuICAgICAgICAgICAgY2hlY2tlZExvYWRlZEZvcltcIlwiLmNvbmNhdChjb2Rlc1swXSwgXCItXCIpLmNvbmNhdChucyldID0gdHJ1ZTtcblxuICAgICAgICAgICAgX3RoaXM0LmxvZ2dlci53YXJuKFwia2V5IFxcXCJcIi5jb25jYXQodXNlZEtleSwgXCJcXFwiIGZvciBsYW5ndWFnZXMgXFxcIlwiKS5jb25jYXQoY29kZXMuam9pbignLCAnKSwgXCJcXFwiIHdvbid0IGdldCByZXNvbHZlZCBhcyBuYW1lc3BhY2UgXFxcIlwiKS5jb25jYXQodXNlZE5TLCBcIlxcXCIgd2FzIG5vdCB5ZXQgbG9hZGVkXCIpLCAnVGhpcyBtZWFucyBzb21ldGhpbmcgSVMgV1JPTkcgaW4geW91ciBzZXR1cC4gWW91IGFjY2VzcyB0aGUgdCBmdW5jdGlvbiBiZWZvcmUgaTE4bmV4dC5pbml0IC8gaTE4bmV4dC5sb2FkTmFtZXNwYWNlIC8gaTE4bmV4dC5jaGFuZ2VMYW5ndWFnZSB3YXMgZG9uZS4gV2FpdCBmb3IgdGhlIGNhbGxiYWNrIG9yIFByb21pc2UgdG8gcmVzb2x2ZSBiZWZvcmUgYWNjZXNzaW5nIGl0ISEhJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29kZXMuZm9yRWFjaChmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzNC5pc1ZhbGlkTG9va3VwKGZvdW5kKSkgcmV0dXJuO1xuICAgICAgICAgICAgdXNlZExuZyA9IGNvZGU7XG4gICAgICAgICAgICB2YXIgZmluYWxLZXlzID0gW2tleV07XG5cbiAgICAgICAgICAgIGlmIChfdGhpczQuaTE4bkZvcm1hdCAmJiBfdGhpczQuaTE4bkZvcm1hdC5hZGRMb29rdXBLZXlzKSB7XG4gICAgICAgICAgICAgIF90aGlzNC5pMThuRm9ybWF0LmFkZExvb2t1cEtleXMoZmluYWxLZXlzLCBrZXksIGNvZGUsIG5zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBwbHVyYWxTdWZmaXg7XG4gICAgICAgICAgICAgIGlmIChuZWVkc1BsdXJhbEhhbmRsaW5nKSBwbHVyYWxTdWZmaXggPSBfdGhpczQucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4KGNvZGUsIG9wdGlvbnMuY291bnQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB2YXIgemVyb1N1ZmZpeCA9IFwiXCIuY29uY2F0KF90aGlzNC5vcHRpb25zLnBsdXJhbFNlcGFyYXRvciwgXCJ6ZXJvXCIpO1xuXG4gICAgICAgICAgICAgIGlmIChuZWVkc1BsdXJhbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goa2V5ICsgcGx1cmFsU3VmZml4KTtcblxuICAgICAgICAgICAgICAgIGlmIChuZWVkc1plcm9TdWZmaXhMb29rdXApIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGtleSArIHplcm9TdWZmaXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChuZWVkc0NvbnRleHRIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0S2V5ID0gXCJcIi5jb25jYXQoa2V5KS5jb25jYXQoX3RoaXM0Lm9wdGlvbnMuY29udGV4dFNlcGFyYXRvcikuY29uY2F0KG9wdGlvbnMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goY29udGV4dEtleSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goY29udGV4dEtleSArIHBsdXJhbFN1ZmZpeCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChuZWVkc1plcm9TdWZmaXhMb29rdXApIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxLZXlzLnB1c2goY29udGV4dEtleSArIHplcm9TdWZmaXgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcG9zc2libGVLZXk7XG5cbiAgICAgICAgICAgIHdoaWxlIChwb3NzaWJsZUtleSA9IGZpbmFsS2V5cy5wb3AoKSkge1xuICAgICAgICAgICAgICBpZiAoIV90aGlzNC5pc1ZhbGlkTG9va3VwKGZvdW5kKSkge1xuICAgICAgICAgICAgICAgIGV4YWN0VXNlZEtleSA9IHBvc3NpYmxlS2V5O1xuICAgICAgICAgICAgICAgIGZvdW5kID0gX3RoaXM0LmdldFJlc291cmNlKGNvZGUsIG5zLCBwb3NzaWJsZUtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlczogZm91bmQsXG4gICAgICAgIHVzZWRLZXk6IHVzZWRLZXksXG4gICAgICAgIGV4YWN0VXNlZEtleTogZXhhY3RVc2VkS2V5LFxuICAgICAgICB1c2VkTG5nOiB1c2VkTG5nLFxuICAgICAgICB1c2VkTlM6IHVzZWROU1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZExvb2t1cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkTG9va3VwKHJlcykge1xuICAgICAgcmV0dXJuIHJlcyAhPT0gdW5kZWZpbmVkICYmICEoIXRoaXMub3B0aW9ucy5yZXR1cm5OdWxsICYmIHJlcyA9PT0gbnVsbCkgJiYgISghdGhpcy5vcHRpb25zLnJldHVybkVtcHR5U3RyaW5nICYmIHJlcyA9PT0gJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZXNvdXJjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZXNvdXJjZShjb2RlLCBucywga2V5KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gICAgICBpZiAodGhpcy5pMThuRm9ybWF0ICYmIHRoaXMuaTE4bkZvcm1hdC5nZXRSZXNvdXJjZSkgcmV0dXJuIHRoaXMuaTE4bkZvcm1hdC5nZXRSZXNvdXJjZShjb2RlLCBucywga2V5LCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLnJlc291cmNlU3RvcmUuZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiaGFzRGVmYXVsdFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0RlZmF1bHRWYWx1ZShvcHRpb25zKSB7XG4gICAgICB2YXIgcHJlZml4ID0gJ2RlZmF1bHRWYWx1ZSc7XG5cbiAgICAgIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgb3B0aW9uKSAmJiBwcmVmaXggPT09IG9wdGlvbi5zdWJzdHJpbmcoMCwgcHJlZml4Lmxlbmd0aCkgJiYgdW5kZWZpbmVkICE9PSBvcHRpb25zW29wdGlvbl0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRyYW5zbGF0b3I7XG59KEV2ZW50RW1pdHRlcik7XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbnZhciBMYW5ndWFnZVV0aWwgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExhbmd1YWdlVXRpbChvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgTGFuZ3VhZ2VVdGlsKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdXBwb3J0ZWRMbmdzID0gdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MgfHwgZmFsc2U7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnbGFuZ3VhZ2VVdGlscycpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oTGFuZ3VhZ2VVdGlsLCBbe1xuICAgIGtleTogXCJnZXRTY3JpcHRQYXJ0RnJvbUNvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICAgIGlmICghY29kZSB8fCBjb2RlLmluZGV4T2YoJy0nKSA8IDApIHJldHVybiBudWxsO1xuICAgICAgdmFyIHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgICBpZiAocC5sZW5ndGggPT09IDIpIHJldHVybiBudWxsO1xuICAgICAgcC5wb3AoKTtcbiAgICAgIGlmIChwW3AubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKSA9PT0gJ3gnKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShwLmpvaW4oJy0nKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldExhbmd1YWdlUGFydEZyb21Db2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpIHtcbiAgICAgIGlmICghY29kZSB8fCBjb2RlLmluZGV4T2YoJy0nKSA8IDApIHJldHVybiBjb2RlO1xuICAgICAgdmFyIHAgPSBjb2RlLnNwbGl0KCctJyk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUocFswXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdExhbmd1YWdlQ29kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkge1xuICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSAnc3RyaW5nJyAmJiBjb2RlLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIHZhciBzcGVjaWFsQ2FzZXMgPSBbJ2hhbnMnLCAnaGFudCcsICdsYXRuJywgJ2N5cmwnLCAnY2FucycsICdtb25nJywgJ2FyYWInXTtcbiAgICAgICAgdmFyIHAgPSBjb2RlLnNwbGl0KCctJyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb3dlckNhc2VMbmcpIHtcbiAgICAgICAgICBwID0gcC5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJ0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBwWzBdID0gcFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHBbMV0gPSBwWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKHNwZWNpYWxDYXNlcy5pbmRleE9mKHBbMV0udG9Mb3dlckNhc2UoKSkgPiAtMSkgcFsxXSA9IGNhcGl0YWxpemUocFsxXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgIHBbMF0gPSBwWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKHBbMV0ubGVuZ3RoID09PSAyKSBwWzFdID0gcFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGlmIChwWzBdICE9PSAnc2duJyAmJiBwWzJdLmxlbmd0aCA9PT0gMikgcFsyXSA9IHBbMl0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsxXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzFdID0gY2FwaXRhbGl6ZShwWzFdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGlmIChzcGVjaWFsQ2FzZXMuaW5kZXhPZihwWzJdLnRvTG93ZXJDYXNlKCkpID4gLTEpIHBbMl0gPSBjYXBpdGFsaXplKHBbMl0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcC5qb2luKCctJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xlYW5Db2RlIHx8IHRoaXMub3B0aW9ucy5sb3dlckNhc2VMbmcgPyBjb2RlLnRvTG93ZXJDYXNlKCkgOiBjb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1N1cHBvcnRlZENvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWRDb2RlKGNvZGUpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCA9PT0gJ2xhbmd1YWdlT25seScgfHwgdGhpcy5vcHRpb25zLm5vbkV4cGxpY2l0U3VwcG9ydGVkTG5ncykge1xuICAgICAgICBjb2RlID0gdGhpcy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICF0aGlzLnN1cHBvcnRlZExuZ3MgfHwgIXRoaXMuc3VwcG9ydGVkTG5ncy5sZW5ndGggfHwgdGhpcy5zdXBwb3J0ZWRMbmdzLmluZGV4T2YoY29kZSkgPiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QmVzdE1hdGNoRnJvbUNvZGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJlc3RNYXRjaEZyb21Db2Rlcyhjb2Rlcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKCFjb2RlcykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgZm91bmQ7XG4gICAgICBjb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjbGVhbmVkTG5nID0gX3RoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpO1xuXG4gICAgICAgIGlmICghX3RoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzIHx8IF90aGlzLmlzU3VwcG9ydGVkQ29kZShjbGVhbmVkTG5nKSkgZm91bmQgPSBjbGVhbmVkTG5nO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghZm91bmQgJiYgdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MpIHtcbiAgICAgICAgY29kZXMuZm9yRWFjaChmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICAgIGlmIChmb3VuZCkgcmV0dXJuO1xuXG4gICAgICAgICAgdmFyIGxuZ09ubHkgPSBfdGhpcy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKTtcblxuICAgICAgICAgIGlmIChfdGhpcy5pc1N1cHBvcnRlZENvZGUobG5nT25seSkpIHJldHVybiBmb3VuZCA9IGxuZ09ubHk7XG4gICAgICAgICAgZm91bmQgPSBfdGhpcy5vcHRpb25zLnN1cHBvcnRlZExuZ3MuZmluZChmdW5jdGlvbiAoc3VwcG9ydGVkTG5nKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkTG5nLmluZGV4T2YobG5nT25seSkgPT09IDApIHJldHVybiBzdXBwb3J0ZWRMbmc7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IHRoaXMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpWzBdO1xuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRGYWxsYmFja0NvZGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZhbGxiYWNrQ29kZXMoZmFsbGJhY2tzLCBjb2RlKSB7XG4gICAgICBpZiAoIWZhbGxiYWNrcykgcmV0dXJuIFtdO1xuICAgICAgaWYgKHR5cGVvZiBmYWxsYmFja3MgPT09ICdmdW5jdGlvbicpIGZhbGxiYWNrcyA9IGZhbGxiYWNrcyhjb2RlKTtcbiAgICAgIGlmICh0eXBlb2YgZmFsbGJhY2tzID09PSAnc3RyaW5nJykgZmFsbGJhY2tzID0gW2ZhbGxiYWNrc107XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShmYWxsYmFja3MpID09PSAnW29iamVjdCBBcnJheV0nKSByZXR1cm4gZmFsbGJhY2tzO1xuICAgICAgaWYgKCFjb2RlKSByZXR1cm4gZmFsbGJhY2tzW1wiZGVmYXVsdFwiXSB8fCBbXTtcbiAgICAgIHZhciBmb3VuZCA9IGZhbGxiYWNrc1tjb2RlXTtcbiAgICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpXTtcbiAgICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpXTtcbiAgICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW3RoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSldO1xuICAgICAgaWYgKCFmb3VuZCkgZm91bmQgPSBmYWxsYmFja3NbXCJkZWZhdWx0XCJdO1xuICAgICAgcmV0dXJuIGZvdW5kIHx8IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b1Jlc29sdmVIaWVyYXJjaHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9SZXNvbHZlSGllcmFyY2h5KGNvZGUsIGZhbGxiYWNrQ29kZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBmYWxsYmFja0NvZGVzID0gdGhpcy5nZXRGYWxsYmFja0NvZGVzKGZhbGxiYWNrQ29kZSB8fCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgfHwgW10sIGNvZGUpO1xuICAgICAgdmFyIGNvZGVzID0gW107XG5cbiAgICAgIHZhciBhZGRDb2RlID0gZnVuY3Rpb24gYWRkQ29kZShjKSB7XG4gICAgICAgIGlmICghYykgcmV0dXJuO1xuXG4gICAgICAgIGlmIChfdGhpczIuaXNTdXBwb3J0ZWRDb2RlKGMpKSB7XG4gICAgICAgICAgY29kZXMucHVzaChjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIubG9nZ2VyLndhcm4oXCJyZWplY3RpbmcgbGFuZ3VhZ2UgY29kZSBub3QgZm91bmQgaW4gc3VwcG9ydGVkTG5nczogXCIuY29uY2F0KGMpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSAnc3RyaW5nJyAmJiBjb2RlLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2xhbmd1YWdlT25seScpIGFkZENvZGUodGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgIT09ICdsYW5ndWFnZU9ubHknICYmIHRoaXMub3B0aW9ucy5sb2FkICE9PSAnY3VycmVudE9ubHknKSBhZGRDb2RlKHRoaXMuZ2V0U2NyaXB0UGFydEZyb21Db2RlKGNvZGUpKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2FkICE9PSAnY3VycmVudE9ubHknKSBhZGRDb2RlKHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWRkQ29kZSh0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKSk7XG4gICAgICB9XG5cbiAgICAgIGZhbGxiYWNrQ29kZXMuZm9yRWFjaChmdW5jdGlvbiAoZmMpIHtcbiAgICAgICAgaWYgKGNvZGVzLmluZGV4T2YoZmMpIDwgMCkgYWRkQ29kZShfdGhpczIuZm9ybWF0TGFuZ3VhZ2VDb2RlKGZjKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb2RlcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGFuZ3VhZ2VVdGlsO1xufSgpO1xuXG52YXIgc2V0cyA9IFt7XG4gIGxuZ3M6IFsnYWNoJywgJ2FrJywgJ2FtJywgJ2FybicsICdicicsICdmaWwnLCAnZ3VuJywgJ2xuJywgJ21mZScsICdtZycsICdtaScsICdvYycsICdwdCcsICdwdC1CUicsICd0ZycsICd0bCcsICd0aScsICd0cicsICd1eicsICd3YSddLFxuICBucjogWzEsIDJdLFxuICBmYzogMVxufSwge1xuICBsbmdzOiBbJ2FmJywgJ2FuJywgJ2FzdCcsICdheicsICdiZycsICdibicsICdjYScsICdkYScsICdkZScsICdkZXYnLCAnZWwnLCAnZW4nLCAnZW8nLCAnZXMnLCAnZXQnLCAnZXUnLCAnZmknLCAnZm8nLCAnZnVyJywgJ2Z5JywgJ2dsJywgJ2d1JywgJ2hhJywgJ2hpJywgJ2h1JywgJ2h5JywgJ2lhJywgJ2l0JywgJ2trJywgJ2tuJywgJ2t1JywgJ2xiJywgJ21haScsICdtbCcsICdtbicsICdtcicsICduYWgnLCAnbmFwJywgJ25iJywgJ25lJywgJ25sJywgJ25uJywgJ25vJywgJ25zbycsICdwYScsICdwYXAnLCAncG1zJywgJ3BzJywgJ3B0LVBUJywgJ3JtJywgJ3NjbycsICdzZScsICdzaScsICdzbycsICdzb24nLCAnc3EnLCAnc3YnLCAnc3cnLCAndGEnLCAndGUnLCAndGsnLCAndXInLCAneW8nXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDJcbn0sIHtcbiAgbG5nczogWydheScsICdibycsICdjZ2cnLCAnZmEnLCAnaHQnLCAnaWQnLCAnamEnLCAnamJvJywgJ2thJywgJ2ttJywgJ2tvJywgJ2t5JywgJ2xvJywgJ21zJywgJ3NhaCcsICdzdScsICd0aCcsICd0dCcsICd1ZycsICd2aScsICd3bycsICd6aCddLFxuICBucjogWzFdLFxuICBmYzogM1xufSwge1xuICBsbmdzOiBbJ2JlJywgJ2JzJywgJ2NucicsICdkeicsICdocicsICdydScsICdzcicsICd1ayddLFxuICBucjogWzEsIDIsIDVdLFxuICBmYzogNFxufSwge1xuICBsbmdzOiBbJ2FyJ10sXG4gIG5yOiBbMCwgMSwgMiwgMywgMTEsIDEwMF0sXG4gIGZjOiA1XG59LCB7XG4gIGxuZ3M6IFsnY3MnLCAnc2snXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDZcbn0sIHtcbiAgbG5nczogWydjc2InLCAncGwnXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDdcbn0sIHtcbiAgbG5nczogWydjeSddLFxuICBucjogWzEsIDIsIDMsIDhdLFxuICBmYzogOFxufSwge1xuICBsbmdzOiBbJ2ZyJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiA5XG59LCB7XG4gIGxuZ3M6IFsnZ2EnXSxcbiAgbnI6IFsxLCAyLCAzLCA3LCAxMV0sXG4gIGZjOiAxMFxufSwge1xuICBsbmdzOiBbJ2dkJ10sXG4gIG5yOiBbMSwgMiwgMywgMjBdLFxuICBmYzogMTFcbn0sIHtcbiAgbG5nczogWydpcyddLFxuICBucjogWzEsIDJdLFxuICBmYzogMTJcbn0sIHtcbiAgbG5nczogWydqdiddLFxuICBucjogWzAsIDFdLFxuICBmYzogMTNcbn0sIHtcbiAgbG5nczogWydrdyddLFxuICBucjogWzEsIDIsIDMsIDRdLFxuICBmYzogMTRcbn0sIHtcbiAgbG5nczogWydsdCddLFxuICBucjogWzEsIDIsIDEwXSxcbiAgZmM6IDE1XG59LCB7XG4gIGxuZ3M6IFsnbHYnXSxcbiAgbnI6IFsxLCAyLCAwXSxcbiAgZmM6IDE2XG59LCB7XG4gIGxuZ3M6IFsnbWsnXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDE3XG59LCB7XG4gIGxuZ3M6IFsnbW5rJ10sXG4gIG5yOiBbMCwgMSwgMl0sXG4gIGZjOiAxOFxufSwge1xuICBsbmdzOiBbJ210J10sXG4gIG5yOiBbMSwgMiwgMTEsIDIwXSxcbiAgZmM6IDE5XG59LCB7XG4gIGxuZ3M6IFsnb3InXSxcbiAgbnI6IFsyLCAxXSxcbiAgZmM6IDJcbn0sIHtcbiAgbG5nczogWydybyddLFxuICBucjogWzEsIDIsIDIwXSxcbiAgZmM6IDIwXG59LCB7XG4gIGxuZ3M6IFsnc2wnXSxcbiAgbnI6IFs1LCAxLCAyLCAzXSxcbiAgZmM6IDIxXG59LCB7XG4gIGxuZ3M6IFsnaGUnLCAnaXcnXSxcbiAgbnI6IFsxLCAyLCAyMCwgMjFdLFxuICBmYzogMjJcbn1dO1xudmFyIF9ydWxlc1BsdXJhbHNUeXBlcyA9IHtcbiAgMTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID4gMSk7XG4gIH0sXG4gIDI6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAhPSAxKTtcbiAgfSxcbiAgMzogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0sXG4gIDQ6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpO1xuICB9LFxuICA1OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMCA/IDAgOiBuID09IDEgPyAxIDogbiA9PSAyID8gMiA6IG4gJSAxMDAgPj0gMyAmJiBuICUgMTAwIDw9IDEwID8gMyA6IG4gJSAxMDAgPj0gMTEgPyA0IDogNSk7XG4gIH0sXG4gIDY6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPj0gMiAmJiBuIDw9IDQgPyAxIDogMik7XG4gIH0sXG4gIDc6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMik7XG4gIH0sXG4gIDg6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMiA/IDEgOiBuICE9IDggJiYgbiAhPSAxMSA/IDIgOiAzKTtcbiAgfSxcbiAgOTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID49IDIpO1xuICB9LFxuICAxMDogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPCA3ID8gMiA6IG4gPCAxMSA/IDMgOiA0KTtcbiAgfSxcbiAgMTE6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxIHx8IG4gPT0gMTEgPyAwIDogbiA9PSAyIHx8IG4gPT0gMTIgPyAxIDogbiA+IDIgJiYgbiA8IDIwID8gMiA6IDMpO1xuICB9LFxuICAxMjogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICUgMTAgIT0gMSB8fCBuICUgMTAwID09IDExKTtcbiAgfSxcbiAgMTM6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAhPT0gMCk7XG4gIH0sXG4gIDE0OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogbiA9PSAzID8gMiA6IDMpO1xuICB9LFxuICAxNTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IG4gJSAxMCA+PSAyICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMik7XG4gIH0sXG4gIDE2OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAhPT0gMCA/IDEgOiAyKTtcbiAgfSxcbiAgMTc6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxIHx8IG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogMSk7XG4gIH0sXG4gIDE4OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMCA/IDAgOiBuID09IDEgPyAxIDogMik7XG4gIH0sXG4gIDE5OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDAgfHwgbiAlIDEwMCA+IDEgJiYgbiAlIDEwMCA8IDExID8gMSA6IG4gJSAxMDAgPiAxMCAmJiBuICUgMTAwIDwgMjAgPyAyIDogMyk7XG4gIH0sXG4gIDIwOiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDAgfHwgbiAlIDEwMCA+IDAgJiYgbiAlIDEwMCA8IDIwID8gMSA6IDIpO1xuICB9LFxuICAyMTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICUgMTAwID09IDEgPyAxIDogbiAlIDEwMCA9PSAyID8gMiA6IG4gJSAxMDAgPT0gMyB8fCBuICUgMTAwID09IDQgPyAzIDogMCk7XG4gIH0sXG4gIDIyOiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogKG4gPCAwIHx8IG4gPiAxMCkgJiYgbiAlIDEwID09IDAgPyAyIDogMyk7XG4gIH1cbn07XG52YXIgZGVwcmVjYXRlZEpzb25WZXJzaW9ucyA9IFsndjEnLCAndjInLCAndjMnXTtcbnZhciBzdWZmaXhlc09yZGVyID0ge1xuICB6ZXJvOiAwLFxuICBvbmU6IDEsXG4gIHR3bzogMixcbiAgZmV3OiAzLFxuICBtYW55OiA0LFxuICBvdGhlcjogNVxufTtcblxuZnVuY3Rpb24gY3JlYXRlUnVsZXMoKSB7XG4gIHZhciBydWxlcyA9IHt9O1xuICBzZXRzLmZvckVhY2goZnVuY3Rpb24gKHNldCkge1xuICAgIHNldC5sbmdzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgIHJ1bGVzW2xdID0ge1xuICAgICAgICBudW1iZXJzOiBzZXQubnIsXG4gICAgICAgIHBsdXJhbHM6IF9ydWxlc1BsdXJhbHNUeXBlc1tzZXQuZmNdXG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJ1bGVzO1xufVxuXG52YXIgUGx1cmFsUmVzb2x2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBsdXJhbFJlc29sdmVyKGxhbmd1YWdlVXRpbHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCBQbHVyYWxSZXNvbHZlcik7XG5cbiAgICB0aGlzLmxhbmd1YWdlVXRpbHMgPSBsYW5ndWFnZVV0aWxzO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgncGx1cmFsUmVzb2x2ZXInKTtcblxuICAgIGlmICgoIXRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5SlNPTiB8fCB0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gPT09ICd2NCcpICYmICh0eXBlb2YgSW50bCA9PT0gJ3VuZGVmaW5lZCcgfHwgIUludGwuUGx1cmFsUnVsZXMpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gPSAndjMnO1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ1lvdXIgZW52aXJvbm1lbnQgc2VlbXMgbm90IHRvIGJlIEludGwgQVBJIGNvbXBhdGlibGUsIHVzZSBhbiBJbnRsLlBsdXJhbFJ1bGVzIHBvbHlmaWxsLiBXaWxsIGZhbGxiYWNrIHRvIHRoZSBjb21wYXRpYmlsaXR5SlNPTiB2MyBmb3JtYXQgaGFuZGxpbmcuJyk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcyA9IGNyZWF0ZVJ1bGVzKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3NfX2RlZmF1bHRbJ2RlZmF1bHQnXShQbHVyYWxSZXNvbHZlciwgW3tcbiAgICBrZXk6IFwiYWRkUnVsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRSdWxlKGxuZywgb2JqKSB7XG4gICAgICB0aGlzLnJ1bGVzW2xuZ10gPSBvYmo7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJ1bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UnVsZShjb2RlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBuZXcgSW50bC5QbHVyYWxSdWxlcyhjb2RlLCB7XG4gICAgICAgICAgICB0eXBlOiBvcHRpb25zLm9yZGluYWwgPyAnb3JkaW5hbCcgOiAnY2FyZGluYWwnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnVsZXNbY29kZV0gfHwgdGhpcy5ydWxlc1t0aGlzLmxhbmd1YWdlVXRpbHMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSldO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWVkc1BsdXJhbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWVkc1BsdXJhbChjb2RlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuZ2V0UnVsZShjb2RlLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICAgIHJldHVybiBydWxlICYmIHJ1bGUucmVzb2x2ZWRPcHRpb25zKCkucGx1cmFsQ2F0ZWdvcmllcy5sZW5ndGggPiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnVsZSAmJiBydWxlLm51bWJlcnMubGVuZ3RoID4gMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGx1cmFsRm9ybXNPZktleVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQbHVyYWxGb3Jtc09mS2V5KGNvZGUsIGtleSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3VmZml4ZXMoY29kZSwgb3B0aW9ucykubWFwKGZ1bmN0aW9uIChzdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGtleSkuY29uY2F0KHN1ZmZpeCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3VmZml4ZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3VmZml4ZXMoY29kZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmdldFJ1bGUoY29kZSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICghcnVsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgICByZXR1cm4gcnVsZS5yZXNvbHZlZE9wdGlvbnMoKS5wbHVyYWxDYXRlZ29yaWVzLnNvcnQoZnVuY3Rpb24gKHBsdXJhbENhdGVnb3J5MSwgcGx1cmFsQ2F0ZWdvcnkyKSB7XG4gICAgICAgICAgcmV0dXJuIHN1ZmZpeGVzT3JkZXJbcGx1cmFsQ2F0ZWdvcnkxXSAtIHN1ZmZpeGVzT3JkZXJbcGx1cmFsQ2F0ZWdvcnkyXTtcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChwbHVyYWxDYXRlZ29yeSkge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChfdGhpcy5vcHRpb25zLnByZXBlbmQpLmNvbmNhdChwbHVyYWxDYXRlZ29yeSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnVsZS5udW1iZXJzLm1hcChmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZXRTdWZmaXgoY29kZSwgbnVtYmVyLCBvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdWZmaXhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3VmZml4KGNvZGUsIGNvdW50KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuZ2V0UnVsZShjb2RlLCBvcHRpb25zKTtcblxuICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkVXNlSW50bEFwaSgpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMub3B0aW9ucy5wcmVwZW5kKS5jb25jYXQocnVsZS5zZWxlY3QoY291bnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1ZmZpeFJldHJvQ29tcGF0aWJsZShydWxlLCBjb3VudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXCJubyBwbHVyYWwgcnVsZSBmb3VuZCBmb3I6IFwiLmNvbmNhdChjb2RlKSk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN1ZmZpeFJldHJvQ29tcGF0aWJsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdWZmaXhSZXRyb0NvbXBhdGlibGUocnVsZSwgY291bnQpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaWR4ID0gcnVsZS5ub0FicyA/IHJ1bGUucGx1cmFscyhjb3VudCkgOiBydWxlLnBsdXJhbHMoTWF0aC5hYnMoY291bnQpKTtcbiAgICAgIHZhciBzdWZmaXggPSBydWxlLm51bWJlcnNbaWR4XTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeCAmJiBydWxlLm51bWJlcnMubGVuZ3RoID09PSAyICYmIHJ1bGUubnVtYmVyc1swXSA9PT0gMSkge1xuICAgICAgICBpZiAoc3VmZml4ID09PSAyKSB7XG4gICAgICAgICAgc3VmZml4ID0gJ3BsdXJhbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VmZml4ID09PSAxKSB7XG4gICAgICAgICAgc3VmZml4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHJldHVyblN1ZmZpeCA9IGZ1bmN0aW9uIHJldHVyblN1ZmZpeCgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLnByZXBlbmQgJiYgc3VmZml4LnRvU3RyaW5nKCkgPyBfdGhpczIub3B0aW9ucy5wcmVwZW5kICsgc3VmZml4LnRvU3RyaW5nKCkgOiBzdWZmaXgudG9TdHJpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gPT09ICd2MScpIHtcbiAgICAgICAgaWYgKHN1ZmZpeCA9PT0gMSkgcmV0dXJuICcnO1xuICAgICAgICBpZiAodHlwZW9mIHN1ZmZpeCA9PT0gJ251bWJlcicpIHJldHVybiBcIl9wbHVyYWxfXCIuY29uY2F0KHN1ZmZpeC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHJldHVyblN1ZmZpeCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gPT09ICd2MicpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblN1ZmZpeCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXggJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA9PT0gMiAmJiBydWxlLm51bWJlcnNbMF0gPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblN1ZmZpeCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnByZXBlbmQgJiYgaWR4LnRvU3RyaW5nKCkgPyB0aGlzLm9wdGlvbnMucHJlcGVuZCArIGlkeC50b1N0cmluZygpIDogaWR4LnRvU3RyaW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNob3VsZFVzZUludGxBcGlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkVXNlSW50bEFwaSgpIHtcbiAgICAgIHJldHVybiAhZGVwcmVjYXRlZEpzb25WZXJzaW9ucy5pbmNsdWRlcyh0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQbHVyYWxSZXNvbHZlcjtcbn0oKTtcblxuZnVuY3Rpb24gb3duS2V5cyQzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQzKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEludGVycG9sYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW50ZXJwb2xhdG9yKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIEludGVycG9sYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdpbnRlcnBvbGF0b3InKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgdGhpcy5mb3JtYXQgPSBvcHRpb25zLmludGVycG9sYXRpb24gJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgdGhpcy5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oSW50ZXJwb2xhdG9yLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBpZiAoIW9wdGlvbnMuaW50ZXJwb2xhdGlvbikgb3B0aW9ucy5pbnRlcnBvbGF0aW9uID0ge1xuICAgICAgICBlc2NhcGVWYWx1ZTogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHZhciBpT3B0cyA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbjtcbiAgICAgIHRoaXMuZXNjYXBlID0gaU9wdHMuZXNjYXBlICE9PSB1bmRlZmluZWQgPyBpT3B0cy5lc2NhcGUgOiBlc2NhcGU7XG4gICAgICB0aGlzLmVzY2FwZVZhbHVlID0gaU9wdHMuZXNjYXBlVmFsdWUgIT09IHVuZGVmaW5lZCA/IGlPcHRzLmVzY2FwZVZhbHVlIDogdHJ1ZTtcbiAgICAgIHRoaXMudXNlUmF3VmFsdWVUb0VzY2FwZSA9IGlPcHRzLnVzZVJhd1ZhbHVlVG9Fc2NhcGUgIT09IHVuZGVmaW5lZCA/IGlPcHRzLnVzZVJhd1ZhbHVlVG9Fc2NhcGUgOiBmYWxzZTtcbiAgICAgIHRoaXMucHJlZml4ID0gaU9wdHMucHJlZml4ID8gcmVnZXhFc2NhcGUoaU9wdHMucHJlZml4KSA6IGlPcHRzLnByZWZpeEVzY2FwZWQgfHwgJ3t7JztcbiAgICAgIHRoaXMuc3VmZml4ID0gaU9wdHMuc3VmZml4ID8gcmVnZXhFc2NhcGUoaU9wdHMuc3VmZml4KSA6IGlPcHRzLnN1ZmZpeEVzY2FwZWQgfHwgJ319JztcbiAgICAgIHRoaXMuZm9ybWF0U2VwYXJhdG9yID0gaU9wdHMuZm9ybWF0U2VwYXJhdG9yID8gaU9wdHMuZm9ybWF0U2VwYXJhdG9yIDogaU9wdHMuZm9ybWF0U2VwYXJhdG9yIHx8ICcsJztcbiAgICAgIHRoaXMudW5lc2NhcGVQcmVmaXggPSBpT3B0cy51bmVzY2FwZVN1ZmZpeCA/ICcnIDogaU9wdHMudW5lc2NhcGVQcmVmaXggfHwgJy0nO1xuICAgICAgdGhpcy51bmVzY2FwZVN1ZmZpeCA9IHRoaXMudW5lc2NhcGVQcmVmaXggPyAnJyA6IGlPcHRzLnVuZXNjYXBlU3VmZml4IHx8ICcnO1xuICAgICAgdGhpcy5uZXN0aW5nUHJlZml4ID0gaU9wdHMubmVzdGluZ1ByZWZpeCA/IHJlZ2V4RXNjYXBlKGlPcHRzLm5lc3RpbmdQcmVmaXgpIDogaU9wdHMubmVzdGluZ1ByZWZpeEVzY2FwZWQgfHwgcmVnZXhFc2NhcGUoJyR0KCcpO1xuICAgICAgdGhpcy5uZXN0aW5nU3VmZml4ID0gaU9wdHMubmVzdGluZ1N1ZmZpeCA/IHJlZ2V4RXNjYXBlKGlPcHRzLm5lc3RpbmdTdWZmaXgpIDogaU9wdHMubmVzdGluZ1N1ZmZpeEVzY2FwZWQgfHwgcmVnZXhFc2NhcGUoJyknKTtcbiAgICAgIHRoaXMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgPSBpT3B0cy5uZXN0aW5nT3B0aW9uc1NlcGFyYXRvciA/IGlPcHRzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yIDogaU9wdHMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgfHwgJywnO1xuICAgICAgdGhpcy5tYXhSZXBsYWNlcyA9IGlPcHRzLm1heFJlcGxhY2VzID8gaU9wdHMubWF4UmVwbGFjZXMgOiAxMDAwO1xuICAgICAgdGhpcy5hbHdheXNGb3JtYXQgPSBpT3B0cy5hbHdheXNGb3JtYXQgIT09IHVuZGVmaW5lZCA/IGlPcHRzLmFsd2F5c0Zvcm1hdCA6IGZhbHNlO1xuICAgICAgdGhpcy5yZXNldFJlZ0V4cCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHRoaXMuaW5pdCh0aGlzLm9wdGlvbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFJlZ0V4cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldFJlZ0V4cCgpIHtcbiAgICAgIHZhciByZWdleHBTdHIgPSBcIlwiLmNvbmNhdCh0aGlzLnByZWZpeCwgXCIoLis/KVwiKS5jb25jYXQodGhpcy5zdWZmaXgpO1xuICAgICAgdGhpcy5yZWdleHAgPSBuZXcgUmVnRXhwKHJlZ2V4cFN0ciwgJ2cnKTtcbiAgICAgIHZhciByZWdleHBVbmVzY2FwZVN0ciA9IFwiXCIuY29uY2F0KHRoaXMucHJlZml4KS5jb25jYXQodGhpcy51bmVzY2FwZVByZWZpeCwgXCIoLis/KVwiKS5jb25jYXQodGhpcy51bmVzY2FwZVN1ZmZpeCkuY29uY2F0KHRoaXMuc3VmZml4KTtcbiAgICAgIHRoaXMucmVnZXhwVW5lc2NhcGUgPSBuZXcgUmVnRXhwKHJlZ2V4cFVuZXNjYXBlU3RyLCAnZycpO1xuICAgICAgdmFyIG5lc3RpbmdSZWdleHBTdHIgPSBcIlwiLmNvbmNhdCh0aGlzLm5lc3RpbmdQcmVmaXgsIFwiKC4rPylcIikuY29uY2F0KHRoaXMubmVzdGluZ1N1ZmZpeCk7XG4gICAgICB0aGlzLm5lc3RpbmdSZWdleHAgPSBuZXcgUmVnRXhwKG5lc3RpbmdSZWdleHBTdHIsICdnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImludGVycG9sYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGludGVycG9sYXRlKHN0ciwgZGF0YSwgbG5nLCBvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgbWF0Y2g7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgcmVwbGFjZXM7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24gJiYgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyB8fCB7fTtcblxuICAgICAgZnVuY3Rpb24gcmVnZXhTYWZlKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaGFuZGxlRm9ybWF0ID0gZnVuY3Rpb24gaGFuZGxlRm9ybWF0KGtleSkge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoX3RoaXMuZm9ybWF0U2VwYXJhdG9yKSA8IDApIHtcbiAgICAgICAgICB2YXIgcGF0aCA9IGdldFBhdGhXaXRoRGVmYXVsdHMoZGF0YSwgZGVmYXVsdERhdGEsIGtleSk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmFsd2F5c0Zvcm1hdCA/IF90aGlzLmZvcm1hdChwYXRoLCB1bmRlZmluZWQsIGxuZywgX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIG9wdGlvbnMpLCBkYXRhKSwge30sIHtcbiAgICAgICAgICAgIGludGVycG9sYXRpb25rZXk6IGtleVxuICAgICAgICAgIH0pKSA6IHBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcCA9IGtleS5zcGxpdChfdGhpcy5mb3JtYXRTZXBhcmF0b3IpO1xuICAgICAgICB2YXIgayA9IHAuc2hpZnQoKS50cmltKCk7XG4gICAgICAgIHZhciBmID0gcC5qb2luKF90aGlzLmZvcm1hdFNlcGFyYXRvcikudHJpbSgpO1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0KGdldFBhdGhXaXRoRGVmYXVsdHMoZGF0YSwgZGVmYXVsdERhdGEsIGspLCBmLCBsbmcsIF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoX29iamVjdFNwcmVhZCQzKHt9LCBvcHRpb25zKSwgZGF0YSksIHt9LCB7XG4gICAgICAgICAgaW50ZXJwb2xhdGlvbmtleToga1xuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJlc2V0UmVnRXhwKCk7XG4gICAgICB2YXIgbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLm1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyO1xuICAgICAgdmFyIHNraXBPblZhcmlhYmxlcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXM7XG4gICAgICB2YXIgdG9kb3MgPSBbe1xuICAgICAgICByZWdleDogdGhpcy5yZWdleHBVbmVzY2FwZSxcbiAgICAgICAgc2FmZVZhbHVlOiBmdW5jdGlvbiBzYWZlVmFsdWUodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZ2V4U2FmZSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHJlZ2V4OiB0aGlzLnJlZ2V4cCxcbiAgICAgICAgc2FmZVZhbHVlOiBmdW5jdGlvbiBzYWZlVmFsdWUodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmVzY2FwZVZhbHVlID8gcmVnZXhTYWZlKF90aGlzLmVzY2FwZSh2YWwpKSA6IHJlZ2V4U2FmZSh2YWwpO1xuICAgICAgICB9XG4gICAgICB9XTtcbiAgICAgIHRvZG9zLmZvckVhY2goZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgcmVwbGFjZXMgPSAwO1xuXG4gICAgICAgIHdoaWxlIChtYXRjaCA9IHRvZG8ucmVnZXguZXhlYyhzdHIpKSB7XG4gICAgICAgICAgdmFyIG1hdGNoZWRWYXIgPSBtYXRjaFsxXS50cmltKCk7XG4gICAgICAgICAgdmFsdWUgPSBoYW5kbGVGb3JtYXQobWF0Y2hlZFZhcik7XG5cbiAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdmFyIHRlbXAgPSBtaXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIoc3RyLCBtYXRjaCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgIHZhbHVlID0gdHlwZW9mIHRlbXAgPT09ICdzdHJpbmcnID8gdGVtcCA6ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkobWF0Y2hlZFZhcikpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2tpcE9uVmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gbWF0Y2hbMF07XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3RoaXMubG9nZ2VyLndhcm4oXCJtaXNzZWQgdG8gcGFzcyBpbiB2YXJpYWJsZSBcIi5jb25jYXQobWF0Y2hlZFZhciwgXCIgZm9yIGludGVycG9sYXRpbmcgXCIpLmNvbmNhdChzdHIpKTtcblxuICAgICAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiAhX3RoaXMudXNlUmF3VmFsdWVUb0VzY2FwZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBtYWtlU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2FmZVZhbHVlID0gdG9kby5zYWZlVmFsdWUodmFsdWUpO1xuICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG1hdGNoWzBdLCBzYWZlVmFsdWUpO1xuXG4gICAgICAgICAgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICAgICAgdG9kby5yZWdleC5sYXN0SW5kZXggKz0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgdG9kby5yZWdleC5sYXN0SW5kZXggLT0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvLnJlZ2V4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVwbGFjZXMrKztcblxuICAgICAgICAgIGlmIChyZXBsYWNlcyA+PSBfdGhpcy5tYXhSZXBsYWNlcykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVzdChzdHIsIGZjKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdmFyIG1hdGNoO1xuICAgICAgdmFyIHZhbHVlO1xuXG4gICAgICB2YXIgY2xvbmVkT3B0aW9ucyA9IF9vYmplY3RTcHJlYWQkMyh7fSwgb3B0aW9ucyk7XG5cbiAgICAgIGNsb25lZE9wdGlvbnMuYXBwbHlQb3N0UHJvY2Vzc29yID0gZmFsc2U7XG4gICAgICBkZWxldGUgY2xvbmVkT3B0aW9ucy5kZWZhdWx0VmFsdWU7XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUhhc09wdGlvbnMoa2V5LCBpbmhlcml0ZWRPcHRpb25zKSB7XG4gICAgICAgIHZhciBzZXAgPSB0aGlzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yO1xuICAgICAgICBpZiAoa2V5LmluZGV4T2Yoc2VwKSA8IDApIHJldHVybiBrZXk7XG4gICAgICAgIHZhciBjID0ga2V5LnNwbGl0KG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoc2VwLCBcIlsgXSp7XCIpKSk7XG4gICAgICAgIHZhciBvcHRpb25zU3RyaW5nID0gXCJ7XCIuY29uY2F0KGNbMV0pO1xuICAgICAgICBrZXkgPSBjWzBdO1xuICAgICAgICBvcHRpb25zU3RyaW5nID0gdGhpcy5pbnRlcnBvbGF0ZShvcHRpb25zU3RyaW5nLCBjbG9uZWRPcHRpb25zKTtcbiAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgvJy9nLCAnXCInKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNsb25lZE9wdGlvbnMgPSBKU09OLnBhcnNlKG9wdGlvbnNTdHJpbmcpO1xuICAgICAgICAgIGlmIChpbmhlcml0ZWRPcHRpb25zKSBjbG9uZWRPcHRpb25zID0gX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgaW5oZXJpdGVkT3B0aW9ucyksIGNsb25lZE9wdGlvbnMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybihcImZhaWxlZCBwYXJzaW5nIG9wdGlvbnMgc3RyaW5nIGluIG5lc3RpbmcgZm9yIGtleSBcIi5jb25jYXQoa2V5KSwgZSk7XG4gICAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGtleSkuY29uY2F0KHNlcCkuY29uY2F0KG9wdGlvbnNTdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGNsb25lZE9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAobWF0Y2ggPSB0aGlzLm5lc3RpbmdSZWdleHAuZXhlYyhzdHIpKSB7XG4gICAgICAgIHZhciBmb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHZhciBkb1JlZHVjZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChtYXRjaFswXS5pbmRleE9mKHRoaXMuZm9ybWF0U2VwYXJhdG9yKSAhPT0gLTEgJiYgIS97Lip9Ly50ZXN0KG1hdGNoWzFdKSkge1xuICAgICAgICAgIHZhciByID0gbWF0Y2hbMV0uc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpLm1hcChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0udHJpbSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1hdGNoWzFdID0gci5zaGlmdCgpO1xuICAgICAgICAgIGZvcm1hdHRlcnMgPSByO1xuICAgICAgICAgIGRvUmVkdWNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gZmMoaGFuZGxlSGFzT3B0aW9ucy5jYWxsKHRoaXMsIG1hdGNoWzFdLnRyaW0oKSwgY2xvbmVkT3B0aW9ucyksIGNsb25lZE9wdGlvbnMpO1xuICAgICAgICBpZiAodmFsdWUgJiYgbWF0Y2hbMF0gPT09IHN0ciAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB2YWx1ZSA9IG1ha2VTdHJpbmcodmFsdWUpO1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuKFwibWlzc2VkIHRvIHJlc29sdmUgXCIuY29uY2F0KG1hdGNoWzFdLCBcIiBmb3IgbmVzdGluZyBcIikuY29uY2F0KHN0cikpO1xuICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9SZWR1Y2UpIHtcbiAgICAgICAgICB2YWx1ZSA9IGZvcm1hdHRlcnMucmVkdWNlKGZ1bmN0aW9uICh2LCBmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmZvcm1hdCh2LCBmLCBvcHRpb25zLmxuZywgX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICAgICAgICAgIGludGVycG9sYXRpb25rZXk6IG1hdGNoWzFdLnRyaW0oKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0sIHZhbHVlLnRyaW0oKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShtYXRjaFswXSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnJlZ2V4cC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnRlcnBvbGF0b3I7XG59KCk7XG5cbmZ1bmN0aW9uIG93bktleXMkNChvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHlfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDQoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIHBhcnNlRm9ybWF0U3RyKGZvcm1hdFN0cikge1xuICB2YXIgZm9ybWF0TmFtZSA9IGZvcm1hdFN0ci50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgdmFyIGZvcm1hdE9wdGlvbnMgPSB7fTtcblxuICBpZiAoZm9ybWF0U3RyLmluZGV4T2YoJygnKSA+IC0xKSB7XG4gICAgdmFyIHAgPSBmb3JtYXRTdHIuc3BsaXQoJygnKTtcbiAgICBmb3JtYXROYW1lID0gcFswXS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICB2YXIgb3B0U3RyID0gcFsxXS5zdWJzdHJpbmcoMCwgcFsxXS5sZW5ndGggLSAxKTtcblxuICAgIGlmIChmb3JtYXROYW1lID09PSAnY3VycmVuY3knICYmIG9wdFN0ci5pbmRleE9mKCc6JykgPCAwKSB7XG4gICAgICBpZiAoIWZvcm1hdE9wdGlvbnMuY3VycmVuY3kpIGZvcm1hdE9wdGlvbnMuY3VycmVuY3kgPSBvcHRTdHIudHJpbSgpO1xuICAgIH0gZWxzZSBpZiAoZm9ybWF0TmFtZSA9PT0gJ3JlbGF0aXZldGltZScgJiYgb3B0U3RyLmluZGV4T2YoJzonKSA8IDApIHtcbiAgICAgIGlmICghZm9ybWF0T3B0aW9ucy5yYW5nZSkgZm9ybWF0T3B0aW9ucy5yYW5nZSA9IG9wdFN0ci50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvcHRzID0gb3B0U3RyLnNwbGl0KCc7Jyk7XG4gICAgICBvcHRzLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICBpZiAoIW9wdCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBfb3B0JHNwbGl0ID0gb3B0LnNwbGl0KCc6JyksXG4gICAgICAgICAgICBfb3B0JHNwbGl0MiA9IF90b0FycmF5X19kZWZhdWx0WydkZWZhdWx0J10oX29wdCRzcGxpdCksXG4gICAgICAgICAgICBrZXkgPSBfb3B0JHNwbGl0MlswXSxcbiAgICAgICAgICAgIHJlc3QgPSBfb3B0JHNwbGl0Mi5zbGljZSgxKTtcblxuICAgICAgICB2YXIgdmFsID0gcmVzdC5qb2luKCc6JykudHJpbSgpLnJlcGxhY2UoL14nK3wnKyQvZywgJycpO1xuICAgICAgICBpZiAoIWZvcm1hdE9wdGlvbnNba2V5LnRyaW0oKV0pIGZvcm1hdE9wdGlvbnNba2V5LnRyaW0oKV0gPSB2YWw7XG4gICAgICAgIGlmICh2YWwgPT09ICdmYWxzZScpIGZvcm1hdE9wdGlvbnNba2V5LnRyaW0oKV0gPSBmYWxzZTtcbiAgICAgICAgaWYgKHZhbCA9PT0gJ3RydWUnKSBmb3JtYXRPcHRpb25zW2tleS50cmltKCldID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc05hTih2YWwpKSBmb3JtYXRPcHRpb25zW2tleS50cmltKCldID0gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvcm1hdE5hbWU6IGZvcm1hdE5hbWUsXG4gICAgZm9ybWF0T3B0aW9uczogZm9ybWF0T3B0aW9uc1xuICB9O1xufVxuXG52YXIgRm9ybWF0dGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGb3JtYXR0ZXIoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgRm9ybWF0dGVyKTtcblxuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2Zvcm1hdHRlcicpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5mb3JtYXRzID0ge1xuICAgICAgbnVtYmVyOiBmdW5jdGlvbiBudW1iZXIodmFsLCBsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsbmcsIG9wdGlvbnMpLmZvcm1hdCh2YWwpO1xuICAgICAgfSxcbiAgICAgIGN1cnJlbmN5OiBmdW5jdGlvbiBjdXJyZW5jeSh2YWwsIGxuZywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxuZywgX29iamVjdFNwcmVhZCQ0KF9vYmplY3RTcHJlYWQkNCh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeSdcbiAgICAgICAgfSkpLmZvcm1hdCh2YWwpO1xuICAgICAgfSxcbiAgICAgIGRhdGV0aW1lOiBmdW5jdGlvbiBkYXRldGltZSh2YWwsIGxuZywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG5nLCBfb2JqZWN0U3ByZWFkJDQoe30sIG9wdGlvbnMpKS5mb3JtYXQodmFsKTtcbiAgICAgIH0sXG4gICAgICByZWxhdGl2ZXRpbWU6IGZ1bmN0aW9uIHJlbGF0aXZldGltZSh2YWwsIGxuZywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGxuZywgX29iamVjdFNwcmVhZCQ0KHt9LCBvcHRpb25zKSkuZm9ybWF0KHZhbCwgb3B0aW9ucy5yYW5nZSB8fCAnZGF5Jyk7XG4gICAgICB9LFxuICAgICAgbGlzdDogZnVuY3Rpb24gbGlzdCh2YWwsIGxuZywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuTGlzdEZvcm1hdChsbmcsIF9vYmplY3RTcHJlYWQkNCh7fSwgb3B0aW9ucykpLmZvcm1hdCh2YWwpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oRm9ybWF0dGVyLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoc2VydmljZXMpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGludGVycG9sYXRpb246IHt9XG4gICAgICB9O1xuICAgICAgdmFyIGlPcHRzID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uO1xuICAgICAgdGhpcy5mb3JtYXRTZXBhcmF0b3IgPSBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgPyBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgOiBpT3B0cy5mb3JtYXRTZXBhcmF0b3IgfHwgJywnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG5hbWUsIGZjKSB7XG4gICAgICB0aGlzLmZvcm1hdHNbbmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV0gPSBmYztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgX2Zvcm1hdCwgbG5nLCBvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZm9ybWF0cyA9IF9mb3JtYXQuc3BsaXQodGhpcy5mb3JtYXRTZXBhcmF0b3IpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gZm9ybWF0cy5yZWR1Y2UoZnVuY3Rpb24gKG1lbSwgZikge1xuICAgICAgICB2YXIgX3BhcnNlRm9ybWF0U3RyID0gcGFyc2VGb3JtYXRTdHIoZiksXG4gICAgICAgICAgICBmb3JtYXROYW1lID0gX3BhcnNlRm9ybWF0U3RyLmZvcm1hdE5hbWUsXG4gICAgICAgICAgICBmb3JtYXRPcHRpb25zID0gX3BhcnNlRm9ybWF0U3RyLmZvcm1hdE9wdGlvbnM7XG5cbiAgICAgICAgaWYgKF90aGlzLmZvcm1hdHNbZm9ybWF0TmFtZV0pIHtcbiAgICAgICAgICB2YXIgZm9ybWF0dGVkID0gbWVtO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB2YWxPcHRpb25zID0gb3B0aW9ucyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtcyAmJiBvcHRpb25zLmZvcm1hdFBhcmFtc1tvcHRpb25zLmludGVycG9sYXRpb25rZXldIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGwgPSB2YWxPcHRpb25zLmxvY2FsZSB8fCB2YWxPcHRpb25zLmxuZyB8fCBvcHRpb25zLmxvY2FsZSB8fCBvcHRpb25zLmxuZyB8fCBsbmc7XG4gICAgICAgICAgICBmb3JtYXR0ZWQgPSBfdGhpcy5mb3JtYXRzW2Zvcm1hdE5hbWVdKG1lbSwgbCwgX29iamVjdFNwcmVhZCQ0KF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIGZvcm1hdE9wdGlvbnMpLCBvcHRpb25zKSwgdmFsT3B0aW9ucykpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2dnZXIud2FybihlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5sb2dnZXIud2FybihcInRoZXJlIHdhcyBubyBmb3JtYXQgZnVuY3Rpb24gZm9yIFwiLmNvbmNhdChmb3JtYXROYW1lKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVtO1xuICAgICAgfSwgdmFsdWUpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRm9ybWF0dGVyO1xufSgpO1xuXG5mdW5jdGlvbiBvd25LZXlzJDUob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDUodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5X19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ1KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIkMihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQyKCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mX19kZWZhdWx0WydkZWZhdWx0J10oRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZl9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybl9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCQyKCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gcmVtb3ZlUGVuZGluZyhxLCBuYW1lKSB7XG4gIGlmIChxLnBlbmRpbmdbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgIGRlbGV0ZSBxLnBlbmRpbmdbbmFtZV07XG4gICAgcS5wZW5kaW5nQ291bnQtLTtcbiAgfVxufVxuXG52YXIgQ29ubmVjdG9yID0gZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzX19kZWZhdWx0WydkZWZhdWx0J10oQ29ubmVjdG9yLCBfRXZlbnRFbWl0dGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDIoQ29ubmVjdG9yKTtcblxuICBmdW5jdGlvbiBDb25uZWN0b3IoYmFja2VuZCwgc3RvcmUsIHNlcnZpY2VzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgQ29ubmVjdG9yKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBpZiAoaXNJRTEwKSB7XG4gICAgICBFdmVudEVtaXR0ZXIuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMpKTtcbiAgICB9XG5cbiAgICBfdGhpcy5iYWNrZW5kID0gYmFja2VuZDtcbiAgICBfdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgIF90aGlzLnNlcnZpY2VzID0gc2VydmljZXM7XG4gICAgX3RoaXMubGFuZ3VhZ2VVdGlscyA9IHNlcnZpY2VzLmxhbmd1YWdlVXRpbHM7XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgX3RoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2JhY2tlbmRDb25uZWN0b3InKTtcbiAgICBfdGhpcy53YWl0aW5nUmVhZHMgPSBbXTtcbiAgICBfdGhpcy5tYXhQYXJhbGxlbFJlYWRzID0gb3B0aW9ucy5tYXhQYXJhbGxlbFJlYWRzIHx8IDEwO1xuICAgIF90aGlzLnJlYWRpbmdDYWxscyA9IDA7XG4gICAgX3RoaXMubWF4UmV0cmllcyA9IG9wdGlvbnMubWF4UmV0cmllcyA+PSAwID8gb3B0aW9ucy5tYXhSZXRyaWVzIDogNTtcbiAgICBfdGhpcy5yZXRyeVRpbWVvdXQgPSBvcHRpb25zLnJldHJ5VGltZW91dCA+PSAxID8gb3B0aW9ucy5yZXRyeVRpbWVvdXQgOiAzNTA7XG4gICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICBfdGhpcy5xdWV1ZSA9IFtdO1xuXG4gICAgaWYgKF90aGlzLmJhY2tlbmQgJiYgX3RoaXMuYmFja2VuZC5pbml0KSB7XG4gICAgICBfdGhpcy5iYWNrZW5kLmluaXQoc2VydmljZXMsIG9wdGlvbnMuYmFja2VuZCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oQ29ubmVjdG9yLCBbe1xuICAgIGtleTogXCJxdWV1ZUxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcXVldWVMb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgdG9Mb2FkID0ge307XG4gICAgICB2YXIgcGVuZGluZyA9IHt9O1xuICAgICAgdmFyIHRvTG9hZExhbmd1YWdlcyA9IHt9O1xuICAgICAgdmFyIHRvTG9hZE5hbWVzcGFjZXMgPSB7fTtcbiAgICAgIGxhbmd1YWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChsbmcpIHtcbiAgICAgICAgdmFyIGhhc0FsbE5hbWVzcGFjZXMgPSB0cnVlO1xuICAgICAgICBuYW1lc3BhY2VzLmZvckVhY2goZnVuY3Rpb24gKG5zKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBcIlwiLmNvbmNhdChsbmcsIFwifFwiKS5jb25jYXQobnMpO1xuXG4gICAgICAgICAgaWYgKCFvcHRpb25zLnJlbG9hZCAmJiBfdGhpczIuc3RvcmUuaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHtcbiAgICAgICAgICAgIF90aGlzMi5zdGF0ZVtuYW1lXSA9IDI7XG4gICAgICAgICAgfSBlbHNlIGlmIChfdGhpczIuc3RhdGVbbmFtZV0gPCAwKSA7IGVsc2UgaWYgKF90aGlzMi5zdGF0ZVtuYW1lXSA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKHBlbmRpbmdbbmFtZV0gPT09IHVuZGVmaW5lZCkgcGVuZGluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMi5zdGF0ZVtuYW1lXSA9IDE7XG4gICAgICAgICAgICBoYXNBbGxOYW1lc3BhY2VzID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocGVuZGluZ1tuYW1lXSA9PT0gdW5kZWZpbmVkKSBwZW5kaW5nW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0b0xvYWRbbmFtZV0gPT09IHVuZGVmaW5lZCkgdG9Mb2FkW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0b0xvYWROYW1lc3BhY2VzW25zXSA9PT0gdW5kZWZpbmVkKSB0b0xvYWROYW1lc3BhY2VzW25zXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFoYXNBbGxOYW1lc3BhY2VzKSB0b0xvYWRMYW5ndWFnZXNbbG5nXSA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRvTG9hZCkubGVuZ3RoIHx8IE9iamVjdC5rZXlzKHBlbmRpbmcpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goe1xuICAgICAgICAgIHBlbmRpbmc6IHBlbmRpbmcsXG4gICAgICAgICAgcGVuZGluZ0NvdW50OiBPYmplY3Qua2V5cyhwZW5kaW5nKS5sZW5ndGgsXG4gICAgICAgICAgbG9hZGVkOiB7fSxcbiAgICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9Mb2FkOiBPYmplY3Qua2V5cyh0b0xvYWQpLFxuICAgICAgICBwZW5kaW5nOiBPYmplY3Qua2V5cyhwZW5kaW5nKSxcbiAgICAgICAgdG9Mb2FkTGFuZ3VhZ2VzOiBPYmplY3Qua2V5cyh0b0xvYWRMYW5ndWFnZXMpLFxuICAgICAgICB0b0xvYWROYW1lc3BhY2VzOiBPYmplY3Qua2V5cyh0b0xvYWROYW1lc3BhY2VzKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRlZChuYW1lLCBlcnIsIGRhdGEpIHtcbiAgICAgIHZhciBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgICAgdmFyIGxuZyA9IHNbMF07XG4gICAgICB2YXIgbnMgPSBzWzFdO1xuICAgICAgaWYgKGVycikgdGhpcy5lbWl0KCdmYWlsZWRMb2FkaW5nJywgbG5nLCBucywgZXJyKTtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5hZGRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zLCBkYXRhKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZVtuYW1lXSA9IGVyciA/IC0xIDogMjtcbiAgICAgIHZhciBsb2FkZWQgPSB7fTtcbiAgICAgIHRoaXMucXVldWUuZm9yRWFjaChmdW5jdGlvbiAocSkge1xuICAgICAgICBwdXNoUGF0aChxLmxvYWRlZCwgW2xuZ10sIG5zKTtcbiAgICAgICAgcmVtb3ZlUGVuZGluZyhxLCBuYW1lKTtcbiAgICAgICAgaWYgKGVycikgcS5lcnJvcnMucHVzaChlcnIpO1xuXG4gICAgICAgIGlmIChxLnBlbmRpbmdDb3VudCA9PT0gMCAmJiAhcS5kb25lKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocS5sb2FkZWQpLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIGlmICghbG9hZGVkW2xdKSBsb2FkZWRbbF0gPSB7fTtcbiAgICAgICAgICAgIHZhciBsb2FkZWRLZXlzID0gcS5sb2FkZWRbbF07XG5cbiAgICAgICAgICAgIGlmIChsb2FkZWRLZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBsb2FkZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKG5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlZFtsXVtuc10gPT09IHVuZGVmaW5lZCkgbG9hZGVkW2xdW25zXSA9IHRydWU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHEuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICBpZiAocS5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBxLmNhbGxiYWNrKHEuZXJyb3JzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcS5jYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoJ2xvYWRlZCcsIGxvYWRlZCk7XG4gICAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5maWx0ZXIoZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgcmV0dXJuICFxLmRvbmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVhZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKGxuZywgbnMsIGZjTmFtZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciB0cmllZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgICAgIHZhciB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiB0aGlzLnJldHJ5VGltZW91dDtcbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKCFsbmcubGVuZ3RoKSByZXR1cm4gY2FsbGJhY2sobnVsbCwge30pO1xuXG4gICAgICBpZiAodGhpcy5yZWFkaW5nQ2FsbHMgPj0gdGhpcy5tYXhQYXJhbGxlbFJlYWRzKSB7XG4gICAgICAgIHRoaXMud2FpdGluZ1JlYWRzLnB1c2goe1xuICAgICAgICAgIGxuZzogbG5nLFxuICAgICAgICAgIG5zOiBucyxcbiAgICAgICAgICBmY05hbWU6IGZjTmFtZSxcbiAgICAgICAgICB0cmllZDogdHJpZWQsXG4gICAgICAgICAgd2FpdDogd2FpdCxcbiAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWFkaW5nQ2FsbHMrKztcbiAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRbZmNOYW1lXShsbmcsIG5zLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgIF90aGlzMy5yZWFkaW5nQ2FsbHMtLTtcblxuICAgICAgICBpZiAoX3RoaXMzLndhaXRpbmdSZWFkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBfdGhpczMud2FpdGluZ1JlYWRzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBfdGhpczMucmVhZChuZXh0LmxuZywgbmV4dC5ucywgbmV4dC5mY05hbWUsIG5leHQudHJpZWQsIG5leHQud2FpdCwgbmV4dC5jYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyICYmIGRhdGEgJiYgdHJpZWQgPCBfdGhpczMubWF4UmV0cmllcykge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMzLnJlYWQuY2FsbChfdGhpczMsIGxuZywgbnMsIGZjTmFtZSwgdHJpZWQgKyAxLCB3YWl0ICogMiwgY2FsbGJhY2spO1xuICAgICAgICAgIH0sIHdhaXQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJlcGFyZUxvYWRpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghdGhpcy5iYWNrZW5kKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ05vIGJhY2tlbmQgd2FzIGFkZGVkIHZpYSBpMThuZXh0LnVzZS4gV2lsbCBub3QgbG9hZCByZXNvdXJjZXMuJyk7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxhbmd1YWdlcyA9PT0gJ3N0cmluZycpIGxhbmd1YWdlcyA9IHRoaXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkobGFuZ3VhZ2VzKTtcbiAgICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycpIG5hbWVzcGFjZXMgPSBbbmFtZXNwYWNlc107XG4gICAgICB2YXIgdG9Mb2FkID0gdGhpcy5xdWV1ZUxvYWQobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCBvcHRpb25zLCBjYWxsYmFjayk7XG5cbiAgICAgIGlmICghdG9Mb2FkLnRvTG9hZC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0b0xvYWQucGVuZGluZy5sZW5ndGgpIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB0b0xvYWQudG9Mb2FkLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgX3RoaXM0LmxvYWRPbmUobmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMucHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCB7fSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgY2FsbGJhY2spIHtcbiAgICAgIHRoaXMucHJlcGFyZUxvYWRpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2VzLCB7XG4gICAgICAgIHJlbG9hZDogdHJ1ZVxuICAgICAgfSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkT25lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRPbmUobmFtZSkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBwcmVmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICAgICAgdmFyIHMgPSBuYW1lLnNwbGl0KCd8Jyk7XG4gICAgICB2YXIgbG5nID0gc1swXTtcbiAgICAgIHZhciBucyA9IHNbMV07XG4gICAgICB0aGlzLnJlYWQobG5nLCBucywgJ3JlYWQnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSBfdGhpczUubG9nZ2VyLndhcm4oXCJcIi5jb25jYXQocHJlZml4LCBcImxvYWRpbmcgbmFtZXNwYWNlIFwiKS5jb25jYXQobnMsIFwiIGZvciBsYW5ndWFnZSBcIikuY29uY2F0KGxuZywgXCIgZmFpbGVkXCIpLCBlcnIpO1xuICAgICAgICBpZiAoIWVyciAmJiBkYXRhKSBfdGhpczUubG9nZ2VyLmxvZyhcIlwiLmNvbmNhdChwcmVmaXgsIFwibG9hZGVkIG5hbWVzcGFjZSBcIikuY29uY2F0KG5zLCBcIiBmb3IgbGFuZ3VhZ2UgXCIpLmNvbmNhdChsbmcpLCBkYXRhKTtcblxuICAgICAgICBfdGhpczUubG9hZGVkKG5hbWUsIGVyciwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2F2ZU1pc3NpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2F2ZU1pc3NpbmcobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgaXNVcGRhdGUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiB7fTtcblxuICAgICAgaWYgKHRoaXMuc2VydmljZXMudXRpbHMgJiYgdGhpcy5zZXJ2aWNlcy51dGlscy5oYXNMb2FkZWROYW1lc3BhY2UgJiYgIXRoaXMuc2VydmljZXMudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlKG5hbWVzcGFjZSkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybihcImRpZCBub3Qgc2F2ZSBrZXkgXFxcIlwiLmNvbmNhdChrZXksIFwiXFxcIiBhcyB0aGUgbmFtZXNwYWNlIFxcXCJcIikuY29uY2F0KG5hbWVzcGFjZSwgXCJcXFwiIHdhcyBub3QgeWV0IGxvYWRlZFwiKSwgJ1RoaXMgbWVhbnMgc29tZXRoaW5nIElTIFdST05HIGluIHlvdXIgc2V0dXAuIFlvdSBhY2Nlc3MgdGhlIHQgZnVuY3Rpb24gYmVmb3JlIGkxOG5leHQuaW5pdCAvIGkxOG5leHQubG9hZE5hbWVzcGFjZSAvIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2Ugd2FzIGRvbmUuIFdhaXQgZm9yIHRoZSBjYWxsYmFjayBvciBQcm9taXNlIHRvIHJlc29sdmUgYmVmb3JlIGFjY2Vzc2luZyBpdCEhIScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwga2V5ID09PSAnJykgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5iYWNrZW5kICYmIHRoaXMuYmFja2VuZC5jcmVhdGUpIHtcbiAgICAgICAgdGhpcy5iYWNrZW5kLmNyZWF0ZShsYW5ndWFnZXMsIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlLCBudWxsLCBfb2JqZWN0U3ByZWFkJDUoX29iamVjdFNwcmVhZCQ1KHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICBpc1VwZGF0ZTogaXNVcGRhdGVcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxhbmd1YWdlcyB8fCAhbGFuZ3VhZ2VzWzBdKSByZXR1cm47XG4gICAgICB0aGlzLnN0b3JlLmFkZFJlc291cmNlKGxhbmd1YWdlc1swXSwgbmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25uZWN0b3I7XG59KEV2ZW50RW1pdHRlcik7XG5cbmZ1bmN0aW9uIGdldCgpIHtcbiAgcmV0dXJuIHtcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgaW5pdEltbWVkaWF0ZTogdHJ1ZSxcbiAgICBuczogWyd0cmFuc2xhdGlvbiddLFxuICAgIGRlZmF1bHROUzogWyd0cmFuc2xhdGlvbiddLFxuICAgIGZhbGxiYWNrTG5nOiBbJ2RldiddLFxuICAgIGZhbGxiYWNrTlM6IGZhbHNlLFxuICAgIHN1cHBvcnRlZExuZ3M6IGZhbHNlLFxuICAgIG5vbkV4cGxpY2l0U3VwcG9ydGVkTG5nczogZmFsc2UsXG4gICAgbG9hZDogJ2FsbCcsXG4gICAgcHJlbG9hZDogZmFsc2UsXG4gICAgc2ltcGxpZnlQbHVyYWxTdWZmaXg6IHRydWUsXG4gICAga2V5U2VwYXJhdG9yOiAnLicsXG4gICAgbnNTZXBhcmF0b3I6ICc6JyxcbiAgICBwbHVyYWxTZXBhcmF0b3I6ICdfJyxcbiAgICBjb250ZXh0U2VwYXJhdG9yOiAnXycsXG4gICAgcGFydGlhbEJ1bmRsZWRMYW5ndWFnZXM6IGZhbHNlLFxuICAgIHNhdmVNaXNzaW5nOiBmYWxzZSxcbiAgICB1cGRhdGVNaXNzaW5nOiBmYWxzZSxcbiAgICBzYXZlTWlzc2luZ1RvOiAnZmFsbGJhY2snLFxuICAgIHNhdmVNaXNzaW5nUGx1cmFsczogdHJ1ZSxcbiAgICBtaXNzaW5nS2V5SGFuZGxlcjogZmFsc2UsXG4gICAgbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyOiBmYWxzZSxcbiAgICBwb3N0UHJvY2VzczogZmFsc2UsXG4gICAgcG9zdFByb2Nlc3NQYXNzUmVzb2x2ZWQ6IGZhbHNlLFxuICAgIHJldHVybk51bGw6IHRydWUsXG4gICAgcmV0dXJuRW1wdHlTdHJpbmc6IHRydWUsXG4gICAgcmV0dXJuT2JqZWN0czogZmFsc2UsXG4gICAgam9pbkFycmF5czogZmFsc2UsXG4gICAgcmV0dXJuZWRPYmplY3RIYW5kbGVyOiBmYWxzZSxcbiAgICBwYXJzZU1pc3NpbmdLZXlIYW5kbGVyOiBmYWxzZSxcbiAgICBhcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXk6IGZhbHNlLFxuICAgIGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlOiBmYWxzZSxcbiAgICBvdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlKGFyZ3MpIHtcbiAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgIGlmIChfdHlwZW9mX19kZWZhdWx0WydkZWZhdWx0J10oYXJnc1sxXSkgPT09ICdvYmplY3QnKSByZXQgPSBhcmdzWzFdO1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnc3RyaW5nJykgcmV0LmRlZmF1bHRWYWx1ZSA9IGFyZ3NbMV07XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMl0gPT09ICdzdHJpbmcnKSByZXQudERlc2NyaXB0aW9uID0gYXJnc1syXTtcblxuICAgICAgaWYgKF90eXBlb2ZfX2RlZmF1bHRbJ2RlZmF1bHQnXShhcmdzWzJdKSA9PT0gJ29iamVjdCcgfHwgX3R5cGVvZl9fZGVmYXVsdFsnZGVmYXVsdCddKGFyZ3NbM10pID09PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3NbM10gfHwgYXJnc1syXTtcbiAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0W2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgZXNjYXBlVmFsdWU6IHRydWUsXG4gICAgICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgX2Zvcm1hdCwgbG5nLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBwcmVmaXg6ICd7eycsXG4gICAgICBzdWZmaXg6ICd9fScsXG4gICAgICBmb3JtYXRTZXBhcmF0b3I6ICcsJyxcbiAgICAgIHVuZXNjYXBlUHJlZml4OiAnLScsXG4gICAgICBuZXN0aW5nUHJlZml4OiAnJHQoJyxcbiAgICAgIG5lc3RpbmdTdWZmaXg6ICcpJyxcbiAgICAgIG5lc3RpbmdPcHRpb25zU2VwYXJhdG9yOiAnLCcsXG4gICAgICBtYXhSZXBsYWNlczogMTAwMCxcbiAgICAgIHNraXBPblZhcmlhYmxlczogdHJ1ZVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybU9wdGlvbnMob3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMubnMgPT09ICdzdHJpbmcnKSBvcHRpb25zLm5zID0gW29wdGlvbnMubnNdO1xuICBpZiAodHlwZW9mIG9wdGlvbnMuZmFsbGJhY2tMbmcgPT09ICdzdHJpbmcnKSBvcHRpb25zLmZhbGxiYWNrTG5nID0gW29wdGlvbnMuZmFsbGJhY2tMbmddO1xuICBpZiAodHlwZW9mIG9wdGlvbnMuZmFsbGJhY2tOUyA9PT0gJ3N0cmluZycpIG9wdGlvbnMuZmFsbGJhY2tOUyA9IFtvcHRpb25zLmZhbGxiYWNrTlNdO1xuXG4gIGlmIChvcHRpb25zLnN1cHBvcnRlZExuZ3MgJiYgb3B0aW9ucy5zdXBwb3J0ZWRMbmdzLmluZGV4T2YoJ2NpbW9kZScpIDwgMCkge1xuICAgIG9wdGlvbnMuc3VwcG9ydGVkTG5ncyA9IG9wdGlvbnMuc3VwcG9ydGVkTG5ncy5jb25jYXQoWydjaW1vZGUnXSk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQ2KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ2KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDMoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMygpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZl9fZGVmYXVsdFsnZGVmYXVsdCddKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2ZfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5fX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMygpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBiaW5kTWVtYmVyRnVuY3Rpb25zKGluc3QpIHtcbiAgdmFyIG1lbXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdCkpO1xuICBtZW1zLmZvckVhY2goZnVuY3Rpb24gKG1lbSkge1xuICAgIGlmICh0eXBlb2YgaW5zdFttZW1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbnN0W21lbV0gPSBpbnN0W21lbV0uYmluZChpbnN0KTtcbiAgICB9XG4gIH0pO1xufVxuXG52YXIgSTE4biA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0c19fZGVmYXVsdFsnZGVmYXVsdCddKEkxOG4sIF9FdmVudEVtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkMyhJMThuKTtcblxuICBmdW5jdGlvbiBJMThuKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICAgIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIEkxOG4pO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcblxuICAgIGlmIChpc0lFMTApIHtcbiAgICAgIEV2ZW50RW1pdHRlci5jYWxsKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpcykpO1xuICAgIH1cblxuICAgIF90aGlzLm9wdGlvbnMgPSB0cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpO1xuICAgIF90aGlzLnNlcnZpY2VzID0ge307XG4gICAgX3RoaXMubG9nZ2VyID0gYmFzZUxvZ2dlcjtcbiAgICBfdGhpcy5tb2R1bGVzID0ge1xuICAgICAgZXh0ZXJuYWw6IFtdXG4gICAgfTtcbiAgICBiaW5kTWVtYmVyRnVuY3Rpb25zKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRfX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpcykpO1xuXG4gICAgaWYgKGNhbGxiYWNrICYmICFfdGhpcy5pc0luaXRpYWxpemVkICYmICFvcHRpb25zLmlzQ2xvbmUpIHtcbiAgICAgIGlmICghX3RoaXMub3B0aW9ucy5pbml0SW1tZWRpYXRlKSB7XG4gICAgICAgIF90aGlzLmluaXQob3B0aW9ucywgY2FsbGJhY2spO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybl9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMpKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmluaXQob3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oSTE4biwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy5kZWZhdWx0TlMgJiYgb3B0aW9ucy5kZWZhdWx0TlMgIT09IGZhbHNlICYmIG9wdGlvbnMubnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm5zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdE5TID0gb3B0aW9ucy5ucztcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLm5zLmluZGV4T2YoJ3RyYW5zbGF0aW9uJykgPCAwKSB7XG4gICAgICAgICAgb3B0aW9ucy5kZWZhdWx0TlMgPSBvcHRpb25zLm5zWzBdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWZPcHRzID0gZ2V0KCk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkJDYoX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNih7fSwgZGVmT3B0cyksIHRoaXMub3B0aW9ucyksIHRyYW5zZm9ybU9wdGlvbnMob3B0aW9ucykpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24gPSBfb2JqZWN0U3ByZWFkJDYoX29iamVjdFNwcmVhZCQ2KHt9LCBkZWZPcHRzLmludGVycG9sYXRpb24pLCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51c2VyRGVmaW5lZEtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5uc1NlcGFyYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy51c2VyRGVmaW5lZE5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvcjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY3JlYXRlQ2xhc3NPbkRlbWFuZChDbGFzc09yT2JqZWN0KSB7XG4gICAgICAgIGlmICghQ2xhc3NPck9iamVjdCkgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh0eXBlb2YgQ2xhc3NPck9iamVjdCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG5ldyBDbGFzc09yT2JqZWN0KCk7XG4gICAgICAgIHJldHVybiBDbGFzc09yT2JqZWN0O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5pc0Nsb25lKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZHVsZXMubG9nZ2VyKSB7XG4gICAgICAgICAgYmFzZUxvZ2dlci5pbml0KGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmxvZ2dlciksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZUxvZ2dlci5pbml0KG51bGwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybWF0dGVyO1xuXG4gICAgICAgIGlmICh0aGlzLm1vZHVsZXMuZm9ybWF0dGVyKSB7XG4gICAgICAgICAgZm9ybWF0dGVyID0gdGhpcy5tb2R1bGVzLmZvcm1hdHRlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgSW50bCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBmb3JtYXR0ZXIgPSBGb3JtYXR0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbHUgPSBuZXcgTGFuZ3VhZ2VVdGlsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBuZXcgUmVzb3VyY2VTdG9yZSh0aGlzLm9wdGlvbnMucmVzb3VyY2VzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB2YXIgcyA9IHRoaXMuc2VydmljZXM7XG4gICAgICAgIHMubG9nZ2VyID0gYmFzZUxvZ2dlcjtcbiAgICAgICAgcy5yZXNvdXJjZVN0b3JlID0gdGhpcy5zdG9yZTtcbiAgICAgICAgcy5sYW5ndWFnZVV0aWxzID0gbHU7XG4gICAgICAgIHMucGx1cmFsUmVzb2x2ZXIgPSBuZXcgUGx1cmFsUmVzb2x2ZXIobHUsIHtcbiAgICAgICAgICBwcmVwZW5kOiB0aGlzLm9wdGlvbnMucGx1cmFsU2VwYXJhdG9yLFxuICAgICAgICAgIGNvbXBhdGliaWxpdHlKU09OOiB0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04sXG4gICAgICAgICAgc2ltcGxpZnlQbHVyYWxTdWZmaXg6IHRoaXMub3B0aW9ucy5zaW1wbGlmeVBsdXJhbFN1ZmZpeFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZm9ybWF0dGVyICYmICghdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0IHx8IHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9PT0gZGVmT3B0cy5pbnRlcnBvbGF0aW9uLmZvcm1hdCkpIHtcbiAgICAgICAgICBzLmZvcm1hdHRlciA9IGNyZWF0ZUNsYXNzT25EZW1hbmQoZm9ybWF0dGVyKTtcbiAgICAgICAgICBzLmZvcm1hdHRlci5pbml0KHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0ID0gcy5mb3JtYXR0ZXIuZm9ybWF0LmJpbmQocy5mb3JtYXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcy5pbnRlcnBvbGF0b3IgPSBuZXcgSW50ZXJwb2xhdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHMudXRpbHMgPSB7XG4gICAgICAgICAgaGFzTG9hZGVkTmFtZXNwYWNlOiB0aGlzLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgICAgIHMuYmFja2VuZENvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IoY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMuYmFja2VuZCksIHMucmVzb3VyY2VTdG9yZSwgcywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgcy5iYWNrZW5kQ29ubmVjdG9yLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMyLmVtaXQuYXBwbHkoX3RoaXMyLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3Rvcikge1xuICAgICAgICAgIHMubGFuZ3VhZ2VEZXRlY3RvciA9IGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IpO1xuICAgICAgICAgIHMubGFuZ3VhZ2VEZXRlY3Rvci5pbml0KHMsIHRoaXMub3B0aW9ucy5kZXRlY3Rpb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tb2R1bGVzLmkxOG5Gb3JtYXQpIHtcbiAgICAgICAgICBzLmkxOG5Gb3JtYXQgPSBjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5pMThuRm9ybWF0KTtcbiAgICAgICAgICBpZiAocy5pMThuRm9ybWF0LmluaXQpIHMuaTE4bkZvcm1hdC5pbml0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2xhdG9yID0gbmV3IFRyYW5zbGF0b3IodGhpcy5zZXJ2aWNlcywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdGhpcy50cmFuc2xhdG9yLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMyLmVtaXQuYXBwbHkoX3RoaXMyLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vZHVsZXMuZXh0ZXJuYWwuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIGlmIChtLmluaXQpIG0uaW5pdChfdGhpczIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5mb3JtYXQgPSB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQ7XG4gICAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IG5vb3A7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgJiYgIXRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5vcHRpb25zLmxuZykge1xuICAgICAgICB2YXIgY29kZXMgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpO1xuICAgICAgICBpZiAoY29kZXMubGVuZ3RoID4gMCAmJiBjb2Rlc1swXSAhPT0gJ2RldicpIHRoaXMub3B0aW9ucy5sbmcgPSBjb2Rlc1swXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMub3B0aW9ucy5sbmcpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybignaW5pdDogbm8gbGFuZ3VhZ2VEZXRlY3RvciBpcyB1c2VkIGFuZCBubyBsbmcgaXMgZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3RvcmVBcGkgPSBbJ2dldFJlc291cmNlJywgJ2hhc1Jlc291cmNlQnVuZGxlJywgJ2dldFJlc291cmNlQnVuZGxlJywgJ2dldERhdGFCeUxhbmd1YWdlJ107XG4gICAgICBzdG9yZUFwaS5mb3JFYWNoKGZ1bmN0aW9uIChmY05hbWUpIHtcbiAgICAgICAgX3RoaXMyW2ZjTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiRzdG9yZTtcblxuICAgICAgICAgIHJldHVybiAoX3RoaXMyJHN0b3JlID0gX3RoaXMyLnN0b3JlKVtmY05hbWVdLmFwcGx5KF90aGlzMiRzdG9yZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHN0b3JlQXBpQ2hhaW5lZCA9IFsnYWRkUmVzb3VyY2UnLCAnYWRkUmVzb3VyY2VzJywgJ2FkZFJlc291cmNlQnVuZGxlJywgJ3JlbW92ZVJlc291cmNlQnVuZGxlJ107XG4gICAgICBzdG9yZUFwaUNoYWluZWQuZm9yRWFjaChmdW5jdGlvbiAoZmNOYW1lKSB7XG4gICAgICAgIF90aGlzMltmY05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfdGhpczIkc3RvcmUyO1xuXG4gICAgICAgICAgKF90aGlzMiRzdG9yZTIgPSBfdGhpczIuc3RvcmUpW2ZjTmFtZV0uYXBwbHkoX3RoaXMyJHN0b3JlMiwgYXJndW1lbnRzKTtcblxuICAgICAgICAgIHJldHVybiBfdGhpczI7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG5cbiAgICAgIHZhciBsb2FkID0gZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgdmFyIGZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaChlcnIsIHQpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyLmlzSW5pdGlhbGl6ZWQgJiYgIV90aGlzMi5pbml0aWFsaXplZFN0b3JlT25jZSkgX3RoaXMyLmxvZ2dlci53YXJuKCdpbml0OiBpMThuZXh0IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuIFlvdSBzaG91bGQgY2FsbCBpbml0IGp1c3Qgb25jZSEnKTtcbiAgICAgICAgICBfdGhpczIuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgaWYgKCFfdGhpczIub3B0aW9ucy5pc0Nsb25lKSBfdGhpczIubG9nZ2VyLmxvZygnaW5pdGlhbGl6ZWQnLCBfdGhpczIub3B0aW9ucyk7XG5cbiAgICAgICAgICBfdGhpczIuZW1pdCgnaW5pdGlhbGl6ZWQnLCBfdGhpczIub3B0aW9ucyk7XG5cbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHQpO1xuICAgICAgICAgIGNhbGxiYWNrKGVyciwgdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzMi5sYW5ndWFnZXMgJiYgX3RoaXMyLm9wdGlvbnMuY29tcGF0aWJpbGl0eUFQSSAhPT0gJ3YxJyAmJiAhX3RoaXMyLmlzSW5pdGlhbGl6ZWQpIHJldHVybiBmaW5pc2gobnVsbCwgX3RoaXMyLnQuYmluZChfdGhpczIpKTtcblxuICAgICAgICBfdGhpczIuY2hhbmdlTGFuZ3VhZ2UoX3RoaXMyLm9wdGlvbnMubG5nLCBmaW5pc2gpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXNvdXJjZXMgfHwgIXRoaXMub3B0aW9ucy5pbml0SW1tZWRpYXRlKSB7XG4gICAgICAgIGxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQobG9hZCwgMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZFJlc291cmNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkUmVzb3VyY2VzKGxhbmd1YWdlKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuICAgICAgdmFyIHVzZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgdmFyIHVzZWRMbmcgPSB0eXBlb2YgbGFuZ3VhZ2UgPT09ICdzdHJpbmcnID8gbGFuZ3VhZ2UgOiB0aGlzLmxhbmd1YWdlO1xuICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZSA9PT0gJ2Z1bmN0aW9uJykgdXNlZENhbGxiYWNrID0gbGFuZ3VhZ2U7XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnJlc291cmNlcyB8fCB0aGlzLm9wdGlvbnMucGFydGlhbEJ1bmRsZWRMYW5ndWFnZXMpIHtcbiAgICAgICAgaWYgKHVzZWRMbmcgJiYgdXNlZExuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuIHVzZWRDYWxsYmFjaygpO1xuICAgICAgICB2YXIgdG9Mb2FkID0gW107XG5cbiAgICAgICAgdmFyIGFwcGVuZCA9IGZ1bmN0aW9uIGFwcGVuZChsbmcpIHtcbiAgICAgICAgICBpZiAoIWxuZykgcmV0dXJuO1xuXG4gICAgICAgICAgdmFyIGxuZ3MgPSBfdGhpczMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkobG5nKTtcblxuICAgICAgICAgIGxuZ3MuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgaWYgKHRvTG9hZC5pbmRleE9mKGwpIDwgMCkgdG9Mb2FkLnB1c2gobCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCF1c2VkTG5nKSB7XG4gICAgICAgICAgdmFyIGZhbGxiYWNrcyA9IHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZyk7XG4gICAgICAgICAgZmFsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBlbmQobCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXBwZW5kKHVzZWRMbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcmVsb2FkKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnByZWxvYWQuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcGVuZChsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5sb2FkKHRvTG9hZCwgdGhpcy5vcHRpb25zLm5zLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmICghZSAmJiAhX3RoaXMzLnJlc29sdmVkTGFuZ3VhZ2UgJiYgX3RoaXMzLmxhbmd1YWdlKSBfdGhpczMuc2V0UmVzb2x2ZWRMYW5ndWFnZShfdGhpczMubGFuZ3VhZ2UpO1xuICAgICAgICAgIHVzZWRDYWxsYmFjayhlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1c2VkQ2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbG9hZFJlc291cmNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWxvYWRSZXNvdXJjZXMobG5ncywgbnMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgICAgaWYgKCFsbmdzKSBsbmdzID0gdGhpcy5sYW5ndWFnZXM7XG4gICAgICBpZiAoIW5zKSBucyA9IHRoaXMub3B0aW9ucy5ucztcbiAgICAgIGlmICghY2FsbGJhY2spIGNhbGxiYWNrID0gbm9vcDtcbiAgICAgIHRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5yZWxvYWQobG5ncywgbnMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVzZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1c2UobW9kdWxlKSB7XG4gICAgICBpZiAoIW1vZHVsZSkgdGhyb3cgbmV3IEVycm9yKCdZb3UgYXJlIHBhc3NpbmcgYW4gdW5kZWZpbmVkIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcbiAgICAgIGlmICghbW9kdWxlLnR5cGUpIHRocm93IG5ldyBFcnJvcignWW91IGFyZSBwYXNzaW5nIGEgd3JvbmcgbW9kdWxlISBQbGVhc2UgY2hlY2sgdGhlIG9iamVjdCB5b3UgYXJlIHBhc3NpbmcgdG8gaTE4bmV4dC51c2UoKScpO1xuXG4gICAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdiYWNrZW5kJykge1xuICAgICAgICB0aGlzLm1vZHVsZXMuYmFja2VuZCA9IG1vZHVsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnbG9nZ2VyJyB8fCBtb2R1bGUubG9nICYmIG1vZHVsZS53YXJuICYmIG1vZHVsZS5lcnJvcikge1xuICAgICAgICB0aGlzLm1vZHVsZXMubG9nZ2VyID0gbW9kdWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdsYW5ndWFnZURldGVjdG9yJykge1xuICAgICAgICB0aGlzLm1vZHVsZXMubGFuZ3VhZ2VEZXRlY3RvciA9IG1vZHVsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnaTE4bkZvcm1hdCcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmkxOG5Gb3JtYXQgPSBtb2R1bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ3Bvc3RQcm9jZXNzb3InKSB7XG4gICAgICAgIHBvc3RQcm9jZXNzb3IuYWRkUG9zdFByb2Nlc3Nvcihtb2R1bGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdmb3JtYXR0ZXInKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcy5mb3JtYXR0ZXIgPSBtb2R1bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJzNyZFBhcnR5Jykge1xuICAgICAgICB0aGlzLm1vZHVsZXMuZXh0ZXJuYWwucHVzaChtb2R1bGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0UmVzb2x2ZWRMYW5ndWFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRSZXNvbHZlZExhbmd1YWdlKGwpIHtcbiAgICAgIGlmICghbCB8fCAhdGhpcy5sYW5ndWFnZXMpIHJldHVybjtcbiAgICAgIGlmIChbJ2NpbW9kZScsICdkZXYnXS5pbmRleE9mKGwpID4gLTEpIHJldHVybjtcblxuICAgICAgZm9yICh2YXIgbGkgPSAwOyBsaSA8IHRoaXMubGFuZ3VhZ2VzLmxlbmd0aDsgbGkrKykge1xuICAgICAgICB2YXIgbG5nSW5MbmdzID0gdGhpcy5sYW5ndWFnZXNbbGldO1xuICAgICAgICBpZiAoWydjaW1vZGUnLCAnZGV2J10uaW5kZXhPZihsbmdJbkxuZ3MpID4gLTEpIGNvbnRpbnVlO1xuXG4gICAgICAgIGlmICh0aGlzLnN0b3JlLmhhc0xhbmd1YWdlU29tZVRyYW5zbGF0aW9ucyhsbmdJbkxuZ3MpKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZExhbmd1YWdlID0gbG5nSW5MbmdzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoYW5nZUxhbmd1YWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZUxhbmd1YWdlKGxuZywgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB0aGlzLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gbG5nO1xuICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgIHRoaXMuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2luZycsIGxuZyk7XG5cbiAgICAgIHZhciBzZXRMbmdQcm9wcyA9IGZ1bmN0aW9uIHNldExuZ1Byb3BzKGwpIHtcbiAgICAgICAgX3RoaXM0Lmxhbmd1YWdlID0gbDtcbiAgICAgICAgX3RoaXM0Lmxhbmd1YWdlcyA9IF90aGlzNC5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLnRvUmVzb2x2ZUhpZXJhcmNoeShsKTtcbiAgICAgICAgX3RoaXM0LnJlc29sdmVkTGFuZ3VhZ2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgX3RoaXM0LnNldFJlc29sdmVkTGFuZ3VhZ2UobCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uIGRvbmUoZXJyLCBsKSB7XG4gICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgc2V0TG5nUHJvcHMobCk7XG5cbiAgICAgICAgICBfdGhpczQudHJhbnNsYXRvci5jaGFuZ2VMYW5ndWFnZShsKTtcblxuICAgICAgICAgIF90aGlzNC5pc0xhbmd1YWdlQ2hhbmdpbmdUbyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIF90aGlzNC5lbWl0KCdsYW5ndWFnZUNoYW5nZWQnLCBsKTtcblxuICAgICAgICAgIF90aGlzNC5sb2dnZXIubG9nKCdsYW5ndWFnZUNoYW5nZWQnLCBsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczQuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LnQuYXBwbHkoX3RoaXM0LCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LnQuYXBwbHkoX3RoaXM0LCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBzZXRMbmcgPSBmdW5jdGlvbiBzZXRMbmcobG5ncykge1xuICAgICAgICBpZiAoIWxuZyAmJiAhbG5ncyAmJiBfdGhpczQuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvcikgbG5ncyA9IFtdO1xuICAgICAgICB2YXIgbCA9IHR5cGVvZiBsbmdzID09PSAnc3RyaW5nJyA/IGxuZ3MgOiBfdGhpczQuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRCZXN0TWF0Y2hGcm9tQ29kZXMobG5ncyk7XG5cbiAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICBpZiAoIV90aGlzNC5sYW5ndWFnZSkge1xuICAgICAgICAgICAgc2V0TG5nUHJvcHMobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFfdGhpczQudHJhbnNsYXRvci5sYW5ndWFnZSkgX3RoaXM0LnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG4gICAgICAgICAgaWYgKF90aGlzNC5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yKSBfdGhpczQuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5jYWNoZVVzZXJMYW5ndWFnZShsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzNC5sb2FkUmVzb3VyY2VzKGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBkb25lKGVyciwgbCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKCFsbmcgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmICF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuYXN5bmMpIHtcbiAgICAgICAgc2V0TG5nKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5kZXRlY3QoKSk7XG4gICAgICB9IGVsc2UgaWYgKCFsbmcgJiYgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3Rvci5hc3luYykge1xuICAgICAgICB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KHNldExuZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMbmcobG5nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRGaXhlZFRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rml4ZWRUKGxuZywgbnMsIGtleVByZWZpeCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBmaXhlZFQgPSBmdW5jdGlvbiBmaXhlZFQoa2V5LCBvcHRzKSB7XG4gICAgICAgIHZhciBvcHRpb25zO1xuXG4gICAgICAgIGlmIChfdHlwZW9mX19kZWZhdWx0WydkZWZhdWx0J10ob3B0cykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4zID4gMiA/IF9sZW4zIC0gMiA6IDApLCBfa2V5MyA9IDI7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgICAgIHJlc3RbX2tleTMgLSAyXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0aW9ucyA9IF90aGlzNS5vcHRpb25zLm92ZXJsb2FkVHJhbnNsYXRpb25PcHRpb25IYW5kbGVyKFtrZXksIG9wdHNdLmNvbmNhdChyZXN0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucyA9IF9vYmplY3RTcHJlYWQkNih7fSwgb3B0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmxuZyA9IG9wdGlvbnMubG5nIHx8IGZpeGVkVC5sbmc7XG4gICAgICAgIG9wdGlvbnMubG5ncyA9IG9wdGlvbnMubG5ncyB8fCBmaXhlZFQubG5ncztcbiAgICAgICAgb3B0aW9ucy5ucyA9IG9wdGlvbnMubnMgfHwgZml4ZWRULm5zO1xuICAgICAgICBvcHRpb25zLmtleVByZWZpeCA9IG9wdGlvbnMua2V5UHJlZml4IHx8IGtleVByZWZpeCB8fCBmaXhlZFQua2V5UHJlZml4O1xuICAgICAgICB2YXIga2V5U2VwYXJhdG9yID0gX3RoaXM1Lm9wdGlvbnMua2V5U2VwYXJhdG9yIHx8ICcuJztcbiAgICAgICAgdmFyIHJlc3VsdEtleSA9IG9wdGlvbnMua2V5UHJlZml4ID8gXCJcIi5jb25jYXQob3B0aW9ucy5rZXlQcmVmaXgpLmNvbmNhdChrZXlTZXBhcmF0b3IpLmNvbmNhdChrZXkpIDoga2V5O1xuICAgICAgICByZXR1cm4gX3RoaXM1LnQocmVzdWx0S2V5LCBvcHRpb25zKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgbG5nID09PSAnc3RyaW5nJykge1xuICAgICAgICBmaXhlZFQubG5nID0gbG5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZml4ZWRULmxuZ3MgPSBsbmc7XG4gICAgICB9XG5cbiAgICAgIGZpeGVkVC5ucyA9IG5zO1xuICAgICAgZml4ZWRULmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICAgIHJldHVybiBmaXhlZFQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdCgpIHtcbiAgICAgIHZhciBfdGhpcyR0cmFuc2xhdG9yO1xuXG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdG9yICYmIChfdGhpcyR0cmFuc2xhdG9yID0gdGhpcy50cmFuc2xhdG9yKS50cmFuc2xhdGUuYXBwbHkoX3RoaXMkdHJhbnNsYXRvciwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXhpc3RzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4aXN0cygpIHtcbiAgICAgIHZhciBfdGhpcyR0cmFuc2xhdG9yMjtcblxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRvciAmJiAoX3RoaXMkdHJhbnNsYXRvcjIgPSB0aGlzLnRyYW5zbGF0b3IpLmV4aXN0cy5hcHBseShfdGhpcyR0cmFuc2xhdG9yMiwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RGVmYXVsdE5hbWVzcGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0TmFtZXNwYWNlKG5zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZGVmYXVsdE5TID0gbnM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc0xvYWRlZE5hbWVzcGFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNMb2FkZWROYW1lc3BhY2UobnMpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2hhc0xvYWRlZE5hbWVzcGFjZTogaTE4bmV4dCB3YXMgbm90IGluaXRpYWxpemVkJywgdGhpcy5sYW5ndWFnZXMpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5sYW5ndWFnZXMgfHwgIXRoaXMubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKCdoYXNMb2FkZWROYW1lc3BhY2U6IGkxOG4ubGFuZ3VhZ2VzIHdlcmUgdW5kZWZpbmVkIG9yIGVtcHR5JywgdGhpcy5sYW5ndWFnZXMpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsbmcgPSB0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgfHwgdGhpcy5sYW5ndWFnZXNbMF07XG4gICAgICB2YXIgZmFsbGJhY2tMbmcgPSB0aGlzLm9wdGlvbnMgPyB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcgOiBmYWxzZTtcbiAgICAgIHZhciBsYXN0TG5nID0gdGhpcy5sYW5ndWFnZXNbdGhpcy5sYW5ndWFnZXMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAobG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgdmFyIGxvYWROb3RQZW5kaW5nID0gZnVuY3Rpb24gbG9hZE5vdFBlbmRpbmcobCwgbikge1xuICAgICAgICB2YXIgbG9hZFN0YXRlID0gX3RoaXM2LnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3Iuc3RhdGVbXCJcIi5jb25jYXQobCwgXCJ8XCIpLmNvbmNhdChuKV07XG5cbiAgICAgICAgcmV0dXJuIGxvYWRTdGF0ZSA9PT0gLTEgfHwgbG9hZFN0YXRlID09PSAyO1xuICAgICAgfTtcblxuICAgICAgaWYgKG9wdGlvbnMucHJlY2hlY2spIHtcbiAgICAgICAgdmFyIHByZVJlc3VsdCA9IG9wdGlvbnMucHJlY2hlY2sodGhpcywgbG9hZE5vdFBlbmRpbmcpO1xuICAgICAgICBpZiAocHJlUmVzdWx0ICE9PSB1bmRlZmluZWQpIHJldHVybiBwcmVSZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICghdGhpcy5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmJhY2tlbmQgfHwgdGhpcy5vcHRpb25zLnJlc291cmNlcyAmJiAhdGhpcy5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChsb2FkTm90UGVuZGluZyhsbmcsIG5zKSAmJiAoIWZhbGxiYWNrTG5nIHx8IGxvYWROb3RQZW5kaW5nKGxhc3RMbmcsIG5zKSkpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2FkTmFtZXNwYWNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkTmFtZXNwYWNlcyhucywgY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5ucykge1xuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbnMgPT09ICdzdHJpbmcnKSBucyA9IFtuc107XG4gICAgICBucy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChfdGhpczcub3B0aW9ucy5ucy5pbmRleE9mKG4pIDwgMCkgX3RoaXM3Lm9wdGlvbnMubnMucHVzaChuKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZExhbmd1YWdlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkTGFuZ3VhZ2VzKGxuZ3MsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgICAgaWYgKHR5cGVvZiBsbmdzID09PSAnc3RyaW5nJykgbG5ncyA9IFtsbmdzXTtcbiAgICAgIHZhciBwcmVsb2FkZWQgPSB0aGlzLm9wdGlvbnMucHJlbG9hZCB8fCBbXTtcbiAgICAgIHZhciBuZXdMbmdzID0gbG5ncy5maWx0ZXIoZnVuY3Rpb24gKGxuZykge1xuICAgICAgICByZXR1cm4gcHJlbG9hZGVkLmluZGV4T2YobG5nKSA8IDA7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFuZXdMbmdzLmxlbmd0aCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zLnByZWxvYWQgPSBwcmVsb2FkZWQuY29uY2F0KG5ld0xuZ3MpO1xuICAgICAgdGhpcy5sb2FkUmVzb3VyY2VzKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGVycik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGlyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpcihsbmcpIHtcbiAgICAgIGlmICghbG5nKSBsbmcgPSB0aGlzLnJlc29sdmVkTGFuZ3VhZ2UgfHwgKHRoaXMubGFuZ3VhZ2VzICYmIHRoaXMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyB0aGlzLmxhbmd1YWdlc1swXSA6IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgaWYgKCFsbmcpIHJldHVybiAncnRsJztcbiAgICAgIHZhciBydGxMbmdzID0gWydhcicsICdzaHUnLCAnc3FyJywgJ3NzaCcsICd4YWEnLCAneWhkJywgJ3l1ZCcsICdhYW8nLCAnYWJoJywgJ2FidicsICdhY20nLCAnYWNxJywgJ2FjdycsICdhY3gnLCAnYWN5JywgJ2FkZicsICdhZHMnLCAnYWViJywgJ2FlYycsICdhZmInLCAnYWpwJywgJ2FwYycsICdhcGQnLCAnYXJiJywgJ2FycScsICdhcnMnLCAnYXJ5JywgJ2FyeicsICdhdXonLCAnYXZsJywgJ2F5aCcsICdheWwnLCAnYXluJywgJ2F5cCcsICdiYnonLCAncGdhJywgJ2hlJywgJ2l3JywgJ3BzJywgJ3BidCcsICdwYnUnLCAncHN0JywgJ3BycCcsICdwcmQnLCAndWcnLCAndXInLCAneWRkJywgJ3lkcycsICd5aWgnLCAnamknLCAneWknLCAnaGJvJywgJ21lbicsICd4bW4nLCAnZmEnLCAnanByJywgJ3BlbycsICdwZXMnLCAncHJzJywgJ2R2JywgJ3NhbScsICdja2InXTtcbiAgICAgIHJldHVybiBydGxMbmdzLmluZGV4T2YodGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGxuZykpID4gLTEgfHwgbG5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignLWFyYWInKSA+IDEgPyAncnRsJyA6ICdsdHInO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbG9uZUluc3RhbmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb25lSW5zdGFuY2UoKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuXG4gICAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IF9vYmplY3RTcHJlYWQkNihfb2JqZWN0U3ByZWFkJDYoX29iamVjdFNwcmVhZCQ2KHt9LCB0aGlzLm9wdGlvbnMpLCBvcHRpb25zKSwge1xuICAgICAgICBpc0Nsb25lOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdmFyIGNsb25lID0gbmV3IEkxOG4obWVyZ2VkT3B0aW9ucyk7XG4gICAgICB2YXIgbWVtYmVyc1RvQ29weSA9IFsnc3RvcmUnLCAnc2VydmljZXMnLCAnbGFuZ3VhZ2UnXTtcbiAgICAgIG1lbWJlcnNUb0NvcHkuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICBjbG9uZVttXSA9IF90aGlzOFttXTtcbiAgICAgIH0pO1xuICAgICAgY2xvbmUuc2VydmljZXMgPSBfb2JqZWN0U3ByZWFkJDYoe30sIHRoaXMuc2VydmljZXMpO1xuICAgICAgY2xvbmUuc2VydmljZXMudXRpbHMgPSB7XG4gICAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogY2xvbmUuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQoY2xvbmUpXG4gICAgICB9O1xuICAgICAgY2xvbmUudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKGNsb25lLnNlcnZpY2VzLCBjbG9uZS5vcHRpb25zKTtcbiAgICAgIGNsb25lLnRyYW5zbGF0b3Iub24oJyonLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xvbmUuZW1pdC5hcHBseShjbG9uZSwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgfSk7XG4gICAgICBjbG9uZS5pbml0KG1lcmdlZE9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIGNsb25lLnRyYW5zbGF0b3Iub3B0aW9ucyA9IGNsb25lLm9wdGlvbnM7XG4gICAgICBjbG9uZS50cmFuc2xhdG9yLmJhY2tlbmRDb25uZWN0b3Iuc2VydmljZXMudXRpbHMgPSB7XG4gICAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogY2xvbmUuaGFzTG9hZGVkTmFtZXNwYWNlLmJpbmQoY2xvbmUpXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0b0pTT05cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICBzdG9yZTogdGhpcy5zdG9yZSxcbiAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICAgIGxhbmd1YWdlczogdGhpcy5sYW5ndWFnZXMsXG4gICAgICAgIHJlc29sdmVkTGFuZ3VhZ2U6IHRoaXMucmVzb2x2ZWRMYW5ndWFnZVxuICAgICAgfTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSTE4bjtcbn0oRXZlbnRFbWl0dGVyKTtcblxuX2RlZmluZVByb3BlcnR5X19kZWZhdWx0WydkZWZhdWx0J10oSTE4biwgXCJjcmVhdGVJbnN0YW5jZVwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiBuZXcgSTE4bihvcHRpb25zLCBjYWxsYmFjayk7XG59KTtcblxudmFyIGluc3RhbmNlID0gSTE4bi5jcmVhdGVJbnN0YW5jZSgpO1xuaW5zdGFuY2UuY3JlYXRlSW5zdGFuY2UgPSBJMThuLmNyZWF0ZUluc3RhbmNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGluc3RhbmNlO1xuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuSTE4bmV4dFByb3ZpZGVyID0gSTE4bmV4dFByb3ZpZGVyO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG5mdW5jdGlvbiBJMThuZXh0UHJvdmlkZXIoX3JlZikge1xuICB2YXIgaTE4biA9IF9yZWYuaTE4bixcbiAgICAgIGRlZmF1bHROUyA9IF9yZWYuZGVmYXVsdE5TLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgdmFsdWUgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaTE4bjogaTE4bixcbiAgICAgIGRlZmF1bHROUzogZGVmYXVsdE5TXG4gICAgfTtcbiAgfSwgW2kxOG4sIGRlZmF1bHROU10pO1xuICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShfY29udGV4dC5JMThuQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9LCBjaGlsZHJlbik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub2Rlc1RvU3RyaW5nID0gbm9kZXNUb1N0cmluZztcbmV4cG9ydHMuVHJhbnMgPSBUcmFucztcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX2h0bWxQYXJzZVN0cmluZ2lmeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImh0bWwtcGFyc2Utc3RyaW5naWZ5XCIpKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiZm9ybWF0XCJdLFxuICAgIF9leGNsdWRlZDIgPSBbXCJjaGlsZHJlblwiLCBcImNvdW50XCIsIFwicGFyZW50XCIsIFwiaTE4bktleVwiLCBcImNvbnRleHRcIiwgXCJ0T3B0aW9uc1wiLCBcInZhbHVlc1wiLCBcImRlZmF1bHRzXCIsIFwiY29tcG9uZW50c1wiLCBcIm5zXCIsIFwiaTE4blwiLCBcInRcIiwgXCJzaG91bGRVbmVzY2FwZVwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gaGFzQ2hpbGRyZW4obm9kZSwgY2hlY2tMZW5ndGgpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gZmFsc2U7XG4gIHZhciBiYXNlID0gbm9kZS5wcm9wcyA/IG5vZGUucHJvcHMuY2hpbGRyZW4gOiBub2RlLmNoaWxkcmVuO1xuICBpZiAoY2hlY2tMZW5ndGgpIHJldHVybiBiYXNlLmxlbmd0aCA+IDA7XG4gIHJldHVybiAhIWJhc2U7XG59XG5cbmZ1bmN0aW9uIGdldENoaWxkcmVuKG5vZGUpIHtcbiAgaWYgKCFub2RlKSByZXR1cm4gW107XG4gIHJldHVybiBub2RlLnByb3BzID8gbm9kZS5wcm9wcy5jaGlsZHJlbiA6IG5vZGUuY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVhY3RDaGlsZHJlbihjaGlsZHJlbikge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNoaWxkcmVuKSAhPT0gJ1tvYmplY3QgQXJyYXldJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gY2hpbGRyZW4uZXZlcnkoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFzQXJyYXkoZGF0YSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMoc291cmNlLCB0YXJnZXQpIHtcbiAgdmFyIG5ld1RhcmdldCA9IF9vYmplY3RTcHJlYWQoe30sIHRhcmdldCk7XG5cbiAgbmV3VGFyZ2V0LnByb3BzID0gT2JqZWN0LmFzc2lnbihzb3VyY2UucHJvcHMsIHRhcmdldC5wcm9wcyk7XG4gIHJldHVybiBuZXdUYXJnZXQ7XG59XG5cbmZ1bmN0aW9uIG5vZGVzVG9TdHJpbmcoY2hpbGRyZW4sIGkxOG5PcHRpb25zKSB7XG4gIGlmICghY2hpbGRyZW4pIHJldHVybiAnJztcbiAgdmFyIHN0cmluZ05vZGUgPSAnJztcbiAgdmFyIGNoaWxkcmVuQXJyYXkgPSBnZXRBc0FycmF5KGNoaWxkcmVuKTtcbiAgdmFyIGtlZXBBcnJheSA9IGkxOG5PcHRpb25zLnRyYW5zU3VwcG9ydEJhc2ljSHRtbE5vZGVzICYmIGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yID8gaTE4bk9wdGlvbnMudHJhbnNLZWVwQmFzaWNIdG1sTm9kZXNGb3IgOiBbXTtcbiAgY2hpbGRyZW5BcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgY2hpbGRJbmRleCkge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzdHJpbmdOb2RlICs9IFwiXCIuY29uY2F0KGNoaWxkKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSkge1xuICAgICAgdmFyIGNoaWxkUHJvcHNDb3VudCA9IE9iamVjdC5rZXlzKGNoaWxkLnByb3BzKS5sZW5ndGg7XG4gICAgICB2YXIgc2hvdWxkS2VlcENoaWxkID0ga2VlcEFycmF5LmluZGV4T2YoY2hpbGQudHlwZSkgPiAtMTtcbiAgICAgIHZhciBjaGlsZENoaWxkcmVuID0gY2hpbGQucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmICghY2hpbGRDaGlsZHJlbiAmJiBzaG91bGRLZWVwQ2hpbGQgJiYgY2hpbGRQcm9wc0NvdW50ID09PSAwKSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gXCI8XCIuY29uY2F0KGNoaWxkLnR5cGUsIFwiLz5cIik7XG4gICAgICB9IGVsc2UgaWYgKCFjaGlsZENoaWxkcmVuICYmICghc2hvdWxkS2VlcENoaWxkIHx8IGNoaWxkUHJvcHNDb3VudCAhPT0gMCkpIHtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBcIjxcIi5jb25jYXQoY2hpbGRJbmRleCwgXCI+PC9cIikuY29uY2F0KGNoaWxkSW5kZXgsIFwiPlwiKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQucHJvcHMuaTE4bklzRHluYW1pY0xpc3QpIHtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBcIjxcIi5jb25jYXQoY2hpbGRJbmRleCwgXCI+PC9cIikuY29uY2F0KGNoaWxkSW5kZXgsIFwiPlwiKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkS2VlcENoaWxkICYmIGNoaWxkUHJvcHNDb3VudCA9PT0gMSAmJiB0eXBlb2YgY2hpbGRDaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBcIjxcIi5jb25jYXQoY2hpbGQudHlwZSwgXCI+XCIpLmNvbmNhdChjaGlsZENoaWxkcmVuLCBcIjwvXCIpLmNvbmNhdChjaGlsZC50eXBlLCBcIj5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29udGVudCA9IG5vZGVzVG9TdHJpbmcoY2hpbGRDaGlsZHJlbiwgaTE4bk9wdGlvbnMpO1xuICAgICAgICBzdHJpbmdOb2RlICs9IFwiPFwiLmNvbmNhdChjaGlsZEluZGV4LCBcIj5cIikuY29uY2F0KGNvbnRlbnQsIFwiPC9cIikuY29uY2F0KGNoaWxkSW5kZXgsIFwiPlwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoaWxkID09PSBudWxsKSB7XG4gICAgICAoMCwgX3V0aWxzLndhcm4pKFwiVHJhbnM6IHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW52YWxpZCAtIHNlZW1zIHlvdSBwYXNzZWQgaW4gYSBudWxsIGNoaWxkLlwiKTtcbiAgICB9IGVsc2UgaWYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGNoaWxkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmb3JtYXQgPSBjaGlsZC5mb3JtYXQsXG4gICAgICAgICAgY2xvbmUgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMltcImRlZmF1bHRcIl0pKGNoaWxkLCBfZXhjbHVkZWQpO1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjbG9uZSk7XG5cbiAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBmb3JtYXQgPyBcIlwiLmNvbmNhdChrZXlzWzBdLCBcIiwgXCIpLmNvbmNhdChmb3JtYXQpIDoga2V5c1swXTtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBcInt7XCIuY29uY2F0KHZhbHVlLCBcIn19XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF91dGlscy53YXJuKShcInJlYWN0LWkxOG5leHQ6IHRoZSBwYXNzZWQgaW4gb2JqZWN0IGNvbnRhaW5lZCBtb3JlIHRoYW4gb25lIHZhcmlhYmxlIC0gdGhlIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHt7IHZhbHVlLCBmb3JtYXQgfX0gd2hlcmUgZm9ybWF0IGlzIG9wdGlvbmFsLlwiLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICgwLCBfdXRpbHMud2FybikoXCJUcmFuczogdGhlIHBhc3NlZCBpbiB2YWx1ZSBpcyBpbnZhbGlkIC0gc2VlbXMgeW91IHBhc3NlZCBpbiBhIHZhcmlhYmxlIGxpa2Uge251bWJlcn0gLSBwbGVhc2UgcGFzcyBpbiB2YXJpYWJsZXMgZm9yIGludGVycG9sYXRpb24gYXMgZnVsbCBvYmplY3RzIGxpa2Uge3tudW1iZXJ9fS5cIiwgY2hpbGQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHJpbmdOb2RlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOb2RlcyhjaGlsZHJlbiwgdGFyZ2V0U3RyaW5nLCBpMThuLCBpMThuT3B0aW9ucywgY29tYmluZWRUT3B0cywgc2hvdWxkVW5lc2NhcGUpIHtcbiAgaWYgKHRhcmdldFN0cmluZyA9PT0gJycpIHJldHVybiBbXTtcbiAgdmFyIGtlZXBBcnJheSA9IGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yIHx8IFtdO1xuICB2YXIgZW1wdHlDaGlsZHJlbkJ1dE5lZWRzSGFuZGxpbmcgPSB0YXJnZXRTdHJpbmcgJiYgbmV3IFJlZ0V4cChrZWVwQXJyYXkuam9pbignfCcpKS50ZXN0KHRhcmdldFN0cmluZyk7XG4gIGlmICghY2hpbGRyZW4gJiYgIWVtcHR5Q2hpbGRyZW5CdXROZWVkc0hhbmRsaW5nKSByZXR1cm4gW3RhcmdldFN0cmluZ107XG4gIHZhciBkYXRhID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShjaGlsZHMpIHtcbiAgICB2YXIgY2hpbGRyZW5BcnJheSA9IGdldEFzQXJyYXkoY2hpbGRzKTtcbiAgICBjaGlsZHJlbkFycmF5LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykgcmV0dXJuO1xuICAgICAgaWYgKGhhc0NoaWxkcmVuKGNoaWxkKSkgZ2V0RGF0YShnZXRDaGlsZHJlbihjaGlsZCkpO2Vsc2UgaWYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGNoaWxkKSA9PT0gJ29iamVjdCcgJiYgISgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSkgT2JqZWN0LmFzc2lnbihkYXRhLCBjaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhKGNoaWxkcmVuKTtcblxuICB2YXIgYXN0ID0gX2h0bWxQYXJzZVN0cmluZ2lmeVtcImRlZmF1bHRcIl0ucGFyc2UoXCI8MD5cIi5jb25jYXQodGFyZ2V0U3RyaW5nLCBcIjwvMD5cIikpO1xuXG4gIHZhciBvcHRzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkYXRhKSwgY29tYmluZWRUT3B0cyk7XG5cbiAgZnVuY3Rpb24gcmVuZGVySW5uZXIoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpIHtcbiAgICB2YXIgY2hpbGRzID0gZ2V0Q2hpbGRyZW4oY2hpbGQpO1xuICAgIHZhciBtYXBwZWRDaGlsZHJlbiA9IG1hcEFTVChjaGlsZHMsIG5vZGUuY2hpbGRyZW4sIHJvb3RSZWFjdE5vZGUpO1xuICAgIHJldHVybiBoYXNWYWxpZFJlYWN0Q2hpbGRyZW4oY2hpbGRzKSAmJiBtYXBwZWRDaGlsZHJlbi5sZW5ndGggPT09IDAgPyBjaGlsZHMgOiBtYXBwZWRDaGlsZHJlbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hUcmFuc2xhdGVkSlNYKGNoaWxkLCBpbm5lciwgbWVtLCBpLCBpc1ZvaWQpIHtcbiAgICBpZiAoY2hpbGQuZHVtbXkpIGNoaWxkLmNoaWxkcmVuID0gaW5uZXI7XG4gICAgbWVtLnB1c2goKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkLnByb3BzKSwge30sIHtcbiAgICAgIGtleTogaVxuICAgIH0pLCBpc1ZvaWQgPyB1bmRlZmluZWQgOiBpbm5lcikpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFwQVNUKHJlYWN0Tm9kZSwgYXN0Tm9kZSwgcm9vdFJlYWN0Tm9kZSkge1xuICAgIHZhciByZWFjdE5vZGVzID0gZ2V0QXNBcnJheShyZWFjdE5vZGUpO1xuICAgIHZhciBhc3ROb2RlcyA9IGdldEFzQXJyYXkoYXN0Tm9kZSk7XG4gICAgcmV0dXJuIGFzdE5vZGVzLnJlZHVjZShmdW5jdGlvbiAobWVtLCBub2RlLCBpKSB7XG4gICAgICB2YXIgdHJhbnNsYXRpb25Db250ZW50ID0gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuWzBdICYmIG5vZGUuY2hpbGRyZW5bMF0uY29udGVudCAmJiBpMThuLnNlcnZpY2VzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShub2RlLmNoaWxkcmVuWzBdLmNvbnRlbnQsIG9wdHMsIGkxOG4ubGFuZ3VhZ2UpO1xuXG4gICAgICBpZiAobm9kZS50eXBlID09PSAndGFnJykge1xuICAgICAgICB2YXIgdG1wID0gcmVhY3ROb2Rlc1twYXJzZUludChub2RlLm5hbWUsIDEwKV07XG4gICAgICAgIGlmICghdG1wICYmIHJvb3RSZWFjdE5vZGUubGVuZ3RoID09PSAxICYmIHJvb3RSZWFjdE5vZGVbMF1bbm9kZS5uYW1lXSkgdG1wID0gcm9vdFJlYWN0Tm9kZVswXVtub2RlLm5hbWVdO1xuICAgICAgICBpZiAoIXRtcCkgdG1wID0ge307XG4gICAgICAgIHZhciBjaGlsZCA9IE9iamVjdC5rZXlzKG5vZGUuYXR0cnMpLmxlbmd0aCAhPT0gMCA/IG1lcmdlUHJvcHMoe1xuICAgICAgICAgIHByb3BzOiBub2RlLmF0dHJzXG4gICAgICAgIH0sIHRtcCkgOiB0bXA7XG4gICAgICAgIHZhciBpc0VsZW1lbnQgPSAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCk7XG4gICAgICAgIHZhciBpc1ZhbGlkVHJhbnNsYXRpb25XaXRoQ2hpbGRyZW4gPSBpc0VsZW1lbnQgJiYgaGFzQ2hpbGRyZW4obm9kZSwgdHJ1ZSkgJiYgIW5vZGUudm9pZEVsZW1lbnQ7XG4gICAgICAgIHZhciBpc0VtcHR5VHJhbnNXaXRoSFRNTCA9IGVtcHR5Q2hpbGRyZW5CdXROZWVkc0hhbmRsaW5nICYmICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGNoaWxkKSA9PT0gJ29iamVjdCcgJiYgY2hpbGQuZHVtbXkgJiYgIWlzRWxlbWVudDtcbiAgICAgICAgdmFyIGlzS25vd25Db21wb25lbnQgPSAoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjaGlsZHJlbikgPT09ICdvYmplY3QnICYmIGNoaWxkcmVuICE9PSBudWxsICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNoaWxkcmVuLCBub2RlLm5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUoY2hpbGQsIG9wdHMsIGkxOG4ubGFuZ3VhZ2UpO1xuICAgICAgICAgIG1lbS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNDaGlsZHJlbihjaGlsZCkgfHwgaXNWYWxpZFRyYW5zbGF0aW9uV2l0aENoaWxkcmVuKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXIgPSByZW5kZXJJbm5lcihjaGlsZCwgbm9kZSwgcm9vdFJlYWN0Tm9kZSk7XG4gICAgICAgICAgICBwdXNoVHJhbnNsYXRlZEpTWChjaGlsZCwgaW5uZXIsIG1lbSwgaSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0VtcHR5VHJhbnNXaXRoSFRNTCkge1xuICAgICAgICAgIHZhciBfaW5uZXIgPSBtYXBBU1QocmVhY3ROb2Rlcywgbm9kZS5jaGlsZHJlbiwgcm9vdFJlYWN0Tm9kZSk7XG5cbiAgICAgICAgICBtZW0ucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY2hpbGQucHJvcHMpLCB7fSwge1xuICAgICAgICAgICAga2V5OiBpXG4gICAgICAgICAgfSksIF9pbm5lcikpO1xuICAgICAgICB9IGVsc2UgaWYgKE51bWJlci5pc05hTihwYXJzZUZsb2F0KG5vZGUubmFtZSkpKSB7XG4gICAgICAgICAgaWYgKGlzS25vd25Db21wb25lbnQpIHtcbiAgICAgICAgICAgIHZhciBfaW5uZXIyID0gcmVuZGVySW5uZXIoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpO1xuXG4gICAgICAgICAgICBwdXNoVHJhbnNsYXRlZEpTWChjaGlsZCwgX2lubmVyMiwgbWVtLCBpLCBub2RlLnZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGkxOG5PcHRpb25zLnRyYW5zU3VwcG9ydEJhc2ljSHRtbE5vZGVzICYmIGtlZXBBcnJheS5pbmRleE9mKG5vZGUubmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUudm9pZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgbWVtLnB1c2goKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShub2RlLm5hbWUsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiXCIuY29uY2F0KG5vZGUubmFtZSwgXCItXCIpLmNvbmNhdChpKVxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgX2lubmVyMyA9IG1hcEFTVChyZWFjdE5vZGVzLCBub2RlLmNoaWxkcmVuLCByb290UmVhY3ROb2RlKTtcblxuICAgICAgICAgICAgICBtZW0ucHVzaCgoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKG5vZGUubmFtZSwge1xuICAgICAgICAgICAgICAgIGtleTogXCJcIi5jb25jYXQobm9kZS5uYW1lLCBcIi1cIikuY29uY2F0KGkpXG4gICAgICAgICAgICAgIH0sIF9pbm5lcjMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUudm9pZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1lbS5wdXNoKFwiPFwiLmNvbmNhdChub2RlLm5hbWUsIFwiIC8+XCIpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9pbm5lcjQgPSBtYXBBU1QocmVhY3ROb2Rlcywgbm9kZS5jaGlsZHJlbiwgcm9vdFJlYWN0Tm9kZSk7XG5cbiAgICAgICAgICAgIG1lbS5wdXNoKFwiPFwiLmNvbmNhdChub2RlLm5hbWUsIFwiPlwiKS5jb25jYXQoX2lubmVyNCwgXCI8L1wiKS5jb25jYXQobm9kZS5uYW1lLCBcIj5cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjaGlsZCkgPT09ICdvYmplY3QnICYmICFpc0VsZW1lbnQpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IG5vZGUuY2hpbGRyZW5bMF0gPyB0cmFuc2xhdGlvbkNvbnRlbnQgOiBudWxsO1xuICAgICAgICAgIGlmIChjb250ZW50KSBtZW0ucHVzaChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSAmJiB0cmFuc2xhdGlvbkNvbnRlbnQpIHtcbiAgICAgICAgICBtZW0ucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY2hpbGQucHJvcHMpLCB7fSwge1xuICAgICAgICAgICAga2V5OiBpXG4gICAgICAgICAgfSksIHRyYW5zbGF0aW9uQ29udGVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbS5wdXNoKCgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcyksIHt9LCB7XG4gICAgICAgICAgICBrZXk6IGlcbiAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIHZhciB3cmFwVGV4dE5vZGVzID0gaTE4bk9wdGlvbnMudHJhbnNXcmFwVGV4dE5vZGVzO1xuXG4gICAgICAgIHZhciBfY29udGVudCA9IHNob3VsZFVuZXNjYXBlID8gaTE4bk9wdGlvbnMudW5lc2NhcGUoaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUobm9kZS5jb250ZW50LCBvcHRzLCBpMThuLmxhbmd1YWdlKSkgOiBpMThuLnNlcnZpY2VzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShub2RlLmNvbnRlbnQsIG9wdHMsIGkxOG4ubGFuZ3VhZ2UpO1xuXG4gICAgICAgIGlmICh3cmFwVGV4dE5vZGVzKSB7XG4gICAgICAgICAgbWVtLnB1c2goKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KSh3cmFwVGV4dE5vZGVzLCB7XG4gICAgICAgICAgICBrZXk6IFwiXCIuY29uY2F0KG5vZGUubmFtZSwgXCItXCIpLmNvbmNhdChpKVxuICAgICAgICAgIH0sIF9jb250ZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVtLnB1c2goX2NvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW07XG4gICAgfSwgW10pO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG1hcEFTVChbe1xuICAgIGR1bW15OiB0cnVlLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbiB8fCBbXVxuICB9XSwgYXN0LCBnZXRBc0FycmF5KGNoaWxkcmVuIHx8IFtdKSk7XG4gIHJldHVybiBnZXRDaGlsZHJlbihyZXN1bHRbMF0pO1xufVxuXG5mdW5jdGlvbiBUcmFucyhfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjb3VudCA9IF9yZWYuY291bnQsXG4gICAgICBwYXJlbnQgPSBfcmVmLnBhcmVudCxcbiAgICAgIGkxOG5LZXkgPSBfcmVmLmkxOG5LZXksXG4gICAgICBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgICAgX3JlZiR0T3B0aW9ucyA9IF9yZWYudE9wdGlvbnMsXG4gICAgICB0T3B0aW9ucyA9IF9yZWYkdE9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZiR0T3B0aW9ucyxcbiAgICAgIHZhbHVlcyA9IF9yZWYudmFsdWVzLFxuICAgICAgZGVmYXVsdHMgPSBfcmVmLmRlZmF1bHRzLFxuICAgICAgY29tcG9uZW50cyA9IF9yZWYuY29tcG9uZW50cyxcbiAgICAgIG5zID0gX3JlZi5ucyxcbiAgICAgIGkxOG5Gcm9tUHJvcHMgPSBfcmVmLmkxOG4sXG4gICAgICB0RnJvbVByb3BzID0gX3JlZi50LFxuICAgICAgc2hvdWxkVW5lc2NhcGUgPSBfcmVmLnNob3VsZFVuZXNjYXBlLFxuICAgICAgYWRkaXRpb25hbFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczJbXCJkZWZhdWx0XCJdKShfcmVmLCBfZXhjbHVkZWQyKTtcblxuICB2YXIgX3JlZjIgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9jb250ZXh0LkkxOG5Db250ZXh0KSB8fCB7fSxcbiAgICAgIGkxOG5Gcm9tQ29udGV4dCA9IF9yZWYyLmkxOG4sXG4gICAgICBkZWZhdWx0TlNGcm9tQ29udGV4dCA9IF9yZWYyLmRlZmF1bHROUztcblxuICB2YXIgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8ICgwLCBfY29udGV4dC5nZXRJMThuKSgpO1xuXG4gIGlmICghaTE4bikge1xuICAgICgwLCBfdXRpbHMud2Fybk9uY2UpKCdZb3Ugd2lsbCBuZWVkIHRvIHBhc3MgaW4gYW4gaTE4bmV4dCBpbnN0YW5jZSBieSB1c2luZyBpMThuZXh0UmVhY3RNb2R1bGUnKTtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdCA9IHRGcm9tUHJvcHMgfHwgaTE4bi50LmJpbmQoaTE4bikgfHwgZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gaztcbiAgfTtcblxuICBpZiAoY29udGV4dCkgdE9wdGlvbnMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgdmFyIHJlYWN0STE4bmV4dE9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sICgwLCBfY29udGV4dC5nZXREZWZhdWx0cykoKSksIGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMucmVhY3QpO1xuXG4gIHZhciBuYW1lc3BhY2VzID0gbnMgfHwgdC5ucyB8fCBkZWZhdWx0TlNGcm9tQ29udGV4dCB8fCBpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLmRlZmF1bHROUztcbiAgbmFtZXNwYWNlcyA9IHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IFtuYW1lc3BhY2VzXSA6IG5hbWVzcGFjZXMgfHwgWyd0cmFuc2xhdGlvbiddO1xuICB2YXIgZGVmYXVsdFZhbHVlID0gZGVmYXVsdHMgfHwgbm9kZXNUb1N0cmluZyhjaGlsZHJlbiwgcmVhY3RJMThuZXh0T3B0aW9ucykgfHwgcmVhY3RJMThuZXh0T3B0aW9ucy50cmFuc0VtcHR5Tm9kZVZhbHVlIHx8IGkxOG5LZXk7XG4gIHZhciBoYXNoVHJhbnNLZXkgPSByZWFjdEkxOG5leHRPcHRpb25zLmhhc2hUcmFuc0tleTtcbiAgdmFyIGtleSA9IGkxOG5LZXkgfHwgKGhhc2hUcmFuc0tleSA/IGhhc2hUcmFuc0tleShkZWZhdWx0VmFsdWUpIDogZGVmYXVsdFZhbHVlKTtcbiAgdmFyIGludGVycG9sYXRpb25PdmVycmlkZSA9IHZhbHVlcyA/IHRPcHRpb25zLmludGVycG9sYXRpb24gOiB7XG4gICAgaW50ZXJwb2xhdGlvbjogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0T3B0aW9ucy5pbnRlcnBvbGF0aW9uKSwge30sIHtcbiAgICAgIHByZWZpeDogJyMkPycsXG4gICAgICBzdWZmaXg6ICc/JCMnXG4gICAgfSlcbiAgfTtcblxuICB2YXIgY29tYmluZWRUT3B0cyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRPcHRpb25zKSwge30sIHtcbiAgICBjb3VudDogY291bnRcbiAgfSwgdmFsdWVzKSwgaW50ZXJwb2xhdGlvbk92ZXJyaWRlKSwge30sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBuczogbmFtZXNwYWNlc1xuICB9KTtcblxuICB2YXIgdHJhbnNsYXRpb24gPSBrZXkgPyB0KGtleSwgY29tYmluZWRUT3B0cykgOiBkZWZhdWx0VmFsdWU7XG4gIHZhciBjb250ZW50ID0gcmVuZGVyTm9kZXMoY29tcG9uZW50cyB8fCBjaGlsZHJlbiwgdHJhbnNsYXRpb24sIGkxOG4sIHJlYWN0STE4bmV4dE9wdGlvbnMsIGNvbWJpbmVkVE9wdHMsIHNob3VsZFVuZXNjYXBlKTtcbiAgdmFyIHVzZUFzUGFyZW50ID0gcGFyZW50ICE9PSB1bmRlZmluZWQgPyBwYXJlbnQgOiByZWFjdEkxOG5leHRPcHRpb25zLmRlZmF1bHRUcmFuc1BhcmVudDtcbiAgcmV0dXJuIHVzZUFzUGFyZW50ID8gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KSh1c2VBc1BhcmVudCwgYWRkaXRpb25hbFByb3BzLCBjb250ZW50KSA6IGNvbnRlbnQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UcmFuc2xhdGlvbiA9IFRyYW5zbGF0aW9uO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpKTtcblxudmFyIF91c2VUcmFuc2xhdGlvbjMgPSByZXF1aXJlKFwiLi91c2VUcmFuc2xhdGlvblwiKTtcblxudmFyIF9leGNsdWRlZCA9IFtcIm5zXCIsIFwiY2hpbGRyZW5cIl07XG5cbmZ1bmN0aW9uIFRyYW5zbGF0aW9uKHByb3BzKSB7XG4gIHZhciBucyA9IHByb3BzLm5zLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIG9wdGlvbnMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMltcImRlZmF1bHRcIl0pKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBfdXNlVHJhbnNsYXRpb24gPSAoMCwgX3VzZVRyYW5zbGF0aW9uMy51c2VUcmFuc2xhdGlvbikobnMsIG9wdGlvbnMpLFxuICAgICAgX3VzZVRyYW5zbGF0aW9uMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlVHJhbnNsYXRpb24sIDMpLFxuICAgICAgdCA9IF91c2VUcmFuc2xhdGlvbjJbMF0sXG4gICAgICBpMThuID0gX3VzZVRyYW5zbGF0aW9uMlsxXSxcbiAgICAgIHJlYWR5ID0gX3VzZVRyYW5zbGF0aW9uMlsyXTtcblxuICByZXR1cm4gY2hpbGRyZW4odCwge1xuICAgIGkxOG46IGkxOG4sXG4gICAgbG5nOiBpMThuLmxhbmd1YWdlXG4gIH0sIHJlYWR5KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldERlZmF1bHRzID0gc2V0RGVmYXVsdHM7XG5leHBvcnRzLmdldERlZmF1bHRzID0gZ2V0RGVmYXVsdHM7XG5leHBvcnRzLnNldEkxOG4gPSBzZXRJMThuO1xuZXhwb3J0cy5nZXRJMThuID0gZ2V0STE4bjtcbmV4cG9ydHMuY29tcG9zZUluaXRpYWxQcm9wcyA9IGNvbXBvc2VJbml0aWFsUHJvcHM7XG5leHBvcnRzLmdldEluaXRpYWxQcm9wcyA9IGdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuaW5pdFJlYWN0STE4bmV4dCA9IGV4cG9ydHMuUmVwb3J0TmFtZXNwYWNlcyA9IGV4cG9ydHMuSTE4bkNvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfdW5lc2NhcGUgPSByZXF1aXJlKFwiLi91bmVzY2FwZVwiKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBiaW5kSTE4bjogJ2xhbmd1YWdlQ2hhbmdlZCcsXG4gIGJpbmRJMThuU3RvcmU6ICcnLFxuICB0cmFuc0VtcHR5Tm9kZVZhbHVlOiAnJyxcbiAgdHJhbnNTdXBwb3J0QmFzaWNIdG1sTm9kZXM6IHRydWUsXG4gIHRyYW5zV3JhcFRleHROb2RlczogJycsXG4gIHRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yOiBbJ2JyJywgJ3N0cm9uZycsICdpJywgJ3AnXSxcbiAgdXNlU3VzcGVuc2U6IHRydWUsXG4gIHVuZXNjYXBlOiBfdW5lc2NhcGUudW5lc2NhcGVcbn07XG52YXIgaTE4bkluc3RhbmNlO1xudmFyIEkxOG5Db250ZXh0ID0gKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSgpO1xuZXhwb3J0cy5JMThuQ29udGV4dCA9IEkxOG5Db250ZXh0O1xuXG5mdW5jdGlvbiBzZXREZWZhdWx0cygpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICBkZWZhdWx0T3B0aW9ucyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdHMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxudmFyIFJlcG9ydE5hbWVzcGFjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlcG9ydE5hbWVzcGFjZXMoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBSZXBvcnROYW1lc3BhY2VzKTtcbiAgICB0aGlzLnVzZWROYW1lc3BhY2VzID0ge307XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKFJlcG9ydE5hbWVzcGFjZXMsIFt7XG4gICAga2V5OiBcImFkZFVzZWROYW1lc3BhY2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFVzZWROYW1lc3BhY2VzKG5hbWVzcGFjZXMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIG5hbWVzcGFjZXMuZm9yRWFjaChmdW5jdGlvbiAobnMpIHtcbiAgICAgICAgaWYgKCFfdGhpcy51c2VkTmFtZXNwYWNlc1tuc10pIF90aGlzLnVzZWROYW1lc3BhY2VzW25zXSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VXNlZE5hbWVzcGFjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlZE5hbWVzcGFjZXMoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy51c2VkTmFtZXNwYWNlcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSZXBvcnROYW1lc3BhY2VzO1xufSgpO1xuXG5leHBvcnRzLlJlcG9ydE5hbWVzcGFjZXMgPSBSZXBvcnROYW1lc3BhY2VzO1xuXG5mdW5jdGlvbiBzZXRJMThuKGluc3RhbmNlKSB7XG4gIGkxOG5JbnN0YW5jZSA9IGluc3RhbmNlO1xufVxuXG5mdW5jdGlvbiBnZXRJMThuKCkge1xuICByZXR1cm4gaTE4bkluc3RhbmNlO1xufVxuXG52YXIgaW5pdFJlYWN0STE4bmV4dCA9IHtcbiAgdHlwZTogJzNyZFBhcnR5JyxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdChpbnN0YW5jZSkge1xuICAgIHNldERlZmF1bHRzKGluc3RhbmNlLm9wdGlvbnMucmVhY3QpO1xuICAgIHNldEkxOG4oaW5zdGFuY2UpO1xuICB9XG59O1xuZXhwb3J0cy5pbml0UmVhY3RJMThuZXh0ID0gaW5pdFJlYWN0STE4bmV4dDtcblxuZnVuY3Rpb24gY29tcG9zZUluaXRpYWxQcm9wcyhGb3JDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjdHgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHZhciBpMThuSW5pdGlhbFByb3BzID0gZ2V0SW5pdGlhbFByb3BzKCk7XG5cbiAgICAgIGlmIChGb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIEZvckNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KS50aGVuKGZ1bmN0aW9uIChjb21wb25lbnRzSW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgcmVzb2x2ZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNvbXBvbmVudHNJbml0aWFsUHJvcHMpLCBpMThuSW5pdGlhbFByb3BzKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShpMThuSW5pdGlhbFByb3BzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKCkge1xuICB2YXIgaTE4biA9IGdldEkxOG4oKTtcbiAgdmFyIG5hbWVzcGFjZXMgPSBpMThuLnJlcG9ydE5hbWVzcGFjZXMgPyBpMThuLnJlcG9ydE5hbWVzcGFjZXMuZ2V0VXNlZE5hbWVzcGFjZXMoKSA6IFtdO1xuICB2YXIgcmV0ID0ge307XG4gIHZhciBpbml0aWFsSTE4blN0b3JlID0ge307XG4gIGkxOG4ubGFuZ3VhZ2VzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICBpbml0aWFsSTE4blN0b3JlW2xdID0ge307XG4gICAgbmFtZXNwYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChucykge1xuICAgICAgaW5pdGlhbEkxOG5TdG9yZVtsXVtuc10gPSBpMThuLmdldFJlc291cmNlQnVuZGxlKGwsIG5zKSB8fCB7fTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldC5pbml0aWFsSTE4blN0b3JlID0gaW5pdGlhbEkxOG5TdG9yZTtcbiAgcmV0LmluaXRpYWxMYW5ndWFnZSA9IGkxOG4ubGFuZ3VhZ2U7XG4gIHJldHVybiByZXQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJUcmFuc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVHJhbnMuVHJhbnM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlVHJhbnNsYXRpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VzZVRyYW5zbGF0aW9uLnVzZVRyYW5zbGF0aW9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhUcmFuc2xhdGlvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2l0aFRyYW5zbGF0aW9uLndpdGhUcmFuc2xhdGlvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJUcmFuc2xhdGlvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVHJhbnNsYXRpb24uVHJhbnNsYXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSTE4bmV4dFByb3ZpZGVyXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9JMThuZXh0UHJvdmlkZXIuSTE4bmV4dFByb3ZpZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhTU1JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dpdGhTU1Iud2l0aFNTUjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1c2VTU1JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VzZVNTUi51c2VTU1I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSTE4bkNvbnRleHRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuSTE4bkNvbnRleHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW5pdFJlYWN0STE4bmV4dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5pbml0UmVhY3RJMThuZXh0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldERlZmF1bHRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LnNldERlZmF1bHRzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldERlZmF1bHRzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LmdldERlZmF1bHRzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNldEkxOG5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuc2V0STE4bjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRJMThuXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LmdldEkxOG47XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY29tcG9zZUluaXRpYWxQcm9wc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5jb21wb3NlSW5pdGlhbFByb3BzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEluaXRpYWxQcm9wc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5nZXRJbml0aWFsUHJvcHM7XG4gIH1cbn0pO1xuZXhwb3J0cy5zZWxlY3RPcmRpbmFsID0gZXhwb3J0cy5wbHVyYWwgPSBleHBvcnRzLnNlbGVjdCA9IGV4cG9ydHMubnVtYmVyID0gZXhwb3J0cy50aW1lID0gZXhwb3J0cy5kYXRlID0gdm9pZCAwO1xuXG52YXIgX1RyYW5zID0gcmVxdWlyZShcIi4vVHJhbnNcIik7XG5cbnZhciBfdXNlVHJhbnNsYXRpb24gPSByZXF1aXJlKFwiLi91c2VUcmFuc2xhdGlvblwiKTtcblxudmFyIF93aXRoVHJhbnNsYXRpb24gPSByZXF1aXJlKFwiLi93aXRoVHJhbnNsYXRpb25cIik7XG5cbnZhciBfVHJhbnNsYXRpb24gPSByZXF1aXJlKFwiLi9UcmFuc2xhdGlvblwiKTtcblxudmFyIF9JMThuZXh0UHJvdmlkZXIgPSByZXF1aXJlKFwiLi9JMThuZXh0UHJvdmlkZXJcIik7XG5cbnZhciBfd2l0aFNTUiA9IHJlcXVpcmUoXCIuL3dpdGhTU1JcIik7XG5cbnZhciBfdXNlU1NSID0gcmVxdWlyZShcIi4vdXNlU1NSXCIpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG52YXIgZGF0ZSA9IGZ1bmN0aW9uIGRhdGUoKSB7XG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMuZGF0ZSA9IGRhdGU7XG5cbnZhciB0aW1lID0gZnVuY3Rpb24gdGltZSgpIHtcbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy50aW1lID0gdGltZTtcblxudmFyIG51bWJlciA9IGZ1bmN0aW9uIG51bWJlcigpIHtcbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5udW1iZXIgPSBudW1iZXI7XG5cbnZhciBzZWxlY3QgPSBmdW5jdGlvbiBzZWxlY3QoKSB7XG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMuc2VsZWN0ID0gc2VsZWN0O1xuXG52YXIgcGx1cmFsID0gZnVuY3Rpb24gcGx1cmFsKCkge1xuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLnBsdXJhbCA9IHBsdXJhbDtcblxudmFyIHNlbGVjdE9yZGluYWwgPSBmdW5jdGlvbiBzZWxlY3RPcmRpbmFsKCkge1xuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLnNlbGVjdE9yZGluYWwgPSBzZWxlY3RPcmRpbmFsOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51bmVzY2FwZSA9IHZvaWQgMDtcbnZhciBtYXRjaEh0bWxFbnRpdHkgPSAvJig/OmFtcHwjMzh8bHR8IzYwfGd0fCM2MnxhcG9zfCMzOXxxdW90fCMzNHxuYnNwfCMxNjB8Y29weXwjMTY5fHJlZ3wjMTc0fGhlbGxpcHwjODIzMHwjeDJGfCM0Nyk7L2c7XG52YXIgaHRtbEVudGl0aWVzID0ge1xuICAnJmFtcDsnOiAnJicsXG4gICcmIzM4Oyc6ICcmJyxcbiAgJyZsdDsnOiAnPCcsXG4gICcmIzYwOyc6ICc8JyxcbiAgJyZndDsnOiAnPicsXG4gICcmIzYyOyc6ICc+JyxcbiAgJyZhcG9zOyc6IFwiJ1wiLFxuICAnJiMzOTsnOiBcIidcIixcbiAgJyZxdW90Oyc6ICdcIicsXG4gICcmIzM0Oyc6ICdcIicsXG4gICcmbmJzcDsnOiAnICcsXG4gICcmIzE2MDsnOiAnICcsXG4gICcmY29weTsnOiAnwqknLFxuICAnJiMxNjk7JzogJ8KpJyxcbiAgJyZyZWc7JzogJ8KuJyxcbiAgJyYjMTc0Oyc6ICfCricsXG4gICcmaGVsbGlwOyc6ICfigKYnLFxuICAnJiM4MjMwOyc6ICfigKYnLFxuICAnJiN4MkY7JzogJy8nLFxuICAnJiM0NzsnOiAnLydcbn07XG5cbnZhciB1bmVzY2FwZUh0bWxFbnRpdHkgPSBmdW5jdGlvbiB1bmVzY2FwZUh0bWxFbnRpdHkobSkge1xuICByZXR1cm4gaHRtbEVudGl0aWVzW21dO1xufTtcblxudmFyIHVuZXNjYXBlID0gZnVuY3Rpb24gdW5lc2NhcGUodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKG1hdGNoSHRtbEVudGl0eSwgdW5lc2NhcGVIdG1sRW50aXR5KTtcbn07XG5cbmV4cG9ydHMudW5lc2NhcGUgPSB1bmVzY2FwZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlU1NSID0gdXNlU1NSO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG5mdW5jdGlvbiB1c2VTU1IoaW5pdGlhbEkxOG5TdG9yZSwgaW5pdGlhbExhbmd1YWdlKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBpMThuRnJvbVByb3BzID0gcHJvcHMuaTE4bjtcblxuICB2YXIgX3JlZiA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2NvbnRleHQuSTE4bkNvbnRleHQpIHx8IHt9LFxuICAgICAgaTE4bkZyb21Db250ZXh0ID0gX3JlZi5pMThuO1xuXG4gIHZhciBpMThuID0gaTE4bkZyb21Qcm9wcyB8fCBpMThuRnJvbUNvbnRleHQgfHwgKDAsIF9jb250ZXh0LmdldEkxOG4pKCk7XG4gIGlmIChpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLmlzQ2xvbmUpIHJldHVybjtcblxuICBpZiAoaW5pdGlhbEkxOG5TdG9yZSAmJiAhaTE4bi5pbml0aWFsaXplZFN0b3JlT25jZSkge1xuICAgIGkxOG4uc2VydmljZXMucmVzb3VyY2VTdG9yZS5kYXRhID0gaW5pdGlhbEkxOG5TdG9yZTtcbiAgICBpMThuLm9wdGlvbnMubnMgPSBPYmplY3QudmFsdWVzKGluaXRpYWxJMThuU3RvcmUpLnJlZHVjZShmdW5jdGlvbiAobWVtLCBsbmdSZXNvdXJjZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKGxuZ1Jlc291cmNlcykuZm9yRWFjaChmdW5jdGlvbiAobnMpIHtcbiAgICAgICAgaWYgKG1lbS5pbmRleE9mKG5zKSA8IDApIG1lbS5wdXNoKG5zKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1lbTtcbiAgICB9LCBpMThuLm9wdGlvbnMubnMpO1xuICAgIGkxOG4uaW5pdGlhbGl6ZWRTdG9yZU9uY2UgPSB0cnVlO1xuICAgIGkxOG4uaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBpZiAoaW5pdGlhbExhbmd1YWdlICYmICFpMThuLmluaXRpYWxpemVkTGFuZ3VhZ2VPbmNlKSB7XG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShpbml0aWFsTGFuZ3VhZ2UpO1xuICAgIGkxOG4uaW5pdGlhbGl6ZWRMYW5ndWFnZU9uY2UgPSB0cnVlO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VUcmFuc2xhdGlvbiA9IHVzZVRyYW5zbGF0aW9uO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgdXNlUHJldmlvdXMgPSBmdW5jdGlvbiB1c2VQcmV2aW91cyh2YWx1ZSwgaWdub3JlKSB7XG4gIHZhciByZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoKTtcbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IGlnbm9yZSA/IHJlZi5jdXJyZW50IDogdmFsdWU7XG4gIH0sIFt2YWx1ZSwgaWdub3JlXSk7XG4gIHJldHVybiByZWYuY3VycmVudDtcbn07XG5cbmZ1bmN0aW9uIHVzZVRyYW5zbGF0aW9uKG5zKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBpMThuRnJvbVByb3BzID0gcHJvcHMuaTE4bjtcblxuICB2YXIgX3JlZiA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2NvbnRleHQuSTE4bkNvbnRleHQpIHx8IHt9LFxuICAgICAgaTE4bkZyb21Db250ZXh0ID0gX3JlZi5pMThuLFxuICAgICAgZGVmYXVsdE5TRnJvbUNvbnRleHQgPSBfcmVmLmRlZmF1bHROUztcblxuICB2YXIgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8ICgwLCBfY29udGV4dC5nZXRJMThuKSgpO1xuICBpZiAoaTE4biAmJiAhaTE4bi5yZXBvcnROYW1lc3BhY2VzKSBpMThuLnJlcG9ydE5hbWVzcGFjZXMgPSBuZXcgX2NvbnRleHQuUmVwb3J0TmFtZXNwYWNlcygpO1xuXG4gIGlmICghaTE4bikge1xuICAgICgwLCBfdXRpbHMud2Fybk9uY2UpKCdZb3Ugd2lsbCBuZWVkIHRvIHBhc3MgaW4gYW4gaTE4bmV4dCBpbnN0YW5jZSBieSB1c2luZyBpbml0UmVhY3RJMThuZXh0Jyk7XG5cbiAgICB2YXIgbm90UmVhZHlUID0gZnVuY3Rpb24gbm90UmVhZHlUKGspIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGspID8ga1trLmxlbmd0aCAtIDFdIDogaztcbiAgICB9O1xuXG4gICAgdmFyIHJldE5vdFJlYWR5ID0gW25vdFJlYWR5VCwge30sIGZhbHNlXTtcbiAgICByZXROb3RSZWFkeS50ID0gbm90UmVhZHlUO1xuICAgIHJldE5vdFJlYWR5LmkxOG4gPSB7fTtcbiAgICByZXROb3RSZWFkeS5yZWFkeSA9IGZhbHNlO1xuICAgIHJldHVybiByZXROb3RSZWFkeTtcbiAgfVxuXG4gIGlmIChpMThuLm9wdGlvbnMucmVhY3QgJiYgaTE4bi5vcHRpb25zLnJlYWN0LndhaXQgIT09IHVuZGVmaW5lZCkgKDAsIF91dGlscy53YXJuT25jZSkoJ0l0IHNlZW1zIHlvdSBhcmUgc3RpbGwgdXNpbmcgdGhlIG9sZCB3YWl0IG9wdGlvbiwgeW91IG1heSBtaWdyYXRlIHRvIHRoZSBuZXcgdXNlU3VzcGVuc2UgYmVoYXZpb3VyLicpO1xuXG4gIHZhciBpMThuT3B0aW9ucyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCAoMCwgX2NvbnRleHQuZ2V0RGVmYXVsdHMpKCkpLCBpMThuLm9wdGlvbnMucmVhY3QpLCBwcm9wcyk7XG5cbiAgdmFyIHVzZVN1c3BlbnNlID0gaTE4bk9wdGlvbnMudXNlU3VzcGVuc2UsXG4gICAgICBrZXlQcmVmaXggPSBpMThuT3B0aW9ucy5rZXlQcmVmaXg7XG4gIHZhciBuYW1lc3BhY2VzID0gbnMgfHwgZGVmYXVsdE5TRnJvbUNvbnRleHQgfHwgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlM7XG4gIG5hbWVzcGFjZXMgPSB0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBbbmFtZXNwYWNlc10gOiBuYW1lc3BhY2VzIHx8IFsndHJhbnNsYXRpb24nXTtcbiAgaWYgKGkxOG4ucmVwb3J0TmFtZXNwYWNlcy5hZGRVc2VkTmFtZXNwYWNlcykgaTE4bi5yZXBvcnROYW1lc3BhY2VzLmFkZFVzZWROYW1lc3BhY2VzKG5hbWVzcGFjZXMpO1xuICB2YXIgcmVhZHkgPSAoaTE4bi5pc0luaXRpYWxpemVkIHx8IGkxOG4uaW5pdGlhbGl6ZWRTdG9yZU9uY2UpICYmIG5hbWVzcGFjZXMuZXZlcnkoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5oYXNMb2FkZWROYW1lc3BhY2UpKG4sIGkxOG4sIGkxOG5PcHRpb25zKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0VCgpIHtcbiAgICByZXR1cm4gaTE4bi5nZXRGaXhlZFQobnVsbCwgaTE4bk9wdGlvbnMubnNNb2RlID09PSAnZmFsbGJhY2snID8gbmFtZXNwYWNlcyA6IG5hbWVzcGFjZXNbMF0sIGtleVByZWZpeCk7XG4gIH1cblxuICB2YXIgX3VzZVN0YXRlID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkoZ2V0VCksXG4gICAgICBfdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VTdGF0ZSwgMiksXG4gICAgICB0ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFQgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBqb2luZWROUyA9IG5hbWVzcGFjZXMuam9pbigpO1xuICB2YXIgcHJldmlvdXNKb2luZWROUyA9IHVzZVByZXZpb3VzKGpvaW5lZE5TKTtcbiAgdmFyIGlzTW91bnRlZCA9ICgwLCBfcmVhY3QudXNlUmVmKSh0cnVlKTtcbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYmluZEkxOG4gPSBpMThuT3B0aW9ucy5iaW5kSTE4bixcbiAgICAgICAgYmluZEkxOG5TdG9yZSA9IGkxOG5PcHRpb25zLmJpbmRJMThuU3RvcmU7XG4gICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgaWYgKCFyZWFkeSAmJiAhdXNlU3VzcGVuc2UpIHtcbiAgICAgICgwLCBfdXRpbHMubG9hZE5hbWVzcGFjZXMpKGkxOG4sIG5hbWVzcGFjZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTW91bnRlZC5jdXJyZW50KSBzZXRUKGdldFQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlYWR5ICYmIHByZXZpb3VzSm9pbmVkTlMgJiYgcHJldmlvdXNKb2luZWROUyAhPT0gam9pbmVkTlMgJiYgaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgIHNldFQoZ2V0VCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm91bmRSZXNldCgpIHtcbiAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkgc2V0VChnZXRUKTtcbiAgICB9XG5cbiAgICBpZiAoYmluZEkxOG4gJiYgaTE4bikgaTE4bi5vbihiaW5kSTE4biwgYm91bmRSZXNldCk7XG4gICAgaWYgKGJpbmRJMThuU3RvcmUgJiYgaTE4bikgaTE4bi5zdG9yZS5vbihiaW5kSTE4blN0b3JlLCBib3VuZFJlc2V0KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIGlmIChiaW5kSTE4biAmJiBpMThuKSBiaW5kSTE4bi5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGkxOG4ub2ZmKGUsIGJvdW5kUmVzZXQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoYmluZEkxOG5TdG9yZSAmJiBpMThuKSBiaW5kSTE4blN0b3JlLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gaTE4bi5zdG9yZS5vZmYoZSwgYm91bmRSZXNldCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbaTE4biwgam9pbmVkTlNdKTtcbiAgdmFyIGlzSW5pdGlhbCA9ICgwLCBfcmVhY3QudXNlUmVmKSh0cnVlKTtcbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQgJiYgIWlzSW5pdGlhbC5jdXJyZW50KSB7XG4gICAgICBzZXRUKGdldFQpO1xuICAgIH1cblxuICAgIGlzSW5pdGlhbC5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtpMThuLCBrZXlQcmVmaXhdKTtcbiAgdmFyIHJldCA9IFt0LCBpMThuLCByZWFkeV07XG4gIHJldC50ID0gdDtcbiAgcmV0LmkxOG4gPSBpMThuO1xuICByZXQucmVhZHkgPSByZWFkeTtcbiAgaWYgKHJlYWR5KSByZXR1cm4gcmV0O1xuICBpZiAoIXJlYWR5ICYmICF1c2VTdXNwZW5zZSkgcmV0dXJuIHJldDtcbiAgdGhyb3cgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAoMCwgX3V0aWxzLmxvYWROYW1lc3BhY2VzKShpMThuLCBuYW1lc3BhY2VzLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53YXJuID0gd2FybjtcbmV4cG9ydHMud2Fybk9uY2UgPSB3YXJuT25jZTtcbmV4cG9ydHMubG9hZE5hbWVzcGFjZXMgPSBsb2FkTmFtZXNwYWNlcztcbmV4cG9ydHMuaGFzTG9hZGVkTmFtZXNwYWNlID0gaGFzTG9hZGVkTmFtZXNwYWNlO1xuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuXG5mdW5jdGlvbiB3YXJuKCkge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykgYXJnc1swXSA9IFwicmVhY3QtaTE4bmV4dDo6IFwiLmNvbmNhdChhcmdzWzBdKTtcblxuICAgIChfY29uc29sZSA9IGNvbnNvbGUpLndhcm4uYXBwbHkoX2NvbnNvbGUsIGFyZ3MpO1xuICB9XG59XG5cbnZhciBhbHJlYWR5V2FybmVkID0ge307XG5cbmZ1bmN0aW9uIHdhcm5PbmNlKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnICYmIGFscmVhZHlXYXJuZWRbYXJnc1swXV0pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykgYWxyZWFkeVdhcm5lZFthcmdzWzBdXSA9IG5ldyBEYXRlKCk7XG4gIHdhcm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbn1cblxuZnVuY3Rpb24gbG9hZE5hbWVzcGFjZXMoaTE4biwgbnMsIGNiKSB7XG4gIGkxOG4ubG9hZE5hbWVzcGFjZXMobnMsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaTE4bi5pc0luaXRpYWxpemVkKSB7XG4gICAgICBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5pdGlhbGl6ZWQgPSBmdW5jdGlvbiBpbml0aWFsaXplZCgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaTE4bi5vZmYoJ2luaXRpYWxpemVkJywgaW5pdGlhbGl6ZWQpO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgY2IoKTtcbiAgICAgIH07XG5cbiAgICAgIGkxOG4ub24oJ2luaXRpYWxpemVkJywgaW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9sZEkxOG5leHRIYXNMb2FkZWROYW1lc3BhY2UobnMsIGkxOG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgbG5nID0gaTE4bi5sYW5ndWFnZXNbMF07XG4gIHZhciBmYWxsYmFja0xuZyA9IGkxOG4ub3B0aW9ucyA/IGkxOG4ub3B0aW9ucy5mYWxsYmFja0xuZyA6IGZhbHNlO1xuICB2YXIgbGFzdExuZyA9IGkxOG4ubGFuZ3VhZ2VzW2kxOG4ubGFuZ3VhZ2VzLmxlbmd0aCAtIDFdO1xuICBpZiAobG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgbG9hZE5vdFBlbmRpbmcgPSBmdW5jdGlvbiBsb2FkTm90UGVuZGluZyhsLCBuKSB7XG4gICAgdmFyIGxvYWRTdGF0ZSA9IGkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5zdGF0ZVtcIlwiLmNvbmNhdChsLCBcInxcIikuY29uY2F0KG4pXTtcbiAgICByZXR1cm4gbG9hZFN0YXRlID09PSAtMSB8fCBsb2FkU3RhdGUgPT09IDI7XG4gIH07XG5cbiAgaWYgKG9wdGlvbnMuYmluZEkxOG4gJiYgb3B0aW9ucy5iaW5kSTE4bi5pbmRleE9mKCdsYW5ndWFnZUNoYW5naW5nJykgPiAtMSAmJiBpMThuLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCAmJiBpMThuLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvICYmICFsb2FkTm90UGVuZGluZyhpMThuLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvLCBucykpIHJldHVybiBmYWxzZTtcbiAgaWYgKGkxOG4uaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykpIHJldHVybiB0cnVlO1xuICBpZiAoIWkxOG4uc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kIHx8IGkxOG4ub3B0aW9ucy5yZXNvdXJjZXMgJiYgIWkxOG4ub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcykgcmV0dXJuIHRydWU7XG4gIGlmIChsb2FkTm90UGVuZGluZyhsbmcsIG5zKSAmJiAoIWZhbGxiYWNrTG5nIHx8IGxvYWROb3RQZW5kaW5nKGxhc3RMbmcsIG5zKSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhc0xvYWRlZE5hbWVzcGFjZShucywgaTE4bikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgaWYgKCFpMThuLmxhbmd1YWdlcyB8fCAhaTE4bi5sYW5ndWFnZXMubGVuZ3RoKSB7XG4gICAgd2Fybk9uY2UoJ2kxOG4ubGFuZ3VhZ2VzIHdlcmUgdW5kZWZpbmVkIG9yIGVtcHR5JywgaTE4bi5sYW5ndWFnZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIGlzTmV3ZXJJMThuZXh0ID0gaTE4bi5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgIT09IHVuZGVmaW5lZDtcblxuICBpZiAoIWlzTmV3ZXJJMThuZXh0KSB7XG4gICAgcmV0dXJuIG9sZEkxOG5leHRIYXNMb2FkZWROYW1lc3BhY2UobnMsIGkxOG4sIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIGkxOG4uaGFzTG9hZGVkTmFtZXNwYWNlKG5zLCB7XG4gICAgcHJlY2hlY2s6IGZ1bmN0aW9uIHByZWNoZWNrKGkxOG5JbnN0YW5jZSwgbG9hZE5vdFBlbmRpbmcpIHtcbiAgICAgIGlmIChvcHRpb25zLmJpbmRJMThuICYmIG9wdGlvbnMuYmluZEkxOG4uaW5kZXhPZignbGFuZ3VhZ2VDaGFuZ2luZycpID4gLTEgJiYgaTE4bkluc3RhbmNlLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCAmJiBpMThuSW5zdGFuY2UuaXNMYW5ndWFnZUNoYW5naW5nVG8gJiYgIWxvYWROb3RQZW5kaW5nKGkxOG5JbnN0YW5jZS5pc0xhbmd1YWdlQ2hhbmdpbmdUbywgbnMpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgKHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnICYmIENvbXBvbmVudC5sZW5ndGggPiAwID8gQ29tcG9uZW50IDogJ1Vua25vd24nKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhTU1IgPSB3aXRoU1NSO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3VzZVNTUiA9IHJlcXVpcmUoXCIuL3VzZVNTUlwiKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiaW5pdGlhbEkxOG5TdG9yZVwiLCBcImluaXRpYWxMYW5ndWFnZVwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gd2l0aFNTUigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIEV4dGVuZChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gSTE4bmV4dFdpdGhTU1IoX3JlZikge1xuICAgICAgdmFyIGluaXRpYWxJMThuU3RvcmUgPSBfcmVmLmluaXRpYWxJMThuU3RvcmUsXG4gICAgICAgICAgaW5pdGlhbExhbmd1YWdlID0gX3JlZi5pbml0aWFsTGFuZ3VhZ2UsXG4gICAgICAgICAgcmVzdCA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyW1wiZGVmYXVsdFwiXSkoX3JlZiwgX2V4Y2x1ZGVkKTtcbiAgICAgICgwLCBfdXNlU1NSLnVzZVNTUikoaW5pdGlhbEkxOG5TdG9yZSwgaW5pdGlhbExhbmd1YWdlKTtcbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKFdyYXBwZWRDb21wb25lbnQsIF9vYmplY3RTcHJlYWQoe30sIHJlc3QpKTtcbiAgICB9XG5cbiAgICBJMThuZXh0V2l0aFNTUi5nZXRJbml0aWFsUHJvcHMgPSAoMCwgX2NvbnRleHQuY29tcG9zZUluaXRpYWxQcm9wcykoV3JhcHBlZENvbXBvbmVudCk7XG4gICAgSTE4bmV4dFdpdGhTU1IuZGlzcGxheU5hbWUgPSBcIndpdGhJMThuZXh0U1NSKFwiLmNvbmNhdCgoMCwgX3V0aWxzLmdldERpc3BsYXlOYW1lKShXcmFwcGVkQ29tcG9uZW50KSwgXCIpXCIpO1xuICAgIEkxOG5leHRXaXRoU1NSLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuICAgIHJldHVybiBJMThuZXh0V2l0aFNTUjtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhUcmFuc2xhdGlvbiA9IHdpdGhUcmFuc2xhdGlvbjtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfdXNlVHJhbnNsYXRpb24zID0gcmVxdWlyZShcIi4vdXNlVHJhbnNsYXRpb25cIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIF9leGNsdWRlZCA9IFtcImZvcndhcmRlZFJlZlwiXTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gd2l0aFRyYW5zbGF0aW9uKG5zKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIEV4dGVuZChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gSTE4bmV4dFdpdGhUcmFuc2xhdGlvbihfcmVmKSB7XG4gICAgICB2YXIgZm9yd2FyZGVkUmVmID0gX3JlZi5mb3J3YXJkZWRSZWYsXG4gICAgICAgICAgcmVzdCA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyW1wiZGVmYXVsdFwiXSkoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICAgICAgdmFyIF91c2VUcmFuc2xhdGlvbiA9ICgwLCBfdXNlVHJhbnNsYXRpb24zLnVzZVRyYW5zbGF0aW9uKShucywgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0KSwge30sIHtcbiAgICAgICAga2V5UHJlZml4OiBvcHRpb25zLmtleVByZWZpeFxuICAgICAgfSkpLFxuICAgICAgICAgIF91c2VUcmFuc2xhdGlvbjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVRyYW5zbGF0aW9uLCAzKSxcbiAgICAgICAgICB0ID0gX3VzZVRyYW5zbGF0aW9uMlswXSxcbiAgICAgICAgICBpMThuID0gX3VzZVRyYW5zbGF0aW9uMlsxXSxcbiAgICAgICAgICByZWFkeSA9IF91c2VUcmFuc2xhdGlvbjJbMl07XG5cbiAgICAgIHZhciBwYXNzRG93blByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0KSwge30sIHtcbiAgICAgICAgdDogdCxcbiAgICAgICAgaTE4bjogaTE4bixcbiAgICAgICAgdFJlYWR5OiByZWFkeVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRpb25zLndpdGhSZWYgJiYgZm9yd2FyZGVkUmVmKSB7XG4gICAgICAgIHBhc3NEb3duUHJvcHMucmVmID0gZm9yd2FyZGVkUmVmO1xuICAgICAgfSBlbHNlIGlmICghb3B0aW9ucy53aXRoUmVmICYmIGZvcndhcmRlZFJlZikge1xuICAgICAgICBwYXNzRG93blByb3BzLmZvcndhcmRlZFJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoV3JhcHBlZENvbXBvbmVudCwgcGFzc0Rvd25Qcm9wcyk7XG4gICAgfVxuXG4gICAgSTE4bmV4dFdpdGhUcmFuc2xhdGlvbi5kaXNwbGF5TmFtZSA9IFwid2l0aEkxOG5leHRUcmFuc2xhdGlvbihcIi5jb25jYXQoKDAsIF91dGlscy5nZXREaXNwbGF5TmFtZSkoV3JhcHBlZENvbXBvbmVudCksIFwiKVwiKTtcbiAgICBJMThuZXh0V2l0aFRyYW5zbGF0aW9uLldyYXBwZWRDb21wb25lbnQgPSBXcmFwcGVkQ29tcG9uZW50O1xuXG4gICAgdmFyIGZvcndhcmRSZWYgPSBmdW5jdGlvbiBmb3J3YXJkUmVmKHByb3BzLCByZWYpIHtcbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKEkxOG5leHRXaXRoVHJhbnNsYXRpb24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgIGZvcndhcmRlZFJlZjogcmVmXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBvcHRpb25zLndpdGhSZWYgPyAoMCwgX3JlYWN0LmZvcndhcmRSZWYpKGZvcndhcmRSZWYpIDogSTE4bmV4dFdpdGhUcmFuc2xhdGlvbjtcbiAgfTtcbn0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gcmVxdWlyZShcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RhcnQobmV3IEVycm9yKCkpO1xufVxuICAgICAgICAgIHZhciBSZWFjdFZlcnNpb24gPSAnMTguMi4wJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHRyYW5zaXRpb246IG51bGxcbn07XG5cbnZhciBSZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IHtcbiAgY3VycmVudDogbnVsbCxcbiAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS5cbiAgaXNCYXRjaGluZ0xlZ2FjeTogZmFsc2UsXG4gIGRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0ge1xuICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLFxuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzogUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lclxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50QWN0UXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHBhcnRpYWxTdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBwYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSAnICsgJ2Z1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKTtcbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlOyAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuLyoqXG4gKiBDbG9uZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCB1c2luZyBlbGVtZW50IGFzIHRoZSBzdGFydGluZyBwb2ludC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY2xvbmVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHByb3BOYW1lOyAvLyBPcmlnaW5hbCBwcm9wcyBhcmUgY29waWVkXG5cbiAgdmFyIHByb3BzID0gYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmOyAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjsgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG5cbiAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTsgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuXG4gIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICAvLyBTaWxlbnRseSBzdGVhbCB0aGUgcmVmIGZyb20gdGhlIHBhcmVudC5cbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICBvd25lciA9IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAge1xuICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihlbGVtZW50LmtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChpc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICB7XG4gICAgICAgICAgLy8gVGhlIGBpZmAgc3RhdGVtZW50IGhlcmUgcHJldmVudHMgYXV0by1kaXNhYmxpbmcgb2YgdGhlIHNhZmVcbiAgICAgICAgICAvLyBjb2VyY2lvbiBFU0xpbnQgcnVsZSwgc28gd2UgbXVzdCBtYW51YWxseSBkaXNhYmxlIGl0IGJlbG93LlxuICAgICAgICAgIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICAgIGlmIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSkge1xuICAgICAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXBwZWRDaGlsZC5rZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBcIiArICdJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuXG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jIFRoZSBtYXAgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgbWFwRnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgbWFwSW50b0FycmF5KGNoaWxkcmVuLCByZXN1bHQsICcnLCAnJywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgY291bnQrKyk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIG4gPSAwO1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIG4rKzsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nXG4gIH0pO1xuICByZXR1cm4gbjtcbn1cblxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKCkge1xuICAgIGZvckVhY2hGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIERvbid0IHJldHVybiBhbnl0aGluZy5cbiAgfSwgZm9yRWFjaENvbnRleHQpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHJldHVybiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSB8fCBbXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgY2hpbGQgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuIGFuZCB2ZXJpZmllcyB0aGF0IHRoZXJlXG4gKiBpcyBvbmx5IG9uZSBjaGlsZCBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cblxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLicpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSkge1xuICAvLyBUT0RPOiBTZWNvbmQgYXJndW1lbnQgdXNlZCB0byBiZSBhbiBvcHRpb25hbCBgY2FsY3VsYXRlQ2hhbmdlZEJpdHNgXG4gIC8vIGZ1bmN0aW9uLiBXYXJuIHRvIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2U/XG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRvIHN1cHBvcnQgbXVsdGlwbGUgY29uY3VycmVudCByZW5kZXJlcnMsIHdlIGNhdGVnb3JpemVcbiAgICAvLyBzb21lIHJlbmRlcmVycyBhcyBwcmltYXJ5IGFuZCBvdGhlcnMgYXMgc2Vjb25kYXJ5LiBXZSBvbmx5IGV4cGVjdFxuICAgIC8vIHRoZXJlIHRvIGJlIHR3byBjb25jdXJyZW50IHJlbmRlcmVycyBhdCBtb3N0OiBSZWFjdCBOYXRpdmUgKHByaW1hcnkpIGFuZFxuICAgIC8vIEZhYnJpYyAoc2Vjb25kYXJ5KTsgUmVhY3QgRE9NIChwcmltYXJ5KSBhbmQgUmVhY3QgQVJUIChzZWNvbmRhcnkpLlxuICAgIC8vIFNlY29uZGFyeSByZW5kZXJlcnMgc3RvcmUgdGhlaXIgY29udGV4dCB2YWx1ZXMgb24gc2VwYXJhdGUgZmllbGRzLlxuICAgIF9jdXJyZW50VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBfY3VycmVudFZhbHVlMjogZGVmYXVsdFZhbHVlLFxuICAgIC8vIFVzZWQgdG8gdHJhY2sgaG93IG1hbnkgY29uY3VycmVudCByZW5kZXJlcnMgdGhpcyBjb250ZXh0IGN1cnJlbnRseVxuICAgIC8vIHN1cHBvcnRzIHdpdGhpbiBpbiBhIHNpbmdsZSByZW5kZXJlci4gU3VjaCBhcyBwYXJhbGxlbCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgIF90aHJlYWRDb3VudDogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbCxcbiAgICAvLyBBZGQgdGhlc2UgdG8gdXNlIHNhbWUgaGlkZGVuIGNsYXNzIGluIFZNIGFzIFNlcnZlckNvbnRleHRcbiAgICBfZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIF9nbG9iYWxOYW1lOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dFxuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgLy8gVGhpcyBtaWdodCB0aHJvdyBlaXRoZXIgYmVjYXVzZSBpdCdzIG1pc3Npbmcgb3IgdGhyb3dzLiBJZiBzbywgd2UgdHJlYXQgaXRcbiAgICAvLyBhcyBzdGlsbCB1bmluaXRpYWxpemVkIGFuZCB0cnkgYWdhaW4gbmV4dCB0aW1lLiBXaGljaCBpcyB0aGUgc2FtZSBhcyB3aGF0XG4gICAgLy8gaGFwcGVucyBpZiB0aGUgY3RvciBvciBhbnkgd3JhcHBlcnMgcHJvY2Vzc2luZyB0aGUgY3RvciB0aHJvd3MuIFRoaXMgbWlnaHRcbiAgICAvLyBlbmQgdXAgZml4aW5nIGl0IGlmIHRoZSByZXNvbHV0aW9uIHdhcyBhIGNvbmN1cnJlbmN5IGJ1Zy5cblxuICAgIHRoZW5hYmxlLnRoZW4oZnVuY3Rpb24gKG1vZHVsZU9iamVjdCkge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gbW9kdWxlT2JqZWN0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZyB8fCBwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAvLyBJbiBjYXNlLCB3ZSdyZSBzdGlsbCB1bmluaXRpYWxpemVkLCB0aGVuIHdlJ3JlIHdhaXRpbmcgZm9yIHRoZSB0aGVuYWJsZVxuICAgICAgLy8gdG8gcmVzb2x2ZS4gU2V0IGl0IGFzIHBlbmRpbmcgaW4gdGhlIG1lYW50aW1lLlxuICAgICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICAgIHBlbmRpbmcuX3Jlc3VsdCA9IHRoZW5hYmxlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgdmFyIG1vZHVsZU9iamVjdCA9IHBheWxvYWQuX3Jlc3VsdDtcblxuICAgIHtcbiAgICAgIGlmIChtb2R1bGVPYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXFxuXFxuXCIgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcHV0IGN1cmx5IGJyYWNlcyBhcm91bmQgdGhlIGltcG9ydD8nLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmICghKCdkZWZhdWx0JyBpbiBtb2R1bGVPYmplY3QpKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcIiwgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogVW5pbml0aWFsaXplZCxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCFyZW5kZXIubmFtZSAmJiAhcmVuZGVyLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgcmVuZGVyLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lOyAvLyBUaGUgaW5uZXIgY29tcG9uZW50IHNob3VsZG4ndCBpbmhlcml0IHRoaXMgZGlzcGxheSBuYW1lIGluIG1vc3QgY2FzZXMsXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBtYXkgYmUgdXNlZCBlbHNld2hlcmUuXG4gICAgICAgIC8vIEJ1dCBpdCdzIG5pY2UgZm9yIGFub255bW91cyBmdW5jdGlvbnMgdG8gaW5oZXJpdCB0aGUgbmFtZSxcbiAgICAgICAgLy8gc28gdGhhdCBvdXIgY29tcG9uZW50LXN0YWNrIGdlbmVyYXRpb24gbG9naWMgd2lsbCBkaXNwbGF5IHRoZWlyIGZyYW1lcy5cbiAgICAgICAgLy8gQW4gYW5vbnltb3VzIGZ1bmN0aW9uIGdlbmVyYWxseSBzdWdnZXN0cyBhIHBhdHRlcm4gbGlrZTpcbiAgICAgICAgLy8gICBSZWFjdC5tZW1vKChwcm9wcykgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghdHlwZS5uYW1lICYmICF0eXBlLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIHtcbiAgICBpZiAoZGlzcGF0Y2hlciA9PT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3InICsgJyBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbicgKyAnMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuJyArICcyLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuJyArICczLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKTtcbiAgICB9XG4gIH0gLy8gV2lsbCByZXN1bHQgaW4gYSBudWxsIGFjY2VzcyBlcnJvciBpZiBhY2Nlc3NlZCBvdXRzaWRlIHJlbmRlciBwaGFzZS4gV2VcbiAgLy8gaW50ZW50aW9uYWxseSBkb24ndCB0aHJvdyBvdXIgb3duIGVycm9yIGJlY2F1c2UgdGhpcyBpcyBpbiBhIGhvdCBwYXRoLlxuICAvLyBBbHNvIGhlbHBzIGVuc3VyZSB0aGlzIGlzIGlubGluZWQuXG5cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VUcmFuc2l0aW9uKCk7XG59XG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VJZCgpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJZCgpO1xufVxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCk7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbihzY29wZSwgb3B0aW9ucykge1xuICB2YXIgcHJldlRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0ge307XG4gIHZhciBjdXJyZW50VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG5cbiAge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMgPSBuZXcgU2V0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHNjb3BlKCk7XG4gIH0gZmluYWxseSB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uO1xuXG4gICAge1xuICAgICAgaWYgKHByZXZUcmFuc2l0aW9uID09PSBudWxsICYmIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzKSB7XG4gICAgICAgIHZhciB1cGRhdGVkRmliZXJzQ291bnQgPSBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5zaXplO1xuXG4gICAgICAgIGlmICh1cGRhdGVkRmliZXJzQ291bnQgPiAxMCkge1xuICAgICAgICAgIHdhcm4oJ0RldGVjdGVkIGEgbGFyZ2UgbnVtYmVyIG9mIHVwZGF0ZXMgaW5zaWRlIHN0YXJ0VHJhbnNpdGlvbi4gJyArICdJZiB0aGlzIGlzIGR1ZSB0byBhIHN1YnNjcmlwdGlvbiBwbGVhc2UgcmUtd3JpdGUgaXQgdG8gdXNlIFJlYWN0IHByb3ZpZGVkIGhvb2tzLiAnICsgJ090aGVyd2lzZSBjb25jdXJyZW50IG1vZGUgZ3VhcmFudGVlcyBhcmUgb2ZmIHRoZSB0YWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IGZhbHNlO1xudmFyIGVucXVldWVUYXNrSW1wbCA9IG51bGw7XG5mdW5jdGlvbiBlbnF1ZXVlVGFzayh0YXNrKSB7XG4gIGlmIChlbnF1ZXVlVGFza0ltcGwgPT09IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVhZCByZXF1aXJlIG9mZiB0aGUgbW9kdWxlIG9iamVjdCB0byBnZXQgYXJvdW5kIHRoZSBidW5kbGVycy5cbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlbSB0byBkZXRlY3QgYSByZXF1aXJlIGFuZCBidW5kbGUgYSBOb2RlIHBvbHlmaWxsLlxuICAgICAgdmFyIHJlcXVpcmVTdHJpbmcgPSAoJ3JlcXVpcmUnICsgTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgNyk7XG4gICAgICB2YXIgbm9kZVJlcXVpcmUgPSBtb2R1bGUgJiYgbW9kdWxlW3JlcXVpcmVTdHJpbmddOyAvLyBhc3N1bWluZyB3ZSdyZSBpbiBub2RlLCBsZXQncyB0cnkgdG8gZ2V0IG5vZGUnc1xuICAgICAgLy8gdmVyc2lvbiBvZiBzZXRJbW1lZGlhdGUsIGJ5cGFzc2luZyBmYWtlIHRpbWVycyBpZiBhbnkuXG5cbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IG5vZGVSZXF1aXJlLmNhbGwobW9kdWxlLCAndGltZXJzJykuc2V0SW1tZWRpYXRlO1xuICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgIC8vIHdlJ3JlIGluIGEgYnJvd3NlclxuICAgICAgLy8gd2UgY2FuJ3QgdXNlIHJlZ3VsYXIgdGltZXJzIGJlY2F1c2UgdGhleSBtYXkgc3RpbGwgYmUgZmFrZWRcbiAgICAgIC8vIHNvIHdlIHRyeSBNZXNzYWdlQ2hhbm5lbCtwb3N0TWVzc2FnZSBpbnN0ZWFkXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgZXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBoYXZlIGEgTWVzc2FnZUNoYW5uZWwgaW1wbGVtZW50YXRpb24sICcgKyAnc28gZW5xdWV1aW5nIHRhc2tzIHZpYSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aWxsIGZhaWwuICcgKyAnUGxlYXNlIGZpbGUgYW4gaXNzdWUgYXQgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3VlcyAnICsgJ2lmIHlvdSBlbmNvdW50ZXIgdGhpcyB3YXJuaW5nLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4gICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVUYXNrSW1wbCh0YXNrKTtcbn1cblxudmFyIGFjdFNjb3BlRGVwdGggPSAwO1xudmFyIGRpZFdhcm5Ob0F3YWl0QWN0ID0gZmFsc2U7XG5mdW5jdGlvbiBhY3QoY2FsbGJhY2spIHtcbiAge1xuICAgIC8vIGBhY3RgIGNhbGxzIGNhbiBiZSBuZXN0ZWQsIHNvIHdlIHRyYWNrIHRoZSBkZXB0aC4gVGhpcyByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBgYWN0YCBzY29wZXMgb24gdGhlIHN0YWNrLlxuICAgIHZhciBwcmV2QWN0U2NvcGVEZXB0aCA9IGFjdFNjb3BlRGVwdGg7XG4gICAgYWN0U2NvcGVEZXB0aCsrO1xuXG4gICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIFRoaXMgaXMgdGhlIG91dGVybW9zdCBgYWN0YCBzY29wZS4gSW5pdGlhbGl6ZSB0aGUgcXVldWUuIFRoZSByZWNvbmNpbGVyXG4gICAgICAvLyB3aWxsIGRldGVjdCB0aGUgcXVldWUgYW5kIHVzZSBpdCBpbnN0ZWFkIG9mIFNjaGVkdWxlci5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcHJldklzQmF0Y2hpbmdMZWdhY3kgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5O1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgLy8gVXNlZCB0byByZXByb2R1Y2UgYmVoYXZpb3Igb2YgYGJhdGNoZWRVcGRhdGVzYCBpbiBsZWdhY3kgbW9kZS4gT25seVxuICAgICAgLy8gc2V0IHRvIGB0cnVlYCB3aGlsZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgaXMgZXhlY3V0ZWQsIG5vdCBmb3IgdXBkYXRlc1xuICAgICAgLy8gdHJpZ2dlcmVkIGR1cmluZyBhbiBhc3luYyBldmVudCwgYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbGVnYWN5XG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBgYWN0YCBiZWhhdmVkLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHRydWU7XG4gICAgICByZXN1bHQgPSBjYWxsYmFjaygpOyAvLyBSZXBsaWNhdGUgYmVoYXZpb3Igb2Ygb3JpZ2luYWwgYGFjdGAgaW1wbGVtZW50YXRpb24gaW4gbGVnYWN5IG1vZGUsXG4gICAgICAvLyB3aGljaCBmbHVzaGVkIHVwZGF0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlIHNjb3BlIGZ1bmN0aW9uIGV4aXRzLCBldmVuXG4gICAgICAvLyBpZiBpdCdzIGFuIGFzeW5jIGZ1bmN0aW9uLlxuXG4gICAgICBpZiAoIXByZXZJc0JhdGNoaW5nTGVnYWN5ICYmIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeSA9IHByZXZJc0JhdGNoaW5nTGVnYWN5O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgdGhlbmFibGVSZXN1bHQgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBhbiBhc3luYyBmdW5jdGlvbiAoaS5lLiByZXR1cm5lZCBhIHByb21pc2UpLiBXYWl0XG4gICAgICAvLyBmb3IgaXQgdG8gcmVzb2x2ZSBiZWZvcmUgZXhpdGluZyB0aGUgY3VycmVudCBzY29wZS5cblxuICAgICAgdmFyIHdhc0F3YWl0ZWQgPSBmYWxzZTtcbiAgICAgIHZhciB0aGVuYWJsZSA9IHtcbiAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHdhc0F3YWl0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoZW5hYmxlUmVzdWx0LnRoZW4oZnVuY3Rpb24gKHJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ3ZlIGV4aXRlZCB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gUmVjdXJzaXZlbHkgZmx1c2ggdGhlXG4gICAgICAgICAgICAgIC8vIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjYWxsYmFjayB0aHJldyBhbiBlcnJvci5cbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKCFkaWRXYXJuTm9Bd2FpdEFjdCAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHt9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghd2FzQXdhaXRlZCkge1xuICAgICAgICAgICAgICBkaWRXYXJuTm9Bd2FpdEFjdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgZXJyb3IoJ1lvdSBjYWxsZWQgYWN0KGFzeW5jICgpID0+IC4uLikgd2l0aG91dCBhd2FpdC4gJyArICdUaGlzIGNvdWxkIGxlYWQgdG8gdW5leHBlY3RlZCB0ZXN0aW5nIGJlaGF2aW91ciwgJyArICdpbnRlcmxlYXZpbmcgbXVsdGlwbGUgYWN0IGNhbGxzIGFuZCBtaXhpbmcgdGhlaXIgJyArICdzY29wZXMuICcgKyAnWW91IHNob3VsZCAtIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pOycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGVuYWJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJldHVyblZhbHVlID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgbm90IGFuIGFzeW5jIGZ1bmN0aW9uLiBFeGl0IHRoZSBjdXJyZW50IHNjb3BlXG4gICAgICAvLyBpbW1lZGlhdGVseSwgd2l0aG91dCBhd2FpdGluZy5cblxuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAvLyBFeGl0aW5nIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBGbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChfcXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBmbHVzaEFjdFF1ZXVlKF9xdWV1ZSk7XG4gICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH0gLy8gUmV0dXJuIGEgdGhlbmFibGUuIElmIHRoZSB1c2VyIGF3YWl0cyBpdCwgd2UnbGwgZmx1c2ggYWdhaW4gaW5cbiAgICAgICAgLy8gY2FzZSBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZCBieSBhIG1pY3JvdGFzay5cblxuXG4gICAgICAgIHZhciBfdGhlbmFibGUgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy8gQ29uZmlybSB3ZSBoYXZlbid0IHJlLWVudGVyZWQgYW5vdGhlciBgYWN0YCBzY29wZSwgaW4gY2FzZVxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgZG9lcyBzb21ldGhpbmcgd2VpcmQgbGlrZSBhd2FpdCB0aGUgdGhlbmFibGVcbiAgICAgICAgICAgIC8vIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYgKFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmx1c2ggdGhlIHF1ZXVlIHVudGlsIHRoZXJlJ3Mgbm8gcmVtYWluaW5nIHdvcmsuXG4gICAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBbXTtcbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGluc2lkZSBhIG5lc3RlZCBgYWN0YCBzY29wZSwgdGhlIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHJlc29sdmVzLiBUaGUgb3V0ZXIgc2NvcGUgd2lsbCBmbHVzaCB0aGUgcXVldWUuXG4gICAgICAgIHZhciBfdGhlbmFibGUyID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGVuYWJsZTI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKSB7XG4gIHtcbiAgICBpZiAocHJldkFjdFNjb3BlRGVwdGggIT09IGFjdFNjb3BlRGVwdGggLSAxKSB7XG4gICAgICBlcnJvcignWW91IHNlZW0gdG8gaGF2ZSBvdmVybGFwcGluZyBhY3QoKSBjYWxscywgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0JlIHN1cmUgdG8gYXdhaXQgcHJldmlvdXMgYWN0KCkgY2FsbHMgYmVmb3JlIG1ha2luZyBhIG5ldyBvbmUuICcpO1xuICAgIH1cblxuICAgIGFjdFNjb3BlRGVwdGggPSBwcmV2QWN0U2NvcGVEZXB0aDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpIHtcbiAge1xuICAgIHZhciBxdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICBlbnF1ZXVlVGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTm8gYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQuIEZpbmlzaC5cbiAgICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEtlZXAgZmx1c2hpbmcgd29yayB1bnRpbCB0aGVyZSdzIG5vbmUgbGVmdC5cbiAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgaXNGbHVzaGluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBmbHVzaEFjdFF1ZXVlKHF1ZXVlKSB7XG4gIHtcbiAgICBpZiAoIWlzRmx1c2hpbmcpIHtcbiAgICAgIC8vIFByZXZlbnQgcmUtZW50cmFuY2UuXG4gICAgICBpc0ZsdXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICg7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICB9IHdoaWxlIChjYWxsYmFjayAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSWYgc29tZXRoaW5nIHRocm93cywgbGVhdmUgdGhlIHJlbWFpbmluZyBjYWxsYmFja3Mgb24gdGhlIHF1ZXVlLlxuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnNsaWNlKGkgKyAxKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gc3RhcnRUcmFuc2l0aW9uO1xuZXhwb3J0cy51bnN0YWJsZV9hY3QgPSBhY3Q7XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IHVzZURlZmVycmVkVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSWQgPSB1c2VJZDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdCA9IHVzZUluc2VydGlvbkVmZmVjdDtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZTtcbmV4cG9ydHMudXNlVHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb247XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxuPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikscD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIikscT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikscj1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksdD1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksdT1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSx2PVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSx3PVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSx4PVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHk9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksej1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eiYmYVt6XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxudmFyIEI9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEM9T2JqZWN0LmFzc2lnbixEPXt9O2Z1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn1FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O1xuRS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7QyhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPUFycmF5LmlzQXJyYXksSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEs9e2N1cnJlbnQ6bnVsbH0sTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZSl7dmFyIGQsYz17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGQgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilKLmNhbGwoYixkKSYmIUwuaGFzT3duUHJvcGVydHkoZCkmJihjW2RdPWJbZF0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZyljLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2MuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZCBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09Y1tkXSYmKGNbZF09Z1tkXSk7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmMsX293bmVyOksuY3VycmVudH19XG5mdW5jdGlvbiBOKGEsYil7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBPKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1sfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgUD0vXFwvKy9nO2Z1bmN0aW9uIFEoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBSKGEsYixlLGQsYyl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGw6Y2FzZSBuOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxjPWMoaCksYT1cIlwiPT09ZD9cIi5cIitRKGgsMCk6ZCxJKGMpPyhlPVwiXCIsbnVsbCE9YSYmKGU9YS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpLFIoYyxiLGUsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1jJiYoTyhjKSYmKGM9TihjLGUrKCFjLmtleXx8aCYmaC5rZXk9PT1jLmtleT9cIlwiOihcIlwiK2Mua2V5KS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goYykpLDE7aD0wO2Q9XCJcIj09PWQ/XCIuXCI6ZCtcIjpcIjtpZihJKGEpKWZvcih2YXIgZz0wO2c8YS5sZW5ndGg7ZysrKXtrPVxuYVtnXTt2YXIgZj1kK1EoayxnKTtoKz1SKGssYixlLGYsYyl9ZWxzZSBpZihmPUEoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWQrUShrLGcrKyksaCs9UihrLGIsZSxmLGMpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1TdHJpbmcoYSksRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiKyhcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKStcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIik7cmV0dXJuIGh9XG5mdW5jdGlvbiBTKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBkPVtdLGM9MDtSKGEsZCxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChlLGEsYysrKX0pO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTtiLnRoZW4oZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWJ9LGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1ifSk7LTE9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MCxhLl9yZXN1bHQ9Yil9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0LmRlZmF1bHQ7dGhyb3cgYS5fcmVzdWx0O31cbnZhciBVPXtjdXJyZW50Om51bGx9LFY9e3RyYW5zaXRpb246bnVsbH0sVz17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpVLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOlYsUmVhY3RDdXJyZW50T3duZXI6S307ZXhwb3J0cy5DaGlsZHJlbj17bWFwOlMsZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7UyhhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1MoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBTKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU8oYSkpdGhyb3cgRXJyb3IoXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIik7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1FO2V4cG9ydHMuRnJhZ21lbnQ9cDtcbmV4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1XO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIrYStcIi5cIik7dmFyIGQ9Qyh7fSxhLnByb3BzKSxjPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1LLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoYz1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUouY2FsbChiLGYpJiYhTC5oYXNPd25Qcm9wZXJ0eShmKSYmKGRbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7XG5mb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpjLHJlZjprLHByb3BzOmQsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSl7YT17JCR0eXBlb2Y6dSxfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGwsX2RlZmF1bHRWYWx1ZTpudWxsLF9nbG9iYWxOYW1lOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnQsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PU07ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtcbmV4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztleHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnksX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpUfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOngsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnN0YXJ0VHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj1WLnRyYW5zaXRpb247Vi50cmFuc2l0aW9uPXt9O3RyeXthKCl9ZmluYWxseXtWLnRyYW5zaXRpb249Yn19O2V4cG9ydHMudW5zdGFibGVfYWN0PWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9O1xuZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlQ29udGV4dChhKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlSW5zZXJ0aW9uRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VUcmFuc2l0aW9uKCl9O2V4cG9ydHMudmVyc2lvbj1cIjE4LjIuMFwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoXCJkZXZlbG9wbWVudFwiID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBUaGlzIGZpbGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgZnJvbSBgcHJlLXB1Ymxpc2guanNgLlxuICogRG8gbm90IG1hbnVhbGx5IGVkaXQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYXJlYVwiOiB0cnVlLFxuICBcImJhc2VcIjogdHJ1ZSxcbiAgXCJiclwiOiB0cnVlLFxuICBcImNvbFwiOiB0cnVlLFxuICBcImVtYmVkXCI6IHRydWUsXG4gIFwiaHJcIjogdHJ1ZSxcbiAgXCJpbWdcIjogdHJ1ZSxcbiAgXCJpbnB1dFwiOiB0cnVlLFxuICBcImxpbmtcIjogdHJ1ZSxcbiAgXCJtZXRhXCI6IHRydWUsXG4gIFwicGFyYW1cIjogdHJ1ZSxcbiAgXCJzb3VyY2VcIjogdHJ1ZSxcbiAgXCJ0cmFja1wiOiB0cnVlLFxuICBcIndiclwiOiB0cnVlXG59O1xuIiwiZXhwb3J0IGNvbnN0IFRFU1RfRU5EID0gXCJ0ZXN0X2VuZFwiO1xyXG5leHBvcnQgY29uc3QgTEFORyA9ICdsYW5nJztcclxuZXhwb3J0IGNvbnN0IExBTkdTX1RZUEVTID0ge1xyXG4gICAgVUE6ICd1YScsXHJcbiAgICBFTjogJ2VuJyxcclxuICAgIFJVOiAncnUnLFxyXG59IiwiZXhwb3J0IGNvbnN0IFBMQU5FVF9IT1NUID0gd2luZG93LkRFVkVMT1BNRU5UX01PREVcclxuICA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cclxuICA6IFwiaHR0cHM6Ly9wbGFuZXRhZW1haWxzZW5kZXIuYXp1cmV3ZWJzaXRlcy5uZXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFORVRfRU5EUE9JTlQgPSBgJHtQTEFORVRfSE9TVH0vcmVzdWx0YDtcclxuZXhwb3J0IGNvbnN0IFBMQU5FVF9FTkRQT0lOVF9DT05UQUNUID0gYCR7UExBTkVUX0hPU1R9L2NvbnRhY3RgO1xyXG5leHBvcnQgY29uc3QgUExBTkVUX0VORFBPSU5UX0NPVVJTRSA9IGAke1BMQU5FVF9IT1NUfS9jb3Vyc2VgO1xyXG4iLCJleHBvcnQgY29uc3QgUEhPTkVfUkVHRVggPSAvKFxcKFxcZHszfVxcKSkgXFxkezN9IFxcZHsyfSBcXGR7Mn0vO1xyXG5leHBvcnQgY29uc3QgRU1BSUxfUkVHRVggPSAvW15AIFxcdFxcclxcbl0rQFteQCBcXHRcXHJcXG5dK1xcLlteQCBcXHRcXHJcXG5dKy87XHJcbiIsIm1vZHVsZS5leHBvcnRzPXtcclxuICAgIFwibWFpblBhZ2VcIjogXCJNYWluXCIsXHJcbiAgICBcInRlc3RQYWdlXCI6IFwiVGVzdFwiLFxyXG4gICAgXCJzZXJ2aWNlc1BhZ2VcIjogXCJTZXJ2aWNlc1wiLFxyXG4gICAgXCJyZXZpZXdzUGFnZVwiOiBcIlJldmlld3NcIixcclxuICAgIFwiYm9va3NQYWdlXCI6IFwiQm9va3NcIixcclxuICAgIFwiYWJvdXRVc1BhZ2VcIjogXCJBYm91dCBVc1wiLFxyXG4gICAgXCJjb250YWN0UGFnZVwiOiBcIkNvbnRhY3RzXCJcclxufSIsIm1vZHVsZS5leHBvcnRzPXtcclxuICAgIFwibWFpblBhZ2VcIjogXCLQk9C70LDQstC90LDRj1wiLFxyXG4gICAgXCJ0ZXN0UGFnZVwiOiBcItCi0LXRgdGCXCIsXHJcbiAgICBcInNlcnZpY2VzUGFnZVwiOiBcItCj0YHQu9GD0LPQuFwiLFxyXG4gICAgXCJyZXZpZXdzUGFnZVwiOiBcItCe0YLQt9GL0LLRi1wiLFxyXG4gICAgXCJib29rc1BhZ2VcIjogXCLQmtC90LjQs9C4XCIsXHJcbiAgICBcImFib3V0VXNQYWdlXCI6IFwi0J4g0L3QsNGBXCIsXHJcbiAgICBcImNvbnRhY3RQYWdlXCI6IFwi0JrQvtC90YLQsNC60YLRi1wiLFxyXG4gICAgXCJzdGFydFRlc3RcIjogXCLQn9GA0L7QudGC0Lgg0YLQtdGB0YJcIixcclxuICAgIFwibGVhcm5Nb3JlXCI6IFwi0KPQt9C90LDRgtGMINCx0L7Qu9GM0YjQtVwiLFxyXG4gICAgXCJyZWFkTW9yZVwiOiBcItCn0LjRgtCw0YLRjCDQtNCw0LvQtdC1XCIsXHJcbiAgICBcInNpZ25VcFwiOiBcItCX0JDQn9CY0KHQkNCi0KzQodCvXCIsXHJcbiAgICBcInZpc2l0U2l0ZVwiOiBcItCf0J7QodCV0KLQmNCi0Kwg0KHQkNCZ0KJcIixcclxuICAgIFwicHJvY2VlZFwiOiBcItCf0YDQvtC00L7Qu9C20LjRgtGMXCIsXHJcbiAgICBcInNlbmRcIjogXCLQntGC0L/RgNCw0LLQuNGC0YxcIixcclxuICAgIFwidGVzdGluZ1RpdGxlXCI6IFwi0KLQtdGB0YLQuNGA0L7QstCw0L3QuNC1XCIsXHJcbiAgICBcInByb2dyYW1UaXRsZVwiOiBcItCf0YDQvtCz0YDQsNC80LzQsFwiLFxyXG4gICAgXCJ0cmFja1VzXCI6IFwi0J/QvtC00L/QuNGI0LjRgtC10YHRjCDQvdCwINC90LDRgTpcIixcclxuICAgIFwiY29ubmVjdFdpdGhVc1wiOiBcItCh0LLRj9C30LDRgtGM0YHRjyDRgSDQvdCw0LzQuDpcIixcclxuICAgIFwib3VyUGhvbmVzXCI6IFwi0J3QsNGI0Lgg0YLQtdC70LXRhNC+0L3RizpcIixcclxuICAgIFwieW91V2lsbExlYXJuXCI6IFwi0J3QsCDRjdGC0L7QvCDQutGD0YDRgdC1INCy0Ysg0YPQt9C90LDQtdGC0LU6XCIsXHJcbiAgICBcInJldmlld3NcIjogXCLQntGC0LfRi9Cy0YtcIixcclxuICAgIFwi0YFvdXJzZUR1cmF0aW9uXCI6IFwi0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMINC60YPRgNGB0LA6XCIsXHJcbiAgICBcIndlZWtzXCI6IFwiMiDQvdC10LTQtdC70LhcIixcclxuICAgIFwic2NoZWR1bGVcIjogXCLQk9GA0LDRhNC40Lo6XCIsXHJcbiAgICBcImluZGl2aWR1YWxcIjogXCLQmNC90LTQuNCy0LjQtNGD0LDQu9GM0L3Ri9C5XCIsXHJcbiAgICBcInRoZW9yeVwiOiBcItCi0LXQvtGA0LjRj1wiLFxyXG4gICAgXCJwcmFjdGljZVwiOiBcItCf0YDQsNC60YLQuNC60LBcIixcclxuICAgIFwiZm9ybU5hbWVUaXRsZVwiOiBcItCY0LzRjypcIixcclxuICAgIFwiZm9ybVN1Yk5hbWVUaXRsZVwiOiBcItCk0LDQvNC40LvQuNGPKlwiLFxyXG4gICAgXCJmb3JtUGhvbmVUaXRsZVwiOiBcItCi0LXQu9C10YTQvtC9KlwiLFxyXG4gICAgXCJmb3JtRW1haWxUaXRsZVwiOiBcItCt0LvQtdC60YLRgNC+0L3QvdCw0Y8g0L/QvtGH0YLQsFwiLFxyXG4gICAgXCJmb3JtTWVzc1RpdGxlXCI6IFwi0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1XCIsXHJcbiAgICBcImZvcm1NZXNzUGxhY2VcIjogXCLQndCw0L/QuNGI0LjRgtC1INGB0L7QvtCx0YnQtdC90LjQtVwiLFxyXG4gICAgXCJmb3JtRXJyb3JOYW1lXCI6IFwi0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPXCIsXHJcbiAgICBcImZvcm1FcnJvclN1Yk5hbWVcIjogXCLQktCy0LXQtNC40YLQtSDQstCw0YjQtSDRhNCw0LzQuNC70LjRjlwiLFxyXG4gICAgXCJmb3JtRXJyb3JQaG9uZVwiOiBcItCS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3QviDQstCw0Ygg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwXCIsXHJcbiAgICBcImZvcm1FcnJvckVtYWlsXCI6IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdC+INCy0LDRiCBlbWFpbFwiLFxyXG4gICAgXCJmb3JtRXJyb3JcIjogXCLQn9GA0L7QuNC30L7RiNC70LAg0L3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LAuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrRgyDQv9C+0LfQttC1IVwiLFxyXG4gICAgXCJyZWFkTW9yZUFycm93c1wiOiBcItCn0LjRgtCw0YLRjCDQtNCw0LvQtdC1IDxzdmcgdmlld0JveD0nMCAwIDE2IDEyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J005LjcxNzI1IDEuOTUyMDNDOS4zNzU1NCAxLjYxMDMyIDkuMzc1NTQgMS4wNTYzIDkuNzE3MjUgMC43MTQ1OTJDMTAuMDU5IDAuMzcyODg3IDEwLjYxMjkgMC4zNzI4ODcgMTAuOTU0NiAwLjcxNDU5MkwxNS42MjEzIDUuMzgxMjlDMTUuOTYzIDUuNzIzMDEgMTUuOTYzIDYuMjc2OTQgMTUuNjIxMyA2LjYxODY2TDEwLjk1NDYgMTEuMjg1M0MxMC42MTI5IDExLjYyNyAxMC4wNTkgMTEuNjI3IDkuNzE3MjUgMTEuMjg1M0M5LjM3NTU0IDEwLjk0MzYgOS4zNzU1NCAxMC4zODk3IDkuNzE3MjUgMTAuMDQ4TDEyLjg5MDEgNi44NzQ5OEgxLjU4NTk0QzEuMTAyNjkgNi44NzQ5OCAwLjcxMDkzOCA2LjQ4MzIxIDAuNzEwOTM4IDUuOTk5OThDMC43MTA5MzggNS41MTY3NCAxLjEwMjY5IDUuMTI0OTggMS41ODU5NCA1LjEyNDk4SDEyLjg5MDFMOS43MTcyNSAxLjk1MjAzWicvPjwvc3ZnPlwiLFxyXG5cclxuICAgIFwibWFpblBhZ2VUaXRsZVwiOiBcItCT0YDRg9C/0L/QsCDigJzQn9C70LDQvdC10YLQsOKAnVwiLFxyXG4gICAgXCJtYWluUGFnZVN1YlRpdGxlXCI6IFwi0JzRiyDQutC+0LzQsNC90LTQsCDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvQvtCyLCDRgdC/0LXRhtC40LDQu9C40LfQuNGA0YPRjtGJ0LjRhdGB0Y8g0L3QsCDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNC4INC00YPRiNC10LLQvdC+0LPQviDQt9C00L7RgNC+0LLRjNGPLCDRgdCw0LzQvtGB0L7QstC10YDRiNC10YHRgtCy0L7QstCw0L3QuNGPINC4INC70LjRh9C90L7QuSDQvNC+0YLQuNCy0LDRhtC40LhcIixcclxuXHJcbiAgICBcIm1haW5QYWdlTWlzc2lvblN1YlRpdGxlXCI6IFwi0J3QsNGI0LAg0LzQuNGB0YHQuNGPXCIsXHJcbiAgICBcIm1haW5QYWdlTWlzc2lvblRpdGxlXCI6IFwiPGkgY2xhc3M9J3RleCc+PGltZyBjbGFzcz0ndGV4dC1saW5lJyBzcmM9Jy4vaW1hZ2VzL3RleHQtbGluZS5zdmcnIGFsdD0naW1nLWxpbmUnPtCj0YHQuNC70LXQvdC40LUg0LLQu9Cw0LTQtdC70YzRhtC10LIsPC9pPiDRgNGD0LrQvtCy0L7QtNC40YLQtdC70LXQuSA8YnI+INC4INC40YUg0L7QutGA0YPQttC10L3QuNGPINC/0L7RgdGA0LXQtNGB0YLQstC+0Lwg0YPQstC10LvQuNGH0LXQvdC40Y8g0L7QsdGM0LXQvNCwINC20LjQt9C90LXQvdC90L7QuSDRgdC40LvRi1wiLFxyXG5cclxuICAgIFwibWFpblBhZ2VDYXJ0c1RpdGxlMVwiOiBcItCf0YDQvtC50LTQuNGC0LUg0J7QutGB0YTQvtGA0LTRgdC60LjQuSDQotC10YHRglwiLFxyXG4gICAgXCJtYWluUGFnZUNhcnRzRGVzMVwiOiBcItCS0Ysg4oCTINGD0L3QuNC60LDQu9GM0L3Ri9C5INGH0LXQu9C+0LLQtdC6INGBINC/0YDQuNGB0YPRidC40LzQuCDQu9C40YjRjCDQstCw0Lwg0LvQuNGH0L3QvtGB0YLQvdGL0LzQuCDQutCw0YfQtdGB0YLQstCw0LzQuC4g0J3QtdC60L7RgtC+0YDRi9C1INC40Lcg0Y3RgtC40YUg0LrQsNGH0LXRgdGC0LIg0L/QvtC80L7Qs9Cw0Y7RgiDQstCw0Lwg0LTQvtCx0LjQstCw0YLRjNGB0Y8g0LHQvtC70YzRiNC10LPQviDQsiDQttC40LfQvdC4LCDQsiDRgtC+INCy0YDQtdC80Y8g0LrQsNC6INC00YDRg9Cz0LjQtSDQvNC10YjQsNGO0YIg0LLQsNC8INC4INC90LUg0L/QvtC30LLQvtC70Y/RjtGCINC/0L7Qu9C90L7RgdGC0YzRjiAuLi5cIixcclxuICAgIFwibWFpblBhZ2VDYXJ0c0RlczJcIjogXCLQn9C+0LzQvtGJ0Ywg0YEg0YPQu9GD0YfRiNC10L3QuNC10Lwg0LHQuNC30L3QtdGB0LAg0L/Rg9GC0LXQvCDQvtCx0YnQtdC90LjRjyDQuCDQtNC+0LLQtdC00LXQvdC40LXQvCDQtNC10LvQsCDQtNC+INC60L7QvdGG0LAuIDxicj4g0JzRiyDQv9GA0LjQtdC00LXQvCDQuCDQv9C+0LzQvtC20LXQvCDQv9GA0L7QstC10YHRgtC4INCS0LDRiNC40YUg0YHQvtGC0YDRg9C00L3QuNC60L7QsiDQv9C+INGN0YLQvtC80YMg0LrRg9GA0YHRgy4g0JLQsNC8INC90LUg0L3QsNC00L4g0L7RgtGA0YvQstCw0YLRjCDQuNGFINC+0YIg0YDQsNCx0L7RgtGLIC4uLlwiLFxyXG5cclxuICAgIFwibWFpblBhZ2VIaXN0b3J5VGl0bGVcIjogXCLQndCw0YjQsCDQuNGB0YLQvtGA0LjRj1wiLFxyXG5cclxuICAgIFwidGVzdFBhZ2VTZWNNYWluVGl0bGVcIjogXCLQntC60YHRhNC+0YDQtNGB0LrQuNC5INGC0LXRgdGCXCIsXHJcbiAgICBcInRlc3RQYWdlU2VjTWFpblN1YlRpdGxlXCI6IFwi0KfRgtC+0LEg0YPQt9C90LDRgtGMINGD0LfQvdCw0YLRjCDQviDRgdCy0L7QuNGFINGB0L/QvtGB0L7QsdC90L7RgdGC0Y/RhSDQv9GA0L7QudC00LjRgtC1INCx0LXRgdC/0LvQsNGC0L3Ri9C5INCe0LrRgdGE0L7RgNC00YHQutC40Lkg0YLQtdGB0YIg0L7RhtC10L3QutC4INC70LjRh9C90L7RgdGC0LghXCIsXHJcblxyXG4gICAgXCJ0ZXN0UGFnZU1haW5UaXRsZVwiOiBcItCe0LrRgdGE0L7RgNC00YHQutC40Lkg0YLQtdGB0YIgPGJyPiDQsNC90LDQu9C40LfQsCDQu9C40YfQvdC+0YHRgtC4XCIsXHJcblxyXG4gICAgXCJ0ZXN0UGFnZVRleHQxVGl0bGVcIjogXCLQndC10LzQvdC+0LPQviDQniDQotC10YHRgtC1XCIsXHJcbiAgICBcInRlc3RQYWdlVGV4dDFEZXNcIjogXCLQktGLIOKAkyDRg9C90LjQutCw0LvRjNC90YvQuSDRh9C10LvQvtCy0LXQuiDRgSDQv9GA0LjRgdGD0YnQuNC80Lgg0LvQuNGI0Ywg0LLQsNC8INC70LjRh9C90L7RgdGC0L3Ri9C80Lgg0LrQsNGH0LXRgdGC0LLQsNC80LguINCd0LXQutC+0YLQvtGA0YvQtSDQuNC3INGN0YLQuNGFINC60LDRh9C10YHRgtCyINC/0L7QvNC+0LPQsNGO0YIg0LLQsNC8INC00L7QsdC40LLQsNGC0YzRgdGPINCx0L7Qu9GM0YjQtdCz0L4g0LIg0LbQuNC30L3QuCwg0LIg0YLQviDQstGA0LXQvNGPINC60LDQuiDQtNGA0YPQs9C40LUg0LzQtdGI0LDRjtGCINCy0LDQvCDQuCDQvdC1INC/0L7Qt9Cy0L7Qu9GP0Y7RgiDQv9C+0LvQvdC+0YHRgtGM0Y4g0YDQtdCw0LvQuNC30L7QstCw0YLRjCDRgdCy0L7QuSDQuNGB0YLQuNC90L3Ri9C5INC/0L7RgtC10L3RhtC40LDQuy4gPGJyPiA8YnI+INCS0LDRiNC4INC70LjRh9C90L7RgdGC0L3Ri9C1INC60LDRh9C10YHRgtCy0LAg0L7Qv9GA0LXQtNC10LvRj9GO0YIg0LLQsNGIINCx0YPQtNGD0YnQuNC5INGD0YHQv9C10YUg0Lgg0YHRh9Cw0YHRgtGM0LUuINCd0LDRh9C40L3QsNGPINGBIDE5NjAg0LPQvtC00LAgwqvQntC60YHRhNC+0YDQtNGB0LrQuNC5INGC0LXRgdGCINCw0L3QsNC70LjQt9CwINC70LjRh9C90L7RgdGC0LjCuyDQv9GA0L7RiNC70Lgg0YEg0L/QvtC70YzQt9C+0Lkg0LTQu9GPINGB0LXQsdGPINC80LjQu9C70LjQvtC90Ysg0LvRjtC00LXQuS4g0K3RgtC+INC10LTQuNC90YHRgtCy0LXQvdC90YvQuSDQsiDRgdCy0L7RkdC8INGA0L7QtNC1INGC0LXRgdGCLCDQutC+0YLQvtGA0YvQuSDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgiDRgtC+0YfQvdGL0Lkg0LDQvdCw0LvQuNC3LlwiLFxyXG5cclxuICAgIFwidGVzdFBhZ2VUZXh0MlRpdGxlXCI6IFwi0J/QvtC30L3QsNC50YLQtSDQvdCw0YHRgtC+0Y/RidC10LPQviDRgdC10LHRj1wiLFxyXG4gICAgXCJ0ZXN0UGFnZVRleHQyRGVzXCI6IFwi0J3QsNGBINGH0LDRgdGC0L4g0YPRh9Cw0YIg0YLQvtC80YMsINGH0YLQviDQu9C40YfQvdC+0YHRgtGMIOKAkyDRjdGC0L4g0L3QsNCx0L7RgCDQs9C10L3QtdGC0LjRh9C10YHQutC40YUg0YfQtdGA0YIsINC60L7RgtC+0YDRi9C1INC90LXQstC+0LfQvNC+0LbQvdC+INC40LfQvNC10L3QuNGC0YwsINGC0LDQuiDRh9GC0L4g0LLQsNC8INC/0YDQvtGB0YLQviDQvtGB0YLQsNGR0YLRgdGPINC90LDRg9GH0LjRgtGM0YHRjyDCq9C20LjRgtGMINGBINGN0YLQuNC8wrsuINCt0YLQviDQv9C+0L/RgNC+0YHRgtGDINC90LXQv9GA0LDQstC00LAuINCd0LAg0YHQsNC80L7QvCDQtNC10LvQtSDQstGLINC80L7QttC10YLQtSDQuNC30LzQtdC90LjRgtGMINGB0LLQvtC4INC70LjRh9C90L7RgdGC0L3Ri9C1INC60LDRh9C10YHRgtCy0LAg0Lgg0YHRgtCw0YLRjCDQvdCw0LzQvdC+0LPQviDQu9GD0YfRiNC1INC4INGB0YfQsNGB0YLQu9C40LLQtdC1LCDRh9GC0L7QsdGLINGB0L/RgNCw0LLQu9GP0YLRjNGB0Y8g0YEg0L/RgNC+0LHQu9C10LzQsNC80Lgg0LIg0LbQuNC30L3QuCDRg9Cy0LXRgNC10L3QvdC+INC4INC70LXQs9C60L4sINCx0YPQtNGD0YfQuCDQv9C+0LjRgdGC0LjQvdC1INGB0LDQvNC40Lwg0YHQvtCx0L7QuS5cIixcclxuICAgIFwidGVzdFBhZ2VUZXh0Mkxpc3QxXCI6IFwi0KPQt9C90LDQudGC0LUg0YHQstC+0Lgg0L/RgNC+0LHQu9C10LzQvdGL0LUg0L7QsdC70LDRgdGC0Lgg0Lgg0LLRi9GP0YHQvdC40YLQtSwg0LrQsNC60L7QsiDQstCw0Ygg0YPRgNC+0LLQtdC90Ywg0YHRh9Cw0YHRgtGM0Y8sINGD0LLQtdGA0LXQvdC90L7RgdGC0Lgg0LIg0YHQtdCx0LUsINGB0YLQsNCx0LjQu9GM0L3QvtGB0YLQuCwg0LAg0YLQsNC60LbQtSDQvNC90L7Qs9C+0LUg0LTRgNGD0LPQvtC1LlwiLFxyXG4gICAgXCJ0ZXN0UGFnZVRleHQyTGlzdDJcIjogXCLQo9C30L3QsNC50YLQtSwg0LrQsNC6INCy0LDRiNC4INC70LjRh9C90YvQtSDQutCw0YfQtdGB0YLQstCwINCy0LvQuNGP0Y7RgiDQvdCwINCy0LDRiNGDINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0L/QvtC00LTQtdGA0LbQuNCy0LDRgtGMINC+0YLQvdC+0YjQtdC90LjRjyDRgSDQtNGA0YPQs9C40LzQuCDQu9GO0LTRjNC80LguXCIsXHJcbiAgICBcInRlc3RQYWdlVGV4dDJMaXN0M1wiOiBcItCj0LfQvdCw0LnRgtC1LCDQutCw0LrQvtCy0Ysg0LLQsNGI0Lgg0YHQuNC70YzQvdGL0LUg0YHRgtC+0YDQvtC90Ysg0Lgg0LrQsNC6INC40YUg0YPQutGA0LXQv9C40YLRjCwg0YfRgtC+0LHRiyDQstGLINC80L7Qs9C70Lgg0LTQvtCx0LjQstCw0YLRjNGB0Y8g0LIg0LbQuNC30L3QuCDQsdC+0LvRjNGI0LXQs9C+LlwiLFxyXG5cclxuICAgIFwidGVzdFBhZ2VUZXh0M1RpdGxlXCI6IFwi0KfRgtC+INCx0YPQtNC10YIg0L/QvtGB0LvQtSDQv9GA0L7QudC00LXQvdC40Y8g0YLQtdGB0YLQsD9cIixcclxuICAgIFwidGVzdFBhZ2VUZXh0M0Rlc1wiOiBcItCf0L7RgdC70LUg0KLQtdGB0YLQsCDQvdCw0YjQuCDRgdC/0LXRhtC40LDQu9C40YHRgtGLINGB0LLRj9C20YPRgtGB0Y8g0YEg0JLQsNC80Lgg0YPQtNC+0LHQvdGL0Lwg0LTQu9GPINCy0LDRgSDRgdC/0L7RgdC+0LHQvtC8ICjQv9C+INGC0LXQu9C10YTQvtC90YMsIFpvb20g0LjQu9C4IFNreXBlKS4g0JHRg9C00LXRgiDQv9GA0L7QstC10LTQtdC90LAg0LHQtdGB0L/Qu9Cw0YLQvdCw0Y8g0LvQuNGH0L3QsNGPINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjyDQsiDRhdC+0LTQtSDQutC+0YLQvtGA0L7QuSDQuNC3INGA0LXQt9GD0LvRjNGC0LDRgtC+0LIg0YLQtdGB0YLQsCDQsdGD0LTRg9GCINC00LDQvdGLINC/0YDQsNC60YLQuNGH0LXRgdC60LjQtSDRgNC10LrQvtC80LXQvdC00LDRhtC40Lgg0LrQvtGC0L7RgNGL0LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YIg0LLQsNGI0LjQvCDRgtGA0LXQsdC+0LLQsNC90LjRj9C8LiDQoNC10LfRg9C70YzRgtCw0YLRiyDRgtC10YHRgtCwINCy0YvRj9Cy0Y/RgiDQstCw0YjQtSDQvNC90LXQvdC40LUg0L4g0YHQtdCx0LUuXCIsXHJcbiAgICBcclxuICAgIFwibWFuYWdlbWVudFBhZ2VNYWluU3ViVGl0bGVcIjogXCLQn9C+0LzQvtGJ0Ywg0YEg0YPQu9GD0YfRiNC10L3QuNC10Lwg0LHQuNC30L3QtdGB0LAg0L/Rg9GC0LXQvCDQvtCx0YnQtdC90LjRjyDQuCDQtNC+0LLQtdC00LXQvdC40LXQvCDQtNC10LvQsCDQtNC+INC60L7QvdGG0LBcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VUZWFtVGl0bGVcIjogXCLQmtC+0LzQsNC90LTQsCDQvdCw0YjQuNGFINGB0L/QtdGG0LjQsNC70LjRgdGC0L7QsiDQs9C+0YLQvtCy0LAg0L/RgNC40LXRhdCw0YLRjCDQuiDQstCw0LxcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VUZWFtRGVzXCI6IFwi0JzRiyDQv9GA0LjQtdC00LXQvCDQuCDQv9C+0LzQvtC20LXQvCDQv9GA0L7QstC10YHRgtC4INCS0LDRiNC40YUg0YHQvtGC0YDRg9C00L3QuNC60L7QsiDQv9C+INGN0YLQvtC80YMg0LrRg9GA0YHRgy4g0JLQsNC8INC90LUg0L3QsNC00L4g0L7RgtGA0YvQstCw0YLRjCDQuNGFINC+0YIg0YDQsNCx0L7RgtGLINC4INC+0YDQs9Cw0L3QuNC30L7QstCw0YLRjCDQuNGFINC/0YDQuNC10LfQtCAtINC80Ysg0L/RgNC40LXQtNC10Lwg0Log0JLQsNC8INGB0LDQvNC4LlwiLFxyXG5cclxuICAgIFwibWFuYWdlbWVudFBhZ2VXaG9UaXRsZVwiOiBcIjxzcGFuPtCa0L7QvNGDINC/0L7QtNGF0L7QtNC40YI8L3NwYW4+INGN0YLQvtGCINC60YPRgNGBXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvU3ViVGl0bGVcIjogXCLQktGB0LXQvCwg0LTQu9GPINC60L7Qs9C+INCy0LDQttC90L4g0L/QvtC70YPRh9Cw0YLRjCDRgNC10LfRg9C70YzRgtCw0YIg0Lgg0Y3RhNGE0LXQutGC0LjQstC90L4g0L7QsdGJ0LDRgtGM0YHRjyDRgSDQu9GO0LTRjNC80Lgg0LIg0LHQuNC30L3QtdGB0LVcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VXaG9MaXN0MVwiOiBcItCh0L7QsdGB0YLQstC10L3QvdC40LrRgyDQsdC40LfQvdC10YHQsFwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZVdob0xpc3QyXCI6IFwi0KLQntCfLdC80LXQvdC10LTQttC10YDRg1wiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZVdob0xpc3QzXCI6IFwi0J/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GOXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvTGlzdDRcIjogXCLQnNC10L3QtdC00LbQtdGA0YMg0YHRgNC10LTQvdC10LPQviDQt9Cy0LXQvdCwXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvTGlzdDVcIjogXCLQoNGD0LrQvtCy0L7QtNC40YLQtdC70Y4g0L7RgtC00LXQu9CwINC/0YDQvtC00LDQtlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZVdob0xpc3Q2XCI6IFwiSFIt0LzQtdC90LXQtNC20LXRgNGDXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvTGlzdDdcIjogXCLQoNGD0LrQvtCy0L7QtNC40YLQtdC70Y4g0L/RgNC+0LXQutGC0L7QslwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZVdob0xpc3Q4XCI6IFwi0JzQtdC90LXQtNC20LXRgNGDINC/0L4g0YDQsNCx0L7RgtC1INGBINC60LvQuNC10L3RgtCw0LzQuFwiLFxyXG5cclxuICAgIFwibWFuYWdlbWVudFBhZ2VEaXNjb3V0VGl0bGVcIjogXCLQl9Cw0L/QuNGI0LjRgdGMINGB0LXQudGH0LDRgSA8YnI+INC4INC/0L7Qu9GD0YfQuCA8c3Bhbj7RgdC60LjQtNC60YMgMTUlPC9zcGFuPlwiLFxyXG5cclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMVRpdGxlXCI6IFwi0JrQsNC6INC00L7QstC10YHRgtC4INC00LXQu9C+INC00L4g0LrQvtC90YbQsFwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxU3ViVGl0bGVcIjogXCLQndCw0LLRi9C60LgsINC/0YDQuNC+0LHRgNC10YLQtdC90L3Ri9C1INCyINC60L7QvdGG0LUg0LrRg9GA0YFhOlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxTGlzdDFcIjogXCLQlNC+0LLQvtC00LjRgtGMINGA0LDQsdC+0YLRgyDQs9GA0YPQv9C/0Ysg0LTQviDQutC+0L3RhtCwXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0MlwiOiBcItCf0YDQtdGB0LXQutCw0YLRjCDQvdCwINC60L7RgNC90Y4g0LjRgdC60LDQttC10L3QuNGPINCS0LDRiNC40YUg0YDQsNGB0L/QvtGA0Y/QttC10L3QuNC5XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0M1wiOiBcItCU0L7QsdC40LLQsNGC0YzRgdGPINCy0YvQv9C+0LvQvdC10L3QuNGPINC/0YDQuNC60LDQt9C+0LIg0Lgg0L/RgNC+0YHRjNCxINCx0LXQtyDQt9Cw0LTQtdGA0LbQtdC6XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0NFwiOiBcItCU0LXQu9C10LPQuNGA0L7QstCw0YLRjCDQuCDRgtC+0YfQvdC+INC30L3QsNGC0YwsINGH0YLQviDQt9Cw0LTQsNGH0LAg0LHRg9C00LXRgiDQstGL0L/QvtC70L3QtdC90LBcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMUxpc3Q1XCI6IFwi0J3QtSDQtNC+0L/Rg9GB0LrQsNGC0Ywg0L3QtdC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LfQsNC00LDRh9C4LCDQv9C+0YHRgtCw0LLQu9C10L3QvdC+0Lkg0LTRgNGD0LPQvtC80YMg0YfQtdC70L7QstC10LrRg1wiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxTGlzdDZcIjogXCLQlNC+0LHQuNCy0LDRgtGM0YHRjyDQsdGL0YHRgtGA0L7Qs9C+INC4INC60L7RgNGA0LXQutGC0L3QvtCz0L4g0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQvtGCINCz0YDRg9C/0L/RiyDQu9GO0LTQtdC5XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0N1wiOiBcItCa0L7QvNGE0L7RgNGC0L3QviDRh9GD0LLRgdGC0LLQvtCy0LDRgtGMINGB0LXQsdGPINCyINGB0LLQvtC10Lwg0YDQsNCx0L7Rh9C10Lwg0L7QutGA0YPQttC10L3QuNC4INC4INGBINC70LXQs9C60L7RgdGC0YzRjiDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDRgtGMINC10LPQvlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxTGlzdDhcIjogXCLQlNC+0LHQuNCy0LDRgtGM0YHRjywg0YfRgtC+0LHRiyDQt9Cw0LTQsNGH0LAg0LHRi9C70LAg0LLRi9C/0L7Qu9C90LXQvdCwLCDQvdC10YHQvNC+0YLRgNGPINC90LAg0YLQviwg0YfRgtC+INC00YDRg9Cz0LjQtSDQu9GO0LTQuCDRgdC+0LfQtNCw0Y7RgiDQv9C+0LzQtdGF0Lgg0Lgg0L3QtSDRhdC+0YLRj9GCINGN0YLQvtCz0L4g0LTQtdC70LDRgtGMXCIsXHJcblxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syVGl0bGVcIjogXCLQo9C70YPRh9GI0LXQvdC40LUg0LHQuNC30L3QtdGB0LAg0L/Rg9GC0LXQvCDQvtCx0YnQtdC90LjRj1wiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syU3ViVGl0bGVcIjogXCLQndCw0LLRi9C60LgsINC/0YDQuNC+0LHRgNC10YLQtdC90L3Ri9C1INCyINC60L7QvdGG0LUg0LrRg9GA0YFhOlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syTGlzdDFcIjogXCJI0LDRh9Cw0YLRjCDRgNCw0LfQs9C+0LLQvtGAINGBINC70Y7QsdGL0Lwg0YfQtdC70L7QstC10LrQvtC8XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJMaXN0MlwiOiBcItCU0L7QvdC+0YHQuNGC0Ywg0YHQstC+0LUg0YHQvtC+0LHRidC10L3QuNGPINC00L4g0LTRgNGD0LPQvtCz0L4g0YfQtdC70L7QstC10LrQsCwg0L3QtdGB0LzQvtGC0YDRjyDQvdCwINC/0L7QvNC10YXQuFwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syTGlzdDNcIjogXCLQktC10YDQvdGD0YLRjCDRh9C10LvQvtCy0LXQutCwINC6INGC0LXQvNC1INGA0LDQt9Cz0L7QstC+0YDQsFwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syTGlzdDRcIjogXCLQoNCw0LfQs9C+0LLQvtGA0LjRgtGMINGH0LXQu9C+0LLQtdC60LAsINC90LUg0LbQtdC70LDRjtGJ0LXQs9C+INC+0LHRidCw0YLRjNGB0Y9cIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMkxpc3Q1XCI6IFwi0J/QtdGA0LXQstC10YHRgtC4INGA0LDQt9Cz0L7QstC+0YAg0L3QsCDQtNGA0YPQs9GD0Y4g0YLQtdC80YNcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMkxpc3Q2XCI6IFwi0J/RgNC10LrRgNCw0YLQuNGC0Ywg0YDQsNGB0YHQv9GA0L7RgdGLLCDQutC+0LPQtNCwINC10YHRgtGMINC00LXQu9CwINC/0L7QstCw0LbQvdC10LVcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMkxpc3Q3XCI6IFwi0JTQvtCx0LjRgtGM0YHRjyDQvtGC0LLQtdGC0LAg0L3QsCDQstC+0L/RgNC+0YFcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMkxpc3Q4XCI6IFwi0KPRgdGC0YDQsNC90LjRgtGMINGA0LDRgdGB0YLRgNC+0LnRgdGC0LLQviwg0LLQvtC30L3QuNC60YjQtdC1INCyINGF0L7QtNC1INC+0LHRidC10L3QuNGPXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJMaXN0OVwiOiBcItCU0L7QsdC40LLQsNGC0YzRgdGPLCDRh9GC0L7QsdGLINC00YDRg9Cz0L7QuSDRh9C10LvQvtCy0LXQuiDQv9GA0L7QtNC+0LvQttCw0Lsg0LPQvtCy0L7RgNC40YLRjCwg0LAg0L3QtSDQt9Cw0LzRi9C60LDQu9GB0Y8g0Lgg0L/RgNC10LrRgNCw0YnQsNC7INC+0LHRidC10L3QuNC1XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJMaXN0MTBcIjogXCLQl9Cw0LLQtdGA0YjQuNGC0Ywg0YDQsNC30LPQvtCy0L7RgCDRgtCw0LosINGH0YLQvtCxINCy0YHQtSDQvtGB0YLQsNC70LjRgdGMINC00L7QstC+0LvRjNC90Ysg0L7QsdGJ0LXQvdC40LXQvFwiLFxyXG5cclxuICAgIFwibWFuYWdlbWVudFBhZ2VFZHVjYXRpb25UaXRsZVwiOiBcItCa0LDQuiDQv9GA0L7RhdC+0LTQuNGCINC+0LHRg9GH0LXQvdC40LU6XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlRWR1Y2F0aW9uRGVzXCI6IFwi0J3QsNGIINC60YPRgNGBINGA0LDRgdGH0LjRgtCw0L0g0L3QsCDQvtGC0YDQsNCx0L7RgtC60YMg0LIg0L/QsNGA0LDRhSDQuCDQs9GA0YPQv9C/0LDRhS4g0KfQtdC8INCx0L7Qu9GM0YjQtSDQsdGD0LTQtdGCINCy0LDRiNCwINCz0YDRg9C/0L/QsCwg0YLQtdC8INCy0LXRgdC10LvQtdC1LCDQuCDRgtC10Lwg0YHQu9Cw0LbQsNC90L3QtdC1INGN0YLQuCDRgNC10LHRj9GC0LAg0LHRg9C00YPRgiDQsiDQtNCw0LvRjNC90LXQudGI0LXQvCDQstGL0L/QvtC70L3Rj9GC0Ywg0LrQvtC80LDQvdC00L3Ri9C1INC30LDQtNCw0YfQuCFcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VIb2xkaW5nRGVzMVwiOiBcIjxzcGFuPsKrU290bmlrb3ZHcm91cMK7PC9zcGFuPiDigJQg0Y3RgtC+INC+0LTQvdC+INC40Lcg0L3QsNC/0YDQsNCy0LvQtdC90LjQuSDRhdC+0LvQtNC40L3Qs9CwLiDQpdC+0LvQtNC40L3Qs9GDIDI1INC70LXRgiwg0LIg0L3QtdC8INGA0LDQsdC+0YLQsNC10YIg0LHQvtC70LXQtSAzNTAg0YHQvtGC0YDRg9C00L3QuNC60L7Qsi5cIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VIb2xkaW5nRGVzMlwiOiBcIjxzcGFuPtCm0LXQu9GMIMKrU290bmlrb3ZHcm91cMK7PC9zcGFuPiDigJQg0L/QvtC80L7Qs9Cw0YLRjCDQstC70LDQtNC10LvRjNGG0LDQvCwg0JjRgdC/0L7Qu9C90LjRgtC10LvRjNC90YvQvCDQtNC40YDQtdC60YLQvtGA0LDQvCDQuCDQotCe0J8t0LzQtdC90LXQtNC20LXRgNCw0Lwg0LrQvtC80L/QsNC90LjQuSDQstGL0LLQvtC00LjRgtGMINC40YUg0LHQuNC30L3QtdGB0Ysg0L3QsCDQvdC+0LLRi9C5INGD0YDQvtCy0LXQvdGMINGA0LDQt9Cy0LjRgtC40Y8sINC+0YHRg9GJ0LXRgdGC0LLQu9GP0Y8g0L/QtdGA0LXRhdC+0LQg0L7RgiDCq9GB0LXQvNC10LnQvdGL0YUg0LrQvtC80L/QsNC90LjQucK7INC6IMKr0YHQuNGB0YLQtdC80L3QvtC80YMg0LHQuNC30L3QtdGB0YPCuy5cIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VIb2xkaW5nTmFtZVwiOiBcItCV0LLQs9C10L3QuNC5INCh0L7RgtC90LjQutC+0LJcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VIb2xkaW5nUG9zaXRpb25cIjogXCLQktC70LDQtNC10LvQtdGGINGF0L7Qu9C00LjQvdCz0LAgwqtTb3RuaWtvdmdyb3VwwrtcIixcclxuXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlRm9ybVRpdGxlXCI6IFwi0JfQsNC/0LjRgdCw0YLRjNGB0Y8g0L3QsCDQutGD0YDRgVwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VOYXYxVGl0bGVcIjogXCLQoNC10LzQvtC90YIg0LbQuNC30L3QuCA8c3ZnIHZpZXdCb3g9JzAgMCAxMiA4JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J001Ljk5IDcuNDI1TDExLjI5MzEgMi4xMjEwM0MxMS42ODM1IDEuNzMwNTQgMTEuNjgzNSAxLjA5NzQ5IDExLjI5MyAwLjcwNzAyOUMxMC45MDI1IDAuMzE2NTQ4IDEwLjI2OTUgMC4zMTY1NDggOS44Nzg5NyAwLjcwNzAzTDUuOTg2IDQuNkwyLjA5OTczIDAuNzA3ODA4QzEuNzA5NSAwLjMxNjk4NCAxLjA3NjI2IDAuMzE2NzQyIDAuNjg1NzMxIDAuNzA3MjY5QzAuMjk1NDE0IDEuMDk3NTkgMC4yOTU0MTQgMS43MzA0MSAwLjY4NTczMSAyLjEyMDczTDUuOTkgNy40MjVaJy8+PC9zdmc+XCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjJUaXRsZVwiOiBcItCf0YDQvtCz0YDQsNC80LzQsCDCq9Ce0YfQuNGJ0LXQvdC40LXCuyA8c3ZnIHZpZXdCb3g9JzAgMCAxMiA4JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J001Ljk5IDcuNDI1TDExLjI5MzEgMi4xMjEwM0MxMS42ODM1IDEuNzMwNTQgMTEuNjgzNSAxLjA5NzQ5IDExLjI5MyAwLjcwNzAyOUMxMC45MDI1IDAuMzE2NTQ4IDEwLjI2OTUgMC4zMTY1NDggOS44Nzg5NyAwLjcwNzAzTDUuOTg2IDQuNkwyLjA5OTczIDAuNzA3ODA4QzEuNzA5NSAwLjMxNjk4NCAxLjA3NjI2IDAuMzE2NzQyIDAuNjg1NzMxIDAuNzA3MjY5QzAuMjk1NDE0IDEuMDk3NTkgMC4yOTU0MTQgMS43MzA0MSAwLjY4NTczMSAyLjEyMDczTDUuOTkgNy40MjVaJy8+PC9zdmc+XCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNUaXRsZVwiOiBcItCa0YPRgNGB0Ysg0L/QviDRg9C70YPRh9GI0LXQvdC40Y4g0LbQuNC30L3QuCA8c3ZnIHZpZXdCb3g9JzAgMCAxMiA4JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J001Ljk5IDcuNDI1TDExLjI5MzEgMi4xMjEwM0MxMS42ODM1IDEuNzMwNTQgMTEuNjgzNSAxLjA5NzQ5IDExLjI5MyAwLjcwNzAyOUMxMC45MDI1IDAuMzE2NTQ4IDEwLjI2OTUgMC4zMTY1NDggOS44Nzg5NyAwLjcwNzAzTDUuOTg2IDQuNkwyLjA5OTczIDAuNzA3ODA4QzEuNzA5NSAwLjMxNjk4NCAxLjA3NjI2IDAuMzE2NzQyIDAuNjg1NzMxIDAuNzA3MjY5QzAuMjk1NDE0IDEuMDk3NTkgMC4yOTU0MTQgMS43MzA0MSAwLjY4NTczMSAyLjEyMDczTDUuOTkgNy40MjVaJy8+PC9zdmc+XCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjFTdWJUaXRsZTFcIjogXCLQntC/0YDQtdC00LXQu9C10L3QuNC1XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2MVN1YlRpdGxlMlwiOiBcItCm0LXQu9GMXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2MVN1YlRpdGxlM1wiOiBcItCU0LXRgtCw0LvRjNC90L4g0L4g0L/RgNC+0LPRgNCw0LzQvNC1XCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjJTdWJUaXRsZTFcIjogXCLQn9C+0YfQtdC80YMg0LLRiyDQvdC1INGC0LDQuiDRjdC90LXRgNCz0LjRh9C90Ys/XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2MlN1YlRpdGxlMlwiOiBcItCm0LXQu9GMINC/0YDQvtCz0YDQsNC80LzRi1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjJTdWJUaXRsZTNcIjogXCLQmtCw0Log0L/RgNC+0YXQvtC00LjRgiDQv9GA0L7Qs9GA0LDQvNC80LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYyU3ViVGl0bGU0XCI6IFwi0J/RgNC+0LTRg9C60YIg0L/RgNC+0LPRgNCw0LzQvNGLXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTFcIjogXCLQntC/0LjRgdCw0L3QuNC1XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMlwiOiBcItCa0LDQuiDRgdC10LHRjyDQvNC+0YLQuNCy0LjRgNC+0LLQsNGC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUzXCI6IFwi0KTQvtGA0LzRg9C70Ysg0LTQu9GPINC20LjQt9C90LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGU0XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0YPRgdC/0LXRiNC90L7QuSDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlNVwiOiBcItCt0YTRhNC10LrRgtC40LLQvdC+0LUg0YPQv9GA0LDQstC70LXQvdC40LUg0LLRgNC10LzQtdC90LXQvFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTZcIjogXCLQn9C+0YHRgtCw0L3QvtCy0LrQsCDQuCDQtNC+0YHRgtC40LbQtdC90LjQtSDRhtC10LvQtdC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlN1wiOiBcItCY0L3RgdGC0YDRg9C80LXQvdGC0Ysg0Y3RhNGE0LXQutGC0LjQstC90L7Qs9C+INC70LjQtNC10YDRgdGC0LLQsFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZThcIjogXCLQmNC90YHRgtGA0YPQvNC10L3RgtGLINC00LvRjyDQv9GA0LXQvtC00L7Qu9C10L3QuNGPINGE0LjQvdCw0L3RgdC+0LLQvtCz0L4g0YHRgtGA0LXRgdGB0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGU5XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0LTQvtGB0YLQuNC20LXQvdC40Y8g0YTQuNC90LDQvdGB0L7QstC+0Lkg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMTBcIjogXCLQn9GA0LjQvdGG0LjQv9GLINC/0YDQvtGG0LLQtdGC0LDQvdC40Y9cIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxMVwiOiBcItCh0L7Qt9C00LDQvdC40LUg0YPRgdC/0LXRiNC90L7Qs9C+INGB0YPQv9GA0YPQttC10YHRgtCy0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxMlwiOiBcItCa0LDQuiDRgdC+0YXRgNCw0L3QuNGC0Ywg0YPRgdC/0LXRiNC90YvQtSDRgdGD0L/RgNGD0LbQtdGB0LrQuNC1INC+0YLQvdC+0YjQtdC90LjRj1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTEzXCI6IFwi0JrQsNC6INGB0L/QsNGB0YLQuCDRgdGD0L/RgNGD0LbQtdGB0LrQuNC1INC+0YLQvdC+0YjQtdC90LjRj1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTE0XCI6IFwi0JrQsNC6INGA0L7QtNC40YLRjCDQuCDRgNCw0YHRgtC40YLRjCDRgdGH0LDRgdGC0LvQuNCy0L7Qs9C+INC80LvQsNC00LXQvdGG0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxNVwiOiBcItCa0LDQuiDRhdC+0YDQvtGI0L4g0LLQvtGB0L/QuNGC0YvQstCw0YLRjCDQtNC10YLQtdC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMTZcIjogXCLQmtCw0Log0YEg0YPRgdC/0LXRhdC+0Lwg0LLQvtGB0L/QuNGC0YvQstCw0YLRjCDQtNC10YLQtdC5INC4INC/0L7QtNGA0L7RgdGC0LrQvtCyXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMTdcIjogXCLQn9GA0LXQvtC00L7Qu9C10L3QuNC1INC/0L7QtNGM0LXQvNC+0LIg0Lgg0YHQv9Cw0LTQvtCyINCyINC20LjQt9C90LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxOFwiOiBcItCb0LjRh9C90YvQtSDRhtC10L3QvdC+0YHRgtC4INC4INGG0LXQu9C+0YHRgtC90L7RgdGC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxOVwiOiBcItCa0LDQuiDRg9C70YPRh9GI0LDRgtGMINC+0YLQvdC+0YjQtdC90LjRjyDRgSDQu9GO0LTRjNC80LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUyMFwiOiBcItCa0LDQuiDQvtC/0YDQtdC00LXQu9C40YLRjCDQutC+0LzRgyDQvNC+0LbQvdC+INC00L7QstC10YDRj9GC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUyMVwiOiBcItCa0LDQuiDQvtCx0YDQtdGB0YLQuCDRg9Cy0LXRgNC10L3QvdC+0YHRgtGMINCyINGB0LXQsdC1XCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQxVGl0bGUxXCI6IFwiPGkgY2xhc3M9J3RleCc+PGltZyBjbGFzcz0ndGV4dC1saW5lJyBzcmM9Jy4vaW1hZ2VzL3RleHQtbGluZS5zdmcnIGFsdD0naW1nLWxpbmUnPtCg0LXQvNC+0L3RgjwvaT4g0LbQuNC30L3QuFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQxRGVzMVwiOiBcIjxzcGFuPlDQtdC80L7QvdGCINC20LjQt9C90Lg8L3NwYW4+IOKAkyDRjdGC0L4g0LHQtdGB0LXQtNCwLCDQv9C+0YHRgtGA0L7QtdC90L3QsNGPINC/0L4g0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C8INC/0YDQuNC90YbQuNC/0LDQvCwg0LIg0YXQvtC00LUg0LrQvtGC0L7RgNC+0Lkg0L7QsdGD0YfQtdC90L3Ri9C5INGB0L/QtdGG0LjQsNC70LjRgdGCLCDQvdCw0LfRi9Cy0LDQtdC80YvQuSDQvtC00LjRgtC+0YDQvtC8LCDQv9GA0L7RgdC40YIg0YfQtdC70L7QstC10LrQsCDQstC30LPQu9GP0L3Rg9GC0Ywg0L3QsCDRgdCy0L7RjiDQttC40LfQvdGMINC4INGA0LDQt9C70LjRh9C90YvQtSDQtdC1INC+0LHQu9Cw0YHRgtC4LCDQvtGB0L7QsdC10L3QvdC+INC90LAg0LzQvtC80LXQvdGC0Ysg0YTQuNC30LjRh9C10YHQutC40YUg0LjQu9C4INC00YPRiNC10LLQvdGL0YUg0YHRgtGA0LDQtNCw0L3QuNC5LCDQuCDRgNCw0YHRgdC60LDQt9Cw0LIg0L7QsSDRjdGC0L7QvCwg0YPQsdGA0LDRgtGMINC40Lcg0YDQsNC30YPQvNCwINC90LDQutC+0L/Qu9C10L3QvdGL0Lkg0LIg0YLQtdGH0LXQvdC40LUg0LbQuNC30L3QuCDQs9GA0YPQty4gPGJyPiDQrdGC0L7RgiDQs9GA0YPQtyDQsdGL0Lsg0YHQvtC30LTQsNC9INGC0LDQutC40LzQuCDQstC10YnQsNC80Lgg0LrQsNC6INGE0LjQt9C40YfQtdGB0LrQuNC1INCx0L7Qu9C10LfQvdC4LCDRgtGA0LDQstC80YssINC/0L7RgtC10YDQuCDRgNC+0LTQvdGL0YUsINC00YDRg9C30LXQuSwg0LHQu9C40LfQutC40YUsINC/0L7RgtC10YDQuCDQtNC10L3QtdCzINC4INC40LzRg9GJ0LXRgdGC0LLQsCwg0L/RgNC10LTQsNGC0LXQu9GM0YHRgtCy0LAsINC90LXRg9C00LDRh9C4LCDQvdC10LTQvtGB0YLQuNCz0L3Rg9GC0YvQtSDRhtC10LvQuC4g0JLQvtC/0YDQtdC60Lgg0LjQt9Cy0LXRgdGC0L3QvtC5INC/0L7Qs9C+0LLQvtGA0LrQtSwg0LLRgNC10LzRjyDQvdC1INC70LXRh9C40YIg0Y3RgtC4INGA0LDRgdGB0YLRgNC+0LnRgdGC0LLQsCwgLSDQvtC90Lgg0L3QsNC60LDQv9C70LjQstCw0Y7RgtGB0Y8g0LIg0L3QsNGI0LXQvCDRgNCw0LfRg9C80LUg0Lgg0YLRj9C20LrQuNC8INCz0YDRg9C30L7QvCDQtNCw0LLRj9GCINC90LAg0L3QsNGBLCDQv9C+0LTRitC10LTQsNGPINC30LDQv9Cw0YEg0LbQuNC30L3QtdC90L3QvtC5INGN0L3QtdGA0LPQuNC4LCDRg9Cy0LXRgNC10L3QvdC+0YHRgtC4INCyINGB0LXQsdC1INC4INC20LXQu9Cw0L3QuNC1INC00LXQudGB0YLQstC+0LLQsNGC0YwuINCe0L3QuCDRgdC+0LfQtNCw0Y7RgiDQvdCw0YHRgtC+0YDQvtC20LXQvdC90L7RgdGC0YwsINCx0LXRgdC/0L7QutC+0LnRgdGC0LLQviwg0YPRgdGC0LDQu9C+0YHRgtGMINC+0YIg0LbQuNC30L3QuCwg0LbQtdC70LDQvdC40LUg0LLRgdC1INCx0YDQvtGB0LjRgtGMLCDRgNCw0LfQtNGA0LDQttC40YLQtdC70YzQvdC+0YHRgtGMLCDQsNC/0LDRgtC40Y4g0Lgg0LTQtdC/0YDQtdGB0YHQuNGOLlwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MVRpdGxlMlwiOiBcItCm0LXQu9GMIHDQtdC80L7QvdGC0LAg0LbQuNC30L3QuFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQxRGVzMlwiOiBcItCf0L7QvNC+0YfRjCDQstCw0Lwg0L/QvtC00L3Rj9GC0Ywg0YHQstC+0Lkg0YPRgNC+0LLQtdC90Ywg0L/RgNC40YfQuNC90L3QvtGB0YLQuCDQuCDRgdC/0L7RgdC+0LHQvdC+0YHRgtC10Lkg0Lgg0L/QvtC30LLQvtC70LjRgtGMINCy0LDQvCDQvtCx0YDQtdGB0YLQuCDQu9GD0YfRiNC10LUg0L/QvtC90LjQvNCw0L3QuNC1INC4INC60L7QvdGC0YDQvtC70Ywg0LLQsNGI0LXQuSDRgdC+0LHRgdGC0LLQtdC90L3QvtC5INC20LjQt9C90LguINCh0YLRg9C/0LXQvdC4INC4INGB0YLQsNC00LjQuCDQstCw0YjQtdCz0L4g0L/RgNC+0LTQstC40LbQtdC90LjRjyDQsiDRgdCw0LzQvtC/0L7Qt9C90LDQvdC40Lgg0Lgg0LTQvtGB0YLQuNC20LXQvdC40Lgg0LTRg9GF0L7QstC90L7QuSDRgdCy0L7QsdC+0LTRiyDQv9GA0LXQtNGB0YLQsNCy0LvRj9GO0YIg0YHQvtCx0L7QuSDQstC+0YHRhdC+0LTRj9GJ0YPRjiDRiNC60LDQu9GDINGI0LDQs9C+0LIg0L7QtNC40YLQuNC90LPQsCDQv9C+INGC0LDQuiDQvdCw0LfRi9Cy0LDQtdC80L7QvNGDINCc0L7RgdGC0YMg0Log0L/QvtC70L3QvtC5INGB0LLQvtCx0L7QtNC1LCDRgNCw0LfRgNCw0LHQvtGC0LDQvdC90L7QvNGDINCbLiDQoNC+0L3QvtC8INCl0LDQsdCx0LDRgNC00L7QvC4g0JLRiyDQv9C+0LTQvdC40LzQsNC10YLQtdGB0Ywg0YjQsNCzINC30LAg0YjQsNCz0L7QvCwg0LLRgdGP0LrQuNC5INGA0LDQtyDQvtC60LDQt9GL0LLQsNGP0YHRjCDQvdCwINCx0L7Qu9C10LUg0LLRi9GB0L7QutC+0Lwg0YPRgNC+0LLQvdC1LCDQv9C+0LrQsCDQvdC1INC00L7RgdGC0LjQs9C90LXRgtC1INCx0L7Qu9C10LUg0L7Qv9GC0LjQvNCw0LvRjNC90L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRjyDQtNGD0YjQtdCy0L3QvtCz0L4g0LfQtNC+0YDQvtCy0YzRjyDQuCDQvtGB0L7Qt9C90LDQvdC40Y8g0YHQtdCx0Y8sINC60LDQuiDQtNGD0YXQvtCy0L3QvtCz0L4g0YHRg9GJ0LXRgdGC0LLQsCwg0LrQvtGC0L7RgNC+0LUg0L3QsNC30YvQstCw0LXRgtGB0Y8g0YHQvtGB0YLQvtGP0L3QuNC1INCa0JvQmNCgICjQvtGCINGB0LvQvtCy0LAgY2xlYXIg4oCTINGH0LjRgdGC0YvQuSkuINCd0LjQttC1INC/0YDQuNCy0LXQtNC10L3QviDQutGA0LDRgtC60L7QtSDQvtC/0LjRgdCw0L3QuNC1INGB0YLRg9C/0LXQvdC10Lkg0JzQvtGB0YLQsCDQuCDRgtC1INC/0L7QsdC10LTRiywg0LrQvtGC0L7RgNGL0LUg0YfQtdC70L7QstC10Log0L/QvtC70YPRh9Cw0LXRgiwg0L/QvtC00L3Rj9Cy0YjQuNGB0Ywg0L3QsCDQvdC40YUuINCSINC+0L/QuNGB0LDQvdC40Lgg0L3QtdC60L7RgtC+0YDRi9GFINC40Lcg0L3QuNGFINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC+INGB0LvQvtCy0L4gwqvRgNCw0L3QtNCw0YPQvcK7LCDQutC+0YLQvtGA0L7QtSDQvtC30L3QsNGH0LDQtdGCINC00LXQudGB0YLQstC40LUg0L7QtNC40YLQuNC90LPQsCwg0L3QsNC/0YDQsNCy0LvQtdC90L3QvtC1INC90LAg0YPQu9Cw0LbQuNCy0LDQvdC40LUg0LrQsNC60L7QuS3Qu9C40LHQviDQvtC00L3QvtC5INC40Lcg0L7QsdC70LDRgdGC0LXQuSDQttC40LfQvdC4LiA8YnI+IDxzcGFuPtCSINGF0L7QtNC1PC9zcGFuPiDQvtC00LjRgtC40L3Qs9CwINGH0LXQu9C+0LLQtdC6INC40LfQsdCw0LLQu9GP0LXRgtGB0Y8g0L7RgiDRjdGC0LjRhSDRgtC10L3QtdC5INC/0YDQvtGI0LvQvtCz0L4uINCo0LDQsyDQt9CwINGI0LDQs9C+0Lwg0L7QvSDQstC+0LfQstGA0LDRidCw0LXRgiDRg9GC0YDQsNGH0LXQvdC90YPRjiDQttC40LfQvdC10L3QvdGD0Y4g0Y3QvdC10YDQs9C40Y4sINCy0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LXRgiDRgdC/0L7RgdC+0LHQvdC+0YHRgtC4LCDRg9Cy0LXRgNC10L3QvdC+0YHRgtGMINCyINGB0LXQsdC1INC4INCz0L7RgtC+0LLQvdC+0YHRgtGMINGB0LzQvtGC0YDQtdGC0Ywg0LIg0LPQu9Cw0LfQsCDRgtGA0YPQtNC90L7RgdGC0Y/QvC4g0JTRgNGD0LPQuNC80Lgg0YHQu9C+0LLQsNC80LgsINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0LjQs9GA0LDRgtGMINCyINC40LPRgNGLINC/0L7QtCDQvdCw0LfQstCw0L3QuNC10LwgwqvQttC40LfQvdGMwrsg0LggwqvQsdC40LfQvdC10YHCuywg0L/QvtC70YPRh9Cw0Y8g0L7RgiDRjdGC0L7Qs9C+INGD0LTQvtCy0L7Qu9GM0YHRgtCy0LjQtS4gPGJyPiA8c3Bhbj7Qn9Cw0YDQsNC70LvQtdC70YzQvdC+PC9zcGFuPiDRgSDQvtC00LjRgtC40L3Qs9C+0Lwg0LLQu9Cw0LTQtdC70YzRhtGLINC4INCi0J7Qny3QvNC10L3QtdC00LbQtdGA0Ysg0L/QvtC70YPRh9Cw0Y7RgiDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Lgg0L/QviDQstC90LXQtNGA0LXQvdC40Y4g0LIg0LrQvtC80L/QsNC90LjRj9GFINC40L3RgdGC0YDRg9C80LXQvdGC0L7QsiDRg9C/0YDQsNCy0LvQtdC90LjRjywg0L/QvtC30LLQvtC70Y/RjtGJ0LjRhSDQv9C10YDQtdC50YLQuCDQvtGCINGA0YPRh9C90L7Qs9C+INGD0L/RgNCw0LLQu9C10L3QuNGPINC6INGE0L7RgNC80LDRgtGDINGB0LjRgdGC0LXQvNC90L7Qs9C+INCx0LjQt9C90LXRgdCwLCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXQvNGL0LUg0Y3QutGB0L/QtdGA0YLQvtC8INC/0L4g0L/QvtGB0YLRgNC+0LXQvdC40Y4g0YHQuNGB0YLQtdC80L3QvtCz0L4g0LHQuNC30L3QtdGB0LAg0JXQstCz0LXQvdC40LXQvCDQodC+0YLQvdC40LrQvtCy0YvQvC4g0KLQsNC60L7QuSDQv9C+0LTRhdC+0LQg0YHQvtC30LTQsNC10YIg0YHQuNC90LXRgNCz0LjRji5cIixcclxuICAgIFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQxVGl0bGUzXCI6IFwi0J4g0L/RgNC+0LPRgNCw0LzQvNC1IMKr0KDQtdC80L7QvdGCINC20LjQt9C90Lgg0Lgg0LHQuNC30L3QtdGB0LDCuyDQsdC+0LvQtdC1INC00LXRgtCw0LvRjNC90L5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MVN1YlRpdGxlM1wiOiBcItCU0LjQvdCw0LzQuNC60LAg0YDQsNC30LLQuNGC0LjRjyDQutC+0LzQv9Cw0L3QuNC4INC4INGB0LrQvtGA0L7RgdGC0Ywg0YDQvtGB0YLQsCDQtdC1INC00L7RhdC+0LTQvtCyINC+0L/RgNC10LTQtdC70Y/RjtGC0YHRjyDRgtGA0LXQvNGPINGB0L7RgdGC0LDQstC70Y/RjtGJ0LjQvNC4OlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQxTGlzdDMxXCI6IFwi0J/QvtGC0LXQvdGG0LjQsNC70L7QvCDQutC+0LzQvNC10YDRh9C10YHQutC+0Lkg0LjQtNC10Lg7XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDFMaXN0MzJcIjogXCLQo9GA0L7QstC90LXQvCDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4INC60L7QvNC/0LDQvdC40Lg7XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDFMaXN0MzNcIjogXCLQntCx0YrQtdC80L7QvCDQttC40LfQvdC10L3QvdC+0Lkg0YHQuNC70Ysg0Lgg0YPRgNC+0LLQvdC10Lwg0LrQvtC80L/QtdGC0LXQvdGC0L3QvtGB0YLQuCDQstC70LDQtNC10LvRjNGG0LAg0Lgg0LrQvtC80LDQvdC00Ysg0KLQntCfLSDQvNC10L3QtdC00LbQtdGA0L7Qsi5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MURlczNcIjogXCLQrdGC0Lgg0YLRgNC4INGB0L7RgdGC0LDQstC70Y/RjtGJ0LjQtSDQv9GA0LXQtNGB0YLQsNCy0LvRj9GO0YIg0YHQvtCx0L7QuSDQv9C+0YLQtdC90YbQuNCw0Lsg0LrQvtC80L/QsNC90LjQuCwg0LrQvtGC0L7RgNGL0Lkg0LzQvtC20L3QviDQv9GA0LXQtNGB0YLQsNCy0LjRgtGMINCy0LLQuNC00LUg0LLQtdC60YLQvtGA0LAsINC90LDQv9GA0LDQstC70LXQvdC90L7Qs9C+INCy0LLQtdGA0YUsINC6INCy0YvQttC40LLQsNC90LjRjiDQuCDQv9GA0L7RhtCy0LXRgtCw0L3QuNGOLiDQndC+INC/0L4g0LzQtdGA0LUg0YDQsNC30LLQuNGC0LjRjyDQvdC10LPQsNGC0LjQstC90L7QtSDQstC70LjRj9C90LjQtSDQstC90LXRiNC90LXQuSDRgdGA0LXQtNGLINC90LAg0LrQvtC80L/QsNC90LjRjiDRg9Cy0LXQu9C40YfQuNCy0LDQtdGC0YHRjywg0YfRgtC+INGC0LDQutC20LUg0LzQvtC20L3QviDQv9GA0LXQtNGB0YLQsNCy0LjRgtGMINCyINCy0LjQtNC1INCy0LXQutGC0L7RgNCwLCDQutC+0YLQvtGA0YvQuSDQvdCw0L/RgNCw0LLQu9C10L0g0LLQvdC40LcsINC6INC00LXQs9GA0LDQtNCw0YbQuNC4INC4INGB0LzQtdGA0YLQuCDQutC+0LzQv9Cw0L3QuNC4LiDQmtC+0LPQtNCwINGN0YLQuCDQtNCy0LAg0LLQtdC60YLQvtGA0LAg0YHRgtCw0L3QvtCy0Y/RgtGB0Y8g0YDQsNCy0L3Riywg0YDQvtGB0YIg0LTQvtGF0L7QtNCwINC/0YDQtdC60YDQsNGJ0LDQtdGC0YHRjywg0YDQsNC30LLQuNGC0LjQtSDQvtGB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8uINCS0LTQvtGF0L3Rg9GC0Ywg0LbQuNC30L3RjCDQsiDQutC+0LzQv9Cw0L3QuNGOINC4INCy0L3QvtCy0Ywg0LTQvtCx0LjRgtGM0YHRjyDQtdC1INGA0L7RgdGC0LAg0Lgg0YDQsNC30LLQuNGC0LjRjyDQvNC+0LbQvdC+INGC0L7Qu9GM0LrQviDQsiDRgtC+0Lwg0YHQu9GD0YfQsNC1LCDQtdGB0LvQuCDQvNGLINGD0LLQtdC70LjRh9C40Lwg0L7QtNC90YMg0LjQtyDRgdC+0YHRgtCw0LLQu9GP0Y7RidC40YUg0LTQsNC90L3QvtCz0L4g0YHQv9C40YHQutCwLiA8YnI+INCf0YDQvtCz0YDQsNC80LzQsCDCq9Cg0LXQvNC+0L3RgiDQttC40LfQvdC4INC4INCx0LjQt9C90LXRgdCwwrsg0YDQsNCx0L7RgtCw0LXRgiDRgdC+INCy0YLQvtGA0YvQvCDQuCDRgtGA0LXRgtGM0LjQvCDQv9GD0L3QutGC0LDQvNC4INGB0L/QuNGB0LrQsC4g0KHQu9C10LTRg9C10YIg0L7RgtC80LXRgtC40YLRjCwg0YfRgtC+INGC0YDQtdGC0LjQuSDQv9GD0L3QutGCINGP0LLQu9GP0LXRgtGB0Y8g0L7RgdC90L7QstC+0L/QvtC70LDQs9Cw0Y7RidC40Lw6INGH0LXQvCDQsdC+0LvRjNGI0LUg0YMg0YfQtdC70L7QstC10LrQsCDQttC40LfQvdC10L3QvdC+0Lkg0Y3QvdC10YDQs9C40LgsINGC0LXQvCDQsdC+0LvRjNGI0LUg0YMg0L3QtdCz0L4g0LrQvtC90YLRgNC+0LvRjywg0YLQtdC8INCx0L7Qu9GM0YjQtdC5INC60L7QvNC/0LDQvdC40LXQuSDQuNC70Lgg0L7QsdC70LDRgdGC0YzRjiDQtNC10Y/RgtC10LvRjNC90L7RgdGC0Lgg0L7QvSDQvNC+0LbQtdGCINGD0L/RgNCw0LLQu9GP0YLRjC4g0JLQu9Cw0LTQtdC70YzRhtGLINC4INCi0J7Qny3QvNC10L3QtdC00LbQtdGA0Ysg0LrQvtC80L/QsNC90LjQuSDQv9GA0L7RhdC+0LTRj9GCINC/0YDQvtCz0YDQsNC80LzRiyDQuNC90LTQuNCy0LjQtNGD0LDQu9GM0L3Ri9GFINC60L7QvdGB0YPQu9GM0YLQsNGG0LjQuSDQv9C+INCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y4g0LbQuNC30L3QtdC90L3QvtC5INGB0LjQu9GLINC4INGD0LLQtdC70LjRh9C10L3QuNGOINC70LjRh9C90L7Qs9C+INC/0L7RgtC10L3RhtC40LDQu9CwLCDQvdCw0LfRi9Cy0LDRjtGJ0LjQtdGB0Y8g0L7QtNC40YLQuNC90LPQvtC8LlwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VSZXcxRGVzMVwiOiBcIsKr0J/RgNC+0LPRgNCw0LzQvNCwIMKr0KDQtdC80L7QvdGCINC20LjQt9C90LjCuyDQtNCw0LvQsCDQvNC90LUg0L/QvtC90Y/RgtGMLCDRh9GC0L4g0LLRgdC1INC/0YDQvtCx0LvQtdC80YssINC60L7RgtC+0YDRi9C1INGDINC80LXQvdGPINGB0LvRg9GH0LDRjtGC0YHRjyDigJMg0L/RgNC+0LHQu9C10LzRiyDQvtCx0YnQtdC90LjRjzog0LPQtNC1LdGC0L4g0L3QtdC00L7RgdC60LDQt9Cw0L3Qviwg0LPQtNC1LdGC0L4g0L3QtSDRgdC60LDQt9Cw0L3Qvi4g0JjQvdC+0LPQtNCwINGPINC90LUg0LPQvtCy0L7RgNC40LssINGH0YLQviDQtNGD0LzQsNGOINC90LAg0YHQsNC80L7QvCDQtNC10LvQtSDQuCDQv9C+0YLQvtC8INCy0LjQvdC40Lsg0YHQtdCx0Y8g0LfQsCDRjdGC0L4uIDxicj4g0KHQtdC50YfQsNGBINC20LUsINCy0YHRkSwg0YfRgtC+INC80L3QtSDQvdC1INC90YDQsNCy0LjRgtGB0Y8sINGPINC+0LfQstGD0YfQuNCy0LDRji4g0J/QtdGA0LXQtCDRgtC10LwsINC60LDQuiDQt9Cw0LrQu9GO0YfQuNGC0Ywg0LrQsNC60L7QuS3Qu9C40LHQviDQtNC+0LPQvtCy0L7RgCDQuCDQstGB0YLRg9C/0LjRgtGMINCyINC/0LDRgNGC0L3QtdGA0YHQutC40LUg0L7RgtC90L7RiNC10L3QuNGPLCDRjyDQstGB0LUg0L/RgNC+0LPQvtCy0LDRgNC40LLQsNGOLiDQotCw0LrQttC1INGPINGD0LbQtSDQvdCw0YfQsNC7INCy0YvRgdGC0YPQv9Cw0YLRjCDQvdCwINC/0YPQsdC70LjQutC1INC4INGB0YLRgNCw0YXQsCDQvdC10YIg0YLQsNC60L7Qs9C+LCDQutCw0Log0YDQsNC90YzRiNC1LiA8YnI+INCt0YLQsCDQv9GA0L7Qs9GA0LDQvNC80LAg0LTQsNC70LAg0LzQvdC1INGB0LjQu9GLINC4INCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/QvtCx0LXQtNC40YLRjCDRgdCy0L7QuCDRgdGC0YDQsNGF0Lgg0Lgg0LjQtNGC0Lgg0LLQv9C10YDQtdC0INC6INGB0LLQvtC40Lwg0YbQtdC70Y/QvCDQsiDQs9Cw0YDQvNC+0L3QuNC4INGBINGB0L7QsdC+0Lkg0Lgg0YHQstC+0LjQvCDQvtC60YDRg9C20LXQvdC40LXQvMK7LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFOYW1lMVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQodC+0LzQvtC50LvQtdCyXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MVBvczFcIjogXCLQktC40YbQtS3Qv9GA0LXQt9C40LTQtdC90YIg0LrRgNGD0L/QvdC+0LPQviDQsNCz0YDQsNGA0L3QvtCz0L4g0YXQvtC70LTQuNC90LPQsFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFEZXMyXCI6IFwi0JLQntCh0KHQotCQ0J3QntCS0JjQm9CYINCc0JXQndCvINCY0Jcg0J/QldCf0JvQkCA8YnI+INCd0LDRgSDQstGB0LXQs9C00LAg0LLQv9C10YfQsNGC0LvRj9GO0YIg0Lgg0LLQtNC+0YXQvdC+0LLQu9GP0Y7RgiDQu9GO0LTQuCwg0LrQvtGC0L7RgNGL0LUg0L3QsNGF0L7QtNGP0YIg0YHQuNC70Ysg0LjQt9C80LXQvdGP0YLRjNGB0Y8g0LIg0YHQsNC80YvQtSDQvdC10L/RgNC+0YHRgtGL0LUg0YHQstC+0Lgg0LLRgNC10LzQtdC90LAu0J/QvtGB0LvQtSDQuNC90LTQuNCy0LjQtNGD0LDQu9GM0L3QvtC5INC/0YDQvtCz0YDQsNC80LzRiyDQstC+0LfQvNC+0LbQvdC+INCy0L7RgdGB0YLQsNC90L7QstC40YLRjNGB0Y8g0LjQtyDQv9C10L/Qu9CwLCDQutCw0Log0L/RgtC40YbQsCDRhNC10L3QuNC60YE6IMKr0JIgwqvQn9C70LDQvdC10YLRg8K7INGPINC/0YDQuNGI0LvQsCDQt9CwINC/0L7QvNC+0YnRjNGOLCDQutC+0LPQtNCwINCx0YvQu9CwINGA0LDQt9Cx0LjRgtCwINC90LXRgNCw0YbQuNC+0L3QsNC70YzQvdGL0Lwg0L/QvtCy0LXQtNC10L3QuNC10Lwg0YHQstC+0LXQs9C+INC+0LrRgNGD0LbQtdC90LjRjyDQuCDQv9C+0YLQtdGA0LXQuSDRgtC+0LPQviwg0YfRgtC+INC00L7Qu9Cz0L4g0YHQvtC30LTQsNCy0LDQu9CwLiDQryDQvdC1INC80L7Qs9C70LAg0LXRgdGC0YwsINGB0L/QsNGC0YwsINCw0LTQtdC60LLQsNGC0L3QviDRgNC10LDQs9C40YDQvtCy0LDRgtGMINC90LAg0YHQu9C+0LLQsCDQuCDQv9C+0YHRgtGD0L/QutC4LiA8YnI+INCS0L3Rg9GC0YDQuCDQsdGL0LvQsCDQv9GD0YHRgtC+0YLQsCDQuCDQvdC10L/QvtC90LjQvNCw0L3QuNC1INGC0L7Qs9C+LCDRh9GC0L4g0LbQtSDQuCDQv9C+0YfQtdC80YMg0YLQsNC6INC/0YDQvtC40LfQvtGI0LvQvj8g0J/RgNC+0LPRgNCw0LzQvNCwINC/0L7QvNC+0LPQu9CwINC80L3QtSDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0YHQuNC70Ysg0Lgg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDRgdC10LHQtSwg0LLQvtC70Y4g0Log0LTQvtGB0YLQuNC20LXQvdC40Y4g0YbQtdC70LXQuSwg0YHQv9C+0YHQvtCx0L3QvtGB0YLRjCDQv9GA0LDQstC40LvRjNC90L4g0L7RhtC10L3QuNGC0Ywg0YHQuNGC0YPQsNGG0LjRjiwg0L/QvtC90Y/RgtGMINC10LUg0Lgg0L/RgNC+0LDQvdCw0LvQuNC30LjRgNC+0LLQsNGC0YwuIDxicj4g0K8g0L/QvtC90Y/Qu9CwLCDQutGC0L4g0LrQtdC8INGP0LLQu9GP0LXRgtGB0Y8g0LIg0LzQvtC10Lwg0L7QutGA0YPQttC10L3QuNC4LCDQutCw0Log0LzQvdC1INGBINC90LjQvNC4INC90LXQvtCx0YXQvtC00LjQvNC+INCy0LfQsNC40LzQvtC00LXQudGB0YLQstC+0LLQsNGC0YwsINGBINC60LXQvCDQuCDQutCw0Log0YHRgtGA0L7QuNGC0Ywg0L7RgtC90L7RiNC10L3QuNGPLCDQutC+0LPQviDQuCDQv9C+0YfQtdC80YMg0L/QvtC00LTQtdGA0LbQuNCy0LDRgtGMLiA8YnI+INCh0LDQvNC+0LUg0YbQtdC90L3QvtC1INCyINC20LjQt9C90Lgg4oCTINGN0YLQviDQv9C+0L3Rj9GC0YwsINGH0YLQviDQuNGB0YLQuNC90L3Qviwg0LAg0YfRgtC+INC80LjRiNGD0YDQsCwg0L7RgtC00LXQu9C40YLRjCDQt9C10YDQvdCwINC+0YIg0L/Qu9C10LLQtdC7LiDQryDRjdGC0L4g0YHQtNC10LvQsNC70LAuINCvINC30L3QsNGOLCDQt9Cw0YfQtdC8LCDRgSDQutC10Lwg0Lgg0LrRg9C00LAg0LjQtNGDLiA8YnI+INCvINGF0L7Rh9GDINC/0L7QvNC+0LPQsNGC0Ywg0Lgg0L/QvtC00LTQtdGA0LbQuNCy0LDRgtGMLCDQv9C+0LrQsNC30YvQstCw0YLRjCDQv9GA0LjQt9C90LDQvdC40LUg0YHQuNC70YzQvdGL0Lwg0LvRjtC00Y/QvC4g0K3RgtC+INGC0L4sINGH0YLQviDQvdC10L7QsdGF0L7QtNC40LzQviDQvNC90LUsINC4INGH0YLQviDRjyDRhdC+0YfRgyDQtNCw0LLQsNGC0Ywg0YLQsNC60LjQvCDQttC1INC60LDQuiDRjy4gPGJyPiDQodC/0LDRgdC40LHQviwg0YfRgtC+INCy0L7RgdGB0YLQsNC90L7QstC40LvQuCDQvNC10L3RjyDQuNC3INC/0LXQv9C70LDCuy5cIixcclxuXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MU5hbWUyXCI6IFwi0JXQu9C10L3QsCDQkNC70LXQutGB0LDQvdC00YDQvtCy0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxUG9zMlwiOiBcItCS0LvQsNC00LXQu9C10YbQsCDRgdC10YLQuCDRgdCw0LvQvtC90L7QsiDQutGA0LDRgdC+0YLRi1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFEZXMzXCI6IFwiwqvQryDQvdC1INC20LTQsNC7INC+0YIg0Y3RgtC+0Lkg0L/RgNC+0LPRgNCw0LzQvNGLINGH0LXQs9C+LdGC0L4g0L7RgdC+0LHQtdC90L3QvtCz0L4uINCd0L4g0LIg0LPQu9GD0LHQuNC90LUg0LTRg9GI0Lgg0YMg0LzQtdC90Y8g0LHRi9C70L4g0LbQtdC70LDQvdC40LUg0LjQt9C80LXQvdC40YLRjCDRgdC40YLRg9Cw0YbQuNGOLiA8YnI+INCd0LDQstC10YDQvdC+0LUsINC60LDQuiDQuCDRgyDQstGB0LXRhSDRgyDQvNC10L3RjyDQsdGL0LvQuCDQutC+0L3RhNC70LjQutGC0Ysg0L3QsCDRgNCw0LHQvtGC0LUsINC90LXQtNC+0L/QvtC90LjQvNCw0L3QuNC1INCyINGB0LXQvNGM0LUuINCc0L3QtSDQutCw0LfQsNC70L7RgdGMLCDRh9GC0L4g0Y8g0L/QtdGA0LXQs9C+0YDQtdC7LiDQndC+INC/0L7RgNCw0LHQvtGC0LDQsiDRgdC+INGB0L/QtdGG0LjQsNC70LjRgdGC0L7QvCwg0LzQvtGPINC20LjQt9C90Ywg0L3QsNGH0LDQu9CwINC80LXQvdGP0YLRjNGB0Y8uINCvINC90LDRiNGR0Lsg0YHQv9C+0YHQvtCxINGA0LDQt9GA0LXRiNC40YLRjCDQutC+0L3RhNC70LjQutGC0Ysg0Lgg0L3QsNC70LDQtNC40YLRjCDQvtCx0YnQtdC90LjQtSDRgdC+INGB0LLQvtC40LzQuCDQsdC70LjQt9C60LjQvNC4ISDQktC+INC80L3QtSDQv9C+0Y/QstC40LvQvtGB0Ywg0LzQvdC+0LPQviDRjdC90LXRgNCz0LjQuCwg0Lgg0YHQsNC8INC00LDQttC1INC90LUg0LfQsNC80LXRgtC40LssINC60LDQuiDQvdCw0YfQsNC7INC/0YDQvtC40LfQstC+0LTQuNGC0Ywg0LHQvtC70YzRiNC1ISDQmCDRh9GC0L4g0YHQsNC80L7QtSDQuNC90YLQtdGA0LXRgdC90L7QtSwg0LLRgdC1INC80L7QuCDRgdGC0LDRgtC40YHRgtC40LrQuCDQv9C+0YjQu9C4INCy0LLQtdGA0YUhIDxicj4gwqvQoNC10LzQvtC90YIg0LbQuNC30L3QuMK7INC00LDQuyDQvNC90LUg0YXQvtGA0L7RiNC40Lkg0YLQvtC70YfQvtC6INC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0LLRgdGRINC80LXQvdGP0YLRjCEg0KLQtdC/0LXRgNGMINGPINC30L3QsNGOLCDQutCw0Log0Y3RgtC+INC00LXQu9Cw0YLRjCDQuCDRg9Cy0LXRgNC10L0sINGH0YLQviDQstGB0LUg0L/QvtC70YPRh9C40YLRgdGPIcK7IFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFOYW1lM1wiOiBcItCS0LvQsNC00LjQvNC40YAg0KfQsNC/0LvRi9Cz0LjQvVwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFQb3MzXCI6IFwi0JTQuNGA0LXQutGC0L7RgCDQutGA0YPQv9C90L7Qs9C+INGC0L7RgNCz0L7QstC+0LPQviDRhtC10L3RgtGA0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxRGVzNFwiOiBcItCW0JjQl9Cd0Kwg0J3QkCDQk9Cg0JDQndCYINCe0JHQoNCr0JLQkCA8YnI+INCd0LAg0L/RgNC+0LPRgNCw0LzQvNC1IMKr0KDQtdC80L7QvdGCINC20LjQt9C90LjCuyDRjyDQvtGB0LLQvtCx0L7QtNC40LvRgdGPINC+0YIg0LzQvdC+0LPQuNGFINC90LDQtNC+0LXQtNC70LjQstGL0YUg0LzRi9GB0LvQtdC5INC4INC/0YDQvtCx0LvQtdC8LCDQvdCwINC60L7RgtC+0YDRi9C1INC90LUg0YXQvtGC0LXQuyDRgdC80L7RgtGA0LXRgtGMLiA8YnI+INCjINC80LXQvdGPINC+0YLQutGA0YvQu9C40YHRjCDQs9C70LDQt9CwINC90LAg0LzQvtC4INC/0L7RgdGC0YPQv9C60LguINCvINC/0L7QvdGP0LssINGH0YLQviDQvdCw0LTQtdC70LDQuyDQvNC90L7Qs9C+INC+0YjQuNCx0L7QuiDQsiDQvtGC0L3QvtGI0LXQvdC40Y/RhSDRgSDRgdC10LzRjNGR0LksINC90LAg0YDQsNCx0L7RgtC1LiA8YnI+INCV0YHQu9C4INCx0Ysg0Y8g0L3QtSDQv9GA0L7RiNGR0Lsg0L/RgNC+0LPRgNCw0LzQvNGDLCDQtNCw0LbQtSDQvdC1INC/0YDQtdC00YHRgtCw0LLQu9GP0Y4sINCz0LTQtSDQsdGLINC+0LrQsNC30LDQu9GB0Y8uINCvINCx0YvQuyDQvdCwINCz0YDQsNC90Lgg0L7QsdGA0YvQstCwLiDQodC10LnRh9Cw0YEg0LzQvtGPINC20LjQt9C90Ywg0L/QvtC80LXQvdGP0LvQsNGB0YwhINCvINC+0YnRg9GJ0LDRjiDRgdC10LHRjyDRgdGH0LDRgdGC0LvQuNCy0YvQvCDQuCDQt9C90LDRjiwg0YfRgtC+INCy0YHQtSDQsdGD0LTQtdGCINGF0L7RgNC+0YjQvi5cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxTmFtZTRcIjogXCLQndC40LrQvtC70LDQuSDQp9C40YHRgtGP0LrQvtCyXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MVBvczRcIjogXCLQktC70LDQtNC10LvQtdGGINCx0YvRgdGC0YDQvtGA0LDRgdGC0YPRidC10LPQviDRgdGC0LDRgNGC0LDQv9CwXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyVGl0bGUxXCI6IFwiPGkgY2xhc3M9J3RleCc+PGltZyBjbGFzcz0ndGV4dC1saW5lJyBzcmM9Jy4vaW1hZ2VzL3RleHQtbGluZS5zdmcnIGFsdD0naW1nLWxpbmUnPtCf0YDQvtCz0YDQsNC80LzQsDwvaT4gwqvQntGH0LjRidC10L3QuNC1wrtcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MlN1YlRpdGxlMVwiOiBcItCf0L7Rh9C10LzRgyDQstGLINC90LUg0YLQsNC6INGN0L3QtdGA0LPQuNGH0L3RiyDQuCDQv9C+0LvQvdGLINC20LjQt9C90LgsINC60LDQuiDQvNC+0LPQu9C4INCx0Ysg0LHRi9GC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QxMVwiOiBcItCi0YDRg9C00L3QviDQu9C4INCy0LDQvCDQvdCw0YHQu9Cw0LbQtNCw0YLRjNGB0Y8g0LbQuNC30L3RjNGOP1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyTGlzdDEyXCI6IFwi0KHRh9C40YLQsNC10YLQtSDQu9C4INCy0YssINGH0YLQviDRgtGA0YPQtNC90L4g0LHRi9GC0Ywg0YHRh9Cw0YHRgtC70LjQstGL0Lw/XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJMaXN0MTNcIjogXCLQktCw0Lwg0YHQu9C+0LbQvdC+INGB0L7RgdGA0LXQtNC+0YLQvtGH0LjRgtGM0YHRjz9cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QxNFwiOiBcItCR0YvQstCw0Y7RgiDQu9C4INCy0LDRiNC4INC80YvRgdC70Lgg0LfQsNC/0YPRgtCw0L3QvdGL0LzQuD9cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QxNVwiOiBcItCS0LDRiNC1INGB0L7RgdGC0L7Rj9C90LjQtSDQvdC1INGP0LLQu9GP0LXRgtGB0Y8g0L7Qv9GC0LjQvNCw0LvRjNC90YvQvCAtINC4INCy0Ysg0L3QtSDQvNC+0LbQtdGC0LUg0YHQv9GA0LDQstC40YLRjNGB0Y8g0YEg0Y3RgtC40Lw/XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJMaXN0MTZcIjogXCLQp9GD0LLRgdGC0LLRg9C10YLQtSDQu9C4INCy0Ysg0YHQtdCx0Y8g0LjRgdGC0L7RidGR0L3QvdGL0LzQuCDQsdC10Lcg0LrQsNC60L7QuS3Qu9C40LHQviDQstC40LTQuNC80L7QuSDQv9GA0LjRh9C40L3RiyDQuNC90L7Qs9C00LAg0LIg0YLQtdGH0LXQvdC40LUg0L3QtdGB0LrQvtC70YzQutC40YUg0LTQvdC10Lk/XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJEZXMxXCI6IFwiPHNwYW4+0J/RgNC40YfQuNC90L7QuSDRjdGC0LjRhSDRgdC40LzQv9GC0L7QvNC+0LIg0Y/QstC70Y/QtdGC0YHRjzwvc3Bhbj4g0YHQutC+0L/Qu9C10L3QuNC1INGF0LjQvNC40LrQsNGC0L7QsiDQuNC70Lgg0YLQvtC60YHQuNC90L7QsiDQsiDQstCw0YjQtdC8INGC0LXQu9C1LiDQrdGC0Lgg0LLQtdGJ0LXRgdGC0LLQsCwg0YLQsNC60LjQtSDQutCw0Log0L/QuNGJ0LXQstGL0LUg0LTQvtCx0LDQstC60LgsINC40YHQv9Cw0YDQtdC90LjRjyDQutGA0LDRgdC40YLQtdC70LXQuSwg0LzQsNGA0LjRhdGD0LDQvdCwLCDRgNC10YbQtdC/0YLRg9GA0L3Ri9C1INC70LXQutCw0YDRgdGC0LLQsCwg0L/QtdGB0YLQuNGG0LjQtNGLLCDQsNCy0YLQvtC80L7QsdC40LvRjNC90YvQtSDQs9Cw0LfRiyDQuCDRgNCw0LTQuNCw0YbQuNGPINC90LDQutCw0L/Qu9C40LLQsNGO0YLRgdGPINCyINC20LjRgNC+0LLRi9GFINGC0LrQsNC90Y/RhSDRgtC10LvQsC4g0JLQsNGI0LUg0YLQtdC70L4g0LXRgdGC0LXRgdGC0LLQtdC90L3Ri9C8INC/0YPRgtGR0Lwg0L3QtSDQuNC30LHQsNCy0LvRj9C10YLRgdGPINC+0YIg0Y3RgtC40YUg0LLQtdGJ0LXRgdGC0LIsINC4INC+0L3QuCDQvdCw0LrQsNC/0LvQuNCy0LDRjtGC0YHRjyDQsiDRgtC10YfQtdC90LjQtSDQvNC90L7Qs9C40YUg0LvQtdGCLCDQv9GA0LXQv9GP0YLRgdGC0LLRg9GPINCy0LDRiNC40Lwg0YPQvNGB0YLQstC10L3QvdGL0Lwg0YHQv9C+0YHQvtCx0L3QvtGB0YLRj9C8INC4INGN0L3QtdGA0LPQuNC4LiA8YnI+INCd0LDRgNC60L7RgtC40LrQuCDQuCDQu9C10LrQsNGA0YHRgtCy0LAsINCwINGC0LDQutC20LUg0LDQu9C60L7Qs9C+0LvRjCwg0LrQvtC90YHQtdGA0LLQsNC90YLRiywg0LrQvtGC0L7RgNGL0LUg0LLRiyDQv9GA0LjQvdC40LzQsNC70LggMjAg0LvQtdGCINC90LDQt9Cw0LQsINC00L4g0YHQuNGFINC/0L7RgCDQvdCw0YXQvtC00Y/RgtGB0Y8g0LIg0LLQsNGI0LXQvCDQvtGA0LPQsNC90LjQt9C80LUsINC4INCy0YDQtdC00Y/RgiDQstCw0Lwg0L/QviDRgdC10Lkg0LTQtdC90YwuINCg0LDQtNC40LDRhtC40Y8g0L7RgiDRgdC+0LvQvdC10YfQvdC+0LPQviDQvtC20L7Qs9CwLCDQutC+0YLQvtGA0YPRjiDQstGLINC/0L7Qu9GD0YfQuNC70Lgg0YjQtdGB0YLRjCDQu9C10YIg0L3QsNC30LDQtCwg0Lgg0YHQtdCz0L7QtNC90Y8g0L3QsNGF0L7QtNC40YLRgdGPINCyINCy0LDRiNC10Lwg0YLQtdC70LUuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyVGl0bGUyXCI6IFwi0KbQtdC70Ywg0L/RgNC+0LPRgNCw0LzQvNGLIMKr0J7Rh9C40YnQtdC90LjQtcK7XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJEZXMyXCI6IFwi0KDQtdGI0LXQvdC40LXQvCDQv9GA0L7QsdC70LXQvNGLINC90LDQutC+0L/Qu9C10L3QuNGPINCyINGC0LXQu9C1INC+0YLRgNCw0LLQu9GP0Y7RidC40YUg0LLQtdGJ0LXRgdGC0LIg0Y/QstC70Y/QtdGC0YHRjyDRg9C00LDQu9C10L3QuNC1INCy0YHQtdGFINC30LDQs9GA0Y/Qt9C90LXQvdC40LksINC30LDQutC+0L3RgdC10YDQstC40YDQvtCy0LDQvdC90YvRhSDQsiDRgtC10LvQtSwg0LrQvtGC0L7RgNC+0LUg0L/RgNC+0LjRgdGF0L7QtNC40YIg0L3QsCDQv9GA0L7Qs9GA0LDQvNC80LUgwqvQntGH0LjRidC10L3QuNC1wrsuINCt0YLQsCDQv9GA0L7RhtC10LTRg9GA0LAg0Y/QstC70Y/QtdGC0YHRjyDRgtC+0YfQvdC+0Lkg0LrQvtC80LHQuNC90LDRhtC40LXQuSDRhNC40LfQuNGH0LXRgdC60LjRhSDRg9C/0YDQsNC20L3QtdC90LjQuSzQv9GA0LjRkdC80LAg0LLQuNGC0LDQvNC40L3QvtCyLCDQv9C40YLQsNC90LjRjyDQuCDQv9C+0YLQtdC90LjRjyDQsiDRgdCw0YPQvdC1LCDRh9GC0L4g0L/RgNC40LLQvtC00LjRgiDQuiDQstGL0YLQtdGB0L3QtdC90LjRjiDQvdCw0YDQutC+0YLQuNC60L7QsiDQuCDRgtC+0LrRgdC40L3QvtCyINC40Lcg0LbQuNGA0L7QstGL0YUg0L7RgtC70L7QttC10L3QuNC5INC60LvQtdGC0L7QuiDRgtC10LvQsC4g0KLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCwg0LjRhSDQvNC+0LbQvdC+INCy0YvQstC10YHRgtC4INC40Lcg0YLQtdC70LAuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyVGl0bGUzXCI6IFwi0JrQsNC6INC/0YDQvtGF0L7QtNC40YIg0L/RgNC+0LPRgNCw0LzQvNCwIMKr0J7Rh9C40YnQtdC90LjQtcK7XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJMaXN0MzFcIjogXCLQndCwINC/0YDQvtCz0YDQsNC80LzQtSAn0J7Rh9C40YnQtdC90LjQtScg0YfQtdC70L7QstC10Log0LHQtdCz0LDQtdGCINC+0L/RgNC10LTQtdC70ZHQvdC90YvQuSDQv9C10YDQuNC+0LQg0LLRgNC10LzQtdC90Lgg0LrQsNC20LTRi9C5INC00LXQvdGMLiA8YnI+INCR0LXQsyDQvdGD0LbQtdC9INC00LvRjyDRgtC+0LPQviDRh9GC0L7QsdGLINGD0YHQuNC70LjRgtGMINC60YDQvtCy0L7QvtCx0YDQsNGJ0LXQvdC40LUuINCa0YDQvtCy0Ywg0L/RgNC+0L3QuNC60LDQtdGCINCz0LvRg9Cx0LbQtSDQsiDRgtC60LDQvdC4LCDRgtGD0LTQsCwg0LPQtNC1INC90LDQutCw0L/Qu9C40LLQsNGO0YLRgdGPINC+0YLQu9C+0LbQtdC90LjRjyDRgtC+0LrRgdC40YfQvdGL0YUg0LLQtdGJ0LXRgdGC0LIsINC4INCyINGA0LXQt9GD0LvRjNGC0LDRgtC1INGN0YLQuCDQstC10YnQtdGB0YLQstCwINC/0YDQuNGF0L7QtNGP0YIg0LIg0LTQstC40LbQtdC90LjQtS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QzMlwiOiBcItCh0YDQsNC30YMg0L/QvtGB0LvQtSDQsdC10LPQsCDRh9C10LvQvtCy0LXQuiDQuNC00LXRgiDQsiDRgdCw0YPQvdGDLiDQntCx0LjQu9GM0L3QvtC1INC/0L7RgtC+0L7RgtC00LXQu9C10L3QuNC1INC/0L7QvNC+0LPQsNC10YIg0LLRi9C00LXQu9C10L3QuNGOINGC0L7QutGB0LjRh9C90YvRhSDQstC10YnQtdGB0YLQsiDQuNC3INC+0YDQs9Cw0L3QuNC30LzQsC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QzM1wiOiBcItCg0LXQs9GD0LvRj9GA0L3Ri9C5INC/0YDQuNC10Lwg0LLQuNGC0LDQvNC40L3QvtCyINC4INC80LjQvdC10YDQsNC70L7Qsiwg0LAg0YLQsNC60LbQtSDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0LrQvtC70LjRh9C10YHRgtCy0LAg0LzQsNGB0LXQuyDRj9Cy0LvRj9C10YLRgdGPINCy0LDQttC90YvQvCDRhNCw0LrRgtC+0YDQvtC8LCDQv9C+0LzQvtCz0LDRjtGJ0LjQvCDQstGL0LLQtdGB0YLQuCDQuNC3INGC0LXQu9CwINCy0YDQtdC00L3Ri9C1INCy0LXRidC10YHRgtCy0LAg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGC0LrQsNC90LgsINC/0L7QstGA0LXQttC00LXQvdC90YvQtSDQvdCw0YDQutC+0YLQuNC60LDQvNC4INC4INC00YDRg9Cz0LjQvNC4INGC0L7QutGB0LjRh9C90YvQvNC4INCy0LXRidC10YHRgtCy0LDQvNC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyTGlzdDM0XCI6IFwi0KDQtdCz0YPQu9GP0YDQvdGL0Lkg0L/RgNC40LXQvCDQstC40YLQsNC80LjQvdC+0LIg0Lgg0LzQuNC90LXRgNCw0LvQvtCyLCDQsCDRgtCw0LrQttC1INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQutC+0LvQuNGH0LXRgdGC0LLQsCDQvNCw0YHQtdC7INGP0LLQu9GP0LXRgtGB0Y8g0LLQsNC20L3Ri9C8INGE0LDQutGC0L7RgNC+0LwsINC/0L7QvNC+0LPQsNGO0YnQuNC8INCy0YvQstC10YHRgtC4INC40Lcg0YLQtdC70LAg0LLRgNC10LTQvdGL0LUg0LLQtdGJ0LXRgdGC0LLQsCDQuCDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0YLQutCw0L3QuCwg0L/QvtCy0YDQtdC20LTQtdC90L3Ri9C1INC90LDRgNC60L7RgtC40LrQsNC80Lgg0Lgg0LTRgNGD0LPQuNC80Lgg0YLQvtC60YHQuNGH0L3Ri9C80Lgg0LLQtdGJ0LXRgdGC0LLQsNC80LguXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyVGl0bGU0XCI6IFwi0J/RgNC+0LTRg9C60YIg0L/RgNC+0LPRgNCw0LzQvNGLIMKr0J7Rh9C40YnQtdC90LjQtcK7XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJMaXN0NDFcIjogXCLQktCw0YjQtSDRgtC10LvQviwg0L7Rh9C40YnQtdC90L3QvtC1INC+0YIg0L7RgdGC0LDRgtC60L7QsiDQvtGC0YDQsNCy0LvRj9GO0YnQuNGFINCy0LXRidC10YHRgtCyLCDQvdCw0YDQutC+0YLQuNC60L7QsiDQuCDQu9C10LrQsNGA0YHRgtCyLCDQvdCw0LrQvtC/0LvQtdC90L3Ri9GFINCyINGC0LXRh9C10L3QuNC1INC20LjQt9C90LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJMaXN0NDJcIjogXCLQktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QvdC+0LUg0LfQtNC+0YDQvtCy0YzQtSDQuCDRg9Cy0LXQu9C40YfQtdC90LjQtSDRjdC90LXRgNCz0LjQuC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3Q0M1wiOiBcItCj0LvRg9GH0YjQtdC90L3QsNGPINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0LzRi9GB0LvQuNGC0Ywg0LvQvtCz0LjRh9C10YHQutC4LCDRgdC/0L7RgdC+0LHQvdC+0YHRgtGMINC70YPRh9GI0LUg0LrQvtC90YbQtdC90YLRgNC40YDQvtCy0LDRgtGMINCy0L3QuNC80LDQvdC40LUsINC/0L7QstGL0YjQtdC90LjQtSDQutC+0Y3RhNGE0LjRhtC40LXQvdGC0LAg0LjQvdGC0LXQu9C70LXQutGC0LAuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzJEZXMxXCI6IFwiwqvQl9CwINCy0YDQtdC80Y8g0L/RgNC+0YXQvtC20LTQtdC90LjRjyDQv9GA0L7Qs9GA0LDQvNC80Ysg0Y8g0LjQt9Cx0LDQstC40LvRgdGPINC+0YIg0LLQu9C40Y/QvdC40Lkg0YHQvtC70L3QtdGH0L3QvtC5INGA0LDQtNC40LDRhtC40LgsINC70LXQutCw0YDRgdGC0LIg0Lgg0LTRgNGD0LPQuNGFINGC0L7QutGB0LjRh9C90YvRhSDQstC10YnQtdGB0YLQsi4gPGJyPiDQnNC90LUg0YHRgtCw0LvQviDQvdCw0LzQvdC+0LPQviDQu9C10LPRh9C1INC00LLQuNCz0LDRgtGM0YHRjy4g0KLQtdC/0LXRgNGMINGPINGD0YHQv9C10LLQsNGOINCy0YvQv9C+0LvQvdGP0YLRjCDQsdC+0LvRjNGI0LUg0LfQsNC00LDRhywg0YfQtdC8INGA0LDQvdGM0YjQtS4gPGJyPiDQndCwINC/0YDQvtCz0YDQsNC80LzQtSDQtNC70Y8g0LzQtdC90Y8g0YDQtdGI0LjQu9GB0Y8g0LLQvtC/0YDQvtGBINGB0L3QsC4g0K8g0L3QsNGH0LDQuyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDQstGL0YHRi9C/0LDRgtGM0YHRjyDQuCDQu9C10LPQutC+INCy0YHRgtCw0LLQsNGC0Ywg0YPRgtGA0L7QvC4gPGJyPiDQkCDRgdCw0LzQvtC1INC40L3RgtC10YDQtdGB0L3QvtC1LCDRgyDQvNC10L3RjyDQv9C+0Y/QstC40LvQvtGB0Ywg0LbQtdC70LDQvdC40LUg0YLQstC+0YDQuNGC0YwhwrsuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3Mk5hbWUxXCI6IFwi0JLQuNGC0LDQu9C40Lkg0JfQsNCy0LPQvtGA0L7QtNC90YvQuVwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzJQb3MxXCI6IFwi0KHRgtCw0YDRiNC40Lkg0LzQtdC90LXQtNC20LXRgCDQv9C+INC/0YDQvtC00LDQttCw0Lwg0YLRgNCw0L3RgdC90LDRhtC40L7QvdCw0LvRjNC90L7QuSDQutC+0YDQv9C+0YDQsNGG0LjQuFwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VSZXcyRGVzMlwiOiBcIiDCq9Cd0Lgg0L7QtNC40L0g0Y3QvdC10YDQs9C10YLQuNC6INC90LUg0LTQsNGB0YIg0YHRgtC+0LvRjNC60L4g0Y3QvdC10YDQs9C40LgsINC60LDQuiDRjdGC0LAg0L/RgNC+0LPRgNCw0LzQvNCwISA8YnI+INCvLCDQvdCw0LLQtdGA0L3QvtC1LCDQvdC40LrQvtCz0LTQsCDQvdC1INC+0YnRg9GJ0LDQuyDRgdCy0L7QtSDRgtC10LvQviDRgtCw0LrQuNC8LiA8YnI+INCh0JjQm9Cs0J3Qq9CcLiDQp9CY0KHQotCr0JwuINCR0J7QlNCg0KvQnC4g0KHQm9CQ0JbQldCd0J3Qq9CcLiA8YnI+INCe0LTQuNC9INC40Lcg0YHQsNC80YvRhSDQutC70LDRgdGB0L3Ri9GFINGA0LXQt9GD0LvRjNGC0LDRgtC+0LIg0L/RgNC+0LPRgNCw0LzQvNGLIMKr0J7Rh9C40YnQtdC90LjRj8K7IOKAlCDRjdGC0L4g0L/QvtC90LjQvNCw0L3QuNC1INGC0L7Qs9C+LCDQutCw0Log0LjQvNC10L3QvdC+INGPINGA0LDQvdGM0YjQtSDQstGA0LXQtNC40Lsg0YHQstC+0LXQvNGDINGC0LXQu9GDLiDQotC10L/QtdGA0Ywg0Y8g0L3QtSDQsdGD0LTRgyDQv9C+0LLRgtC+0YDRj9GC0Ywg0Y3RgtC40YUg0L7RiNC40LHQvtC6LiA8YnI+INCa0L7QvdC10YfQvdC+INC20LUg0Y8g0L/QvtC70YPRh9C40Lsg0YfQuNGB0YLQvtC1INGC0LXQu9C+INC+0YIg0YDQsNC30L3Ri9GFINCy0YDQtdC00L3QvtGB0YLQtdC5LiDQktC80LXRgdGC0L4g0L/QvtGB0YLQvtGP0L3QvdC+0Lkg0YPRgdGC0LDQu9C+0YHRgtC4INC/0YDQuNGI0LvQsCDRjdC90LXRgNCz0LjRjyDQuCDRgdC40LvRiyEgPGJyPiDQryDQsdC10YHQutC+0L3QtdGH0L3QviDRgdGH0LDRgdGC0LvQuNCyLCDRh9GC0L4g0L/RgNC+0YjQtdC7INGN0YLRgyDQv9GA0L7Qs9GA0LDQvNC80YMhwrtcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyTmFtZTJcIjogXCLQlNC80LjRgtGA0LjQuSDQkdCw0LPRg9GG0LrQuNC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MlBvczJcIjogXCLQndCw0YfQuNC90LDRjtGJ0LjQuSDQsdC40LfQvdC10YHQvNC10L1cIixcclxuXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MkRlczNcIjogXCLQoNCV0JfQo9Cb0KzQotCQ0KLQqyDQn9Cg0JXQktCr0KHQmNCb0Jgg0J7QltCY0JTQkNCd0JjQryDQkiDQnNCY0JvQm9CY0J7QndCrINCg0JDQlyA8YnI+IMKr0K8g0LHQtdC30LPRgNCw0L3QuNGH0L3QviDRgdGH0LDRgdGC0LvQuNCy0LAg0LHRi9GC0Ywg0L3QsCDQv9GA0L7Qs9GA0LDQvNC80LUgwqvQntGH0LjRidC10L3QuNC1wrsuINCt0YLQviDQvdCw0YHRgtC+0Y/RidC40Lkg0L/QvtC00LDRgNC+0Log0LTQu9GPINC80LXQvdGPLiDQntGH0LXQvdGMINC60YDRg9GC0L4g0L/QvtGH0YPQstGB0YLQstC+0LLQsNGC0Ywg0YDQsNC30L3QuNGG0YMg0YEg0YLQvtC60YHQuNC90LDQvNC4INCyINGC0LXQu9C1INC4INCx0LXQtyDQvdC40YUsINCy0LXQtNGMINGN0YLQviDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINGC0L7Qu9GM0LrQviDQuNC30LHQsNCy0LjQstGI0LjRgdGMINC+0YIg0L3QuNGFLCDQsdC+0LvRjNGI0LUg0L3QuNC60LDQui4gPGJyPiDQndCw0LHQu9GO0LTQsNGPINC30LAg0YHQvtCx0L7QuSwg0Y8g0LfQsNC80LXRgtC40LvQsCDQvNC90L7Qs9C+INC90L7QstC+0LPQviEg0K8g0L3QsNGH0LDQu9CwINC70LXQs9C60L4g0LTQtdC70LjRgtGM0YHRjy4g0JzQvtCz0YMg0L/RgNC40L3Rj9GC0Ywg0L/QvtC80L7RidGMINC70LXQs9C60L4uIDxicj4g0KMg0LzQtdC90Y8g0YHQstC10YLQu9C+INC4INGH0LjRgdGC0L4g0LIg0YHQvtC30L3QsNC90LjQuC4gPGJyPiDQnNC10L3RjyDQvdC1INGC0Y/QvdC10YIg0L3QsCDQutCw0LrQuNC1LdGC0L4g0LLRgNC10LTQvdGL0LUg0L/RgNC+0LTRg9C60YLRiyDQuCDQvdCwINGB0LvQsNC00LrQvtC1IOKAlCDRjdGC0L4g0LrQu9Cw0YHRgdC90L4uINCg0LXQt9GD0LvRjNGC0LDRgtGLINC/0YDQtdCy0YvRgdC40LvQuCDQvtC20LjQtNCw0L3QuNGPINCyINC80LjQu9C70LjQvtC90Ysg0YDQsNC3LiDQryDQt9C90LDRjiwg0YfRgtC+INC00LDQu9GM0YjQtSDQv9C+0YHQu9C1INC/0YDQvtCz0YDQsNC80LzRiyDRjyDQsdGD0LTRgyDQvtGB0L7Qt9C90LDQstCw0YLRjCDQtdGJ0ZEg0LzQvdC+0LPQviDRh9C10LPQviDQvdC+0LLQvtCz0L7Cuy5cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyTmFtZTNcIjogXCLQodCy0LXRgtC70LDQvdCwINCc0LDRgNGH0LXQvdC60L5cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyUG9zM1wiOiBcItCe0YDQs9Cw0L3QuNC30LDRgtC+0YAg0LzQtdGA0L7Qv9GA0LjRj9GC0LjQuVwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VSZXcyRGVzNFwiOiBcItCR0J7Qm9Cs0KjQlSDQoNCQ0JHQntCi0Ksg0JfQkCDQnNCV0J3QrNCo0JXQlSDQmtCe0JvQmNCn0JXQodCi0JLQniDQktCg0JXQnNCV0J3QmCA8YnI+IMKr0JfQsCDQstGA0LXQvNGPINC/0YDQvtCz0YDQsNC80LzRiyDCq9Ce0YfQuNGJ0LXQvdC40LXCuyDRjyDQu9C40YjQuNC70YHRjyDQstGB0LXRhSDRgtC+0LrRgdC40YfQvdGL0YUg0LLQtdGJ0LXRgdGC0LIsINC60L7RgtC+0YDRi9C1INC90LDQv9C+0LvQvdGP0LvQuCDQvNC+0Lkg0L7RgNCz0LDQvdC40LfQvC4g0JjQtyDQvNC10L3RjyDQstGL0YjQtdC7INCw0LvQutC+0LPQvtC70YwsINC80LXQtNC40LrQsNC80LXQvdGC0YssINGA0LDQtNC40LDRhtC40Y8g0Lgg0LzQvdC+0LPQviDRh9C10LPQviDQtNGA0YPQs9C+0LPQviwg0L3QsNC60L7Qv9C70LXQvdC90L7Qs9C+INC30LAg0LLRgdC1INC80L7QuCA0MCDQu9C10YIg0LbQuNC30L3QuC4gPGJyPiDQodC10LnRh9Cw0YEg0Y8g0L/QvtC70L7QvSDRjdC90LXRgNCz0LjQuCDQuCDQttC40LfQvdC10L3QvdC+0Lkg0YHQuNC70YsuINCjINC80LXQvdGPINGB0YLQsNCx0LjQu9GM0L3QviDRhdC+0YDQvtGI0LXQtSDQvdCw0YHRgtGA0L7QtdC90LjQtS4g0K8g0L3QsNGH0LDQuyDQtNC10LvQsNGC0Ywg0LHQvtC70YzRiNC1INGA0LDQsdC+0YLRiyDQt9CwINC80LXQvdGM0YjQuNC5INC/0YDQvtC80LXQttGD0YLQvtC6INCy0YDQtdC80LXQvdC4LiA8YnI+INCjINC80LXQvdGPINGD0LvRg9GH0YjQuNC70L7RgdGMINC30YDQtdC90LjQtSwg0YHQu9GD0YUg0Lgg0LrQvtC20LAuINCd0LDQu9Cw0LTQuNC70L7RgdGMINC/0LjRidC10LLQsNGA0LXQvdC40LUsINGPINC90LDRh9Cw0Lsg0L/QuNGC0Ywg0LzQvdC+0LPQviDQstC+0LTRiy4g0Jgg0LrRg9GI0LDRgtGMINC+0LLQvtGJ0LguIDxicj4g0KHQtdC50YfQsNGBINGPINCy0YHRkSDQstGA0LXQvNGPINGF0L7Rh9GDINGH0YLQvi3RgtC+INC00LXQu9Cw0YLRjCDQuCDQstGB0LXQs9C00LAg0L3QsNGF0L7QttGD0YHRjCDQsiDRgtC+0L3Rg9GB0LXCuy4gXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3Mk5hbWU0XCI6IFwi0J/QsNCy0LXQuyDQlNC10LzRh9C10L3QutC+XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MlBvczRcIjogXCLQoNC10YHRgtC+0YDQsNGC0L7RgFwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M1RpdGxlMVwiOiBcIjxpIGNsYXNzPSd0ZXgnPjxpbWcgY2xhc3M9J3RleHQtbGluZScgc3JjPScuL2ltYWdlcy90ZXh0LWxpbmUuc3ZnJyBhbHQ9J2ltZy1saW5lJz7QmtGD0YDRgdGLINC/0L48L2k+INGD0LvRg9GH0YjQtdC90LjRjiDQttC40LfQvdC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMxMVwiOiBcItCSINC90LDRiNC10Lwg0LrQu9Cw0YHRgdC1INCy0Ysg0LzQvtC20LXRgtC1INC/0YDQvtC50YLQuCDRhtC10LvRi9C5INGA0Y/QtCDQu9C40YfQvdC+0YHRgtC90YvRhSDQutGD0YDRgdC+0LIsINCyINC60L7RgtC+0YDRi9GFINGB0L7QtNC10YDQttCw0YLRgdGPINC+0YLQstC10YLRiyDQvdCwINC80L3QvtC20LXRgdGC0LLQviDQstC+0L/RgNC+0YHQvtCyLCDQv9GA0LXQv9C+0LTQvdC+0YHQuNC80YvRhSDQvdCw0Lwg0LbQuNC30L3RjNGOLiDQmtCw0Log0YHQvtC30LTQsNCy0LDRgtGMINC4INGB0L7RhdGA0LDQvdGP0YLRjCDRgdGD0L/RgNGD0LbQtdGB0LrQuNC1INC+0YLQvdC+0YjQtdC90LjRjywg0LrQsNC6INC/0YDQsNCy0LjQu9GM0L3QviDQstC+0YHQv9C40YLRi9Cy0LDRgtGMINGA0LXQsdC10L3QutCwLCDQutCw0Log0YHQtdCx0Y8g0LzQvtGC0LjQstC40YDQvtCy0LDRgtGMLCDQutCw0Log0LTQvtCx0LjRgtGM0YHRjyDRhNC40L3QsNC90YHQvtCy0L7QuSDRgdGC0LDQsdC40LvRjNC90L7RgdGC0LgsINC60LDQuiDRg9C30L3QsNGC0YwsINC60L7QvNGDINC80L7QttC90L4g0LTQvtCy0LXRgNGP0YLRjCwg0Lgg0LzQvdC+0LbQtdGB0YLQstC+INC00YDRg9Cz0LjRhSDRgdGC0LDQsdC40LvRjNC90YvRhSDQtNCw0L3QvdGL0YUg0LTQsNC00YPRgiDQstCw0Lwg0Y3RhNGE0LXQutGC0LjQstC90YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLINGD0LvRg9GH0YjQtdC90LjQtSDQttC40LfQvdC4INC4INGB0L7Qt9C00LDQvdC40Y8g0LHQvtC70LXQtSDQsdC10LfQvtC/0LDRgdC90L7Qs9C+INC+0LrRgNGD0LbQtdC90LjRjy5cIixcclxuXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNUaXRsZTJcIjogXCLQmtCw0Log0YHQtdCx0Y8g0LzQvtGC0LjQstC40YDQvtCy0LDRgtGMXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMyMVwiOiBcIjxzcGFuPtCn0YLQvtCxINC00L7RgdGC0LjQs9Cw0YLRjCDRhtC10LvQtdC5LDwvc3Bhbj4g0LLQsNC8INC90YPQttC90LAg0L3QsNGB0YLQvtC50YfQuNCy0L7RgdGC0Ywg0Lgg0LDQutGC0LjQstC90YvQtSDQtNC10LnRgdGC0LLQuNGPLiDQktGLINC00L7Qu9C20L3RiyDQv9GA0LXQvtC00L7Qu9C10LLQsNGC0Ywg0LHQsNGA0YzQtdGA0Ysg0Lgg0L/RgNC+0LTQvtC70LbQsNGC0Ywg0LTQstC40LPQsNGC0YzRgdGPINCy0L/QtdGA0LXQtC4g0KHQu9C10LTQvtCy0LDRgtC10LvRjNC90L4sINC00LvRjyDRg9GB0L/QtdGF0LAg0L3QtdC+0LHRhdC+0LTQuNC80LAg0LLQsNGI0LAg0LvQuNGH0L3QsNGPINC80L7RgtC40LLQsNGG0LjRjy4g0J/QvtGH0LXQvNGDINC20LUg0LzRiyDRh9Cw0YHRgtC+INC80LXQtNC70LjQvD8g0Jgg0L/QvtGA0L7QuSDQt9Cw0LzQuNGA0LDQtdC8LCDQvdC40YfQtdCz0L4g0L3QtSDQtNC10LvQsNGPPyDQn9C+0YfQtdC80YMg0LLRgNC10LzQtdC90LDQvNC4INC80Ysg0L7RgtC60LvQsNC00YvQstCw0LXQvCDQutCw0LrRg9GOLdGC0L4g0LzQtdC70L7Rh9GMLCDQutC+0YLQvtGA0LDRjyDQv9C+0YLQvtC8INGB0YLQsNC90L7QstC40YLRgdGPINC60YDQuNGC0LjRh9C10YHQutC+0Lk/IDxicj4g0J3QsCDQutGD0YDRgdC1IDxzcGFuPsKr0JrQsNC6INGB0LXQsdGPINC80L7RgtC40LLQuNGA0L7QstCw0YLRjMK7INCy0Ysg0YPQt9C90LDQtdGC0LUg0L7RgtCy0LXRgtGLINC90LAg0Y3RgtC4INCy0L7Qv9GA0L7RgdGLLjwvc3Bhbj4g0JrRg9GA0YEg0L/QvtC60LDQt9GL0LLQsNC10YIsINC60LDQuiDQv9GA0LXQvtC00L7Qu9C10LLQsNGC0Ywg0LHQsNGA0YzQtdGA0YssINGH0YLQvtCx0Ysg0LTQvtCy0L7QtNC40YLRjCDQtNC10LvQviDQtNC+INC60L7QvdGG0LAuINCe0L0g0LTQsNC10YIg0L3QvtGDLdGF0LDRgyDRgtC+0LPQviwg0LrQsNC6INC00LXQu9Cw0YLRjCDRgNCw0LHQvtGC0YMg0L/RgNC+0YnQtSDQuCDRgNCw0LTQvtGB0YLQvdC10LUsINGH0YLQvtCx0Ysg0LLQsNGI0LAg0LzQvtGC0LjQstCw0YbQuNGPINGA0L7RgdC70LAuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMyMlwiOiBcItCa0L7Qs9C00LAg0LLRiyDRg9C30L3QsNC10YLQtSwg0YfRgtC+INC/0YDQtdC/0Y/RgtGB0YLQstGD0LXRgiDQstCw0YjQtdC80YMg0L/RgNC+0YbQstC10YLQsNC90LjRjiwg0LLRiyDRgdC80L7QttC10YLQtSDQv9C+0LLRi9GB0LjRgtGMINGB0LLQvtGOINC80L7RgtC40LLQsNGG0LjRjiDQuCDRg9Cy0LXQu9C40YfQuNGC0Ywg0Y3RhNGE0LXQutGC0LjQstC90L7RgdGC0YwuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MjFcIjogXCLQmtCw0LrQuNC1INC70L7QstGD0YjQutC4INC/0L7QtNGB0YLQtdGA0LXQs9Cw0Y7RgiDRh9C10LvQvtCy0LXQutCwLCDQutC+0YLQvtGA0YvQuSDQvdC1INC30LDQstC10YDRiNCw0LXRgiDQtNC10LvQsCDigJQg0LrQsNC6INGN0YLQviDRg9C00LLQsNC40LLQsNC10YIg0LXQs9C+INGA0LDQsdC+0YLRgy5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QyMlwiOiBcItCj0L/RgNCw0LbQvdC10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDQv9C+0LzQvtC20LXRgiDQstCw0Lwg0L/QvtC00L3Rj9GC0YzRgdGPINC90LDQtCDQstCw0YjQuNC80Lgg0L/RgNC+0LHQu9C10LzQsNC80LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MjNcIjogXCLQotC+0YfQvdGD0Y4g0LDQvdCw0YLQvtC80LjRjiDQutC+0L3RgtGA0L7Qu9GPLCDQuCDQutCw0Log0LrQvtC90YLRgNC+0LvQuNGA0L7QstCw0YLRjCDQu9GO0LTQtdC5INC4INC/0YDQtdC00LzQtdGC0Ysg0LIg0LLQsNGI0LXQvCDQvtC60YDRg9C20LXQvdC40LguXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGUzXCI6IFwi0KTQvtGA0LzRg9C70Ysg0LTQu9GPINC20LjQt9C90LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczMxXCI6IFwiPHNwYW4+0JXRgdC70Lgg0LLQsNGI0Lgg0L7RgtC90L7RiNC10L3QuNGPPC9zcGFuPiDQvdCwINCz0YDQsNC90Lgg0YDQsNC30YDRi9Cy0LAsINGH0YLQviDQstCw0Lwg0LTQtdC70LDRgtGMPyDQldGB0LvQuCDRgyDQstCw0YEg0LTQvtC70LPQuCwg0LrQsNC6INGBINGN0YLQuNC8INGB0L/RgNCw0LLQuNGC0YzRgdGPPyDQldGB0LvQuCDRgyDQstCw0YEg0L3QtdC/0YDQuNGP0YLQvdC+0YHRgtC4INC90LAg0YDQsNCx0L7RgtC1LCDQutCw0Log0LjRgdC/0YDQsNCy0LjRgtGMINGN0YLQvj8g0JTQu9GPINGN0YLQuNGFINC4INC00YDRg9Cz0LjRhSDRgdC40YLRg9Cw0YbQuNC5INGB0YPRidC10YHRgtCy0YPRjtGCINGC0L7Rh9C90YvQtSDRhNC+0YDQvNGD0LvRiyDigJQg0YjQsNCz0LgsINCyINC+0YHQvdC+0LLQtSDQutC+0YLQvtGA0YvRhSDQu9C10LbQsNGCINC10YHRgtC10YHRgtCy0LXQvdC90YvQtSDQt9Cw0LrQvtC90YsuINCt0YLQuCDRhNC+0YDQvNGD0LvRiyDRgNCw0LHQvtGC0LDRjtGCINCy0YHQtdCz0LTQsC4g0KPQt9C90LDQudGC0LUsINC60LDQuiDQstC30Y/RgtGMINC/0L7QtCDQutC+0L3RgtGA0L7Qu9GMINC70Y7QsdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC4INC+0LHRgdGC0L7Rj9GC0LXQu9GM0YHRgtCy0LAuINCY0LfRg9GH0LjRgtC1INC/0YDQsNC60YLQuNGH0LXRgdC60LjQtSDRhNC+0YDQvNGD0LvRiywg0LrQvtGC0L7RgNGL0LUg0LjRgdC/0YDQsNCy0LvRj9GO0YIg0L/Qu9C+0YXQvtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQtNC10Lsg0Lgg0YPQutGA0LXQv9C70Y/RjtGCINGF0L7RgNC+0YjQtdC1LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMzJcIjogXCLQldGB0LvQuCDQstGLINC30L3QsNC10YLQtSDQuCDQv9GA0LjQvNC10L3Rj9C10YLQtSDQtNCw0L3QvdGL0LUg0LjQtyDRjdGC0L7Qs9C+INC60YPRgNGB0LAsINCy0Ysg0YHQvNC+0LbQtdGC0LUg0YDQsNC30L7QsdGA0LDRgtGM0YHRjyDRgSDQu9GO0LHRi9C8INC90LXQvtC/0YLQuNC80LDQu9GM0L3Ri9C8INC/0L7Qu9C+0LbQtdC90LjQtdC8INC00LXQuyDQuCDRg9C70YPRh9GI0LjRgtGMINC70Y7QsdC+0LUg0LHQu9Cw0LPQvtC/0YDQuNGP0YLQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1LiDQktGLINGB0LzQvtC20LXRgtC1INC00L7RgdGC0LjRh9GMINC90LXQsdGL0LLQsNC70YvRhSDRg9GB0L/QtdGF0L7QsiDQsiDQttC40LfQvdC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDMxXCI6IFwi0JrQsNC60L7QstGLINC30LDQutC+0L3Riywg0L7Qv9GA0LXQtNC10LvRj9GO0YnQuNC1INCy0LDRiCDQttC40LfQvdC10L3QvdGL0Lkg0YPRgNC+0LLQtdC90YwsINC4INC60LDQuiDQuNGFINC/0YDQuNC80LXQvdC40YLRjCwg0YfRgtC+0LHRiyDRgdC+0LfQtNCw0YLRjCDQsdGD0LTRg9GJ0LXQtSwg0LjRgdC/0L7Qu9C90LXQvdC90L7QtSDQv9GA0L7RhtCy0LXRgtCw0L3QuNGPINC4INGB0YfQsNGB0YLRjNGPLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDMyXCI6IFwi0KfRgtC+INGC0LDQutC+0LUg0YHRgtCw0YLQuNGB0YLQuNC60Lgg0Lgg0LrQsNC6INCy0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQuNGFLCDRh9GC0L7QsdGLINC+0YbQtdC90LjRgtGMINC+0LHRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1INC70Y7QsdC+0Lkg0LTQtdGP0YLQtdC70YzQvdC+0YHRgtC4LCDQuCDQutCw0Log0L7QvdC4INC80L7Qs9GD0YIg0L/QvtC80L7Rh9GMINCy0LDQvCDQv9GA0LXQtNGB0LrQsNC30LDRgtGMLCDRh9GC0L4g0YHQu9GD0YfQuNGC0YHRjyDQsiDQsdGD0LTRg9GJ0LXQvC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QzM1wiOiBcItCk0L7RgNC80YPQu9GLINGB0L7RgdGC0L7Rj9C90LjQuSwg0LrQvtGC0L7RgNGL0LUg0L3QsNC/0YDQsNCy0LDQu9GP0Y7RgiDQstCw0YEg0LIg0LbQuNC30L3QuC4g0K3RgtC+INC/0YDQsNC60YLQuNGH0LXRgdC60LjQtSDRiNCw0LPQuCwg0LrQvtGC0L7RgNGL0LUg0L/QvtC30LLQvtC70Y/RjtGCINGD0LvRg9GH0YjQuNGC0Ywg0LvRjtCx0L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGU0XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0YPRgdC/0LXRiNC90L7QuSDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXM0MVwiOiBcItCc0Ysg0LLRgdC1INC/0L7QvdC40LzQsNC10LwsINGH0YLQviDQsdGD0LTRjCDQstGB0LUg0LrQsNC6INGB0LvQtdC00YPQtdGCINC+0YDQs9Cw0L3QuNC30L7QstCw0L3Qviwg0LTQtdC70LAg0YjQu9C4INCx0Ysg0L3QsNC80L3QvtCz0L4g0LvRg9GH0YjQtS4g0KPQvNC10L3QuNC1INC+0YDQs9Cw0L3QuNC30L7QstGL0LLQsNGC0Ywg4oCTINGN0YLQviDQutC70Y7RhyDQuiDQtNC+0YHRgtC40LbQtdC90LjRjiDQu9C40YfQvdC+0LPQviDRg9GB0L/QtdGF0LAsINC90L4g0LXQs9C+INGH0LDRgdGC0L4g0YPQv9GD0YHQutCw0Y7RgiDQuNC3INCy0LjQtNGDLiDQntC90L4g0YLQsNC60LbQtSDQstCw0LbQvdC+INC4INC00LvRjyDQv9GA0L7RhtCy0LXRgtCw0L3QuNGPINGB0LXQvNGM0Lgg0LjQu9C4INCz0YDRg9C/0L/Riy4g0KfRgtC+0LHRiyDQtNC+0LHQuNGC0YzRgdGPINGB0LLQvtC10Lkg0YbQtdC70LggKNC90LUg0LLQsNC20L3Qviwg0LHQvtC70YzRiNC+0Lkg0LjQu9C4INC80LDQu9C10L3RjNC60L7QuSksINC90YPQttC90L4g0L7QsdC70LDQtNCw0YLRjCDQvdC10L7QsdGF0L7QtNC40LzRi9C80Lgg0LfQvdCw0L3QuNGP0LzQuCDQuCDRg9C80LXRgtGMINC+0YDQs9Cw0L3QuNC30L7QstGL0LLQsNGC0YwuIDxicj4gPHNwYW4+0K3RgtC+0YIg0LrRg9GA0YEg0L/QvtC60LDQt9GL0LLQsNC10YIsPC9zcGFuPiDQutCw0Log0L3QsNC40LHQvtC70LXQtSDRjdGE0YTQtdC60YLQuNCy0L3QviDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDRgtGMINGB0LLQvtC1INCy0YDQtdC80Y8g0Lgg0LrQsNC6INGA0LDRgdC/0YDQtdC00LXQu9GP0YLRjCDQtNC10LnRgdGC0LLQuNGPINCyINC70L7Qs9C40YfQtdGB0LrQvtC5INC/0L7RgdC70LXQtNC+0LLQsNGC0LXQu9GM0L3QvtGB0YLQuCwg0YfRgtC+0LHRiyDQtNC+0LHQuNCy0LDRgtGM0YHRjyDQstGL0L/QvtC70L3QtdC90LjRjyDQt9Cw0LTRg9C80LDQvdC90L7Qs9C+LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzNDJcIjogXCLQldGB0LvQuCDQstGLINCx0YPQtNC10YLQtSDQt9C90LDRgtGMINC4INC/0YDQuNC80LXQvdGP0YLRjCDQtdGB0YLQtdGB0YLQstC10L3QvdGL0LUg0LfQsNC60L7QvdGLINC4INC40L3RgdGC0YDRg9C80LXQvdGC0YssINC+0L/QuNGB0LDQvdC90YvQtSDQsiDRjdGC0L7QvCDQutGD0YDRgdC1LCDQstGLINGB0LzQvtC20LXRgtC1INGD0YHQv9C10YjQvdC+INC+0YDQs9Cw0L3QuNC30L7QstGL0LLQsNGC0Ywg0LvRjtCx0YPRjiDQtNC10Y/RgtC10LvRjNC90L7RgdGC0YwsINGD0YHRgtGA0LDQvdGP0YLRjCDQt9Cw0LzQtdGI0LDRgtC10LvRjNGB0YLQstC+LCDQvtCx0LXRgdC/0LXRh9C40LLQsNGC0Ywg0YHRgtCw0LHQuNC70YzQvdC+0YHRgtGMINC4INC00L7RgdGC0LjQs9Cw0YLRjCDRgdCy0L7QuNGFINGG0LXQu9C10LkuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0NDFcIjogXCLQldGB0YLQtdGB0YLQstC10L3QvdGL0LUg0LfQsNC60L7QvdGLINC+0YDQs9Cw0L3QuNC30LDRhtC40Lgg0Lgg0LjRhSDQv9GA0LjQvNC10L3QtdC90LjQtS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3Q0MlwiOiBcItCh0LrQvtC70YzQutC+INC00LXQudGB0YLQstC40Lkg0L/QviDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4INCy0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC10LvQsNGC0YwsINGH0YLQvtCx0Ysg0LTQvtCx0LjRgtGM0YHRjyDQtNC+0YHRgtC40LbQtdC90LjRjyDQv9C+0YHRgtCw0LLQu9C10L3QvdGL0YUg0YbQtdC70LXQuSDRgSDQvdCw0LjQvNC10L3RjNGI0LjQvNC4INGD0YHQuNC70LjRj9C80Lgg0Lgg0LIg0LrRgNCw0YLRh9Cw0LnRiNC40LUg0YHRgNC+0LrQuC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3Q0M1wiOiBcItCh0YLRgNGD0LrRgtGD0YDQsCDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4LCDQsCDRgtCw0LrQttC1INC/0YDQuNC80LXRgNGLINC4INC40L3RgdGC0YDRg9C60YbQuNC4INC/0L4g0LXQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjiwg0YfRgtC+0LHRiyDRgyDQstCw0YEg0L/QvtGP0LLQuNC70L7RgdGMINGD0LzQtdC90LjQtSDQvtGA0LPQsNC90LjQt9C+0LLQsNGC0Ywg0YHQvtCx0YHRgtCy0LXQvdC90YPRjiDQttC40LfQvdGMLCDQs9GA0YPQv9C/0YMg0LjQu9C4INC60L7QvNC/0LDQvdC40Y4uXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGU1XCI6IFwi0K3RhNGE0LXQutGC0LjQstC90L7QtSDRg9C/0YDQsNCy0LvQtdC90LjQtSDQstGA0LXQvNC10L3QtdC8XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXM1MVwiOiBcIkIg0LzQuNGA0LUg0LHRi9GB0YLRgNC+0LTQtdC50YHRgtCy0YPRjtGJ0LjRhSDQutC+0LzQv9GM0Y7RgtC10YDQvtCyINC4INGB0LLQtdGA0YXRgdC60L7RgNC+0YHRgtC90YvRhSDQu9C40L3QuNC5INGB0LLRj9C30Lgg0L3QtdC70YzQt9GPINC/0L7Qu9Cw0LPQsNGC0YzRgdGPINC90LAg0YPRgdGC0LDRgNC10LLRiNC40LUg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdGL0LUg0YHQuNGB0YLQtdC80YsuINCa0LDQuiDQttC1INCy0LDQvCDQuNC00YLQuCDQsiDQvdC+0LPRgyDRgdC+INCy0YDQtdC80LXQvdC10Lw/INCd0LAg0LrRg9GA0YHQtSDCq9Ct0YTRhNC10LrRgtC40LLQvdC+0LUg0YPQv9GA0LDQstC70LXQvdC40LUg0LLRgNC10LzQtdC90LXQvMK7INCy0Ysg0YPQt9C90LDQtdGC0LUg0L4g0YLQvtC8LCDQutCw0Log0YHQtNC10LvQsNGC0Ywg0LHQvtC70YzRiNC1INC30LAg0LzQtdC90YzRiNC10LUg0LLRgNC10LzRjywg0LjRgdC/0L7Qu9GM0LfRg9GPINGE0YPQvdC00LDQvNC10L3RgtCw0LvRjNC90YvQtSDQtNCw0L3QvdGL0LUg0L7QsSDRjdGE0YTQtdC60YLQuNCy0L3QvtGB0YLQuC4g0JzQvdC+0LPQuNC1INC90LUg0LjQvNC10Y7RgiDQvdC4INC80LDQu9C10LnRiNC10LPQviDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjRjywg0LrQsNC6INGN0YLQvtCz0L4g0LTQvtCx0LjRgtGM0YHRjywg0Lgg0LjQvNC10L3QvdC+INGN0YLQvtC80YMg0YPRh9C40YIg0Y3RgtC+0YIg0LrRg9GA0YEuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXM1MlwiOiBcItCa0L7Qs9C00LAg0LLRiyDQvtCx0LvQsNC00LDQtdGC0LUg0LfQvdCw0L3QuNC10Lwg0Lgg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNC80LgsINC60L7RgtC+0YDRi9C1INC00LDRjtGC0YHRjyDQvdCwINGN0YLQvtC8INC60YPRgNGB0LUsINCy0Ysg0LzQvtC20LXRgtC1INGB0L/RgNCw0LLQu9GP0YLRjNGB0Y8g0YEg0YDQsNCx0L7RgtC+0Lkg0LIg0LTQstCwINGA0LDQt9CwINCx0YvRgdGC0YDQtdC1LCDQv9GA0LjQutC70LDQtNGL0LLQsNGPINCyINC00LLQsCDRgNCw0LfQsCDQvNC10L3RjNGI0LUg0YPRgdC40LvQuNC5LiDQktGLINC80L7QttC10YLQtSDQuNC30LHQtdC20LDRgtGMINGB0YLRgNC10YHRgdCwINC4INGB0L7Qt9C00LDRgtGMINC00LvRjyDRgdC10LHRjyDQstGA0LXQvNGPLCDRh9GC0L7QsdGLINC30LDQvdC40LzQsNGC0YzRgdGPINCy0YHQtdC8INGC0LXQvCwg0YfQtdC8INCy0LDQvCDQvdGA0LDQstC40YLRgdGPINC30LDQvdC40LzQsNGC0YzRgdGPLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDUxXCI6IFwi0J/QvtGH0LXQvNGDINC90LXQutC+0YLQvtGA0YvQtSDQu9GO0LTQuCDQvNC90L7Qs9C+INC4INGD0L/QvtGA0L3QviDRgNCw0LHQvtGC0LDRjtGCLCDQvdC+INC90LUg0LTQvtCx0LjQstCw0Y7RgtGB0Y8g0LHQvtC70YzRiNC40YUg0YDQtdC30YPQu9GM0YLQsNGC0L7Qsiwg0LAg0LTRgNGD0LPQuNC1INC80L7Qs9GD0YIg0LTQvtGB0YLQuNGH0Ywg0LzQvdC+0LPQvtCz0L4sINC30LDRgtGA0LDRh9C40LLQsNGPINCz0L7RgNCw0LfQtNC+INC80LXQvdGM0YjQtSDRg9GB0LjQu9C40LkuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0NTJcIjogXCLQmNC3LdC30LAg0YfQtdCz0L4g0LLRiyDRgtGA0LDRgtC40YLQtSDRgNCw0LHQvtGH0LXQtSDQstGA0LXQvNGPINCy0L/Rg9GB0YLRg9GOINC4INC60LDQuiDQvNC+0LbQvdC+INGD0LzQtdC90YzRiNC40YLRjCDQutC+0LvQuNGH0LXRgdGC0LLQviDRgNCw0LHQvtGC0Ysg0LLQtNCy0L7QtSwg0L/RgNC4INGN0YLQvtC8INC00LXQu9Cw0Y8g0LPQvtGA0LDQt9C00L4g0LHQvtC70YzRiNC1LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDUzXCI6IFwi0JrQsNC6INC/0YDQtdC00YHRgtCw0LLQuNGC0Ywg0L/Rg9GC0Ywg0Log0YbQtdC70Lgg0LIg0LLQuNC00LUg0L/RgNC+0YHRgtGL0YUg0LLRi9C/0L7Qu9C90LjQvNGL0YUg0YjQsNCz0L7Qsiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDRi9C8INCy0Ysg0YHQvNC+0LbQtdGC0LUg0YEg0LvRkdCz0LrQvtGB0YLRjNGOINC10ZEg0LTQvtGB0YLQuNGH0YwuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGU2XCI6IFwi0J/QvtGB0YLQsNC90L7QstC60LAg0Lgg0LTQvtGB0YLQuNC20LXQvdC40LUg0YbQtdC70LXQuVwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzNjFcIjogXCLQldGB0LvQuCDRgyDQstCw0YEg0L3QtdGCINGG0LXQu9C10Lkg0LjQu9C4INGD0YHRgtGA0LXQvNC70LXQvdC40LksINCy0Ysg0LzQvtC20LXRgtC1INC/0L7Rh9GD0LLRgdGC0LLQvtCy0LDRgtGMINGB0LXQsdGPINC/0L7RgtC10YDRj9C90L3Ri9C8LiDQm9GO0LTQuCwg0LrQvtGC0L7RgNGL0LUg0L3QtSDRgNCw0LHQvtGC0LDRjtGCINCw0LrRgtC40LLQvdC+INC90LDQtCDQtNC+0YHRgtC40LbQtdC90LjQtdC8INGB0LLQvtC40YUg0YbQtdC70LXQuSwg0L3QtdGB0YfQsNGB0YLQvdGLLiDQntC90Lgg0L/QvtC00LLQtdGA0LbQtdC90Ysg0LLRgdC10Lwg0YHRgtGA0LXRgdGB0LDQvCDRgdC+0LLRgNC10LzQtdC90L3QvtC5INC20LjQt9C90LguINCe0LTQvdCw0LrQviwg0L7Rh9C10L3RjCDRh9Cw0YHRgtC+INC70Y7QtNC4INGB0YLQsNCy0Y/RgiDQv9C10YDQtdC0INGB0L7QsdC+0Lkg0YbQtdC70LgsINC90L4g0L3QtdGB0LzQvtGC0YDRjyDQvdCwINCy0YHQtSDRg9GB0LjQu9C40Y8sINC90LUg0LzQvtCz0YPRgiDQuNGFINC00L7RgdGC0LjRh9GMLiDQn9C+0YfQtdC80YMg0Y3RgtC+INGC0LDQuj8g0JIg0YfRkdC8INC30LDQutC70Y7Rh9Cw0LXRgtGB0Y8g0YDQtdGI0LXQvdC40LU/IDxicj4g0JrRg9GA0YEgwqvQn9C+0YHRgtCw0L3QvtCy0LrQsCDQuCDQtNC+0YHRgtC40LbQtdC90LjQtSDRhtC10LvQtdC5wrsg0LTQsNGR0YIg0L7RgtCy0LXRgtGLINC90LAg0Y3RgtC4INCy0L7Qv9GA0L7RgdGLLiDQkiDQvdGR0Lwg0L/QvtC60LDQt9Cw0L3Qviwg0LrQsNC6INGB0YLQsNCy0LjRgtGMINGG0LXQu9C4LCDQuCDQtNCw0L3RiyDRgtC+0YfQvdGL0LUg0YjQsNCz0Lgg0YLQvtCz0L4sINC60LDQuiDQuNGFINC00L7RgdGC0LjQs9Cw0YLRjC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczYyXCI6IFwi0JHQu9Cw0LPQvtC00LDRgNGPINC40L3RgdGC0YDRg9C80LXQvdGC0LDQvCwg0LrQvtGC0L7RgNGL0LUg0LLRiyDQuNC30YPRh9C40YLQtSDQvdCwINGN0YLQvtC8INC60YPRgNGB0LUsINCy0Ysg0YHQvNC+0LbQtdGC0LUg0YTQvtGA0LzRg9C70LjRgNC+0LLQsNGC0YwsINC/0LvQsNC90LjRgNC+0LLQsNGC0Ywg0LTQvtGB0YLQuNC20LXQvdC40LUg0Lgg0LTQvtGB0YLQuNCz0LDRgtGMINGG0LXQu9C10LksINC60L7RgtC+0YDRi9C1INC00L4g0Y3RgtC+0LPQviDQvtGB0YLQsNCy0LDQu9C40YHRjCDQu9C40YjRjCDQvNC10YfRgtC+0LkuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0NjFcIjogXCLQniDQs9GA0LDQvdC00LjQvtC30L3QvtC8INC+0YLQutGA0YvRgtC40Lgg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC40LLQvdC+0Lkg0YjQutCw0LvRiyDigJQg0YjQutCw0LvRiyDQv9C+0YHQu9C10LTQvtCy0LDRgtC10LvRjNC90L7RgdGC0Lgg0YPRgNC+0LLQvdC10LksINC60L7RgtC+0YDQsNGPINC+0YHQvdC+0LLQsNC90LAg0L3QsCDQtdGB0YLQtdGB0YLQstC10L3QvdGL0YUg0LfQsNC60L7QvdCw0YUg0Lgg0L/QvtC60LDQt9GL0LLQsNC10YIsINC60LDQuiDQvdGD0LbQvdC+INGE0L7RgNC80YPQu9C40YDQvtCy0LDRgtGMINGG0LXQu9C4INC4INGA0LDQt9GA0LDQsdCw0YLRi9Cy0LDRgtGMINC/0LvQsNC90YsuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0NjJcIjogXCLQn9C+0YfQtdC80YMg0LjQvdC+0LPQtNCwINCx0YvQstCw0LXRgiDRgtCw0LosINGH0YLQviDRh9C10LvQvtCy0LXQuiDRg9C/0L7RgNC90L4g0YDQsNCx0L7RgtCw0LXRgiDQvdCw0LQg0LTQvtGB0YLQuNC20LXQvdC40LXQvCDQutCw0LrQvtC5LdGC0L4g0YbQtdC70LgsINC90L4g0LTQsNC20LUg0L3QtSDQvNC+0LbQtdGCINC6INC90LXQuSDQv9GA0LjQsdC70LjQt9C40YLRjNGB0Y8g4oCUINC4INC60LDQuiDRjdGC0L4g0LzQvtC20L3QviDQuNC30LzQtdC90LjRgtGMLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDYzXCI6IFwi0JrQsNC6INGA0LDQt9C00LXQu9C40YLRjCDQv9C70LDQvSDQvdCwINC60L7RgNC+0YLQutC40LUg0LLRi9C/0L7Qu9C90LjQvNGL0LUg0YjQsNCz0LgsINGH0YLQvtCx0Ysg0LTQvtGB0YLQuNGH0Ywg0L/QvtGB0YLQsNCy0LvQtdC90L3Ri9GFINCy0LDQvNC4INGG0LXQu9C10LksINC60LDQutC40LzQuCDQsdGLINC80LDRgdGI0YLQsNCx0L3Ri9C80Lgg0L7QvdC4INC90Lgg0LHRi9C70LguXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGU3XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDRjdGE0YTQtdC60YLQuNCy0L3QvtCz0L4g0LvQuNC00LXRgNGB0YLQstCwXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXM3MVwiOiBcItCf0L7Rh9C10LzRgyDQutGC0L4t0YLQviDRgdGC0LDQvdC+0LLQuNGC0YHRjyDQu9C40LTQtdGA0L7QvCwg0Lgg0LXQs9C+INGD0LLQsNC20LDRjtGCINC4INC/0L7QtNC00LXRgNC20LjQstCw0Y7Rgiwg0LAg0LrQvtCz0L4t0YLQviDQuNCz0L3QvtGA0LjRgNGD0Y7RgiDQuNC70Lgg0L3QuCDQstC+INGH0YLQviDQvdC1INGB0YLQsNCy0Y/Rgj8g0J/QvtGH0LXQvNGDINC+0LTQuNC9INGA0YPQutC+0LLQvtC00LjRgtC10LvRjCDQtNC+0YHRgtC40LPQsNC10YIg0L/RgNC+0YbQstC10YLQsNC90LjRjyDQuCDQtdCz0L4g0YHQvtGC0YDRg9C00L3QuNC60Lgg0L/QvtC70YPRh9Cw0Y7RgiDRhdC+0YDQvtGI0YPRjiDQt9Cw0YDQv9C70LDRgtGDLCDQsCDQtNGA0YPQs9C+0Lkg0YLQtdGA0L/QuNGCINC90LXRg9C00LDRh9GDPyDQrdGC0L4g0YHRg9C00YzQsdCwPyDQo9C00LDRh9CwPyDQmtCw0LrQvtC5LdGC0L4g0L7RgdC+0LHRi9C5INC00LDRgCwg0LrQvtGC0L7RgNGL0Lwg0L7QsdC70LDQtNCw0Y7RgiDRgtC+0LvRjNC60L4gwqvRg9GB0L/QtdGI0L3Ri9C1INC70Y7QtNC4wrs/IDxicj4g0JrRg9GA0YEgwqvQmNC90YHRgtGA0YPQvNC10L3RgtGLINC00LvRjyDRjdGE0YTQtdC60YLQuNCy0L3QvtCz0L4g0LvQuNC00LXRgNGB0YLQstCwwrsg0LTQsNGR0YIg0L7RgtCy0LXRgtGLINC90LAg0Y3RgtC4INCy0L7Qv9GA0L7RgdGLLCDQsCDRgtCw0LrQttC1INCyINC90ZHQvCDQuNC30LvQvtC20LXQvdGLINC40YHRgtC40L3QvdGL0LUg0LfQsNC60L7QvdGLINGN0YTRhNC10LrRgtC40LLQvdC+0LPQviDQu9C40LTQtdGA0YHRgtCy0LAuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0NzFcIjogXCLQmtGC0L4g0YLQsNC60L7QuSDCq9GA0YPQutC+0LLQvtC00LjRgtC10LvRjMK7LCDRh9GC0L4g0L7QvSDQtNC+0LvQttC10L0g0LfQvdCw0YLRjCDQuCDQtNC10LvQsNGC0YwsINGH0YLQvtCx0Ysg0LHRi9GC0Ywg0Y3RhNGE0LXQutGC0LjQstC90YvQvCDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgNC+0LwuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0NzJcIjogXCLQp9GC0L4g0YLQsNC60L7Qs9C+INC00LXQu9Cw0LXRgiDQv9C70L7RhdC+0Lkg0LvQuNC00LXRgCwg0YfRgtC+INC90LDQvdC+0YHQuNGCINCy0YDQtdC0INCz0YDRg9C/0L/QtSwg0Lgg0YfRgtC+INC00LXQu9Cw0LXRgiDRhdC+0YDQvtGI0LjQuSDQu9C40LTQtdGALCDRh9GC0L4g0L/RgNC40LLQvtC00LjRgiDQs9GA0YPQv9C/0YMg0Log0L/RgNC+0YbQstC10YLQsNC90LjRji5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3Q3M1wiOiBcItCi0L7Rh9C90L7QtSDQvtC/0LjRgdCw0L3QuNC1INC+0YHQvdC+0LIg0LDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjRjyDQuCDQutC70Y7Rh9C10LLRi9C1INGN0LvQtdC80LXQvdGC0YssINC+INC60L7RgtC+0YDRi9GFINC00L7Qu9C20LXQvSDQt9C90LDRgtGMINC60LDQttC00YvQuSDRgNGD0LrQvtCy0L7QtNC40YLQtdC70YwuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGU4XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0L/RgNC10L7QtNC+0LvQtdC90LjRjyDRhNC40L3QsNC90YHQvtCy0L7Qs9C+INGB0YLRgNC10YHRgdCwXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXM4MVwiOiBcItCY0YHQv9GL0YLRi9Cy0LDQtdGC0LUg0LvQuCDQstGLINCyINC20LjQt9C90Lgg0YHRgtGA0LXRgdGB0Ysg0Lgg0L3QsNC/0YDRj9C20LXQvdC40LUg0LjQty3Qt9CwINGE0LjQvdCw0L3RgdC+0LLQvtC5INGB0LjRgtGD0LDRhtC40Lg/INCV0YHQu9C4INCy0YHRkSDQstCw0YjQtSDQstC90LjQvNCw0L3QuNC1INGB0L7RgdGA0LXQtNC+0YLQvtGH0LXQvdC+INC90LAgwqvRhNC40L3QsNC90YHQsNGFwrssINCwINC90LUg0L3QsCDRgtC+0LwsINGH0YLQvtCx0Ysg0LbQuNGC0Ywg0L/QvtC70L3QvtC5INC20LjQt9C90YzRjiwg0Y3RgtC+0YIg0LrRg9GA0YEg0LTQsNGB0YIg0LLQsNC8INC40L3RgdGC0YDRg9C80LXQvdGC0YssINC60L7RgtC+0YDRi9C1INC/0L7QvNC+0LPRg9GCINCy0LDQvCDQstGB0YLQsNGC0Ywg0L3QsCDQv9GD0YLRjCDQuiDQu9GD0YfRiNC10LzRgyDQstGL0LbQuNCy0LDQvdC40Y4g0Lgg0YHRh9Cw0YHRgtGM0Y4g0Lgg0L/QvtC80L7Qs9GD0YIg0LvQtdCz0LrQviDQvtGB0YPRidC10YHRgtCy0LvRj9GC0Ywg0YPQv9GA0LDQstC70LXQvdC40LUg0YTQuNC90LDQvdGB0LDQvNC4LiA8YnI+INCY0Lcg0Y3RgtC+0LPQviDQutGD0YDRgdCwINCy0Ysg0YPQt9C90LDQtdGC0LUsINC60LDQuiDRg9GB0L/QtdGI0L3QviDRgdC/0YDQsNCy0LjRgtGM0YHRjyDRgSDRhNC40L3QsNC90YHQvtCy0YvQvCDQutGA0LjQt9C40YHQvtC8LCDQvdC10LLQsNC20L3QviDigJQg0LHQvtC70YzRiNC40Lwg0LjQu9C4INC90LXQt9C90LDRh9C40YLQtdC70YzQvdGL0LwuINCX0LTQtdGB0Ywg0YLQsNC60LbQtSDQtNCw0L3RiyDQuNC90YHRgtGA0YPQvNC10L3RgtGLLCDRgSDQv9C+0LzQvtGJ0YzRjiDQutC+0YLQvtGA0YvRhSDQstGLINGB0LzQvtC20LXRgtC1INC/0YDQvtGB0YLQviDQvdC1INC/0L7Qv9Cw0LTQsNGC0Ywg0LIg0L/QvtC00L7QsdC90YvQtSDRgdC40YLRg9Cw0YbQuNC4LiDQrdGC0Lgg0L7RgdC90L7QstC90YvQtSDQtNCw0L3QvdGL0LUsINC/0L7Qu9GD0YfQtdC90L3Ri9C1INC40Lcg0L7Qv9GL0YLQsCDRgNCw0LHQvtGC0Ysg0YEg0L7RgNCz0LDQvdC40LfQsNGG0LjRj9C80LgsINGP0LLQu9GP0Y7RgtGB0Y8g0LrQu9GO0YfQtdCy0YvQvNC4INC00LvRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDRhNC40L3QsNC90YHQsNC80Lgg0L/RgNC10LTQv9GA0LjRj9GC0LjRjyDQu9GO0LHQvtCz0L4g0YDQsNC30LzQtdGA0LAsINC4INC+0L3QuCDQsiDRgtC+0Lkg0LbQtSDQvNC10YDQtSDQv9GA0LjQvNC10L3QuNC80Ysg0Log0LvQuNGH0L3Ri9C8INGE0LjQvdCw0L3RgdCw0Lwg0Lgg0LTQsNGO0YIg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQvtGB0LLQvtCx0L7QtNC40YLRjCDQstCw0YjQtSDQstC90LjQvNCw0L3QuNC1INC00LvRjyDRh9C10LPQvi3RgtC+INC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INCy0LDQttC90L7Qs9C+INCyINC20LjQt9C90LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXM4MlwiOiBcItCa0L7Qs9C00LAg0LLRiyDQt9C90LDQtdGC0LUg0Lgg0L/QvtC90LjQvNCw0LXRgtC1INC+0YHQvdC+0LLRiyDRg9C/0YDQsNCy0LvQtdC90LjRjyDRhNC40L3QsNC90YHQsNC80LgsINCy0Ysg0LzQvtC20LXRgtC1INC60L7QvdGC0YDQvtC70LjRgNC+0LLQsNGC0Ywg0YHQstC+0ZEg0L/RgNC+0YbQstC10YLQsNC90LjQtSDQuCDRgdC+0LfQtNCw0YLRjCDRgdCy0L7QsdC+0LTQvdGD0Y4g0L7RgiDRhNC40L3QsNC90YHQvtCy0YvRhSDRgdGC0YDQtdGB0YHQvtCyINCw0YLQvNC+0YHRhNC10YDRgy4g0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDQvNC+0LbQtdGC0LUg0L/RgNC10YPRgdC/0LXQstCw0YLRjC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3Q4MVwiOiBcItCe0YHQvdC+0LLRiyDRg9C/0YDQsNCy0LvQtdC90LjRjyDRhNC40L3QsNC90YHQsNC80LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0ODJcIjogXCLQmtCw0Log0YPQu9Cw0LTQuNGC0Ywg0YfRgNC10LfQstGL0YfQsNC50L3Rg9GOINGB0LjRgtGD0LDRhtC40Y4g0LIg0YTQuNC90LDQvdGB0LDRhSwg0L3QtSDQstC/0LDQtNCw0Y8g0L/RgNC4INGN0YLQvtC8INCyINC30LDQvNC10YjQsNGC0LXQu9GM0YHRgtCy0L4uXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0ODNcIjogXCLQmtCw0Log0LjQvNC10L3QvdC+INGB0L/RgNCw0LLQuNGC0YzRgdGPINGBINC90LXRgNCw0LfQsdC10YDQuNGF0L7QuSDQsiDRhNC40L3QsNC90YHQsNGFLCDQuCDQutCw0LrQvtCy0Ysg0YLQvtGH0L3Ri9C1INC/0YDQvtGG0LXQtNGD0YDRiywg0YEg0L/QvtC80L7RidGM0Y4g0LrQvtGC0L7RgNGL0YUg0LzQvtC20L3QviDRg9GB0L/QvtC60L7QuNGC0Ywg0L3QsNGB0LXQtNCw0Y7RidC40YUg0L3QsCDQstCw0YEg0LrRgNC10LTQuNGC0L7RgNC+0LIuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0ODRcIjogXCLQp9GC0L4g0LvQtdC20LjRgiDQsiDQvtGB0L3QvtCy0LUg0L/RgNC+0YbQstC10YLQsNC90LjRjyDQu9GO0LHQvtCz0L4g0YfQtdC70L7QstC10LrQsCwg0LrQvtC80L/QsNC90LjQuCwg0L7RgNCz0LDQvdC40LfQsNGG0LjQuCDQuNC70Lgg0L/RgNC10LTQv9GA0LjRj9GC0LjRjyDigJQg0LHQvtC70YzRiNC+0LPQviDQuNC70Lgg0LzQsNC70LXQvdGM0LrQvtCz0L4uXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGU5XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0LTQvtGB0YLQuNC20LXQvdC40Y8g0YTQuNC90LDQvdGB0L7QstC+0Lkg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXM5MVwiOiBcItCX0LTQtdGB0Ywg0YHQvtC00LXRgNC20LDRgtGB0Y8g0L7RgtCy0LXRgtGLLCDQv9C+0LfQstC+0LvRj9GO0YnQuNC1INC00L7RgdGC0LjRh9GMINCy0YHQtdCz0L4sINGH0LXQs9C+INCy0Ysg0YXQvtGC0LjRgtC1INCyINC20LjQt9C90LguINCh0YPRidC10YHRgtCy0YPQtdGCINGB0L/QvtGB0L7QsSDQuNC30LHQsNCy0LjRgtGM0YHRjyDQvtGCINC/0YDQvtCx0LvQtdC8LCDRgSDQutC+0YLQvtGA0YvQvNC4INCy0Ysg0YHRgtCw0LvQutC40LLQsNC10YLQtdGB0YwsINGD0L/RgNCw0LLQu9GP0Y8g0YHQstC+0LjQvNC4INC00LXQu9Cw0LzQuCwg0Lgg0YHQv9GA0LDQstC40YLRjNGB0Y8g0YEg0YLRgNGD0LTQvdC+0YHRgtGP0LzQuCwg0YHQstGP0LfQsNC90L3Ri9C80Lgg0YEg0L/QvtCy0YvRiNC10L3QuNC10Lwg0YbQtdC9LiDQkiDQutC+0L3RhtC1INC60L7QvdGG0L7Qsiwg0L7RgiDRjdGC0L7Qs9C+INC30LDQstC40YHQuNGCINCy0LDRiNC1INGB0YfQsNGB0YLRjNC1INC4INCx0LvQsNCz0L7Qv9C+0LvRg9GH0LjQtS4gPGJyPiDQmtC+0LPQtNCwINCy0Ysg0LfQvdCw0LXRgtC1LCDRh9GC0L4g0LTQtdC70LDRgtGMLCDQstGLINC80L7QttC10YLQtSDQuNC30LHQtdC20LDRgtGMINGE0LjQvdCw0L3RgdC+0LLRi9GFINC90LXRg9GA0Y/QtNC40YYuINCYINGC0L7Qs9C00LAsINC00LDQttC1INC10YHQu9C4INCy0Ysg0YHRgtC+0LvQutC90ZHRgtC10YHRjCDRgSDQutGA0LjQt9C40YHQvtC8LCDQstGLINGB0LzQvtC20LXRgtC1INCx0YvRgdGC0YDQviDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0YzRgdGPLiDQlNC+0YHRgtC40LbQtdC90LjQtSDRhNC40L3QsNC90YHQvtCy0L7QuSDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LzQvtC20LXRgiDQt9Cw0LLQuNGB0LXRgtGMINGC0L7Qu9GM0LrQviDQvtGCINCy0LDRgS4gPGJyPiDQndCwINC60YPRgNGB0LUgwqvQmNC90YHRgtGA0YPQvNC10L3RgtGLINC00LvRjyDQtNC+0YHRgtC40LbQtdC90LjRjyDRhNC40L3QsNC90YHQvtCy0L7QuSDQsdC10LfQvtC/0LDRgdC90L7RgdGC0LjCuyDQstGLINGD0LfQvdCw0LXRgtC1INC/0YDQuNC90YbQuNC/0Ysg0YDQsNCx0L7RgtGLINGBINGE0LjQvdCw0L3RgdCw0LzQuCwg0LrQvtGC0L7RgNGL0LUg0L/RgNC40LzQtdC90LjQvNGLINC4INC6INC+0YDQs9Cw0L3QuNC30LDRhtC40Lgg0LvRjtCx0L7Qs9C+INGA0LDQt9C80LXRgNCwLCDQuCDQuiDQvtGC0LTQtdC70YzQvdC+0LzRgyDRh9C10LvQvtCy0LXQutGDLiDQntCx0YDQtdGC0Y8g0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtGMLCDQstGLINGB0LzQvtC20LXRgtC1INC/0L7RgdCy0Y/RgtC40YLRjCDRgdC10LHRjyDQtNC+0YHRgtC40LbQtdC90LjRjiDQsdC+0LvQtdC1INCy0YvRgdC+0LrQuNGFINGG0LXQu9C10Lkg0LIg0LbQuNC30L3QuC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczkyXCI6IFwi0J/RgNC40LzQtdC90LXQvdC40LUg0L7RgdC90L7QstC+0L/QvtC70LDQs9Cw0Y7RidC40YUg0LjRgdGC0LjQvSDQuNC30LvQvtC20LXQvdC90YvRhSDQsiDRjdGC0L7QvCDQutGD0YDRgdC1LCDQvNC+0LbQtdGCINC/0YDQuNC90LXRgdGC0Lgg0YHRgtCw0LHQuNC70YzQvdC+0LUg0L/RgNC10YPRgdC/0LXQstCw0L3QuNC1INC4INGE0LjQvdCw0L3RgdC+0LLRi9C5INGA0L7RgdGCINCy0LDQvCDQu9C40YfQvdC+LCDQstCw0YjQtdC5INGB0LXQvNGM0LUg0Lgg0LLQsNGI0LXQuSDQutC+0LzQv9Cw0L3QuNC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDkxXCI6IFwi0JrQsNC6INC/0LvQsNC90LjRgNC+0LLQsNGC0Ywg0YHQstC+0Lgg0YTQuNC90LDQvdGB0YssINGH0YLQvtCx0Ysg0L3QuNC60L7Qs9C00LAg0L3QtSDQv9C+0L/QsNC00LDRgtGMINCyINC00L7Qu9Cz0LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0OTJcIjogXCLQmtCw0Log0YHQtNC10LvQsNGC0Ywg0YLQsNC6LCDRh9GC0L7QsdGLINC60LDQttC00YvQuSDRgNCw0YHRhdC+0LQg0LTQtdC90LXQttC90YvRhSDRgdGA0LXQtNGB0YLQsiDRgdGC0LDQvdC+0LLQuNC70YHRjyDQstC70L7QttC10L3QuNC10Lwg0LIg0LHRg9C00YPRidC10LUuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0OTNcIjogXCLQmtCw0LrQuNC1INGI0LDQs9C4INC90YPQttC90L4g0L/RgNC10LTQv9GA0LjQvdGP0YLRjCwg0YfRgtC+0LHRiyDRgdC+0LfQtNCw0YLRjCDQuCDQv9C+0LTQtNC10YDQttC40LLQsNGC0Ywg0L7RgtC70LjRh9C90YPRjiDQutGA0LXQtNC40YLQvtGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0Lgg0L/Qu9Cw0YLRkdC20LXRgdC/0L7RgdC+0LHQvdC+0YHRgtGMLlwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M1RpdGxlMTBcIjogXCLQn9GA0LjQvdGG0LjQv9GLINC/0YDQvtGG0LLQtdGC0LDQvdC40Y9cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczEwMVwiOiBcItCl0L7RgtC40YLQtSDQu9C4INCy0Ysg0LbQuNGC0Ywg0L/QvtC70L3QvtGG0LXQvdC90L7QuSDQuCDRgdGH0LDRgdGC0LvQuNCy0L7QuSDQttC40LfQvdGM0Y4g0Lgg0LHRi9GC0Ywg0YHQstC+0LHQvtC00L3Ri9C8PyDQp9C10Lwg0LHQvtC70YzRiNC1INC40LfQvtCx0LjQu9C40Y8g0LIg0LbQuNC30L3QuCwg0YLQtdC8INC80LXQvdGM0YjQtSDQsiDQvdC10Lkg0YHRgtGA0LXRgdGB0L7QsiDQuCDRgtC10Lwg0LHQvtC70YzRiNC1INC+0L3QsCDQv9GA0LjQvdC+0YHQuNGCINGD0LTQvtCy0LvQtdGC0LLQvtGA0LXQvdC40Y8uINCa0LDQuiDQstCw0Lwg0LTQvtCx0LjRgtGM0YHRjyDRjdGC0L7Qs9C+PyDQntGC0LLQtdGC0Ysg0LfQsNC60LvRjtGH0LXQvdGLINCyINCx0LDQt9C+0LLRi9GFINC10YHRgtC10YHRgtCy0LXQvdC90YvRhSDQt9Cw0LrQvtC90LDRhSwg0Lgg0L3QsCDQutGD0YDRgdC1IMKr0J/RgNC40L3RhtC40L/RiyDQv9GA0L7RhtCy0LXRgtCw0L3QuNGPwrsg0LLRiyDRg9C30L3QsNC10YLQtSDRjdGC0Lgg0LfQsNC60L7QvdGLOyDRjdGC0Lgg0LTQsNC90L3Ri9C1INC/0L7Qt9Cy0L7Qu9GP0YIg0LLQsNC8INC/0YDQvtGG0LLQtdGC0LDRgtGMINC4INC/0YDQtdGD0YHQv9C10LLQsNGC0Ywg0LIg0LbQuNC30L3QuC4gPGJyPiDQktCw0YjQtSDQstGL0LbQuNCy0LDQvdC40LUg0LLQsNC20L3QviDQtNC70Y8g0LLQsNGBLCDQstCw0YjQtdC5INGB0LXQvNGM0Lgg0Lgg0LTQu9GPINGC0LXRhSwg0LrRgtC+INC+0YIg0LLQsNGBINC30LDQstC40YHQuNGCLiDQkdC70LDQs9C+0LTQsNGA0Y8g0LfQvdCw0L3QuNGOINC4INC/0YDQuNC80LXQvdC10L3QuNGOINC+0YHQvdC+0LLQvdGL0YUg0LTQsNC90L3Ri9GFINC+INC/0YDQvtGG0LLQtdGC0LDQvdC40Lgg0LLRiyDRgdC80L7QttC10YLQtSDQv9C+0LzQvtGH0Ywg0YLQtdC8LCDQutGC0L4g0LLQsNC8INC00L7RgNC+0LMuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMxMDJcIjogXCLQmtC+0LPQtNCwINCy0Ysg0L/QvtC50LzRkdGC0LUg0Y3RgtC4INC+0YHQvdC+0LLRiyDQuCDQvdCw0YPRh9C40YLQtdGB0Ywg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC40L3RgdGC0YDRg9C80LXQvdGC0YssINC60L7RgtC+0YDRi9C1INCy0Ysg0LjQt9GD0YfQuNGC0LUg0L3QsCDRjdGC0L7QvCDQutGD0YDRgdC1LCDQstGLINGB0LzQvtC20LXRgtC1INC/0L7Qu9C90L7RgdGC0YzRjiDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDRgtGMINGB0LLQvtGRINC/0YDQvtGG0LLQtdGC0LDQvdC40LUg0LIg0L3QsNGB0YLQvtGP0YnQtdC8INC4INCyINCx0YPQtNGD0YnQtdC8LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDEwMVwiOiBcItCa0LDQuiDQv9C+0L3Rj9GC0YwsINGH0YLQviDQttC1INGC0LDQutC+0LUg0LTQtdC90YzQs9C4LCDRh9GC0L7QsdGLINGDINCy0LDRgSDQv9C+0Y/QstC40LvQsNGB0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQt9Cw0L3Rj9GC0YzRgdGPINGH0LXQvC3RgtC+INCx0L7Qu9C10LUg0LLQsNC20L3Ri9C8LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDEwMlwiOiBcItCn0YLQviDRgtCw0LrQvtC1IMKr0Y3QutC+0L3QvtC80LjQutCwwrsuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTAzXCI6IFwi0JrQsNC60L7QstGLINC/0YDQuNC90YbQuNC/0Ysg0L7QsdC80LXQvdCwINC4INC60LDQuiDQvtC90Lgg0LLQu9C40Y/RjtGCINC90LAg0LLQsNGI0LUg0LTRg9GI0LXQstC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LUg0Lgg0L/RgNC+0YbQstC10YLQsNC90LjQtS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxMDRcIjogXCLQp9C10YLRi9GA0LUg0YTQsNC60YLQvtGA0LAsINC60L7RgtC+0YDRi9C1INCy0LDQvCDQvdGD0LbQvdC+INC30L3QsNGC0YwsINGH0YLQvtCx0Ysg0L7QtNC10YDQttCw0YLRjCDQv9C+0LHQtdC00YMg0LIg0LbQuNC30L3QuC5cIixcclxuXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNUaXRsZTExXCI6IFwi0KHQvtC30LTQsNC90LjQtSDRg9GB0L/QtdGI0L3QvtCz0L4g0YHRg9C/0YDRg9C20LXRgdGC0LLQsFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTExXCI6IFwi0KfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0YLQsNC60L7QtSDQstCw0LbQvdC+0LUg0L/Rg9GC0LXRiNC10YHRgtCy0LjQtSwg0LrQsNC6INGB0LXQvNC10LnQvdCw0Y8g0LbQuNC30L3RjCwg0LLQsNC8INC90YPQttC90L4g0LrQvtC1LdGH0YLQviDRg9C30L3QsNGC0YwuINCi0L7Qs9C00LAg0LLRiyDRgdC80L7QttC10YLQtSDQv9GA0L7Qu9C+0LbQuNGC0Ywg0YHQstC+0Lkg0LzQsNGA0YjRgNGD0YIuIDxicj4g0JvRjtCx0L7QtSDRg9GB0L/QtdGI0L3QvtC1INGB0YPQv9GA0YPQttC10YHRgtCy0L4g0YHRgtGA0L7QuNGC0YHRjyDQvdCwINC+0L/RgNC10LTQtdC70ZHQvdC90YvRhSDQsdCw0LfQvtCy0YvRhSDQv9GA0LjQvdGG0LjQv9Cw0YUuINCV0YHQu9C4INGDINCy0LDRgSDQstC00L7QsdCw0LLQvtC6INC10YHRgtGMINC40L3RgdGC0YDRg9C80LXQvdGC0Ysg0LTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINGB0L/RgNCw0LLQu9GP0YLRjNGB0Y8g0YEg0YLRgNGD0LTQvdC+0YHRgtGP0LzQuCDQsiDRgdGD0L/RgNGD0LbQtdGB0YLQstC1LCDQuCDQtdGB0LvQuCDQstGLINC30L3QsNC10YLQtSwg0LrQsNC6INC40YUg0L/RgNC40LzQtdC90Y/RgtGMLCDQstGLINGB0LzQvtC20LXRgtC1INGB0L7Qt9C00LDRgtGMINGB0YfQsNGB0YLQu9C40LLRi9C5INGB0L7RjtC3LCDQutC+0YLQvtGA0YvQuSDQv9GA0L7QtNC70LjRgtGB0Y8g0LLRgdGOINC20LjQt9C90YwuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTExXCI6IFwi0JrQsNC6INGB0L7Qt9C00LDRgtGMINGB0YfQsNGB0YLQu9C40LLRg9GOINGB0LXQvNGM0Y4uXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTEyXCI6IFwi0JrQsNC60LjQtSDQutC+0LzQv9C+0L3QtdC90YLRiyDQvdC10L7QsdGF0L7QtNC40LzRiyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQtNC70LjRgtC10LvRjNC90YvRhSDQvtGC0L3QvtGI0LXQvdC40LksINC4INC60LDQuiDQuNGFINC/0YDQuNC80LXQvdGP0YLRjC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxMTNcIjogXCLQn9C10YDQstC+0LUg0YPRgdC70L7QstC40LUg0YHRh9Cw0YHRgtC70LjQstC+0Lkg0YHQtdC80LXQudC90L7QuSDQttC40LfQvdC4INC4INC60LDQutGD0Y4g0YDQvtC70Ywg0LrQsNC20LTRi9C5INC/0LDRgNGC0L3RkdGAINC40LPRgNCw0LXRgiDQsiDQtdGRINGB0L7Qt9C00LDQvdC40LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTE0XCI6IFwi0J/QvtGH0LXQvNGDINCy0LDQttC90L4g0L/RgNC40LTQtdGA0LbQuNCy0LDRgtGM0YHRjyDQvtCx0YnQuNGFINGG0LXQu9C10LkuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGUxMlwiOiBcItCa0LDQuiDRgdC+0YXRgNCw0L3QuNGC0Ywg0YPRgdC/0LXRiNC90YvQtSDRgdGD0L/RgNGD0LbQtdGB0LrQuNC1INC+0YLQvdC+0YjQtdC90LjRj1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTIxXCI6IFwi0J3QsCDRh9C10Lwg0L7RgdC90L7QstGL0LLQsNGO0YLRgdGPINGD0YHQv9C10YjQvdGL0LUg0YHRh9Cw0YHRgtC70LjQstGL0LUg0L7RgtC90L7RiNC10L3QuNGPPyDQp9GC0L4g0L/QvtC30LLQvtC70Y/QtdGCINGB0L7RhdGA0LDQvdC40YLRjCDQuNGFINC4INC/0L7Qu9GD0YfQsNGC0Ywg0L7RgiDQvdC40YUg0YPQtNC+0LLQvtC70YzRgdGC0LLQuNC1PyDQmCDRh9GC0L4g0LLRiyDQvNC+0LbQtdGC0LUg0YHQtNC10LvQsNGC0Ywg0YfRgtC+0LHRiyDQstCw0Ygg0LHRgNCw0Log0L3QtSDRgNCw0YHQv9Cw0LvRgdGPPyDQmtC+0LvQuNGH0LXRgdGC0LLQviDQt9Cw0LrQu9GO0YfQsNC10LzRi9GFINCx0YDQsNC60L7QsiDQstGB0ZEg0LXRidGRINC/0YDQtdCy0YvRiNCw0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLQviDRgNCw0LfQstC+0LTQvtCyLCDQvdC+INGA0LDQt9C90LjRhtCwINC80LXQttC00YMg0Y3RgtC40LzQuCDQtNCy0YPQvNGPINGG0LjRhNGA0LDQvNC4INCx0YvRgdGC0YDQviDRgdC+0LrRgNCw0YnQsNC10YLRgdGPLiA8YnI+INCc0L3QvtCz0LjQtSDQv9GA0L7QsdC70LXQvNGLINCyINC+0LHRidC10YHRgtCy0LUg0LLQvtC30L3QuNC60LDRjtGCINC40Lct0LfQsCDRgNCw0LfRgNGD0YjQtdC90L3Ri9GFINCx0YDQsNC60L7Qsiwg0L3QviDRgyDQstCw0YEg0LXRgdGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQt9Cw0YnQuNGC0LjRgtGMINGB0LLQvtGRINGB0YPQv9GA0YPQttC10YHRgtCy0L4uIDxicj4g0J7RgdC90L7QstC90YvQtSDQt9Cw0LrQvtC90Ysg0LbQuNC30L3QuCDQv9GA0LjQvNC10L3QuNC80Ysg0Lgg0Log0YHRg9C/0YDRg9C20LXRgdGC0LLRgy4g0KHRg9GJ0LXRgdGC0LLRg9GO0YIg0YHQv9C+0YHQvtCx0Ysg0YHQtNC10LvQsNGC0Ywg0LLQsNGI0YMg0LvRjtCx0L7QstGMINGB0LjQu9GM0L3QtdC1INC4INGB0L7Qt9C00LDRgtGMINC+0YLQvdC+0YjQtdC90LjRjywg0LrQvtGC0L7RgNGL0LUg0LHRg9C00YPRgiDRgdGC0LDQvdC+0LLQuNGC0YzRgdGPINCy0YHRkSDQutGA0LXQv9GH0LUg0Lgg0LrRgNC10L/Rh9C1LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTIyXCI6IFwi0JXRgdC70Lgg0LLRiyDQsdGD0LTQtdGC0LUg0L/RgNC40LzQtdC90Y/RgtGMINC00LDQvdC90YvQtSwg0LjQt9GD0YfQtdC90L3Ri9C1INC90LAg0Y3RgtC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDRgdC+0LfQtNCw0LTQuNGC0LUg0L7RgtC90L7RiNC10L3QuNGPLCDQutC+0YLQvtGA0YvQvNC4INCy0Ysg0Lgg0LLQsNGIINC/0LDRgNGC0L3RkdGAINGB0LzQvtC20LXRgtC1INC90LDRgdC70LDQttC00LDRgtGM0YHRjyDQstGB0Y4g0LLQsNGI0YMg0LbQuNC30L3RjC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxMjFcIjogXCLQmtCw0LrQvtCy0Ysg0LrQvtC80L/QvtC90LXQvdGC0YssINC60L7RgtC+0YDRi9C1INC70LXQttCw0YIg0LIg0L7RgdC90L7QstC1INC70Y7QsdGL0YUg0LLQt9Cw0LjQvNC+0L7RgtC90L7RiNC10L3QuNC5IOKAlCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQsiDQvtGB0L3QvtCy0LUg0YHRh9Cw0YHRgtC70LjQstC+0LPQviDQsdGA0LDQutCwLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDEyMlwiOiBcItCk0LDQutGC0L7RgNGLLCDQsdC70LDQs9C+0LTQsNGA0Y8g0LrQvtGC0L7RgNGL0Lwg0LLQt9Cw0LjQvNC+0L7RgtC90L7RiNC10L3QuNGPINC40LfQvNC10L3Rj9GO0YLRgdGPINGC0L7Qu9GM0LrQviDQuiDQu9GD0YfRiNC10LzRgy5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxMjNcIjogXCLQn9C+0YfQtdC80YMg0LrRgNC10L/QutC40LksINC00L7Qu9Cz0L7QstC10YfQvdGL0Lkg0LHRgNCw0Log0LfQsNCy0LjRgdC40YIg0L7RgiDQstC30LDQuNC80L3QvtCz0L4g0LTQvtCy0LXRgNC40Y8g0Lgg0LrQsNC6INGN0YLQviDQtNC+0LLQtdGA0LjQtSDRg9C60YDQtdC/0LjRgtGMLlwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M1RpdGxlMTNcIjogXCLQmtCw0Log0YHQv9Cw0YHRgtC4INGB0YPQv9GA0YPQttC10YHQutC40LUg0L7RgtC90L7RiNC10L3QuNGPXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMxMzFcIjogXCLQp9GC0L4g0LTQtdC70LDRgtGMLCDQtdGB0LvQuCDQsiDRgdGD0L/RgNGD0LbQtdGB0YLQstC1INC90LDQt9GA0LXQstCw0Y7RgiDRgdC10YDRjNGR0LfQvdGL0LUg0L/RgNC+0LHQu9C10LzRiz8g0JXRgdC70Lgg0YMg0YHRg9C/0YDRg9Cz0L7QsiDQv9C+0YHRgtC+0Y/QvdC90L4g0LLQvtC30L3QuNC60LDRjtGCINGA0LDQt9C90L7Qs9C70LDRgdC40Y8sINGC0L4g0LrQsNC6INGBINGN0YLQuNC8INGB0L/RgNCw0LLQuNGC0YzRgdGPPyDQldGB0LvQuCDQutGC0L4t0YLQviDQuNC3INC90LjRhSDQuNC70Lgg0L7QsdCwINGB0L7QsdC40YDQsNGO0YLRgdGPINGA0LDQt9C+0LnRgtC40YHRjCDQuCDQsdGA0LDQuiDRg9C20LUg0LIg0LrRgNC40YLQuNGH0LXRgdC60L7QvCDQv9C+0LvQvtC20LXQvdC40LgsINGC0L4g0LrQsNC6INGN0YLQviDQvNC+0LbQvdC+INC40YHQv9GA0LDQstC40YLRjD8gPGJyPiDQldGB0YLRjCDRgtC+0YfQvdGL0LUg0L/RgNC40YfQuNC90Ysg0YLQvtCz0L4sINC/0L7Rh9C10LzRgyDRgNCw0YHQv9Cw0LTQsNGO0YLRgdGPINCx0YDQsNC60LgsINC/0L7Rh9C10LzRgyDQvtCx0YnQtdC90LjQtSDQvNC10LbQtNGDINC00LLRg9C80Y8g0LvRjtC00YzQvNC4INGB0L7QutGA0LDRidCw0LXRgtGB0Y8g0Lgg0L/QvtGH0LXQvNGDINGDINC+0LTQvdC+0LPQviDQuNC3INGB0YPQv9GA0YPQs9C+0LIg0L/QvtGP0LLQu9GP0LXRgtGB0Y8g0LbQtdC70LDQvdC40LUg0YPQudGC0LguINCj0LfQvdCw0LnRgtC1LCDQutCw0Log0YHQv9Cw0YHRgtC4INGC0LDQutC+0Lkg0LHRgNCw0LouXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMxMzJcIjogXCLQkdCw0LfQvtCy0YvQtSDQuNGB0YLQuNC90YssINC40LfQu9C+0LbQtdC90L3Ri9C1INCyINGN0YLQvtC8INC60YPRgNGB0LUg0LvQtdC20LDRgiDQsiDQvtGB0L3QvtCy0LUg0LvRjtCx0YvRhSDQstC30LDQuNC80L7QvtGC0L3QvtGI0LXQvdC40LkuINCe0L3QuCDRgdC+0YHRgtCw0LLQu9GP0Y7RgiDQtdC00LjQvdGB0YLQstC10L3QvdGD0Y4g0LTQtdC50YHRgtCy0LXQvdC90YPRjiDRgtC10YXQvdC+0LvQvtCz0LjRjiDQvtGC0L3QvtGI0LXQvdC40Lkg0LzQtdC20LTRgyDQu9GO0LTRjNC80Lgg0Lgg0YPQttC1INGB0L/QsNGB0LvQuCDRgtGL0YHRj9GH0Lgg0LHRgNCw0LrQvtCyLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDEzMVwiOiBcItCi0YDQuCDRjdC70LXQvNC10L3RgtCwLCDQutC+0YLQvtGA0YvQtSDQv9GA0LjRgdGD0YLRgdGC0LLRg9GO0YIg0LIg0LvRjtCx0YvRhSDQvtGC0L3QvtGI0LXQvdC40Y/RhSDQuCDQv9GA0LjQvNC10L3Rj9GPINC60L7RgtC+0YDRi9C1INCy0Ysg0YHQvNC+0LbQtdGC0LUg0YHQvtC30LTQsNGC0Ywg0LTQu9C40YLQtdC70YzQvdGL0Lkg0Lgg0LHQu9Cw0LPQvtC/0L7Qu9GD0YfQvdGL0Lkg0YHQvtGO0LcuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTMyXCI6IFwi0JrQsNC6INGD0YHRgtGA0LDQvdC40YLRjCDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90ZHQvdC90YPRjiDQv9GA0LjRh9C40L3RgyDQutC+0L3RhNC70LjQutGC0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0LLQvtC30L3QuNC60LDRjtGCINC80LXQttC00YMg0LzRg9C20LXQvCDQuCDQttC10L3QvtC5LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDEzM1wiOiBcItCf0YDQuNGH0LjQvdCwLCDQv9C+INC60L7RgtC+0YDQvtC5INGB0YPQv9GA0YPQs9C4INGA0LXRiNCw0Y7RgiDRgNCw0LfQvtC50YLQuNGB0YwsINC4INC40L3RgdGC0YDRg9C80LXQvdGC0YssINC/0L7Qt9Cy0L7Qu9GP0Y7RidC40LUg0Y3RgtC+INC40YHQv9GA0LDQstC40YLRjC5cIixcclxuXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNUaXRsZTE0XCI6IFwi0JrQsNC6INGA0L7QtNC40YLRjCDQuCDRgNCw0YHRgtC40YLRjCDRgdGH0LDRgdGC0LvQuNCy0L7Qs9C+INC80LvQsNC00LXQvdGG0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczE0MVwiOiBcItCa0LDQttC00YvQuSDRgNC+0LTQuNGC0LXQu9GMINGF0L7Rh9C10YIg0YHQtNC10LvQsNGC0Ywg0LLRgdGRLCDRh9GC0L4g0LIg0LXQs9C+INGB0LjQu9Cw0YUsINC00LvRjyDRgdCy0L7QtdCz0L4g0YDQtdCx0ZHQvdC60LAsINC90LDRh9C40L3QsNGPINGBINC30LDRh9Cw0YLQuNGPINC00L4g0L/QtdGA0LjQvtC00LAg0LzQu9Cw0LTQtdC90YfQtdGB0YLQstCwLCDRh9GC0L7QsdGLINC/0L7QvNC+0YfRjCDQtdC80YMg0L3QsNGH0LDRgtGMINC20LjQt9C90Ywg0LrQsNC6INC80L7QttC90L4g0LvRg9GH0YjQtS4g0J3QviDRh9GC0L4g0LTQvtC70LbQvdCwINC00LXQu9Cw0YLRjCDQvNCw0YLRjD8g0KfQtdCz0L4g0L7QvdCwINC00L7Qu9C20L3QsCDQvtGB0YLQtdGA0LXQs9Cw0YLRjNGB0Y8/INCYINGH0YLQviDQtNC+0LvQttC10L0g0LfQvdCw0YLRjCDQvtGC0LXRhiwg0YfRgtC+0LHRiyDQsdGL0YLRjCDRhdC+0YDQvtGI0LjQvCDQvtGC0YbQvtC8PyA8YnI+INCg0L7QtNC40YLQtdC70Y/QvCDQvdC10L7QsdGF0L7QtNC40LzQviDQt9C90LDRgtGMLCDRh9GC0L4g0LzQvtC20LXRgiDQv9C+0LLQu9C40Y/RgtGMINC90LAg0LXRidGRINC90LUg0YDQvtC20LTRkdC90L3QvtCz0L4g0YDQtdCx0ZHQvdC60LAuINCV0YHQu9C4INGA0LXQsdGR0L3QvtC6INC80L7QttC10YIg0L/QvtC80L3QuNGC0Ywg0YfRgtC+LdGC0L4sINGH0YLQviDQv9GA0L7QuNC30L7RiNC70L4g0LTQviDQtdCz0L4g0YDQvtC20LTQtdC90LjRjywg0YLQviDRh9GC0L4g0LTQvtC70LbQvdGLINGB0LTQtdC70LDRgtGMINGA0L7QtNC40YLQtdC70LgsINGH0YLQvtCx0Ysg0Y3RgtC+INC+0LrQsNC30LDQu9C+INC90LAg0L3QtdCz0L4g0L3QsNC40LzQtdC90YzRiNC10LUg0LLQu9C40Y/QvdC40LU/INCe0YLQstC10YLRiyDQvdCwINGN0YLQuCDQstC+0L/RgNC+0YHRiyDQstGLINC90LDQudC00ZHRgtC1INCyINC60YPRgNGB0LUgwqvQmtCw0Log0YDQvtC00LjRgtGMINC4INGA0LDRgdGC0LjRgtGMINGB0YfQsNGB0YLQu9C40LLQvtCz0L4g0LzQu9Cw0LTQtdC90YbQsMK7LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTQyXCI6IFwi0J3QsCDRjdGC0L7QvCDQutGD0YDRgdC1INC4INC80LDRgtGMLCDQuCDQvtGC0LXRhiDQvtCx0YDQtdGC0YPRgiDQt9C90LDQvdC40Y8g0Lgg0LjQvdGB0YLRgNGD0LzQtdC90YLRiywg0LjRgdC/0L7Qu9GM0LfRg9GPINC60L7RgtC+0YDRi9C1INC+0L3QuCDRgdC80L7Qs9GD0YIg0L7QsdC10YHQv9C10YfQuNGC0Ywg0LHQu9Cw0LPQvtC/0L7Qu9GD0YfQuNC1INGB0LLQvtC10LPQviDRgNC10LHRkdC90LrQsC4g0JLRiyDRg9C30L3QsNC10YLQtSwg0YfRgtC+INC90LXQvtCx0YXQvtC00LjQvNC+INC00LXQu9Cw0YLRjCDQuCDRh9C10LPQviDQuNC30LHQtdCz0LDRgtGMLCDRh9GC0L7QsdGLINC/0LXRgNCy0YvQtSDQs9C+0LTRiyDQttC40LfQvdC4INGA0LXQsdGR0L3QutCwINCx0YvQu9C4INC90LDQuNC70YPRh9GI0LjQvNC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE0MVwiOiBcItCn0LXQs9C+INC70YPRh9GI0LUg0LjQt9Cx0LXQs9Cw0YLRjCDQsdC10YDQtdC80LXQvdC90L7QuSDQttC10L3RidC40L3QtSDQuCDRh9GC0L4g0LXQuSDQvdGD0LbQvdC+INC00LXQu9Cw0YLRjCwg0YfRgtC+0LHRiyDQt9Cw0YnQuNGC0LjRgtGMINGB0LLQvtC10LPQviDRgNC10LHRkdC90LrQsCwg0LIg0YPRgtGA0L7QsdC1LCDQstC+INCy0YDQtdC80Y8g0YDQvtC00L7QsiDQuCDQsiDQv9C10YDQuNC+0LQg0LzQu9Cw0LTQtdC90YfQtdGB0YLQstCwLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE0MlwiOiBcItCf0L7Rh9C10LzRgyDQsdC10YDQtdC80LXQvdC90L7QuSDQttC10L3RidC40L3QtSDQstCw0LbQvdC+INC30LDQsdC+0YLQuNGC0YzRgdGPINC+INGB0LXQsdC1INC4INGH0YLQviDQstGLINC00L7Qu9C20L3RiyDQtNC10LvQsNGC0Ywg0LTQu9GPINC90LDQuNCx0L7Qu9GM0YjQtdCz0L4g0LHQu9Cw0LPQsCDQstCw0YjQtdCz0L4g0YDQtdCx0ZHQvdC60LAuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTQzXCI6IFwi0JrQsNC6INC80LDQvNCwINC80L7QttC10YIg0L/RgNC+0LLQvtC00LjRgtGMINGB0LXQsdC1INCw0YHRgdC40YHRgtGLINC4LCDRgtCw0LrQuNC8INC+0LHRgNCw0LfQvtC8LCDQv9C+0LzQvtGH0Ywg0YDQtdCx0ZHQvdC60YMuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGUxNVwiOiBcItCa0LDQuiDRhdC+0YDQvtGI0L4g0LLQvtGB0L/QuNGC0YvQstCw0YLRjCDQtNC10YLQtdC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMxNTFcIjogXCIg0KDQvtC00LjRgtC10LvQuCDRgdGC0LDRgNCw0Y7RgtGB0Y8g0LjQt9C+INCy0YHQtdGFINGB0LjQuywg0YfRgtC+0LHRiyDQutCw0Log0LzQvtC20L3QviDQu9GD0YfRiNC1INCy0L7RgdC/0LjRgtCw0YLRjCDRgdCy0L7QtdCz0L4g0YDQtdCx0ZHQvdC60LAsINC90L4g0LHQvtC70YzRiNC40L3RgdGC0LLQviDRgdGH0LjRgtCw0Y7Rgiwg0YfRgtC+INGN0YLQviDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINGC0L7Qu9GM0LrQviDQvNC10YLQvtC00L7QvCDQv9GA0L7QsSDQuCDQvtGI0LjQsdC+0LouINCa0LDQuiDRgNC+0LTQuNGC0LXQu9GP0Lwg0LLQvtGB0L/QuNGC0LDRgtGMINGB0LLQvtC10LPQviDRgNC10LHRkdC90LrQsCwg0YfRgtC+0LHRiyDQvtC9INCx0YvQuyDQuNC90LjRhtC40LDRgtC40LLQvdGL0Lwg0Lgg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3Ri9C8INC4INGB0LDQvCDQvNC+0LMg0L/RgNC40L3QuNC80LDRgtGMINC60L7QvdGB0YLRgNGD0LrRgtC40LLQvdGL0LUg0YDQtdGI0LXQvdC40Y8/INCh0YPRidC10YHRgtCy0YPQtdGCINC80L3QvtC20LXRgdGC0LLQviDQvNC90LXQvdC40Lkg0L4g0YLQvtC8LCDQutCw0Log0Y3RgtC+INGB0LTQtdC70LDRgtGMLCDQvdC+INC10YHRgtGMINC70Lgg0YHRgNC10LTQuCDQvdC40YUg0YXQvtGC0Ywg0LrQsNC60LjQtS3RgtC+INGA0LDQt9GD0LzQvdGL0LUg0L/RgNC40L3RhtC40L/Riywg0LrQvtGC0L7RgNGL0Lwg0LzQvtC20L3QviDQtNC+0LLQtdGA0Y/RgtGMP1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTUyXCI6IFwi0JrQvtCz0LTQsCDQstGLINC+0YHQstC+0LjRgtC1INC00LDQvdC90YvQtSDQuCDQuNC90YHRgtGA0YPQvNC10L3RgtGLLCDRgdC+0LTQtdGA0LbQsNGJ0LjQtdGB0Y8g0LIg0Y3RgtC+0Lwg0LrRg9GA0YHQtSwg0Lgg0L3QsNGH0L3RkdGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC40YUsINCy0Ysg0YHQvNC+0LbQtdGC0LUg0L/QvtC80L7Rh9GMINGB0LLQvtC10LzRgyDRgNC10LHRkdC90LrRgyDRgdGC0LDRgtGMINGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90YvQvCwg0YHRh9Cw0YHRgtC70LjQstGL0Lwg0YfQtdC70L7QstC10LrQvtC8LCDRhtC10L3QvdGL0Lwg0LrQsNC6INC00LvRjyDRgdC10LzRjNC4LCDRgtCw0Log0Lgg0LTQu9GPINC+0LHRidC10YHRgtCy0LAuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTUxXCI6IFwi0KfRgtC+INCx0L7Qu9GM0YjQtSDQstGB0LXQs9C+INC90YPQttC90L4g0YDQtdCx0ZHQvdC60YMg0L7RgiDRgNC+0LTQuNGC0LXQu9C10LkuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTUyXCI6IFwi0JrQsNC6INCy0Ysg0LzQvtC20LXRgtC1INC/0L7QvNC+0YfRjCDRgNC10LHRkdC90LrRgyDRgdC/0YDQsNCy0LjRgtGM0YHRjyDRgSDQtdCz0L4g0L/RgNC+0LHQu9C10LzQsNC80LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTUzXCI6IFwi0J/QvtGH0LXQvNGDINGA0LXQsdGR0L3QvtC6INC90LDRh9C40L3QsNC10YIg0LfQu9C40YLRjNGB0Y8g0Lgg0LrQsNC6INCx0YvRgdGC0YDQviDQv9C+0LzQvtGH0Ywg0LXQvNGDINGB0L/RgNCw0LLQuNGC0YzRgdGPINGBINC10LPQviDRgNCw0YHRgdGC0YDQvtC50YHRgtCy0LDQvNC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE1NFwiOiBcItCa0LDQuiDQttC40YLRjCDRgSDQtNC10YLRjNC80Lgg0Lgg0L/QvtC80L7Qs9Cw0YLRjCDQuNC8INGA0LDRgdGC0Lgg0Lgg0YHRgtCw0YLRjCDQt9Cw0LzQtdGH0LDRgtC10LvRjNC90YvQvNC4LCDRg9GB0L/QtdGI0L3Ri9C80Lgg0LvRjtC00YzQvNC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE1NVwiOiBcItCa0LDQuiDRgSDQv9C+0LzQvtGJ0YzRjiDQv9GA0L7RgdGC0L7Qs9C+LCDQvdC+INC80L7RidC90L7Qs9C+INC00LXQudGB0YLQstC40Y8g0L/QvtC80L7Rh9GMINGA0LXQsdGR0L3QutGDINC+0L/RgNCw0LLQuNGC0YzRgdGPINC+0YIg0YLRgNCw0LLQvC5cIixcclxuXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNUaXRsZTE2XCI6IFwi0JrQsNC6INGBINGD0YHQv9C10YXQvtC8INCy0L7RgdC/0LjRgtGL0LLQsNGC0Ywg0LTQtdGC0LXQuSDQuCDQv9C+0LTRgNC+0YHRgtC60L7QslwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTYxXCI6IFwi0JLQvtGB0L/QuNGC0LDQvdC40LUg0LTQtdGC0LXQuSDQuCDQv9C+0LTRgNC+0YHRgtC60L7QsiDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQvtC70LbQvdC+INCx0YvRgtGMINCx0L7RgNGM0LHQvtC5INGBINC90LjQvNC4LiDQndCw0L7QsdC+0YDQvtGCINC+0YIg0L3QtdCz0L4g0LzQvtC20L3QviDQv9C+0LvRg9GH0LDRgtGMINC+0LPRgNC+0LzQvdC+0LUg0YPQtNC+0LLQu9C10YLQstC+0YDQtdC90LjQtS4g0J3QviDRgNCw0Lcg0YPQtiDQtNC10YLQuCDQvdC1INC/0L7Rj9Cy0LvRj9GO0YLRgdGPINCy0LzQtdGB0YLQtSDRgSDQuNC90YHRgtGA0YPQutGG0LjQtdC5INC/0L4g0LjRhSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjiwg0L7RgdGC0LDRkdGC0YHRjyDQstC+0L/RgNC+0YE6INCa0LDQuj8g0JrQsNC6INC70YPRh9GI0LUg0LLRgdC10LPQviDQv9C+0LzQvtGH0Ywg0LjQvCDRgdGC0LDRgtGMINGB0YfQsNGB0YLQu9C40LLRi9C80LgsINC/0L7RgNGP0LTQvtGH0L3Ri9C80Lgg0LPRgNCw0LbQtNCw0L3QsNC80LgsINC60L7RgtC+0YDRi9C1INC00LXQudGB0YLQstGD0Y7RgiDQv9C+INGB0L7QsdGB0YLQstC10L3QvdC+0Lkg0LjQvdC40YbQuNCw0YLQuNCy0LUuIDxicj4g0KPQt9C90LDQudGC0LUg0L7RgdC90L7QstC90YvQtSDQv9GA0LjQvdGG0LjQv9GLINCy0L7RgdC/0LjRgtCw0L3QuNGPINC00LXRgtC10Lkg0Lgg0L/QvtC00YDQvtGB0YLQutC+0LIuINCX0LDQu9C+0LbQuNGC0LUg0L3QsNC00ZHQttC90L7QtSDQvtGB0L3QvtCy0LDQvdC40LUsINC60L7RgtC+0YDQvtC1INC/0L7Qt9Cy0L7Qu9C40YIg0LjQvCDQstGL0YDQsNGB0YLQuCDQuCDQtNC+0LHQuNGC0YzRgdGPINGD0YHQv9C10YXQsCDQsiDQttC40LfQvdC4LiDQndCwINGN0YLQvtC8INC60YPRgNGB0LUg0LLRiyDRg9C30L3QsNC10YLQtSwg0LrQsNC6INGN0YLQviDRgdC00LXQu9Cw0YLRjC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczE2MlwiOiBcItCa0L7Qs9C00LAg0LLRiyDQt9C90LDQtdGC0LUg0Lgg0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLLCDRgdC+0LTQtdGA0LbQsNGJ0LjQtdGB0Y8g0LIg0Y3RgtC+0Lwg0LrRg9GA0YHQtSwg0LLRiyDQvNC+0LbQtdGC0LUg0L/QvtC80L7Rh9GMINCy0LDRiNC10LzRgyDRgNC10LHRkdC90LrRgyDQvtCx0YDQtdGB0YLQuCDRgdGH0LDRgdGC0YzQtSDQuCDQtNC+0LHQuNGC0YzRgdGPINGD0YHQv9C10YXQsCDQsiDQsdGD0LTRg9GJ0LXQvC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxNjFcIjogXCLQndCw0YHQutC+0LvRjNC60L4g0LLQsNC20L3QviDQtNCw0YLRjCDQvNC+0LvQvtC00ZHQttC4INGG0LXQu9GMINCyINC20LjQt9C90Lgg0Lgg0LrQsNC6INGN0YLQviDRgdC00LXQu9Cw0YLRjD9cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxNjJcIjogXCLQmtCw0LrRg9GOINGA0L7Qu9GMINCyINC20LjQt9C90Lgg0LTQtdGC0LXQuSDQuCDQv9C+0LTRgNC+0YHRgtC60L7QsiDQuNCz0YDQsNC10YIg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQstC90L7RgdC40YLRjCDRgdCy0L7QuSDQstC60LvQsNC0INC4INC60LDQuiDRjdGC0L4g0LLQu9C40Y/QtdGCINC90LAg0LjRhSDQv9C+0LLQtdC00LXQvdC40LUg0Lgg0L7RgtC90L7RiNC10L3QuNC1INC6INC+0LrRgNGD0LbQsNGO0YnQuNC8P1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE2M1wiOiBcItCn0YLQviDQstGLINC60LDQuiDRgNC+0LTQuNGC0LXQu9GMINC80L7QttC10YLQtSDRgdC00LXQu9Cw0YLRjCwg0YfRgtC+0LHRiyDQv9C+0LzQvtGH0Ywg0YHQstC+0LjQvCDQtNC10YLRj9C8INGB0L7Qt9C00LDRgtGMINCx0L7Qu9C10LUg0Y/RgNC60L7QtSDQuCDRgdGH0LDRgdGC0LvQuNCy0L7QtSDQsdGD0LTRg9GJ0LXQtSDQuCDQtNC+0YHRgtC40YfRjCDQsdC70LDQs9C+0L/QvtC70YPRh9C40Y8/XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTY0XCI6IFwi0JrQsNC6INCx0YvRgtGMINC/0YDQsNCy0LjQu9GM0L3Ri9C80Lgg0YDQvtC00LjRgtC10LvRj9C80LguXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGUxN1wiOiBcItCf0YDQtdC+0LTQvtC70LXQvdC40LUg0L/QvtC00YzQtdC80L7QsiDQuCDRgdC/0LDQtNC+0LIg0LIg0LbQuNC30L3QuFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTcxXCI6IFwi0JrQvtCz0LTQsCDQstGLINCy0LTRgNGD0LMg0L3QsNGH0LjQvdCw0LXRgtC1INGB0L7QstC10YDRiNCw0YLRjCDQvtGI0LjQsdC60LgsINGN0YLQvtC80YMg0LXRgdGC0Ywg0L/RgNC40YfQuNC90LAuINCY0LvQuCDQutC+0LPQtNCwINCy0Ysg0YHRh9Cw0YHRgtC70LjQstGLLCDQsCDQv9C+0YLQvtC8INCx0LXQt9C+INCy0YHRj9C60L7QuSDQstC40LTQuNC80L7QuSDQv9GA0LjRh9C40L3RiyDQstC00YDRg9CzINC/0YDQuNGF0L7QtNC40YLQtSDQsiDQv9C+0LTQsNCy0LvQtdC90L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtSwg0Y3RgtC+INCx0YvQu9C+INCy0YvQt9Cy0LDQvdC+INC60LXQvC3RgtC+LiA8YnI+INCh0YPRidC10YHRgtCy0YPRjtGCINC+0L/RgNC10LTQtdC70ZHQvdC90YvQtSDRgtC40L/RiyDQu9GO0LTQtdC5IOKAlCDRgtC1LCDQutGC0L4g0LbQtdC70LDRjtGCINC70Y7QtNGP0Lwg0LTQvtCx0YDQsCwg0Lgg0YLQtSwg0YMg0LrQvtCz0L4g0LTRg9GA0L3Ri9C1INC90LDQvNC10YDQtdC90LjRjy4gPGJyPiDQldGB0LvQuCDQstGLINCyINC20LjQt9C90Lgg0LjRgdC/0YvRgtGL0LLQsNC10YLQtSDCq9Cw0LzQtdGA0LjQutCw0L3RgdC60LjQtSDQs9C+0YDQutC4wrssINC60YLQvi3RgtC+INC40Lcg0LLQsNGI0LXQs9C+INC+0LrRgNGD0LbQtdC90LjRjywg0LLQvtC30LzQvtC20L3Qviwg0L/QvtC00LDQstC70Y/QtdGCINCy0LDRgSDigJQg0LTQsNCy0LjRgiDQvdCwINCy0LDRgSDQuNC70Lgg0L/Ri9GC0LDQtdGC0YHRjyDRgdC00LXQu9Cw0YLRjCDQstCw0YEg0LzQtdC90YzRiNC1LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMTcyXCI6IFwi0JLQu9Cw0LTQtdGPINC90L7Rgy3RhdCw0YMsINC60L7RgtC+0YDQvtC1INC/0L7Qt9Cy0L7Qu9GP0LXRgiDRg9GB0YLRgNCw0L3QuNGC0Ywg0L/RgNC40YfQuNC90YssINGB0YLQvtGP0YnQuNC1INC30LAg0LLQsNGI0LjQvNC4INC90LXRg9C00LDRh9Cw0LzQuCwg0LLRiyDQvNC+0LbQtdGC0LUg0LjQt9C80LXQvdC40YLRjCDRgdCy0L7RjiDQttC40LfQvdGMINC6INC70YPRh9GI0LXQvNGDLCDRgNCw0Lcg0Lgg0L3QsNCy0YHQtdCz0LTQsCDQuNC30LHQsNCy0LjRgtGM0YHRjyDQvtGCINGB0L/QsNC00L7QsiDQuCDRg9GB0YLRgNC10LzQuNGC0YzRgdGPINC6INGB0LLQvtC40Lwg0LLQtdC70LjRh9Cw0LnRiNC40Lwg0YbQtdC70Y/QvC4g0J7QsdGA0LXRgtC40YLQtSDRgdGC0LDQsdC40LvRjNC90L7RgdGC0Ywg0YHQtdCz0L7QtNC90Y8uXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTcxXCI6IFwi0JrQsNC6INGA0LDQt9C70LjRh9Cw0YLRjCDQtNCy0LAg0YLQuNC/0LAg0LvRjtC00LXQuSDigJQg0YLQtdGFLCDQutGC0L4g0L/Ri9GC0LDQtdGC0YHRjyDRgdC+0LfQtNCw0LLQsNGC0YwsINC4INGC0LXRhSwg0LrRgtC+INC/0YvRgtCw0LXRgtGB0Y8g0YDQsNC30YDRg9GI0LDRgtGMLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE3MlwiOiBcItCn0YLQviDQtNC10LvQsNGC0Ywg0YEg0YLQtdC80LgsINC60YLQviDRhdC+0YfQtdGCINC/0YDQuNC90LXRgdGC0Lgg0LLQsNC8INCy0YDQtdC0LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE3M1wiOiBcItCa0LDQuiDRgNCw0YHQv9C+0LfQvdCw0YLRjCDQstCw0YjQuNGFINC90LDRgdGC0L7Rj9GJ0LjRhSDQtNGA0YPQt9C10Lkg0YHRgNC10LTQuCDRgtC10YUsINC60YLQviDQvdCw0YHRgtGA0L7QtdC9INC/0YDQvtGC0LjQsiDQstCw0YEuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGUxOFwiOiBcItCb0LjRh9C90YvQtSDRhtC10L3QvdC+0YHRgtC4INC4INGG0LXQu9C+0YHRgtC90L7RgdGC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczE4MVwiOiBcItCn0LXRgdGC0L3Ri9C5INC4INC+0YLQutGA0YvRgtGL0Lkg0YfQtdC70L7QstC10Log0LTQvtGB0YLQuNCz0L3QtdGCINGB0LLQvtC40YUg0YbQtdC70LXQuSDQt9C90LDRh9C40YLQtdC70YzQvdC+INC70LXQs9GH0LUsINGH0LXQvCDRgtC+0YIsINC60YLQviDQvdC10YfQtdGB0YLQtdC9INC4INC30LDQvNC60L3Rg9GCINCyINGB0LXQsdC1LiDQltC40YLRjCDRgdC+0LPQu9Cw0YHQvdC+INGB0L7QsdGB0YLQstC10L3QvdGL0Lwg0LjQtNC10LDQu9Cw0Lwg4oCUINCy0LXRgNC90YvQuSDQv9GD0YLRjCDQuiDRg9GB0L/QtdGF0YMuINCd0L4g0LrQsNC6INC20LjRgtGMINGB0L7Qs9C70LDRgdC90L4g0YHQvtCx0YHRgtCy0LXQvdC90YvQvCDQuNC00LXQsNC70LDQvD8gPGJyPiDQo9C30L3QsNC50YLQtSwg0L/QvtGH0LXQvNGDINC70Y7QtNC4INGD0YLRgNCw0YfQuNCy0LDRjtGCINC70LjRh9C90YPRjiDRhtC10LvQvtGB0YLQvdC+0YHRgtGMINC4INC+0YLRgdGC0YDQsNC90Y/RjtGC0YHRjyDQvtGCINC00YDRg9Cz0LjRhS4g0J7RgtC60YDQvtC50YLQtSDQtNC70Y8g0YHQtdCx0Y8g0LjQvdGB0YLRgNGD0LzQtdC90YLRiywg0YEg0L/QvtC80L7RidGM0Y4g0LrQvtGC0L7RgNGL0YUg0LLRiyDQvNC+0LbQtdGC0LUg0L/QvtC70L3QvtGB0YLRjNGOINC40LfQvNC10L3QuNGC0Ywg0YHQstC+0Y4g0LbQuNC30L3RjCDQuCDRgdGC0LDRgtGMINCx0L7Qu9C10LUg0YHRh9Cw0YHRgtC70LjQstGL0Lwg0Lgg0L/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YzQvdGL0Lwg0Lgg0LTQvtGB0YLQuNGH0Ywg0LHQvtC70YzRiNC10LPQviDQv9GA0L7RhtCy0LXRgtCw0L3QuNGPLiDQlNC+0LHQtdC50YLQtdGB0Ywg0YPRgdC/0LXRhdCwINC4INC+0LHRgNC10YLQuNGC0LUg0YHRh9Cw0YHRgtGM0LUg0YHQtdCz0L7QtNC90Y8uXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMxODJcIjogXCLQmtCw0Log0YHQutCw0LfQsNC7INCbLiDQoNC+0L0g0KXQsNCx0LHQsNGA0LQ6IMKr0JXRgdC70Lgg0LHRiyDRgtC+0LvRjNC60L4g0YfQtdC70L7QstC10Log0LfQvdCw0Lsg0L/RgNC+0YHRgtGD0Y4g0YLQtdGF0L3QvtC70L7Qs9C40Y4g0Y3RgtC40LrQuCwg0L7QvSDQvNC+0LMg0LHRiyDQtNC+0YHRgtC40YfRjCDRgdCw0LzQvtGD0LLQsNC20LXQvdC40Y8sINC70LjRh9C90L7Qs9C+INGD0LTQvtCy0LvQtdGC0LLQvtGA0LXQvdC40Y8g0Lgg0YPRgdC/0LXRhdCwLCDQviDRh9GR0LwsINC60LDQuiDQtdC80YMg0LrQsNC30LDQu9C+0YHRjCwg0L7QvSDQvNC+0LMg0YLQvtC70YzQutC+INC80LXRh9GC0LDRgtGMwrsuIDxicj4g0K3RgtC+0YIg0LrRg9GA0YEg4oCUINCy0LDRiCDRiNCw0L3RgSDQstC+0L/Qu9C+0YLQuNGC0Ywg0Y3RgtC4INC80LXRh9GC0Ysg0LIg0YDQtdCw0LvRjNC90L7RgdGC0YwuINCS0LvQsNC00LXRjyDQv9GA0LDQutGC0LjRh9C10YHQutC40LzQuCDQt9C90LDQvdC40Y/QvNC4LCDQutC+0YLQvtGA0YvQtSDQv9C+0LfQstC+0LvRj9GO0YIg0YPRgdGC0YDQsNC90LjRgtGMINC/0YDQuNGH0LjQvdGLLCDRgdGC0L7Rj9GJ0LjQtSDQt9CwINCy0LDRiNC40LzQuCDQvdC10YPQtNCw0YfQsNC80Lgg0Lgg0L3QtdGB0YfQsNGB0YLRjNGP0LzQuCwg0LLRiyDRgdC80L7QttC10YLQtSDQuNC30LzQtdC90LjRgtGMINGB0LLQvtGOINC20LjQt9C90Ywg0Log0LvRg9GH0YjQtdC80YMsINCx0LvQsNCz0L7QtNCw0YDRjyDRh9C10LzRgyDQstGB0ZEg0Y3RgtC+INC+0YHRgtCw0L3QtdGC0YHRjyDQsiDQv9GA0L7RiNC70L7QvC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxODFcIjogXCLQmtCw0Log0LTQvtCx0LjRgtGM0YHRjyDRg9GB0L/QtdGF0LAg0LIg0LbQuNC30L3QuC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxODJcIjogXCLQmtCw0Log0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0LLQsNGI0Lgg0LvQuNGH0L3Ri9C1INGG0LXQvdC90L7RgdGC0Lgg0Lgg0LrQsNC6INC+0L3QuCDQstC70LjRj9GO0YIg0L3QsCDQstCw0YjRgyDQttC40LfQvdGMLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE4M1wiOiBcItCi0L7Rh9C90YvQtSDQvtC/0YDQtdC00LXQu9C10L3QuNGPINC00L7QsdGA0LAg0Lgg0LfQu9CwLCDQv9GA0LDQstC40LvRjNC90L7Qs9C+INC4INC90LXQv9GA0LDQstC40LvRjNC90L7Qs9C+INC4INC60LDQuiDQstGLINC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0Y3RgtC4INC30L3QsNC90LjRjywg0YfRgtC+0LHRiyDRgdC00LXQu9Cw0YLRjCDQstCw0YjRgyDQttC40LfQvdGMINCx0L7Qu9C10LUg0YHRh9Cw0YHRgtC70LjQstC+0Lkg0Lgg0YPRgdC/0LXRiNC90L7QuS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QxODRcIjogXCLQmtCw0Log0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINCy0LDRiNGDINC70LjRh9C90YPRjiDRhtC10LvQvtGB0YLQvdC+0YHRgtGMLCDRg9C70YPRh9GI0LjRgtGMINC/0L7Qu9C+0LbQtdC90LjQtSDQtNC10Lsg0LIg0LLQsNGI0LXQuSDQttC40LfQvdC4INC4INC/0L7QvNC+0YfRjCDQtNGA0YPQs9C40Lwg0YHQtNC10LvQsNGC0Ywg0YLQviDQttC1INGB0LDQvNC+0LUuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGUxOVwiOiBcItCa0LDQuiDRg9C70YPRh9GI0LDRgtGMINC+0YLQvdC+0YjQtdC90LjRjyDRgSDQu9GO0LTRjNC80LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczE5MVwiOiBcItCV0YHRgtGMINGA0Y/QtCDQstC/0L7Qu9C90LUg0LrQvtC90LrRgNC10YLQvdGL0YUg0YTQsNC60YLQvtGA0L7QsiwgINC60L7RgtC+0YDRi9C1INGB0LLQvtC50YHRgtCy0LXQvdC90Ysg0LLRgdC10Lwg0YfQtdC70L7QstC10YfQtdGB0LrQuNC8INC+0YLQvdC+0YjQtdC90LjRj9C8LCDQsdGD0LTRjCDRgtC+INC+0YLQvdC+0YjQtdC90LjRjyDQsiDRgdC10LzRjNC1INC40LvQuCDQsiDQsdC40LfQvdC10YHQtSwg0LHQu9C40LfQutC40LUg0LjQu9C4INC/0L7QstC10YDRhdC90L7RgdGC0L3Ri9C1LCDQutGA0LDRgtC60L7RgdGA0L7Rh9C90YvQtSDQuNC70Lgg0LTQvtC70LPQvtCy0LXRh9C90YvQtS4g0JrQvtCz0LTQsCDQstGLINC30L3QsNC10YLQtSDRjdGC0Lgg0LrQvtC80L/QvtC90LXQvdGC0Ysg0Lgg0YPQvNC10LXRgtC1INC40YUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMLCDQstGLINC80L7QttC10YLQtSDRgdC+0LfQtNCw0LLQsNGC0Ywg0LLQt9Cw0LjQvNC90L7QtSDRgNCw0YHQv9C+0LvQvtC20LXQvdC40LUsINC/0L7QtNC00LXRgNC20LrRgyDQuCDQstC+0YHRhdC40YnQtdC90LjQtSwg0LHQu9Cw0LPQvtC00LDRgNGPINGH0LXQvNGDINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDRjtGC0YHRjyDQv9C+LdC90LDRgdGC0L7Rj9GJ0LXQvNGDINGF0L7RgNC+0YjQuNC1INC+0YLQvdC+0YjQtdC90LjRjy4gPGJyPiDQldGB0YLRjCDQtdGJ0ZEg0L7QtNC40L0g0YLQvtGH0L3Ri9C5INGN0LvQtdC80LXQvdGCLCDQutC+0YLQvtGA0YvQuSDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIg0LLQviDQstGB0LXRhSDRgdC/0L7RgNCw0YUg0Lgg0L7Qs9C+0YDRh9C10L3QuNGP0YUuINCX0L3QsNGPINGN0YLQvtGCINGE0LDQutGC0L7RgCDQuCDRgtC+0YfQvdGD0Y4g0YTQvtGA0LzRg9C70YMg0LTQu9GPINC10LPQviDQv9GA0LjQvNC10L3QtdC90LjRjywg0LLRiyDQvNC+0LbQtdGC0LUg0YDQsNC30YDQtdGI0LjRgtGMINC70Y7QsdC+0Lkg0LrQvtC90YTQu9C40LrRgiDQuCDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0LPQsNGA0LzQvtC90LjRjiDQuCDQv9C+0L3QuNC80LDQvdC40LUuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNEZXMxOTJcIjogXCLQrdGC0Lgg0L7RgtC60YDRi9GC0LjRjyDQsiDQvtCx0LvQsNGB0YLQuCDRh9C10LvQvtCy0LXRh9C10YHQutC40YUg0LLQt9Cw0LjQvNC+0L7RgtC90L7RiNC10L3QuNC5LCDQsCDRgtCw0LrQttC1INC00YDRg9Cz0LjQtSDQstCw0LbQvdGL0LUg0YTQsNC60YLQvtGA0YssINC60L7RgtC+0YDRi9C1INCy0Ysg0LjQt9GD0YfQuNGC0LUg0L3QsCDRjdGC0L7QvCDQutGD0YDRgdC1LCDQtNCw0Y7RgiDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCy0LXRgdGC0Lgg0LbQuNC30L3RjCwg0L/QvtC70L3Rg9GOINGB0L7Qs9C70LDRgdC40Y8sINCy0LfQsNC40LzQvdC+0LPQviDRgdC+0YLRgNGD0LTQvdC40YfQtdGB0YLQstCwINC4INGB0YfQsNGB0YLRjNGPLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDE5MVwiOiBcItCa0L7QvNC/0L7QvdC10L3RgtGLINC/0L7QvdC40LzQsNC90LjRjyDigJQg0YLRgNC4INGE0LDQutGC0L7RgNCwLCDQvtCx0YDQsNC30YPRjtGJ0LjQtSDRgtGA0LXRg9Cz0L7Qu9GM0L3QuNC6INGB0L4g0LLQt9Cw0LjQvNC+0YHQstGP0LfQsNC90L3Ri9C80Lgg0LLQtdGA0YjQuNC90LDQvNC4LCDQutC+0YLQvtGA0YvQuSDQstGLINC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LIg0L7RgtC90L7RiNC10L3QuNGP0YUg0YEg0LvRjtCx0YvQvCDRh9C10LvQvtCy0LXQutC+0LwuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTkyXCI6IFwi0KjQsNCz0LgsINC60L7RgtC+0YDRi9C1INC90LDQtNC+INC/0YDQtdC00L/RgNC40L3Rj9GC0YwsINGH0YLQvtCx0Ysg0YDQsNC30YDQtdGI0LjRgtGMINC/0YDQvtCx0LvQtdC80YMg0L/RgNCw0LLQvtGC0Ysg0Lgg0L3QtdC/0YDQsNCy0L7RgtGLINCy0L4g0LLQt9Cw0LjQvNC+0L7RgtC90L7RiNC10L3QuNGP0YUgKNC+0YHQvtCx0LXQvdC90L4g0LXRgdC70Lgg0L3QsNGB0YLQsNC40LLQsNC90LjQtSDQvdCwINGB0L7QsdGB0YLQstC10L3QvdC+0Lkg0L/RgNCw0LLQvtGC0LUg0LPRgNC+0LfQuNGCINC/0YPRgdGC0LjRgtGMINCy0YHQtSDQv9C+0LQg0L7RgtC60L7RgSkuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MTkzXCI6IFwi0JTQstCwINC/0YDQsNCy0LjQu9CwINGB0YfQsNGB0YLQu9C40LLQvtC5INC20LjQt9C90LguXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzVGl0bGUyMFwiOiBcItCa0LDQuiDQvtC/0YDQtdC00LXQu9C40YLRjCDQutC+0LzRgyDQvNC+0LbQvdC+INC00L7QstC10YDRj9GC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczIwMVwiOiBcItCS0LDRiNC1INCy0YvQttC40LLQsNC90LjQtSDQt9Cw0LLQuNGB0LjRgiDQvtGCINCy0LDRiNC10LPQviDRg9C80LXQvdC40Y8g0YDQsNGB0L/QvtC30L3QsNGC0YwsINC90LAg0LrQvtCz0L4g0LLRiyDQvNC+0LbQtdGC0LUg0L/QvtC70L7QttC40YLRjNGB0Y8uINCd0L4g0LrQsNC6INGD0LfQvdCw0YLRjCwg0LrRgtC+INCy0LDRiNC4INC90LDRgdGC0L7Rj9GJ0LjQtSDQtNGA0YPQt9GM0Y8/INCa0LDQuiDQstCw0Lwg0L7Qv9GA0LXQtNC10LvQuNGC0YwsINC/0L7QvNC+0LbQtdGCINC70Lgg0YLQvtGCINC40LvQuCDQuNC90L7QuSDRh9C10LvQvtCy0LXQuiDQv9GA0LjQstC10YHRgtC4INC6INGD0YHQv9C10YXRgyDRgdC+0LLQvNC10YHRgtC90L7QtSDQvdCw0YfQuNC90LDQvdC40LU/INCh0YPRidC10YHRgtCy0YPQtdGCINC70Lgg0YHQv9C+0YHQvtCxINC/0YDQtdC00YHQutCw0LfRi9Cy0LDRgtGMINC/0L7QstC10LTQtdC90LjQtSDQu9GO0LTQtdC5PyA8YnI+INCU0LAuINCSINGH0LXQu9C+0LLQtdGH0LXRgdC60L7QvCDQv9C+0LLQtdC00LXQvdC40Lgg0LXRgdGC0Ywg0YTRg9C90LTQsNC80LXQvdGC0LDQu9GM0L3Ri9C1INGB0L7RgdGC0LDQstC70Y/RjtGJ0LjQtS4g0JrQvtCz0LTQsCDQstGLINC40YUg0LfQvdCw0LXRgtC1LCDQstCw0Lwg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0Y/RgdC90LAg0YHRg9GJ0L3QvtGB0YLRjCDQstCw0YjQuNGFINCx0LvQuNC20L3QuNGFLiDQmCDQv9GA0L7RgdGC0L4g0L3QsNCx0LvRjtC00LDRjyDQt9CwINC/0L7RgdGC0YPQv9C60LDQvNC4INC70Y7QtNC10LksINCy0Ysg0LHRg9C00LXRgtC1INC30L3QsNGC0Ywg0L4g0L3QuNGFINCy0YHRkS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczIwMlwiOiBcItCR0LvQsNCz0L7QtNCw0YDRjyDQt9C90LDQvdC40Y/QvCwg0L/QvtC70YPRh9C10L3QvdGL0Lwg0L3QsCDRjdGC0L7QvCDQutGD0YDRgdC1LCDQstGLINGB0LzQvtC20LXRgtC1INC+0L/RgNC10LTQtdC70Y/RgtGMLCDQutC+0LzRgyDQvNC+0LbQvdC+INC00L7QstC10YDRj9GC0Ywg0Lgg0L3QsCDQutC+0LPQviDQvNC+0LbQvdC+INC/0L7Qu9Cw0LPQsNGC0YzRgdGPLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDIwMVwiOiBcItCeINCy0LDQttC90L7RgdGC0Lgg0LTQvtCy0LXRgNC40Y8g0LIg0L7RgtC90L7RiNC10L3QuNGP0YUg0LzQtdC20LTRgyDQu9GO0LTRjNC80LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MjAyXCI6IFwi0J4g0KLQsNCx0LvQuNGG0LUg0KXQsNCx0LHQsNGA0LTQsCDQvtGG0LXQvdC60Lgg0YfQtdC70L7QstC10LrQsCDigJQg0LjQvdGB0YLRgNGD0LzQtdC90YLQtSwg0LrQvtGC0L7RgNGL0Lkg0L/QvtC30LLQvtC70Y/QtdGCINGD0LfQvdCw0LLQsNGC0Ywg0L3QsNGB0YLQvtGP0YnQuNC5INGF0LDRgNCw0LrRgtC10YAg0LvRjtC00LXQuSDQuCDQv9GA0LXQtNGB0LrQsNC30YvQstCw0YLRjCwg0YfRgtC+INC+0L3QuCDQsdGD0LTRg9GCINC00LXQu9Cw0YLRjC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QyMDNcIjogXCLQmtCw0Log0L/RgNCw0LLQuNC70YzQvdC+INC+0YbQtdC90LjQstCw0YLRjCDQtNGA0YPQs9C40YUg0Lgg0LPQsNGA0LDQvdGC0LjRgNC+0LLQsNGC0Ywg0LHQvtC70LXQtSDQvtC/0YDQtdC00LXQu9GR0L3QvdC+0LUg0LHRg9C00YPRidC10LUg0LTQu9GPINGB0LXQsdGPINC4INGC0LXRhSwg0LrRgtC+INCy0LDQvCDQtNC+0YDQvtCzLlwiLFxyXG5cclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M1RpdGxlMjFcIjogXCLQmtCw0Log0L7QsdGA0LXRgdGC0Lgg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDRgdC10LHQtVwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzRGVzMjExXCI6IFwi0JHQvtC70YzRiNC40L3RgdGC0LLQviDQu9GO0LTQtdC5INGF0L7RgtC10LvQuCDQsdGLINCyINCx0L7Qu9GM0YjQvtC5INGB0YLQtdC/0LXQvdC4INCx0YvRgtGMINGD0LLQtdGA0LXQvdC90YvQvNC4INCyINGB0LXQsdC1LCDQvtC00L3QsNC60L4g0L7QvdC4INC90LUg0LfQvdCw0Y7Rgiwg0LrQsNC6INGN0YLQvtCz0L4g0LTQvtGB0YLQuNGH0YwuINCS0Ysg0LrQvtCz0LTQsC3QvdC40LHRg9C00Ywg0YfRg9Cy0YHRgtCy0L7QstCw0LvQuCDQsdC+0LvRjNGI0YPRjiDRg9Cy0LXRgNC10L3QvdC+0YHRgtGMINCyINGB0LXQsdC1PyDQpdC+0YLQtdC70Lgg0LHRiyDQv9C+0LLRi9GB0LjRgtGMINGD0LLQtdGA0LXQvdC90L7RgdGC0Ywg0LIg0YHQtdCx0LU/INCn0YLQvtCx0Ysg0L/QvtCy0YvRgdC40YLRjCDRg9Cy0LXRgNC10L3QvdC+0YHRgtGMINCyINGB0LXQsdC1LCDQstCw0Lwg0L3Rg9C20L3QviDQv9C+0L3QuNC80LDRgtGMLCDRh9GC0L4g0LXRkSDRgdC90LjQttCw0LXRgi4g0JrQvtCz0LTQsCDQstGLINC30L3QsNC10YLQtSwg0L/QvtGH0LXQvNGDINGN0YLQviDQv9GA0L7QuNGB0YXQvtC00LjRgiwg0LLRiyDQvNC+0LbQtdGC0LUg0LjRgdC/0YDQsNCy0LjRgtGMINGB0LjRgtGD0LDRhtC40Y4g0Lgg0LLQvtC30YDQvtC00LjRgtGMINGB0LDQvNC+0YPQstCw0LbQtdC90LjQtS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0RlczIxMlwiOiBcItCi0L7Rh9C90YvQtSDRiNCw0LPQuCwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDQstGL0L/QvtC70L3QuNGC0YwsINGH0YLQvtCx0Ysg0YHRgtCw0YLRjCDQsdC+0LvQtdC1INC60L7QvNC/0LXRgtC10L3RgtC90YvQvCDQsiDRgtC+0LwsINGH0YLQviDQstGLINC00LXQu9Cw0LXRgtC1LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQzTGlzdDIxMVwiOiBcItCY0YHRgtC40L3QvdGL0Lkg0LjRgdGC0L7Rh9C90LjQuiDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LIg0LbQuNC30L3QuC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50M0xpc3QyMTJcIjogXCLQmtCw0Log0LLQt9Cw0LjQvNC+0YHQstGP0LfQsNC90Ysg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDRgdC10LHQtSwg0YHQsNC80L7Rg9Cy0LDQttC10L3QuNC1INC4INC00L7QstC10YDQuNC1INC6INGB0LXQsdC1LCDQuCDRh9GC0L4g0LLRiyDQvNC+0LbQtdGC0LUg0YHQtNC10LvQsNGC0YwsINGH0YLQvtCx0Ysg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC40YUuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDNMaXN0MjEzXCI6IFwi0KLQvtGH0L3Ri9C1INGI0LDQs9C4LCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INCy0YvQv9C+0LvQvdC40YLRjCwg0YfRgtC+0LHRiyDRgdGC0LDRgtGMINCx0L7Qu9C10LUg0LrQvtC80L/QtdGC0LXQvdGC0L3Ri9C8INCyINGC0L7QvCwg0YfRgtC+INCy0Ysg0LTQtdC70LDQtdGC0LUuXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzNEZXMxXCI6IFwi0K8g0J3QkNCj0KfQmNCb0KHQryDQlNCQ0JLQkNCi0Kwg0J7QotCf0J7QoCA8YnI+INCt0YLQviDQuNGB0YLQvtGA0LjRjyDRg9GB0L/QtdGF0LAg0L7RgiDQutGD0YDRgdCwIMKr0J/RgNC10L7QtNC+0LvQtdC90LjQtSDQv9C+0LTRitGR0LzQvtCyINC4INGB0L/QsNC00L7QsiDQsiDQttC40LfQvdC4wrs6IDxicj4gwqvQktC+INCy0YDQtdC80Y8g0LrRg9GA0YHQsCDRjyDQvNC90L7Qs9C+0LUg0L/QvtC30L3QsNC7LCDQvNC90L7Qs9C+0LzRgyDQvdCw0YPRh9C40LvRgdGPLiA8YnI+INCvINGB0YLQsNC7INCz0YDQsNC80L7RgtC90L4g0LDQvdCw0LvQuNC30LjRgNC+0LLQsNGC0Ywg0YDQsNC30LvQuNGH0L3Ri9C1INGB0LjRgtGD0LDRhtC40Lgg0Lgg0LvRjtC00LXQuS4gPGJyPiDQryDRgdGC0LDQuyDQsdC+0LvQtdC1INGB0L/QvtC60L7QudC90YvQvC4g0J3QsNGD0YfQuNC70YHRjyDRgdC00LXRgNC20LjQstCw0YLRjNGB0Y8g0Lgg0L/QvtC90LjQvNCw0YLRjCwg0YfRgtC+INC10YHRgtGMINGF0L7RgNC+0YjQviwg0LAg0YfRgtC+INC10YHRgtGMINC/0LvQvtGF0L4uINCh0LDQvNC+0LUg0LjQvdGC0LXRgNC10YHQvdC+0LUsINGH0YLQviDRjyDQt9C90LDRjiwg0YfRgtC+INC80L3QtSDQtNC10LvQsNGC0YwsINC30L3QsNGOLCDQutCw0Log0LzQvdC1INC00LXQu9Cw0YLRjC4g0Jgg0LfQvdCw0Y4sINC60LDQuiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwuINCa0YPRgNGBINC+0YfQtdC90Ywg0L/QvtC80L7Qsy4g0K8g0L3QsNGD0YfQuNC70YHRjyDQtNCw0LLQsNGC0Ywg0L7RgtC/0L7RgMK7LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzNOYW1lMVwiOiBcItCQ0LvQtdC60YHQsNC90LTRgCDQpNC40LTQvtGA0LXQvdC60L5cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXczUG9zMVwiOiBcItCX0LDQvNC10YHRgtC40YLQtdC70Ywg0L/QviDRgdCy0Y/Qt9GP0Lwg0YEg0L7QsdGJ0LXRgdGC0LLQtdC90L3QvtGB0YLRjNGOINC60YDRg9C/0L3QvtC5INGE0LjRgNC80Ysg0L/QviDQv9GA0L7QuNC30LLQvtC00YHRgtCy0YMg0LHQuNC+INGC0L7Qv9C70LjQstCwXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzNEZXMyXCI6IFwiwqvQrdGC0L4g0L7Rh9C10L3RjCDQv9C+0LvQtdC30L3Ri9C5INC60YPRgNGBIC0gwqvQm9C40YfQvdGL0LUg0YbQtdC90L3QvtGB0YLQuCDQuCDRhtC10LvQvtGB0YLQvdC+0YHRgtGMwrssINC00LDQvdC90YvQtSDQutC+0YLQvtGA0L7Qs9C+INCx0LXRgdGG0LXQvdC90YsuINCf0L7Qu9GD0YfQtdC90L3Ri9C1INC30L3QsNC90LjRjyDQutCw0YHQsNGO0YLRgdGPINCw0LHRgdC+0LvRjtGC0L3QviDQstGB0LXRhSDRgdGE0LXRgCDQtNC10Y/RgtC10LvRjNC90L7RgdGC0LguIDxicj4g0K8g0L/QvtC70YPRh9C40LvQsCDQstCw0LbQvdGL0LUg0LjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0LbQuNC30L3QuCDQuCDQv9C+0LvRg9GH0LjQu9CwINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INGB0LLQvtC10LzRgyDQvNGL0YjQu9C10L3QuNGOLiDQryDQt9C90LDRjiwg0LrQsNC6INGA0LXQs9GD0LvQuNGA0L7QstCw0YLRjCDRgdCy0L7RjiDQttC40LfQvdGMIOKAkyDRjdGC0L4g0L7Rh9C10L3RjCDQvNC+0YnQvdC+0LUg0L7RgNGD0LbQuNC1IcK7XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3M05hbWUyXCI6IFwi0K/QvdCwINCh0LLQuNC00LXRgNGB0LrQsNGPXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3M1BvczJcIjogXCLQl9Cw0LzQtdGB0YLQuNGC0LXQu9GMINC40YHQv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQtNC40YDQtdC60YLQvtGAXCIsXHJcblxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzNEZXMzXCI6IFwiwqvQmtC+0LPQtNCwINGPINC/0YDQuNGI0LvQsCDQvdCwINC60YPRgNGBIMKr0JrQsNC6INGB0LXQsdGPINC80L7RgtC40LLQuNGA0L7QstCw0YLRjMK7LCDRjyDQsdGL0LvQsCDRgNCw0LfQsdC40YLQsNGPINC4INCy0YHRjyDQsiDRgdC+0LzQvdC10L3QuNGP0YUuIDxicj4g0K8g0L3QsNC00LXRj9C70LDRgdGMLCDRh9GC0L4g0LzQvdC1INGB0YLQsNC90LXRgiDQu9C10LPRh9C1INC4INGPINC90LDQudC00YMg0LLRi9GF0L7QtCDQuNC3INGB0LLQvtC10LPQviDRgdC+0YHRgtC+0Y/QvdC40Y8uIDxicj4g0J3QsCDQutGD0YDRgdC1INGPINGD0LfQvdCw0LvQsCwg0LrQsNC6INC80L7QttC90L4g0L3QsNC50YLQuCDQvNC+0YLQuNCy0LDRhtC40Y4g0Lgg0LLRi9C50YLQuCDQuNC3INC/0LvQvtGF0LjRhSDRgdC+0YHRgtC+0Y/QvdC40LkuIDxicj4g0JPQu9Cw0LLQvdC+0LUsINGH0YLQviDQstC+INCy0YDQtdC80Y8g0LjQt9GD0YfQtdC90LjRjyDQvNCw0YLQtdGA0LjQsNC70LAsINGPINC90LDRiNC70LAg0L7RgtCy0LXRgtGLINC4INGC0LXQv9C10YDRjCwg0LzQvtC4INC/0YDQvtCx0LvQtdC80Ysg0L3QtSDQutCw0LbRg9GC0YHRjyDQvNC90LUg0YLQsNC60LjQvNC4INCx0L7Qu9GM0YjQuNC80Lgg0Lgg0YHRgtGA0LDRiNC90YvQvNC4LCDQutCw0Log0YDQsNC90YzRiNC1LiA8YnI+INCX0LAg0LLRgNC10LzRjyDQvtCx0YPRh9C10L3QuNGPINGPINGB0YLQsNC70LAg0YfRg9Cy0YHRgtCy0L7QstCw0YLRjCDRgdC10LHRjyDQu9GD0YfRiNC1ISA8YnI+INCi0LXQv9C10YDRjCDRjyDQt9C90LDRjiwg0LrQsNC6INGB0L/RgNCw0LLQu9GP0YLRjNGB0Y8g0YEg0L/RgNC+0LHQu9C10LzQsNC80Lgg0Lgg0LzQvtGC0LjQstC40YDQvtCy0LDRgtGMINGB0LXQsdGPwrsuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3M05hbWUzXCI6IFwi0JXQu9C10L3QsCDQk9GD0YZcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXczUG9zM1wiOiBcItCU0LjRgNC10LrRgtC+0YAg0LrRgNGD0L/QvdC+0LPQviDRgtC+0YDQs9C+0LLQvtCz0L4g0YbQtdC90YLRgNCwXCIsXHJcblxyXG4gICAgXCJyZXZpZXdzUGFnZVJldzFcIjogXCLCq9CvINC90LUg0LHQvtGO0YHRjCDQt9Cw0Y/QstC40YLRjCDQviDRgdC10LHQtSwg0YHRgtCw0LvQsCDQsdC+0LvQtdC1INCw0LrRgtC40LLQvdC+0LkuINCf0L7QvdGP0LvQsCwg0YfRgtC+INC90LjQutGC0L4g0L3QtSDQstC40L3QvtCy0LDRgiDQsiDQvNC+0LjRhSDRgtGA0YPQtNC90L7RgdGC0Y/RhSDQuCDQvtGB0L7Qt9C90LDQu9CwINGH0YLQviDQu9GO0LHQsNGPINC/0YDQvtCx0LvQtdC80LAg4oCUINGN0YLQviDQu9C40YjRjCDQvNC+0LUg0YHQvtCx0YHRgtCy0LXQvdC90L7QtSDQstC+0YHQv9GA0LjRj9GC0LjQtSDRgdC40YLRg9Cw0YbQuNC4LiDQkCDRgtCw0LrQttC1INC/0LXRgNC10YHRgtCw0LvQsCDRgdC+0L/RgNC+0YLQuNCy0LvRj9GC0YzRgdGPINGB0YfQsNGB0YLRjNGOLCDQutC+0YLQvtGA0L7QtSDQstC+0LrRgNGD0LMg0LzQtdC90Y8uINCc0L3QtSDQvdC1INGF0L7Rh9C10YLRgdGPINC/0LjRgtGMINCw0LvQutC+0LPQvtC70YwsINGF0L7RgtGPINGA0LDQvdGM0YjQtSDRjyDRgdGH0LjRgtCw0LvQsCDRh9GC0L4g0YLQsNC6IOKAnNGB0L3QuNC80LDRjiDQvdCw0L/RgNGP0LbQtdC90LjQteKAnS4g0KfRg9Cy0YHRgtCy0YPRjiDQv9C+0YLRgNC10LHQvdC+0YHRgtGMINCx0YvRgtGMINCw0LrRgtC40LLQvdC+0Lkg0Lgg0L/QvtC80L7Qs9Cw0YLRjCDQvtC60YDRg9C20LDRjtGJ0LjQvCDQvNC10L3RjyDQu9GO0LTRj9C8LiDQryDQvdC1INCx0L7RjtGB0Ywg0LjQtNGC0Lgg0LLQv9C10YDQtdC0LiDQryDQsdC70LDQs9C+0LTQsNGA0L3QsCDQotCw0YLRjNGP0L3QtSDQt9CwINC/0L7QvNC+0YnRjCEgPGJyPiDQnNC+0Y8g0LjRgdGC0L7RgNC40Y8g0YPRgdC/0LXRhdCwINC+0YfQtdC90Ywg0L/RgNC+0YHRgtCwIOKAlCDQt9CwINC+0YfQtdC90Ywg0LrQvtGA0L7RgtC60L7QtSDQstGA0LXQvNGPINC80L7QuSDQttC40LfQvdC10L3QvdGL0Lkg0YLQvtC9INGB0LzQtdC90LjQu9GB0Y8g0LjQtyDRgdC10YDQvtCz0L4g0Lgg0YPQs9GA0Y7QvNC+0LPQviDQsiDQutGA0LDRgdC+0YfQvdGL0Lkg0Lgg0LbQuNC30L3QtdGA0LDQtNC+0YHRgtC90YvQuS4g0JAg0LTQsNC70YzRiNC1INC/0L4g0L/Rg9C90LrRgtCw0Lw6INCvINC/0LXRgNC10YHRgtCw0LvQsCDQs9GA0YPRgdGC0LjRgtGMLCDRgyDQvNC10L3RjyDQstGB0LXQs9C00LAg0YXQvtGA0L7RiNC10LUg0L3QsNGB0YLRgNC+0LXQvdC40LUsINGB0YLQsNC70LAg0LHQvtC70YzRiNC1INC+0LHRidCw0YLRjNGB0Y8g0YEg0LvRjtC00YzQvNC4LiDQn9C10YDQtdGB0YLQsNC70LAg4oCc0YHRgtCw0LLQuNGC0Ywg0L3QsCDRgdC10LHQtSDQutGA0LXRgdGC4oCdLiDQktGB0LUg0YLRgNC10LLQvtCz0Lgg0Lgg0LvRjtC00Lgg0LjQtyDQv9GA0L7RiNC70L7Qs9C+INC+0YHRgtCw0LvQuNGB0Ywg0LIg0L/RgNC+0YjQu9C+0LwuINCvINGB0YLQsNC70LAg0LHQvtC70LXQtSDRg9Cy0LXRgNC10L3QvdC+0Lkg0LIg0YHQtdCx0LUuINCjINC80LXQvdGPINC/0L7Rj9Cy0LjQu9C40YHRjCDRgdC40LvRiyDQuCDQttC10LvQsNC90LjQtSDRgNCw0LHQvtGC0LDRgtGMINC90LDQtCDRgdC+0LHQvtC5INC4INGC0LXQvNC4INC90LXQtNC+0YfQtdGC0LDQvNC4LCDQutC+0YLQvtGA0YvQtSDRjyDQvNC+0LPRgyDQuNGB0L/RgNCw0LLQuNGC0YwgKNGPINC/0L7RiNC70LAg0LIg0LfQsNC7KS7Cu1wiLFxyXG5cclxuICAgIFwicmV2aWV3c1BhZ2VSZXcyXCI6IFwiwqvQryDQvdC1INC20LTQsNC7INC+0YIg0Y3RgtC+0Lkg0L/RgNC+0LPRgNCw0LzQvNGLINGH0LXQs9C+LdGC0L4g0L7RgdC+0LHQtdC90L3QvtCz0L4uINCd0L4g0LIg0LPQu9GD0LHQuNC90LUg0LTRg9GI0Lgg0YMg0LzQtdC90Y8g0LHRi9C70L4g0LbQtdC70LDQvdC40LUg0LjQt9C80LXQvdC40YLRjCDRgdC40YLRg9Cw0YbQuNGOLiA8YnI+INCd0LDQstC10YDQvdC+0LUsINC60LDQuiDQuCDRgyDQstGB0LXRhSDRgyDQvNC10L3RjyDQsdGL0LvQuCDQutC+0L3RhNC70LjQutGC0Ysg0L3QsCDRgNCw0LHQvtGC0LUsINC90LXQtNC+0L/QvtC90LjQvNCw0L3QuNC1INCyINGB0LXQvNGM0LUuINCc0L3QtSDQutCw0LfQsNC70L7RgdGMLCDRh9GC0L4g0Y8g0L/QtdGA0LXQs9C+0YDQtdC7LiA8YnI+INCd0L4g0L/QvtGA0LDQsdC+0YLQsNCyINGB0L4g0YHQv9C10YbQuNCw0LvQuNGB0YLQvtC8LCDQvNC+0Y8g0LbQuNC30L3RjCDQvdCw0YfQsNC70LAg0LzQtdC90Y/RgtGM0YHRjy4g0K8g0L3QsNGI0ZHQuyDRgdC/0L7RgdC+0LEg0YDQsNC30YDQtdGI0LjRgtGMINC60L7QvdGE0LvQuNC60YLRiyDQuCDQvdCw0LvQsNC00LjRgtGMINC+0LHRidC10L3QuNC1INGB0L4g0YHQstC+0LjQvNC4INCx0LvQuNC30LrQuNC80LghIDxicj4g0JLQviDQvNC90LUg0L/QvtGP0LLQuNC70L7RgdGMINC80L3QvtCz0L4g0Y3QvdC10YDQs9C40LgsINC4INGB0LDQvCDQtNCw0LbQtSDQvdC1INC30LDQvNC10YLQuNC7LCDQutCw0Log0L3QsNGH0LDQuyDQv9GA0L7QuNC30LLQvtC00LjRgtGMINCx0L7Qu9GM0YjQtSEg0Jgg0YfRgtC+INGB0LDQvNC+0LUg0LjQvdGC0LXRgNC10YHQvdC+0LUsINCy0YHQtSDQvNC+0Lgg0YHRgtCw0YLQuNGB0YLQuNC60Lgg0L/QvtGI0LvQuCDQstCy0LXRgNGFISA8YnI+IMKr0KDQtdC80L7QvdGCINC20LjQt9C90LjCuyDQtNCw0Lsg0LzQvdC1INGF0L7RgNC+0YjQuNC5INGC0L7Qu9GH0L7QuiDQtNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINCy0YHRkSDQvNC10L3Rj9GC0YwhINCi0LXQv9C10YDRjCDRjyDQt9C90LDRjiwg0LrQsNC6INGN0YLQviDQtNC10LvQsNGC0Ywg0Lgg0YPQstC10YDQtdC9LCDRh9GC0L4g0LLRgdC1INC/0L7Qu9GD0YfQuNGC0YHRjyHCu1wiLFxyXG5cclxuICAgIFwicmV2aWV3c1BhZ2VSZXczXCI6IFwiwqvQndC4INC+0LTQuNC9INGN0L3QtdGA0LPQtdGC0LjQuiDQvdC1INC00LDRgdGCINGB0YLQvtC70YzQutC+INGN0L3QtdGA0LPQuNC4LCDQutCw0Log0Y3RgtCwINC/0YDQvtCz0YDQsNC80LzQsCEgPGJyPiDQrywg0L3QsNCy0LXRgNC90L7QtSwg0L3QuNC60L7Qs9C00LAg0L3QtSDQvtGJ0YPRidCw0Lsg0YHQstC+0LUg0YLQtdC70L4g0YLQsNC60LjQvC4gPGJyPiDQodCY0JvQrNCd0KvQnC4g0KfQmNCh0KLQq9CcLiDQkdCe0JTQoNCr0JwuINCh0JvQkNCW0JXQndCd0KvQnC4gPGJyPiDQntC00LjQvSDQuNC3INGB0LDQvNGL0YUg0LrQu9Cw0YHRgdC90YvRhSDRgNC10LfRg9C70YzRgtCw0YLQvtCyINC/0YDQvtCz0YDQsNC80LzRiyDCq9Ce0YfQuNGJ0LXQvdC40Y/CuyDigJQg0Y3RgtC+INC/0L7QvdC40LzQsNC90LjQtSDRgtC+0LPQviwg0LrQsNC6INC40LzQtdC90L3QviDRjyDRgNCw0L3RjNGI0LUg0LLRgNC10LTQuNC7INGB0LLQvtC10LzRgyDRgtC10LvRgy4g0KLQtdC/0LXRgNGMINGPINC90LUg0LHRg9C00YMg0L/QvtCy0YLQvtGA0Y/RgtGMINGN0YLQuNGFINC+0YjQuNCx0L7Qui4gPGJyPiDQmtC+0L3QtdGH0L3QviDQttC1INGPINC/0L7Qu9GD0YfQuNC7INGH0LjRgdGC0L7QtSDRgtC10LvQviDQvtGCINGA0LDQt9C90YvRhSDQstGA0LXQtNC90L7RgdGC0LXQuS4g0JLQvNC10YHRgtC+INC/0L7RgdGC0L7Rj9C90L3QvtC5INGD0YHRgtCw0LvQvtGB0YLQuCDQv9GA0LjRiNC70LAg0Y3QvdC10YDQs9C40Y8g0Lgg0YHQuNC70YshIDxicj4g0K8g0LHQtdGB0LrQvtC90LXRh9C90L4g0YHRh9Cw0YHRgtC70LjQsiwg0YfRgtC+INC/0YDQvtGI0LXQuyDRjdGC0YMg0L/RgNC+0LPRgNCw0LzQvNGDIcK7XCIsXHJcblxyXG4gICAgXCJib29rc1BhZ2VUaXRsZVwiOiBcItCd0LDRiNC4INC60L3QuNCz0LhcIixcclxuICAgIFwiYm9va3NQYWdlRGVzXCI6IFwi0JzQvdC+0LPQuNC1INC70Y7QtNC4INC00YPQvNCw0Y7Rgiwg0YfRgtC+INC40YUg0YPRgdC/0LXRhSDQuCDQv9GA0L7RhtCy0LXRgtCw0L3QuNC1INC30LDQstC40YHQuNGCINC40YHQutC70Y7Rh9C40YLQtdC70YzQvdC+INC+0YIg0LLQtdC30LXQvdC40Y8uINCd0L4g0Y3RgtC+INC90LUg0YLQsNC6LiDQltC40LfQvdGMLCDQsdC40LfQvdC10YEsINGA0LDQsdC+0YLQsCDQv9C+0LTRh9C40L3Rj9GO0YLRgdGPINC+0L/RgNC10LTQtdC70LXQvdC90YvQvCDQt9Cw0LrQvtC90LDQvCwg0LfQvdCw0Y8g0LrQvtGC0L7RgNGL0LUsINGH0LXQu9C+0LLQtdC6INC80L7QttC10YIg0LTQvtGB0YLQuNCz0LDRgtGMINGB0LLQvtC40YUg0YbQtdC70LXQuSDQs9C+0YDQsNC30LTQviDQsdGL0YHRgtGA0LXQtSDQuCDRjdGE0YTQtdC60YLQuNCy0L3QtdC1LiDQrdGC0Lgg0LfQsNC60L7QvdGLLCDQsCDRgtCw0LrQttC1INC40L3RgdGC0YDRg9C80LXQvdGC0Ysg0LTQu9GPINC70YPRh9GI0LXQs9C+INCy0YvQttC40LLQsNC90LjRjyDQvtC/0LjRgdCw0L3RiyDQsiDRgdC70LXQtNGD0Y7RidC40YUg0LrQvdC40LPQsNGFLCDQutC+0YLQvtGA0YvQtSDQstGLINC80L7QttC10YLQtSDQt9Cw0LrQsNC30LDRgtGMINCyINCz0YDRg9C/0L/QtSDCq9Cf0LvQsNC90LXRgtCwwrsuXCIsXHJcblxyXG4gICAgXCJib29rc1BhZ2VCb29rMVRpdGxlXCI6IFwi0J/RgNC+0LHQu9C10LzRiyDRgNCw0LHQvtGC0YtcIixcclxuICAgIFwiYm9va3NQYWdlQm9vazFTdWJUaXRsZVwiOiBcIsKr0JbQuNC30L3RjCDQvdCwINGB0LXQvNGM0LTQtdGB0Y/RgiDQv9GA0L7RhtC10L3RgtC+0LIg0YHQvtGB0YLQvtC40YIg0LjQtyDRgNCw0LHQvtGC0YssINC4INC10YnQtSDQv9C+INC00LXRgdGP0YLRjCDQv9GA0LjRhdC+0LTQuNGC0YHRjyDQvdCwINGB0LXQvNGM0Y4sINC/0L7Qu9C40YLQuNC60YMg0Lgg0L7RgtC00YvRhcK7LlwiLFxyXG4gICAgXCJib29rc1BhZ2VCb29rMURlc1wiOiBcIsKr0J/RgNC+0LHQu9C10LzRiyDRgNCw0LHQvtGC0YvCuyDRgdC+0LTQtdGA0LbQsNGCINC+0YHQvdC+0LLQvdGL0LUg0L/RgNC40L3RhtC40L/RiyDQuCDQt9Cw0LrQvtC90YssINC60L7RgtC+0YDRi9C1INC/0YDQuNC80LXQvdC40LzRiyDQsiDQutCw0LbQtNC+0Lwg0LTQtdC70LUsINC6INC60LDQttC00L7QuSDQv9GA0L7QsdC70LXQvNC1INCyINGA0LDQsdC+0YLQtS4g0J/QvtGC0L7QvNGDINGH0YLQviDRjdGC0L4g0L7RgtC60YDRi9GC0LjRjywg0LrQvtGC0L7RgNGL0LUg0YDQsNGB0YHQvNCw0YLRgNC40LLQsNGO0YIg0YHQsNC80YPRjiDQvtGB0L3QvtCy0YMg0Y3RgtC40YUg0L/RgNC+0LHQu9C10LwsINC+0L3QuCDQvtCx0YrRj9GB0L3Rj9GO0YIsINC40Lcg0YfQtdCz0L4g0YHQvtGB0YLQvtC40YIg0YHQsNC80LAg0LbQuNC30L3RjC4g0JIg0Y3RgtC+0Lkg0LrQvdC40LPQtSDQv9C+0LTRgNC+0LHQvdC+INC+0L/QuNGB0LDQvdGLINGB0LvQtdC00YPRjtGJ0LjQtSDQvtGC0LrRgNGL0YLQuNGPOlwiLFxyXG4gICAgXCJib29rc1BhZ2VCb29rMUxpc3QxXCI6IFwi0JDQvdCw0YLQvtC80LjRjyDQt9Cw0LzQtdGI0LDRgtC10LvRjNGB0YLQstCwINC4INC60LDQuiDRgSDQvdC40Lwg0YHQv9GA0LDQstC40YLRjNGB0Y9cIixcclxuICAgIFwiYm9va3NQYWdlQm9vazFMaXN0MlwiOiBcItCa0L7QvdGG0LXQv9GG0LjRjyDRgdGC0LDQsdC40LvRjNC90L7Qs9C+INC00LDQvdC90L7Qs9C+IOKAkyDRhNGD0L3QtNCw0LzQtdC90YLQsNC70YzQvdGL0Lkg0LfQsNC60L7QvSDQttC40LfQvdC4XCIsXHJcbiAgICBcImJvb2tzUGFnZUJvb2sxTGlzdDNcIjogXCLQkNC90LDRgtC+0LzQuNGPINC60L7QvdGC0YDQvtC70Y8g0Lgg0LrQsNC6INC/0YDQtdCy0YDQsNGC0LjRgtGMIMKr0L/Qu9C+0YXQvtC5INC60L7QvdGC0YDQvtC70YzCuyDQsiDRhdC+0YDQvtGI0LjQuVwiLFxyXG4gICAgXCJib29rc1BhZ2VCb29rMUxpc3Q0XCI6IFwi0JDQvdCw0YLQvtC80LjRjyDQttC40LfQvdC4INC60LDQuiDQuNCz0YDRiyDQuCDQv9GA0LDQstC40LvQsCwg0L/QviDQutC+0YLQvtGA0YvQvCDQsiDQvdC10LUg0LjQs9GA0LDRjtGCXCIsXHJcblxyXG4gICAgXCJib29rc1BhZ2VCb29rMlRpdGxlXCI6IFwi0KHQsNC10L3RgtC+0LvQvtCz0LjRjzog0L3QvtCy0YvQuSDQstC30LPQu9GP0LQg0L3QsCDQttC40LfQvdGMXCIsXHJcbiAgICBcImJvb2tzUGFnZUJvb2syRGVzXCI6IFwi0JrQvdC40LPQsCDCq9Ch0LDQtdC90YLQvtC70L7Qs9C40Y86INC90L7QstGL0Lkg0LLQt9Cz0LvRj9C0INC90LAg0LbQuNC30L3RjMK7IC0g0L3QtdGB0YLQsNGA0LXRjtGJ0LjQuSDRgdCx0L7RgNC90LjQuiDQvtGC0LrRgNGL0YLQuNC5INCg0L7QvdCwLCDQstGL0LHRgNCw0L3QvdGL0YUg0LjQtyDQstGB0LXQuSDRgdC+0LrRgNC+0LLQuNGJ0L3QuNGG0Ysg0LXQs9C+INC/0LjRgdGM0LzQtdC90L3Ri9GFINGA0LDQsdC+0YIuINCa0LDQttC00LDRjyDQs9C70LDQstCwINC00LDQtdGCINC60YDQsNGC0LrQuNC5INC4INCyINGC0L4g0LbQtSDQstGA0LXQvNGPINCy0YHQtdGB0YLQvtGA0L7QvdC90LjQuSDQvtCx0LfQvtGAINC/0YDQuNC80LXQvdC10L3QuNGPINCh0LDQtdC90YLQvtC70L7Qs9C40Lgg0Log0LrQsNC60L7QvNGDLdGC0L4g0LrQvtC90LrRgNC10YLQvdC+0LzRgyDQsNGB0L/QtdC60YLRgyDRgdGD0YnQtdGB0YLQstC+0LLQsNC90LjRjywg0Lgg0YLQsNC60LjQvCDQvtCx0YDQsNC30L7QvCDQv9C10YDQtdC0INCy0LDQvNC4INC/0YDQtdC00YHRgtCw0LXRgiDQv9Cw0L3QvtGA0LDQvNCwINGB0LDQvNC+0Lkg0LbQuNC30L3QuC4g0JfQtNC10YHRjCDQstGLINC90LDQudC00LXRgtC1INC+0YLQstC10YLRiywg0LrQvtGC0L7RgNGL0LUg0YfQtdC70L7QstC10Log0LjRgdC60LDQuyDQstC10LrQsNC80Lg7INC/0YDQsNC60YLQuNGH0L3Ri9C1INC+0YLQstC10YLRiywg0LrQvtGC0L7RgNGL0LUg0LLRiyDQvdCw0LTQtdGP0LvQuNGB0Ywg0L3QsNC50YLQuCDQs9C00LUt0YLQviDQtdGJ0LU7INC+0YLQstC10YLRiywg0LrQvtGC0L7RgNGL0LUg0YDQsNCx0L7RgtCw0Y7RgjpcIixcclxuICAgIFwiYm9va3NQYWdlQm9vazJMaXN0MVwiOiBcItCS0L7Qt9C80L7QttC90L4g0LvQuCDQsdGL0YLRjCDRgdGH0LDRgdGC0LvQuNCy0YvQvFwiLFxyXG4gICAgXCJib29rc1BhZ2VCb29rMkxpc3QyXCI6IFwi0KbQtdC70L7RgdGC0L3QvtGB0YLRjCDQu9C40YfQvdC+0YHRgtC4XCIsXHJcbiAgICBcImJvb2tzUGFnZUJvb2syTGlzdDNcIjogXCLQp9C10LvQvtCy0LXQuiDQsiDQv9C+0LjRgdC60LDRhSDRgdCy0L7QuSDQtNGD0YjQuFwiLFxyXG5cclxuICAgIFwiYm9va3NQYWdlQm9vazNUaXRsZVwiOiBcItCU0L7RgNC+0LPQsCDQuiDRgdGH0LDRgdGC0YzRjlwiLFxyXG4gICAgXCJib29rc1BhZ2VCb29rM1N1YlRpdGxlXCI6IFwi0J/QvtC00LvQuNC90L3QsNGPINGA0LDQtNC+0YHRgtGMINC4INGB0YfQsNGB0YLRjNC1INC+0LHQu9Cw0LTQsNGO0YIg0LHQvtC70YzRiNC+0Lkg0YbQtdC90L3QvtGB0YLRjNGOLlwiLFxyXG4gICAgXCJib29rc1BhZ2VCb29rM0Rlc1wiOiBcItCf0L7QtNC70LjQvdC90LDRjyDRgNCw0LTQvtGB0YLRjCDQuCDRgdGH0LDRgdGC0YzQtSDQvtCx0LvQsNC00LDRjtGCINCx0L7Qu9GM0YjQvtC5INGG0LXQvdC90L7RgdGC0YzRji4g0JXRgdC70Lgg0YfQtdC70L7QstC10Log0L3QtSDQstGL0LbQuNCy0LDQtdGCLCDQviDRgNCw0LTQvtGB0YLQuCDQuCDRgdGH0LDRgdGC0YzQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0Lgg0YDQtdGH0LguINCd0LXQu9C10LPQutC+INCy0YvQttC40LLQsNGC0Ywg0LIg0YXQsNC+0YLQuNGH0L3QvtC8LCDQsdC10YHRh9C10YHRgtC90L7QvCDQuCDQsdC+0LvRjNGI0LXQuSDRh9Cw0YHRgtGM0Y4g0LHQtdC30L3RgNCw0LLRgdGC0LLQtdC90L3QvtC8INC+0LHRidC10YHRgtCy0LUuINCb0Y7QsdC+0Lkg0YfQtdC70L7QstC10Log0Lgg0LvRjtCx0LDRjyDQs9GA0YPQv9C/0LAg0YHRgtGA0LXQvNGP0YLRgdGPINC/0L4g0LzQtdGA0LUg0YHQuNC7INC/0L7Qu9GD0YfQsNGC0Ywg0L7RgiDQttC40LfQvdC4INGD0LTQvtCy0L7Qu9GM0YHRgtCy0LjQtSDQuCDQuNC30LHQtdCz0LDRgtGMINCx0L7Qu9C4LiA8YnI+INCS0LDRiNC10LzRgyDQstGL0LbQuNCy0LDQvdC40Y4g0LzQvtCz0YPRgiDRg9Cz0YDQvtC20LDRgtGMINC00YPRgNC90YvQtSDQv9C+0YHRgtGD0L/QutC4INC+0LrRgNGD0LbQsNGO0YnQuNGFINCy0LDRgSDQu9GO0LTQtdC5LiDQmNC3LdC30LAg0LHQtdGB0YfQtdGB0YLQvdC+0YHRgtC4INC4INC00YPRgNC90L7Qs9C+INC/0L7QstC10LTQtdC90LjRjyDQvtC60YDRg9C20LDRjtGJ0LjRhSDQstCw0YjQtSDRgdGH0LDRgdGC0YzQtSDQvNC+0LbQtdGCINCx0YvRgtGMINC+0LzRgNCw0YfQtdC90L4g0YLRgNCw0LPQtdC00LjQtdC5INC4INCz0L7RgNC10LwuINCvINGD0LLQtdGA0LXQvSwg0YfRgtC+INCy0Ysg0LzQvtC20LXRgtC1INCy0YHQv9C+0LzQvdC40YLRjCDQv9C+0LTQvtCx0L3Ri9C1INGB0LvRg9GH0LDQuC4g0K3RgtC4INC00YPRgNC90YvQtSDQv9C+0YHRgtGD0L/QutC4INGB0L3QuNC20LDRjtGCINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0YfQtdC70L7QstC10LrQsCDQuiDQstGL0LbQuNCy0LDQvdC40Y4g0Lgg0LTQtdC70LDRjtGCINC10LPQviDQvNC10L3QtdC1INGB0YfQsNGB0YLQu9C40LLRi9C8LiDQktGLINCy0LDQttC90Ysg0LTQu9GPINC00YDRg9Cz0LjRhSDQu9GO0LTQtdC5LiDQmiDQstCw0Lwg0L/RgNC40YHQu9GD0YjQuNCy0LDRjtGC0YHRjy4g0JLRiyDQvNC+0LbQtdGC0LUg0LLQu9C40Y/RgtGMINC90LAg0LTRgNGD0LPQuNGFLiDQodGH0LDRgdGC0YzQtSDQuCDQsdC10LTRiyDQstCw0YjQuNGFINC30L3QsNC60L7QvNGL0YUg0L3QtdCx0LXQt9GA0LDQt9C70LjRh9C90Ysg0LLQsNC8LiDQmNGB0L/QvtC70YzQt9GD0Y8g0Y3RgtGDINC60L3QuNCz0YMsINCy0Ysg0LHQtdC3INC+0YHQvtCx0L7Qs9C+INGC0YDRg9C00LAg0YHQvNC+0LbQtdGC0LUg0L/QvtC80L7Rh9GMINC40Lwg0LLRi9C20LjQstCw0YLRjCDQuCDQstC10YHRgtC4INCx0L7Qu9C10LUg0YHRh9Cw0YHRgtC70LjQstGD0Y4g0LbQuNC30L3RjC4g0Jgg0YXQvtGC0Y8g0L3QuNC60YLQviDQvdC1INC80L7QttC10YIg0LPQsNGA0LDQvdGC0LjRgNC+0LLQsNGC0Ywg0YHRh9Cw0YHRgtGM0LUg0LTRgNGD0LPQvtCz0L4sINGC0LXQvCDQvdC1INC80LXQvdC10LUg0LzQvtC20L3QviDQv9C+0LLRi9GB0LjRgtGMINC10LPQviDRiNCw0L3RgdGLINC90LAg0LLRi9C20LjQstCw0L3QuNC1INC4INGB0YfQsNGB0YLQu9C40LLRg9GOINC20LjQt9C90YwuINCQINCy0LzQtdGB0YLQtSDRgSDRgtC10Lwg0L/QvtCy0YvRgdGP0YLRgdGPINC4INCy0LDRiNC4INGI0LDQvdGB0YsuINCSINCy0LDRiNC40YUg0YHQuNC70LDRhSDRg9C60LDQt9Cw0YLRjCDQtNC+0YDQvtCz0YMg0Log0LHQvtC70LXQtSDQsdC10LfQvtC/0LDRgdC90L7QuSDQuCDRgdGH0LDRgdGC0LvQuNCy0L7QuSDQttC40LfQvdC4LlwiLFxyXG5cclxuICAgIFwiYWJvdXRQYWdlVGl0bGVcIjogXCI8aSBjbGFzcz0ndGV4Jz48aW1nIGNsYXNzPSd0ZXh0LWxpbmUnIHNyYz0nLi9pbWFnZXMvdGV4dC1saW5lLnN2ZycgYWx0PSdpbWctbGluZSc+0J4g0J3QsNGBPC9pPlwiLFxyXG5cclxuICAgIFwiYWJvdXRQYWdlRGVzMVwiOiBcIjxzcGFuPtCSIDIwMDkg0LPQvtC00YMg0JzQsNGA0LPQsNGA0LjRgtCwINCh0L7RgtC90LjQutC+0LLQsDwvc3Bhbj4gLSDRgdC+0L7RgdC90L7QstCw0YLQtdC70YzQvdC40YbQsCDQntCx0YDQsNC30L7QstCw0YLQtdC70YzQvdC+0LPQviDQpdC+0LvQtNC40L3QsyDQm9C+0LPQvtGBLCDQvtCx0YPRh9C40LLRiNC40YHRjCDQsiDQldCy0YDQvtC/0LUsINC/0YDQtdC00L7RgdGC0LDQstC40LvQsCDQuNC90LTQuNCy0LjQtNGD0LDQu9GM0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjiDQv9C+INC70LjRh9C90L7RgdGC0L3QvtC80YMg0YDQvtGB0YLRgyAo0L7QtNC40YLQuNC90LMpINCb0Y7QtNC80LjQu9C1INCR0L7Qs9GD0YggLSDRgdC+0LfQtNCw0YLQtdC70YzQvdC40YbQtSDQodGC0YPQtNC40Lgg0JLRgNC10LzQtdC90Lgg0JHQvtCz0YPRiNGC0LDQudC8LiDQrdGC0L4g0LHRi9C70L4g0L3QsNGB0YLQvtC70YzQutC+INGD0YHQv9C10YjQvdGL0Lwg0Lgg0YLQsNC6INC40LfQvNC10L3QuNC70L4g0LbQuNC30L3RjCDQm9GO0LTQvNC40LvRiywg0YfRgtC+INC+0L3QsCDQv9GA0LXQtNC70L7QttC40LvQsCDQnNCw0YDQs9Cw0YDQuNGC0LUg0YHQvtGC0YDRg9C00L3QuNGH0LXRgdGC0LLQviwg0LrQvtGC0L7RgNC+0LUg0LIg0YDQtdC30YPQu9GM0YLQsNGC0LUg0L/QtdGA0LXRgNC+0YHQu9C+INCyINC/0L7Rj9Cy0LvQtdC90LjQtSDQs9GA0YPQv9C/0YsgwqvQn9C70LDQvdC10YLQsMK7LiDQk9GA0YPQv9C/0LAg0L7QsdGK0LXQtNC40L3QuNC70LAg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70L7QsiDQsiDQvtCx0LvQsNGB0YLQuCDQtNGD0YjQtdCy0L3QvtCz0L4g0LfQtNC+0YDQvtCy0YzRjyDQuCDQu9C40YfQvdC+0YHRgtC90YvRhSDQutC+0L3RgdGD0LvRjNGC0LDRhtC40LksINC/0YDQsNC60YLQuNC60YPRjtGJ0LjRhSDQvtC00LjRgtC40L3QsyAtINGB0L/QvtGB0L7QsSDQstC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNGPINC20LjQt9C90LXQvdC90L7Qs9C+INC/0L7RgtC10L3RhtC40LDQu9CwINGH0LXQu9C+0LLQtdC60LAg0L/QvtGB0YDQtdC00YHRgtCy0L7QvCDQuNC30LHQsNCy0LvQtdC90LjRjyDRh9C10LvQvtCy0LXQutCwINC+0YIg0L3QsNC60L7Qv9C70LXQvdC90L7QuSDQsiDRgNCw0LfRg9C80LUg0LHQvtC70Lgg0L/QvtGC0LXRgNGMLCDQvdC10YPQtNCw0YcsINCx0L7Qu9C10LfQvdC10Lkg0Lgg0L3QtdC00L7RgdGC0LjQs9C90YPRgtGL0YUg0YbQtdC70LXQuS5cIixcclxuICAgIFwiYWJvdXRQYWdlRGVzMlwiOiBcIjxzcGFuPtCaIDIwMTMg0LPQvtC00YMg0Log0J/Qu9Cw0L3QtdGC0LUg0L/RgNC40YHQvtC10LTQuNC90LjQu9C40YHRjCDQvdC10YHQutC+0LvRjNC60L4g0YHQv9C10YbQuNCw0LvQuNGB0YLQvtCyPC9zcGFuPiwg0L7QtNC90LDQutC+INC+0LHRitGR0Lwg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjRjyDQs9GA0YPQv9C/0Ysg0LHRi9C7INC90LXQstC10LvQuNC6LCDQuCDQvtCz0YDQsNC90LjRh9C40LLQsNC70YHRjyDQsiDQvtGB0L3QvtCy0L3QvtC8INCj0LrRgNCw0LjQvdC+0LkuIFwiLFxyXG4gICAgXCJhYm91dFBhZ2VEZXMzXCI6IFwiPHNwYW4+0JIgMjAxNCDQs9C+0LTRgyDQuiDQs9GA0YPQv9C/0LUg0L/RgNC40YHQvtC10LTQuNC90LjQu9GB0Y8g0JXQstCz0LXQvdC40Lkg0KHQvtGC0L3QuNC60L7Qsjwvc3Bhbj4gLSDQvNGD0LYg0JzQsNGA0LPQsNGA0LjRgtGLLCDRgdC+0LLQu9Cw0LTQtdC70LXRhiDQm9C+0LPQvtGB0LAsINCx0LjQt9C90LXRgS3QutC+0L3RgdGD0LvRjNGC0LDQvdGCLCDQutGA0LjQt9C40YEt0LzQtdC90LXQtNC20LXRgC4g0JLQvdC10LTRgNC40LIg0LIg0J/Qu9Cw0L3QtdGC0LUg0L7RgdC90L7QstC90YvQtSDQuNC90YHRgtGA0YPQvNC10L3RgtGLINGD0L/RgNCw0LLQu9C10L3QuNGPLCDQldCy0LPQtdC90LjQuSDQv9C+0LvQvtC20LjQuyDQvdCw0YfQsNC70L4g0YDQtdC30LrQvtC80YMg0YDQvtGB0YLRgyDCq9Cf0LvQsNC90LXRgtGLwrssINGH0YLQviDQv9GA0LjQstC70LXQutC70L4g0LLQvdC40LzQsNC90LjQtSDQsNC80LXRgNC40LrQsNC90YHQutC+0Lkg0LrQuNC90L7QutC+0LzQv9Cw0L3QuNC4LCDQutC+0YLQvtGA0LDRjyDQsiAyMDE1INGB0L3Rj9C70LAg0L4g0LPRgNGD0L/Qv9C1INC4INC10LUg0YPRgdC/0LXRiNC90YvRhSDQtNC10LnRgdGC0LLQuNGP0YUg0YHRjtC20LXRgtC90YvQuSDRhNC40LvRjNC8LCDQv9C+0LrQsNC30LDQvdC90YvQuSDQtNC70Y8g0L/RgNC40LzQtdGA0LAg0LIg0LTRgNGD0LPQuNGFINC/0L7QtNC+0LHQvdGL0YUg0L7RgNCz0LDQvdC40LfQsNGG0LjRj9GFINC/0L4g0LLRgdC10LzRgyDQvNC40YDRgy5cIixcclxuICAgIFwiYWJvdXRQYWdlRGVzNFwiOiBcItCj0YHQv9C10YjQvdGL0LUg0LTQtdC50YHRgtCy0LjRjyDQuCDRgdGC0LDQvdC00LDRgNGC0L3Ri9C5INCw0LTQvNC40L3QuNGB0YLRgNCw0YLQuNCy0L3Ri9C5INC/0L7QtNGF0L7QtCA8c3Bhbj7Qv9GA0LjQstC10LvQuCDQuiDRgNCw0YHRiNC40YDQtdC90LjRjiDRgdGE0LXRgNGLPC9zcGFuPiDQtNC10Y/RgtC10LvRjNC90L7RgdGC0Lgg0LPRgNGD0L/Qv9GLLCDQsiDCq9Cf0LvQsNC90LXRgtGDwrsg0L3QsCDRg9GB0LvRg9Cz0Lgg0YHRgtCw0LvQuCDQv9GA0LjQtdC30LbQsNGC0Ywg0LrQu9C40LXQvdGC0Ysg0LjQtyAyMyDRgdGC0YDQsNC9INC80LjRgNCwLCDQstC60LvRjtGH0LDRjyDRgdGC0YDQsNC90Ysg0JXQstGA0L7RgdC+0Y7Qt9CwINC4INCh0KjQkC4g0K3RgtC+INCx0YvQu9C+INC+0LHRg9GB0LvQvtCy0LvQtdC90L4g0YLQtdC80Lgg0YDQtdC30YPQu9GM0YLQsNGC0LDQvNC4LCDQutC+0YLQvtGA0YvQtSDQvtC90Lgg0L/QvtC70YPRh9Cw0LvQuCwg0L/QvtGB0LrQvtC70YzQutGDLCDQstC+0YHRgdGC0LDQvdC+0LLQuNCyINGB0LLQvtC5INC20LjQt9C90LXQvdC90YvQuSDQv9C+0YLQtdC90YbQuNCw0LssINC60LvQuNC10L3RgtGLIMKr0J/Qu9Cw0L3QtdGC0YvCuyAtINCyINC+0YHQvdC+0LLQvdC+0Lwg0LLQu9Cw0LTQtdC70YzRhtGLINCx0LjQt9C90LXRgdCwLCDQv9C+0LvRg9GH0LDQu9C4INCx0LXQt9GD0YHQu9C+0LLQvdGL0Lkg0YDQvtGB0YIg0Lgg0YDQsNGB0YjQuNGA0LXQvdC40LUg0YHQstC+0LjRhSDQutC+0LzQv9Cw0L3QuNC5LiBcIixcclxuICAgIFwiYWJvdXRQYWdlRGVzNVwiOiBcItCt0YLQviDQv9GA0LjQstC10LvQviDQuiDRgtC+0LzRgywg0YfRgtC+IDxzcGFuPtCyIDIwMTkg0LPQvtC00YMg0LPRgNGD0L/Qv9CwINGB0YLQsNC70LAg0LvRg9GH0YjQtdC5INCyINCV0LLRgNC+0L/QtTwvc3Bhbj4sINCwIDEwINC10LUg0YHQv9C10YbQuNCw0LvQuNGB0YLQvtCyINCy0L7Qt9Cz0LvQsNCy0LjQu9C4INGC0YPRgNC90LjRgNC90YPRjiDRgtCw0LHQu9C40YbRgyDQsiDQu9C40YfQvdC+0Lwg0LfQsNGH0ZHRgtC1LiDQmtGA0L7QvNC1INGC0L7Qs9C+LCDQs9GA0YPQv9C/0LAg0L7RgtC60YDRi9C70LAg0YTQuNC70LjQsNC70Ysg0LIg0KHQndCTLCDQsCDQt9Cw0YLQtdC8INCyIDIwMjIsINC4INCyINCh0KjQkC5cIixcclxuICAgIFwiYWJvdXRQYWdlRGVzNlwiOiBcIjxzcGFuPtCd0LAg0YHQtdCz0L7QtNC90Y/RiNC90LjQuSDQtNC10L3RjCDQvdCw0YjQsCDQs9GA0YPQv9C/0LAg0L/RgNC+0LTQvtC70LbQsNC10YIg0YDQsNGB0YLQuDwvc3Bhbj4sINGA0LDRgdGI0LjRgNGP0Y8g0YHQstC+0ZEg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjQtSDQvdCwINGC0LXRgNGA0LjRgtC+0YDQuNC4INC90LUg0YLQvtC70YzQutC+INCj0LrRgNCw0LjQvdGLLCDQvdC+INC4INCyINC00YDRg9Cz0LjRhSDRgdGC0YDQsNC90LDRhSDQvNC40YDQsC4g0KfQuNGB0LvQviDQvtC00LjRgtC+0YDQvtCyINCz0YDRg9C/0L/RiyDQstGL0YDQvtGB0LvQviDQtNC+IDI1LCDQsCDRh9C40YHQu9C+INCy0YHQtdCz0L4g0L/QtdGA0YHQvtC90LDQu9CwINC00L4gNjAuXCIsXHJcblxyXG4gICAgXCJjb250YWN0UGFnZVRpdGxlXCI6IFwi0J3QsNGI0Lgg0LrQvtC90YLQsNC60YLRi1wiLFxyXG5cclxuICAgIFwiY29udGFjdFBhZ2VGb3JtVGl0bGVcIjogXCLQndCw0L/QuNGI0LjRgtC1INC90LDQvCDRgdC+0L7QsdGJ0LXQvdC40LU6XCJcclxufSIsImltcG9ydCBlbktleXMgZnJvbSBcIi4uL2pzb24vbG9jYWxpemF0aW9uL2VuLmpzb25cIjtcclxuaW1wb3J0IHJ1S2V5cyBmcm9tIFwiLi4vanNvbi9sb2NhbGl6YXRpb24vcnUuanNvblwiO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50TGFuZyB9IGZyb20gXCIuLi91dGlscy9jb29raWVcIjtcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IGNoYW5nZUxhbmd1YWdlT25XZWJzaXRlIH0gZnJvbSBcIi4vbGFuZ3VhZ2Utc2VsZWN0LmpzXCI7XHJcblxyXG5jb25zdCBpbml0TG9jYWxpemF0aW9uID0gKCkgPT4ge1xyXG4gIGlmIChpMThuZXh0LmlzSW5pdGlhbGl6ZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaTE4bmV4dC51c2UoaW5pdFJlYWN0STE4bmV4dCkuaW5pdCh7XHJcbiAgICBsbmc6IGdldEN1cnJlbnRMYW5nKCksXHJcbiAgICByZXNvdXJjZXM6IHtcclxuICAgICAgZW46IHtcclxuICAgICAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAgICAgLi4uZW5LZXlzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgdHJhbnNsYXRpb246IHtcclxuICAgICAgICAgIC4uLnJ1S2V5cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjaGFuZ2VMYW5ndWFnZU9uV2Vic2l0ZSgpO1xyXG59O1xyXG5cclxuaW5pdExvY2FsaXphdGlvbigpOyIsImltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRMYW5nLCBzZXRMYW5ndWFnZSB9IGZyb20gXCIuLi91dGlscy9jb29raWUuanNcIjtcclxuaW1wb3J0ICcuL2kxOG4nO1xyXG5cclxuZnVuY3Rpb24gaW5pdExhbmd1YWdlU2VsZWN0KCkge1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUxhbmd1YWdlID0gbmV3IEV2ZW50KFwib25DaGFuZ2VMYW5ndWFnZVwiLCB7XCJidWJibGVzXCI6dHJ1ZSwgXCJjYW5jZWxhYmxlXCI6ZmFsc2V9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRMYW5nID0gZ2V0Q3VycmVudExhbmcoKTtcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmd1YWdlLXNlbGVjdFwiKTtcclxuXHJcbiAgaWYgKCFsYW5ndWFnZVNlbGVjdCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZUJ0biA9XHJcbiAgbGFuZ3VhZ2VTZWxlY3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZC1sYW5ndWFnZVwiKTtcclxuXHJcbiAgc2VsZWN0ZWRMYW5ndWFnZUJ0bi50ZXh0Q29udGVudCA9IHNlbGVjdGVkTGFuZztcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmd1YWdlLWJ1dHRvbicpO1xyXG4gIGxhbmd1YWdlQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGlmKGJ0bi5kYXRhc2V0LmxhbmcgPT09IHNlbGVjdGVkTGFuZykge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgbmV3TGFuZyA9IGJ0bi5kYXRhc2V0Lmxhbmc7XHJcbiAgICAgIHNlbGVjdGVkTGFuZ3VhZ2VCdG4udGV4dENvbnRlbnQgPSBuZXdMYW5nO1xyXG4gICAgICByZW1vdmVBY3RpdmVDbGFzcyhsYW5ndWFnZUJ0bnMpO1xyXG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICBpZihpMThuZXh0Lmxhbmd1YWdlICE9PSBuZXdMYW5nKSB7XHJcbiAgICAgICAgc2V0TGFuZ3VhZ2UobmV3TGFuZykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBjaGFuZ2VMYW5ndWFnZU9uV2Vic2l0ZSgpO1xyXG4gICAgICAgICAgLy8gVHJpZ2dlciByZWFjdCBhcHAgbG9jYWxpemF0aW9uXHJcbiAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RcIikpIHtcclxuICAgICAgICAgICAgYnRuLmRpc3BhdGNoRXZlbnQob25DaGFuZ2VMYW5ndWFnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcyhlbGVtZW50cykge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2VPbldlYnNpdGUoKSB7XHJcblxyXG4gIGNvbnN0IGxvY2FsaXphdGlvblRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbG9jYWxpemF0aW9uXVwiKTtcclxuICBjb25zdCBsb2NhbGl6YXRpb25QbGFjZWhvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCJbZGF0YS1sb2NhbGl6YXRpb24tcGxhY2Vob2xkZXJdXCJcclxuICApO1xyXG5cclxuICBsb2NhbGl6YXRpb25UYWdzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5pbm5lckhUTUwgPSBgJHtpMThuZXh0LnQoZWwuZGF0YXNldC5sb2NhbGl6YXRpb24sIHtcclxuICAgICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSl9YDtcclxuICB9KTtcclxuXHJcbiAgbG9jYWxpemF0aW9uUGxhY2Vob2xkZXJzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5wbGFjZWhvbGRlciA9IGAke2kxOG5leHQudChlbC5kYXRhc2V0LmxvY2FsaXphdGlvblBsYWNlaG9sZGVyKX1gO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICBjaGFuZ2VMYW5ndWFnZU9uV2Vic2l0ZSxcclxuICBpbml0TGFuZ3VhZ2VTZWxlY3QsXHJcbn0iLCJpbXBvcnQgeyBQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCwgUExBTkVUX0VORFBPSU5UX0NPVVJTRSB9IGZyb20gJy4vY29uc3RhbnRzL2xpbmsuanMnO1xyXG5pbXBvcnQgeyBQSE9ORV9SRUdFWCB9IGZyb20gJy4vY29uc3RhbnRzL3JlZ2V4LmpzJztcclxuaW1wb3J0IHsgbWFza1Bob25lTnVtYmVyIH0gZnJvbSAnLi91dGlscy9nZW5lcmFsLmpzJztcclxuaW1wb3J0IHsgaW5pdExhbmd1YWdlU2VsZWN0IH0gZnJvbSAnLi9sb2NhbGl6YXRpb24vbGFuZ3VhZ2Utc2VsZWN0LmpzJztcclxuXHJcbmluaXRMYW5ndWFnZVNlbGVjdCgpO1xyXG5cclxuLyogaGVhZGVyICovXHJcblxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbmNvbnN0IGxpbmtDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluay1jbG9zZVwiKTtcclxuXHJcblxyXG5pZiAoYnVyZ2VyKSB7XHJcbiAgYnVyZ2VyT3V0c2lkZUNsaWNrKCk7XHJcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTWVudSk7XHJcbn07XHJcblxyXG5pZiAobGlua0Nsb3NlLmxlbmd0aCkge1xyXG4gIGZvcih2YXIgaSA9MDtpPGxpbmtDbG9zZS5sZW5ndGg7KytpKXtcclxuICAgIGxpbmtDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KGUpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJib2R5X2xvY2tcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIGlmKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlcl9hY3RpdmUnKSkge1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2ZpbmlzaCcpO1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9hY3RpdmUnKTtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9maW5pc2gnKTtcclxuICAgIH1cclxuICBtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keV9sb2NrXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlcl9hY3RpdmVcIik7XHJcbiAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9maW5pc2gnKTtcclxuICBtZW51Qm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1cmdlck91dHNpZGVDbGljaygpIHtcclxuICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSlcclxufVxyXG5cclxuLyogcG9wVXAgKi9cclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbmNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXBcIik7XHJcbmNvbnN0IGJ0bk9wZW5Qb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXBvcHVwJyk7XHJcbmNvbnN0IGJ0bkNsb3NlUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcclxuXHJcblxyXG5pZiAoYnRuT3BlblBvcFVwKSB7XHJcbiAgYnRuT3BlblBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUG9wVXApO1xyXG59O1xyXG5cclxuaWYgKGJ0bkNsb3NlUG9wVXApIHtcclxuICBidG5DbG9zZVBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5Qb3BVcCAoZSl7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keV9sb2NrXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGUpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5X2xvY2tcIik7XHJcbn1cclxuXHJcbi8qIG5hdm1lbnUgc2VydmljZSBwYWdlcyAqL1xyXG5cclxuY29uc3QgdGFic0J0biAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX25hdi1idG4nKTtcclxuY29uc3QgdGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX2xpc3QnKTtcclxuXHJcbnRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBjdXJyZW50QnRuID0gaXRlbTtcclxuICAgICAgICBsZXQgdGFiSWQgPSBjdXJyZW50QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKTtcclxuICAgICAgICBsZXQgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpO1xyXG5cclxuICAgICAgICBpZiggISBjdXJyZW50QnRuLmNsYXNzTGlzdC5jb250YWlucygnYnRuX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YWJzSXRlbS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKCdsaXN0X2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIFN3aXBlcjpcclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lTbGlkZXJzT25SZXNpemUoc2VsZWN0b3IsIHdpZHRoLCBvYmosIG1vcmVUaGFuKSB7XHJcbiAgY29uc3QgaW5pdCA9IHtcclxuICAgIC4uLm9iaixcclxuICB9O1xyXG5cclxuICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgY29uc3Qgc2xpZGVyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcbiAgaWYoIXNsaWRlclNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCBpbml0KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlSW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5lZWRlZFdpZHRoID0gbW9yZVRoYW4gPyB3aW4uaW5uZXJXaWR0aCA+PSB3aWR0aCA6IHdpbi5pbm5lcldpZHRoIDw9IHdpZHRoXHJcbiAgICBpZiAobmVlZGVkV2lkdGgpIHtcclxuICAgICAgaWYgKCFzbGlkZXJTZWxlY3Rvci5jbGFzc0xpc3QuY29udGFpbnMoXCJzd2lwZXItaW5pdGlhbGl6ZWRcIikpIHtcclxuICAgICAgICBzd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCBpbml0KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzbGlkZXJTZWxlY3Rvci5jbGFzc0xpc3QuY29udGFpbnMoXCJzd2lwZXItaW5pdGlhbGl6ZWRcIikpIHtcclxuICAgICAgc3dpcGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBbXCJsb2FkXCIsIFwicmVzaXplXCJdLmZvckVhY2goKGV2dCkgPT5cclxuICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKGV2dCwgdG9nZ2xlSW5pdCwgZmFsc2UpXHJcbiAgKTtcclxufVxyXG5cclxuZGVzdHJveVNsaWRlcnNPblJlc2l6ZShcIi5yZXZpZXdzLXNsaWRlclwiLCA5OTk5OSwge1xyXG4gIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgc3BlZWQ6IDgwMCxcclxuICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyogcmV2aWV3cyBvcGVuZXIgKi9cclxuXHJcbmNvbnN0IHJldmlld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGV4dC13cmFwXCIpO1xyXG5cclxucmV2aWV3c0Jsb2NrLmZvckVhY2goZnVuY3Rpb24ocmV2aWV3KXtcclxuICBjb25zdCBidG5PcGVuID0gcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5yZXYtb3BlbicpO1xyXG4gIGNvbnN0IGJ0bkNsb3NlID0gcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5yZXYtY2xvc2UnKTtcclxuXHJcbiAgaWYoYnRuT3Blbil7XHJcbiAgICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfcmV2aWV3XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICByZXZpZXcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9yZXZpZXdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxubmV3IFdPVygpLmluaXQoKTtcclxuXHJcbi8qIGNhc3RvbSBhbmltICovXHJcblxyXG5mdW5jdGlvbiBvbkVudHJ5KGVudHJ5KSB7XHJcbiAgZW50cnkuZm9yRWFjaChjaGFuZ2UgPT4ge1xyXG4gICAgaWYgKGNoYW5nZS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICBjaGFuZ2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtc2hvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmxldCBvcHRpb25zID0geyB0aHJlc2hvbGQ6IFswLjVdIH07XHJcbmxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkVudHJ5LCBvcHRpb25zKTtcclxubGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVsZW1lbnQtYW5pbWF0aW9uJyk7XHJcbmZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4gIG9ic2VydmVyLm9ic2VydmUoZWxtKTtcclxufVxyXG5cclxuLyogYWN0aXZlIGxpbmsgcGFnZSAqL1xyXG5cclxubGV0IHBhZ2VJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pZC1wYWdlXVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLXBhZ2VcIiksXHJcbiAgICBuYXZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQtbmF2PSR7cGFnZUlkfV1gKTtcclxuXHJcbmlmKHBhZ2VJZCA9PSBuYXZJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaWQtbmF2XCIpKSB7XHJcbiAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlua1wiKTtcclxufVxyXG5cclxuLyogY29udGFjdCBmb3JtICovXHJcbmluaXRDb250YWN0Rm9ybSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm1XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBcIik7XHJcbiAgXHJcbiAgaWYgKCFmb3JtV3JhcCkgcmV0dXJuO1xyXG4gIFxyXG4gIGNvbnN0IGZvcm0gPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RGb3JtXCIpO1xyXG5cclxuICBpZighZm9ybSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBzdWNjZXNzTXNnQmxvY2sgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tc2cnKTtcclxuICBjb25zdCBmb3JtQ29udGVudCA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRlbnQnKTtcclxuICBjb25zdCBFTUFJTF9SRUdFWCA9IC9bXkAgXFx0XFxyXFxuXStAW15AIFxcdFxcclxcbl0rXFwuW15AIFxcdFxcclxcbl0rLztcclxuICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmaXJzdE5hbWVcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZVwiKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xyXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZUVycm9yRWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgZW1haWxFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsRXJyb3JcIik7XHJcbiAgY29uc3QgZmV0Y2hFcnJvckVsID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZldGNoLWVycm9yJyk7XHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyV3JhcCcpO1xyXG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGZpcnN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgbGFzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGVtYWlsSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIGlmKCFpc0Zvcm1WYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgZW1haWw6IGVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VJbnB1dC52YWx1ZSxcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG5cclxuICAgIGZldGNoKFBMQU5FVF9FTkRQT0lOVF9DT05UQUNULCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdCksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgc3VjY2Vzc01zZ0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgZm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgZm9ybVdyYXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZW5kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgZmlyc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGb3JtKFwiZmlyc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImVtYWlsSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICBjYXNlIFwiZmlyc3ROYW1lSW5wdXRcIjpcclxuICAgICAgICBpZih2YWx1ZSA8IDEpIHtcclxuICAgICAgICAgIGZpcnN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsYXN0TmFtZUlucHV0XCI6XHJcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICBsYXN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGxhc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZW1haWxJbnB1dFwiOlxyXG4gICAgICAgIGlmKCFFTUFJTF9SRUdFWC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgZW1haWxFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBlbWFpbEVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIGNvbnRhY3QgZm9ybSAqL1xyXG5pbml0Q291cnNlRm9ybSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdENvdXJzZUZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcFwiKTtcclxuICBcclxuICBpZiAoIWZvcm1XcmFwKSByZXR1cm47XHJcbiAgXHJcbiAgY29uc3QgZm9ybSA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjY291cnNlRm9ybVwiKTtcclxuXHJcbiAgaWYoIWZvcm0pIHJldHVybjtcclxuXHJcbiAgY29uc3Qgc3VjY2Vzc01zZ0Jsb2NrID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtbXNnJyk7XHJcbiAgY29uc3QgZm9ybUNvbnRlbnQgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250ZW50Jyk7XHJcbiAgY29uc3QgZmlyc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lXCIpO1xyXG4gIGNvbnN0IGxhc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdE5hbWVcIik7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcclxuICBjb25zdCBwaG9uZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZUVycm9yRWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgcGhvbmVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Bob25lRXJyb3JcIik7XHJcbiAgY29uc3QgZmV0Y2hFcnJvckVsID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZldGNoLWVycm9yJyk7XHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyV3JhcCcpO1xyXG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGZpcnN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgbGFzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGVtYWlsSW5wdXQudmFsdWUpO1xyXG4gICAgdmFsaWRhdGVGb3JtKFwicGhvbmVJbnB1dFwiLCBwaG9uZUlucHV0LnZhbHVlKVxyXG5cclxuICAgIGlmKCFpc0Zvcm1WYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgZW1haWw6IGVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgIHBob25lTnVtYmVyOiBwaG9uZUlucHV0LnZhbHVlLFxyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcblxyXG4gICAgZmV0Y2goUExBTkVUX0VORFBPSU5UX0NPVVJTRSwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIHN1Y2Nlc3NNc2dCbG9jay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGZvcm1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgIGZvcm1XcmFwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VuZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGVycm9yKTtcclxuICAgICAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcbiAgbGFzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJsYXN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcbiAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJwaG9uZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZCwgdmFsdWUpIHtcclxuICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgY2FzZSBcImZpcnN0TmFtZUlucHV0XCI6XHJcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XHJcbiAgICAgICAgZmlyc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibGFzdE5hbWVJbnB1dFwiOlxyXG4gICAgICAgIGlmKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgbGFzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBsYXN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInBob25lSW5wdXRcIjpcclxuICAgICAgICBjb25zdCBwaG9uZVZhbHVlID0gdmFsdWUgPyB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIikgOiAnJztcclxuICAgICAgICBjb25zdCBtYXNrZWRQaG9uZU51bWJlciA9IG1hc2tQaG9uZU51bWJlcihwaG9uZVZhbHVlKTtcclxuICAgICAgICBwaG9uZUlucHV0LnZhbHVlID0gbWFza2VkUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgaWYoIVBIT05FX1JFR0VYLnRlc3QobWFza2VkUGhvbmVOdW1iZXIpKSB7XHJcbiAgICAgICAgICBwaG9uZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIHBob25lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogc2VydmljZXMgbWVudSBsb2dpYyAqL1xyXG5pbml0U2VydmljZU1lbnUoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTZXJ2aWNlTWVudSgpIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtXCIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYXJyb3dzJykpIHtcclxuICAgICAgY2xvc2VPcGVuSXRlbXMoKTtcclxuICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcubWVudS1pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xvc2VPcGVuSXRlbXMoKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlT3Blbkl0ZW1zKCkge1xyXG4gICAgbWVudUl0ZW0uZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbi8qIFN0aWNreSAqL1xyXG5pbml0U3RpY2t5TWVudSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFN0aWNreU1lbnUoKSB7XHJcbiAgY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2VjJyk7XHJcbiAgXHJcbiAgaWYoIW1lbnVFbCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBvcmlnaW5NZW51VG9wID0gbWVudUVsLm9mZnNldFBhcmVudC5vZmZzZXRUb3A7XHJcbiAgXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPiBvcmlnaW5NZW51VG9wKSB7XHJcbiAgICAgIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVudUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICB9O1xyXG4gIH0pXHJcbn0iLCJpbXBvcnQgaTE4bmV4dCBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBMQU5HLCBMQU5HU19UWVBFUyB9IGZyb20gXCIuLi9jb25zdGFudHMvY29va2llLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykgPT4ge1xyXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4ZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gIGxldCBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoY25hbWUpID0+IHtcclxuICBsZXQgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgbGV0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICBsZXQgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KFwiO1wiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09IFwiIFwiKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xyXG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TGFuZ3VhZ2UgPSAobmV3TGFuZykgPT4ge1xyXG4gIHNldENvb2tpZShMQU5HLCBuZXdMYW5nKTtcclxuICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgcmV0dXJuIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobmV3TGFuZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IHtcclxuICBsZXQgc2VsZWN0ZWRMYW5nID0gZ2V0Q29va2llKExBTkcpO1xyXG5cclxuICBpZiAoIXNlbGVjdGVkTGFuZykge1xyXG4gICAgc2V0Q29va2llKExBTkcsIExBTkdTX1RZUEVTLlJVKTtcclxuICAgIHNlbGVjdGVkTGFuZyA9IExBTkdTX1RZUEVTLlJVO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlbGVjdGVkTGFuZztcclxufSIsImV4cG9ydCBjb25zdCBtYXNrUGhvbmVOdW1iZXIgPSAocGhvbmVOdW1iZXIpID0+IHtcclxuICBjb25zdCBsZW5ndGggPSBwaG9uZU51bWJlci5sZW5ndGg7XHJcblxyXG4gIGlmIChsZW5ndGggPiA4KSB7XHJcbiAgICByZXR1cm4gYCgke3Bob25lTnVtYmVyLnNsaWNlKDAsIDMpfSkgJHtwaG9uZU51bWJlci5zbGljZShcclxuICAgICAgMyxcclxuICAgICAgNlxyXG4gICAgKX0gJHtwaG9uZU51bWJlci5zbGljZSg2LCA4KX0gJHtwaG9uZU51bWJlci5zbGljZSg4LCAxMCl9YDtcclxuICB9XHJcblxyXG4gIGlmIChsZW5ndGggPiA2KSB7XHJcbiAgICByZXR1cm4gYCgke3Bob25lTnVtYmVyLnNsaWNlKDAsIDMpfSkgJHtwaG9uZU51bWJlci5zbGljZShcclxuICAgICAgMyxcclxuICAgICAgNlxyXG4gICAgKX0gJHtwaG9uZU51bWJlci5zbGljZSg2KX1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxlbmd0aCA+IDMpIHtcclxuICAgIHJldHVybiBgKCR7cGhvbmVOdW1iZXIuc2xpY2UoMCwgMyl9KSAke3Bob25lTnVtYmVyLnNsaWNlKDMpfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGhvbmVOdW1iZXI7XHJcbn07XHJcbiJdfQ==

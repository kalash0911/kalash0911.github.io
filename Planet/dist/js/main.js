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
    "youWillLearn:": "На этом курсе вы узнаете:",
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
    "secricePageRew2Pos4": "Ресторатор"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkvZGlzdC9odG1sLXBhcnNlLXN0cmluZ2lmeS5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L2Rpc3QvY2pzL2kxOG5leHQuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwibm9kZV9tb2R1bGVzL2kxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9BcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy9JMThuZXh0UHJvdmlkZXIuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2NvbW1vbmpzL1RyYW5zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy9UcmFuc2xhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2NvbW1vbmpzL3VuZXNjYXBlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy91c2VTU1IuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9kaXN0L2NvbW1vbmpzL3VzZVRyYW5zbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvZGlzdC9jb21tb25qcy91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvd2l0aFNTUi5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L2Rpc3QvY29tbW9uanMvd2l0aFRyYW5zbGF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0LWkxOG5leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC1pMThuZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJub2RlX21vZHVsZXMvcmVhY3QtaTE4bmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdm9pZC1lbGVtZW50cy9pbmRleC5qcyIsInNyYy9qcy9jb25zdGFudHMvY29va2llLmpzIiwic3JjL2pzL2NvbnN0YW50cy9saW5rLmpzIiwic3JjL2pzL2NvbnN0YW50cy9yZWdleC5qcyIsInNyYy9qcy9qc29uL2xvY2FsaXphdGlvbi9lbi5qc29uIiwic3JjL2pzL2pzb24vbG9jYWxpemF0aW9uL3J1Lmpzb24iLCJzcmMvanMvbG9jYWxpemF0aW9uL2kxOG4uanMiLCJzcmMvanMvbG9jYWxpemF0aW9uL2xhbmd1YWdlLXNlbGVjdC5qcyIsInNyYy9qcy9tYWluLmpzIiwic3JjL2pzL3V0aWxzL2Nvb2tpZS5qcyIsInNyYy9qcy91dGlscy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQk8sSUFBTSxRQUFRLEdBQUcsVUFBakI7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsTUFBYjs7QUFDQSxJQUFNLFdBQVcsR0FBRztBQUN2QixFQUFBLEVBQUUsRUFBRSxJQURtQjtBQUV2QixFQUFBLEVBQUUsRUFBRSxJQUZtQjtBQUd2QixFQUFBLEVBQUUsRUFBRTtBQUhtQixDQUFwQjs7Ozs7Ozs7OztBQ0ZBLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBUCxHQUN2QixNQUFNLENBQUMsUUFBUCxDQUFnQixNQURPLEdBRXZCLDhDQUZHOztBQUlBLElBQU0sZUFBZSxhQUFNLFdBQU4sWUFBckI7O0FBQ0EsSUFBTSx1QkFBdUIsYUFBTSxXQUFOLGFBQTdCOztBQUNBLElBQU0sc0JBQXNCLGFBQU0sV0FBTixZQUE1Qjs7Ozs7Ozs7OztBQ05BLElBQU0sV0FBVyxHQUFHLCtCQUFwQjs7QUFDQSxJQUFNLFdBQVcsR0FBRyx5Q0FBcEI7Ozs7QUNEUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUxBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBbUIsR0FBTTtBQUM3QixNQUFJLGlCQUFRLGFBQVosRUFBMkI7QUFDekI7QUFDRDs7QUFDRCxtQkFBUSxHQUFSLENBQVksOEJBQVosRUFBOEIsSUFBOUIsQ0FBbUM7QUFDakMsSUFBQSxHQUFHLEVBQUUsNkJBRDRCO0FBRWpDLElBQUEsU0FBUyxFQUFFO0FBQ1QsTUFBQSxFQUFFLEVBQUU7QUFDRixRQUFBLFdBQVcsb0JBQ04sV0FETTtBQURULE9BREs7QUFNVCxNQUFBLEVBQUUsRUFBRTtBQUNGLFFBQUEsV0FBVyxvQkFDTixXQURNO0FBRFQ7QUFOSztBQUZzQixHQUFuQzs7QUFlQTtBQUNELENBcEJEOztBQXNCQSxnQkFBZ0I7Ozs7Ozs7Ozs7O0FDN0JoQjs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVMsa0JBQVQsR0FBOEI7QUFFNUIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLEtBQUosQ0FBVSxrQkFBVixFQUE4QjtBQUFDLGVBQVUsSUFBWDtBQUFpQixrQkFBYTtBQUE5QixHQUE5QixDQUF6QjtBQUVBLE1BQU0sWUFBWSxHQUFHLDZCQUFyQjtBQUVBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQUF2Qjs7QUFFQSxNQUFJLENBQUMsY0FBTCxFQUFxQjtBQUNuQjtBQUNEOztBQUVELE1BQU0sbUJBQW1CLEdBQ3pCLGNBQWMsQ0FBQyxhQUFmLENBQTZCLG9CQUE3QixDQURBO0FBR0EsRUFBQSxtQkFBbUIsQ0FBQyxXQUFwQixHQUFrQyxZQUFsQztBQUVBLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBckI7QUFDQSxFQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLFVBQUMsR0FBRCxFQUFTO0FBQzVCLFFBQUcsR0FBRyxDQUFDLE9BQUosQ0FBWSxJQUFaLEtBQXFCLFlBQXhCLEVBQXNDO0FBQ3BDLE1BQUEsR0FBRyxDQUFDLFNBQUosQ0FBYyxHQUFkLENBQWtCLFFBQWxCO0FBQ0Q7O0FBQ0QsSUFBQSxHQUFHLENBQUMsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBQyxLQUFELEVBQVc7QUFDdkMsVUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQUosQ0FBWSxJQUE1QjtBQUNBLE1BQUEsbUJBQW1CLENBQUMsV0FBcEIsR0FBa0MsT0FBbEM7QUFDQSxNQUFBLGlCQUFpQixDQUFDLFlBQUQsQ0FBakI7QUFDQSxNQUFBLEtBQUssQ0FBQyxNQUFOLENBQWEsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjs7QUFFQSxVQUFHLGlCQUFRLFFBQVIsS0FBcUIsT0FBeEIsRUFBaUM7QUFDL0IsaUNBQVksT0FBWixFQUFxQixJQUFyQixDQUEwQixZQUFNO0FBQzlCLFVBQUEsdUJBQXVCLEdBRE8sQ0FFOUI7O0FBQ0EsY0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixNQUF4QixDQUFILEVBQW9DO0FBQ2xDLFlBQUEsR0FBRyxDQUFDLGFBQUosQ0FBa0IsZ0JBQWxCO0FBQ0Q7QUFDRixTQU5EO0FBT0Q7QUFDRixLQWZEO0FBZ0JELEdBcEJEOztBQXNCQSxXQUFTLGlCQUFULENBQTJCLFFBQTNCLEVBQXFDO0FBQ25DLElBQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsVUFBQyxFQUFELEVBQVE7QUFDdkIsTUFBQSxFQUFFLENBQUMsU0FBSCxDQUFhLE1BQWIsQ0FBb0IsUUFBcEI7QUFDRCxLQUZEO0FBR0Q7QUFDRjs7QUFFRCxTQUFTLHVCQUFULEdBQW1DO0FBRWpDLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLHFCQUExQixDQUF6QjtBQUNBLE1BQU0sd0JBQXdCLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQy9CLGlDQUQrQixDQUFqQztBQUlBLEVBQUEsZ0JBQWdCLENBQUMsT0FBakIsQ0FBeUIsVUFBQyxFQUFELEVBQVE7QUFDL0IsSUFBQSxFQUFFLENBQUMsU0FBSCxhQUFrQixpQkFBUSxDQUFSLENBQVUsRUFBRSxDQUFDLE9BQUgsQ0FBVyxZQUFyQixFQUFtQztBQUNuRCxNQUFBLGFBQWEsRUFBRTtBQUNiLFFBQUEsV0FBVyxFQUFFO0FBREE7QUFEb0MsS0FBbkMsQ0FBbEI7QUFLRCxHQU5EO0FBUUEsRUFBQSx3QkFBd0IsQ0FBQyxPQUF6QixDQUFpQyxVQUFDLEVBQUQsRUFBUTtBQUN2QyxJQUFBLEVBQUUsQ0FBQyxXQUFILGFBQW9CLGlCQUFRLENBQVIsQ0FBVSxFQUFFLENBQUMsT0FBSCxDQUFXLHVCQUFyQixDQUFwQjtBQUNELEdBRkQ7QUFHRDs7Ozs7QUNyRUQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFFQTs7QUFFQSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBbEI7O0FBR0EsSUFBSSxNQUFKLEVBQVk7QUFDVixFQUFBLGtCQUFrQjtBQUNsQixFQUFBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxRQUFqQztBQUNEOztBQUFBOztBQUVELElBQUksU0FBUyxDQUFDLE1BQWQsRUFBc0I7QUFDcEIsT0FBSSxJQUFJLENBQUMsR0FBRSxDQUFYLEVBQWEsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUF6QixFQUFnQyxFQUFFLENBQWxDLEVBQW9DO0FBQ2xDLElBQUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFNBQXZDO0FBQ0Q7QUFDRjs7QUFBQTs7QUFFRCxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDbkIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjs7QUFDQSxNQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLGVBQTFCLENBQUgsRUFBK0M7QUFDM0MsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixlQUFyQjtBQUNBLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7QUFDRCxHQUhILE1BR1M7QUFDTCxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0EsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNEOztBQUNILEVBQUEsUUFBUSxDQUFDLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBMEIsYUFBMUI7QUFDRDs7QUFFRCxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0I7QUFDcEIsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxJQUFULENBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixRQUEvQjtBQUNBLEVBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsZUFBeEI7QUFDQSxFQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0EsRUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixNQUFuQixDQUEwQixhQUExQjtBQUNEOztBQUVELFNBQVMsa0JBQVQsR0FBOEI7QUFDNUIsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjtBQUNBLEVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFNBQW5DO0FBQ0Q7QUFFRDs7O0FBRUEsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFkO0FBQ0EsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBckI7QUFDQSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixjQUF2QixDQUF0Qjs7QUFHQSxJQUFJLFlBQUosRUFBa0I7QUFDaEIsRUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsU0FBdkM7QUFDRDs7QUFBQTs7QUFFRCxJQUFJLGFBQUosRUFBbUI7QUFDakIsRUFBQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBeEM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFsQztBQUNEOztBQUFBOztBQUVELFNBQVMsU0FBVCxDQUFvQixDQUFwQixFQUFzQjtBQUNwQixFQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0EsRUFBQSxLQUFLLENBQUMsU0FBTixDQUFnQixHQUFoQixDQUFvQixRQUFwQjtBQUNBLEVBQUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLFdBQTVCO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQW9CLENBQXBCLEVBQXVCO0FBQ3JCLEVBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQSxFQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFFBQXZCO0FBQ0EsRUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsV0FBL0I7QUFDRDtBQUVEOzs7QUFFQSxJQUFNLE9BQU8sR0FBSSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBakI7QUFDQSxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBakI7QUFFQSxPQUFPLENBQUMsT0FBUixDQUFnQixVQUFTLElBQVQsRUFBZTtBQUMzQixFQUFBLElBQUksQ0FBQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3JDLFFBQUksVUFBVSxHQUFHLElBQWpCO0FBQ0EsUUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsVUFBeEIsQ0FBWjtBQUNBLFFBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWpCOztBQUVBLFFBQUksQ0FBRSxVQUFVLENBQUMsU0FBWCxDQUFxQixRQUFyQixDQUE4QixZQUE5QixDQUFOLEVBQW1EO0FBQy9DLE1BQUEsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsVUFBUyxJQUFULEVBQWU7QUFDM0IsUUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBc0IsWUFBdEI7QUFDSCxPQUZEO0FBSUEsTUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFTLElBQVQsRUFBZTtBQUM1QixRQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFzQixhQUF0QjtBQUNILE9BRkQ7QUFJQSxNQUFBLFVBQVUsQ0FBQyxTQUFYLENBQXFCLEdBQXJCLENBQXlCLFlBQXpCO0FBQ0EsTUFBQSxVQUFVLENBQUMsU0FBWCxDQUFxQixHQUFyQixDQUF5QixhQUF6QjtBQUNIO0FBQ0osR0FqQkQ7QUFrQkgsQ0FuQkQsRSxDQXFCQTs7QUFFQSxTQUFTLHNCQUFULENBQWdDLFFBQWhDLEVBQTBDLEtBQTFDLEVBQWlELEdBQWpELEVBQXNELFFBQXRELEVBQWdFO0FBQzlELE1BQU0sSUFBSSxxQkFDTCxHQURLLENBQVY7O0FBSUEsTUFBTSxHQUFHLEdBQUcsTUFBWjtBQUNBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBRUEsTUFBRyxDQUFDLGNBQUosRUFBb0I7QUFFcEIsTUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixJQUFyQixDQUFiOztBQUVBLE1BQU0sVUFBVSxHQUFHLFNBQWIsVUFBYSxHQUFNO0FBQ3ZCLFFBQU0sV0FBVyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBSixJQUFrQixLQUFyQixHQUE2QixHQUFHLENBQUMsVUFBSixJQUFrQixLQUEzRTs7QUFDQSxRQUFJLFdBQUosRUFBaUI7QUFDZixVQUFJLENBQUMsY0FBYyxDQUFDLFNBQWYsQ0FBeUIsUUFBekIsQ0FBa0Msb0JBQWxDLENBQUwsRUFBOEQ7QUFDNUQsUUFBQSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixJQUFyQixDQUFUO0FBQ0Q7QUFDRixLQUpELE1BSU8sSUFBSSxjQUFjLENBQUMsU0FBZixDQUF5QixRQUF6QixDQUFrQyxvQkFBbEMsQ0FBSixFQUE2RDtBQUNsRSxNQUFBLE1BQU0sQ0FBQyxPQUFQO0FBQ0Q7QUFDRixHQVREOztBQVdBLEdBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBMkIsVUFBQyxHQUFEO0FBQUEsV0FDekIsR0FBRyxDQUFDLGdCQUFKLENBQXFCLEdBQXJCLEVBQTBCLFVBQTFCLEVBQXNDLEtBQXRDLENBRHlCO0FBQUEsR0FBM0I7QUFHRDs7QUFFRCxzQkFBc0IsQ0FBQyxpQkFBRCxFQUFvQixLQUFwQixFQUEyQjtBQUMvQyxFQUFBLFlBQVksRUFBRSxFQURpQztBQUUvQyxFQUFBLEtBQUssRUFBRSxHQUZ3QztBQUcvQyxFQUFBLFVBQVUsRUFBRSxJQUhtQztBQUsvQyxFQUFBLFVBQVUsRUFBRTtBQUNWLElBQUEsTUFBTSxFQUFFLHFCQURFO0FBRVYsSUFBQSxNQUFNLEVBQUU7QUFGRTtBQUxtQyxDQUEzQixDQUF0QjtBQVdBOztBQUVBLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixZQUExQixDQUFyQjtBQUVBLFlBQVksQ0FBQyxPQUFiLENBQXFCLFVBQVMsTUFBVCxFQUFnQjtBQUNuQyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBUCxDQUFxQixXQUFyQixDQUFoQjtBQUNBLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFQLENBQXFCLFlBQXJCLENBQWpCOztBQUVBLE1BQUcsT0FBSCxFQUFXO0FBQ1QsSUFBQSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBVTtBQUMxQyxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLGVBQXJCO0FBQ0QsS0FGRDtBQUlBLElBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQVU7QUFDM0MsTUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QjtBQUNELEtBRkQ7QUFHRDtBQUNGLENBYkQ7QUFlQSxJQUFJLEdBQUosR0FBVSxJQUFWO0FBRUE7O0FBRUEsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCO0FBQ3RCLEVBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxVQUFBLE1BQU0sRUFBSTtBQUN0QixRQUFJLE1BQU0sQ0FBQyxjQUFYLEVBQTJCO0FBQ3pCLE1BQUEsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLGNBQTVCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBQ0QsSUFBSSxPQUFPLEdBQUc7QUFBRSxFQUFBLFNBQVMsRUFBRSxDQUFDLEdBQUQ7QUFBYixDQUFkO0FBQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBSixDQUF5QixPQUF6QixFQUFrQyxPQUFsQyxDQUFmO0FBQ0EsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLG9CQUExQixDQUFmOzsyQ0FDZ0IsUTs7OztBQUFoQixzREFBMEI7QUFBQSxRQUFqQixHQUFpQjtBQUN4QixJQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLEdBQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFFQSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsWUFBekMsQ0FBc0QsY0FBdEQsQ0FBYjtBQUFBLElBQ0ksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULHdCQUF1QyxNQUF2QyxPQURkOztBQUdBLElBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFSLENBQXFCLGFBQXJCLENBQWIsRUFBa0Q7QUFDOUMsRUFBQSxPQUFPLENBQUMsU0FBUixDQUFrQixHQUFsQixDQUFzQixhQUF0QjtBQUNIO0FBRUQ7OztBQUNBLGVBQWU7O0FBRWYsU0FBUyxlQUFULEdBQTJCO0FBQ3pCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBRUEsTUFBSSxDQUFDLFFBQUwsRUFBZTtBQUVmLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFFQSxNQUFHLENBQUMsSUFBSixFQUFVO0FBRVYsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBeEI7QUFDQSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLE1BQU0sV0FBVyxHQUFHLHlDQUFwQjtBQUNBLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLFlBQW5CLENBQXZCO0FBQ0EsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBdEI7QUFDQSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixRQUFuQixDQUFuQjtBQUNBLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLFVBQW5CLENBQXJCO0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixpQkFBbkIsQ0FBekI7QUFDQSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixnQkFBbkIsQ0FBeEI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixhQUFuQixDQUFyQjtBQUNBLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQXJCO0FBQ0EsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBaEI7QUFDQSxNQUFJLFdBQVcsR0FBRyxLQUFsQjtBQUVBLEVBQUEsSUFBSSxDQUFDLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQUMsQ0FBRCxFQUFPO0FBQ3JDLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxJQUFBLFlBQVksQ0FBQyxnQkFBRCxFQUFtQixjQUFjLENBQUMsS0FBbEMsQ0FBWjtBQUNBLElBQUEsWUFBWSxDQUFDLGVBQUQsRUFBa0IsYUFBYSxDQUFDLEtBQWhDLENBQVo7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFELEVBQWUsVUFBVSxDQUFDLEtBQTFCLENBQVo7QUFFQSxRQUFHLENBQUMsV0FBSixFQUFpQjtBQUVqQixJQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBRUEsUUFBTSxPQUFPLEdBQUc7QUFDZCxNQUFBLFNBQVMsRUFBRSxjQUFjLENBQUMsS0FEWjtBQUVkLE1BQUEsUUFBUSxFQUFFLGFBQWEsQ0FBQyxLQUZWO0FBR2QsTUFBQSxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBSEo7QUFJZCxNQUFBLE9BQU8sRUFBRSxZQUFZLENBQUM7QUFKUixLQUFoQjtBQU9BLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsUUFBekI7QUFFQSxJQUFBLEtBQUssQ0FBQyw2QkFBRCxFQUEwQjtBQUM3QixNQUFBLE1BQU0sRUFBRSxNQURxQjtBQUU3QixNQUFBLE9BQU8sRUFBRTtBQUNQLFFBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsd0JBQWdCO0FBRlQsT0FGb0I7QUFNN0IsTUFBQSxRQUFRLEVBQUUsUUFObUI7QUFPN0IsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO0FBUHVCLEtBQTFCLENBQUwsQ0FTRyxJQVRILENBU1EsVUFBQyxHQUFELEVBQVM7QUFDYixVQUFJLEdBQUcsQ0FBQyxFQUFSLEVBQVk7QUFDVixRQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixRQUE5QjtBQUNBLFFBQUEsV0FBVyxDQUFDLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDQSxRQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0EsUUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixXQUF2QjtBQUNELE9BTEQsTUFLTztBQUNMLFFBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDRDtBQUNGLEtBbEJILEVBbUJHLEtBbkJILENBbUJTLFVBQUMsS0FBRCxFQUFXO0FBQ2hCLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEtBQXZCO0FBQ0EsTUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjtBQUNELEtBdEJILEVBdUJHLE9BdkJILENBdUJXLFlBQU07QUFDYixNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0QsS0F6Qkg7QUEyQkQsR0E5Q0Q7QUFnREEsRUFBQSxjQUFjLENBQUMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQyxLQUFELEVBQVc7QUFDbEQsSUFBQSxZQUFZLENBQUMsZ0JBQUQsRUFBbUIsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFoQyxDQUFaO0FBQ0QsR0FGRDtBQUdBLEVBQUEsYUFBYSxDQUFDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQUMsS0FBRCxFQUFXO0FBQ2pELElBQUEsWUFBWSxDQUFDLGVBQUQsRUFBa0IsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUEvQixDQUFaO0FBQ0QsR0FGRDtBQUdBLEVBQUEsVUFBVSxDQUFDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUMsS0FBRCxFQUFXO0FBQzlDLElBQUEsWUFBWSxDQUFDLFlBQUQsRUFBZSxLQUFLLENBQUMsTUFBTixDQUFhLEtBQTVCLENBQVo7QUFDRCxHQUZEOztBQUlBLFdBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxZQUFRLEtBQVI7QUFDRSxXQUFLLGdCQUFMO0FBQ0UsWUFBRyxLQUFLLEdBQUcsQ0FBWCxFQUFjO0FBQ1osVUFBQSxnQkFBZ0IsQ0FBQyxTQUFqQixDQUEyQixHQUEzQixDQUErQixRQUEvQjtBQUNBLFVBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQTtBQUNEOztBQUNELFFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQSxRQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLE1BQTNCLENBQWtDLFFBQWxDO0FBQ0E7O0FBQ0YsV0FBSyxlQUFMO0FBQ0UsWUFBRyxLQUFLLEdBQUcsQ0FBWCxFQUFjO0FBQ1osVUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsUUFBOUI7QUFDQSxVQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0E7QUFDRDs7QUFDRCxRQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0EsUUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsTUFBMUIsQ0FBaUMsUUFBakM7QUFDQTs7QUFDRixXQUFLLFlBQUw7QUFDRSxZQUFHLENBQUMsV0FBVyxDQUFDLElBQVosQ0FBaUIsS0FBakIsQ0FBSixFQUE2QjtBQUMzQixVQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0EsVUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNBO0FBQ0Q7O0FBQ0QsUUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNBLFFBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsTUFBdkIsQ0FBOEIsUUFBOUI7QUFDQTtBQTNCSjtBQTZCRDtBQUNGO0FBRUQ7OztBQUNBLGNBQWM7O0FBRWQsU0FBUyxjQUFULEdBQTBCO0FBQ3hCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFlBQXZCLENBQWpCO0FBRUEsTUFBSSxDQUFDLFFBQUwsRUFBZTtBQUVmLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBQWI7QUFFQSxNQUFHLENBQUMsSUFBSixFQUFVO0FBRVYsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBeEI7QUFDQSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLFlBQW5CLENBQXZCO0FBQ0EsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBdEI7QUFDQSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixRQUFuQixDQUFuQjtBQUNBLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFMLENBQW1CLFFBQW5CLENBQW5CO0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixpQkFBbkIsQ0FBekI7QUFDQSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixnQkFBbkIsQ0FBeEI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBTCxDQUFtQixhQUFuQixDQUFyQjtBQUNBLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGNBQXZCLENBQXJCO0FBQ0EsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBaEI7QUFDQSxNQUFJLFdBQVcsR0FBRyxLQUFsQjtBQUVBLEVBQUEsSUFBSSxDQUFDLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQUMsQ0FBRCxFQUFPO0FBQ3JDLElBQUEsQ0FBQyxDQUFDLGNBQUY7QUFDQSxJQUFBLFlBQVksQ0FBQyxnQkFBRCxFQUFtQixjQUFjLENBQUMsS0FBbEMsQ0FBWjtBQUNBLElBQUEsWUFBWSxDQUFDLGVBQUQsRUFBa0IsYUFBYSxDQUFDLEtBQWhDLENBQVo7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFELEVBQWUsVUFBVSxDQUFDLEtBQTFCLENBQVo7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFELEVBQWUsVUFBVSxDQUFDLEtBQTFCLENBQVo7QUFFQSxRQUFHLENBQUMsV0FBSixFQUFpQjtBQUVqQixJQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLE1BQXZCLENBQThCLFFBQTlCO0FBRUEsUUFBTSxPQUFPLEdBQUc7QUFDZCxNQUFBLFNBQVMsRUFBRSxjQUFjLENBQUMsS0FEWjtBQUVkLE1BQUEsUUFBUSxFQUFFLGFBQWEsQ0FBQyxLQUZWO0FBR2QsTUFBQSxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBSEo7QUFJZCxNQUFBLFdBQVcsRUFBRSxVQUFVLENBQUM7QUFKVixLQUFoQjtBQU9BLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsUUFBekI7QUFFQSxJQUFBLEtBQUssQ0FBQyw0QkFBRCxFQUF5QjtBQUM1QixNQUFBLE1BQU0sRUFBRSxNQURvQjtBQUU1QixNQUFBLE9BQU8sRUFBRTtBQUNQLFFBQUEsTUFBTSxFQUFFLGtCQUREO0FBRVAsd0JBQWdCO0FBRlQsT0FGbUI7QUFNNUIsTUFBQSxRQUFRLEVBQUUsUUFOa0I7QUFPNUIsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO0FBUHNCLEtBQXpCLENBQUwsQ0FTRyxJQVRILENBU1EsVUFBQyxHQUFELEVBQVM7QUFDYixVQUFJLEdBQUcsQ0FBQyxFQUFSLEVBQVk7QUFDVixRQUFBLGVBQWUsQ0FBQyxTQUFoQixDQUEwQixHQUExQixDQUE4QixRQUE5QjtBQUNBLFFBQUEsV0FBVyxDQUFDLFNBQVosQ0FBc0IsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDQSxRQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0EsUUFBQSxRQUFRLENBQUMsU0FBVCxDQUFtQixHQUFuQixDQUF1QixXQUF2QjtBQUNELE9BTEQsTUFLTztBQUNMLFFBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDRDtBQUNGLEtBbEJILEVBbUJHLEtBbkJILENBbUJTLFVBQUMsS0FBRCxFQUFXO0FBQ2hCLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEtBQXZCO0FBQ0EsTUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixHQUF2QixDQUEyQixRQUEzQjtBQUNELEtBdEJILEVBdUJHLE9BdkJILENBdUJXLFlBQU07QUFDYixNQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0QsS0F6Qkg7QUEyQkQsR0EvQ0Q7QUFpREEsRUFBQSxjQUFjLENBQUMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQyxLQUFELEVBQVc7QUFDbEQsSUFBQSxZQUFZLENBQUMsZ0JBQUQsRUFBbUIsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUFoQyxDQUFaO0FBQ0QsR0FGRDtBQUdBLEVBQUEsYUFBYSxDQUFDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQUMsS0FBRCxFQUFXO0FBQ2pELElBQUEsWUFBWSxDQUFDLGVBQUQsRUFBa0IsS0FBSyxDQUFDLE1BQU4sQ0FBYSxLQUEvQixDQUFaO0FBQ0QsR0FGRDtBQUdBLEVBQUEsVUFBVSxDQUFDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQUMsS0FBRCxFQUFXO0FBQzlDLElBQUEsWUFBWSxDQUFDLFlBQUQsRUFBZSxLQUFLLENBQUMsTUFBTixDQUFhLEtBQTVCLENBQVo7QUFDRCxHQUZEOztBQUlBLFdBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixLQUE3QixFQUFvQztBQUNsQyxZQUFRLEtBQVI7QUFDRSxXQUFLLGdCQUFMO0FBQ0UsWUFBRyxLQUFLLEdBQUcsQ0FBWCxFQUFjO0FBQ1osVUFBQSxnQkFBZ0IsQ0FBQyxTQUFqQixDQUEyQixHQUEzQixDQUErQixRQUEvQjtBQUNBLFVBQUEsV0FBVyxHQUFHLEtBQWQ7QUFDQTtBQUNEOztBQUNELFFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDQSxRQUFBLGdCQUFnQixDQUFDLFNBQWpCLENBQTJCLE1BQTNCLENBQWtDLFFBQWxDO0FBQ0E7O0FBQ0YsV0FBSyxlQUFMO0FBQ0UsWUFBRyxLQUFLLEdBQUcsQ0FBWCxFQUFjO0FBQ1osVUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsUUFBOUI7QUFDQSxVQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0E7QUFDRDs7QUFDRCxRQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0EsUUFBQSxlQUFlLENBQUMsU0FBaEIsQ0FBMEIsTUFBMUIsQ0FBaUMsUUFBakM7QUFDQTs7QUFDRixXQUFLLFlBQUw7QUFDRSxZQUFNLFVBQVUsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEVBQXJCLENBQUgsR0FBOEIsRUFBdEQ7QUFDQSxZQUFNLGlCQUFpQixHQUFHLDhCQUFnQixVQUFoQixDQUExQjtBQUNBLFFBQUEsVUFBVSxDQUFDLEtBQVgsR0FBbUIsaUJBQW5COztBQUNBLFlBQUcsQ0FBQyxtQkFBWSxJQUFaLENBQWlCLGlCQUFqQixDQUFKLEVBQXlDO0FBQ3ZDLFVBQUEsWUFBWSxDQUFDLFNBQWIsQ0FBdUIsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDQSxVQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0E7QUFDRDs7QUFDRCxRQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0EsUUFBQSxZQUFZLENBQUMsU0FBYixDQUF1QixNQUF2QixDQUE4QixRQUE5QjtBQUNBO0FBOUJKO0FBZ0NEO0FBQ0Y7QUFFRDs7O0FBQ0EsZUFBZTs7QUFFZixTQUFTLGVBQVQsR0FBMkI7QUFDekIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFlBQTFCLENBQWpCO0FBRUEsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQyxLQUFELEVBQVc7QUFDNUMsUUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQTVCOztBQUVBLFFBQUksYUFBYSxDQUFDLFNBQWQsQ0FBd0IsUUFBeEIsQ0FBaUMsUUFBakMsQ0FBSixFQUFnRDtBQUM5QyxNQUFBLGNBQWM7QUFDZCxNQUFBLGFBQWEsQ0FBQyxPQUFkLENBQXNCLFlBQXRCLEVBQW9DLFNBQXBDLENBQThDLE1BQTlDLENBQXFELGtCQUFyRDtBQUNELEtBSEQsTUFHTztBQUNMLE1BQUEsY0FBYztBQUNmOztBQUFBO0FBQ0YsR0FURDs7QUFXQSxXQUFTLGNBQVQsR0FBMEI7QUFDeEIsSUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFDLEVBQUQsRUFBUTtBQUN2QixNQUFBLEVBQUUsQ0FBQyxTQUFILENBQWEsTUFBYixDQUFvQixrQkFBcEI7QUFDRCxLQUZEO0FBR0Q7QUFDRjtBQUVEOzs7QUFDQSxjQUFjOztBQUVkLFNBQVMsY0FBVCxHQUEwQjtBQUN4QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixXQUF2QixDQUFmO0FBRUEsTUFBRyxDQUFDLE1BQUosRUFBWTtBQUVaLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFNBQTFDO0FBRUEsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsWUFBTTtBQUN4QyxRQUFHLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLGFBQXBCLEVBQW1DO0FBQ2pDLE1BQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsR0FBakIsQ0FBcUIsT0FBckI7QUFDRCxLQUZELE1BRU87QUFDTCxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLE1BQWpCLENBQXdCLE9BQXhCO0FBQ0Q7O0FBQUE7QUFDRixHQU5EO0FBT0Q7Ozs7Ozs7Ozs7QUN2ZEQ7O0FBQ0E7Ozs7QUFFTyxJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVksQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixNQUFoQixFQUEyQjtBQUNsRCxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUosRUFBVjtBQUNBLEVBQUEsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxDQUFDLENBQUMsT0FBRixLQUFjLE1BQU0sR0FBRyxFQUFULEdBQWMsRUFBZCxHQUFtQixFQUFuQixHQUF3QixJQUFoRDtBQUNBLE1BQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLFdBQUYsRUFBM0I7QUFDQSxFQUFBLFFBQVEsQ0FBQyxNQUFULEdBQWtCLEtBQUssR0FBRyxHQUFSLEdBQWMsTUFBZCxHQUF1QixHQUF2QixHQUE2QixPQUE3QixHQUF1QyxTQUF6RDtBQUNELENBTE07Ozs7QUFPQSxJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVksQ0FBQyxLQUFELEVBQVc7QUFDbEMsTUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQW5CO0FBQ0EsTUFBSSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQVYsQ0FBdEM7QUFDQSxNQUFJLEVBQUUsR0FBRyxhQUFhLENBQUMsS0FBZCxDQUFvQixHQUFwQixDQUFUOztBQUNBLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQXZCLEVBQStCLENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsUUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUQsQ0FBVjs7QUFDQSxXQUFPLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBVCxLQUFlLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFGLENBQVksQ0FBWixDQUFKO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDLENBQUMsT0FBRixDQUFVLElBQVYsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsYUFBTyxDQUFDLENBQUMsU0FBRixDQUFZLElBQUksQ0FBQyxNQUFqQixFQUF5QixDQUFDLENBQUMsTUFBM0IsQ0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxFQUFQO0FBQ0QsQ0FkTTs7OztBQWdCQSxJQUFNLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBQyxPQUFELEVBQWE7QUFDdEMsRUFBQSxTQUFTLENBQUMsWUFBRCxFQUFPLE9BQVAsQ0FBVCxDQURzQyxDQUV0Qzs7QUFDQSxTQUFPLGlCQUFRLGNBQVIsQ0FBdUIsT0FBdkIsQ0FBUDtBQUNELENBSk07Ozs7QUFNQSxJQUFNLGNBQWMsR0FBRyxTQUFqQixjQUFpQixHQUFNO0FBQ2xDLE1BQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFELENBQTVCOztBQUVBLE1BQUksQ0FBQyxZQUFMLEVBQW1CO0FBQ2pCLElBQUEsU0FBUyxDQUFDLFlBQUQsRUFBTyxvQkFBWSxFQUFuQixDQUFUO0FBQ0EsSUFBQSxZQUFZLEdBQUcsb0JBQVksRUFBM0I7QUFDRDs7QUFFRCxTQUFPLFlBQVA7QUFDRCxDQVRNOzs7Ozs7Ozs7Ozs7QUNoQ0EsSUFBTSxlQUFlLEdBQUcsU0FBbEIsZUFBa0IsQ0FBQyxXQUFELEVBQWlCO0FBQzlDLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUEzQjs7QUFFQSxNQUFJLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ2Qsc0JBQVcsV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBWCxlQUF1QyxXQUFXLENBQUMsS0FBWixDQUNyQyxDQURxQyxFQUVyQyxDQUZxQyxDQUF2QyxjQUdLLFdBQVcsQ0FBQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBSEwsY0FHZ0MsV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsRUFBckIsQ0FIaEM7QUFJRDs7QUFFRCxNQUFJLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ2Qsc0JBQVcsV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBWCxlQUF1QyxXQUFXLENBQUMsS0FBWixDQUNyQyxDQURxQyxFQUVyQyxDQUZxQyxDQUF2QyxjQUdLLFdBQVcsQ0FBQyxLQUFaLENBQWtCLENBQWxCLENBSEw7QUFJRDs7QUFFRCxNQUFJLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0FBQ2Qsc0JBQVcsV0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBWCxlQUF1QyxXQUFXLENBQUMsS0FBWixDQUFrQixDQUFsQixDQUF2QztBQUNEOztBQUVELFNBQU8sV0FBUDtBQUNELENBdEJNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIGUsdD0oZT1yZXF1aXJlKFwidm9pZC1lbGVtZW50c1wiKSkmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImRlZmF1bHRcImluIGU/ZS5kZWZhdWx0OmUsbj0vXFxzKFteJ1wiL1xccz48XSs/KVtcXHMvPl18KFteXFxzPV0rKT1cXHM/KFwiLio/XCJ8Jy4qPycpL2c7ZnVuY3Rpb24gcihlKXt2YXIgcj17dHlwZTpcInRhZ1wiLG5hbWU6XCJcIix2b2lkRWxlbWVudDohMSxhdHRyczp7fSxjaGlsZHJlbjpbXX0saT1lLm1hdGNoKC88XFwvPyhbXlxcc10rPylbL1xccz5dLyk7aWYoaSYmKHIubmFtZT1pWzFdLCh0W2lbMV1dfHxcIi9cIj09PWUuY2hhckF0KGUubGVuZ3RoLTIpKSYmKHIudm9pZEVsZW1lbnQ9ITApLHIubmFtZS5zdGFydHNXaXRoKFwiIS0tXCIpKSl7dmFyIHM9ZS5pbmRleE9mKFwiLS1cXHgzZVwiKTtyZXR1cm57dHlwZTpcImNvbW1lbnRcIixjb21tZW50Oi0xIT09cz9lLnNsaWNlKDQscyk6XCJcIn19Zm9yKHZhciBjPW5ldyBSZWdFeHAobiksYT1udWxsO251bGwhPT0oYT1jLmV4ZWMoZSkpOylpZihhWzBdLnRyaW0oKSlpZihhWzFdKXt2YXIgbz1hWzFdLnRyaW0oKSx1PVtvLFwiXCJdO28uaW5kZXhPZihcIj1cIik+LTEmJih1PW8uc3BsaXQoXCI9XCIpKSxyLmF0dHJzW3VbMF1dPXVbMV0sYy5sYXN0SW5kZXgtLX1lbHNlIGFbMl0mJihyLmF0dHJzW2FbMl1dPWFbM10udHJpbSgpLnN1YnN0cmluZygxLGFbM10ubGVuZ3RoLTEpKTtyZXR1cm4gcn12YXIgaT0vPFthLXpBLVowLTlcXC1cXCFcXC9dKD86XCJbXlwiXSpcInwnW14nXSonfFteJ1wiPl0pKj4vZyxzPS9eXFxzKiQvLGM9T2JqZWN0LmNyZWF0ZShudWxsKTtmdW5jdGlvbiBhKGUsdCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwidGV4dFwiOnJldHVybiBlK3QuY29udGVudDtjYXNlXCJ0YWdcIjpyZXR1cm4gZSs9XCI8XCIrdC5uYW1lKyh0LmF0dHJzP2Z1bmN0aW9uKGUpe3ZhciB0PVtdO2Zvcih2YXIgbiBpbiBlKXQucHVzaChuKyc9XCInK2Vbbl0rJ1wiJyk7cmV0dXJuIHQubGVuZ3RoP1wiIFwiK3Quam9pbihcIiBcIik6XCJcIn0odC5hdHRycyk6XCJcIikrKHQudm9pZEVsZW1lbnQ/XCIvPlwiOlwiPlwiKSx0LnZvaWRFbGVtZW50P2U6ZSt0LmNoaWxkcmVuLnJlZHVjZShhLFwiXCIpK1wiPC9cIit0Lm5hbWUrXCI+XCI7Y2FzZVwiY29tbWVudFwiOnJldHVybiBlK1wiXFx4M2MhLS1cIit0LmNvbW1lbnQrXCItLVxceDNlXCJ9fW1vZHVsZS5leHBvcnRzPXtwYXJzZTpmdW5jdGlvbihlLHQpe3R8fCh0PXt9KSx0LmNvbXBvbmVudHN8fCh0LmNvbXBvbmVudHM9Yyk7dmFyIG4sYT1bXSxvPVtdLHU9LTEsbD0hMTtpZigwIT09ZS5pbmRleE9mKFwiPFwiKSl7dmFyIG09ZS5pbmRleE9mKFwiPFwiKTthLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDotMT09PW0/ZTplLnN1YnN0cmluZygwLG0pfSl9cmV0dXJuIGUucmVwbGFjZShpLGZ1bmN0aW9uKGksYyl7aWYobCl7aWYoaSE9PVwiPC9cIituLm5hbWUrXCI+XCIpcmV0dXJuO2w9ITF9dmFyIG0sZD1cIi9cIiE9PWkuY2hhckF0KDEpLGY9aS5zdGFydHNXaXRoKFwiXFx4M2MhLS1cIiksaD1jK2kubGVuZ3RoLHA9ZS5jaGFyQXQoaCk7aWYoZil7dmFyIHY9cihpKTtyZXR1cm4gdTwwPyhhLnB1c2godiksYSk6KChtPW9bdV0pLmNoaWxkcmVuLnB1c2godiksYSl9aWYoZCYmKHUrKyxcInRhZ1wiPT09KG49cihpKSkudHlwZSYmdC5jb21wb25lbnRzW24ubmFtZV0mJihuLnR5cGU9XCJjb21wb25lbnRcIixsPSEwKSxuLnZvaWRFbGVtZW50fHxsfHwhcHx8XCI8XCI9PT1wfHxuLmNoaWxkcmVuLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDplLnNsaWNlKGgsZS5pbmRleE9mKFwiPFwiLGgpKX0pLDA9PT11JiZhLnB1c2gobiksKG09b1t1LTFdKSYmbS5jaGlsZHJlbi5wdXNoKG4pLG9bdV09biksKCFkfHxuLnZvaWRFbGVtZW50KSYmKHU+LTEmJihuLnZvaWRFbGVtZW50fHxuLm5hbWU9PT1pLnNsaWNlKDIsLTEpKSYmKHUtLSxuPS0xPT09dT9hOm9bdV0pLCFsJiZcIjxcIiE9PXAmJnApKXttPS0xPT09dT9hOm9bdV0uY2hpbGRyZW47dmFyIHg9ZS5pbmRleE9mKFwiPFwiLGgpLGc9ZS5zbGljZShoLC0xPT09eD92b2lkIDA6eCk7cy50ZXN0KGcpJiYoZz1cIiBcIiksKHg+LTEmJnUrbS5sZW5ndGg+PTB8fFwiIFwiIT09ZykmJm0ucHVzaCh7dHlwZTpcInRleHRcIixjb250ZW50Omd9KX19KSxhfSxzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrYShcIlwiLHQpfSxcIlwiKX19O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbC1wYXJzZS1zdHJpbmdpZnkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YnKTtcbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG52YXIgX2NyZWF0ZUNsYXNzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xudmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZCcpO1xudmFyIF9pbmhlcml0cyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YnKTtcbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG52YXIgX3RvQXJyYXkgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQXJyYXknKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBfdHlwZW9mX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfdHlwZW9mKTtcbnZhciBfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF9jbGFzc0NhbGxDaGVjayk7XG52YXIgX2NyZWF0ZUNsYXNzX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdExlZ2FjeShfY3JlYXRlQ2xhc3MpO1xudmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQpO1xudmFyIF9pbmhlcml0c19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX2luaGVyaXRzKTtcbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybl9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4pO1xudmFyIF9nZXRQcm90b3R5cGVPZl9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koX2dldFByb3RvdHlwZU9mKTtcbnZhciBfZGVmaW5lUHJvcGVydHlfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF9kZWZpbmVQcm9wZXJ0eSk7XG52YXIgX3RvQXJyYXlfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF90b0FycmF5KTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBjb25zb2xlTG9nZ2VyID0ge1xuICB0eXBlOiAnbG9nZ2VyJyxcbiAgbG9nOiBmdW5jdGlvbiBsb2coYXJncykge1xuICAgIHRoaXMub3V0cHV0KCdsb2cnLCBhcmdzKTtcbiAgfSxcbiAgd2FybjogZnVuY3Rpb24gd2FybihhcmdzKSB7XG4gICAgdGhpcy5vdXRwdXQoJ3dhcm4nLCBhcmdzKTtcbiAgfSxcbiAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKGFyZ3MpIHtcbiAgICB0aGlzLm91dHB1dCgnZXJyb3InLCBhcmdzKTtcbiAgfSxcbiAgb3V0cHV0OiBmdW5jdGlvbiBvdXRwdXQodHlwZSwgYXJncykge1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGVbdHlwZV0pIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gIH1cbn07XG5cbnZhciBMb2dnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIExvZ2dlcihjb25jcmV0ZUxvZ2dlcikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIExvZ2dlcik7XG5cbiAgICB0aGlzLmluaXQoY29uY3JldGVMb2dnZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oTG9nZ2VyLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoY29uY3JldGVMb2dnZXIpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHRoaXMucHJlZml4ID0gb3B0aW9ucy5wcmVmaXggfHwgJ2kxOG5leHQ6JztcbiAgICAgIHRoaXMubG9nZ2VyID0gY29uY3JldGVMb2dnZXIgfHwgY29uc29sZUxvZ2dlcjtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLmRlYnVnID0gb3B0aW9ucy5kZWJ1ZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0RGVidWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVidWcoYm9vbCkge1xuICAgICAgdGhpcy5kZWJ1ZyA9IGJvb2w7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnbG9nJywgJycsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3YXJuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mb3J3YXJkKGFyZ3MsICd3YXJuJywgJycsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZvcndhcmQoYXJncywgJ2Vycm9yJywgJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXByZWNhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVwcmVjYXRlKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZm9yd2FyZChhcmdzLCAnd2FybicsICdXQVJOSU5HIERFUFJFQ0FURUQ6ICcsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3J3YXJkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcndhcmQoYXJncywgbHZsLCBwcmVmaXgsIGRlYnVnT25seSkge1xuICAgICAgaWYgKGRlYnVnT25seSAmJiAhdGhpcy5kZWJ1ZykgcmV0dXJuIG51bGw7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSBhcmdzWzBdID0gXCJcIi5jb25jYXQocHJlZml4KS5jb25jYXQodGhpcy5wcmVmaXgsIFwiIFwiKS5jb25jYXQoYXJnc1swXSk7XG4gICAgICByZXR1cm4gdGhpcy5sb2dnZXJbbHZsXShhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY3JlYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZShtb2R1bGVOYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IExvZ2dlcih0aGlzLmxvZ2dlciwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB7XG4gICAgICAgIHByZWZpeDogXCJcIi5jb25jYXQodGhpcy5wcmVmaXgsIFwiOlwiKS5jb25jYXQobW9kdWxlTmFtZSwgXCI6XCIpXG4gICAgICB9KSwgdGhpcy5vcHRpb25zKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExvZ2dlcjtcbn0oKTtcblxudmFyIGJhc2VMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG5cbnZhciBFdmVudEVtaXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCBFdmVudEVtaXR0ZXIpO1xuXG4gICAgdGhpcy5vYnNlcnZlcnMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKEV2ZW50RW1pdHRlciwgW3tcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnRzLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzW2V2ZW50XSA9IF90aGlzLm9ic2VydmVyc1tldmVudF0gfHwgW107XG5cbiAgICAgICAgX3RoaXMub2JzZXJ2ZXJzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAoIXRoaXMub2JzZXJ2ZXJzW2V2ZW50XSkgcmV0dXJuO1xuXG4gICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm9ic2VydmVyc1tldmVudF07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vYnNlcnZlcnNbZXZlbnRdID0gdGhpcy5vYnNlcnZlcnNbZXZlbnRdLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vYnNlcnZlcnNbZXZlbnRdKSB7XG4gICAgICAgIHZhciBjbG9uZWQgPSBbXS5jb25jYXQodGhpcy5vYnNlcnZlcnNbZXZlbnRdKTtcbiAgICAgICAgY2xvbmVkLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9ic2VydmVyc1snKiddKSB7XG4gICAgICAgIHZhciBfY2xvbmVkID0gW10uY29uY2F0KHRoaXMub2JzZXJ2ZXJzWycqJ10pO1xuXG4gICAgICAgIF9jbG9uZWQuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICBvYnNlcnZlci5hcHBseShvYnNlcnZlciwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRFbWl0dGVyO1xufSgpO1xuXG5mdW5jdGlvbiBkZWZlcigpIHtcbiAgdmFyIHJlcztcbiAgdmFyIHJlajtcbiAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmVzID0gcmVzb2x2ZTtcbiAgICByZWogPSByZWplY3Q7XG4gIH0pO1xuICBwcm9taXNlLnJlc29sdmUgPSByZXM7XG4gIHByb21pc2UucmVqZWN0ID0gcmVqO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIG1ha2VTdHJpbmcob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkgcmV0dXJuICcnO1xuICByZXR1cm4gJycgKyBvYmplY3Q7XG59XG5mdW5jdGlvbiBjb3B5KGEsIHMsIHQpIHtcbiAgYS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgaWYgKHNbbV0pIHRbbV0gPSBzW21dO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdE9mUGF0aChvYmplY3QsIHBhdGgsIEVtcHR5KSB7XG4gIGZ1bmN0aW9uIGNsZWFuS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgJiYga2V5LmluZGV4T2YoJyMjIycpID4gLTEgPyBrZXkucmVwbGFjZSgvIyMjL2csICcuJykgOiBrZXk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5Ob3RUcmF2ZXJzZURlZXBlcigpIHtcbiAgICByZXR1cm4gIW9iamVjdCB8fCB0eXBlb2Ygb2JqZWN0ID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHZhciBzdGFjayA9IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJyA/IFtdLmNvbmNhdChwYXRoKSA6IHBhdGguc3BsaXQoJy4nKTtcblxuICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMSkge1xuICAgIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcigpKSByZXR1cm4ge307XG4gICAgdmFyIGtleSA9IGNsZWFuS2V5KHN0YWNrLnNoaWZ0KCkpO1xuICAgIGlmICghb2JqZWN0W2tleV0gJiYgRW1wdHkpIG9iamVjdFtrZXldID0gbmV3IEVtcHR5KCk7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdCA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIGlmIChjYW5Ob3RUcmF2ZXJzZURlZXBlcigpKSByZXR1cm4ge307XG4gIHJldHVybiB7XG4gICAgb2JqOiBvYmplY3QsXG4gICAgazogY2xlYW5LZXkoc3RhY2suc2hpZnQoKSlcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0UGF0aChvYmplY3QsIHBhdGgsIG5ld1ZhbHVlKSB7XG4gIHZhciBfZ2V0TGFzdE9mUGF0aCA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoLCBPYmplY3QpLFxuICAgICAgb2JqID0gX2dldExhc3RPZlBhdGgub2JqLFxuICAgICAgayA9IF9nZXRMYXN0T2ZQYXRoLms7XG5cbiAgb2JqW2tdID0gbmV3VmFsdWU7XG59XG5mdW5jdGlvbiBwdXNoUGF0aChvYmplY3QsIHBhdGgsIG5ld1ZhbHVlLCBjb25jYXQpIHtcbiAgdmFyIF9nZXRMYXN0T2ZQYXRoMiA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoLCBPYmplY3QpLFxuICAgICAgb2JqID0gX2dldExhc3RPZlBhdGgyLm9iaixcbiAgICAgIGsgPSBfZ2V0TGFzdE9mUGF0aDIuaztcblxuICBvYmpba10gPSBvYmpba10gfHwgW107XG4gIGlmIChjb25jYXQpIG9ialtrXSA9IG9ialtrXS5jb25jYXQobmV3VmFsdWUpO1xuICBpZiAoIWNvbmNhdCkgb2JqW2tdLnB1c2gobmV3VmFsdWUpO1xufVxuZnVuY3Rpb24gZ2V0UGF0aChvYmplY3QsIHBhdGgpIHtcbiAgdmFyIF9nZXRMYXN0T2ZQYXRoMyA9IGdldExhc3RPZlBhdGgob2JqZWN0LCBwYXRoKSxcbiAgICAgIG9iaiA9IF9nZXRMYXN0T2ZQYXRoMy5vYmosXG4gICAgICBrID0gX2dldExhc3RPZlBhdGgzLms7XG5cbiAgaWYgKCFvYmopIHJldHVybiB1bmRlZmluZWQ7XG4gIHJldHVybiBvYmpba107XG59XG5mdW5jdGlvbiBnZXRQYXRoV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0UGF0aChkYXRhLCBrZXkpO1xuXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGdldFBhdGgoZGVmYXVsdERhdGEsIGtleSk7XG59XG5mdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldCwgc291cmNlLCBvdmVyd3JpdGUpIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICBpZiAocHJvcCAhPT0gJ19fcHJvdG9fXycgJiYgcHJvcCAhPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgaWYgKHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W3Byb3BdID09PSAnc3RyaW5nJyB8fCB0YXJnZXRbcHJvcF0gaW5zdGFuY2VvZiBTdHJpbmcgfHwgdHlwZW9mIHNvdXJjZVtwcm9wXSA9PT0gJ3N0cmluZycgfHwgc291cmNlW3Byb3BdIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgaWYgKG92ZXJ3cml0ZSkgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0sIG92ZXJ3cml0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gcmVnZXhFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKTtcbn1cbnZhciBfZW50aXR5TWFwID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiMzOTsnLFxuICAnLyc6ICcmI3gyRjsnXG59O1xuZnVuY3Rpb24gZXNjYXBlKGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoL1smPD5cIidcXC9dL2csIGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gX2VudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxudmFyIGlzSUUxMCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRScpID4gLTE7XG52YXIgY2hhcnMgPSBbJyAnLCAnLCcsICc/JywgJyEnLCAnOyddO1xuZnVuY3Rpb24gbG9va3NMaWtlT2JqZWN0UGF0aChrZXksIG5zU2VwYXJhdG9yLCBrZXlTZXBhcmF0b3IpIHtcbiAgbnNTZXBhcmF0b3IgPSBuc1NlcGFyYXRvciB8fCAnJztcbiAga2V5U2VwYXJhdG9yID0ga2V5U2VwYXJhdG9yIHx8ICcnO1xuICB2YXIgcG9zc2libGVDaGFycyA9IGNoYXJzLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBuc1NlcGFyYXRvci5pbmRleE9mKGMpIDwgMCAmJiBrZXlTZXBhcmF0b3IuaW5kZXhPZihjKSA8IDA7XG4gIH0pO1xuICBpZiAocG9zc2libGVDaGFycy5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICB2YXIgciA9IG5ldyBSZWdFeHAoXCIoXCIuY29uY2F0KHBvc3NpYmxlQ2hhcnMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMgPT09ICc/JyA/ICdcXFxcPycgOiBjO1xuICB9KS5qb2luKCd8JyksIFwiKVwiKSk7XG4gIHZhciBtYXRjaGVkID0gIXIudGVzdChrZXkpO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHZhciBraSA9IGtleS5pbmRleE9mKGtleVNlcGFyYXRvcik7XG5cbiAgICBpZiAoa2kgPiAwICYmICFyLnRlc3Qoa2V5LnN1YnN0cmluZygwLCBraSkpKSB7XG4gICAgICBtYXRjaGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyQxKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQxKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7IHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHsgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mX19kZWZhdWx0WydkZWZhdWx0J10oRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZl9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybl9fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIGRlZXBGaW5kKG9iaiwgcGF0aCkge1xuICB2YXIga2V5U2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnLic7XG4gIGlmICghb2JqKSByZXR1cm4gdW5kZWZpbmVkO1xuICBpZiAob2JqW3BhdGhdKSByZXR1cm4gb2JqW3BhdGhdO1xuICB2YXIgcGF0aHMgPSBwYXRoLnNwbGl0KGtleVNlcGFyYXRvcik7XG4gIHZhciBjdXJyZW50ID0gb2JqO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoIWN1cnJlbnQpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGN1cnJlbnRbcGF0aHNbaV1dID09PSAnc3RyaW5nJyAmJiBpICsgMSA8IHBhdGhzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFtwYXRoc1tpXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGogPSAyO1xuICAgICAgdmFyIHAgPSBwYXRocy5zbGljZShpLCBpICsgaikuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgICAgdmFyIG1peCA9IGN1cnJlbnRbcF07XG5cbiAgICAgIHdoaWxlIChtaXggPT09IHVuZGVmaW5lZCAmJiBwYXRocy5sZW5ndGggPiBpICsgaikge1xuICAgICAgICBqKys7XG4gICAgICAgIHAgPSBwYXRocy5zbGljZShpLCBpICsgaikuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgICAgICBtaXggPSBjdXJyZW50W3BdO1xuICAgICAgfVxuXG4gICAgICBpZiAobWl4ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBpZiAobWl4ID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgaWYgKHBhdGguZW5kc1dpdGgocCkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtaXggPT09ICdzdHJpbmcnKSByZXR1cm4gbWl4O1xuICAgICAgICBpZiAocCAmJiB0eXBlb2YgbWl4W3BdID09PSAnc3RyaW5nJykgcmV0dXJuIG1peFtwXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGpvaW5lZFBhdGggPSBwYXRocy5zbGljZShpICsgaikuam9pbihrZXlTZXBhcmF0b3IpO1xuICAgICAgaWYgKGpvaW5lZFBhdGgpIHJldHVybiBkZWVwRmluZChtaXgsIGpvaW5lZFBhdGgsIGtleVNlcGFyYXRvcik7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGN1cnJlbnQgPSBjdXJyZW50W3BhdGhzW2ldXTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50O1xufVxuXG52YXIgUmVzb3VyY2VTdG9yZSA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0c19fZGVmYXVsdFsnZGVmYXVsdCddKFJlc291cmNlU3RvcmUsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUmVzb3VyY2VTdG9yZSk7XG5cbiAgZnVuY3Rpb24gUmVzb3VyY2VTdG9yZShkYXRhKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgIG5zOiBbJ3RyYW5zbGF0aW9uJ10sXG4gICAgICBkZWZhdWx0TlM6ICd0cmFuc2xhdGlvbidcbiAgICB9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgUmVzb3VyY2VTdG9yZSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKGlzSUUxMCkge1xuICAgICAgRXZlbnRFbWl0dGVyLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzKSk7XG4gICAgfVxuXG4gICAgX3RoaXMuZGF0YSA9IGRhdGEgfHwge307XG4gICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBpZiAoX3RoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgX3RoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuXG4gICAgaWYgKF90aGlzLm9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBfdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKFJlc291cmNlU3RvcmUsIFt7XG4gICAga2V5OiBcImFkZE5hbWVzcGFjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTmFtZXNwYWNlcyhucykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG5zKSA8IDApIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm5zLnB1c2gobnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVOYW1lc3BhY2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZXMobnMpIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMub3B0aW9ucy5ucy5pbmRleE9mKG5zKTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFJlc291cmNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlc291cmNlKGxuZywgbnMsIGtleSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgICAgdmFyIGtleVNlcGFyYXRvciA9IG9wdGlvbnMua2V5U2VwYXJhdG9yICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmtleVNlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5rZXlTZXBhcmF0b3I7XG4gICAgICB2YXIgaWdub3JlSlNPTlN0cnVjdHVyZSA9IG9wdGlvbnMuaWdub3JlSlNPTlN0cnVjdHVyZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlIDogdGhpcy5vcHRpb25zLmlnbm9yZUpTT05TdHJ1Y3R1cmU7XG4gICAgICB2YXIgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICAgIGlmIChrZXkgJiYgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoLmNvbmNhdChrZXkpO1xuICAgICAgaWYgKGtleSAmJiB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykgcGF0aCA9IHBhdGguY29uY2F0KGtleVNlcGFyYXRvciA/IGtleS5zcGxpdChrZXlTZXBhcmF0b3IpIDoga2V5KTtcblxuICAgICAgaWYgKGxuZy5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICBwYXRoID0gbG5nLnNwbGl0KCcuJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSBnZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCk7XG4gICAgICBpZiAocmVzdWx0IHx8ICFpZ25vcmVKU09OU3RydWN0dXJlIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSByZXR1cm4gcmVzdWx0O1xuICAgICAgcmV0dXJuIGRlZXBGaW5kKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGFbbG5nXSAmJiB0aGlzLmRhdGFbbG5nXVtuc10sIGtleSwga2V5U2VwYXJhdG9yKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkUmVzb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkUmVzb3VyY2UobG5nLCBucywga2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IHtcbiAgICAgICAgc2lsZW50OiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciBrZXlTZXBhcmF0b3IgPSB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgICAgaWYgKGtleVNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSBrZXlTZXBhcmF0b3IgPSAnLic7XG4gICAgICB2YXIgcGF0aCA9IFtsbmcsIG5zXTtcbiAgICAgIGlmIChrZXkpIHBhdGggPSBwYXRoLmNvbmNhdChrZXlTZXBhcmF0b3IgPyBrZXkuc3BsaXQoa2V5U2VwYXJhdG9yKSA6IGtleSk7XG5cbiAgICAgIGlmIChsbmcuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IGxuZy5zcGxpdCgnLicpO1xuICAgICAgICB2YWx1ZSA9IG5zO1xuICAgICAgICBucyA9IHBhdGhbMV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRkTmFtZXNwYWNlcyhucyk7XG4gICAgICBzZXRQYXRoKHRoaXMuZGF0YSwgcGF0aCwgdmFsdWUpO1xuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdhZGRlZCcsIGxuZywgbnMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRSZXNvdXJjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkUmVzb3VyY2VzKGxuZywgbnMsIHJlc291cmNlcykge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHtcbiAgICAgICAgc2lsZW50OiBmYWxzZVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgbSBpbiByZXNvdXJjZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZXNbbV0gPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkocmVzb3VyY2VzW21dKSA9PT0gJ1tvYmplY3QgQXJyYXldJykgdGhpcy5hZGRSZXNvdXJjZShsbmcsIG5zLCBtLCByZXNvdXJjZXNbbV0sIHtcbiAgICAgICAgICBzaWxlbnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHRoaXMuZW1pdCgnYWRkZWQnLCBsbmcsIG5zLCByZXNvdXJjZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRSZXNvdXJjZUJ1bmRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zLCByZXNvdXJjZXMsIGRlZXAsIG92ZXJ3cml0ZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IHtcbiAgICAgICAgc2lsZW50OiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHZhciBwYXRoID0gW2xuZywgbnNdO1xuXG4gICAgICBpZiAobG5nLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgIHBhdGggPSBsbmcuc3BsaXQoJy4nKTtcbiAgICAgICAgZGVlcCA9IHJlc291cmNlcztcbiAgICAgICAgcmVzb3VyY2VzID0gbnM7XG4gICAgICAgIG5zID0gcGF0aFsxXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGROYW1lc3BhY2VzKG5zKTtcbiAgICAgIHZhciBwYWNrID0gZ2V0UGF0aCh0aGlzLmRhdGEsIHBhdGgpIHx8IHt9O1xuXG4gICAgICBpZiAoZGVlcCkge1xuICAgICAgICBkZWVwRXh0ZW5kKHBhY2ssIHJlc291cmNlcywgb3ZlcndyaXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhY2sgPSBfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LCBwYWNrKSwgcmVzb3VyY2VzKTtcbiAgICAgIH1cblxuICAgICAgc2V0UGF0aCh0aGlzLmRhdGEsIHBhdGgsIHBhY2spO1xuICAgICAgaWYgKCFvcHRpb25zLnNpbGVudCkgdGhpcy5lbWl0KCdhZGRlZCcsIGxuZywgbnMsIHJlc291cmNlcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVJlc291cmNlQnVuZGxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZVJlc291cmNlQnVuZGxlKGxuZywgbnMpIHtcbiAgICAgIGlmICh0aGlzLmhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFbbG5nXVtuc107XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVtb3ZlTmFtZXNwYWNlcyhucyk7XG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZWQnLCBsbmcsIG5zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzUmVzb3VyY2VCdW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzUmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UobG5nLCBucykgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVzb3VyY2VCdW5kbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzb3VyY2VCdW5kbGUobG5nLCBucykge1xuICAgICAgaWYgKCFucykgbnMgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdE5TO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJID09PSAndjEnKSByZXR1cm4gX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7fSwge30pLCB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpKTtcbiAgICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGxuZywgbnMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREYXRhQnlMYW5ndWFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXRhQnlMYW5ndWFnZShsbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFbbG5nXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzTGFuZ3VhZ2VTb21lVHJhbnNsYXRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc0xhbmd1YWdlU29tZVRyYW5zbGF0aW9ucyhsbmcpIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5nZXREYXRhQnlMYW5ndWFnZShsbmcpO1xuICAgICAgdmFyIG4gPSBkYXRhICYmIE9iamVjdC5rZXlzKGRhdGEpIHx8IFtdO1xuICAgICAgcmV0dXJuICEhbi5maW5kKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBkYXRhW3ZdICYmIE9iamVjdC5rZXlzKGRhdGFbdl0pLmxlbmd0aCA+IDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9KU09OXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc291cmNlU3RvcmU7XG59KEV2ZW50RW1pdHRlcik7XG5cbnZhciBwb3N0UHJvY2Vzc29yID0ge1xuICBwcm9jZXNzb3JzOiB7fSxcbiAgYWRkUG9zdFByb2Nlc3NvcjogZnVuY3Rpb24gYWRkUG9zdFByb2Nlc3Nvcihtb2R1bGUpIHtcbiAgICB0aGlzLnByb2Nlc3NvcnNbbW9kdWxlLm5hbWVdID0gbW9kdWxlO1xuICB9LFxuICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShwcm9jZXNzb3JzLCB2YWx1ZSwga2V5LCBvcHRpb25zLCB0cmFuc2xhdG9yKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHByb2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbiAocHJvY2Vzc29yKSB7XG4gICAgICBpZiAoX3RoaXMucHJvY2Vzc29yc1twcm9jZXNzb3JdKSB2YWx1ZSA9IF90aGlzLnByb2Nlc3NvcnNbcHJvY2Vzc29yXS5wcm9jZXNzKHZhbHVlLCBrZXksIG9wdGlvbnMsIHRyYW5zbGF0b3IpO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gb3duS2V5cyQyKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQyKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkMihPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDEoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZl9fZGVmYXVsdFsnZGVmYXVsdCddKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2ZfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5fX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMSgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG52YXIgY2hlY2tlZExvYWRlZEZvciA9IHt9O1xuXG52YXIgVHJhbnNsYXRvciA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0c19fZGVmYXVsdFsnZGVmYXVsdCddKFRyYW5zbGF0b3IsIF9FdmVudEVtaXR0ZXIpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIkMShUcmFuc2xhdG9yKTtcblxuICBmdW5jdGlvbiBUcmFuc2xhdG9yKHNlcnZpY2VzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgVHJhbnNsYXRvcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKGlzSUUxMCkge1xuICAgICAgRXZlbnRFbWl0dGVyLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzKSk7XG4gICAgfVxuXG4gICAgY29weShbJ3Jlc291cmNlU3RvcmUnLCAnbGFuZ3VhZ2VVdGlscycsICdwbHVyYWxSZXNvbHZlcicsICdpbnRlcnBvbGF0b3InLCAnYmFja2VuZENvbm5lY3RvcicsICdpMThuRm9ybWF0JywgJ3V0aWxzJ10sIHNlcnZpY2VzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMpKTtcbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmIChfdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBfdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvciA9ICcuJztcbiAgICB9XG5cbiAgICBfdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgndHJhbnNsYXRvcicpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKFRyYW5zbGF0b3IsIFt7XG4gICAga2V5OiBcImNoYW5nZUxhbmd1YWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5nZUxhbmd1YWdlKGxuZykge1xuICAgICAgaWYgKGxuZykgdGhpcy5sYW5ndWFnZSA9IGxuZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXhpc3RzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4aXN0cyhrZXkpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7XG4gICAgICAgIGludGVycG9sYXRpb246IHt9XG4gICAgICB9O1xuXG4gICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc29sdmVkID0gdGhpcy5yZXNvbHZlKGtleSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQucmVzICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RGcm9tS2V5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RGcm9tS2V5KGtleSwgb3B0aW9ucykge1xuICAgICAgdmFyIG5zU2VwYXJhdG9yID0gb3B0aW9ucy5uc1NlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc1NlcGFyYXRvciA6IHRoaXMub3B0aW9ucy5uc1NlcGFyYXRvcjtcbiAgICAgIGlmIChuc1NlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSBuc1NlcGFyYXRvciA9ICc6JztcbiAgICAgIHZhciBrZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5rZXlTZXBhcmF0b3IgOiB0aGlzLm9wdGlvbnMua2V5U2VwYXJhdG9yO1xuICAgICAgdmFyIG5hbWVzcGFjZXMgPSBvcHRpb25zLm5zIHx8IHRoaXMub3B0aW9ucy5kZWZhdWx0TlMgfHwgW107XG4gICAgICB2YXIgd291bGRDaGVja0Zvck5zSW5LZXkgPSBuc1NlcGFyYXRvciAmJiBrZXkuaW5kZXhPZihuc1NlcGFyYXRvcikgPiAtMTtcbiAgICAgIHZhciBzZWVtc05hdHVyYWxMYW5ndWFnZSA9ICF0aGlzLm9wdGlvbnMudXNlckRlZmluZWRLZXlTZXBhcmF0b3IgJiYgIW9wdGlvbnMua2V5U2VwYXJhdG9yICYmICF0aGlzLm9wdGlvbnMudXNlckRlZmluZWROc1NlcGFyYXRvciAmJiAhb3B0aW9ucy5uc1NlcGFyYXRvciAmJiAhbG9va3NMaWtlT2JqZWN0UGF0aChrZXksIG5zU2VwYXJhdG9yLCBrZXlTZXBhcmF0b3IpO1xuXG4gICAgICBpZiAod291bGRDaGVja0Zvck5zSW5LZXkgJiYgIXNlZW1zTmF0dXJhbExhbmd1YWdlKSB7XG4gICAgICAgIHZhciBtID0ga2V5Lm1hdGNoKHRoaXMuaW50ZXJwb2xhdG9yLm5lc3RpbmdSZWdleHApO1xuXG4gICAgICAgIGlmIChtICYmIG0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG5hbWVzcGFjZXM6IG5hbWVzcGFjZXNcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcnRzID0ga2V5LnNwbGl0KG5zU2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKG5zU2VwYXJhdG9yICE9PSBrZXlTZXBhcmF0b3IgfHwgbnNTZXBhcmF0b3IgPT09IGtleVNlcGFyYXRvciAmJiB0aGlzLm9wdGlvbnMubnMuaW5kZXhPZihwYXJ0c1swXSkgPiAtMSkgbmFtZXNwYWNlcyA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgIGtleSA9IHBhcnRzLmpvaW4oa2V5U2VwYXJhdG9yKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJykgbmFtZXNwYWNlcyA9IFtuYW1lc3BhY2VzXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBuYW1lc3BhY2VzOiBuYW1lc3BhY2VzXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0cmFuc2xhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNsYXRlKGtleXMsIG9wdGlvbnMsIGxhc3RLZXkpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoX3R5cGVvZl9fZGVmYXVsdFsnZGVmYXVsdCddKG9wdGlvbnMpICE9PSAnb2JqZWN0JyAmJiB0aGlzLm9wdGlvbnMub3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcihhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQgfHwga2V5cyA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpKSBrZXlzID0gW1N0cmluZyhrZXlzKV07XG4gICAgICB2YXIgcmV0dXJuRGV0YWlscyA9IG9wdGlvbnMucmV0dXJuRGV0YWlscyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5yZXR1cm5EZXRhaWxzIDogdGhpcy5vcHRpb25zLnJldHVybkRldGFpbHM7XG4gICAgICB2YXIga2V5U2VwYXJhdG9yID0gb3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMua2V5U2VwYXJhdG9yIDogdGhpcy5vcHRpb25zLmtleVNlcGFyYXRvcjtcblxuICAgICAgdmFyIF90aGlzJGV4dHJhY3RGcm9tS2V5ID0gdGhpcy5leHRyYWN0RnJvbUtleShrZXlzW2tleXMubGVuZ3RoIC0gMV0sIG9wdGlvbnMpLFxuICAgICAgICAgIGtleSA9IF90aGlzJGV4dHJhY3RGcm9tS2V5LmtleSxcbiAgICAgICAgICBuYW1lc3BhY2VzID0gX3RoaXMkZXh0cmFjdEZyb21LZXkubmFtZXNwYWNlcztcblxuICAgICAgdmFyIG5hbWVzcGFjZSA9IG5hbWVzcGFjZXNbbmFtZXNwYWNlcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBsbmcgPSBvcHRpb25zLmxuZyB8fCB0aGlzLmxhbmd1YWdlO1xuICAgICAgdmFyIGFwcGVuZE5hbWVzcGFjZVRvQ0lNb2RlID0gb3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb0NJTW9kZSB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kTmFtZXNwYWNlVG9DSU1vZGU7XG5cbiAgICAgIGlmIChsbmcgJiYgbG5nLnRvTG93ZXJDYXNlKCkgPT09ICdjaW1vZGUnKSB7XG4gICAgICAgIGlmIChhcHBlbmROYW1lc3BhY2VUb0NJTW9kZSkge1xuICAgICAgICAgIHZhciBuc1NlcGFyYXRvciA9IG9wdGlvbnMubnNTZXBhcmF0b3IgfHwgdGhpcy5vcHRpb25zLm5zU2VwYXJhdG9yO1xuXG4gICAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICAgIHJlc29sdmVkLnJlcyA9IFwiXCIuY29uY2F0KG5hbWVzcGFjZSkuY29uY2F0KG5zU2VwYXJhdG9yKS5jb25jYXQoa2V5KTtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQobmFtZXNwYWNlKS5jb25jYXQobnNTZXBhcmF0b3IpLmNvbmNhdChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldHVybkRldGFpbHMpIHtcbiAgICAgICAgICByZXNvbHZlZC5yZXMgPSBrZXk7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc29sdmVkID0gdGhpcy5yZXNvbHZlKGtleXMsIG9wdGlvbnMpO1xuICAgICAgdmFyIHJlcyA9IHJlc29sdmVkICYmIHJlc29sdmVkLnJlcztcbiAgICAgIHZhciByZXNVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQudXNlZEtleSB8fCBrZXk7XG4gICAgICB2YXIgcmVzRXhhY3RVc2VkS2V5ID0gcmVzb2x2ZWQgJiYgcmVzb2x2ZWQuZXhhY3RVc2VkS2V5IHx8IGtleTtcbiAgICAgIHZhciByZXNUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShyZXMpO1xuICAgICAgdmFyIG5vT2JqZWN0ID0gWydbb2JqZWN0IE51bWJlcl0nLCAnW29iamVjdCBGdW5jdGlvbl0nLCAnW29iamVjdCBSZWdFeHBdJ107XG4gICAgICB2YXIgam9pbkFycmF5cyA9IG9wdGlvbnMuam9pbkFycmF5cyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5qb2luQXJyYXlzIDogdGhpcy5vcHRpb25zLmpvaW5BcnJheXM7XG4gICAgICB2YXIgaGFuZGxlQXNPYmplY3RJbkkxOG5Gb3JtYXQgPSAhdGhpcy5pMThuRm9ybWF0IHx8IHRoaXMuaTE4bkZvcm1hdC5oYW5kbGVBc09iamVjdDtcbiAgICAgIHZhciBoYW5kbGVBc09iamVjdCA9IHR5cGVvZiByZXMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiByZXMgIT09ICdib29sZWFuJyAmJiB0eXBlb2YgcmVzICE9PSAnbnVtYmVyJztcblxuICAgICAgaWYgKGhhbmRsZUFzT2JqZWN0SW5JMThuRm9ybWF0ICYmIHJlcyAmJiBoYW5kbGVBc09iamVjdCAmJiBub09iamVjdC5pbmRleE9mKHJlc1R5cGUpIDwgMCAmJiAhKHR5cGVvZiBqb2luQXJyYXlzID09PSAnc3RyaW5nJyAmJiByZXNUeXBlID09PSAnW29iamVjdCBBcnJheV0nKSkge1xuICAgICAgICBpZiAoIW9wdGlvbnMucmV0dXJuT2JqZWN0cyAmJiAhdGhpcy5vcHRpb25zLnJldHVybk9iamVjdHMpIHtcbiAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2FjY2Vzc2luZyBhbiBvYmplY3QgLSBidXQgcmV0dXJuT2JqZWN0cyBvcHRpb25zIGlzIG5vdCBlbmFibGVkIScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByID0gdGhpcy5vcHRpb25zLnJldHVybmVkT2JqZWN0SGFuZGxlciA/IHRoaXMub3B0aW9ucy5yZXR1cm5lZE9iamVjdEhhbmRsZXIocmVzVXNlZEtleSwgcmVzLCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICAgIG5zOiBuYW1lc3BhY2VzXG4gICAgICAgICAgfSkpIDogXCJrZXkgJ1wiLmNvbmNhdChrZXksIFwiIChcIikuY29uY2F0KHRoaXMubGFuZ3VhZ2UsIFwiKScgcmV0dXJuZWQgYW4gb2JqZWN0IGluc3RlYWQgb2Ygc3RyaW5nLlwiKTtcblxuICAgICAgICAgIGlmIChyZXR1cm5EZXRhaWxzKSB7XG4gICAgICAgICAgICByZXNvbHZlZC5yZXMgPSByO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtleVNlcGFyYXRvcikge1xuICAgICAgICAgIHZhciByZXNUeXBlSXNBcnJheSA9IHJlc1R5cGUgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgICAgICAgdmFyIGNvcHkgPSByZXNUeXBlSXNBcnJheSA/IFtdIDoge307XG4gICAgICAgICAgdmFyIG5ld0tleVRvVXNlID0gcmVzVHlwZUlzQXJyYXkgPyByZXNFeGFjdFVzZWRLZXkgOiByZXNVc2VkS2V5O1xuXG4gICAgICAgICAgZm9yICh2YXIgbSBpbiByZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzLCBtKSkge1xuICAgICAgICAgICAgICB2YXIgZGVlcEtleSA9IFwiXCIuY29uY2F0KG5ld0tleVRvVXNlKS5jb25jYXQoa2V5U2VwYXJhdG9yKS5jb25jYXQobSk7XG4gICAgICAgICAgICAgIGNvcHlbbV0gPSB0aGlzLnRyYW5zbGF0ZShkZWVwS2V5LCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBvcHRpb25zKSwge1xuICAgICAgICAgICAgICAgIGpvaW5BcnJheXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5zOiBuYW1lc3BhY2VzXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgaWYgKGNvcHlbbV0gPT09IGRlZXBLZXkpIGNvcHlbbV0gPSByZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzID0gY29weTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChoYW5kbGVBc09iamVjdEluSTE4bkZvcm1hdCAmJiB0eXBlb2Ygam9pbkFycmF5cyA9PT0gJ3N0cmluZycgJiYgcmVzVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICByZXMgPSByZXMuam9pbihqb2luQXJyYXlzKTtcbiAgICAgICAgaWYgKHJlcykgcmVzID0gdGhpcy5leHRlbmRUcmFuc2xhdGlvbihyZXMsIGtleXMsIG9wdGlvbnMsIGxhc3RLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHVzZWREZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgIHZhciB1c2VkS2V5ID0gZmFsc2U7XG4gICAgICAgIHZhciBuZWVkc1BsdXJhbEhhbmRsaW5nID0gb3B0aW9ucy5jb3VudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvcHRpb25zLmNvdW50ICE9PSAnc3RyaW5nJztcbiAgICAgICAgdmFyIGhhc0RlZmF1bHRWYWx1ZSA9IFRyYW5zbGF0b3IuaGFzRGVmYXVsdFZhbHVlKG9wdGlvbnMpO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlU3VmZml4ID0gbmVlZHNQbHVyYWxIYW5kbGluZyA/IHRoaXMucGx1cmFsUmVzb2x2ZXIuZ2V0U3VmZml4KGxuZywgb3B0aW9ucy5jb3VudCwgb3B0aW9ucykgOiAnJztcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IG9wdGlvbnNbXCJkZWZhdWx0VmFsdWVcIi5jb25jYXQoZGVmYXVsdFZhbHVlU3VmZml4KV0gfHwgb3B0aW9ucy5kZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSAmJiBoYXNEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICB1c2VkRGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgcmVzID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRMb29rdXAocmVzKSkge1xuICAgICAgICAgIHVzZWRLZXkgPSB0cnVlO1xuICAgICAgICAgIHJlcyA9IGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaXNzaW5nS2V5Tm9WYWx1ZUZhbGxiYWNrVG9LZXkgPSBvcHRpb25zLm1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSB8fCB0aGlzLm9wdGlvbnMubWlzc2luZ0tleU5vVmFsdWVGYWxsYmFja1RvS2V5O1xuICAgICAgICB2YXIgcmVzRm9yTWlzc2luZyA9IG1pc3NpbmdLZXlOb1ZhbHVlRmFsbGJhY2tUb0tleSAmJiB1c2VkS2V5ID8gdW5kZWZpbmVkIDogcmVzO1xuICAgICAgICB2YXIgdXBkYXRlTWlzc2luZyA9IGhhc0RlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUgIT09IHJlcyAmJiB0aGlzLm9wdGlvbnMudXBkYXRlTWlzc2luZztcblxuICAgICAgICBpZiAodXNlZEtleSB8fCB1c2VkRGVmYXVsdCB8fCB1cGRhdGVNaXNzaW5nKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIubG9nKHVwZGF0ZU1pc3NpbmcgPyAndXBkYXRlS2V5JyA6ICdtaXNzaW5nS2V5JywgbG5nLCBuYW1lc3BhY2UsIGtleSwgdXBkYXRlTWlzc2luZyA/IGRlZmF1bHRWYWx1ZSA6IHJlcyk7XG5cbiAgICAgICAgICBpZiAoa2V5U2VwYXJhdG9yKSB7XG4gICAgICAgICAgICB2YXIgZmsgPSB0aGlzLnJlc29sdmUoa2V5LCBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCBvcHRpb25zKSwge30sIHtcbiAgICAgICAgICAgICAga2V5U2VwYXJhdG9yOiBmYWxzZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgaWYgKGZrICYmIGZrLnJlcykgdGhpcy5sb2dnZXIud2FybignU2VlbXMgdGhlIGxvYWRlZCB0cmFuc2xhdGlvbnMgd2VyZSBpbiBmbGF0IEpTT04gZm9ybWF0IGluc3RlYWQgb2YgbmVzdGVkLiBFaXRoZXIgc2V0IGtleVNlcGFyYXRvcjogZmFsc2Ugb24gaW5pdCBvciBtYWtlIHN1cmUgeW91ciB0cmFuc2xhdGlvbnMgYXJlIHB1Ymxpc2hlZCBpbiBuZXN0ZWQgZm9ybWF0LicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBsbmdzID0gW107XG4gICAgICAgICAgdmFyIGZhbGxiYWNrTG5ncyA9IHRoaXMubGFuZ3VhZ2VVdGlscy5nZXRGYWxsYmFja0NvZGVzKHRoaXMub3B0aW9ucy5mYWxsYmFja0xuZywgb3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNhdmVNaXNzaW5nVG8gPT09ICdmYWxsYmFjaycgJiYgZmFsbGJhY2tMbmdzICYmIGZhbGxiYWNrTG5nc1swXSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmYWxsYmFja0xuZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbG5ncy5wdXNoKGZhbGxiYWNrTG5nc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdUbyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGxuZ3MgPSB0aGlzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsbmdzLnB1c2gob3B0aW9ucy5sbmcgfHwgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNlbmQgPSBmdW5jdGlvbiBzZW5kKGwsIGssIHNwZWNpZmljRGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdEZvck1pc3NpbmcgPSBoYXNEZWZhdWx0VmFsdWUgJiYgc3BlY2lmaWNEZWZhdWx0VmFsdWUgIT09IHJlcyA/IHNwZWNpZmljRGVmYXVsdFZhbHVlIDogcmVzRm9yTWlzc2luZztcblxuICAgICAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyKSB7XG4gICAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm1pc3NpbmdLZXlIYW5kbGVyKGwsIG5hbWVzcGFjZSwgaywgZGVmYXVsdEZvck1pc3NpbmcsIHVwZGF0ZU1pc3NpbmcsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpczIuYmFja2VuZENvbm5lY3RvciAmJiBfdGhpczIuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZykge1xuICAgICAgICAgICAgICBfdGhpczIuYmFja2VuZENvbm5lY3Rvci5zYXZlTWlzc2luZyhsLCBuYW1lc3BhY2UsIGssIGRlZmF1bHRGb3JNaXNzaW5nLCB1cGRhdGVNaXNzaW5nLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMyLmVtaXQoJ21pc3NpbmdLZXknLCBsLCBuYW1lc3BhY2UsIGssIHJlcyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2F2ZU1pc3NpbmdQbHVyYWxzICYmIG5lZWRzUGx1cmFsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgbG5ncy5mb3JFYWNoKGZ1bmN0aW9uIChsYW5ndWFnZSkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5wbHVyYWxSZXNvbHZlci5nZXRTdWZmaXhlcyhsYW5ndWFnZSwgb3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICBzZW5kKFtsYW5ndWFnZV0sIGtleSArIHN1ZmZpeCwgb3B0aW9uc1tcImRlZmF1bHRWYWx1ZVwiLmNvbmNhdChzdWZmaXgpXSB8fCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbmQobG5ncywga2V5LCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcyA9IHRoaXMuZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXlzLCBvcHRpb25zLCByZXNvbHZlZCwgbGFzdEtleSk7XG4gICAgICAgIGlmICh1c2VkS2V5ICYmIHJlcyA9PT0ga2V5ICYmIHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkpIHJlcyA9IFwiXCIuY29uY2F0KG5hbWVzcGFjZSwgXCI6XCIpLmNvbmNhdChrZXkpO1xuXG4gICAgICAgIGlmICgodXNlZEtleSB8fCB1c2VkRGVmYXVsdCkgJiYgdGhpcy5vcHRpb25zLnBhcnNlTWlzc2luZ0tleUhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMub3B0aW9ucy5wYXJzZU1pc3NpbmdLZXlIYW5kbGVyKHRoaXMub3B0aW9ucy5hcHBlbmROYW1lc3BhY2VUb01pc3NpbmdLZXkgPyBcIlwiLmNvbmNhdChuYW1lc3BhY2UsIFwiOlwiKS5jb25jYXQoa2V5KSA6IGtleSwgdXNlZERlZmF1bHQgPyByZXMgOiB1bmRlZmluZWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSB0aGlzLm9wdGlvbnMucGFyc2VNaXNzaW5nS2V5SGFuZGxlcihyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuRGV0YWlscykge1xuICAgICAgICByZXNvbHZlZC5yZXMgPSByZXM7XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kVHJhbnNsYXRpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kVHJhbnNsYXRpb24ocmVzLCBrZXksIG9wdGlvbnMsIHJlc29sdmVkLCBsYXN0S2V5KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQucGFyc2UpIHtcbiAgICAgICAgcmVzID0gdGhpcy5pMThuRm9ybWF0LnBhcnNlKHJlcywgX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyksIG9wdGlvbnMpLCByZXNvbHZlZC51c2VkTG5nLCByZXNvbHZlZC51c2VkTlMsIHJlc29sdmVkLnVzZWRLZXksIHtcbiAgICAgICAgICByZXNvbHZlZDogcmVzb2x2ZWRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCFvcHRpb25zLnNraXBJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmludGVycG9sYXRpb24pIHRoaXMuaW50ZXJwb2xhdG9yLmluaXQoX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgb3B0aW9ucyksIHtcbiAgICAgICAgICBpbnRlcnBvbGF0aW9uOiBfb2JqZWN0U3ByZWFkJDIoX29iamVjdFNwcmVhZCQyKHt9LCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbiksIG9wdGlvbnMuaW50ZXJwb2xhdGlvbilcbiAgICAgICAgfSkpO1xuICAgICAgICB2YXIgc2tpcE9uVmFyaWFibGVzID0gdHlwZW9mIHJlcyA9PT0gJ3N0cmluZycgJiYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMgOiB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5za2lwT25WYXJpYWJsZXMpO1xuICAgICAgICB2YXIgbmVzdEJlZjtcblxuICAgICAgICBpZiAoc2tpcE9uVmFyaWFibGVzKSB7XG4gICAgICAgICAgdmFyIG5iID0gcmVzLm1hdGNoKHRoaXMuaW50ZXJwb2xhdG9yLm5lc3RpbmdSZWdleHApO1xuICAgICAgICAgIG5lc3RCZWYgPSBuYiAmJiBuYi5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGF0YSA9IG9wdGlvbnMucmVwbGFjZSAmJiB0eXBlb2Ygb3B0aW9ucy5yZXBsYWNlICE9PSAnc3RyaW5nJyA/IG9wdGlvbnMucmVwbGFjZSA6IG9wdGlvbnM7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5kZWZhdWx0VmFyaWFibGVzKSBkYXRhID0gX29iamVjdFNwcmVhZCQyKF9vYmplY3RTcHJlYWQkMih7fSwgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZGVmYXVsdFZhcmlhYmxlcyksIGRhdGEpO1xuICAgICAgICByZXMgPSB0aGlzLmludGVycG9sYXRvci5pbnRlcnBvbGF0ZShyZXMsIGRhdGEsIG9wdGlvbnMubG5nIHx8IHRoaXMubGFuZ3VhZ2UsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgICB2YXIgbmEgPSByZXMubWF0Y2godGhpcy5pbnRlcnBvbGF0b3IubmVzdGluZ1JlZ2V4cCk7XG4gICAgICAgICAgdmFyIG5lc3RBZnQgPSBuYSAmJiBuYS5sZW5ndGg7XG4gICAgICAgICAgaWYgKG5lc3RCZWYgPCBuZXN0QWZ0KSBvcHRpb25zLm5lc3QgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLm5lc3QgIT09IGZhbHNlKSByZXMgPSB0aGlzLmludGVycG9sYXRvci5uZXN0KHJlcywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobGFzdEtleSAmJiBsYXN0S2V5WzBdID09PSBhcmdzWzBdICYmICFvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIF90aGlzMy5sb2dnZXIud2FybihcIkl0IHNlZW1zIHlvdSBhcmUgbmVzdGluZyByZWN1cnNpdmVseSBrZXk6IFwiLmNvbmNhdChhcmdzWzBdLCBcIiBpbiBrZXk6IFwiKS5jb25jYXQoa2V5WzBdKSk7XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfdGhpczMudHJhbnNsYXRlLmFwcGx5KF90aGlzMywgYXJncy5jb25jYXQoW2tleV0pKTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChvcHRpb25zLmludGVycG9sYXRpb24pIHRoaXMuaW50ZXJwb2xhdG9yLnJlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3N0UHJvY2VzcyA9IG9wdGlvbnMucG9zdFByb2Nlc3MgfHwgdGhpcy5vcHRpb25zLnBvc3RQcm9jZXNzO1xuICAgICAgdmFyIHBvc3RQcm9jZXNzb3JOYW1lcyA9IHR5cGVvZiBwb3N0UHJvY2VzcyA9PT0gJ3N0cmluZycgPyBbcG9zdFByb2Nlc3NdIDogcG9zdFByb2Nlc3M7XG5cbiAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiByZXMgIT09IG51bGwgJiYgcG9zdFByb2Nlc3Nvck5hbWVzICYmIHBvc3RQcm9jZXNzb3JOYW1lcy5sZW5ndGggJiYgb3B0aW9ucy5hcHBseVBvc3RQcm9jZXNzb3IgIT09IGZhbHNlKSB7XG4gICAgICAgIHJlcyA9IHBvc3RQcm9jZXNzb3IuaGFuZGxlKHBvc3RQcm9jZXNzb3JOYW1lcywgcmVzLCBrZXksIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMucG9zdFByb2Nlc3NQYXNzUmVzb2x2ZWQgPyBfb2JqZWN0U3ByZWFkJDIoe1xuICAgICAgICAgIGkxOG5SZXNvbHZlZDogcmVzb2x2ZWRcbiAgICAgICAgfSwgb3B0aW9ucykgOiBvcHRpb25zLCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzb2x2ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKGtleXMpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgZm91bmQ7XG4gICAgICB2YXIgdXNlZEtleTtcbiAgICAgIHZhciBleGFjdFVzZWRLZXk7XG4gICAgICB2YXIgdXNlZExuZztcbiAgICAgIHZhciB1c2VkTlM7XG4gICAgICBpZiAodHlwZW9mIGtleXMgPT09ICdzdHJpbmcnKSBrZXlzID0gW2tleXNdO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIGlmIChfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcblxuICAgICAgICB2YXIgZXh0cmFjdGVkID0gX3RoaXM0LmV4dHJhY3RGcm9tS2V5KGssIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBrZXkgPSBleHRyYWN0ZWQua2V5O1xuICAgICAgICB1c2VkS2V5ID0ga2V5O1xuICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGV4dHJhY3RlZC5uYW1lc3BhY2VzO1xuICAgICAgICBpZiAoX3RoaXM0Lm9wdGlvbnMuZmFsbGJhY2tOUykgbmFtZXNwYWNlcyA9IG5hbWVzcGFjZXMuY29uY2F0KF90aGlzNC5vcHRpb25zLmZhbGxiYWNrTlMpO1xuICAgICAgICB2YXIgbmVlZHNQbHVyYWxIYW5kbGluZyA9IG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5jb3VudCAhPT0gJ3N0cmluZyc7XG5cbiAgICAgICAgdmFyIG5lZWRzWmVyb1N1ZmZpeExvb2t1cCA9IG5lZWRzUGx1cmFsSGFuZGxpbmcgJiYgIW9wdGlvbnMub3JkaW5hbCAmJiBvcHRpb25zLmNvdW50ID09PSAwICYmIF90aGlzNC5wbHVyYWxSZXNvbHZlci5zaG91bGRVc2VJbnRsQXBpKCk7XG5cbiAgICAgICAgdmFyIG5lZWRzQ29udGV4dEhhbmRsaW5nID0gb3B0aW9ucy5jb250ZXh0ICE9PSB1bmRlZmluZWQgJiYgKHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT09ICdudW1iZXInKSAmJiBvcHRpb25zLmNvbnRleHQgIT09ICcnO1xuICAgICAgICB2YXIgY29kZXMgPSBvcHRpb25zLmxuZ3MgPyBvcHRpb25zLmxuZ3MgOiBfdGhpczQubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkob3B0aW9ucy5sbmcgfHwgX3RoaXM0Lmxhbmd1YWdlLCBvcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgICAgbmFtZXNwYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChucykge1xuICAgICAgICAgIGlmIChfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcbiAgICAgICAgICB1c2VkTlMgPSBucztcblxuICAgICAgICAgIGlmICghY2hlY2tlZExvYWRlZEZvcltcIlwiLmNvbmNhdChjb2Rlc1swXSwgXCItXCIpLmNvbmNhdChucyldICYmIF90aGlzNC51dGlscyAmJiBfdGhpczQudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlICYmICFfdGhpczQudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlKHVzZWROUykpIHtcbiAgICAgICAgICAgIGNoZWNrZWRMb2FkZWRGb3JbXCJcIi5jb25jYXQoY29kZXNbMF0sIFwiLVwiKS5jb25jYXQobnMpXSA9IHRydWU7XG5cbiAgICAgICAgICAgIF90aGlzNC5sb2dnZXIud2FybihcImtleSBcXFwiXCIuY29uY2F0KHVzZWRLZXksIFwiXFxcIiBmb3IgbGFuZ3VhZ2VzIFxcXCJcIikuY29uY2F0KGNvZGVzLmpvaW4oJywgJyksIFwiXFxcIiB3b24ndCBnZXQgcmVzb2x2ZWQgYXMgbmFtZXNwYWNlIFxcXCJcIikuY29uY2F0KHVzZWROUywgXCJcXFwiIHdhcyBub3QgeWV0IGxvYWRlZFwiKSwgJ1RoaXMgbWVhbnMgc29tZXRoaW5nIElTIFdST05HIGluIHlvdXIgc2V0dXAuIFlvdSBhY2Nlc3MgdGhlIHQgZnVuY3Rpb24gYmVmb3JlIGkxOG5leHQuaW5pdCAvIGkxOG5leHQubG9hZE5hbWVzcGFjZSAvIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2Ugd2FzIGRvbmUuIFdhaXQgZm9yIHRoZSBjYWxsYmFjayBvciBQcm9taXNlIHRvIHJlc29sdmUgYmVmb3JlIGFjY2Vzc2luZyBpdCEhIScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvZGVzLmZvckVhY2goZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHJldHVybjtcbiAgICAgICAgICAgIHVzZWRMbmcgPSBjb2RlO1xuICAgICAgICAgICAgdmFyIGZpbmFsS2V5cyA9IFtrZXldO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXM0LmkxOG5Gb3JtYXQgJiYgX3RoaXM0LmkxOG5Gb3JtYXQuYWRkTG9va3VwS2V5cykge1xuICAgICAgICAgICAgICBfdGhpczQuaTE4bkZvcm1hdC5hZGRMb29rdXBLZXlzKGZpbmFsS2V5cywga2V5LCBjb2RlLCBucywgb3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgcGx1cmFsU3VmZml4O1xuICAgICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykgcGx1cmFsU3VmZml4ID0gX3RoaXM0LnBsdXJhbFJlc29sdmVyLmdldFN1ZmZpeChjb2RlLCBvcHRpb25zLmNvdW50LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgdmFyIHplcm9TdWZmaXggPSBcIlwiLmNvbmNhdChfdGhpczQub3B0aW9ucy5wbHVyYWxTZXBhcmF0b3IsIFwiemVyb1wiKTtcblxuICAgICAgICAgICAgICBpZiAobmVlZHNQbHVyYWxIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGtleSArIHBsdXJhbFN1ZmZpeCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbEtleXMucHVzaChrZXkgKyB6ZXJvU3VmZml4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobmVlZHNDb250ZXh0SGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dEtleSA9IFwiXCIuY29uY2F0KGtleSkuY29uY2F0KF90aGlzNC5vcHRpb25zLmNvbnRleHRTZXBhcmF0b3IpLmNvbmNhdChvcHRpb25zLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5lZWRzUGx1cmFsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkgKyBwbHVyYWxTdWZmaXgpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAobmVlZHNaZXJvU3VmZml4TG9va3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsS2V5cy5wdXNoKGNvbnRleHRLZXkgKyB6ZXJvU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBvc3NpYmxlS2V5O1xuXG4gICAgICAgICAgICB3aGlsZSAocG9zc2libGVLZXkgPSBmaW5hbEtleXMucG9wKCkpIHtcbiAgICAgICAgICAgICAgaWYgKCFfdGhpczQuaXNWYWxpZExvb2t1cChmb3VuZCkpIHtcbiAgICAgICAgICAgICAgICBleGFjdFVzZWRLZXkgPSBwb3NzaWJsZUtleTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IF90aGlzNC5nZXRSZXNvdXJjZShjb2RlLCBucywgcG9zc2libGVLZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXM6IGZvdW5kLFxuICAgICAgICB1c2VkS2V5OiB1c2VkS2V5LFxuICAgICAgICBleGFjdFVzZWRLZXk6IGV4YWN0VXNlZEtleSxcbiAgICAgICAgdXNlZExuZzogdXNlZExuZyxcbiAgICAgICAgdXNlZE5TOiB1c2VkTlNcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRMb29rdXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNWYWxpZExvb2t1cChyZXMpIHtcbiAgICAgIHJldHVybiByZXMgIT09IHVuZGVmaW5lZCAmJiAhKCF0aGlzLm9wdGlvbnMucmV0dXJuTnVsbCAmJiByZXMgPT09IG51bGwpICYmICEoIXRoaXMub3B0aW9ucy5yZXR1cm5FbXB0eVN0cmluZyAmJiByZXMgPT09ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVzb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuICAgICAgaWYgKHRoaXMuaTE4bkZvcm1hdCAmJiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UpIHJldHVybiB0aGlzLmkxOG5Gb3JtYXQuZ2V0UmVzb3VyY2UoY29kZSwgbnMsIGtleSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVN0b3JlLmdldFJlc291cmNlKGNvZGUsIG5zLCBrZXksIG9wdGlvbnMpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImhhc0RlZmF1bHRWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNEZWZhdWx0VmFsdWUob3B0aW9ucykge1xuICAgICAgdmFyIHByZWZpeCA9ICdkZWZhdWx0VmFsdWUnO1xuXG4gICAgICBmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIG9wdGlvbikgJiYgcHJlZml4ID09PSBvcHRpb24uc3Vic3RyaW5nKDAsIHByZWZpeC5sZW5ndGgpICYmIHVuZGVmaW5lZCAhPT0gb3B0aW9uc1tvcHRpb25dKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUcmFuc2xhdG9yO1xufShFdmVudEVtaXR0ZXIpO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG52YXIgTGFuZ3VhZ2VVdGlsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMYW5ndWFnZVV0aWwob3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIExhbmd1YWdlVXRpbCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3VwcG9ydGVkTG5ncyA9IHRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzIHx8IGZhbHNlO1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ2xhbmd1YWdlVXRpbHMnKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKExhbmd1YWdlVXRpbCwgW3tcbiAgICBrZXk6IFwiZ2V0U2NyaXB0UGFydEZyb21Db2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKSB7XG4gICAgICBpZiAoIWNvZGUgfHwgY29kZS5pbmRleE9mKCctJykgPCAwKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBwID0gY29kZS5zcGxpdCgnLScpO1xuICAgICAgaWYgKHAubGVuZ3RoID09PSAyKSByZXR1cm4gbnVsbDtcbiAgICAgIHAucG9wKCk7XG4gICAgICBpZiAocFtwLmxlbmd0aCAtIDFdLnRvTG93ZXJDYXNlKCkgPT09ICd4JykgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUocC5qb2luKCctJykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRMYW5ndWFnZVBhcnRGcm9tQ29kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShjb2RlKSB7XG4gICAgICBpZiAoIWNvZGUgfHwgY29kZS5pbmRleE9mKCctJykgPCAwKSByZXR1cm4gY29kZTtcbiAgICAgIHZhciBwID0gY29kZS5zcGxpdCgnLScpO1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKHBbMF0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JtYXRMYW5ndWFnZUNvZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpIHtcbiAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gJ3N0cmluZycgJiYgY29kZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgICB2YXIgc3BlY2lhbENhc2VzID0gWydoYW5zJywgJ2hhbnQnLCAnbGF0bicsICdjeXJsJywgJ2NhbnMnLCAnbW9uZycsICdhcmFiJ107XG4gICAgICAgIHZhciBwID0gY29kZS5zcGxpdCgnLScpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG93ZXJDYXNlTG5nKSB7XG4gICAgICAgICAgcCA9IHAubWFwKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFydC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgcFswXSA9IHBbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBwWzFdID0gcFsxXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGlmIChzcGVjaWFsQ2FzZXMuaW5kZXhPZihwWzFdLnRvTG93ZXJDYXNlKCkpID4gLTEpIHBbMV0gPSBjYXBpdGFsaXplKHBbMV0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAocC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICBwWzBdID0gcFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChwWzFdLmxlbmd0aCA9PT0gMikgcFsxXSA9IHBbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBpZiAocFswXSAhPT0gJ3NnbicgJiYgcFsyXS5sZW5ndGggPT09IDIpIHBbMl0gPSBwWzJdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKHNwZWNpYWxDYXNlcy5pbmRleE9mKHBbMV0udG9Mb3dlckNhc2UoKSkgPiAtMSkgcFsxXSA9IGNhcGl0YWxpemUocFsxXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICBpZiAoc3BlY2lhbENhc2VzLmluZGV4T2YocFsyXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSBwWzJdID0gY2FwaXRhbGl6ZShwWzJdLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHAuam9pbignLScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNsZWFuQ29kZSB8fCB0aGlzLm9wdGlvbnMubG93ZXJDYXNlTG5nID8gY29kZS50b0xvd2VyQ2FzZSgpIDogY29kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNTdXBwb3J0ZWRDb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3VwcG9ydGVkQ29kZShjb2RlKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgPT09ICdsYW5ndWFnZU9ubHknIHx8IHRoaXMub3B0aW9ucy5ub25FeHBsaWNpdFN1cHBvcnRlZExuZ3MpIHtcbiAgICAgICAgY29kZSA9IHRoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAhdGhpcy5zdXBwb3J0ZWRMbmdzIHx8ICF0aGlzLnN1cHBvcnRlZExuZ3MubGVuZ3RoIHx8IHRoaXMuc3VwcG9ydGVkTG5ncy5pbmRleE9mKGNvZGUpID4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEJlc3RNYXRjaEZyb21Db2Rlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCZXN0TWF0Y2hGcm9tQ29kZXMoY29kZXMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghY29kZXMpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGZvdW5kO1xuICAgICAgY29kZXMuZm9yRWFjaChmdW5jdGlvbiAoY29kZSkge1xuICAgICAgICBpZiAoZm91bmQpIHJldHVybjtcblxuICAgICAgICB2YXIgY2xlYW5lZExuZyA9IF90aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKTtcblxuICAgICAgICBpZiAoIV90aGlzLm9wdGlvbnMuc3VwcG9ydGVkTG5ncyB8fCBfdGhpcy5pc1N1cHBvcnRlZENvZGUoY2xlYW5lZExuZykpIGZvdW5kID0gY2xlYW5lZExuZztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWZvdW5kICYmIHRoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzKSB7XG4gICAgICAgIGNvZGVzLmZvckVhY2goZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgICBpZiAoZm91bmQpIHJldHVybjtcblxuICAgICAgICAgIHZhciBsbmdPbmx5ID0gX3RoaXMuZ2V0TGFuZ3VhZ2VQYXJ0RnJvbUNvZGUoY29kZSk7XG5cbiAgICAgICAgICBpZiAoX3RoaXMuaXNTdXBwb3J0ZWRDb2RlKGxuZ09ubHkpKSByZXR1cm4gZm91bmQgPSBsbmdPbmx5O1xuICAgICAgICAgIGZvdW5kID0gX3RoaXMub3B0aW9ucy5zdXBwb3J0ZWRMbmdzLmZpbmQoZnVuY3Rpb24gKHN1cHBvcnRlZExuZykge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZExuZy5pbmRleE9mKGxuZ09ubHkpID09PSAwKSByZXR1cm4gc3VwcG9ydGVkTG5nO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3VuZCkgZm91bmQgPSB0aGlzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nKVswXTtcbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RmFsbGJhY2tDb2Rlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGYWxsYmFja0NvZGVzKGZhbGxiYWNrcywgY29kZSkge1xuICAgICAgaWYgKCFmYWxsYmFja3MpIHJldHVybiBbXTtcbiAgICAgIGlmICh0eXBlb2YgZmFsbGJhY2tzID09PSAnZnVuY3Rpb24nKSBmYWxsYmFja3MgPSBmYWxsYmFja3MoY29kZSk7XG4gICAgICBpZiAodHlwZW9mIGZhbGxiYWNrcyA9PT0gJ3N0cmluZycpIGZhbGxiYWNrcyA9IFtmYWxsYmFja3NdO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkoZmFsbGJhY2tzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykgcmV0dXJuIGZhbGxiYWNrcztcbiAgICAgIGlmICghY29kZSkgcmV0dXJuIGZhbGxiYWNrc1tcImRlZmF1bHRcIl0gfHwgW107XG4gICAgICB2YXIgZm91bmQgPSBmYWxsYmFja3NbY29kZV07XG4gICAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrc1t0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKV07XG4gICAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrc1t0aGlzLmZvcm1hdExhbmd1YWdlQ29kZShjb2RlKV07XG4gICAgICBpZiAoIWZvdW5kKSBmb3VuZCA9IGZhbGxiYWNrc1t0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpXTtcbiAgICAgIGlmICghZm91bmQpIGZvdW5kID0gZmFsbGJhY2tzW1wiZGVmYXVsdFwiXTtcbiAgICAgIHJldHVybiBmb3VuZCB8fCBbXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9SZXNvbHZlSGllcmFyY2h5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvUmVzb2x2ZUhpZXJhcmNoeShjb2RlLCBmYWxsYmFja0NvZGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZmFsbGJhY2tDb2RlcyA9IHRoaXMuZ2V0RmFsbGJhY2tDb2RlcyhmYWxsYmFja0NvZGUgfHwgdGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nIHx8IFtdLCBjb2RlKTtcbiAgICAgIHZhciBjb2RlcyA9IFtdO1xuXG4gICAgICB2YXIgYWRkQ29kZSA9IGZ1bmN0aW9uIGFkZENvZGUoYykge1xuICAgICAgICBpZiAoIWMpIHJldHVybjtcblxuICAgICAgICBpZiAoX3RoaXMyLmlzU3VwcG9ydGVkQ29kZShjKSkge1xuICAgICAgICAgIGNvZGVzLnB1c2goYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMyLmxvZ2dlci53YXJuKFwicmVqZWN0aW5nIGxhbmd1YWdlIGNvZGUgbm90IGZvdW5kIGluIHN1cHBvcnRlZExuZ3M6IFwiLmNvbmNhdChjKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgY29kZSA9PT0gJ3N0cmluZycgJiYgY29kZS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvYWQgIT09ICdsYW5ndWFnZU9ubHknKSBhZGRDb2RlKHRoaXMuZm9ybWF0TGFuZ3VhZ2VDb2RlKGNvZGUpKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb2FkICE9PSAnbGFuZ3VhZ2VPbmx5JyAmJiB0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2N1cnJlbnRPbmx5JykgYWRkQ29kZSh0aGlzLmdldFNjcmlwdFBhcnRGcm9tQ29kZShjb2RlKSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9hZCAhPT0gJ2N1cnJlbnRPbmx5JykgYWRkQ29kZSh0aGlzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGFkZENvZGUodGhpcy5mb3JtYXRMYW5ndWFnZUNvZGUoY29kZSkpO1xuICAgICAgfVxuXG4gICAgICBmYWxsYmFja0NvZGVzLmZvckVhY2goZnVuY3Rpb24gKGZjKSB7XG4gICAgICAgIGlmIChjb2Rlcy5pbmRleE9mKGZjKSA8IDApIGFkZENvZGUoX3RoaXMyLmZvcm1hdExhbmd1YWdlQ29kZShmYykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29kZXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExhbmd1YWdlVXRpbDtcbn0oKTtcblxudmFyIHNldHMgPSBbe1xuICBsbmdzOiBbJ2FjaCcsICdhaycsICdhbScsICdhcm4nLCAnYnInLCAnZmlsJywgJ2d1bicsICdsbicsICdtZmUnLCAnbWcnLCAnbWknLCAnb2MnLCAncHQnLCAncHQtQlInLCAndGcnLCAndGwnLCAndGknLCAndHInLCAndXonLCAnd2EnXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDFcbn0sIHtcbiAgbG5nczogWydhZicsICdhbicsICdhc3QnLCAnYXonLCAnYmcnLCAnYm4nLCAnY2EnLCAnZGEnLCAnZGUnLCAnZGV2JywgJ2VsJywgJ2VuJywgJ2VvJywgJ2VzJywgJ2V0JywgJ2V1JywgJ2ZpJywgJ2ZvJywgJ2Z1cicsICdmeScsICdnbCcsICdndScsICdoYScsICdoaScsICdodScsICdoeScsICdpYScsICdpdCcsICdraycsICdrbicsICdrdScsICdsYicsICdtYWknLCAnbWwnLCAnbW4nLCAnbXInLCAnbmFoJywgJ25hcCcsICduYicsICduZScsICdubCcsICdubicsICdubycsICduc28nLCAncGEnLCAncGFwJywgJ3BtcycsICdwcycsICdwdC1QVCcsICdybScsICdzY28nLCAnc2UnLCAnc2knLCAnc28nLCAnc29uJywgJ3NxJywgJ3N2JywgJ3N3JywgJ3RhJywgJ3RlJywgJ3RrJywgJ3VyJywgJ3lvJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAyXG59LCB7XG4gIGxuZ3M6IFsnYXknLCAnYm8nLCAnY2dnJywgJ2ZhJywgJ2h0JywgJ2lkJywgJ2phJywgJ2pibycsICdrYScsICdrbScsICdrbycsICdreScsICdsbycsICdtcycsICdzYWgnLCAnc3UnLCAndGgnLCAndHQnLCAndWcnLCAndmknLCAnd28nLCAnemgnXSxcbiAgbnI6IFsxXSxcbiAgZmM6IDNcbn0sIHtcbiAgbG5nczogWydiZScsICdicycsICdjbnInLCAnZHonLCAnaHInLCAncnUnLCAnc3InLCAndWsnXSxcbiAgbnI6IFsxLCAyLCA1XSxcbiAgZmM6IDRcbn0sIHtcbiAgbG5nczogWydhciddLFxuICBucjogWzAsIDEsIDIsIDMsIDExLCAxMDBdLFxuICBmYzogNVxufSwge1xuICBsbmdzOiBbJ2NzJywgJ3NrJ10sXG4gIG5yOiBbMSwgMiwgNV0sXG4gIGZjOiA2XG59LCB7XG4gIGxuZ3M6IFsnY3NiJywgJ3BsJ10sXG4gIG5yOiBbMSwgMiwgNV0sXG4gIGZjOiA3XG59LCB7XG4gIGxuZ3M6IFsnY3knXSxcbiAgbnI6IFsxLCAyLCAzLCA4XSxcbiAgZmM6IDhcbn0sIHtcbiAgbG5nczogWydmciddLFxuICBucjogWzEsIDJdLFxuICBmYzogOVxufSwge1xuICBsbmdzOiBbJ2dhJ10sXG4gIG5yOiBbMSwgMiwgMywgNywgMTFdLFxuICBmYzogMTBcbn0sIHtcbiAgbG5nczogWydnZCddLFxuICBucjogWzEsIDIsIDMsIDIwXSxcbiAgZmM6IDExXG59LCB7XG4gIGxuZ3M6IFsnaXMnXSxcbiAgbnI6IFsxLCAyXSxcbiAgZmM6IDEyXG59LCB7XG4gIGxuZ3M6IFsnanYnXSxcbiAgbnI6IFswLCAxXSxcbiAgZmM6IDEzXG59LCB7XG4gIGxuZ3M6IFsna3cnXSxcbiAgbnI6IFsxLCAyLCAzLCA0XSxcbiAgZmM6IDE0XG59LCB7XG4gIGxuZ3M6IFsnbHQnXSxcbiAgbnI6IFsxLCAyLCAxMF0sXG4gIGZjOiAxNVxufSwge1xuICBsbmdzOiBbJ2x2J10sXG4gIG5yOiBbMSwgMiwgMF0sXG4gIGZjOiAxNlxufSwge1xuICBsbmdzOiBbJ21rJ10sXG4gIG5yOiBbMSwgMl0sXG4gIGZjOiAxN1xufSwge1xuICBsbmdzOiBbJ21uayddLFxuICBucjogWzAsIDEsIDJdLFxuICBmYzogMThcbn0sIHtcbiAgbG5nczogWydtdCddLFxuICBucjogWzEsIDIsIDExLCAyMF0sXG4gIGZjOiAxOVxufSwge1xuICBsbmdzOiBbJ29yJ10sXG4gIG5yOiBbMiwgMV0sXG4gIGZjOiAyXG59LCB7XG4gIGxuZ3M6IFsncm8nXSxcbiAgbnI6IFsxLCAyLCAyMF0sXG4gIGZjOiAyMFxufSwge1xuICBsbmdzOiBbJ3NsJ10sXG4gIG5yOiBbNSwgMSwgMiwgM10sXG4gIGZjOiAyMVxufSwge1xuICBsbmdzOiBbJ2hlJywgJ2l3J10sXG4gIG5yOiBbMSwgMiwgMjAsIDIxXSxcbiAgZmM6IDIyXG59XTtcbnZhciBfcnVsZXNQbHVyYWxzVHlwZXMgPSB7XG4gIDE6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA+IDEpO1xuICB9LFxuICAyOiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gIT0gMSk7XG4gIH0sXG4gIDM6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiAwO1xuICB9LFxuICA0OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gJSAxMCA9PSAxICYmIG4gJSAxMDAgIT0gMTEgPyAwIDogbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDQgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyKTtcbiAgfSxcbiAgNTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDAgPyAwIDogbiA9PSAxID8gMSA6IG4gPT0gMiA/IDIgOiBuICUgMTAwID49IDMgJiYgbiAlIDEwMCA8PSAxMCA/IDMgOiBuICUgMTAwID49IDExID8gNCA6IDUpO1xuICB9LFxuICA2OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID49IDIgJiYgbiA8PSA0ID8gMSA6IDIpO1xuICB9LFxuICA3OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpO1xuICB9LFxuICA4OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSA/IDAgOiBuID09IDIgPyAxIDogbiAhPSA4ICYmIG4gIT0gMTEgPyAyIDogMyk7XG4gIH0sXG4gIDk6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA+PSAyKTtcbiAgfSxcbiAgMTA6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiA9PSAxID8gMCA6IG4gPT0gMiA/IDEgOiBuIDwgNyA/IDIgOiBuIDwgMTEgPyAzIDogNCk7XG4gIH0sXG4gIDExOiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSB8fCBuID09IDExID8gMCA6IG4gPT0gMiB8fCBuID09IDEyID8gMSA6IG4gPiAyICYmIG4gPCAyMCA/IDIgOiAzKTtcbiAgfSxcbiAgMTI6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwICE9IDEgfHwgbiAlIDEwMCA9PSAxMSk7XG4gIH0sXG4gIDEzOiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gIT09IDApO1xuICB9LFxuICAxNDogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IG4gPT0gMyA/IDIgOiAzKTtcbiAgfSxcbiAgMTU6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwID09IDEgJiYgbiAlIDEwMCAhPSAxMSA/IDAgOiBuICUgMTAgPj0gMiAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDIpO1xuICB9LFxuICAxNjogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IG4gIT09IDAgPyAxIDogMik7XG4gIH0sXG4gIDE3OiBmdW5jdGlvbiBfKG4pIHtcbiAgICByZXR1cm4gTnVtYmVyKG4gPT0gMSB8fCBuICUgMTAgPT0gMSAmJiBuICUgMTAwICE9IDExID8gMCA6IDEpO1xuICB9LFxuICAxODogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDAgPyAwIDogbiA9PSAxID8gMSA6IDIpO1xuICB9LFxuICAxOTogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAwIHx8IG4gJSAxMDAgPiAxICYmIG4gJSAxMDAgPCAxMSA/IDEgOiBuICUgMTAwID4gMTAgJiYgbiAlIDEwMCA8IDIwID8gMiA6IDMpO1xuICB9LFxuICAyMDogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAwIHx8IG4gJSAxMDAgPiAwICYmIG4gJSAxMDAgPCAyMCA/IDEgOiAyKTtcbiAgfSxcbiAgMjE6IGZ1bmN0aW9uIF8obikge1xuICAgIHJldHVybiBOdW1iZXIobiAlIDEwMCA9PSAxID8gMSA6IG4gJSAxMDAgPT0gMiA/IDIgOiBuICUgMTAwID09IDMgfHwgbiAlIDEwMCA9PSA0ID8gMyA6IDApO1xuICB9LFxuICAyMjogZnVuY3Rpb24gXyhuKSB7XG4gICAgcmV0dXJuIE51bWJlcihuID09IDEgPyAwIDogbiA9PSAyID8gMSA6IChuIDwgMCB8fCBuID4gMTApICYmIG4gJSAxMCA9PSAwID8gMiA6IDMpO1xuICB9XG59O1xudmFyIGRlcHJlY2F0ZWRKc29uVmVyc2lvbnMgPSBbJ3YxJywgJ3YyJywgJ3YzJ107XG52YXIgc3VmZml4ZXNPcmRlciA9IHtcbiAgemVybzogMCxcbiAgb25lOiAxLFxuICB0d286IDIsXG4gIGZldzogMyxcbiAgbWFueTogNCxcbiAgb3RoZXI6IDVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVJ1bGVzKCkge1xuICB2YXIgcnVsZXMgPSB7fTtcbiAgc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChzZXQpIHtcbiAgICBzZXQubG5ncy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICBydWxlc1tsXSA9IHtcbiAgICAgICAgbnVtYmVyczogc2V0Lm5yLFxuICAgICAgICBwbHVyYWxzOiBfcnVsZXNQbHVyYWxzVHlwZXNbc2V0LmZjXVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBydWxlcztcbn1cblxudmFyIFBsdXJhbFJlc29sdmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQbHVyYWxSZXNvbHZlcihsYW5ndWFnZVV0aWxzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgUGx1cmFsUmVzb2x2ZXIpO1xuXG4gICAgdGhpcy5sYW5ndWFnZVV0aWxzID0gbGFuZ3VhZ2VVdGlscztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMubG9nZ2VyID0gYmFzZUxvZ2dlci5jcmVhdGUoJ3BsdXJhbFJlc29sdmVyJyk7XG5cbiAgICBpZiAoKCF0aGlzLm9wdGlvbnMuY29tcGF0aWJpbGl0eUpTT04gfHwgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjQnKSAmJiAodHlwZW9mIEludGwgPT09ICd1bmRlZmluZWQnIHx8ICFJbnRsLlBsdXJhbFJ1bGVzKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID0gJ3YzJztcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdZb3VyIGVudmlyb25tZW50IHNlZW1zIG5vdCB0byBiZSBJbnRsIEFQSSBjb21wYXRpYmxlLCB1c2UgYW4gSW50bC5QbHVyYWxSdWxlcyBwb2x5ZmlsbC4gV2lsbCBmYWxsYmFjayB0byB0aGUgY29tcGF0aWJpbGl0eUpTT04gdjMgZm9ybWF0IGhhbmRsaW5nLicpO1xuICAgIH1cblxuICAgIHRoaXMucnVsZXMgPSBjcmVhdGVSdWxlcygpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzX19kZWZhdWx0WydkZWZhdWx0J10oUGx1cmFsUmVzb2x2ZXIsIFt7XG4gICAga2V5OiBcImFkZFJ1bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkUnVsZShsbmcsIG9iaikge1xuICAgICAgdGhpcy5ydWxlc1tsbmddID0gb2JqO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSdWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJ1bGUoY29kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEludGwuUGx1cmFsUnVsZXMoY29kZSwge1xuICAgICAgICAgICAgdHlwZTogb3B0aW9ucy5vcmRpbmFsID8gJ29yZGluYWwnIDogJ2NhcmRpbmFsJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzW2NvZGVdIHx8IHRoaXMucnVsZXNbdGhpcy5sYW5ndWFnZVV0aWxzLmdldExhbmd1YWdlUGFydEZyb21Db2RlKGNvZGUpXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibmVlZHNQbHVyYWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVlZHNQbHVyYWwoY29kZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmdldFJ1bGUoY29kZSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgICByZXR1cm4gcnVsZSAmJiBydWxlLnJlc29sdmVkT3B0aW9ucygpLnBsdXJhbENhdGVnb3JpZXMubGVuZ3RoID4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bGUgJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA+IDE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFBsdXJhbEZvcm1zT2ZLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGx1cmFsRm9ybXNPZktleShjb2RlLCBrZXkpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLmdldFN1ZmZpeGVzKGNvZGUsIG9wdGlvbnMpLm1hcChmdW5jdGlvbiAoc3VmZml4KSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChrZXkpLmNvbmNhdChzdWZmaXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN1ZmZpeGVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN1ZmZpeGVzKGNvZGUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBydWxlID0gdGhpcy5nZXRSdWxlKGNvZGUsIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoIXJ1bGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VJbnRsQXBpKCkpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGUucmVzb2x2ZWRPcHRpb25zKCkucGx1cmFsQ2F0ZWdvcmllcy5zb3J0KGZ1bmN0aW9uIChwbHVyYWxDYXRlZ29yeTEsIHBsdXJhbENhdGVnb3J5Mikge1xuICAgICAgICAgIHJldHVybiBzdWZmaXhlc09yZGVyW3BsdXJhbENhdGVnb3J5MV0gLSBzdWZmaXhlc09yZGVyW3BsdXJhbENhdGVnb3J5Ml07XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAocGx1cmFsQ2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoX3RoaXMub3B0aW9ucy5wcmVwZW5kKS5jb25jYXQocGx1cmFsQ2F0ZWdvcnkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bGUubnVtYmVycy5tYXAoZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2V0U3VmZml4KGNvZGUsIG51bWJlciwgb3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3VmZml4XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN1ZmZpeChjb2RlLCBjb3VudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmdldFJ1bGUoY29kZSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmIChydWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVzZUludGxBcGkoKSkge1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLm9wdGlvbnMucHJlcGVuZCkuY29uY2F0KHJ1bGUuc2VsZWN0KGNvdW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWZmaXhSZXRyb0NvbXBhdGlibGUocnVsZSwgY291bnQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxvZ2dlci53YXJuKFwibm8gcGx1cmFsIHJ1bGUgZm91bmQgZm9yOiBcIi5jb25jYXQoY29kZSkpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdWZmaXhSZXRyb0NvbXBhdGlibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3VmZml4UmV0cm9Db21wYXRpYmxlKHJ1bGUsIGNvdW50KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGlkeCA9IHJ1bGUubm9BYnMgPyBydWxlLnBsdXJhbHMoY291bnQpIDogcnVsZS5wbHVyYWxzKE1hdGguYWJzKGNvdW50KSk7XG4gICAgICB2YXIgc3VmZml4ID0gcnVsZS5udW1iZXJzW2lkeF07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXggJiYgcnVsZS5udW1iZXJzLmxlbmd0aCA9PT0gMiAmJiBydWxlLm51bWJlcnNbMF0gPT09IDEpIHtcbiAgICAgICAgaWYgKHN1ZmZpeCA9PT0gMikge1xuICAgICAgICAgIHN1ZmZpeCA9ICdwbHVyYWwnO1xuICAgICAgICB9IGVsc2UgaWYgKHN1ZmZpeCA9PT0gMSkge1xuICAgICAgICAgIHN1ZmZpeCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciByZXR1cm5TdWZmaXggPSBmdW5jdGlvbiByZXR1cm5TdWZmaXgoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIub3B0aW9ucy5wcmVwZW5kICYmIHN1ZmZpeC50b1N0cmluZygpID8gX3RoaXMyLm9wdGlvbnMucHJlcGVuZCArIHN1ZmZpeC50b1N0cmluZygpIDogc3VmZml4LnRvU3RyaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjEnKSB7XG4gICAgICAgIGlmIChzdWZmaXggPT09IDEpIHJldHVybiAnJztcbiAgICAgICAgaWYgKHR5cGVvZiBzdWZmaXggPT09ICdudW1iZXInKSByZXR1cm4gXCJfcGx1cmFsX1wiLmNvbmNhdChzdWZmaXgudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiByZXR1cm5TdWZmaXgoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OID09PSAndjInKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5TdWZmaXgoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNpbXBsaWZ5UGx1cmFsU3VmZml4ICYmIHJ1bGUubnVtYmVycy5sZW5ndGggPT09IDIgJiYgcnVsZS5udW1iZXJzWzBdID09PSAxKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5TdWZmaXgoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wcmVwZW5kICYmIGlkeC50b1N0cmluZygpID8gdGhpcy5vcHRpb25zLnByZXBlbmQgKyBpZHgudG9TdHJpbmcoKSA6IGlkeC50b1N0cmluZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaG91bGRVc2VJbnRsQXBpXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUludGxBcGkoKSB7XG4gICAgICByZXR1cm4gIWRlcHJlY2F0ZWRKc29uVmVyc2lvbnMuaW5jbHVkZXModGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGx1cmFsUmVzb2x2ZXI7XG59KCk7XG5cbmZ1bmN0aW9uIG93bktleXMkMyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMyh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHlfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBJbnRlcnBvbGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEludGVycG9sYXRvcigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCBJbnRlcnBvbGF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIgPSBiYXNlTG9nZ2VyLmNyZWF0ZSgnaW50ZXJwb2xhdG9yJyk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKEludGVycG9sYXRvciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgaWYgKCFvcHRpb25zLmludGVycG9sYXRpb24pIG9wdGlvbnMuaW50ZXJwb2xhdGlvbiA9IHtcbiAgICAgICAgZXNjYXBlVmFsdWU6IHRydWVcbiAgICAgIH07XG4gICAgICB2YXIgaU9wdHMgPSBvcHRpb25zLmludGVycG9sYXRpb247XG4gICAgICB0aGlzLmVzY2FwZSA9IGlPcHRzLmVzY2FwZSAhPT0gdW5kZWZpbmVkID8gaU9wdHMuZXNjYXBlIDogZXNjYXBlO1xuICAgICAgdGhpcy5lc2NhcGVWYWx1ZSA9IGlPcHRzLmVzY2FwZVZhbHVlICE9PSB1bmRlZmluZWQgPyBpT3B0cy5lc2NhcGVWYWx1ZSA6IHRydWU7XG4gICAgICB0aGlzLnVzZVJhd1ZhbHVlVG9Fc2NhcGUgPSBpT3B0cy51c2VSYXdWYWx1ZVRvRXNjYXBlICE9PSB1bmRlZmluZWQgPyBpT3B0cy51c2VSYXdWYWx1ZVRvRXNjYXBlIDogZmFsc2U7XG4gICAgICB0aGlzLnByZWZpeCA9IGlPcHRzLnByZWZpeCA/IHJlZ2V4RXNjYXBlKGlPcHRzLnByZWZpeCkgOiBpT3B0cy5wcmVmaXhFc2NhcGVkIHx8ICd7eyc7XG4gICAgICB0aGlzLnN1ZmZpeCA9IGlPcHRzLnN1ZmZpeCA/IHJlZ2V4RXNjYXBlKGlPcHRzLnN1ZmZpeCkgOiBpT3B0cy5zdWZmaXhFc2NhcGVkIHx8ICd9fSc7XG4gICAgICB0aGlzLmZvcm1hdFNlcGFyYXRvciA9IGlPcHRzLmZvcm1hdFNlcGFyYXRvciA/IGlPcHRzLmZvcm1hdFNlcGFyYXRvciA6IGlPcHRzLmZvcm1hdFNlcGFyYXRvciB8fCAnLCc7XG4gICAgICB0aGlzLnVuZXNjYXBlUHJlZml4ID0gaU9wdHMudW5lc2NhcGVTdWZmaXggPyAnJyA6IGlPcHRzLnVuZXNjYXBlUHJlZml4IHx8ICctJztcbiAgICAgIHRoaXMudW5lc2NhcGVTdWZmaXggPSB0aGlzLnVuZXNjYXBlUHJlZml4ID8gJycgOiBpT3B0cy51bmVzY2FwZVN1ZmZpeCB8fCAnJztcbiAgICAgIHRoaXMubmVzdGluZ1ByZWZpeCA9IGlPcHRzLm5lc3RpbmdQcmVmaXggPyByZWdleEVzY2FwZShpT3B0cy5uZXN0aW5nUHJlZml4KSA6IGlPcHRzLm5lc3RpbmdQcmVmaXhFc2NhcGVkIHx8IHJlZ2V4RXNjYXBlKCckdCgnKTtcbiAgICAgIHRoaXMubmVzdGluZ1N1ZmZpeCA9IGlPcHRzLm5lc3RpbmdTdWZmaXggPyByZWdleEVzY2FwZShpT3B0cy5uZXN0aW5nU3VmZml4KSA6IGlPcHRzLm5lc3RpbmdTdWZmaXhFc2NhcGVkIHx8IHJlZ2V4RXNjYXBlKCcpJyk7XG4gICAgICB0aGlzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yID0gaU9wdHMubmVzdGluZ09wdGlvbnNTZXBhcmF0b3IgPyBpT3B0cy5uZXN0aW5nT3B0aW9uc1NlcGFyYXRvciA6IGlPcHRzLm5lc3RpbmdPcHRpb25zU2VwYXJhdG9yIHx8ICcsJztcbiAgICAgIHRoaXMubWF4UmVwbGFjZXMgPSBpT3B0cy5tYXhSZXBsYWNlcyA/IGlPcHRzLm1heFJlcGxhY2VzIDogMTAwMDtcbiAgICAgIHRoaXMuYWx3YXlzRm9ybWF0ID0gaU9wdHMuYWx3YXlzRm9ybWF0ICE9PSB1bmRlZmluZWQgPyBpT3B0cy5hbHdheXNGb3JtYXQgOiBmYWxzZTtcbiAgICAgIHRoaXMucmVzZXRSZWdFeHAoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB0aGlzLmluaXQodGhpcy5vcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRSZWdFeHBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRSZWdFeHAoKSB7XG4gICAgICB2YXIgcmVnZXhwU3RyID0gXCJcIi5jb25jYXQodGhpcy5wcmVmaXgsIFwiKC4rPylcIikuY29uY2F0KHRoaXMuc3VmZml4KTtcbiAgICAgIHRoaXMucmVnZXhwID0gbmV3IFJlZ0V4cChyZWdleHBTdHIsICdnJyk7XG4gICAgICB2YXIgcmVnZXhwVW5lc2NhcGVTdHIgPSBcIlwiLmNvbmNhdCh0aGlzLnByZWZpeCkuY29uY2F0KHRoaXMudW5lc2NhcGVQcmVmaXgsIFwiKC4rPylcIikuY29uY2F0KHRoaXMudW5lc2NhcGVTdWZmaXgpLmNvbmNhdCh0aGlzLnN1ZmZpeCk7XG4gICAgICB0aGlzLnJlZ2V4cFVuZXNjYXBlID0gbmV3IFJlZ0V4cChyZWdleHBVbmVzY2FwZVN0ciwgJ2cnKTtcbiAgICAgIHZhciBuZXN0aW5nUmVnZXhwU3RyID0gXCJcIi5jb25jYXQodGhpcy5uZXN0aW5nUHJlZml4LCBcIiguKz8pXCIpLmNvbmNhdCh0aGlzLm5lc3RpbmdTdWZmaXgpO1xuICAgICAgdGhpcy5uZXN0aW5nUmVnZXhwID0gbmV3IFJlZ0V4cChuZXN0aW5nUmVnZXhwU3RyLCAnZycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnRlcnBvbGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnRlcnBvbGF0ZShzdHIsIGRhdGEsIGxuZywgb3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIG1hdGNoO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgdmFyIHJlcGxhY2VzO1xuICAgICAgdmFyIGRlZmF1bHREYXRhID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uICYmIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmRlZmF1bHRWYXJpYWJsZXMgfHwge307XG5cbiAgICAgIGZ1bmN0aW9uIHJlZ2V4U2FmZSh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhhbmRsZUZvcm1hdCA9IGZ1bmN0aW9uIGhhbmRsZUZvcm1hdChrZXkpIHtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKF90aGlzLmZvcm1hdFNlcGFyYXRvcikgPCAwKSB7XG4gICAgICAgICAgdmFyIHBhdGggPSBnZXRQYXRoV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrZXkpO1xuICAgICAgICAgIHJldHVybiBfdGhpcy5hbHdheXNGb3JtYXQgPyBfdGhpcy5mb3JtYXQocGF0aCwgdW5kZWZpbmVkLCBsbmcsIF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoX29iamVjdFNwcmVhZCQzKHt9LCBvcHRpb25zKSwgZGF0YSksIHt9LCB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBrZXlcbiAgICAgICAgICB9KSkgOiBwYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHAgPSBrZXkuc3BsaXQoX3RoaXMuZm9ybWF0U2VwYXJhdG9yKTtcbiAgICAgICAgdmFyIGsgPSBwLnNoaWZ0KCkudHJpbSgpO1xuICAgICAgICB2YXIgZiA9IHAuam9pbihfdGhpcy5mb3JtYXRTZXBhcmF0b3IpLnRyaW0oKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZvcm1hdChnZXRQYXRoV2l0aERlZmF1bHRzKGRhdGEsIGRlZmF1bHREYXRhLCBrKSwgZiwgbG5nLCBfb2JqZWN0U3ByZWFkJDMoX29iamVjdFNwcmVhZCQzKF9vYmplY3RTcHJlYWQkMyh7fSwgb3B0aW9ucyksIGRhdGEpLCB7fSwge1xuICAgICAgICAgIGludGVycG9sYXRpb25rZXk6IGtcbiAgICAgICAgfSkpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZXNldFJlZ0V4cCgpO1xuICAgICAgdmFyIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5taXNzaW5nSW50ZXJwb2xhdGlvbkhhbmRsZXIgfHwgdGhpcy5vcHRpb25zLm1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcjtcbiAgICAgIHZhciBza2lwT25WYXJpYWJsZXMgPSBvcHRpb25zICYmIG9wdGlvbnMuaW50ZXJwb2xhdGlvbiAmJiBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzIDogdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uc2tpcE9uVmFyaWFibGVzO1xuICAgICAgdmFyIHRvZG9zID0gW3tcbiAgICAgICAgcmVnZXg6IHRoaXMucmVnZXhwVW5lc2NhcGUsXG4gICAgICAgIHNhZmVWYWx1ZTogZnVuY3Rpb24gc2FmZVZhbHVlKHZhbCkge1xuICAgICAgICAgIHJldHVybiByZWdleFNhZmUodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICByZWdleDogdGhpcy5yZWdleHAsXG4gICAgICAgIHNhZmVWYWx1ZTogZnVuY3Rpb24gc2FmZVZhbHVlKHZhbCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5lc2NhcGVWYWx1ZSA/IHJlZ2V4U2FmZShfdGhpcy5lc2NhcGUodmFsKSkgOiByZWdleFNhZmUodmFsKTtcbiAgICAgICAgfVxuICAgICAgfV07XG4gICAgICB0b2Rvcy5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgIHJlcGxhY2VzID0gMDtcblxuICAgICAgICB3aGlsZSAobWF0Y2ggPSB0b2RvLnJlZ2V4LmV4ZWMoc3RyKSkge1xuICAgICAgICAgIHZhciBtYXRjaGVkVmFyID0gbWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICAgIHZhbHVlID0gaGFuZGxlRm9ybWF0KG1hdGNoZWRWYXIpO1xuXG4gICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHZhciB0ZW1wID0gbWlzc2luZ0ludGVycG9sYXRpb25IYW5kbGVyKHN0ciwgbWF0Y2gsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB0ZW1wID09PSAnc3RyaW5nJyA/IHRlbXAgOiAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KG1hdGNoZWRWYXIpKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNraXBPblZhcmlhYmxlcykge1xuICAgICAgICAgICAgICB2YWx1ZSA9IG1hdGNoWzBdO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIF90aGlzLmxvZ2dlci53YXJuKFwibWlzc2VkIHRvIHBhc3MgaW4gdmFyaWFibGUgXCIuY29uY2F0KG1hdGNoZWRWYXIsIFwiIGZvciBpbnRlcnBvbGF0aW5nIFwiKS5jb25jYXQoc3RyKSk7XG5cbiAgICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgJiYgIV90aGlzLnVzZVJhd1ZhbHVlVG9Fc2NhcGUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWFrZVN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHNhZmVWYWx1ZSA9IHRvZG8uc2FmZVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShtYXRjaFswXSwgc2FmZVZhbHVlKTtcblxuICAgICAgICAgIGlmIChza2lwT25WYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHRvZG8ucmVnZXgubGFzdEluZGV4ICs9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgIHRvZG8ucmVnZXgubGFzdEluZGV4IC09IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kby5yZWdleC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlcGxhY2VzKys7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZXMgPj0gX3RoaXMubWF4UmVwbGFjZXMpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lc3Qoc3RyLCBmYykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBtYXRjaDtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgdmFyIGNsb25lZE9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkJDMoe30sIG9wdGlvbnMpO1xuXG4gICAgICBjbG9uZWRPcHRpb25zLmFwcGx5UG9zdFByb2Nlc3NvciA9IGZhbHNlO1xuICAgICAgZGVsZXRlIGNsb25lZE9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVIYXNPcHRpb25zKGtleSwgaW5oZXJpdGVkT3B0aW9ucykge1xuICAgICAgICB2YXIgc2VwID0gdGhpcy5uZXN0aW5nT3B0aW9uc1NlcGFyYXRvcjtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKHNlcCkgPCAwKSByZXR1cm4ga2V5O1xuICAgICAgICB2YXIgYyA9IGtleS5zcGxpdChuZXcgUmVnRXhwKFwiXCIuY29uY2F0KHNlcCwgXCJbIF0qe1wiKSkpO1xuICAgICAgICB2YXIgb3B0aW9uc1N0cmluZyA9IFwie1wiLmNvbmNhdChjWzFdKTtcbiAgICAgICAga2V5ID0gY1swXTtcbiAgICAgICAgb3B0aW9uc1N0cmluZyA9IHRoaXMuaW50ZXJwb2xhdGUob3B0aW9uc1N0cmluZywgY2xvbmVkT3B0aW9ucyk7XG4gICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoLycvZywgJ1wiJyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjbG9uZWRPcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zU3RyaW5nKTtcbiAgICAgICAgICBpZiAoaW5oZXJpdGVkT3B0aW9ucykgY2xvbmVkT3B0aW9ucyA9IF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIGluaGVyaXRlZE9wdGlvbnMpLCBjbG9uZWRPcHRpb25zKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm4oXCJmYWlsZWQgcGFyc2luZyBvcHRpb25zIHN0cmluZyBpbiBuZXN0aW5nIGZvciBrZXkgXCIuY29uY2F0KGtleSksIGUpO1xuICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChrZXkpLmNvbmNhdChzZXApLmNvbmNhdChvcHRpb25zU3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBjbG9uZWRPcHRpb25zLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKG1hdGNoID0gdGhpcy5uZXN0aW5nUmVnZXhwLmV4ZWMoc3RyKSkge1xuICAgICAgICB2YXIgZm9ybWF0dGVycyA9IFtdO1xuICAgICAgICB2YXIgZG9SZWR1Y2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAobWF0Y2hbMF0uaW5kZXhPZih0aGlzLmZvcm1hdFNlcGFyYXRvcikgIT09IC0xICYmICEvey4qfS8udGVzdChtYXRjaFsxXSkpIHtcbiAgICAgICAgICB2YXIgciA9IG1hdGNoWzFdLnNwbGl0KHRoaXMuZm9ybWF0U2VwYXJhdG9yKS5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLnRyaW0oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtYXRjaFsxXSA9IHIuc2hpZnQoKTtcbiAgICAgICAgICBmb3JtYXR0ZXJzID0gcjtcbiAgICAgICAgICBkb1JlZHVjZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IGZjKGhhbmRsZUhhc09wdGlvbnMuY2FsbCh0aGlzLCBtYXRjaFsxXS50cmltKCksIGNsb25lZE9wdGlvbnMpLCBjbG9uZWRPcHRpb25zKTtcbiAgICAgICAgaWYgKHZhbHVlICYmIG1hdGNoWzBdID09PSBzdHIgJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgcmV0dXJuIHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgdmFsdWUgPSBtYWtlU3RyaW5nKHZhbHVlKTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybihcIm1pc3NlZCB0byByZXNvbHZlIFwiLmNvbmNhdChtYXRjaFsxXSwgXCIgZm9yIG5lc3RpbmcgXCIpLmNvbmNhdChzdHIpKTtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvUmVkdWNlKSB7XG4gICAgICAgICAgdmFsdWUgPSBmb3JtYXR0ZXJzLnJlZHVjZShmdW5jdGlvbiAodiwgZikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5mb3JtYXQodiwgZiwgb3B0aW9ucy5sbmcsIF9vYmplY3RTcHJlYWQkMyhfb2JqZWN0U3ByZWFkJDMoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9ua2V5OiBtYXRjaFsxXS50cmltKClcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9LCB2YWx1ZS50cmltKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UobWF0Y2hbMF0sIHZhbHVlKTtcbiAgICAgICAgdGhpcy5yZWdleHAubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJwb2xhdG9yO1xufSgpO1xuXG5mdW5jdGlvbiBvd25LZXlzJDQob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5X19kZWZhdWx0WydkZWZhdWx0J10odGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyQ0KE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBwYXJzZUZvcm1hdFN0cihmb3JtYXRTdHIpIHtcbiAgdmFyIGZvcm1hdE5hbWUgPSBmb3JtYXRTdHIudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gIHZhciBmb3JtYXRPcHRpb25zID0ge307XG5cbiAgaWYgKGZvcm1hdFN0ci5pbmRleE9mKCcoJykgPiAtMSkge1xuICAgIHZhciBwID0gZm9ybWF0U3RyLnNwbGl0KCcoJyk7XG4gICAgZm9ybWF0TmFtZSA9IHBbMF0udG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgdmFyIG9wdFN0ciA9IHBbMV0uc3Vic3RyaW5nKDAsIHBbMV0ubGVuZ3RoIC0gMSk7XG5cbiAgICBpZiAoZm9ybWF0TmFtZSA9PT0gJ2N1cnJlbmN5JyAmJiBvcHRTdHIuaW5kZXhPZignOicpIDwgMCkge1xuICAgICAgaWYgKCFmb3JtYXRPcHRpb25zLmN1cnJlbmN5KSBmb3JtYXRPcHRpb25zLmN1cnJlbmN5ID0gb3B0U3RyLnRyaW0oKTtcbiAgICB9IGVsc2UgaWYgKGZvcm1hdE5hbWUgPT09ICdyZWxhdGl2ZXRpbWUnICYmIG9wdFN0ci5pbmRleE9mKCc6JykgPCAwKSB7XG4gICAgICBpZiAoIWZvcm1hdE9wdGlvbnMucmFuZ2UpIGZvcm1hdE9wdGlvbnMucmFuZ2UgPSBvcHRTdHIudHJpbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3B0cyA9IG9wdFN0ci5zcGxpdCgnOycpO1xuICAgICAgb3B0cy5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgaWYgKCFvcHQpIHJldHVybjtcblxuICAgICAgICB2YXIgX29wdCRzcGxpdCA9IG9wdC5zcGxpdCgnOicpLFxuICAgICAgICAgICAgX29wdCRzcGxpdDIgPSBfdG9BcnJheV9fZGVmYXVsdFsnZGVmYXVsdCddKF9vcHQkc3BsaXQpLFxuICAgICAgICAgICAga2V5ID0gX29wdCRzcGxpdDJbMF0sXG4gICAgICAgICAgICByZXN0ID0gX29wdCRzcGxpdDIuc2xpY2UoMSk7XG5cbiAgICAgICAgdmFyIHZhbCA9IHJlc3Quam9pbignOicpLnRyaW0oKS5yZXBsYWNlKC9eJyt8JyskL2csICcnKTtcbiAgICAgICAgaWYgKCFmb3JtYXRPcHRpb25zW2tleS50cmltKCldKSBmb3JtYXRPcHRpb25zW2tleS50cmltKCldID0gdmFsO1xuICAgICAgICBpZiAodmFsID09PSAnZmFsc2UnKSBmb3JtYXRPcHRpb25zW2tleS50cmltKCldID0gZmFsc2U7XG4gICAgICAgIGlmICh2YWwgPT09ICd0cnVlJykgZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSA9IHRydWU7XG4gICAgICAgIGlmICghaXNOYU4odmFsKSkgZm9ybWF0T3B0aW9uc1trZXkudHJpbSgpXSA9IHBhcnNlSW50KHZhbCwgMTApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXROYW1lOiBmb3JtYXROYW1lLFxuICAgIGZvcm1hdE9wdGlvbnM6IGZvcm1hdE9wdGlvbnNcbiAgfTtcbn1cblxudmFyIEZvcm1hdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRm9ybWF0dGVyKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIEZvcm1hdHRlcik7XG5cbiAgICB0aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdmb3JtYXR0ZXInKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZm9ybWF0cyA9IHtcbiAgICAgIG51bWJlcjogZnVuY3Rpb24gbnVtYmVyKHZhbCwgbG5nLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG5nLCBvcHRpb25zKS5mb3JtYXQodmFsKTtcbiAgICAgIH0sXG4gICAgICBjdXJyZW5jeTogZnVuY3Rpb24gY3VycmVuY3kodmFsLCBsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsbmcsIF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knXG4gICAgICAgIH0pKS5mb3JtYXQodmFsKTtcbiAgICAgIH0sXG4gICAgICBkYXRldGltZTogZnVuY3Rpb24gZGF0ZXRpbWUodmFsLCBsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxuZywgX29iamVjdFNwcmVhZCQ0KHt9LCBvcHRpb25zKSkuZm9ybWF0KHZhbCk7XG4gICAgICB9LFxuICAgICAgcmVsYXRpdmV0aW1lOiBmdW5jdGlvbiByZWxhdGl2ZXRpbWUodmFsLCBsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsbmcsIF9vYmplY3RTcHJlYWQkNCh7fSwgb3B0aW9ucykpLmZvcm1hdCh2YWwsIG9wdGlvbnMucmFuZ2UgfHwgJ2RheScpO1xuICAgICAgfSxcbiAgICAgIGxpc3Q6IGZ1bmN0aW9uIGxpc3QodmFsLCBsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRsLkxpc3RGb3JtYXQobG5nLCBfb2JqZWN0U3ByZWFkJDQoe30sIG9wdGlvbnMpKS5mb3JtYXQodmFsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKEZvcm1hdHRlciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KHNlcnZpY2VzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7fVxuICAgICAgfTtcbiAgICAgIHZhciBpT3B0cyA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbjtcbiAgICAgIHRoaXMuZm9ybWF0U2VwYXJhdG9yID0gaU9wdHMuZm9ybWF0U2VwYXJhdG9yID8gaU9wdHMuZm9ybWF0U2VwYXJhdG9yIDogaU9wdHMuZm9ybWF0U2VwYXJhdG9yIHx8ICcsJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZChuYW1lLCBmYykge1xuICAgICAgdGhpcy5mb3JtYXRzW25hbWUudG9Mb3dlckNhc2UoKS50cmltKCldID0gZmM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIF9mb3JtYXQsIGxuZywgb3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGZvcm1hdHMgPSBfZm9ybWF0LnNwbGl0KHRoaXMuZm9ybWF0U2VwYXJhdG9yKTtcblxuICAgICAgdmFyIHJlc3VsdCA9IGZvcm1hdHMucmVkdWNlKGZ1bmN0aW9uIChtZW0sIGYpIHtcbiAgICAgICAgdmFyIF9wYXJzZUZvcm1hdFN0ciA9IHBhcnNlRm9ybWF0U3RyKGYpLFxuICAgICAgICAgICAgZm9ybWF0TmFtZSA9IF9wYXJzZUZvcm1hdFN0ci5mb3JtYXROYW1lLFxuICAgICAgICAgICAgZm9ybWF0T3B0aW9ucyA9IF9wYXJzZUZvcm1hdFN0ci5mb3JtYXRPcHRpb25zO1xuXG4gICAgICAgIGlmIChfdGhpcy5mb3JtYXRzW2Zvcm1hdE5hbWVdKSB7XG4gICAgICAgICAgdmFyIGZvcm1hdHRlZCA9IG1lbTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdmFsT3B0aW9ucyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5mb3JtYXRQYXJhbXMgJiYgb3B0aW9ucy5mb3JtYXRQYXJhbXNbb3B0aW9ucy5pbnRlcnBvbGF0aW9ua2V5XSB8fCB7fTtcbiAgICAgICAgICAgIHZhciBsID0gdmFsT3B0aW9ucy5sb2NhbGUgfHwgdmFsT3B0aW9ucy5sbmcgfHwgb3B0aW9ucy5sb2NhbGUgfHwgb3B0aW9ucy5sbmcgfHwgbG5nO1xuICAgICAgICAgICAgZm9ybWF0dGVkID0gX3RoaXMuZm9ybWF0c1tmb3JtYXROYW1lXShtZW0sIGwsIF9vYmplY3RTcHJlYWQkNChfb2JqZWN0U3ByZWFkJDQoX29iamVjdFNwcmVhZCQ0KHt9LCBmb3JtYXRPcHRpb25zKSwgb3B0aW9ucyksIHZhbE9wdGlvbnMpKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMubG9nZ2VyLndhcm4oZXJyb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMubG9nZ2VyLndhcm4oXCJ0aGVyZSB3YXMgbm8gZm9ybWF0IGZ1bmN0aW9uIGZvciBcIi5jb25jYXQoZm9ybWF0TmFtZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lbTtcbiAgICAgIH0sIHZhbHVlKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZvcm1hdHRlcjtcbn0oKTtcblxuZnVuY3Rpb24gb3duS2V5cyQ1KG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCQ1KHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMkNShPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdFsnZGVmYXVsdCddKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMkNShPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyJDIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZl9fZGVmYXVsdFsnZGVmYXVsdCddKERlcml2ZWQpLCByZXN1bHQ7IGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7IHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2ZfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5fX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QkMigpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIHJlbW92ZVBlbmRpbmcocSwgbmFtZSkge1xuICBpZiAocS5wZW5kaW5nW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWxldGUgcS5wZW5kaW5nW25hbWVdO1xuICAgIHEucGVuZGluZ0NvdW50LS07XG4gIH1cbn1cblxudmFyIENvbm5lY3RvciA9IGZ1bmN0aW9uIChfRXZlbnRFbWl0dGVyKSB7XG4gIF9pbmhlcml0c19fZGVmYXVsdFsnZGVmYXVsdCddKENvbm5lY3RvciwgX0V2ZW50RW1pdHRlcik7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlciQyKENvbm5lY3Rvcik7XG5cbiAgZnVuY3Rpb24gQ29ubmVjdG9yKGJhY2tlbmQsIHN0b3JlLCBzZXJ2aWNlcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVja19fZGVmYXVsdFsnZGVmYXVsdCddKHRoaXMsIENvbm5lY3Rvcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKGlzSUUxMCkge1xuICAgICAgRXZlbnRFbWl0dGVyLmNhbGwoX2Fzc2VydFRoaXNJbml0aWFsaXplZF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzKSk7XG4gICAgfVxuXG4gICAgX3RoaXMuYmFja2VuZCA9IGJhY2tlbmQ7XG4gICAgX3RoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICBfdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzO1xuICAgIF90aGlzLmxhbmd1YWdlVXRpbHMgPSBzZXJ2aWNlcy5sYW5ndWFnZVV0aWxzO1xuICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIF90aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXIuY3JlYXRlKCdiYWNrZW5kQ29ubmVjdG9yJyk7XG4gICAgX3RoaXMud2FpdGluZ1JlYWRzID0gW107XG4gICAgX3RoaXMubWF4UGFyYWxsZWxSZWFkcyA9IG9wdGlvbnMubWF4UGFyYWxsZWxSZWFkcyB8fCAxMDtcbiAgICBfdGhpcy5yZWFkaW5nQ2FsbHMgPSAwO1xuICAgIF90aGlzLm1heFJldHJpZXMgPSBvcHRpb25zLm1heFJldHJpZXMgPj0gMCA/IG9wdGlvbnMubWF4UmV0cmllcyA6IDU7XG4gICAgX3RoaXMucmV0cnlUaW1lb3V0ID0gb3B0aW9ucy5yZXRyeVRpbWVvdXQgPj0gMSA/IG9wdGlvbnMucmV0cnlUaW1lb3V0IDogMzUwO1xuICAgIF90aGlzLnN0YXRlID0ge307XG4gICAgX3RoaXMucXVldWUgPSBbXTtcblxuICAgIGlmIChfdGhpcy5iYWNrZW5kICYmIF90aGlzLmJhY2tlbmQuaW5pdCkge1xuICAgICAgX3RoaXMuYmFja2VuZC5pbml0KHNlcnZpY2VzLCBvcHRpb25zLmJhY2tlbmQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKENvbm5lY3RvciwgW3tcbiAgICBrZXk6IFwicXVldWVMb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHF1ZXVlTG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHRvTG9hZCA9IHt9O1xuICAgICAgdmFyIHBlbmRpbmcgPSB7fTtcbiAgICAgIHZhciB0b0xvYWRMYW5ndWFnZXMgPSB7fTtcbiAgICAgIHZhciB0b0xvYWROYW1lc3BhY2VzID0ge307XG4gICAgICBsYW5ndWFnZXMuZm9yRWFjaChmdW5jdGlvbiAobG5nKSB7XG4gICAgICAgIHZhciBoYXNBbGxOYW1lc3BhY2VzID0gdHJ1ZTtcbiAgICAgICAgbmFtZXNwYWNlcy5mb3JFYWNoKGZ1bmN0aW9uIChucykge1xuICAgICAgICAgIHZhciBuYW1lID0gXCJcIi5jb25jYXQobG5nLCBcInxcIikuY29uY2F0KG5zKTtcblxuICAgICAgICAgIGlmICghb3B0aW9ucy5yZWxvYWQgJiYgX3RoaXMyLnN0b3JlLmhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpKSB7XG4gICAgICAgICAgICBfdGhpczIuc3RhdGVbbmFtZV0gPSAyO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMyLnN0YXRlW25hbWVdIDwgMCkgOyBlbHNlIGlmIChfdGhpczIuc3RhdGVbbmFtZV0gPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nW25hbWVdID09PSB1bmRlZmluZWQpIHBlbmRpbmdbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczIuc3RhdGVbbmFtZV0gPSAxO1xuICAgICAgICAgICAgaGFzQWxsTmFtZXNwYWNlcyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBlbmRpbmdbbmFtZV0gPT09IHVuZGVmaW5lZCkgcGVuZGluZ1tuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodG9Mb2FkW25hbWVdID09PSB1bmRlZmluZWQpIHRvTG9hZFtuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodG9Mb2FkTmFtZXNwYWNlc1tuc10gPT09IHVuZGVmaW5lZCkgdG9Mb2FkTmFtZXNwYWNlc1tuc10gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaGFzQWxsTmFtZXNwYWNlcykgdG9Mb2FkTGFuZ3VhZ2VzW2xuZ10gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyh0b0xvYWQpLmxlbmd0aCB8fCBPYmplY3Qua2V5cyhwZW5kaW5nKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKHtcbiAgICAgICAgICBwZW5kaW5nOiBwZW5kaW5nLFxuICAgICAgICAgIHBlbmRpbmdDb3VudDogT2JqZWN0LmtleXMocGVuZGluZykubGVuZ3RoLFxuICAgICAgICAgIGxvYWRlZDoge30sXG4gICAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvTG9hZDogT2JqZWN0LmtleXModG9Mb2FkKSxcbiAgICAgICAgcGVuZGluZzogT2JqZWN0LmtleXMocGVuZGluZyksXG4gICAgICAgIHRvTG9hZExhbmd1YWdlczogT2JqZWN0LmtleXModG9Mb2FkTGFuZ3VhZ2VzKSxcbiAgICAgICAgdG9Mb2FkTmFtZXNwYWNlczogT2JqZWN0LmtleXModG9Mb2FkTmFtZXNwYWNlcylcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkZWQobmFtZSwgZXJyLCBkYXRhKSB7XG4gICAgICB2YXIgcyA9IG5hbWUuc3BsaXQoJ3wnKTtcbiAgICAgIHZhciBsbmcgPSBzWzBdO1xuICAgICAgdmFyIG5zID0gc1sxXTtcbiAgICAgIGlmIChlcnIpIHRoaXMuZW1pdCgnZmFpbGVkTG9hZGluZycsIGxuZywgbnMsIGVycik7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuYWRkUmVzb3VyY2VCdW5kbGUobG5nLCBucywgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGVbbmFtZV0gPSBlcnIgPyAtMSA6IDI7XG4gICAgICB2YXIgbG9hZGVkID0ge307XG4gICAgICB0aGlzLnF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgcHVzaFBhdGgocS5sb2FkZWQsIFtsbmddLCBucyk7XG4gICAgICAgIHJlbW92ZVBlbmRpbmcocSwgbmFtZSk7XG4gICAgICAgIGlmIChlcnIpIHEuZXJyb3JzLnB1c2goZXJyKTtcblxuICAgICAgICBpZiAocS5wZW5kaW5nQ291bnQgPT09IDAgJiYgIXEuZG9uZSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHEubG9hZGVkKS5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICBpZiAoIWxvYWRlZFtsXSkgbG9hZGVkW2xdID0ge307XG4gICAgICAgICAgICB2YXIgbG9hZGVkS2V5cyA9IHEubG9hZGVkW2xdO1xuXG4gICAgICAgICAgICBpZiAobG9hZGVkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgbG9hZGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChucykge1xuICAgICAgICAgICAgICAgIGlmIChsb2FkZWRbbF1bbnNdID09PSB1bmRlZmluZWQpIGxvYWRlZFtsXVtuc10gPSB0cnVlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBxLmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHEuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgcS5jYWxsYmFjayhxLmVycm9ycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHEuY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KCdsb2FkZWQnLCBsb2FkZWQpO1xuICAgICAgdGhpcy5xdWV1ZSA9IHRoaXMucXVldWUuZmlsdGVyKGZ1bmN0aW9uIChxKSB7XG4gICAgICAgIHJldHVybiAhcS5kb25lO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZChsbmcsIG5zLCBmY05hbWUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgdHJpZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG4gICAgICB2YXIgd2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogdGhpcy5yZXRyeVRpbWVvdXQ7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmICghbG5nLmxlbmd0aCkgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHt9KTtcblxuICAgICAgaWYgKHRoaXMucmVhZGluZ0NhbGxzID49IHRoaXMubWF4UGFyYWxsZWxSZWFkcykge1xuICAgICAgICB0aGlzLndhaXRpbmdSZWFkcy5wdXNoKHtcbiAgICAgICAgICBsbmc6IGxuZyxcbiAgICAgICAgICBuczogbnMsXG4gICAgICAgICAgZmNOYW1lOiBmY05hbWUsXG4gICAgICAgICAgdHJpZWQ6IHRyaWVkLFxuICAgICAgICAgIHdhaXQ6IHdhaXQsXG4gICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVhZGluZ0NhbGxzKys7XG4gICAgICByZXR1cm4gdGhpcy5iYWNrZW5kW2ZjTmFtZV0obG5nLCBucywgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBfdGhpczMucmVhZGluZ0NhbGxzLS07XG5cbiAgICAgICAgaWYgKF90aGlzMy53YWl0aW5nUmVhZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBuZXh0ID0gX3RoaXMzLndhaXRpbmdSZWFkcy5zaGlmdCgpO1xuXG4gICAgICAgICAgX3RoaXMzLnJlYWQobmV4dC5sbmcsIG5leHQubnMsIG5leHQuZmNOYW1lLCBuZXh0LnRyaWVkLCBuZXh0LndhaXQsIG5leHQuY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyciAmJiBkYXRhICYmIHRyaWVkIDwgX3RoaXMzLm1heFJldHJpZXMpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMy5yZWFkLmNhbGwoX3RoaXMzLCBsbmcsIG5zLCBmY05hbWUsIHRyaWVkICsgMSwgd2FpdCAqIDIsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9LCB3YWl0KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhlcnIsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInByZXBhcmVMb2FkaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBhcmVMb2FkaW5nKGxhbmd1YWdlcywgbmFtZXNwYWNlcykge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoIXRoaXMuYmFja2VuZCkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKCdObyBiYWNrZW5kIHdhcyBhZGRlZCB2aWEgaTE4bmV4dC51c2UuIFdpbGwgbm90IGxvYWQgcmVzb3VyY2VzLicpO1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYW5ndWFnZXMgPT09ICdzdHJpbmcnKSBsYW5ndWFnZXMgPSB0aGlzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGxhbmd1YWdlcyk7XG4gICAgICBpZiAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnKSBuYW1lc3BhY2VzID0gW25hbWVzcGFjZXNdO1xuICAgICAgdmFyIHRvTG9hZCA9IHRoaXMucXVldWVMb2FkKGxhbmd1YWdlcywgbmFtZXNwYWNlcywgb3B0aW9ucywgY2FsbGJhY2spO1xuXG4gICAgICBpZiAoIXRvTG9hZC50b0xvYWQubGVuZ3RoKSB7XG4gICAgICAgIGlmICghdG9Mb2FkLnBlbmRpbmcubGVuZ3RoKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdG9Mb2FkLnRvTG9hZC5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIF90aGlzNC5sb2FkT25lKG5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnByZXBhcmVMb2FkaW5nKGxhbmd1YWdlcywgbmFtZXNwYWNlcywge30sIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbG9hZChsYW5ndWFnZXMsIG5hbWVzcGFjZXMsIGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLnByZXBhcmVMb2FkaW5nKGxhbmd1YWdlcywgbmFtZXNwYWNlcywge1xuICAgICAgICByZWxvYWQ6IHRydWVcbiAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZE9uZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkT25lKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJlZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgICAgIHZhciBzID0gbmFtZS5zcGxpdCgnfCcpO1xuICAgICAgdmFyIGxuZyA9IHNbMF07XG4gICAgICB2YXIgbnMgPSBzWzFdO1xuICAgICAgdGhpcy5yZWFkKGxuZywgbnMsICdyZWFkJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgaWYgKGVycikgX3RoaXM1LmxvZ2dlci53YXJuKFwiXCIuY29uY2F0KHByZWZpeCwgXCJsb2FkaW5nIG5hbWVzcGFjZSBcIikuY29uY2F0KG5zLCBcIiBmb3IgbGFuZ3VhZ2UgXCIpLmNvbmNhdChsbmcsIFwiIGZhaWxlZFwiKSwgZXJyKTtcbiAgICAgICAgaWYgKCFlcnIgJiYgZGF0YSkgX3RoaXM1LmxvZ2dlci5sb2coXCJcIi5jb25jYXQocHJlZml4LCBcImxvYWRlZCBuYW1lc3BhY2UgXCIpLmNvbmNhdChucywgXCIgZm9yIGxhbmd1YWdlIFwiKS5jb25jYXQobG5nKSwgZGF0YSk7XG5cbiAgICAgICAgX3RoaXM1LmxvYWRlZChuYW1lLCBlcnIsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNhdmVNaXNzaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhdmVNaXNzaW5nKGxhbmd1YWdlcywgbmFtZXNwYWNlLCBrZXksIGZhbGxiYWNrVmFsdWUsIGlzVXBkYXRlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ICYmIGFyZ3VtZW50c1s1XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzVdIDoge307XG5cbiAgICAgIGlmICh0aGlzLnNlcnZpY2VzLnV0aWxzICYmIHRoaXMuc2VydmljZXMudXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlICYmICF0aGlzLnNlcnZpY2VzLnV0aWxzLmhhc0xvYWRlZE5hbWVzcGFjZShuYW1lc3BhY2UpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oXCJkaWQgbm90IHNhdmUga2V5IFxcXCJcIi5jb25jYXQoa2V5LCBcIlxcXCIgYXMgdGhlIG5hbWVzcGFjZSBcXFwiXCIpLmNvbmNhdChuYW1lc3BhY2UsIFwiXFxcIiB3YXMgbm90IHlldCBsb2FkZWRcIiksICdUaGlzIG1lYW5zIHNvbWV0aGluZyBJUyBXUk9ORyBpbiB5b3VyIHNldHVwLiBZb3UgYWNjZXNzIHRoZSB0IGZ1bmN0aW9uIGJlZm9yZSBpMThuZXh0LmluaXQgLyBpMThuZXh0LmxvYWROYW1lc3BhY2UgLyBpMThuZXh0LmNoYW5nZUxhbmd1YWdlIHdhcyBkb25lLiBXYWl0IGZvciB0aGUgY2FsbGJhY2sgb3IgUHJvbWlzZSB0byByZXNvbHZlIGJlZm9yZSBhY2Nlc3NpbmcgaXQhISEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IGtleSA9PT0gJycpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuYmFja2VuZCAmJiB0aGlzLmJhY2tlbmQuY3JlYXRlKSB7XG4gICAgICAgIHRoaXMuYmFja2VuZC5jcmVhdGUobGFuZ3VhZ2VzLCBuYW1lc3BhY2UsIGtleSwgZmFsbGJhY2tWYWx1ZSwgbnVsbCwgX29iamVjdFNwcmVhZCQ1KF9vYmplY3RTcHJlYWQkNSh7fSwgb3B0aW9ucyksIHt9LCB7XG4gICAgICAgICAgaXNVcGRhdGU6IGlzVXBkYXRlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsYW5ndWFnZXMgfHwgIWxhbmd1YWdlc1swXSkgcmV0dXJuO1xuICAgICAgdGhpcy5zdG9yZS5hZGRSZXNvdXJjZShsYW5ndWFnZXNbMF0sIG5hbWVzcGFjZSwga2V5LCBmYWxsYmFja1ZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29ubmVjdG9yO1xufShFdmVudEVtaXR0ZXIpO1xuXG5mdW5jdGlvbiBnZXQoKSB7XG4gIHJldHVybiB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGluaXRJbW1lZGlhdGU6IHRydWUsXG4gICAgbnM6IFsndHJhbnNsYXRpb24nXSxcbiAgICBkZWZhdWx0TlM6IFsndHJhbnNsYXRpb24nXSxcbiAgICBmYWxsYmFja0xuZzogWydkZXYnXSxcbiAgICBmYWxsYmFja05TOiBmYWxzZSxcbiAgICBzdXBwb3J0ZWRMbmdzOiBmYWxzZSxcbiAgICBub25FeHBsaWNpdFN1cHBvcnRlZExuZ3M6IGZhbHNlLFxuICAgIGxvYWQ6ICdhbGwnLFxuICAgIHByZWxvYWQ6IGZhbHNlLFxuICAgIHNpbXBsaWZ5UGx1cmFsU3VmZml4OiB0cnVlLFxuICAgIGtleVNlcGFyYXRvcjogJy4nLFxuICAgIG5zU2VwYXJhdG9yOiAnOicsXG4gICAgcGx1cmFsU2VwYXJhdG9yOiAnXycsXG4gICAgY29udGV4dFNlcGFyYXRvcjogJ18nLFxuICAgIHBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzOiBmYWxzZSxcbiAgICBzYXZlTWlzc2luZzogZmFsc2UsXG4gICAgdXBkYXRlTWlzc2luZzogZmFsc2UsXG4gICAgc2F2ZU1pc3NpbmdUbzogJ2ZhbGxiYWNrJyxcbiAgICBzYXZlTWlzc2luZ1BsdXJhbHM6IHRydWUsXG4gICAgbWlzc2luZ0tleUhhbmRsZXI6IGZhbHNlLFxuICAgIG1pc3NpbmdJbnRlcnBvbGF0aW9uSGFuZGxlcjogZmFsc2UsXG4gICAgcG9zdFByb2Nlc3M6IGZhbHNlLFxuICAgIHBvc3RQcm9jZXNzUGFzc1Jlc29sdmVkOiBmYWxzZSxcbiAgICByZXR1cm5OdWxsOiB0cnVlLFxuICAgIHJldHVybkVtcHR5U3RyaW5nOiB0cnVlLFxuICAgIHJldHVybk9iamVjdHM6IGZhbHNlLFxuICAgIGpvaW5BcnJheXM6IGZhbHNlLFxuICAgIHJldHVybmVkT2JqZWN0SGFuZGxlcjogZmFsc2UsXG4gICAgcGFyc2VNaXNzaW5nS2V5SGFuZGxlcjogZmFsc2UsXG4gICAgYXBwZW5kTmFtZXNwYWNlVG9NaXNzaW5nS2V5OiBmYWxzZSxcbiAgICBhcHBlbmROYW1lc3BhY2VUb0NJTW9kZTogZmFsc2UsXG4gICAgb3ZlcmxvYWRUcmFuc2xhdGlvbk9wdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZShhcmdzKSB7XG4gICAgICB2YXIgcmV0ID0ge307XG4gICAgICBpZiAoX3R5cGVvZl9fZGVmYXVsdFsnZGVmYXVsdCddKGFyZ3NbMV0pID09PSAnb2JqZWN0JykgcmV0ID0gYXJnc1sxXTtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3N0cmluZycpIHJldC5kZWZhdWx0VmFsdWUgPSBhcmdzWzFdO1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzJdID09PSAnc3RyaW5nJykgcmV0LnREZXNjcmlwdGlvbiA9IGFyZ3NbMl07XG5cbiAgICAgIGlmIChfdHlwZW9mX19kZWZhdWx0WydkZWZhdWx0J10oYXJnc1syXSkgPT09ICdvYmplY3QnIHx8IF90eXBlb2ZfX2RlZmF1bHRbJ2RlZmF1bHQnXShhcmdzWzNdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzWzNdIHx8IGFyZ3NbMl07XG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHJldFtrZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGludGVycG9sYXRpb246IHtcbiAgICAgIGVzY2FwZVZhbHVlOiB0cnVlLFxuICAgICAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIF9mb3JtYXQsIGxuZywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9LFxuICAgICAgcHJlZml4OiAne3snLFxuICAgICAgc3VmZml4OiAnfX0nLFxuICAgICAgZm9ybWF0U2VwYXJhdG9yOiAnLCcsXG4gICAgICB1bmVzY2FwZVByZWZpeDogJy0nLFxuICAgICAgbmVzdGluZ1ByZWZpeDogJyR0KCcsXG4gICAgICBuZXN0aW5nU3VmZml4OiAnKScsXG4gICAgICBuZXN0aW5nT3B0aW9uc1NlcGFyYXRvcjogJywnLFxuICAgICAgbWF4UmVwbGFjZXM6IDEwMDAsXG4gICAgICBza2lwT25WYXJpYWJsZXM6IHRydWVcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLm5zID09PSAnc3RyaW5nJykgb3B0aW9ucy5ucyA9IFtvcHRpb25zLm5zXTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmZhbGxiYWNrTG5nID09PSAnc3RyaW5nJykgb3B0aW9ucy5mYWxsYmFja0xuZyA9IFtvcHRpb25zLmZhbGxiYWNrTG5nXTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmZhbGxiYWNrTlMgPT09ICdzdHJpbmcnKSBvcHRpb25zLmZhbGxiYWNrTlMgPSBbb3B0aW9ucy5mYWxsYmFja05TXTtcblxuICBpZiAob3B0aW9ucy5zdXBwb3J0ZWRMbmdzICYmIG9wdGlvbnMuc3VwcG9ydGVkTG5ncy5pbmRleE9mKCdjaW1vZGUnKSA8IDApIHtcbiAgICBvcHRpb25zLnN1cHBvcnRlZExuZ3MgPSBvcHRpb25zLnN1cHBvcnRlZExuZ3MuY29uY2F0KFsnY2ltb2RlJ10pO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG93bktleXMkNihvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkNih0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzJDYoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHlfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzJDYoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlciQzKERlcml2ZWQpIHsgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDMoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2ZfX2RlZmF1bHRbJ2RlZmF1bHQnXShEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mX19kZWZhdWx0WydkZWZhdWx0J10odGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuX19kZWZhdWx0WydkZWZhdWx0J10odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0JDMoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYmluZE1lbWJlckZ1bmN0aW9ucyhpbnN0KSB7XG4gIHZhciBtZW1zID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3QpKTtcbiAgbWVtcy5mb3JFYWNoKGZ1bmN0aW9uIChtZW0pIHtcbiAgICBpZiAodHlwZW9mIGluc3RbbWVtXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5zdFttZW1dID0gaW5zdFttZW1dLmJpbmQoaW5zdCk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIEkxOG4gPSBmdW5jdGlvbiAoX0V2ZW50RW1pdHRlcikge1xuICBfaW5oZXJpdHNfX2RlZmF1bHRbJ2RlZmF1bHQnXShJMThuLCBfRXZlbnRFbWl0dGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyJDMoSTE4bik7XG5cbiAgZnVuY3Rpb24gSTE4bigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHRbJ2RlZmF1bHQnXSh0aGlzLCBJMThuKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcyk7XG5cbiAgICBpZiAoaXNJRTEwKSB7XG4gICAgICBFdmVudEVtaXR0ZXIuY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMpKTtcbiAgICB9XG5cbiAgICBfdGhpcy5vcHRpb25zID0gdHJhbnNmb3JtT3B0aW9ucyhvcHRpb25zKTtcbiAgICBfdGhpcy5zZXJ2aWNlcyA9IHt9O1xuICAgIF90aGlzLmxvZ2dlciA9IGJhc2VMb2dnZXI7XG4gICAgX3RoaXMubW9kdWxlcyA9IHtcbiAgICAgIGV4dGVybmFsOiBbXVxuICAgIH07XG4gICAgYmluZE1lbWJlckZ1bmN0aW9ucyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkX19kZWZhdWx0WydkZWZhdWx0J10oX3RoaXMpKTtcblxuICAgIGlmIChjYWxsYmFjayAmJiAhX3RoaXMuaXNJbml0aWFsaXplZCAmJiAhb3B0aW9ucy5pc0Nsb25lKSB7XG4gICAgICBpZiAoIV90aGlzLm9wdGlvbnMuaW5pdEltbWVkaWF0ZSkge1xuICAgICAgICBfdGhpcy5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5fX2RlZmF1bHRbJ2RlZmF1bHQnXShfdGhpcywgX2Fzc2VydFRoaXNJbml0aWFsaXplZF9fZGVmYXVsdFsnZGVmYXVsdCddKF90aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKEkxOG4sIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMuZGVmYXVsdE5TICYmIG9wdGlvbnMuZGVmYXVsdE5TICE9PSBmYWxzZSAmJiBvcHRpb25zLm5zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBvcHRpb25zLmRlZmF1bHROUyA9IG9wdGlvbnMubnM7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5ucy5pbmRleE9mKCd0cmFuc2xhdGlvbicpIDwgMCkge1xuICAgICAgICAgIG9wdGlvbnMuZGVmYXVsdE5TID0gb3B0aW9ucy5uc1swXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZGVmT3B0cyA9IGdldCgpO1xuICAgICAgdGhpcy5vcHRpb25zID0gX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNihfb2JqZWN0U3ByZWFkJDYoe30sIGRlZk9wdHMpLCB0aGlzLm9wdGlvbnMpLCB0cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXRpYmlsaXR5QVBJICE9PSAndjEnKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uID0gX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNih7fSwgZGVmT3B0cy5pbnRlcnBvbGF0aW9uKSwgdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5rZXlTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudXNlckRlZmluZWRLZXlTZXBhcmF0b3IgPSBvcHRpb25zLmtleVNlcGFyYXRvcjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMubnNTZXBhcmF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudXNlckRlZmluZWROc1NlcGFyYXRvciA9IG9wdGlvbnMubnNTZXBhcmF0b3I7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNsYXNzT25EZW1hbmQoQ2xhc3NPck9iamVjdCkge1xuICAgICAgICBpZiAoIUNsYXNzT3JPYmplY3QpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIENsYXNzT3JPYmplY3QgPT09ICdmdW5jdGlvbicpIHJldHVybiBuZXcgQ2xhc3NPck9iamVjdCgpO1xuICAgICAgICByZXR1cm4gQ2xhc3NPck9iamVjdDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuaXNDbG9uZSkge1xuICAgICAgICBpZiAodGhpcy5tb2R1bGVzLmxvZ2dlcikge1xuICAgICAgICAgIGJhc2VMb2dnZXIuaW5pdChjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5sb2dnZXIpLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhc2VMb2dnZXIuaW5pdChudWxsLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZvcm1hdHRlcjtcblxuICAgICAgICBpZiAodGhpcy5tb2R1bGVzLmZvcm1hdHRlcikge1xuICAgICAgICAgIGZvcm1hdHRlciA9IHRoaXMubW9kdWxlcy5mb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgZm9ybWF0dGVyID0gRm9ybWF0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGx1ID0gbmV3IExhbmd1YWdlVXRpbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0b3JlID0gbmV3IFJlc291cmNlU3RvcmUodGhpcy5vcHRpb25zLnJlc291cmNlcywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgdmFyIHMgPSB0aGlzLnNlcnZpY2VzO1xuICAgICAgICBzLmxvZ2dlciA9IGJhc2VMb2dnZXI7XG4gICAgICAgIHMucmVzb3VyY2VTdG9yZSA9IHRoaXMuc3RvcmU7XG4gICAgICAgIHMubGFuZ3VhZ2VVdGlscyA9IGx1O1xuICAgICAgICBzLnBsdXJhbFJlc29sdmVyID0gbmV3IFBsdXJhbFJlc29sdmVyKGx1LCB7XG4gICAgICAgICAgcHJlcGVuZDogdGhpcy5vcHRpb25zLnBsdXJhbFNlcGFyYXRvcixcbiAgICAgICAgICBjb21wYXRpYmlsaXR5SlNPTjogdGhpcy5vcHRpb25zLmNvbXBhdGliaWxpdHlKU09OLFxuICAgICAgICAgIHNpbXBsaWZ5UGx1cmFsU3VmZml4OiB0aGlzLm9wdGlvbnMuc2ltcGxpZnlQbHVyYWxTdWZmaXhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZvcm1hdHRlciAmJiAoIXRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCB8fCB0aGlzLm9wdGlvbnMuaW50ZXJwb2xhdGlvbi5mb3JtYXQgPT09IGRlZk9wdHMuaW50ZXJwb2xhdGlvbi5mb3JtYXQpKSB7XG4gICAgICAgICAgcy5mb3JtYXR0ZXIgPSBjcmVhdGVDbGFzc09uRGVtYW5kKGZvcm1hdHRlcik7XG4gICAgICAgICAgcy5mb3JtYXR0ZXIuaW5pdChzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcnBvbGF0aW9uLmZvcm1hdCA9IHMuZm9ybWF0dGVyLmZvcm1hdC5iaW5kKHMuZm9ybWF0dGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHMuaW50ZXJwb2xhdG9yID0gbmV3IEludGVycG9sYXRvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICBzLnV0aWxzID0ge1xuICAgICAgICAgIGhhc0xvYWRlZE5hbWVzcGFjZTogdGhpcy5oYXNMb2FkZWROYW1lc3BhY2UuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgICAgICBzLmJhY2tlbmRDb25uZWN0b3IgPSBuZXcgQ29ubmVjdG9yKGNyZWF0ZUNsYXNzT25EZW1hbmQodGhpcy5tb2R1bGVzLmJhY2tlbmQpLCBzLnJlc291cmNlU3RvcmUsIHMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHMuYmFja2VuZENvbm5lY3Rvci5vbignKicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5lbWl0LmFwcGx5KF90aGlzMiwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IpIHtcbiAgICAgICAgICBzLmxhbmd1YWdlRGV0ZWN0b3IgPSBjcmVhdGVDbGFzc09uRGVtYW5kKHRoaXMubW9kdWxlcy5sYW5ndWFnZURldGVjdG9yKTtcbiAgICAgICAgICBzLmxhbmd1YWdlRGV0ZWN0b3IuaW5pdChzLCB0aGlzLm9wdGlvbnMuZGV0ZWN0aW9uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubW9kdWxlcy5pMThuRm9ybWF0KSB7XG4gICAgICAgICAgcy5pMThuRm9ybWF0ID0gY3JlYXRlQ2xhc3NPbkRlbWFuZCh0aGlzLm1vZHVsZXMuaTE4bkZvcm1hdCk7XG4gICAgICAgICAgaWYgKHMuaTE4bkZvcm1hdC5pbml0KSBzLmkxOG5Gb3JtYXQuaW5pdCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IG5ldyBUcmFuc2xhdG9yKHRoaXMuc2VydmljZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvci5vbignKicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5lbWl0LmFwcGx5KF90aGlzMiwgW2V2ZW50XS5jb25jYXQoYXJncykpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICBpZiAobS5pbml0KSBtLmluaXQoX3RoaXMyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5vcHRpb25zLmludGVycG9sYXRpb24uZm9ybWF0O1xuICAgICAgaWYgKCFjYWxsYmFjaykgY2FsbGJhY2sgPSBub29wO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nICYmICF0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IgJiYgIXRoaXMub3B0aW9ucy5sbmcpIHtcbiAgICAgICAgdmFyIGNvZGVzID0gdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZVV0aWxzLmdldEZhbGxiYWNrQ29kZXModGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nKTtcbiAgICAgICAgaWYgKGNvZGVzLmxlbmd0aCA+IDAgJiYgY29kZXNbMF0gIT09ICdkZXYnKSB0aGlzLm9wdGlvbnMubG5nID0gY29kZXNbMF07XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yICYmICF0aGlzLm9wdGlvbnMubG5nKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ2luaXQ6IG5vIGxhbmd1YWdlRGV0ZWN0b3IgaXMgdXNlZCBhbmQgbm8gbG5nIGlzIGRlZmluZWQnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0b3JlQXBpID0gWydnZXRSZXNvdXJjZScsICdoYXNSZXNvdXJjZUJ1bmRsZScsICdnZXRSZXNvdXJjZUJ1bmRsZScsICdnZXREYXRhQnlMYW5ndWFnZSddO1xuICAgICAgc3RvcmVBcGkuZm9yRWFjaChmdW5jdGlvbiAoZmNOYW1lKSB7XG4gICAgICAgIF90aGlzMltmY05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfdGhpczIkc3RvcmU7XG5cbiAgICAgICAgICByZXR1cm4gKF90aGlzMiRzdG9yZSA9IF90aGlzMi5zdG9yZSlbZmNOYW1lXS5hcHBseShfdGhpczIkc3RvcmUsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHZhciBzdG9yZUFwaUNoYWluZWQgPSBbJ2FkZFJlc291cmNlJywgJ2FkZFJlc291cmNlcycsICdhZGRSZXNvdXJjZUJ1bmRsZScsICdyZW1vdmVSZXNvdXJjZUJ1bmRsZSddO1xuICAgICAgc3RvcmVBcGlDaGFpbmVkLmZvckVhY2goZnVuY3Rpb24gKGZjTmFtZSkge1xuICAgICAgICBfdGhpczJbZmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyJHN0b3JlMjtcblxuICAgICAgICAgIChfdGhpczIkc3RvcmUyID0gX3RoaXMyLnN0b3JlKVtmY05hbWVdLmFwcGx5KF90aGlzMiRzdG9yZTIsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICByZXR1cm4gX3RoaXMyO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB2YXIgZGVmZXJyZWQgPSBkZWZlcigpO1xuXG4gICAgICB2YXIgbG9hZCA9IGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIHZhciBmaW5pc2ggPSBmdW5jdGlvbiBmaW5pc2goZXJyLCB0KSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5pc0luaXRpYWxpemVkICYmICFfdGhpczIuaW5pdGlhbGl6ZWRTdG9yZU9uY2UpIF90aGlzMi5sb2dnZXIud2FybignaW5pdDogaTE4bmV4dCBpcyBhbHJlYWR5IGluaXRpYWxpemVkLiBZb3Ugc2hvdWxkIGNhbGwgaW5pdCBqdXN0IG9uY2UhJyk7XG4gICAgICAgICAgX3RoaXMyLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICghX3RoaXMyLm9wdGlvbnMuaXNDbG9uZSkgX3RoaXMyLmxvZ2dlci5sb2coJ2luaXRpYWxpemVkJywgX3RoaXMyLm9wdGlvbnMpO1xuXG4gICAgICAgICAgX3RoaXMyLmVtaXQoJ2luaXRpYWxpemVkJywgX3RoaXMyLm9wdGlvbnMpO1xuXG4gICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh0KTtcbiAgICAgICAgICBjYWxsYmFjayhlcnIsIHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfdGhpczIubGFuZ3VhZ2VzICYmIF90aGlzMi5vcHRpb25zLmNvbXBhdGliaWxpdHlBUEkgIT09ICd2MScgJiYgIV90aGlzMi5pc0luaXRpYWxpemVkKSByZXR1cm4gZmluaXNoKG51bGwsIF90aGlzMi50LmJpbmQoX3RoaXMyKSk7XG5cbiAgICAgICAgX3RoaXMyLmNoYW5nZUxhbmd1YWdlKF90aGlzMi5vcHRpb25zLmxuZywgZmluaXNoKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVzb3VyY2VzIHx8ICF0aGlzLm9wdGlvbnMuaW5pdEltbWVkaWF0ZSkge1xuICAgICAgICBsb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGxvYWQsIDApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRSZXNvdXJjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZFJlc291cmNlcyhsYW5ndWFnZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcbiAgICAgIHZhciB1c2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgIHZhciB1c2VkTG5nID0gdHlwZW9mIGxhbmd1YWdlID09PSAnc3RyaW5nJyA/IGxhbmd1YWdlIDogdGhpcy5sYW5ndWFnZTtcbiAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2UgPT09ICdmdW5jdGlvbicpIHVzZWRDYWxsYmFjayA9IGxhbmd1YWdlO1xuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZXNvdXJjZXMgfHwgdGhpcy5vcHRpb25zLnBhcnRpYWxCdW5kbGVkTGFuZ3VhZ2VzKSB7XG4gICAgICAgIGlmICh1c2VkTG5nICYmIHVzZWRMbmcudG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHJldHVybiB1c2VkQ2FsbGJhY2soKTtcbiAgICAgICAgdmFyIHRvTG9hZCA9IFtdO1xuXG4gICAgICAgIHZhciBhcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobG5nKSB7XG4gICAgICAgICAgaWYgKCFsbmcpIHJldHVybjtcblxuICAgICAgICAgIHZhciBsbmdzID0gX3RoaXMzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMudG9SZXNvbHZlSGllcmFyY2h5KGxuZyk7XG5cbiAgICAgICAgICBsbmdzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIGlmICh0b0xvYWQuaW5kZXhPZihsKSA8IDApIHRvTG9hZC5wdXNoKGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdXNlZExuZykge1xuICAgICAgICAgIHZhciBmYWxsYmFja3MgPSB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0RmFsbGJhY2tDb2Rlcyh0aGlzLm9wdGlvbnMuZmFsbGJhY2tMbmcpO1xuICAgICAgICAgIGZhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwZW5kKGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFwcGVuZCh1c2VkTG5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJlbG9hZCkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5wcmVsb2FkLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBlbmQobCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IubG9hZCh0b0xvYWQsIHRoaXMub3B0aW9ucy5ucywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoIWUgJiYgIV90aGlzMy5yZXNvbHZlZExhbmd1YWdlICYmIF90aGlzMy5sYW5ndWFnZSkgX3RoaXMzLnNldFJlc29sdmVkTGFuZ3VhZ2UoX3RoaXMzLmxhbmd1YWdlKTtcbiAgICAgICAgICB1c2VkQ2FsbGJhY2soZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXNlZENhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZWxvYWRSZXNvdXJjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkUmVzb3VyY2VzKGxuZ3MsIG5zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgIGlmICghbG5ncykgbG5ncyA9IHRoaXMubGFuZ3VhZ2VzO1xuICAgICAgaWYgKCFucykgbnMgPSB0aGlzLm9wdGlvbnMubnM7XG4gICAgICBpZiAoIWNhbGxiYWNrKSBjYWxsYmFjayA9IG5vb3A7XG4gICAgICB0aGlzLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IucmVsb2FkKGxuZ3MsIG5zLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlZmVycmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1c2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXNlKG1vZHVsZSkge1xuICAgICAgaWYgKCFtb2R1bGUpIHRocm93IG5ldyBFcnJvcignWW91IGFyZSBwYXNzaW5nIGFuIHVuZGVmaW5lZCBtb2R1bGUhIFBsZWFzZSBjaGVjayB0aGUgb2JqZWN0IHlvdSBhcmUgcGFzc2luZyB0byBpMThuZXh0LnVzZSgpJyk7XG4gICAgICBpZiAoIW1vZHVsZS50eXBlKSB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhcmUgcGFzc2luZyBhIHdyb25nIG1vZHVsZSEgUGxlYXNlIGNoZWNrIHRoZSBvYmplY3QgeW91IGFyZSBwYXNzaW5nIHRvIGkxOG5leHQudXNlKCknKTtcblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnYmFja2VuZCcpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmJhY2tlbmQgPSBtb2R1bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2xvZ2dlcicgfHwgbW9kdWxlLmxvZyAmJiBtb2R1bGUud2FybiAmJiBtb2R1bGUuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmxvZ2dlciA9IG1vZHVsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnbGFuZ3VhZ2VEZXRlY3RvcicpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmxhbmd1YWdlRGV0ZWN0b3IgPSBtb2R1bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb2R1bGUudHlwZSA9PT0gJ2kxOG5Gb3JtYXQnKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcy5pMThuRm9ybWF0ID0gbW9kdWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kdWxlLnR5cGUgPT09ICdwb3N0UHJvY2Vzc29yJykge1xuICAgICAgICBwb3N0UHJvY2Vzc29yLmFkZFBvc3RQcm9jZXNzb3IobW9kdWxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1vZHVsZS50eXBlID09PSAnZm9ybWF0dGVyJykge1xuICAgICAgICB0aGlzLm1vZHVsZXMuZm9ybWF0dGVyID0gbW9kdWxlO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kdWxlLnR5cGUgPT09ICczcmRQYXJ0eScpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLmV4dGVybmFsLnB1c2gobW9kdWxlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFJlc29sdmVkTGFuZ3VhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmVzb2x2ZWRMYW5ndWFnZShsKSB7XG4gICAgICBpZiAoIWwgfHwgIXRoaXMubGFuZ3VhZ2VzKSByZXR1cm47XG4gICAgICBpZiAoWydjaW1vZGUnLCAnZGV2J10uaW5kZXhPZihsKSA+IC0xKSByZXR1cm47XG5cbiAgICAgIGZvciAodmFyIGxpID0gMDsgbGkgPCB0aGlzLmxhbmd1YWdlcy5sZW5ndGg7IGxpKyspIHtcbiAgICAgICAgdmFyIGxuZ0luTG5ncyA9IHRoaXMubGFuZ3VhZ2VzW2xpXTtcbiAgICAgICAgaWYgKFsnY2ltb2RlJywgJ2RldiddLmluZGV4T2YobG5nSW5MbmdzKSA+IC0xKSBjb250aW51ZTtcblxuICAgICAgICBpZiAodGhpcy5zdG9yZS5oYXNMYW5ndWFnZVNvbWVUcmFuc2xhdGlvbnMobG5nSW5MbmdzKSkge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWRMYW5ndWFnZSA9IGxuZ0luTG5ncztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGFuZ2VMYW5ndWFnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VMYW5ndWFnZShsbmcsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdGhpcy5pc0xhbmd1YWdlQ2hhbmdpbmdUbyA9IGxuZztcbiAgICAgIHZhciBkZWZlcnJlZCA9IGRlZmVyKCk7XG4gICAgICB0aGlzLmVtaXQoJ2xhbmd1YWdlQ2hhbmdpbmcnLCBsbmcpO1xuXG4gICAgICB2YXIgc2V0TG5nUHJvcHMgPSBmdW5jdGlvbiBzZXRMbmdQcm9wcyhsKSB7XG4gICAgICAgIF90aGlzNC5sYW5ndWFnZSA9IGw7XG4gICAgICAgIF90aGlzNC5sYW5ndWFnZXMgPSBfdGhpczQuc2VydmljZXMubGFuZ3VhZ2VVdGlscy50b1Jlc29sdmVIaWVyYXJjaHkobCk7XG4gICAgICAgIF90aGlzNC5yZXNvbHZlZExhbmd1YWdlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIF90aGlzNC5zZXRSZXNvbHZlZExhbmd1YWdlKGwpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKGVyciwgbCkge1xuICAgICAgICBpZiAobCkge1xuICAgICAgICAgIHNldExuZ1Byb3BzKGwpO1xuXG4gICAgICAgICAgX3RoaXM0LnRyYW5zbGF0b3IuY2hhbmdlTGFuZ3VhZ2UobCk7XG5cbiAgICAgICAgICBfdGhpczQuaXNMYW5ndWFnZUNoYW5naW5nVG8gPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBfdGhpczQuZW1pdCgnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG5cbiAgICAgICAgICBfdGhpczQubG9nZ2VyLmxvZygnbGFuZ3VhZ2VDaGFuZ2VkJywgbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM0LmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC50LmFwcGx5KF90aGlzNCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soZXJyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC50LmFwcGx5KF90aGlzNCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgc2V0TG5nID0gZnVuY3Rpb24gc2V0TG5nKGxuZ3MpIHtcbiAgICAgICAgaWYgKCFsbmcgJiYgIWxuZ3MgJiYgX3RoaXM0LnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IpIGxuZ3MgPSBbXTtcbiAgICAgICAgdmFyIGwgPSB0eXBlb2YgbG5ncyA9PT0gJ3N0cmluZycgPyBsbmdzIDogX3RoaXM0LnNlcnZpY2VzLmxhbmd1YWdlVXRpbHMuZ2V0QmVzdE1hdGNoRnJvbUNvZGVzKGxuZ3MpO1xuXG4gICAgICAgIGlmIChsKSB7XG4gICAgICAgICAgaWYgKCFfdGhpczQubGFuZ3VhZ2UpIHtcbiAgICAgICAgICAgIHNldExuZ1Byb3BzKGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghX3RoaXM0LnRyYW5zbGF0b3IubGFuZ3VhZ2UpIF90aGlzNC50cmFuc2xhdG9yLmNoYW5nZUxhbmd1YWdlKGwpO1xuICAgICAgICAgIGlmIChfdGhpczQuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvcikgX3RoaXM0LnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuY2FjaGVVc2VyTGFuZ3VhZ2UobCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczQubG9hZFJlc291cmNlcyhsLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgZG9uZShlcnIsIGwpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiAhdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmFzeW5jKSB7XG4gICAgICAgIHNldExuZyh0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuZGV0ZWN0KCkpO1xuICAgICAgfSBlbHNlIGlmICghbG5nICYmIHRoaXMuc2VydmljZXMubGFuZ3VhZ2VEZXRlY3RvciAmJiB0aGlzLnNlcnZpY2VzLmxhbmd1YWdlRGV0ZWN0b3IuYXN5bmMpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlcy5sYW5ndWFnZURldGVjdG9yLmRldGVjdChzZXRMbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TG5nKGxuZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Rml4ZWRUXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpeGVkVChsbmcsIG5zLCBrZXlQcmVmaXgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB2YXIgZml4ZWRUID0gZnVuY3Rpb24gZml4ZWRUKGtleSwgb3B0cykge1xuICAgICAgICB2YXIgb3B0aW9ucztcblxuICAgICAgICBpZiAoX3R5cGVvZl9fZGVmYXVsdFsnZGVmYXVsdCddKG9wdHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IG5ldyBBcnJheShfbGVuMyA+IDIgPyBfbGVuMyAtIDIgOiAwKSwgX2tleTMgPSAyOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgICAgICByZXN0W19rZXkzIC0gMl0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9wdGlvbnMgPSBfdGhpczUub3B0aW9ucy5vdmVybG9hZFRyYW5zbGF0aW9uT3B0aW9uSGFuZGxlcihba2V5LCBvcHRzXS5jb25jYXQocmVzdCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkJDYoe30sIG9wdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy5sbmcgPSBvcHRpb25zLmxuZyB8fCBmaXhlZFQubG5nO1xuICAgICAgICBvcHRpb25zLmxuZ3MgPSBvcHRpb25zLmxuZ3MgfHwgZml4ZWRULmxuZ3M7XG4gICAgICAgIG9wdGlvbnMubnMgPSBvcHRpb25zLm5zIHx8IGZpeGVkVC5ucztcbiAgICAgICAgb3B0aW9ucy5rZXlQcmVmaXggPSBvcHRpb25zLmtleVByZWZpeCB8fCBrZXlQcmVmaXggfHwgZml4ZWRULmtleVByZWZpeDtcbiAgICAgICAgdmFyIGtleVNlcGFyYXRvciA9IF90aGlzNS5vcHRpb25zLmtleVNlcGFyYXRvciB8fCAnLic7XG4gICAgICAgIHZhciByZXN1bHRLZXkgPSBvcHRpb25zLmtleVByZWZpeCA/IFwiXCIuY29uY2F0KG9wdGlvbnMua2V5UHJlZml4KS5jb25jYXQoa2V5U2VwYXJhdG9yKS5jb25jYXQoa2V5KSA6IGtleTtcbiAgICAgICAgcmV0dXJuIF90aGlzNS50KHJlc3VsdEtleSwgb3B0aW9ucyk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIGxuZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZml4ZWRULmxuZyA9IGxuZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpeGVkVC5sbmdzID0gbG5nO1xuICAgICAgfVxuXG4gICAgICBmaXhlZFQubnMgPSBucztcbiAgICAgIGZpeGVkVC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgICByZXR1cm4gZml4ZWRUO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHQoKSB7XG4gICAgICB2YXIgX3RoaXMkdHJhbnNsYXRvcjtcblxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRvciAmJiAoX3RoaXMkdHJhbnNsYXRvciA9IHRoaXMudHJhbnNsYXRvcikudHJhbnNsYXRlLmFwcGx5KF90aGlzJHRyYW5zbGF0b3IsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4aXN0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleGlzdHMoKSB7XG4gICAgICB2YXIgX3RoaXMkdHJhbnNsYXRvcjI7XG5cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0b3IgJiYgKF90aGlzJHRyYW5zbGF0b3IyID0gdGhpcy50cmFuc2xhdG9yKS5leGlzdHMuYXBwbHkoX3RoaXMkdHJhbnNsYXRvcjIsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldERlZmF1bHROYW1lc3BhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGVmYXVsdE5hbWVzcGFjZShucykge1xuICAgICAgdGhpcy5vcHRpb25zLmRlZmF1bHROUyA9IG5zO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJoYXNMb2FkZWROYW1lc3BhY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzTG9hZGVkTmFtZXNwYWNlKG5zKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKCdoYXNMb2FkZWROYW1lc3BhY2U6IGkxOG5leHQgd2FzIG5vdCBpbml0aWFsaXplZCcsIHRoaXMubGFuZ3VhZ2VzKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubGFuZ3VhZ2VzIHx8ICF0aGlzLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIud2FybignaGFzTG9hZGVkTmFtZXNwYWNlOiBpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eScsIHRoaXMubGFuZ3VhZ2VzKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbG5nID0gdGhpcy5yZXNvbHZlZExhbmd1YWdlIHx8IHRoaXMubGFuZ3VhZ2VzWzBdO1xuICAgICAgdmFyIGZhbGxiYWNrTG5nID0gdGhpcy5vcHRpb25zID8gdGhpcy5vcHRpb25zLmZhbGxiYWNrTG5nIDogZmFsc2U7XG4gICAgICB2YXIgbGFzdExuZyA9IHRoaXMubGFuZ3VhZ2VzW3RoaXMubGFuZ3VhZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGxuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuIHRydWU7XG5cbiAgICAgIHZhciBsb2FkTm90UGVuZGluZyA9IGZ1bmN0aW9uIGxvYWROb3RQZW5kaW5nKGwsIG4pIHtcbiAgICAgICAgdmFyIGxvYWRTdGF0ZSA9IF90aGlzNi5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLnN0YXRlW1wiXCIuY29uY2F0KGwsIFwifFwiKS5jb25jYXQobildO1xuXG4gICAgICAgIHJldHVybiBsb2FkU3RhdGUgPT09IC0xIHx8IGxvYWRTdGF0ZSA9PT0gMjtcbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRpb25zLnByZWNoZWNrKSB7XG4gICAgICAgIHZhciBwcmVSZXN1bHQgPSBvcHRpb25zLnByZWNoZWNrKHRoaXMsIGxvYWROb3RQZW5kaW5nKTtcbiAgICAgICAgaWYgKHByZVJlc3VsdCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gcHJlUmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5oYXNSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAoIXRoaXMuc2VydmljZXMuYmFja2VuZENvbm5lY3Rvci5iYWNrZW5kIHx8IHRoaXMub3B0aW9ucy5yZXNvdXJjZXMgJiYgIXRoaXMub3B0aW9ucy5wYXJ0aWFsQnVuZGxlZExhbmd1YWdlcykgcmV0dXJuIHRydWU7XG4gICAgICBpZiAobG9hZE5vdFBlbmRpbmcobG5nLCBucykgJiYgKCFmYWxsYmFja0xuZyB8fCBsb2FkTm90UGVuZGluZyhsYXN0TG5nLCBucykpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZE5hbWVzcGFjZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZE5hbWVzcGFjZXMobnMsIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcblxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubnMpIHtcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG5zID09PSAnc3RyaW5nJykgbnMgPSBbbnNdO1xuICAgICAgbnMuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAoX3RoaXM3Lm9wdGlvbnMubnMuaW5kZXhPZihuKSA8IDApIF90aGlzNy5vcHRpb25zLm5zLnB1c2gobik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZFJlc291cmNlcyhmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxvYWRMYW5ndWFnZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZExhbmd1YWdlcyhsbmdzLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICAgIGlmICh0eXBlb2YgbG5ncyA9PT0gJ3N0cmluZycpIGxuZ3MgPSBbbG5nc107XG4gICAgICB2YXIgcHJlbG9hZGVkID0gdGhpcy5vcHRpb25zLnByZWxvYWQgfHwgW107XG4gICAgICB2YXIgbmV3TG5ncyA9IGxuZ3MuZmlsdGVyKGZ1bmN0aW9uIChsbmcpIHtcbiAgICAgICAgcmV0dXJuIHByZWxvYWRlZC5pbmRleE9mKGxuZykgPCAwO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghbmV3TG5ncy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucy5wcmVsb2FkID0gcHJlbG9hZGVkLmNvbmNhdChuZXdMbmdzKTtcbiAgICAgIHRoaXMubG9hZFJlc291cmNlcyhmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVmZXJyZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXIobG5nKSB7XG4gICAgICBpZiAoIWxuZykgbG5nID0gdGhpcy5yZXNvbHZlZExhbmd1YWdlIHx8ICh0aGlzLmxhbmd1YWdlcyAmJiB0aGlzLmxhbmd1YWdlcy5sZW5ndGggPiAwID8gdGhpcy5sYW5ndWFnZXNbMF0gOiB0aGlzLmxhbmd1YWdlKTtcbiAgICAgIGlmICghbG5nKSByZXR1cm4gJ3J0bCc7XG4gICAgICB2YXIgcnRsTG5ncyA9IFsnYXInLCAnc2h1JywgJ3NxcicsICdzc2gnLCAneGFhJywgJ3loZCcsICd5dWQnLCAnYWFvJywgJ2FiaCcsICdhYnYnLCAnYWNtJywgJ2FjcScsICdhY3cnLCAnYWN4JywgJ2FjeScsICdhZGYnLCAnYWRzJywgJ2FlYicsICdhZWMnLCAnYWZiJywgJ2FqcCcsICdhcGMnLCAnYXBkJywgJ2FyYicsICdhcnEnLCAnYXJzJywgJ2FyeScsICdhcnonLCAnYXV6JywgJ2F2bCcsICdheWgnLCAnYXlsJywgJ2F5bicsICdheXAnLCAnYmJ6JywgJ3BnYScsICdoZScsICdpdycsICdwcycsICdwYnQnLCAncGJ1JywgJ3BzdCcsICdwcnAnLCAncHJkJywgJ3VnJywgJ3VyJywgJ3lkZCcsICd5ZHMnLCAneWloJywgJ2ppJywgJ3lpJywgJ2hibycsICdtZW4nLCAneG1uJywgJ2ZhJywgJ2pwcicsICdwZW8nLCAncGVzJywgJ3BycycsICdkdicsICdzYW0nLCAnY2tiJ107XG4gICAgICByZXR1cm4gcnRsTG5ncy5pbmRleE9mKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRMYW5ndWFnZVBhcnRGcm9tQ29kZShsbmcpKSA+IC0xIHx8IGxuZy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJy1hcmFiJykgPiAxID8gJ3J0bCcgOiAnbHRyJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xvbmVJbnN0YW5jZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9uZUluc3RhbmNlKCkge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcblxuICAgICAgdmFyIG1lcmdlZE9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkJDYoX29iamVjdFNwcmVhZCQ2KF9vYmplY3RTcHJlYWQkNih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyksIHtcbiAgICAgICAgaXNDbG9uZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBjbG9uZSA9IG5ldyBJMThuKG1lcmdlZE9wdGlvbnMpO1xuICAgICAgdmFyIG1lbWJlcnNUb0NvcHkgPSBbJ3N0b3JlJywgJ3NlcnZpY2VzJywgJ2xhbmd1YWdlJ107XG4gICAgICBtZW1iZXJzVG9Db3B5LmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgY2xvbmVbbV0gPSBfdGhpczhbbV07XG4gICAgICB9KTtcbiAgICAgIGNsb25lLnNlcnZpY2VzID0gX29iamVjdFNwcmVhZCQ2KHt9LCB0aGlzLnNlcnZpY2VzKTtcbiAgICAgIGNsb25lLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IGNsb25lLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKGNsb25lKVxuICAgICAgfTtcbiAgICAgIGNsb25lLnRyYW5zbGF0b3IgPSBuZXcgVHJhbnNsYXRvcihjbG9uZS5zZXJ2aWNlcywgY2xvbmUub3B0aW9ucyk7XG4gICAgICBjbG9uZS50cmFuc2xhdG9yLm9uKCcqJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCA+IDEgPyBfbGVuNCAtIDEgOiAwKSwgX2tleTQgPSAxOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5NCAtIDFdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsb25lLmVtaXQuYXBwbHkoY2xvbmUsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH0pO1xuICAgICAgY2xvbmUuaW5pdChtZXJnZWRPcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICBjbG9uZS50cmFuc2xhdG9yLm9wdGlvbnMgPSBjbG9uZS5vcHRpb25zO1xuICAgICAgY2xvbmUudHJhbnNsYXRvci5iYWNrZW5kQ29ubmVjdG9yLnNlcnZpY2VzLnV0aWxzID0ge1xuICAgICAgICBoYXNMb2FkZWROYW1lc3BhY2U6IGNsb25lLmhhc0xvYWRlZE5hbWVzcGFjZS5iaW5kKGNsb25lKVxuICAgICAgfTtcbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG9KU09OXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgc3RvcmU6IHRoaXMuc3RvcmUsXG4gICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgICBsYW5ndWFnZXM6IHRoaXMubGFuZ3VhZ2VzLFxuICAgICAgICByZXNvbHZlZExhbmd1YWdlOiB0aGlzLnJlc29sdmVkTGFuZ3VhZ2VcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEkxOG47XG59KEV2ZW50RW1pdHRlcik7XG5cbl9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdFsnZGVmYXVsdCddKEkxOG4sIFwiY3JlYXRlSW5zdGFuY2VcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICByZXR1cm4gbmV3IEkxOG4ob3B0aW9ucywgY2FsbGJhY2spO1xufSk7XG5cbnZhciBpbnN0YW5jZSA9IEkxOG4uY3JlYXRlSW5zdGFuY2UoKTtcbmluc3RhbmNlLmNyZWF0ZUluc3RhbmNlID0gSTE4bi5jcmVhdGVJbnN0YW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnN0YW5jZTtcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mLmpzXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkkxOG5leHRQcm92aWRlciA9IEkxOG5leHRQcm92aWRlcjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxuZnVuY3Rpb24gSTE4bmV4dFByb3ZpZGVyKF9yZWYpIHtcbiAgdmFyIGkxOG4gPSBfcmVmLmkxOG4sXG4gICAgICBkZWZhdWx0TlMgPSBfcmVmLmRlZmF1bHROUyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIHZhbHVlID0gKDAsIF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGkxOG46IGkxOG4sXG4gICAgICBkZWZhdWx0TlM6IGRlZmF1bHROU1xuICAgIH07XG4gIH0sIFtpMThuLCBkZWZhdWx0TlNdKTtcbiAgcmV0dXJuICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkoX2NvbnRleHQuSTE4bkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSwgY2hpbGRyZW4pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubm9kZXNUb1N0cmluZyA9IG5vZGVzVG9TdHJpbmc7XG5leHBvcnRzLlRyYW5zID0gVHJhbnM7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSk7XG5cbnZhciBfdHlwZW9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9odG1sUGFyc2VTdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJodG1sLXBhcnNlLXN0cmluZ2lmeVwiKSk7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIF9leGNsdWRlZCA9IFtcImZvcm1hdFwiXSxcbiAgICBfZXhjbHVkZWQyID0gW1wiY2hpbGRyZW5cIiwgXCJjb3VudFwiLCBcInBhcmVudFwiLCBcImkxOG5LZXlcIiwgXCJjb250ZXh0XCIsIFwidE9wdGlvbnNcIiwgXCJ2YWx1ZXNcIiwgXCJkZWZhdWx0c1wiLCBcImNvbXBvbmVudHNcIiwgXCJuc1wiLCBcImkxOG5cIiwgXCJ0XCIsIFwic2hvdWxkVW5lc2NhcGVcIl07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGhhc0NoaWxkcmVuKG5vZGUsIGNoZWNrTGVuZ3RoKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgYmFzZSA9IG5vZGUucHJvcHMgPyBub2RlLnByb3BzLmNoaWxkcmVuIDogbm9kZS5jaGlsZHJlbjtcbiAgaWYgKGNoZWNrTGVuZ3RoKSByZXR1cm4gYmFzZS5sZW5ndGggPiAwO1xuICByZXR1cm4gISFiYXNlO1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZHJlbihub2RlKSB7XG4gIGlmICghbm9kZSkgcmV0dXJuIFtdO1xuICByZXR1cm4gbm9kZS5wcm9wcyA/IG5vZGUucHJvcHMuY2hpbGRyZW4gOiBub2RlLmNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlYWN0Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjaGlsZHJlbikgIT09ICdbb2JqZWN0IEFycmF5XScpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGNoaWxkcmVuLmV2ZXJ5KGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBc0FycmF5KGRhdGEpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzKHNvdXJjZSwgdGFyZ2V0KSB7XG4gIHZhciBuZXdUYXJnZXQgPSBfb2JqZWN0U3ByZWFkKHt9LCB0YXJnZXQpO1xuXG4gIG5ld1RhcmdldC5wcm9wcyA9IE9iamVjdC5hc3NpZ24oc291cmNlLnByb3BzLCB0YXJnZXQucHJvcHMpO1xuICByZXR1cm4gbmV3VGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBub2Rlc1RvU3RyaW5nKGNoaWxkcmVuLCBpMThuT3B0aW9ucykge1xuICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gJyc7XG4gIHZhciBzdHJpbmdOb2RlID0gJyc7XG4gIHZhciBjaGlsZHJlbkFycmF5ID0gZ2V0QXNBcnJheShjaGlsZHJlbik7XG4gIHZhciBrZWVwQXJyYXkgPSBpMThuT3B0aW9ucy50cmFuc1N1cHBvcnRCYXNpY0h0bWxOb2RlcyAmJiBpMThuT3B0aW9ucy50cmFuc0tlZXBCYXNpY0h0bWxOb2Rlc0ZvciA/IGkxOG5PcHRpb25zLnRyYW5zS2VlcEJhc2ljSHRtbE5vZGVzRm9yIDogW107XG4gIGNoaWxkcmVuQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGNoaWxkSW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgc3RyaW5nTm9kZSArPSBcIlwiLmNvbmNhdChjaGlsZCk7XG4gICAgfSBlbHNlIGlmICgoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkpIHtcbiAgICAgIHZhciBjaGlsZFByb3BzQ291bnQgPSBPYmplY3Qua2V5cyhjaGlsZC5wcm9wcykubGVuZ3RoO1xuICAgICAgdmFyIHNob3VsZEtlZXBDaGlsZCA9IGtlZXBBcnJheS5pbmRleE9mKGNoaWxkLnR5cGUpID4gLTE7XG4gICAgICB2YXIgY2hpbGRDaGlsZHJlbiA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoIWNoaWxkQ2hpbGRyZW4gJiYgc2hvdWxkS2VlcENoaWxkICYmIGNoaWxkUHJvcHNDb3VudCA9PT0gMCkge1xuICAgICAgICBzdHJpbmdOb2RlICs9IFwiPFwiLmNvbmNhdChjaGlsZC50eXBlLCBcIi8+XCIpO1xuICAgICAgfSBlbHNlIGlmICghY2hpbGRDaGlsZHJlbiAmJiAoIXNob3VsZEtlZXBDaGlsZCB8fCBjaGlsZFByb3BzQ291bnQgIT09IDApKSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gXCI8XCIuY29uY2F0KGNoaWxkSW5kZXgsIFwiPjwvXCIpLmNvbmNhdChjaGlsZEluZGV4LCBcIj5cIik7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLnByb3BzLmkxOG5Jc0R5bmFtaWNMaXN0KSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gXCI8XCIuY29uY2F0KGNoaWxkSW5kZXgsIFwiPjwvXCIpLmNvbmNhdChjaGlsZEluZGV4LCBcIj5cIik7XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEtlZXBDaGlsZCAmJiBjaGlsZFByb3BzQ291bnQgPT09IDEgJiYgdHlwZW9mIGNoaWxkQ2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0cmluZ05vZGUgKz0gXCI8XCIuY29uY2F0KGNoaWxkLnR5cGUsIFwiPlwiKS5jb25jYXQoY2hpbGRDaGlsZHJlbiwgXCI8L1wiKS5jb25jYXQoY2hpbGQudHlwZSwgXCI+XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBub2Rlc1RvU3RyaW5nKGNoaWxkQ2hpbGRyZW4sIGkxOG5PcHRpb25zKTtcbiAgICAgICAgc3RyaW5nTm9kZSArPSBcIjxcIi5jb25jYXQoY2hpbGRJbmRleCwgXCI+XCIpLmNvbmNhdChjb250ZW50LCBcIjwvXCIpLmNvbmNhdChjaGlsZEluZGV4LCBcIj5cIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaGlsZCA9PT0gbnVsbCkge1xuICAgICAgKDAsIF91dGlscy53YXJuKShcIlRyYW5zOiB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGludmFsaWQgLSBzZWVtcyB5b3UgcGFzc2VkIGluIGEgbnVsbCBjaGlsZC5cIik7XG4gICAgfSBlbHNlIGlmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjaGlsZCkgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gY2hpbGQuZm9ybWF0LFxuICAgICAgICAgIGNsb25lID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczJbXCJkZWZhdWx0XCJdKShjaGlsZCwgX2V4Y2x1ZGVkKTtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY2xvbmUpO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZm9ybWF0ID8gXCJcIi5jb25jYXQoa2V5c1swXSwgXCIsIFwiKS5jb25jYXQoZm9ybWF0KSA6IGtleXNbMF07XG4gICAgICAgIHN0cmluZ05vZGUgKz0gXCJ7e1wiLmNvbmNhdCh2YWx1ZSwgXCJ9fVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfdXRpbHMud2FybikoXCJyZWFjdC1pMThuZXh0OiB0aGUgcGFzc2VkIGluIG9iamVjdCBjb250YWluZWQgbW9yZSB0aGFuIG9uZSB2YXJpYWJsZSAtIHRoZSBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB7eyB2YWx1ZSwgZm9ybWF0IH19IHdoZXJlIGZvcm1hdCBpcyBvcHRpb25hbC5cIiwgY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAoMCwgX3V0aWxzLndhcm4pKFwiVHJhbnM6IHRoZSBwYXNzZWQgaW4gdmFsdWUgaXMgaW52YWxpZCAtIHNlZW1zIHlvdSBwYXNzZWQgaW4gYSB2YXJpYWJsZSBsaWtlIHtudW1iZXJ9IC0gcGxlYXNlIHBhc3MgaW4gdmFyaWFibGVzIGZvciBpbnRlcnBvbGF0aW9uIGFzIGZ1bGwgb2JqZWN0cyBsaWtlIHt7bnVtYmVyfX0uXCIsIGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3RyaW5nTm9kZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTm9kZXMoY2hpbGRyZW4sIHRhcmdldFN0cmluZywgaTE4biwgaTE4bk9wdGlvbnMsIGNvbWJpbmVkVE9wdHMsIHNob3VsZFVuZXNjYXBlKSB7XG4gIGlmICh0YXJnZXRTdHJpbmcgPT09ICcnKSByZXR1cm4gW107XG4gIHZhciBrZWVwQXJyYXkgPSBpMThuT3B0aW9ucy50cmFuc0tlZXBCYXNpY0h0bWxOb2Rlc0ZvciB8fCBbXTtcbiAgdmFyIGVtcHR5Q2hpbGRyZW5CdXROZWVkc0hhbmRsaW5nID0gdGFyZ2V0U3RyaW5nICYmIG5ldyBSZWdFeHAoa2VlcEFycmF5LmpvaW4oJ3wnKSkudGVzdCh0YXJnZXRTdHJpbmcpO1xuICBpZiAoIWNoaWxkcmVuICYmICFlbXB0eUNoaWxkcmVuQnV0TmVlZHNIYW5kbGluZykgcmV0dXJuIFt0YXJnZXRTdHJpbmddO1xuICB2YXIgZGF0YSA9IHt9O1xuXG4gIGZ1bmN0aW9uIGdldERhdGEoY2hpbGRzKSB7XG4gICAgdmFyIGNoaWxkcmVuQXJyYXkgPSBnZXRBc0FycmF5KGNoaWxkcyk7XG4gICAgY2hpbGRyZW5BcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHJldHVybjtcbiAgICAgIGlmIChoYXNDaGlsZHJlbihjaGlsZCkpIGdldERhdGEoZ2V0Q2hpbGRyZW4oY2hpbGQpKTtlbHNlIGlmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjaGlsZCkgPT09ICdvYmplY3QnICYmICEoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkpIE9iamVjdC5hc3NpZ24oZGF0YSwgY2hpbGQpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RGF0YShjaGlsZHJlbik7XG5cbiAgdmFyIGFzdCA9IF9odG1sUGFyc2VTdHJpbmdpZnlbXCJkZWZhdWx0XCJdLnBhcnNlKFwiPDA+XCIuY29uY2F0KHRhcmdldFN0cmluZywgXCI8LzA+XCIpKTtcblxuICB2YXIgb3B0cyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGF0YSksIGNvbWJpbmVkVE9wdHMpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlcklubmVyKGNoaWxkLCBub2RlLCByb290UmVhY3ROb2RlKSB7XG4gICAgdmFyIGNoaWxkcyA9IGdldENoaWxkcmVuKGNoaWxkKTtcbiAgICB2YXIgbWFwcGVkQ2hpbGRyZW4gPSBtYXBBU1QoY2hpbGRzLCBub2RlLmNoaWxkcmVuLCByb290UmVhY3ROb2RlKTtcbiAgICByZXR1cm4gaGFzVmFsaWRSZWFjdENoaWxkcmVuKGNoaWxkcykgJiYgbWFwcGVkQ2hpbGRyZW4ubGVuZ3RoID09PSAwID8gY2hpbGRzIDogbWFwcGVkQ2hpbGRyZW47XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoVHJhbnNsYXRlZEpTWChjaGlsZCwgaW5uZXIsIG1lbSwgaSwgaXNWb2lkKSB7XG4gICAgaWYgKGNoaWxkLmR1bW15KSBjaGlsZC5jaGlsZHJlbiA9IGlubmVyO1xuICAgIG1lbS5wdXNoKCgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcyksIHt9LCB7XG4gICAgICBrZXk6IGlcbiAgICB9KSwgaXNWb2lkID8gdW5kZWZpbmVkIDogaW5uZXIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcEFTVChyZWFjdE5vZGUsIGFzdE5vZGUsIHJvb3RSZWFjdE5vZGUpIHtcbiAgICB2YXIgcmVhY3ROb2RlcyA9IGdldEFzQXJyYXkocmVhY3ROb2RlKTtcbiAgICB2YXIgYXN0Tm9kZXMgPSBnZXRBc0FycmF5KGFzdE5vZGUpO1xuICAgIHJldHVybiBhc3ROb2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKG1lbSwgbm9kZSwgaSkge1xuICAgICAgdmFyIHRyYW5zbGF0aW9uQ29udGVudCA9IG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlblswXSAmJiBub2RlLmNoaWxkcmVuWzBdLmNvbnRlbnQgJiYgaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUobm9kZS5jaGlsZHJlblswXS5jb250ZW50LCBvcHRzLCBpMThuLmxhbmd1YWdlKTtcblxuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RhZycpIHtcbiAgICAgICAgdmFyIHRtcCA9IHJlYWN0Tm9kZXNbcGFyc2VJbnQobm9kZS5uYW1lLCAxMCldO1xuICAgICAgICBpZiAoIXRtcCAmJiByb290UmVhY3ROb2RlLmxlbmd0aCA9PT0gMSAmJiByb290UmVhY3ROb2RlWzBdW25vZGUubmFtZV0pIHRtcCA9IHJvb3RSZWFjdE5vZGVbMF1bbm9kZS5uYW1lXTtcbiAgICAgICAgaWYgKCF0bXApIHRtcCA9IHt9O1xuICAgICAgICB2YXIgY2hpbGQgPSBPYmplY3Qua2V5cyhub2RlLmF0dHJzKS5sZW5ndGggIT09IDAgPyBtZXJnZVByb3BzKHtcbiAgICAgICAgICBwcm9wczogbm9kZS5hdHRyc1xuICAgICAgICB9LCB0bXApIDogdG1wO1xuICAgICAgICB2YXIgaXNFbGVtZW50ID0gKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpO1xuICAgICAgICB2YXIgaXNWYWxpZFRyYW5zbGF0aW9uV2l0aENoaWxkcmVuID0gaXNFbGVtZW50ICYmIGhhc0NoaWxkcmVuKG5vZGUsIHRydWUpICYmICFub2RlLnZvaWRFbGVtZW50O1xuICAgICAgICB2YXIgaXNFbXB0eVRyYW5zV2l0aEhUTUwgPSBlbXB0eUNoaWxkcmVuQnV0TmVlZHNIYW5kbGluZyAmJiAoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShjaGlsZCkgPT09ICdvYmplY3QnICYmIGNoaWxkLmR1bW15ICYmICFpc0VsZW1lbnQ7XG4gICAgICAgIHZhciBpc0tub3duQ29tcG9uZW50ID0gKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoY2hpbGRyZW4pID09PSAnb2JqZWN0JyAmJiBjaGlsZHJlbiAhPT0gbnVsbCAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChjaGlsZHJlbiwgbm9kZS5uYW1lKTtcblxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGkxOG4uc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKGNoaWxkLCBvcHRzLCBpMThuLmxhbmd1YWdlKTtcbiAgICAgICAgICBtZW0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzQ2hpbGRyZW4oY2hpbGQpIHx8IGlzVmFsaWRUcmFuc2xhdGlvbldpdGhDaGlsZHJlbikge1xuICAgICAgICAgICAgdmFyIGlubmVyID0gcmVuZGVySW5uZXIoY2hpbGQsIG5vZGUsIHJvb3RSZWFjdE5vZGUpO1xuICAgICAgICAgICAgcHVzaFRyYW5zbGF0ZWRKU1goY2hpbGQsIGlubmVyLCBtZW0sIGkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNFbXB0eVRyYW5zV2l0aEhUTUwpIHtcbiAgICAgICAgICB2YXIgX2lubmVyID0gbWFwQVNUKHJlYWN0Tm9kZXMsIG5vZGUuY2hpbGRyZW4sIHJvb3RSZWFjdE5vZGUpO1xuXG4gICAgICAgICAgbWVtLnB1c2goKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkLnByb3BzKSwge30sIHtcbiAgICAgICAgICAgIGtleTogaVxuICAgICAgICAgIH0pLCBfaW5uZXIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChOdW1iZXIuaXNOYU4ocGFyc2VGbG9hdChub2RlLm5hbWUpKSkge1xuICAgICAgICAgIGlmIChpc0tub3duQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB2YXIgX2lubmVyMiA9IHJlbmRlcklubmVyKGNoaWxkLCBub2RlLCByb290UmVhY3ROb2RlKTtcblxuICAgICAgICAgICAgcHVzaFRyYW5zbGF0ZWRKU1goY2hpbGQsIF9pbm5lcjIsIG1lbSwgaSwgbm9kZS52b2lkRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpMThuT3B0aW9ucy50cmFuc1N1cHBvcnRCYXNpY0h0bWxOb2RlcyAmJiBrZWVwQXJyYXkuaW5kZXhPZihub2RlLm5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnZvaWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgIG1lbS5wdXNoKCgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkobm9kZS5uYW1lLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChub2RlLm5hbWUsIFwiLVwiKS5jb25jYXQoaSlcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIF9pbm5lcjMgPSBtYXBBU1QocmVhY3ROb2Rlcywgbm9kZS5jaGlsZHJlbiwgcm9vdFJlYWN0Tm9kZSk7XG5cbiAgICAgICAgICAgICAgbWVtLnB1c2goKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShub2RlLm5hbWUsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiXCIuY29uY2F0KG5vZGUubmFtZSwgXCItXCIpLmNvbmNhdChpKVxuICAgICAgICAgICAgICB9LCBfaW5uZXIzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChub2RlLnZvaWRFbGVtZW50KSB7XG4gICAgICAgICAgICBtZW0ucHVzaChcIjxcIi5jb25jYXQobm9kZS5uYW1lLCBcIiAvPlwiKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfaW5uZXI0ID0gbWFwQVNUKHJlYWN0Tm9kZXMsIG5vZGUuY2hpbGRyZW4sIHJvb3RSZWFjdE5vZGUpO1xuXG4gICAgICAgICAgICBtZW0ucHVzaChcIjxcIi5jb25jYXQobm9kZS5uYW1lLCBcIj5cIikuY29uY2F0KF9pbm5lcjQsIFwiPC9cIikuY29uY2F0KG5vZGUubmFtZSwgXCI+XCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoY2hpbGQpID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSBub2RlLmNoaWxkcmVuWzBdID8gdHJhbnNsYXRpb25Db250ZW50IDogbnVsbDtcbiAgICAgICAgICBpZiAoY29udGVudCkgbWVtLnB1c2goY29udGVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgdHJhbnNsYXRpb25Db250ZW50KSB7XG4gICAgICAgICAgbWVtLnB1c2goKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkLnByb3BzKSwge30sIHtcbiAgICAgICAgICAgIGtleTogaVxuICAgICAgICAgIH0pLCB0cmFuc2xhdGlvbkNvbnRlbnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtZW0ucHVzaCgoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY2hpbGQucHJvcHMpLCB7fSwge1xuICAgICAgICAgICAga2V5OiBpXG4gICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB2YXIgd3JhcFRleHROb2RlcyA9IGkxOG5PcHRpb25zLnRyYW5zV3JhcFRleHROb2RlcztcblxuICAgICAgICB2YXIgX2NvbnRlbnQgPSBzaG91bGRVbmVzY2FwZSA/IGkxOG5PcHRpb25zLnVuZXNjYXBlKGkxOG4uc2VydmljZXMuaW50ZXJwb2xhdG9yLmludGVycG9sYXRlKG5vZGUuY29udGVudCwgb3B0cywgaTE4bi5sYW5ndWFnZSkpIDogaTE4bi5zZXJ2aWNlcy5pbnRlcnBvbGF0b3IuaW50ZXJwb2xhdGUobm9kZS5jb250ZW50LCBvcHRzLCBpMThuLmxhbmd1YWdlKTtcblxuICAgICAgICBpZiAod3JhcFRleHROb2Rlcykge1xuICAgICAgICAgIG1lbS5wdXNoKCgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkod3JhcFRleHROb2Rlcywge1xuICAgICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChub2RlLm5hbWUsIFwiLVwiKS5jb25jYXQoaSlcbiAgICAgICAgICB9LCBfY29udGVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbS5wdXNoKF9jb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVtO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBtYXBBU1QoW3tcbiAgICBkdW1teTogdHJ1ZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4gfHwgW11cbiAgfV0sIGFzdCwgZ2V0QXNBcnJheShjaGlsZHJlbiB8fCBbXSkpO1xuICByZXR1cm4gZ2V0Q2hpbGRyZW4ocmVzdWx0WzBdKTtcbn1cblxuZnVuY3Rpb24gVHJhbnMoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgY291bnQgPSBfcmVmLmNvdW50LFxuICAgICAgcGFyZW50ID0gX3JlZi5wYXJlbnQsXG4gICAgICBpMThuS2V5ID0gX3JlZi5pMThuS2V5LFxuICAgICAgY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICAgIF9yZWYkdE9wdGlvbnMgPSBfcmVmLnRPcHRpb25zLFxuICAgICAgdE9wdGlvbnMgPSBfcmVmJHRPcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkdE9wdGlvbnMsXG4gICAgICB2YWx1ZXMgPSBfcmVmLnZhbHVlcyxcbiAgICAgIGRlZmF1bHRzID0gX3JlZi5kZWZhdWx0cyxcbiAgICAgIGNvbXBvbmVudHMgPSBfcmVmLmNvbXBvbmVudHMsXG4gICAgICBucyA9IF9yZWYubnMsXG4gICAgICBpMThuRnJvbVByb3BzID0gX3JlZi5pMThuLFxuICAgICAgdEZyb21Qcm9wcyA9IF9yZWYudCxcbiAgICAgIHNob3VsZFVuZXNjYXBlID0gX3JlZi5zaG91bGRVbmVzY2FwZSxcbiAgICAgIGFkZGl0aW9uYWxQcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyW1wiZGVmYXVsdFwiXSkoX3JlZiwgX2V4Y2x1ZGVkMik7XG5cbiAgdmFyIF9yZWYyID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfY29udGV4dC5JMThuQ29udGV4dCkgfHwge30sXG4gICAgICBpMThuRnJvbUNvbnRleHQgPSBfcmVmMi5pMThuLFxuICAgICAgZGVmYXVsdE5TRnJvbUNvbnRleHQgPSBfcmVmMi5kZWZhdWx0TlM7XG5cbiAgdmFyIGkxOG4gPSBpMThuRnJvbVByb3BzIHx8IGkxOG5Gcm9tQ29udGV4dCB8fCAoMCwgX2NvbnRleHQuZ2V0STE4bikoKTtcblxuICBpZiAoIWkxOG4pIHtcbiAgICAoMCwgX3V0aWxzLndhcm5PbmNlKSgnWW91IHdpbGwgbmVlZCB0byBwYXNzIGluIGFuIGkxOG5leHQgaW5zdGFuY2UgYnkgdXNpbmcgaTE4bmV4dFJlYWN0TW9kdWxlJyk7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHQgPSB0RnJvbVByb3BzIHx8IGkxOG4udC5iaW5kKGkxOG4pIHx8IGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIGs7XG4gIH07XG5cbiAgaWYgKGNvbnRleHQpIHRPcHRpb25zLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gIHZhciByZWFjdEkxOG5leHRPcHRpb25zID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCAoMCwgX2NvbnRleHQuZ2V0RGVmYXVsdHMpKCkpLCBpMThuLm9wdGlvbnMgJiYgaTE4bi5vcHRpb25zLnJlYWN0KTtcblxuICB2YXIgbmFtZXNwYWNlcyA9IG5zIHx8IHQubnMgfHwgZGVmYXVsdE5TRnJvbUNvbnRleHQgfHwgaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5kZWZhdWx0TlM7XG4gIG5hbWVzcGFjZXMgPSB0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBbbmFtZXNwYWNlc10gOiBuYW1lc3BhY2VzIHx8IFsndHJhbnNsYXRpb24nXTtcbiAgdmFyIGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRzIHx8IG5vZGVzVG9TdHJpbmcoY2hpbGRyZW4sIHJlYWN0STE4bmV4dE9wdGlvbnMpIHx8IHJlYWN0STE4bmV4dE9wdGlvbnMudHJhbnNFbXB0eU5vZGVWYWx1ZSB8fCBpMThuS2V5O1xuICB2YXIgaGFzaFRyYW5zS2V5ID0gcmVhY3RJMThuZXh0T3B0aW9ucy5oYXNoVHJhbnNLZXk7XG4gIHZhciBrZXkgPSBpMThuS2V5IHx8IChoYXNoVHJhbnNLZXkgPyBoYXNoVHJhbnNLZXkoZGVmYXVsdFZhbHVlKSA6IGRlZmF1bHRWYWx1ZSk7XG4gIHZhciBpbnRlcnBvbGF0aW9uT3ZlcnJpZGUgPSB2YWx1ZXMgPyB0T3B0aW9ucy5pbnRlcnBvbGF0aW9uIDoge1xuICAgIGludGVycG9sYXRpb246IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdE9wdGlvbnMuaW50ZXJwb2xhdGlvbiksIHt9LCB7XG4gICAgICBwcmVmaXg6ICcjJD8nLFxuICAgICAgc3VmZml4OiAnPyQjJ1xuICAgIH0pXG4gIH07XG5cbiAgdmFyIGNvbWJpbmVkVE9wdHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0T3B0aW9ucyksIHt9LCB7XG4gICAgY291bnQ6IGNvdW50XG4gIH0sIHZhbHVlcyksIGludGVycG9sYXRpb25PdmVycmlkZSksIHt9LCB7XG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgbnM6IG5hbWVzcGFjZXNcbiAgfSk7XG5cbiAgdmFyIHRyYW5zbGF0aW9uID0ga2V5ID8gdChrZXksIGNvbWJpbmVkVE9wdHMpIDogZGVmYXVsdFZhbHVlO1xuICB2YXIgY29udGVudCA9IHJlbmRlck5vZGVzKGNvbXBvbmVudHMgfHwgY2hpbGRyZW4sIHRyYW5zbGF0aW9uLCBpMThuLCByZWFjdEkxOG5leHRPcHRpb25zLCBjb21iaW5lZFRPcHRzLCBzaG91bGRVbmVzY2FwZSk7XG4gIHZhciB1c2VBc1BhcmVudCA9IHBhcmVudCAhPT0gdW5kZWZpbmVkID8gcGFyZW50IDogcmVhY3RJMThuZXh0T3B0aW9ucy5kZWZhdWx0VHJhbnNQYXJlbnQ7XG4gIHJldHVybiB1c2VBc1BhcmVudCA/ICgwLCBfcmVhY3QuY3JlYXRlRWxlbWVudCkodXNlQXNQYXJlbnQsIGFkZGl0aW9uYWxQcm9wcywgY29udGVudCkgOiBjb250ZW50O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJhbnNsYXRpb24gPSBUcmFuc2xhdGlvbjtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSk7XG5cbnZhciBfdXNlVHJhbnNsYXRpb24zID0gcmVxdWlyZShcIi4vdXNlVHJhbnNsYXRpb25cIik7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJuc1wiLCBcImNoaWxkcmVuXCJdO1xuXG5mdW5jdGlvbiBUcmFuc2xhdGlvbihwcm9wcykge1xuICB2YXIgbnMgPSBwcm9wcy5ucyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBvcHRpb25zID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczJbXCJkZWZhdWx0XCJdKShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICB2YXIgX3VzZVRyYW5zbGF0aW9uID0gKDAsIF91c2VUcmFuc2xhdGlvbjMudXNlVHJhbnNsYXRpb24pKG5zLCBvcHRpb25zKSxcbiAgICAgIF91c2VUcmFuc2xhdGlvbjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZVRyYW5zbGF0aW9uLCAzKSxcbiAgICAgIHQgPSBfdXNlVHJhbnNsYXRpb24yWzBdLFxuICAgICAgaTE4biA9IF91c2VUcmFuc2xhdGlvbjJbMV0sXG4gICAgICByZWFkeSA9IF91c2VUcmFuc2xhdGlvbjJbMl07XG5cbiAgcmV0dXJuIGNoaWxkcmVuKHQsIHtcbiAgICBpMThuOiBpMThuLFxuICAgIGxuZzogaTE4bi5sYW5ndWFnZVxuICB9LCByZWFkeSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXREZWZhdWx0cyA9IHNldERlZmF1bHRzO1xuZXhwb3J0cy5nZXREZWZhdWx0cyA9IGdldERlZmF1bHRzO1xuZXhwb3J0cy5zZXRJMThuID0gc2V0STE4bjtcbmV4cG9ydHMuZ2V0STE4biA9IGdldEkxOG47XG5leHBvcnRzLmNvbXBvc2VJbml0aWFsUHJvcHMgPSBjb21wb3NlSW5pdGlhbFByb3BzO1xuZXhwb3J0cy5nZXRJbml0aWFsUHJvcHMgPSBnZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmluaXRSZWFjdEkxOG5leHQgPSBleHBvcnRzLlJlcG9ydE5hbWVzcGFjZXMgPSBleHBvcnRzLkkxOG5Db250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3VuZXNjYXBlID0gcmVxdWlyZShcIi4vdW5lc2NhcGVcIik7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgYmluZEkxOG46ICdsYW5ndWFnZUNoYW5nZWQnLFxuICBiaW5kSTE4blN0b3JlOiAnJyxcbiAgdHJhbnNFbXB0eU5vZGVWYWx1ZTogJycsXG4gIHRyYW5zU3VwcG9ydEJhc2ljSHRtbE5vZGVzOiB0cnVlLFxuICB0cmFuc1dyYXBUZXh0Tm9kZXM6ICcnLFxuICB0cmFuc0tlZXBCYXNpY0h0bWxOb2Rlc0ZvcjogWydicicsICdzdHJvbmcnLCAnaScsICdwJ10sXG4gIHVzZVN1c3BlbnNlOiB0cnVlLFxuICB1bmVzY2FwZTogX3VuZXNjYXBlLnVuZXNjYXBlXG59O1xudmFyIGkxOG5JbnN0YW5jZTtcbnZhciBJMThuQ29udGV4dCA9ICgwLCBfcmVhY3QuY3JlYXRlQ29udGV4dCkoKTtcbmV4cG9ydHMuSTE4bkNvbnRleHQgPSBJMThuQ29udGV4dDtcblxuZnVuY3Rpb24gc2V0RGVmYXVsdHMoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgZGVmYXVsdE9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRzKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbnZhciBSZXBvcnROYW1lc3BhY2VzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZXBvcnROYW1lc3BhY2VzKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgUmVwb3J0TmFtZXNwYWNlcyk7XG4gICAgdGhpcy51c2VkTmFtZXNwYWNlcyA9IHt9O1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShSZXBvcnROYW1lc3BhY2VzLCBbe1xuICAgIGtleTogXCJhZGRVc2VkTmFtZXNwYWNlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRVc2VkTmFtZXNwYWNlcyhuYW1lc3BhY2VzKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBuYW1lc3BhY2VzLmZvckVhY2goZnVuY3Rpb24gKG5zKSB7XG4gICAgICAgIGlmICghX3RoaXMudXNlZE5hbWVzcGFjZXNbbnNdKSBfdGhpcy51c2VkTmFtZXNwYWNlc1tuc10gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFVzZWROYW1lc3BhY2VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZWROYW1lc3BhY2VzKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudXNlZE5hbWVzcGFjZXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmVwb3J0TmFtZXNwYWNlcztcbn0oKTtcblxuZXhwb3J0cy5SZXBvcnROYW1lc3BhY2VzID0gUmVwb3J0TmFtZXNwYWNlcztcblxuZnVuY3Rpb24gc2V0STE4bihpbnN0YW5jZSkge1xuICBpMThuSW5zdGFuY2UgPSBpbnN0YW5jZTtcbn1cblxuZnVuY3Rpb24gZ2V0STE4bigpIHtcbiAgcmV0dXJuIGkxOG5JbnN0YW5jZTtcbn1cblxudmFyIGluaXRSZWFjdEkxOG5leHQgPSB7XG4gIHR5cGU6ICczcmRQYXJ0eScsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQoaW5zdGFuY2UpIHtcbiAgICBzZXREZWZhdWx0cyhpbnN0YW5jZS5vcHRpb25zLnJlYWN0KTtcbiAgICBzZXRJMThuKGluc3RhbmNlKTtcbiAgfVxufTtcbmV4cG9ydHMuaW5pdFJlYWN0STE4bmV4dCA9IGluaXRSZWFjdEkxOG5leHQ7XG5cbmZ1bmN0aW9uIGNvbXBvc2VJbml0aWFsUHJvcHMoRm9yQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY3R4KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgaTE4bkluaXRpYWxQcm9wcyA9IGdldEluaXRpYWxQcm9wcygpO1xuXG4gICAgICBpZiAoRm9yQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBGb3JDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkudGhlbihmdW5jdGlvbiAoY29tcG9uZW50c0luaXRpYWxQcm9wcykge1xuICAgICAgICAgIHJlc29sdmUoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjb21wb25lbnRzSW5pdGlhbFByb3BzKSwgaTE4bkluaXRpYWxQcm9wcykpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoaTE4bkluaXRpYWxQcm9wcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxQcm9wcygpIHtcbiAgdmFyIGkxOG4gPSBnZXRJMThuKCk7XG4gIHZhciBuYW1lc3BhY2VzID0gaTE4bi5yZXBvcnROYW1lc3BhY2VzID8gaTE4bi5yZXBvcnROYW1lc3BhY2VzLmdldFVzZWROYW1lc3BhY2VzKCkgOiBbXTtcbiAgdmFyIHJldCA9IHt9O1xuICB2YXIgaW5pdGlhbEkxOG5TdG9yZSA9IHt9O1xuICBpMThuLmxhbmd1YWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgaW5pdGlhbEkxOG5TdG9yZVtsXSA9IHt9O1xuICAgIG5hbWVzcGFjZXMuZm9yRWFjaChmdW5jdGlvbiAobnMpIHtcbiAgICAgIGluaXRpYWxJMThuU3RvcmVbbF1bbnNdID0gaTE4bi5nZXRSZXNvdXJjZUJ1bmRsZShsLCBucykgfHwge307XG4gICAgfSk7XG4gIH0pO1xuICByZXQuaW5pdGlhbEkxOG5TdG9yZSA9IGluaXRpYWxJMThuU3RvcmU7XG4gIHJldC5pbml0aWFsTGFuZ3VhZ2UgPSBpMThuLmxhbmd1YWdlO1xuICByZXR1cm4gcmV0O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVHJhbnNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1RyYW5zLlRyYW5zO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVzZVRyYW5zbGF0aW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91c2VUcmFuc2xhdGlvbi51c2VUcmFuc2xhdGlvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoVHJhbnNsYXRpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dpdGhUcmFuc2xhdGlvbi53aXRoVHJhbnNsYXRpb247XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVHJhbnNsYXRpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1RyYW5zbGF0aW9uLlRyYW5zbGF0aW9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkkxOG5leHRQcm92aWRlclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfSTE4bmV4dFByb3ZpZGVyLkkxOG5leHRQcm92aWRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoU1NSXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93aXRoU1NSLndpdGhTU1I7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXNlU1NSXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91c2VTU1IudXNlU1NSO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkkxOG5Db250ZXh0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LkkxOG5Db250ZXh0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImluaXRSZWFjdEkxOG5leHRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuaW5pdFJlYWN0STE4bmV4dDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZXREZWZhdWx0c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5zZXREZWZhdWx0cztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXREZWZhdWx0c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5nZXREZWZhdWx0cztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZXRJMThuXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb250ZXh0LnNldEkxOG47XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2V0STE4blwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5nZXRJMThuO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNvbXBvc2VJbml0aWFsUHJvcHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuY29tcG9zZUluaXRpYWxQcm9wcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRJbml0aWFsUHJvcHNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuZ2V0SW5pdGlhbFByb3BzO1xuICB9XG59KTtcbmV4cG9ydHMuc2VsZWN0T3JkaW5hbCA9IGV4cG9ydHMucGx1cmFsID0gZXhwb3J0cy5zZWxlY3QgPSBleHBvcnRzLm51bWJlciA9IGV4cG9ydHMudGltZSA9IGV4cG9ydHMuZGF0ZSA9IHZvaWQgMDtcblxudmFyIF9UcmFucyA9IHJlcXVpcmUoXCIuL1RyYW5zXCIpO1xuXG52YXIgX3VzZVRyYW5zbGF0aW9uID0gcmVxdWlyZShcIi4vdXNlVHJhbnNsYXRpb25cIik7XG5cbnZhciBfd2l0aFRyYW5zbGF0aW9uID0gcmVxdWlyZShcIi4vd2l0aFRyYW5zbGF0aW9uXCIpO1xuXG52YXIgX1RyYW5zbGF0aW9uID0gcmVxdWlyZShcIi4vVHJhbnNsYXRpb25cIik7XG5cbnZhciBfSTE4bmV4dFByb3ZpZGVyID0gcmVxdWlyZShcIi4vSTE4bmV4dFByb3ZpZGVyXCIpO1xuXG52YXIgX3dpdGhTU1IgPSByZXF1aXJlKFwiLi93aXRoU1NSXCIpO1xuXG52YXIgX3VzZVNTUiA9IHJlcXVpcmUoXCIuL3VzZVNTUlwiKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxudmFyIGRhdGUgPSBmdW5jdGlvbiBkYXRlKCkge1xuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLmRhdGUgPSBkYXRlO1xuXG52YXIgdGltZSA9IGZ1bmN0aW9uIHRpbWUoKSB7XG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMudGltZSA9IHRpbWU7XG5cbnZhciBudW1iZXIgPSBmdW5jdGlvbiBudW1iZXIoKSB7XG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMubnVtYmVyID0gbnVtYmVyO1xuXG52YXIgc2VsZWN0ID0gZnVuY3Rpb24gc2VsZWN0KCkge1xuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcblxudmFyIHBsdXJhbCA9IGZ1bmN0aW9uIHBsdXJhbCgpIHtcbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5wbHVyYWwgPSBwbHVyYWw7XG5cbnZhciBzZWxlY3RPcmRpbmFsID0gZnVuY3Rpb24gc2VsZWN0T3JkaW5hbCgpIHtcbiAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5zZWxlY3RPcmRpbmFsID0gc2VsZWN0T3JkaW5hbDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudW5lc2NhcGUgPSB2b2lkIDA7XG52YXIgbWF0Y2hIdG1sRW50aXR5ID0gLyYoPzphbXB8IzM4fGx0fCM2MHxndHwjNjJ8YXBvc3wjMzl8cXVvdHwjMzR8bmJzcHwjMTYwfGNvcHl8IzE2OXxyZWd8IzE3NHxoZWxsaXB8IzgyMzB8I3gyRnwjNDcpOy9nO1xudmFyIGh0bWxFbnRpdGllcyA9IHtcbiAgJyZhbXA7JzogJyYnLFxuICAnJiMzODsnOiAnJicsXG4gICcmbHQ7JzogJzwnLFxuICAnJiM2MDsnOiAnPCcsXG4gICcmZ3Q7JzogJz4nLFxuICAnJiM2MjsnOiAnPicsXG4gICcmYXBvczsnOiBcIidcIixcbiAgJyYjMzk7JzogXCInXCIsXG4gICcmcXVvdDsnOiAnXCInLFxuICAnJiMzNDsnOiAnXCInLFxuICAnJm5ic3A7JzogJyAnLFxuICAnJiMxNjA7JzogJyAnLFxuICAnJmNvcHk7JzogJ8KpJyxcbiAgJyYjMTY5Oyc6ICfCqScsXG4gICcmcmVnOyc6ICfCricsXG4gICcmIzE3NDsnOiAnwq4nLFxuICAnJmhlbGxpcDsnOiAn4oCmJyxcbiAgJyYjODIzMDsnOiAn4oCmJyxcbiAgJyYjeDJGOyc6ICcvJyxcbiAgJyYjNDc7JzogJy8nXG59O1xuXG52YXIgdW5lc2NhcGVIdG1sRW50aXR5ID0gZnVuY3Rpb24gdW5lc2NhcGVIdG1sRW50aXR5KG0pIHtcbiAgcmV0dXJuIGh0bWxFbnRpdGllc1ttXTtcbn07XG5cbnZhciB1bmVzY2FwZSA9IGZ1bmN0aW9uIHVuZXNjYXBlKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZShtYXRjaEh0bWxFbnRpdHksIHVuZXNjYXBlSHRtbEVudGl0eSk7XG59O1xuXG5leHBvcnRzLnVuZXNjYXBlID0gdW5lc2NhcGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZVNTUiA9IHVzZVNTUjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9jb250ZXh0ID0gcmVxdWlyZShcIi4vY29udGV4dFwiKTtcblxuZnVuY3Rpb24gdXNlU1NSKGluaXRpYWxJMThuU3RvcmUsIGluaXRpYWxMYW5ndWFnZSkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICB2YXIgaTE4bkZyb21Qcm9wcyA9IHByb3BzLmkxOG47XG5cbiAgdmFyIF9yZWYgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9jb250ZXh0LkkxOG5Db250ZXh0KSB8fCB7fSxcbiAgICAgIGkxOG5Gcm9tQ29udGV4dCA9IF9yZWYuaTE4bjtcblxuICB2YXIgaTE4biA9IGkxOG5Gcm9tUHJvcHMgfHwgaTE4bkZyb21Db250ZXh0IHx8ICgwLCBfY29udGV4dC5nZXRJMThuKSgpO1xuICBpZiAoaTE4bi5vcHRpb25zICYmIGkxOG4ub3B0aW9ucy5pc0Nsb25lKSByZXR1cm47XG5cbiAgaWYgKGluaXRpYWxJMThuU3RvcmUgJiYgIWkxOG4uaW5pdGlhbGl6ZWRTdG9yZU9uY2UpIHtcbiAgICBpMThuLnNlcnZpY2VzLnJlc291cmNlU3RvcmUuZGF0YSA9IGluaXRpYWxJMThuU3RvcmU7XG4gICAgaTE4bi5vcHRpb25zLm5zID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsSTE4blN0b3JlKS5yZWR1Y2UoZnVuY3Rpb24gKG1lbSwgbG5nUmVzb3VyY2VzKSB7XG4gICAgICBPYmplY3Qua2V5cyhsbmdSZXNvdXJjZXMpLmZvckVhY2goZnVuY3Rpb24gKG5zKSB7XG4gICAgICAgIGlmIChtZW0uaW5kZXhPZihucykgPCAwKSBtZW0ucHVzaChucyk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZW07XG4gICAgfSwgaTE4bi5vcHRpb25zLm5zKTtcbiAgICBpMThuLmluaXRpYWxpemVkU3RvcmVPbmNlID0gdHJ1ZTtcbiAgICBpMThuLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGluaXRpYWxMYW5ndWFnZSAmJiAhaTE4bi5pbml0aWFsaXplZExhbmd1YWdlT25jZSkge1xuICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoaW5pdGlhbExhbmd1YWdlKTtcbiAgICBpMThuLmluaXRpYWxpemVkTGFuZ3VhZ2VPbmNlID0gdHJ1ZTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlVHJhbnNsYXRpb24gPSB1c2VUcmFuc2xhdGlvbjtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHVzZVByZXZpb3VzID0gZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUsIGlnbm9yZSkge1xuICB2YXIgcmVmID0gKDAsIF9yZWFjdC51c2VSZWYpKCk7XG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBpZ25vcmUgPyByZWYuY3VycmVudCA6IHZhbHVlO1xuICB9LCBbdmFsdWUsIGlnbm9yZV0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59O1xuXG5mdW5jdGlvbiB1c2VUcmFuc2xhdGlvbihucykge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgaTE4bkZyb21Qcm9wcyA9IHByb3BzLmkxOG47XG5cbiAgdmFyIF9yZWYgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9jb250ZXh0LkkxOG5Db250ZXh0KSB8fCB7fSxcbiAgICAgIGkxOG5Gcm9tQ29udGV4dCA9IF9yZWYuaTE4bixcbiAgICAgIGRlZmF1bHROU0Zyb21Db250ZXh0ID0gX3JlZi5kZWZhdWx0TlM7XG5cbiAgdmFyIGkxOG4gPSBpMThuRnJvbVByb3BzIHx8IGkxOG5Gcm9tQ29udGV4dCB8fCAoMCwgX2NvbnRleHQuZ2V0STE4bikoKTtcbiAgaWYgKGkxOG4gJiYgIWkxOG4ucmVwb3J0TmFtZXNwYWNlcykgaTE4bi5yZXBvcnROYW1lc3BhY2VzID0gbmV3IF9jb250ZXh0LlJlcG9ydE5hbWVzcGFjZXMoKTtcblxuICBpZiAoIWkxOG4pIHtcbiAgICAoMCwgX3V0aWxzLndhcm5PbmNlKSgnWW91IHdpbGwgbmVlZCB0byBwYXNzIGluIGFuIGkxOG5leHQgaW5zdGFuY2UgYnkgdXNpbmcgaW5pdFJlYWN0STE4bmV4dCcpO1xuXG4gICAgdmFyIG5vdFJlYWR5VCA9IGZ1bmN0aW9uIG5vdFJlYWR5VChrKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShrKSA/IGtbay5sZW5ndGggLSAxXSA6IGs7XG4gICAgfTtcblxuICAgIHZhciByZXROb3RSZWFkeSA9IFtub3RSZWFkeVQsIHt9LCBmYWxzZV07XG4gICAgcmV0Tm90UmVhZHkudCA9IG5vdFJlYWR5VDtcbiAgICByZXROb3RSZWFkeS5pMThuID0ge307XG4gICAgcmV0Tm90UmVhZHkucmVhZHkgPSBmYWxzZTtcbiAgICByZXR1cm4gcmV0Tm90UmVhZHk7XG4gIH1cblxuICBpZiAoaTE4bi5vcHRpb25zLnJlYWN0ICYmIGkxOG4ub3B0aW9ucy5yZWFjdC53YWl0ICE9PSB1bmRlZmluZWQpICgwLCBfdXRpbHMud2Fybk9uY2UpKCdJdCBzZWVtcyB5b3UgYXJlIHN0aWxsIHVzaW5nIHRoZSBvbGQgd2FpdCBvcHRpb24sIHlvdSBtYXkgbWlncmF0ZSB0byB0aGUgbmV3IHVzZVN1c3BlbnNlIGJlaGF2aW91ci4nKTtcblxuICB2YXIgaTE4bk9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgKDAsIF9jb250ZXh0LmdldERlZmF1bHRzKSgpKSwgaTE4bi5vcHRpb25zLnJlYWN0KSwgcHJvcHMpO1xuXG4gIHZhciB1c2VTdXNwZW5zZSA9IGkxOG5PcHRpb25zLnVzZVN1c3BlbnNlLFxuICAgICAga2V5UHJlZml4ID0gaTE4bk9wdGlvbnMua2V5UHJlZml4O1xuICB2YXIgbmFtZXNwYWNlcyA9IG5zIHx8IGRlZmF1bHROU0Zyb21Db250ZXh0IHx8IGkxOG4ub3B0aW9ucyAmJiBpMThuLm9wdGlvbnMuZGVmYXVsdE5TO1xuICBuYW1lc3BhY2VzID0gdHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gW25hbWVzcGFjZXNdIDogbmFtZXNwYWNlcyB8fCBbJ3RyYW5zbGF0aW9uJ107XG4gIGlmIChpMThuLnJlcG9ydE5hbWVzcGFjZXMuYWRkVXNlZE5hbWVzcGFjZXMpIGkxOG4ucmVwb3J0TmFtZXNwYWNlcy5hZGRVc2VkTmFtZXNwYWNlcyhuYW1lc3BhY2VzKTtcbiAgdmFyIHJlYWR5ID0gKGkxOG4uaXNJbml0aWFsaXplZCB8fCBpMThuLmluaXRpYWxpemVkU3RvcmVPbmNlKSAmJiBuYW1lc3BhY2VzLmV2ZXJ5KGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuaGFzTG9hZGVkTmFtZXNwYWNlKShuLCBpMThuLCBpMThuT3B0aW9ucyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldFQoKSB7XG4gICAgcmV0dXJuIGkxOG4uZ2V0Rml4ZWRUKG51bGwsIGkxOG5PcHRpb25zLm5zTW9kZSA9PT0gJ2ZhbGxiYWNrJyA/IG5hbWVzcGFjZXMgOiBuYW1lc3BhY2VzWzBdLCBrZXlQcmVmaXgpO1xuICB9XG5cbiAgdmFyIF91c2VTdGF0ZSA9ICgwLCBfcmVhY3QudXNlU3RhdGUpKGdldFQpLFxuICAgICAgX3VzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlU3RhdGUsIDIpLFxuICAgICAgdCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRUID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgam9pbmVkTlMgPSBuYW1lc3BhY2VzLmpvaW4oKTtcbiAgdmFyIHByZXZpb3VzSm9pbmVkTlMgPSB1c2VQcmV2aW91cyhqb2luZWROUyk7XG4gIHZhciBpc01vdW50ZWQgPSAoMCwgX3JlYWN0LnVzZVJlZikodHJ1ZSk7XG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJpbmRJMThuID0gaTE4bk9wdGlvbnMuYmluZEkxOG4sXG4gICAgICAgIGJpbmRJMThuU3RvcmUgPSBpMThuT3B0aW9ucy5iaW5kSTE4blN0b3JlO1xuICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIGlmICghcmVhZHkgJiYgIXVzZVN1c3BlbnNlKSB7XG4gICAgICAoMCwgX3V0aWxzLmxvYWROYW1lc3BhY2VzKShpMThuLCBuYW1lc3BhY2VzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkgc2V0VChnZXRUKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZWFkeSAmJiBwcmV2aW91c0pvaW5lZE5TICYmIHByZXZpb3VzSm9pbmVkTlMgIT09IGpvaW5lZE5TICYmIGlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICBzZXRUKGdldFQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJvdW5kUmVzZXQoKSB7XG4gICAgICBpZiAoaXNNb3VudGVkLmN1cnJlbnQpIHNldFQoZ2V0VCk7XG4gICAgfVxuXG4gICAgaWYgKGJpbmRJMThuICYmIGkxOG4pIGkxOG4ub24oYmluZEkxOG4sIGJvdW5kUmVzZXQpO1xuICAgIGlmIChiaW5kSTE4blN0b3JlICYmIGkxOG4pIGkxOG4uc3RvcmUub24oYmluZEkxOG5TdG9yZSwgYm91bmRSZXNldCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzTW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBpZiAoYmluZEkxOG4gJiYgaTE4bikgYmluZEkxOG4uc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBpMThuLm9mZihlLCBib3VuZFJlc2V0KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGJpbmRJMThuU3RvcmUgJiYgaTE4bikgYmluZEkxOG5TdG9yZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGkxOG4uc3RvcmUub2ZmKGUsIGJvdW5kUmVzZXQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW2kxOG4sIGpvaW5lZE5TXSk7XG4gIHZhciBpc0luaXRpYWwgPSAoMCwgX3JlYWN0LnVzZVJlZikodHJ1ZSk7XG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzTW91bnRlZC5jdXJyZW50ICYmICFpc0luaXRpYWwuY3VycmVudCkge1xuICAgICAgc2V0VChnZXRUKTtcbiAgICB9XG5cbiAgICBpc0luaXRpYWwuY3VycmVudCA9IGZhbHNlO1xuICB9LCBbaTE4biwga2V5UHJlZml4XSk7XG4gIHZhciByZXQgPSBbdCwgaTE4biwgcmVhZHldO1xuICByZXQudCA9IHQ7XG4gIHJldC5pMThuID0gaTE4bjtcbiAgcmV0LnJlYWR5ID0gcmVhZHk7XG4gIGlmIChyZWFkeSkgcmV0dXJuIHJldDtcbiAgaWYgKCFyZWFkeSAmJiAhdXNlU3VzcGVuc2UpIHJldHVybiByZXQ7XG4gIHRocm93IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgKDAsIF91dGlscy5sb2FkTmFtZXNwYWNlcykoaTE4biwgbmFtZXNwYWNlcywgZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2FybiA9IHdhcm47XG5leHBvcnRzLndhcm5PbmNlID0gd2Fybk9uY2U7XG5leHBvcnRzLmxvYWROYW1lc3BhY2VzID0gbG9hZE5hbWVzcGFjZXM7XG5leHBvcnRzLmhhc0xvYWRlZE5hbWVzcGFjZSA9IGhhc0xvYWRlZE5hbWVzcGFjZTtcbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcblxuZnVuY3Rpb24gd2FybigpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSB7XG4gICAgdmFyIF9jb25zb2xlO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIGFyZ3NbMF0gPSBcInJlYWN0LWkxOG5leHQ6OiBcIi5jb25jYXQoYXJnc1swXSk7XG5cbiAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS53YXJuLmFwcGx5KF9jb25zb2xlLCBhcmdzKTtcbiAgfVxufVxuXG52YXIgYWxyZWFkeVdhcm5lZCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuT25jZSgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyAmJiBhbHJlYWR5V2FybmVkW2FyZ3NbMF1dKSByZXR1cm47XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycpIGFscmVhZHlXYXJuZWRbYXJnc1swXV0gPSBuZXcgRGF0ZSgpO1xuICB3YXJuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG59XG5cbmZ1bmN0aW9uIGxvYWROYW1lc3BhY2VzKGkxOG4sIG5zLCBjYikge1xuICBpMThuLmxvYWROYW1lc3BhY2VzKG5zLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGkxOG4uaXNJbml0aWFsaXplZCkge1xuICAgICAgY2IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGluaXRpYWxpemVkID0gZnVuY3Rpb24gaW5pdGlhbGl6ZWQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGkxOG4ub2ZmKCdpbml0aWFsaXplZCcsIGluaXRpYWxpemVkKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIGNiKCk7XG4gICAgICB9O1xuXG4gICAgICBpMThuLm9uKCdpbml0aWFsaXplZCcsIGluaXRpYWxpemVkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbGRJMThuZXh0SGFzTG9hZGVkTmFtZXNwYWNlKG5zLCBpMThuKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIGxuZyA9IGkxOG4ubGFuZ3VhZ2VzWzBdO1xuICB2YXIgZmFsbGJhY2tMbmcgPSBpMThuLm9wdGlvbnMgPyBpMThuLm9wdGlvbnMuZmFsbGJhY2tMbmcgOiBmYWxzZTtcbiAgdmFyIGxhc3RMbmcgPSBpMThuLmxhbmd1YWdlc1tpMThuLmxhbmd1YWdlcy5sZW5ndGggLSAxXTtcbiAgaWYgKGxuZy50b0xvd2VyQ2FzZSgpID09PSAnY2ltb2RlJykgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGxvYWROb3RQZW5kaW5nID0gZnVuY3Rpb24gbG9hZE5vdFBlbmRpbmcobCwgbikge1xuICAgIHZhciBsb2FkU3RhdGUgPSBpMThuLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3Iuc3RhdGVbXCJcIi5jb25jYXQobCwgXCJ8XCIpLmNvbmNhdChuKV07XG4gICAgcmV0dXJuIGxvYWRTdGF0ZSA9PT0gLTEgfHwgbG9hZFN0YXRlID09PSAyO1xuICB9O1xuXG4gIGlmIChvcHRpb25zLmJpbmRJMThuICYmIG9wdGlvbnMuYmluZEkxOG4uaW5kZXhPZignbGFuZ3VhZ2VDaGFuZ2luZycpID4gLTEgJiYgaTE4bi5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmJhY2tlbmQgJiYgaTE4bi5pc0xhbmd1YWdlQ2hhbmdpbmdUbyAmJiAhbG9hZE5vdFBlbmRpbmcoaTE4bi5pc0xhbmd1YWdlQ2hhbmdpbmdUbywgbnMpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChpMThuLmhhc1Jlc291cmNlQnVuZGxlKGxuZywgbnMpKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCFpMThuLnNlcnZpY2VzLmJhY2tlbmRDb25uZWN0b3IuYmFja2VuZCB8fCBpMThuLm9wdGlvbnMucmVzb3VyY2VzICYmICFpMThuLm9wdGlvbnMucGFydGlhbEJ1bmRsZWRMYW5ndWFnZXMpIHJldHVybiB0cnVlO1xuICBpZiAobG9hZE5vdFBlbmRpbmcobG5nLCBucykgJiYgKCFmYWxsYmFja0xuZyB8fCBsb2FkTm90UGVuZGluZyhsYXN0TG5nLCBucykpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYXNMb2FkZWROYW1lc3BhY2UobnMsIGkxOG4pIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIGlmICghaTE4bi5sYW5ndWFnZXMgfHwgIWkxOG4ubGFuZ3VhZ2VzLmxlbmd0aCkge1xuICAgIHdhcm5PbmNlKCdpMThuLmxhbmd1YWdlcyB3ZXJlIHVuZGVmaW5lZCBvciBlbXB0eScsIGkxOG4ubGFuZ3VhZ2VzKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc05ld2VySTE4bmV4dCA9IGkxOG4ub3B0aW9ucy5pZ25vcmVKU09OU3RydWN0dXJlICE9PSB1bmRlZmluZWQ7XG5cbiAgaWYgKCFpc05ld2VySTE4bmV4dCkge1xuICAgIHJldHVybiBvbGRJMThuZXh0SGFzTG9hZGVkTmFtZXNwYWNlKG5zLCBpMThuLCBvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBpMThuLmhhc0xvYWRlZE5hbWVzcGFjZShucywge1xuICAgIHByZWNoZWNrOiBmdW5jdGlvbiBwcmVjaGVjayhpMThuSW5zdGFuY2UsIGxvYWROb3RQZW5kaW5nKSB7XG4gICAgICBpZiAob3B0aW9ucy5iaW5kSTE4biAmJiBvcHRpb25zLmJpbmRJMThuLmluZGV4T2YoJ2xhbmd1YWdlQ2hhbmdpbmcnKSA+IC0xICYmIGkxOG5JbnN0YW5jZS5zZXJ2aWNlcy5iYWNrZW5kQ29ubmVjdG9yLmJhY2tlbmQgJiYgaTE4bkluc3RhbmNlLmlzTGFuZ3VhZ2VDaGFuZ2luZ1RvICYmICFsb2FkTm90UGVuZGluZyhpMThuSW5zdGFuY2UuaXNMYW5ndWFnZUNoYW5naW5nVG8sIG5zKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJyAmJiBDb21wb25lbnQubGVuZ3RoID4gMCA/IENvbXBvbmVudCA6ICdVbmtub3duJyk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoU1NSID0gd2l0aFNTUjtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF91c2VTU1IgPSByZXF1aXJlKFwiLi91c2VTU1JcIik7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIF9leGNsdWRlZCA9IFtcImluaXRpYWxJMThuU3RvcmVcIiwgXCJpbml0aWFsTGFuZ3VhZ2VcIl07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIHdpdGhTU1IoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBFeHRlbmQoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIEkxOG5leHRXaXRoU1NSKF9yZWYpIHtcbiAgICAgIHZhciBpbml0aWFsSTE4blN0b3JlID0gX3JlZi5pbml0aWFsSTE4blN0b3JlLFxuICAgICAgICAgIGluaXRpYWxMYW5ndWFnZSA9IF9yZWYuaW5pdGlhbExhbmd1YWdlLFxuICAgICAgICAgIHJlc3QgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMltcImRlZmF1bHRcIl0pKF9yZWYsIF9leGNsdWRlZCk7XG4gICAgICAoMCwgX3VzZVNTUi51c2VTU1IpKGluaXRpYWxJMThuU3RvcmUsIGluaXRpYWxMYW5ndWFnZSk7XG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShXcmFwcGVkQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkKHt9LCByZXN0KSk7XG4gICAgfVxuXG4gICAgSTE4bmV4dFdpdGhTU1IuZ2V0SW5pdGlhbFByb3BzID0gKDAsIF9jb250ZXh0LmNvbXBvc2VJbml0aWFsUHJvcHMpKFdyYXBwZWRDb21wb25lbnQpO1xuICAgIEkxOG5leHRXaXRoU1NSLmRpc3BsYXlOYW1lID0gXCJ3aXRoSTE4bmV4dFNTUihcIi5jb25jYXQoKDAsIF91dGlscy5nZXREaXNwbGF5TmFtZSkoV3JhcHBlZENvbXBvbmVudCksIFwiKVwiKTtcbiAgICBJMThuZXh0V2l0aFNTUi5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICByZXR1cm4gSTE4bmV4dFdpdGhTU1I7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoVHJhbnNsYXRpb24gPSB3aXRoVHJhbnNsYXRpb247XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3VzZVRyYW5zbGF0aW9uMyA9IHJlcXVpcmUoXCIuL3VzZVRyYW5zbGF0aW9uXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJmb3J3YXJkZWRSZWZcIl07XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIHdpdGhUcmFuc2xhdGlvbihucykge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBmdW5jdGlvbiBFeHRlbmQoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIEkxOG5leHRXaXRoVHJhbnNsYXRpb24oX3JlZikge1xuICAgICAgdmFyIGZvcndhcmRlZFJlZiA9IF9yZWYuZm9yd2FyZGVkUmVmLFxuICAgICAgICAgIHJlc3QgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMltcImRlZmF1bHRcIl0pKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgICAgIHZhciBfdXNlVHJhbnNsYXRpb24gPSAoMCwgX3VzZVRyYW5zbGF0aW9uMy51c2VUcmFuc2xhdGlvbikobnMsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdCksIHt9LCB7XG4gICAgICAgIGtleVByZWZpeDogb3B0aW9ucy5rZXlQcmVmaXhcbiAgICAgIH0pKSxcbiAgICAgICAgICBfdXNlVHJhbnNsYXRpb24yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VUcmFuc2xhdGlvbiwgMyksXG4gICAgICAgICAgdCA9IF91c2VUcmFuc2xhdGlvbjJbMF0sXG4gICAgICAgICAgaTE4biA9IF91c2VUcmFuc2xhdGlvbjJbMV0sXG4gICAgICAgICAgcmVhZHkgPSBfdXNlVHJhbnNsYXRpb24yWzJdO1xuXG4gICAgICB2YXIgcGFzc0Rvd25Qcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdCksIHt9LCB7XG4gICAgICAgIHQ6IHQsXG4gICAgICAgIGkxOG46IGkxOG4sXG4gICAgICAgIHRSZWFkeTogcmVhZHlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0aW9ucy53aXRoUmVmICYmIGZvcndhcmRlZFJlZikge1xuICAgICAgICBwYXNzRG93blByb3BzLnJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMud2l0aFJlZiAmJiBmb3J3YXJkZWRSZWYpIHtcbiAgICAgICAgcGFzc0Rvd25Qcm9wcy5mb3J3YXJkZWRSZWYgPSBmb3J3YXJkZWRSZWY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKFdyYXBwZWRDb21wb25lbnQsIHBhc3NEb3duUHJvcHMpO1xuICAgIH1cblxuICAgIEkxOG5leHRXaXRoVHJhbnNsYXRpb24uZGlzcGxheU5hbWUgPSBcIndpdGhJMThuZXh0VHJhbnNsYXRpb24oXCIuY29uY2F0KCgwLCBfdXRpbHMuZ2V0RGlzcGxheU5hbWUpKFdyYXBwZWRDb21wb25lbnQpLCBcIilcIik7XG4gICAgSTE4bmV4dFdpdGhUcmFuc2xhdGlvbi5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcblxuICAgIHZhciBmb3J3YXJkUmVmID0gZnVuY3Rpb24gZm9yd2FyZFJlZihwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gKDAsIF9yZWFjdC5jcmVhdGVFbGVtZW50KShJMThuZXh0V2l0aFRyYW5zbGF0aW9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb3B0aW9ucy53aXRoUmVmID8gKDAsIF9yZWFjdC5mb3J3YXJkUmVmKShmb3J3YXJkUmVmKSA6IEkxOG5leHRXaXRoVHJhbnNsYXRpb247XG4gIH07XG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3RWZXJzaW9uID0gJzE4LjIuMCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50QWN0UXVldWUgPSB7XG4gIGN1cnJlbnQ6IG51bGwsXG4gIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuXG4gIGlzQmF0Y2hpbmdMZWdhY3k6IGZhbHNlLFxuICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogZmFsc2Vcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJcbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEFjdFF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdmdW5jdGlvbicgJiYgcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgJyArICdmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJyk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHtcbiAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoZSBgaWZgIHN0YXRlbWVudCBoZXJlIHByZXZlbnRzIGF1dG8tZGlzYWJsaW5nIG9mIHRoZSBzYWZlXG4gICAgICAgICAgLy8gY29lcmNpb24gRVNMaW50IHJ1bGUsIHNvIHdlIG11c3QgbWFudWFsbHkgZGlzYWJsZSBpdCBiZWxvdy5cbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgICBpZiAobWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWFwcGVkQ2hpbGQua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gXCIgKyAnSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgLy8gVE9ETzogU2Vjb25kIGFyZ3VtZW50IHVzZWQgdG8gYmUgYW4gb3B0aW9uYWwgYGNhbGN1bGF0ZUNoYW5nZWRCaXRzYFxuICAvLyBmdW5jdGlvbi4gV2FybiB0byByZXNlcnZlIGZvciBmdXR1cmUgdXNlP1xuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGwsXG4gICAgLy8gQWRkIHRoZXNlIHRvIHVzZSBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWTSBhcyBTZXJ2ZXJDb250ZXh0XG4gICAgX2RlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBfZ2xvYmFsTmFtZTogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgIC8vIFRoaXMgbWlnaHQgdGhyb3cgZWl0aGVyIGJlY2F1c2UgaXQncyBtaXNzaW5nIG9yIHRocm93cy4gSWYgc28sIHdlIHRyZWF0IGl0XG4gICAgLy8gYXMgc3RpbGwgdW5pbml0aWFsaXplZCBhbmQgdHJ5IGFnYWluIG5leHQgdGltZS4gV2hpY2ggaXMgdGhlIHNhbWUgYXMgd2hhdFxuICAgIC8vIGhhcHBlbnMgaWYgdGhlIGN0b3Igb3IgYW55IHdyYXBwZXJzIHByb2Nlc3NpbmcgdGhlIGN0b3IgdGhyb3dzLiBUaGlzIG1pZ2h0XG4gICAgLy8gZW5kIHVwIGZpeGluZyBpdCBpZiB0aGUgcmVzb2x1dGlvbiB3YXMgYSBjb25jdXJyZW5jeSBidWcuXG5cbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgLy8gSW4gY2FzZSwgd2UncmUgc3RpbGwgdW5pbml0aWFsaXplZCwgdGhlbiB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgdGhlbmFibGVcbiAgICAgIC8vIHRvIHJlc29sdmUuIFNldCBpdCBhcyBwZW5kaW5nIGluIHRoZSBtZWFudGltZS5cbiAgICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHZhciBtb2R1bGVPYmplY3QgPSBwYXlsb2FkLl9yZXN1bHQ7XG5cbiAgICB7XG4gICAgICBpZiAobW9kdWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcblwiICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/JywgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoISgnZGVmYXVsdCcgaW4gbW9kdWxlT2JqZWN0KSkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IFVuaW5pdGlhbGl6ZWQsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghcmVuZGVyLm5hbWUgJiYgIXJlbmRlci5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QubWVtbygocHJvcHMpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXR5cGUubmFtZSAmJiAhdHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICB7XG4gICAgaWYgKGRpc3BhdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yJyArICcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4nICsgJzEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbicgKyAnMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbicgKyAnMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcbicgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJyk7XG4gICAgfVxuICB9IC8vIFdpbGwgcmVzdWx0IGluIGEgbnVsbCBhY2Nlc3MgZXJyb3IgaWYgYWNjZXNzZWQgb3V0c2lkZSByZW5kZXIgcGhhc2UuIFdlXG4gIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgdGhyb3cgb3VyIG93biBlcnJvciBiZWNhdXNlIHRoaXMgaXMgaW4gYSBob3QgcGF0aC5cbiAgLy8gQWxzbyBoZWxwcyBlbnN1cmUgdGhpcyBpcyBpbmxpbmVkLlxuXG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbigpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZURlZmVycmVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlSWQoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSWQoKTtcbn1cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oc2NvcGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHt9O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuXG4gIHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzY29wZSgpO1xuICB9IGZpbmFsbHkge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSBwcmV2VHJhbnNpdGlvbjtcblxuICAgIHtcbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycykge1xuICAgICAgICB2YXIgdXBkYXRlZEZpYmVyc0NvdW50ID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZTtcblxuICAgICAgICBpZiAodXBkYXRlZEZpYmVyc0NvdW50ID4gMTApIHtcbiAgICAgICAgICB3YXJuKCdEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uICcgKyAnSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gJyArICdPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSBmYWxzZTtcbnZhciBlbnF1ZXVlVGFza0ltcGwgPSBudWxsO1xuZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICBpZiAoZW5xdWV1ZVRhc2tJbXBsID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlYWQgcmVxdWlyZSBvZmYgdGhlIG1vZHVsZSBvYmplY3QgdG8gZ2V0IGFyb3VuZCB0aGUgYnVuZGxlcnMuXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRoZW0gdG8gZGV0ZWN0IGEgcmVxdWlyZSBhbmQgYnVuZGxlIGEgTm9kZSBwb2x5ZmlsbC5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKCdyZXF1aXJlJyArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgdmFyIG5vZGVSZXF1aXJlID0gbW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXTsgLy8gYXNzdW1pbmcgd2UncmUgaW4gbm9kZSwgbGV0J3MgdHJ5IHRvIGdldCBub2RlJ3NcbiAgICAgIC8vIHZlcnNpb24gb2Ygc2V0SW1tZWRpYXRlLCBieXBhc3NpbmcgZmFrZSB0aW1lcnMgaWYgYW55LlxuXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBub2RlUmVxdWlyZS5jYWxsKG1vZHVsZSwgJ3RpbWVycycpLnNldEltbWVkaWF0ZTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAvLyB3ZSdyZSBpbiBhIGJyb3dzZXJcbiAgICAgIC8vIHdlIGNhbid0IHVzZSByZWd1bGFyIHRpbWVycyBiZWNhdXNlIHRoZXkgbWF5IHN0aWxsIGJlIGZha2VkXG4gICAgICAvLyBzbyB3ZSB0cnkgTWVzc2FnZUNoYW5uZWwrcG9zdE1lc3NhZ2UgaW5zdGVhZFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCAnICsgJ3NvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiAnICsgJ1BsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgJyArICdpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG59XG5cbnZhciBhY3RTY29wZURlcHRoID0gMDtcbnZhciBkaWRXYXJuTm9Bd2FpdEFjdCA9IGZhbHNlO1xuZnVuY3Rpb24gYWN0KGNhbGxiYWNrKSB7XG4gIHtcbiAgICAvLyBgYWN0YCBjYWxscyBjYW4gYmUgbmVzdGVkLCBzbyB3ZSB0cmFjayB0aGUgZGVwdGguIFRoaXMgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgYGFjdGAgc2NvcGVzIG9uIHRoZSBzdGFjay5cbiAgICB2YXIgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgIGFjdFNjb3BlRGVwdGgrKztcblxuICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBvdXRlcm1vc3QgYGFjdGAgc2NvcGUuIEluaXRpYWxpemUgdGhlIHF1ZXVlLiBUaGUgcmVjb25jaWxlclxuICAgICAgLy8gd2lsbCBkZXRlY3QgdGhlIHF1ZXVlIGFuZCB1c2UgaXQgaW5zdGVhZCBvZiBTY2hlZHVsZXIuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc0JhdGNoaW5nTGVnYWN5ID0gUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuIE9ubHlcbiAgICAgIC8vIHNldCB0byBgdHJ1ZWAgd2hpbGUgdGhlIGdpdmVuIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLCBub3QgZm9yIHVwZGF0ZXNcbiAgICAgIC8vIHRyaWdnZXJlZCBkdXJpbmcgYW4gYXN5bmMgZXZlbnQsIGJlY2F1c2UgdGhpcyBpcyBob3cgdGhlIGxlZ2FjeVxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gb2YgYGFjdGAgYmVoYXZlZC5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTsgLy8gUmVwbGljYXRlIGJlaGF2aW9yIG9mIG9yaWdpbmFsIGBhY3RgIGltcGxlbWVudGF0aW9uIGluIGxlZ2FjeSBtb2RlLFxuICAgICAgLy8gd2hpY2ggZmx1c2hlZCB1cGRhdGVzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzY29wZSBmdW5jdGlvbiBleGl0cywgZXZlblxuICAgICAgLy8gaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvbi5cblxuICAgICAgaWYgKCFwcmV2SXNCYXRjaGluZ0xlZ2FjeSAmJiBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSkge1xuICAgICAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSBwcmV2SXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRoZW5hYmxlUmVzdWx0ID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgYW4gYXN5bmMgZnVuY3Rpb24gKGkuZS4gcmV0dXJuZWQgYSBwcm9taXNlKS4gV2FpdFxuICAgICAgLy8gZm9yIGl0IHRvIHJlc29sdmUgYmVmb3JlIGV4aXRpbmcgdGhlIGN1cnJlbnQgc2NvcGUuXG5cbiAgICAgIHZhciB3YXNBd2FpdGVkID0gZmFsc2U7XG4gICAgICB2YXIgdGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3YXNBd2FpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGVuYWJsZVJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICAgICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBXZSd2ZSBleGl0ZWQgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZVxuICAgICAgICAgICAgICAvLyBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2FsbGJhY2sgdGhyZXcgYW4gZXJyb3IuXG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB7XG4gICAgICAgIGlmICghZGlkV2Fybk5vQXdhaXRBY3QgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0F3YWl0ZWQpIHtcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGVycm9yKCdZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuICcgKyAnVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsICcgKyAnaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyICcgKyAnc2NvcGVzLiAnICsgJ1lvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIG5vdCBhbiBhc3luYyBmdW5jdGlvbi4gRXhpdCB0aGUgY3VycmVudCBzY29wZVxuICAgICAgLy8gaW1tZWRpYXRlbHksIHdpdGhvdXQgYXdhaXRpbmcuXG5cbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gRmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3F1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAoX3F1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShfcXVldWUpO1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9IC8vIFJldHVybiBhIHRoZW5hYmxlLiBJZiB0aGUgdXNlciBhd2FpdHMgaXQsIHdlJ2xsIGZsdXNoIGFnYWluIGluXG4gICAgICAgIC8vIGNhc2UgYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQgYnkgYSBtaWNyb3Rhc2suXG5cblxuICAgICAgICB2YXIgX3RoZW5hYmxlID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIENvbmZpcm0gd2UgaGF2ZW4ndCByZS1lbnRlcmVkIGFub3RoZXIgYGFjdGAgc2NvcGUsIGluIGNhc2VcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGRvZXMgc29tZXRoaW5nIHdlaXJkIGxpa2UgYXdhaXQgdGhlIHRoZW5hYmxlXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZSBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBpbnNpZGUgYSBuZXN0ZWQgYGFjdGAgc2NvcGUsIHRoZSByZXR1cm5lZCB0aGVuYWJsZVxuICAgICAgICAvLyBpbW1lZGlhdGVseSByZXNvbHZlcy4gVGhlIG91dGVyIHNjb3BlIHdpbGwgZmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3RoZW5hYmxlMiA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCkge1xuICB7XG4gICAgaWYgKHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSkge1xuICAgICAgZXJyb3IoJ1lvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gJyArICdCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiAnKTtcbiAgICB9XG5cbiAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHtcbiAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkLiBGaW5pc2guXG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIGZsdXNoaW5nIHdvcmsgdW50aWwgdGhlcmUncyBub25lIGxlZnQuXG4gICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICB7XG4gICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAvLyBQcmV2ZW50IHJlLWVudHJhbmNlLlxuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgfSB3aGlsZSAoY2FsbGJhY2sgIT09IG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyB0aHJvd3MsIGxlYXZlIHRoZSByZW1haW5pbmcgY2FsbGJhY2tzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgcXVldWUgPSBxdWV1ZS5zbGljZShpICsgMSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IHN0YXJ0VHJhbnNpdGlvbjtcbmV4cG9ydHMudW5zdGFibGVfYWN0ID0gYWN0O1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSB1c2VEZWZlcnJlZFZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUlkID0gdXNlSWQ7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSB1c2VJbnNlcnRpb25FZmZlY3Q7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gdXNlU3luY0V4dGVybmFsU3RvcmU7XG5leHBvcnRzLnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksbj1TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpLHA9U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLHE9U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLHI9U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpLHQ9U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpLHU9U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksdj1TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIiksdz1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIikseD1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSx5PVN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpLHo9U3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIEEoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPXomJmFbel18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1cbnZhciBCPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxDPU9iamVjdC5hc3NpZ24sRD17fTtmdW5jdGlvbiBFKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9RS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtcbkUucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcihcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0UucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O2Z1bmN0aW9uIEYoKXt9Ri5wcm90b3R5cGU9RS5wcm90b3R5cGU7ZnVuY3Rpb24gRyhhLGIsZSl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1lfHxCfXZhciBIPUcucHJvdG90eXBlPW5ldyBGO1xuSC5jb25zdHJ1Y3Rvcj1HO0MoSCxFLnByb3RvdHlwZSk7SC5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgST1BcnJheS5pc0FycmF5LEo9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxLPXtjdXJyZW50Om51bGx9LEw9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE0oYSxiLGUpe3ZhciBkLGM9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihkIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSi5jYWxsKGIsZCkmJiFMLmhhc093blByb3BlcnR5KGQpJiYoY1tkXT1iW2RdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpYy5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtjLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGQgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWNbZF0mJihjW2RdPWdbZF0pO3JldHVybnskJHR5cGVvZjpsLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpjLF9vd25lcjpLLmN1cnJlbnR9fVxuZnVuY3Rpb24gTihhLGIpe3JldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTyhhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIFA9L1xcLysvZztmdW5jdGlvbiBRKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gUihhLGIsZSxkLGMpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBsOmNhc2UgbjpoPSEwfX1pZihoKXJldHVybiBoPWEsYz1jKGgpLGE9XCJcIj09PWQ/XCIuXCIrUShoLDApOmQsSShjKT8oZT1cIlwiLG51bGwhPWEmJihlPWEucmVwbGFjZShQLFwiJCYvXCIpK1wiL1wiKSxSKGMsYixlLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9YyYmKE8oYykmJihjPU4oYyxlKyghYy5rZXl8fGgmJmgua2V5PT09Yy5rZXk/XCJcIjooXCJcIitjLmtleSkucmVwbGFjZShQLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGMpKSwxO2g9MDtkPVwiXCI9PT1kP1wiLlwiOmQrXCI6XCI7aWYoSShhKSlmb3IodmFyIGc9MDtnPGEubGVuZ3RoO2crKyl7az1cbmFbZ107dmFyIGY9ZCtRKGssZyk7aCs9UihrLGIsZSxmLGMpfWVsc2UgaWYoZj1BKGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1kK1EoayxnKyspLGgrPVIoayxiLGUsZixjKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9U3RyaW5nKGEpLEVycm9yKFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIisoXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikrXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIpO3JldHVybiBofVxuZnVuY3Rpb24gUyhhLGIsZSl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZD1bXSxjPTA7UihhLGQsXCJcIixcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBiLmNhbGwoZSxhLGMrKyl9KTtyZXR1cm4gZH1mdW5jdGlvbiBUKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7Yi50aGVuKGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1ifSxmdW5jdGlvbihiKXtpZigwPT09YS5fc3RhdHVzfHwtMT09PWEuX3N0YXR1cylhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yn0pOy0xPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTAsYS5fcmVzdWx0PWIpfWlmKDE9PT1hLl9zdGF0dXMpcmV0dXJuIGEuX3Jlc3VsdC5kZWZhdWx0O3Rocm93IGEuX3Jlc3VsdDt9XG52YXIgVT17Y3VycmVudDpudWxsfSxWPXt0cmFuc2l0aW9uOm51bGx9LFc9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6VSxSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzpWLFJlYWN0Q3VycmVudE93bmVyOkt9O2V4cG9ydHMuQ2hpbGRyZW49e21hcDpTLGZvckVhY2g6ZnVuY3Rpb24oYSxiLGUpe1MoYSxmdW5jdGlvbigpe2IuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlKX0sY291bnQ6ZnVuY3Rpb24oYSl7dmFyIGI9MDtTKGEsZnVuY3Rpb24oKXtiKyt9KTtyZXR1cm4gYn0sdG9BcnJheTpmdW5jdGlvbihhKXtyZXR1cm4gUyhhLGZ1bmN0aW9uKGEpe3JldHVybiBhfSl8fFtdfSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFPKGEpKXRocm93IEVycm9yKFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9RTtleHBvcnRzLkZyYWdtZW50PXA7XG5leHBvcnRzLlByb2ZpbGVyPXI7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUc7ZXhwb3J0cy5TdHJpY3RNb2RlPXE7ZXhwb3J0cy5TdXNwZW5zZT13O2V4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9VztcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixlKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiK2ErXCIuXCIpO3ZhciBkPUMoe30sYS5wcm9wcyksYz1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Sy5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGM9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilKLmNhbGwoYixmKSYmIUwuaGFzT3duUHJvcGVydHkoZikmJihkW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZC5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO1xuZm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEudHlwZSxrZXk6YyxyZWY6ayxwcm9wczpkLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEpe2E9eyQkdHlwZW9mOnUsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsLF9kZWZhdWx0VmFsdWU6bnVsbCxfZ2xvYmFsTmFtZTpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp0LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1NO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1NLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07XG5leHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PU87ZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp5LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6VH19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp4LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy5zdGFydFRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dmFyIGI9Vi50cmFuc2l0aW9uO1YudHJhbnNpdGlvbj17fTt0cnl7YSgpfWZpbmFsbHl7Vi50cmFuc2l0aW9uPWJ9fTtleHBvcnRzLnVuc3RhYmxlX2FjdD1mdW5jdGlvbigpe3Rocm93IEVycm9yKFwiYWN0KC4uLikgaXMgbm90IHN1cHBvcnRlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkcyBvZiBSZWFjdC5cIik7fTtcbmV4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNvbnRleHQoYSl9O2V4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlPWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlRGVmZXJyZWRWYWx1ZShhKX07ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUlkPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VJZCgpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGUpe3JldHVybiBVLmN1cnJlbnQudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsZSl9O1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUluc2VydGlvbkVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGUpe3JldHVybiBVLmN1cnJlbnQudXNlUmVkdWNlcihhLGIsZSl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlU3RhdGUoYSl9O2V4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmU9ZnVuY3Rpb24oYSxiLGUpe3JldHVybiBVLmN1cnJlbnQudXNlU3luY0V4dGVybmFsU3RvcmUoYSxiLGUpfTtcbmV4cG9ydHMudXNlVHJhbnNpdGlvbj1mdW5jdGlvbigpe3JldHVybiBVLmN1cnJlbnQudXNlVHJhbnNpdGlvbigpfTtleHBvcnRzLnZlcnNpb249XCIxOC4yLjBcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKFwiZGV2ZWxvcG1lbnRcIiA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogVGhpcyBmaWxlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGZyb20gYHByZS1wdWJsaXNoLmpzYC5cbiAqIERvIG5vdCBtYW51YWxseSBlZGl0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcImFyZWFcIjogdHJ1ZSxcbiAgXCJiYXNlXCI6IHRydWUsXG4gIFwiYnJcIjogdHJ1ZSxcbiAgXCJjb2xcIjogdHJ1ZSxcbiAgXCJlbWJlZFwiOiB0cnVlLFxuICBcImhyXCI6IHRydWUsXG4gIFwiaW1nXCI6IHRydWUsXG4gIFwiaW5wdXRcIjogdHJ1ZSxcbiAgXCJsaW5rXCI6IHRydWUsXG4gIFwibWV0YVwiOiB0cnVlLFxuICBcInBhcmFtXCI6IHRydWUsXG4gIFwic291cmNlXCI6IHRydWUsXG4gIFwidHJhY2tcIjogdHJ1ZSxcbiAgXCJ3YnJcIjogdHJ1ZVxufTtcbiIsImV4cG9ydCBjb25zdCBURVNUX0VORCA9IFwidGVzdF9lbmRcIjtcclxuZXhwb3J0IGNvbnN0IExBTkcgPSAnbGFuZyc7XHJcbmV4cG9ydCBjb25zdCBMQU5HU19UWVBFUyA9IHtcclxuICAgIFVBOiAndWEnLFxyXG4gICAgRU46ICdlbicsXHJcbiAgICBSVTogJ3J1JyxcclxufSIsImV4cG9ydCBjb25zdCBQTEFORVRfSE9TVCA9IHdpbmRvdy5ERVZFTE9QTUVOVF9NT0RFXHJcbiAgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luXHJcbiAgOiBcImh0dHBzOi8vcGxhbmV0YWVtYWlsc2VuZGVyLmF6dXJld2Vic2l0ZXMubmV0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUExBTkVUX0VORFBPSU5UID0gYCR7UExBTkVUX0hPU1R9L3Jlc3VsdGA7XHJcbmV4cG9ydCBjb25zdCBQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCA9IGAke1BMQU5FVF9IT1NUfS9jb250YWN0YDtcclxuZXhwb3J0IGNvbnN0IFBMQU5FVF9FTkRQT0lOVF9DT1VSU0UgPSBgJHtQTEFORVRfSE9TVH0vY291cnNlYDtcclxuIiwiZXhwb3J0IGNvbnN0IFBIT05FX1JFR0VYID0gLyhcXChcXGR7M31cXCkpIFxcZHszfSBcXGR7Mn0gXFxkezJ9LztcclxuZXhwb3J0IGNvbnN0IEVNQUlMX1JFR0VYID0gL1teQCBcXHRcXHJcXG5dK0BbXkAgXFx0XFxyXFxuXStcXC5bXkAgXFx0XFxyXFxuXSsvO1xyXG4iLCJtb2R1bGUuZXhwb3J0cz17XHJcbiAgICBcIm1haW5QYWdlXCI6IFwiTWFpblwiLFxyXG4gICAgXCJ0ZXN0UGFnZVwiOiBcIlRlc3RcIixcclxuICAgIFwic2VydmljZXNQYWdlXCI6IFwiU2VydmljZXNcIixcclxuICAgIFwicmV2aWV3c1BhZ2VcIjogXCJSZXZpZXdzXCIsXHJcbiAgICBcImJvb2tzUGFnZVwiOiBcIkJvb2tzXCIsXHJcbiAgICBcImFib3V0VXNQYWdlXCI6IFwiQWJvdXQgVXNcIixcclxuICAgIFwiY29udGFjdFBhZ2VcIjogXCJDb250YWN0c1wiXHJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XHJcbiAgICBcIm1haW5QYWdlXCI6IFwi0JPQu9Cw0LLQvdCw0Y9cIixcclxuICAgIFwidGVzdFBhZ2VcIjogXCLQotC10YHRglwiLFxyXG4gICAgXCJzZXJ2aWNlc1BhZ2VcIjogXCLQo9GB0LvRg9Cz0LhcIixcclxuICAgIFwicmV2aWV3c1BhZ2VcIjogXCLQntGC0LfRi9Cy0YtcIixcclxuICAgIFwiYm9va3NQYWdlXCI6IFwi0JrQvdC40LPQuFwiLFxyXG4gICAgXCJhYm91dFVzUGFnZVwiOiBcItCeINC90LDRgVwiLFxyXG4gICAgXCJjb250YWN0UGFnZVwiOiBcItCa0L7QvdGC0LDQutGC0YtcIixcclxuICAgIFwic3RhcnRUZXN0XCI6IFwi0J/RgNC+0LnRgtC4INGC0LXRgdGCXCIsXHJcbiAgICBcImxlYXJuTW9yZVwiOiBcItCj0LfQvdCw0YLRjCDQsdC+0LvRjNGI0LVcIixcclxuICAgIFwicmVhZE1vcmVcIjogXCLQp9C40YLQsNGC0Ywg0LTQsNC70LXQtVwiLFxyXG4gICAgXCJzaWduVXBcIjogXCLQl9CQ0J/QmNCh0JDQotCs0KHQr1wiLFxyXG4gICAgXCJ2aXNpdFNpdGVcIjogXCLQn9Ce0KHQldCi0JjQotCsINCh0JDQmdCiXCIsXHJcbiAgICBcInByb2NlZWRcIjogXCLQn9GA0L7QtNC+0LvQttC40YLRjFwiLFxyXG4gICAgXCJzZW5kXCI6IFwi0J7RgtC/0YDQsNCy0LjRgtGMXCIsXHJcbiAgICBcInRlc3RpbmdUaXRsZVwiOiBcItCi0LXRgdGC0LjRgNC+0LLQsNC90LjQtVwiLFxyXG4gICAgXCJwcm9ncmFtVGl0bGVcIjogXCLQn9GA0L7Qs9GA0LDQvNC80LBcIixcclxuICAgIFwidHJhY2tVc1wiOiBcItCf0L7QtNC/0LjRiNC40YLQtdGB0Ywg0L3QsCDQvdCw0YE6XCIsXHJcbiAgICBcImNvbm5lY3RXaXRoVXNcIjogXCLQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0L3QsNC80Lg6XCIsXHJcbiAgICBcIm91clBob25lc1wiOiBcItCd0LDRiNC4INGC0LXQu9C10YTQvtC90Ys6XCIsXHJcbiAgICBcInlvdVdpbGxMZWFybjpcIjogXCLQndCwINGN0YLQvtC8INC60YPRgNGB0LUg0LLRiyDRg9C30L3QsNC10YLQtTpcIixcclxuICAgIFwicmV2aWV3c1wiOiBcItCe0YLQt9GL0LLRi1wiLFxyXG4gICAgXCLRgW91cnNlRHVyYXRpb25cIjogXCLQlNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LrRg9GA0YHQsDpcIixcclxuICAgIFwid2Vla3NcIjogXCIyINC90LXQtNC10LvQuFwiLFxyXG4gICAgXCJzY2hlZHVsZVwiOiBcItCT0YDQsNGE0LjQujpcIixcclxuICAgIFwiaW5kaXZpZHVhbFwiOiBcItCY0L3QtNC40LLQuNC00YPQsNC70YzQvdGL0LlcIixcclxuICAgIFwidGhlb3J5XCI6IFwi0KLQtdC+0YDQuNGPXCIsXHJcbiAgICBcInByYWN0aWNlXCI6IFwi0J/RgNCw0LrRgtC40LrQsFwiLFxyXG4gICAgXCJmb3JtTmFtZVRpdGxlXCI6IFwi0JjQvNGPKlwiLFxyXG4gICAgXCJmb3JtU3ViTmFtZVRpdGxlXCI6IFwi0KTQsNC80LjQu9C40Y8qXCIsXHJcbiAgICBcImZvcm1QaG9uZVRpdGxlXCI6IFwi0KLQtdC70LXRhNC+0L0qXCIsXHJcbiAgICBcImZvcm1FbWFpbFRpdGxlXCI6IFwi0K3Qu9C10LrRgtGA0L7QvdC90LDRjyDQv9C+0YfRgtCwXCIsXHJcbiAgICBcImZvcm1NZXNzVGl0bGVcIjogXCLQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LVcIixcclxuICAgIFwiZm9ybU1lc3NQbGFjZVwiOiBcItCd0LDQv9C40YjQuNGC0LUg0YHQvtC+0LHRidC10L3QuNC1XCIsXHJcbiAgICBcImZvcm1FcnJvck5hbWVcIjogXCLQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y9cIixcclxuICAgIFwiZm9ybUVycm9yU3ViTmFtZVwiOiBcItCS0LLQtdC00LjRgtC1INCy0LDRiNC1INGE0LDQvNC40LvQuNGOXCIsXHJcbiAgICBcImZvcm1FcnJvclBob25lXCI6IFwi0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdC+INCy0LDRiCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LBcIixcclxuICAgIFwiZm9ybUVycm9yRW1haWxcIjogXCLQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90L4g0LLQsNGIIGVtYWlsXCIsXHJcbiAgICBcImZvcm1FcnJvclwiOiBcItCf0YDQvtC40LfQvtGI0LvQsCDQvdC10LjQt9Cy0LXRgdGC0L3QsNGPINC+0YjQuNCx0LrQsC4g0J/QvtCy0YLQvtGA0LjRgtC1INC/0L7Qv9GL0YLQutGDINC/0L7Qt9C20LUhXCIsXHJcbiAgICBcIm1haW5QYWdlVGl0bGVcIjogXCLQk9GA0YPQv9C/0LAg4oCc0J/Qu9Cw0L3QtdGC0LDigJ1cIixcclxuICAgIFwibWFpblBhZ2VTdWJUaXRsZVwiOiBcItCc0Ysg0LrQvtC80LDQvdC00LAg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70L7Qsiwg0YHQv9C10YbQuNCw0LvQuNC30LjRgNGD0Y7RidC40YXRgdGPINC90LAg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjQuCDQtNGD0YjQtdCy0L3QvtCz0L4g0LfQtNC+0YDQvtCy0YzRjywg0YHQsNC80L7RgdC+0LLQtdGA0YjQtdGB0YLQstC+0LLQsNC90LjRjyDQuCDQu9C40YfQvdC+0Lkg0LzQvtGC0LjQstCw0YbQuNC4XCIsXHJcbiAgICBcIm1haW5QYWdlTWlzc2lvblN1YlRpdGxlXCI6IFwi0J3QsNGI0LAg0LzQuNGB0YHQuNGPXCIsXHJcbiAgICBcIm1haW5QYWdlTWlzc2lvblRpdGxlXCI6IFwiPGkgY2xhc3M9J3RleCc+PGltZyBjbGFzcz0ndGV4dC1saW5lJyBzcmM9Jy4vaW1hZ2VzL3RleHQtbGluZS5zdmcnIGFsdD0naW1nLWxpbmUnPtCj0YHQuNC70LXQvdC40LUg0LLQu9Cw0LTQtdC70YzRhtC10LIsPC9pPiDRgNGD0LrQvtCy0L7QtNC40YLQtdC70LXQuSA8YnI+INC4INC40YUg0L7QutGA0YPQttC10L3QuNGPINC/0L7RgdGA0LXQtNGB0YLQstC+0Lwg0YPQstC10LvQuNGH0LXQvdC40Y8g0L7QsdGM0LXQvNCwINC20LjQt9C90LXQvdC90L7QuSDRgdC40LvRi1wiLFxyXG4gICAgXCJtYWluUGFnZUNhcnRzVGl0bGUxXCI6IFwi0J/RgNC+0LnQtNC40YLQtSDQntC60YHRhNC+0YDQtNGB0LrQuNC5INCi0LXRgdGCXCIsXHJcbiAgICBcIm1haW5QYWdlQ2FydHNEZXMxXCI6IFwi0JLRiyDigJMg0YPQvdC40LrQsNC70YzQvdGL0Lkg0YfQtdC70L7QstC10Log0YEg0L/RgNC40YHRg9GJ0LjQvNC4INC70LjRiNGMINCy0LDQvCDQu9C40YfQvdC+0YHRgtC90YvQvNC4INC60LDRh9C10YHRgtCy0LDQvNC4LiDQndC10LrQvtGC0L7RgNGL0LUg0LjQtyDRjdGC0LjRhSDQutCw0YfQtdGB0YLQsiDQv9C+0LzQvtCz0LDRjtGCINCy0LDQvCDQtNC+0LHQuNCy0LDRgtGM0YHRjyDQsdC+0LvRjNGI0LXQs9C+INCyINC20LjQt9C90LgsINCyINGC0L4g0LLRgNC10LzRjyDQutCw0Log0LTRgNGD0LPQuNC1INC80LXRiNCw0Y7RgiDQstCw0Lwg0Lgg0L3QtSDQv9C+0LfQstC+0LvRj9GO0YIg0L/QvtC70L3QvtGB0YLRjNGOIC4uLlwiLFxyXG4gICAgXCJtYWluUGFnZUNhcnRzRGVzMlwiOiBcItCf0L7QvNC+0YnRjCDRgSDRg9C70YPRh9GI0LXQvdC40LXQvCDQsdC40LfQvdC10YHQsCDQv9GD0YLQtdC8INC+0LHRidC10L3QuNGPINC4INC00L7QstC10LTQtdC90LjQtdC8INC00LXQu9CwINC00L4g0LrQvtC90YbQsC4gPGJyPiDQnNGLINC/0YDQuNC10LTQtdC8INC4INC/0L7QvNC+0LbQtdC8INC/0YDQvtCy0LXRgdGC0Lgg0JLQsNGI0LjRhSDRgdC+0YLRgNGD0LTQvdC40LrQvtCyINC/0L4g0Y3RgtC+0LzRgyDQutGD0YDRgdGDLiDQktCw0Lwg0L3QtSDQvdCw0LTQviDQvtGC0YDRi9Cy0LDRgtGMINC40YUg0L7RgiDRgNCw0LHQvtGC0YsgLi4uXCIsXHJcbiAgICBcIm1haW5QYWdlSGlzdG9yeVRpdGxlXCI6IFwi0J3QsNGI0LAg0LjRgdGC0L7RgNC40Y9cIixcclxuICAgIFwidGVzdFBhZ2VTZWNNYWluVGl0bGVcIjogXCLQntC60YHRhNC+0YDQtNGB0LrQuNC5INGC0LXRgdGCXCIsXHJcbiAgICBcInRlc3RQYWdlU2VjTWFpblN1YlRpdGxlXCI6IFwi0KfRgtC+0LEg0YPQt9C90LDRgtGMINGD0LfQvdCw0YLRjCDQviDRgdCy0L7QuNGFINGB0L/QvtGB0L7QsdC90L7RgdGC0Y/RhSDQv9GA0L7QudC00LjRgtC1INCx0LXRgdC/0LvQsNGC0L3Ri9C5INCe0LrRgdGE0L7RgNC00YHQutC40Lkg0YLQtdGB0YIg0L7RhtC10L3QutC4INC70LjRh9C90L7RgdGC0LghXCIsXHJcbiAgICBcInRlc3RQYWdlTWFpblRpdGxlXCI6IFwi0J7QutGB0YTQvtGA0LTRgdC60LjQuSDRgtC10YHRgiA8YnI+INCw0L3QsNC70LjQt9CwINC70LjRh9C90L7RgdGC0LhcIixcclxuICAgIFwidGVzdFBhZ2VUZXh0MVRpdGxlXCI6IFwi0J3QtdC80L3QvtCz0L4g0J4g0KLQtdGB0YLQtVwiLFxyXG4gICAgXCJ0ZXN0UGFnZVRleHQxRGVzXCI6IFwi0JLRiyDigJMg0YPQvdC40LrQsNC70YzQvdGL0Lkg0YfQtdC70L7QstC10Log0YEg0L/RgNC40YHRg9GJ0LjQvNC4INC70LjRiNGMINCy0LDQvCDQu9C40YfQvdC+0YHRgtC90YvQvNC4INC60LDRh9C10YHRgtCy0LDQvNC4LiDQndC10LrQvtGC0L7RgNGL0LUg0LjQtyDRjdGC0LjRhSDQutCw0YfQtdGB0YLQsiDQv9C+0LzQvtCz0LDRjtGCINCy0LDQvCDQtNC+0LHQuNCy0LDRgtGM0YHRjyDQsdC+0LvRjNGI0LXQs9C+INCyINC20LjQt9C90LgsINCyINGC0L4g0LLRgNC10LzRjyDQutCw0Log0LTRgNGD0LPQuNC1INC80LXRiNCw0Y7RgiDQstCw0Lwg0Lgg0L3QtSDQv9C+0LfQstC+0LvRj9GO0YIg0L/QvtC70L3QvtGB0YLRjNGOINGA0LXQsNC70LjQt9C+0LLQsNGC0Ywg0YHQstC+0Lkg0LjRgdGC0LjQvdC90YvQuSDQv9C+0YLQtdC90YbQuNCw0LsuIDxicj4gPGJyPiDQktCw0YjQuCDQu9C40YfQvdC+0YHRgtC90YvQtSDQutCw0YfQtdGB0YLQstCwINC+0L/RgNC10LTQtdC70Y/RjtGCINCy0LDRiCDQsdGD0LTRg9GJ0LjQuSDRg9GB0L/QtdGFINC4INGB0YfQsNGB0YLRjNC1LiDQndCw0YfQuNC90LDRjyDRgSAxOTYwINCz0L7QtNCwIMKr0J7QutGB0YTQvtGA0LTRgdC60LjQuSDRgtC10YHRgiDQsNC90LDQu9C40LfQsCDQu9C40YfQvdC+0YHRgtC4wrsg0L/RgNC+0YjQu9C4INGBINC/0L7Qu9GM0LfQvtC5INC00LvRjyDRgdC10LHRjyDQvNC40LvQu9C40L7QvdGLINC70Y7QtNC10LkuINCt0YLQviDQtdC00LjQvdGB0YLQstC10L3QvdGL0Lkg0LIg0YHQstC+0ZHQvCDRgNC+0LTQtSDRgtC10YHRgiwg0LrQvtGC0L7RgNGL0Lkg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0YLQvtGH0L3Ri9C5INCw0L3QsNC70LjQty5cIixcclxuICAgIFwidGVzdFBhZ2VUZXh0MlRpdGxlXCI6IFwi0J/QvtC30L3QsNC50YLQtSDQvdCw0YHRgtC+0Y/RidC10LPQviDRgdC10LHRj1wiLFxyXG4gICAgXCJ0ZXN0UGFnZVRleHQyRGVzXCI6IFwi0J3QsNGBINGH0LDRgdGC0L4g0YPRh9Cw0YIg0YLQvtC80YMsINGH0YLQviDQu9C40YfQvdC+0YHRgtGMIOKAkyDRjdGC0L4g0L3QsNCx0L7RgCDQs9C10L3QtdGC0LjRh9C10YHQutC40YUg0YfQtdGA0YIsINC60L7RgtC+0YDRi9C1INC90LXQstC+0LfQvNC+0LbQvdC+INC40LfQvNC10L3QuNGC0YwsINGC0LDQuiDRh9GC0L4g0LLQsNC8INC/0YDQvtGB0YLQviDQvtGB0YLQsNGR0YLRgdGPINC90LDRg9GH0LjRgtGM0YHRjyDCq9C20LjRgtGMINGBINGN0YLQuNC8wrsuINCt0YLQviDQv9C+0L/RgNC+0YHRgtGDINC90LXQv9GA0LDQstC00LAuINCd0LAg0YHQsNC80L7QvCDQtNC10LvQtSDQstGLINC80L7QttC10YLQtSDQuNC30LzQtdC90LjRgtGMINGB0LLQvtC4INC70LjRh9C90L7RgdGC0L3Ri9C1INC60LDRh9C10YHRgtCy0LAg0Lgg0YHRgtCw0YLRjCDQvdCw0LzQvdC+0LPQviDQu9GD0YfRiNC1INC4INGB0YfQsNGB0YLQu9C40LLQtdC1LCDRh9GC0L7QsdGLINGB0L/RgNCw0LLQu9GP0YLRjNGB0Y8g0YEg0L/RgNC+0LHQu9C10LzQsNC80Lgg0LIg0LbQuNC30L3QuCDRg9Cy0LXRgNC10L3QvdC+INC4INC70LXQs9C60L4sINCx0YPQtNGD0YfQuCDQv9C+0LjRgdGC0LjQvdC1INGB0LDQvNC40Lwg0YHQvtCx0L7QuS5cIixcclxuICAgIFwidGVzdFBhZ2VUZXh0Mkxpc3QxXCI6IFwi0KPQt9C90LDQudGC0LUg0YHQstC+0Lgg0L/RgNC+0LHQu9C10LzQvdGL0LUg0L7QsdC70LDRgdGC0Lgg0Lgg0LLRi9GP0YHQvdC40YLQtSwg0LrQsNC60L7QsiDQstCw0Ygg0YPRgNC+0LLQtdC90Ywg0YHRh9Cw0YHRgtGM0Y8sINGD0LLQtdGA0LXQvdC90L7RgdGC0Lgg0LIg0YHQtdCx0LUsINGB0YLQsNCx0LjQu9GM0L3QvtGB0YLQuCwg0LAg0YLQsNC60LbQtSDQvNC90L7Qs9C+0LUg0LTRgNGD0LPQvtC1LlwiLFxyXG4gICAgXCJ0ZXN0UGFnZVRleHQyTGlzdDJcIjogXCLQo9C30L3QsNC50YLQtSwg0LrQsNC6INCy0LDRiNC4INC70LjRh9C90YvQtSDQutCw0YfQtdGB0YLQstCwINCy0LvQuNGP0Y7RgiDQvdCwINCy0LDRiNGDINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0L/QvtC00LTQtdGA0LbQuNCy0LDRgtGMINC+0YLQvdC+0YjQtdC90LjRjyDRgSDQtNGA0YPQs9C40LzQuCDQu9GO0LTRjNC80LguXCIsXHJcbiAgICBcInRlc3RQYWdlVGV4dDJMaXN0M1wiOiBcItCj0LfQvdCw0LnRgtC1LCDQutCw0LrQvtCy0Ysg0LLQsNGI0Lgg0YHQuNC70YzQvdGL0LUg0YHRgtC+0YDQvtC90Ysg0Lgg0LrQsNC6INC40YUg0YPQutGA0LXQv9C40YLRjCwg0YfRgtC+0LHRiyDQstGLINC80L7Qs9C70Lgg0LTQvtCx0LjQstCw0YLRjNGB0Y8g0LIg0LbQuNC30L3QuCDQsdC+0LvRjNGI0LXQs9C+LlwiLFxyXG4gICAgXCJ0ZXN0UGFnZVRleHQzVGl0bGVcIjogXCLQp9GC0L4g0LHRg9C00LXRgiDQv9C+0YHQu9C1INC/0YDQvtC50LTQtdC90LjRjyDRgtC10YHRgtCwP1wiLFxyXG4gICAgXCJ0ZXN0UGFnZVRleHQzRGVzXCI6IFwi0J/QvtGB0LvQtSDQotC10YHRgtCwINC90LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQstGP0LbRg9GC0YHRjyDRgSDQktCw0LzQuCDRg9C00L7QsdC90YvQvCDQtNC70Y8g0LLQsNGBINGB0L/QvtGB0L7QsdC+0LwgKNC/0L4g0YLQtdC70LXRhNC+0L3RgywgWm9vbSDQuNC70LggU2t5cGUpLiDQkdGD0LTQtdGCINC/0YDQvtCy0LXQtNC10L3QsCDQsdC10YHQv9C70LDRgtC90LDRjyDQu9C40YfQvdCw0Y8g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGPINCyINGF0L7QtNC1INC60L7RgtC+0YDQvtC5INC40Lcg0YDQtdC30YPQu9GM0YLQsNGC0L7QsiDRgtC10YHRgtCwINCx0YPQtNGD0YIg0LTQsNC90Ysg0L/RgNCw0LrRgtC40YfQtdGB0LrQuNC1INGA0LXQutC+0LzQtdC90LTQsNGG0LjQuCDQutC+0YLQvtGA0YvQtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RgiDQstCw0YjQuNC8INGC0YDQtdCx0L7QstCw0L3QuNGP0LwuINCg0LXQt9GD0LvRjNGC0LDRgtGLINGC0LXRgdGC0LAg0LLRi9GP0LLRj9GCINCy0LDRiNC1INC80L3QtdC90LjQtSDQviDRgdC10LHQtS5cIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VNYWluU3ViVGl0bGVcIjogXCLQn9C+0LzQvtGJ0Ywg0YEg0YPQu9GD0YfRiNC10L3QuNC10Lwg0LHQuNC30L3QtdGB0LAg0L/Rg9GC0LXQvCDQvtCx0YnQtdC90LjRjyDQuCDQtNC+0LLQtdC00LXQvdC40LXQvCDQtNC10LvQsCDQtNC+INC60L7QvdGG0LBcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VUZWFtVGl0bGVcIjogXCLQmtC+0LzQsNC90LTQsCDQvdCw0YjQuNGFINGB0L/QtdGG0LjQsNC70LjRgdGC0L7QsiDQs9C+0YLQvtCy0LAg0L/RgNC40LXRhdCw0YLRjCDQuiDQstCw0LxcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VUZWFtRGVzXCI6IFwi0JzRiyDQv9GA0LjQtdC00LXQvCDQuCDQv9C+0LzQvtC20LXQvCDQv9GA0L7QstC10YHRgtC4INCS0LDRiNC40YUg0YHQvtGC0YDRg9C00L3QuNC60L7QsiDQv9C+INGN0YLQvtC80YMg0LrRg9GA0YHRgy4g0JLQsNC8INC90LUg0L3QsNC00L4g0L7RgtGA0YvQstCw0YLRjCDQuNGFINC+0YIg0YDQsNCx0L7RgtGLINC4INC+0YDQs9Cw0L3QuNC30L7QstCw0YLRjCDQuNGFINC/0YDQuNC10LfQtCAtINC80Ysg0L/RgNC40LXQtNC10Lwg0Log0JLQsNC8INGB0LDQvNC4LlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZVdob1RpdGxlXCI6IFwiPHNwYW4+0JrQvtC80YMg0L/QvtC00YXQvtC00LjRgjwvc3Bhbj4g0Y3RgtC+0YIg0LrRg9GA0YFcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VXaG9TdWJUaXRsZVwiOiBcItCS0YHQtdC8LCDQtNC70Y8g0LrQvtCz0L4g0LLQsNC20L3QviDQv9C+0LvRg9GH0LDRgtGMINGA0LXQt9GD0LvRjNGC0LDRgiDQuCDRjdGE0YTQtdC60YLQuNCy0L3QviDQvtCx0YnQsNGC0YzRgdGPINGBINC70Y7QtNGM0LzQuCDQsiDQsdC40LfQvdC10YHQtVwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZVdob0xpc3QxXCI6IFwi0KHQvtCx0YHRgtCy0LXQvdC90LjQutGDINCx0LjQt9C90LXRgdCwXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvTGlzdDJcIjogXCLQotCe0J8t0LzQtdC90LXQtNC20LXRgNGDXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvTGlzdDNcIjogXCLQn9GA0LXQtNC/0YDQuNC90LjQvNCw0YLQtdC70Y5cIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VXaG9MaXN0NFwiOiBcItCc0LXQvdC10LTQttC10YDRgyDRgdGA0LXQtNC90LXQs9C+INC30LLQtdC90LBcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VXaG9MaXN0NVwiOiBcItCg0YPQutC+0LLQvtC00LjRgtC10LvRjiDQvtGC0LTQtdC70LAg0L/RgNC+0LTQsNC2XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvTGlzdDZcIjogXCJIUi3QvNC10L3QtdC00LbQtdGA0YNcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VXaG9MaXN0N1wiOiBcItCg0YPQutC+0LLQvtC00LjRgtC10LvRjiDQv9GA0L7QtdC60YLQvtCyXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlV2hvTGlzdDhcIjogXCLQnNC10L3QtdC00LbQtdGA0YMg0L/QviDRgNCw0LHQvtGC0LUg0YEg0LrQu9C40LXQvdGC0LDQvNC4XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlRGlzY291dFRpdGxlXCI6IFwi0JfQsNC/0LjRiNC40YHRjCDRgdC10LnRh9Cw0YEgPGJyPiDQuCDQv9C+0LvRg9GH0LggPHNwYW4+0YHQutC40LTQutGDIDE1JTwvc3Bhbj5cIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMVRpdGxlXCI6IFwi0JrQsNC6INC00L7QstC10YHRgtC4INC00LXQu9C+INC00L4g0LrQvtC90YbQsFwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxU3ViVGl0bGVcIjogXCLQndCw0LLRi9C60LgsINC/0YDQuNC+0LHRgNC10YLQtdC90L3Ri9C1INCyINC60L7QvdGG0LUg0LrRg9GA0YFhOlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxTGlzdDFcIjogXCLQlNC+0LLQvtC00LjRgtGMINGA0LDQsdC+0YLRgyDQs9GA0YPQv9C/0Ysg0LTQviDQutC+0L3RhtCwXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0MlwiOiBcItCf0YDQtdGB0LXQutCw0YLRjCDQvdCwINC60L7RgNC90Y4g0LjRgdC60LDQttC10L3QuNGPINCS0LDRiNC40YUg0YDQsNGB0L/QvtGA0Y/QttC10L3QuNC5XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0M1wiOiBcItCU0L7QsdC40LLQsNGC0YzRgdGPINCy0YvQv9C+0LvQvdC10L3QuNGPINC/0YDQuNC60LDQt9C+0LIg0Lgg0L/RgNC+0YHRjNCxINCx0LXQtyDQt9Cw0LTQtdGA0LbQtdC6XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0NFwiOiBcItCU0LXQu9C10LPQuNGA0L7QstCw0YLRjCDQuCDRgtC+0YfQvdC+INC30L3QsNGC0YwsINGH0YLQviDQt9Cw0LTQsNGH0LAg0LHRg9C00LXRgiDQstGL0L/QvtC70L3QtdC90LBcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMUxpc3Q1XCI6IFwi0J3QtSDQtNC+0L/Rg9GB0LrQsNGC0Ywg0L3QtdC/0YDQsNCy0LjQu9GM0L3QvtCz0L4g0LLRi9C/0L7Qu9C90LXQvdC40Y8g0LfQsNC00LDRh9C4LCDQv9C+0YHRgtCw0LLQu9C10L3QvdC+0Lkg0LTRgNGD0LPQvtC80YMg0YfQtdC70L7QstC10LrRg1wiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxTGlzdDZcIjogXCLQlNC+0LHQuNCy0LDRgtGM0YHRjyDQsdGL0YHRgtGA0L7Qs9C+INC4INC60L7RgNGA0LXQutGC0L3QvtCz0L4g0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQvtGCINCz0YDRg9C/0L/RiyDQu9GO0LTQtdC5XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazFMaXN0N1wiOiBcItCa0L7QvNGE0L7RgNGC0L3QviDRh9GD0LLRgdGC0LLQvtCy0LDRgtGMINGB0LXQsdGPINCyINGB0LLQvtC10Lwg0YDQsNCx0L7Rh9C10Lwg0L7QutGA0YPQttC10L3QuNC4INC4INGBINC70LXQs9C60L7RgdGC0YzRjiDQutC+0L3RgtGA0L7Qu9C40YDQvtCy0LDRgtGMINC10LPQvlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2sxTGlzdDhcIjogXCLQlNC+0LHQuNCy0LDRgtGM0YHRjywg0YfRgtC+0LHRiyDQt9Cw0LTQsNGH0LAg0LHRi9C70LAg0LLRi9C/0L7Qu9C90LXQvdCwLCDQvdC10YHQvNC+0YLRgNGPINC90LAg0YLQviwg0YfRgtC+INC00YDRg9Cz0LjQtSDQu9GO0LTQuCDRgdC+0LfQtNCw0Y7RgiDQv9C+0LzQtdGF0Lgg0Lgg0L3QtSDRhdC+0YLRj9GCINGN0YLQvtCz0L4g0LTQtdC70LDRgtGMXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJUaXRsZVwiOiBcItCj0LvRg9GH0YjQtdC90LjQtSDQsdC40LfQvdC10YHQsCDQv9GD0YLQtdC8INC+0LHRidC10L3QuNGPXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJTdWJUaXRsZVwiOiBcItCd0LDQstGL0LrQuCwg0L/RgNC40L7QsdGA0LXRgtC10L3QvdGL0LUg0LIg0LrQvtC90YbQtSDQutGD0YDRgWE6XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJMaXN0MVwiOiBcIkjQsNGH0LDRgtGMINGA0LDQt9Cz0L7QstC+0YAg0YEg0LvRjtCx0YvQvCDRh9C10LvQvtCy0LXQutC+0LxcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMkxpc3QyXCI6IFwi0JTQvtC90L7RgdC40YLRjCDRgdCy0L7QtSDRgdC+0L7QsdGJ0LXQvdC40Y8g0LTQviDQtNGA0YPQs9C+0LPQviDRh9C10LvQvtCy0LXQutCwLCDQvdC10YHQvNC+0YLRgNGPINC90LAg0L/QvtC80LXRhdC4XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJMaXN0M1wiOiBcItCS0LXRgNC90YPRgtGMINGH0LXQu9C+0LLQtdC60LAg0Log0YLQtdC80LUg0YDQsNC30LPQvtCy0L7RgNCwXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlQnVzaW5lc3NCbG9jazJMaXN0NFwiOiBcItCg0LDQt9Cz0L7QstC+0YDQuNGC0Ywg0YfQtdC70L7QstC10LrQsCwg0L3QtSDQttC10LvQsNGO0YnQtdCz0L4g0L7QsdGJ0LDRgtGM0YHRj1wiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syTGlzdDVcIjogXCLQn9C10YDQtdCy0LXRgdGC0Lgg0YDQsNC30LPQvtCy0L7RgCDQvdCwINC00YDRg9Cz0YPRjiDRgtC10LzRg1wiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syTGlzdDZcIjogXCLQn9GA0LXQutGA0LDRgtC40YLRjCDRgNCw0YHRgdC/0YDQvtGB0YssINC60L7Qs9C00LAg0LXRgdGC0Ywg0LTQtdC70LAg0L/QvtCy0LDQttC90LXQtVwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syTGlzdDdcIjogXCLQlNC+0LHQuNGC0YzRgdGPINC+0YLQstC10YLQsCDQvdCwINCy0L7Qv9GA0L7RgVwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUJ1c2luZXNzQmxvY2syTGlzdDhcIjogXCLQo9GB0YLRgNCw0L3QuNGC0Ywg0YDQsNGB0YHRgtGA0L7QudGB0YLQstC+LCDQstC+0LfQvdC40LrRiNC10LUg0LIg0YXQvtC00LUg0L7QsdGJ0LXQvdC40Y9cIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMkxpc3Q5XCI6IFwi0JTQvtCx0LjQstCw0YLRjNGB0Y8sINGH0YLQvtCx0Ysg0LTRgNGD0LPQvtC5INGH0LXQu9C+0LLQtdC6INC/0YDQvtC00L7Qu9C20LDQuyDQs9C+0LLQvtGA0LjRgtGMLCDQsCDQvdC1INC30LDQvNGL0LrQsNC70YHRjyDQuCDQv9GA0LXQutGA0LDRidCw0Lsg0L7QsdGJ0LXQvdC40LVcIixcclxuICAgIFwibWFuYWdlbWVudFBhZ2VCdXNpbmVzc0Jsb2NrMkxpc3QxMFwiOiBcItCX0LDQstC10YDRiNC40YLRjCDRgNCw0LfQs9C+0LLQvtGAINGC0LDQuiwg0YfRgtC+0LEg0LLRgdC1INC+0YHRgtCw0LvQuNGB0Ywg0LTQvtCy0L7Qu9GM0L3RiyDQvtCx0YnQtdC90LjQtdC8XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlRWR1Y2F0aW9uVGl0bGVcIjogXCLQmtCw0Log0L/RgNC+0YXQvtC00LjRgiDQvtCx0YPRh9C10L3QuNC1OlwiLFxyXG4gICAgXCJtYW5hZ2VtZW50UGFnZUVkdWNhdGlvbkRlc1wiOiBcItCd0LDRiCDQutGD0YDRgSDRgNCw0YHRh9C40YLQsNC9INC90LAg0L7RgtGA0LDQsdC+0YLQutGDINCyINC/0LDRgNCw0YUg0Lgg0LPRgNGD0L/Qv9Cw0YUuINCn0LXQvCDQsdC+0LvRjNGI0LUg0LHRg9C00LXRgiDQstCw0YjQsCDQs9GA0YPQv9C/0LAsINGC0LXQvCDQstC10YHQtdC70LXQtSwg0Lgg0YLQtdC8INGB0LvQsNC20LDQvdC90LXQtSDRjdGC0Lgg0YDQtdCx0Y/RgtCwINCx0YPQtNGD0YIg0LIg0LTQsNC70YzQvdC10LnRiNC10Lwg0LLRi9C/0L7Qu9C90Y/RgtGMINC60L7QvNCw0L3QtNC90YvQtSDQt9Cw0LTQsNGH0LghXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlSG9sZGluZ0RlczFcIjogXCI8c3Bhbj7Cq1NvdG5pa292R3JvdXDCuzwvc3Bhbj4g4oCUINGN0YLQviDQvtC00L3QviDQuNC3INC90LDQv9GA0LDQstC70LXQvdC40Lkg0YXQvtC70LTQuNC90LPQsC4g0KXQvtC70LTQuNC90LPRgyAyNSDQu9C10YIsINCyINC90LXQvCDRgNCw0LHQvtGC0LDQtdGCINCx0L7Qu9C10LUgMzUwINGB0L7RgtGA0YPQtNC90LjQutC+0LIuXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlSG9sZGluZ0RlczJcIjogXCI8c3Bhbj7QptC10LvRjCDCq1NvdG5pa292R3JvdXDCuzwvc3Bhbj4g4oCUINC/0L7QvNC+0LPQsNGC0Ywg0LLQu9Cw0LTQtdC70YzRhtCw0LwsINCY0YHQv9C+0LvQvdC40YLQtdC70YzQvdGL0Lwg0LTQuNGA0LXQutGC0L7RgNCw0Lwg0Lgg0KLQntCfLdC80LXQvdC10LTQttC10YDQsNC8INC60L7QvNC/0LDQvdC40Lkg0LLRi9Cy0L7QtNC40YLRjCDQuNGFINCx0LjQt9C90LXRgdGLINC90LAg0L3QvtCy0YvQuSDRg9GA0L7QstC10L3RjCDRgNCw0LfQstC40YLQuNGPLCDQvtGB0YPRidC10YHRgtCy0LvRj9GPINC/0LXRgNC10YXQvtC0INC+0YIgwqvRgdC10LzQtdC50L3Ri9GFINC60L7QvNC/0LDQvdC40LnCuyDQuiDCq9GB0LjRgdGC0LXQvNC90L7QvNGDINCx0LjQt9C90LXRgdGDwrsuXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlSG9sZGluZ05hbWVcIjogXCLQldCy0LPQtdC90LjQuSDQodC+0YLQvdC40LrQvtCyXCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlSG9sZGluZ1Bvc2l0aW9uXCI6IFwi0JLQu9Cw0LTQtdC70LXRhiDRhdC+0LvQtNC40L3Qs9CwIMKrU290bmlrb3Zncm91cMK7XCIsXHJcbiAgICBcIm1hbmFnZW1lbnRQYWdlRm9ybVRpdGxlXCI6IFwi0JfQsNC/0LjRgdCw0YLRjNGB0Y8g0L3QsCDQutGD0YDRgVwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjFUaXRsZVwiOiBcItCg0LXQvNC+0L3RgiDQttC40LfQvdC4IDxzdmcgdmlld0JveD0nMCAwIDEyIDgnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTUuOTkgNy40MjVMMTEuMjkzMSAyLjEyMTAzQzExLjY4MzUgMS43MzA1NCAxMS42ODM1IDEuMDk3NDkgMTEuMjkzIDAuNzA3MDI5QzEwLjkwMjUgMC4zMTY1NDggMTAuMjY5NSAwLjMxNjU0OCA5Ljg3ODk3IDAuNzA3MDNMNS45ODYgNC42TDIuMDk5NzMgMC43MDc4MDhDMS43MDk1IDAuMzE2OTg0IDEuMDc2MjYgMC4zMTY3NDIgMC42ODU3MzEgMC43MDcyNjlDMC4yOTU0MTQgMS4wOTc1OSAwLjI5NTQxNCAxLjczMDQxIDAuNjg1NzMxIDIuMTIwNzNMNS45OSA3LjQyNVonLz48L3N2Zz5cIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYyVGl0bGVcIjogXCLQn9GA0L7Qs9GA0LDQvNC80LAgwqvQntGH0LjRidC10L3QuNC1wrsgPHN2ZyB2aWV3Qm94PScwIDAgMTIgOCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNNS45OSA3LjQyNUwxMS4yOTMxIDIuMTIxMDNDMTEuNjgzNSAxLjczMDU0IDExLjY4MzUgMS4wOTc0OSAxMS4yOTMgMC43MDcwMjlDMTAuOTAyNSAwLjMxNjU0OCAxMC4yNjk1IDAuMzE2NTQ4IDkuODc4OTcgMC43MDcwM0w1Ljk4NiA0LjZMMi4wOTk3MyAwLjcwNzgwOEMxLjcwOTUgMC4zMTY5ODQgMS4wNzYyNiAwLjMxNjc0MiAwLjY4NTczMSAwLjcwNzI2OUMwLjI5NTQxNCAxLjA5NzU5IDAuMjk1NDE0IDEuNzMwNDEgMC42ODU3MzEgMi4xMjA3M0w1Ljk5IDcuNDI1WicvPjwvc3ZnPlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNUaXRsZVwiOiBcItCa0YPRgNGB0Ysg0L/QviDRg9C70YPRh9GI0LXQvdC40Y4g0LbQuNC30L3QuCA8c3ZnIHZpZXdCb3g9JzAgMCAxMiA4JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J001Ljk5IDcuNDI1TDExLjI5MzEgMi4xMjEwM0MxMS42ODM1IDEuNzMwNTQgMTEuNjgzNSAxLjA5NzQ5IDExLjI5MyAwLjcwNzAyOUMxMC45MDI1IDAuMzE2NTQ4IDEwLjI2OTUgMC4zMTY1NDggOS44Nzg5NyAwLjcwNzAzTDUuOTg2IDQuNkwyLjA5OTczIDAuNzA3ODA4QzEuNzA5NSAwLjMxNjk4NCAxLjA3NjI2IDAuMzE2NzQyIDAuNjg1NzMxIDAuNzA3MjY5QzAuMjk1NDE0IDEuMDk3NTkgMC4yOTU0MTQgMS43MzA0MSAwLjY4NTczMSAyLjEyMDczTDUuOTkgNy40MjVaJy8+PC9zdmc+XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2MVN1YlRpdGxlMVwiOiBcItCe0L/RgNC10LTQtdC70LXQvdC40LVcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYxU3ViVGl0bGUyXCI6IFwi0KbQtdC70YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYxU3ViVGl0bGUzXCI6IFwi0JTQtdGC0LDQu9GM0L3QviDQviDQv9GA0L7Qs9GA0LDQvNC80LVcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYyU3ViVGl0bGUxXCI6IFwi0J/QvtGH0LXQvNGDINCy0Ysg0L3QtSDRgtCw0Log0Y3QvdC10YDQs9C40YfQvdGLP1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjJTdWJUaXRsZTJcIjogXCLQptC10LvRjCDQv9GA0L7Qs9GA0LDQvNC80YtcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYyU3ViVGl0bGUzXCI6IFwi0JrQsNC6INC/0YDQvtGF0L7QtNC40YIg0L/RgNC+0LPRgNCw0LzQvNCwXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2MlN1YlRpdGxlNFwiOiBcItCf0YDQvtC00YPQutGCINC/0YDQvtCz0YDQsNC80LzRi1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTFcIjogXCLQntC/0LjRgdCw0L3QuNC1XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMlwiOiBcItCa0LDQuiDRgdC10LHRjyDQvNC+0YLQuNCy0LjRgNC+0LLQsNGC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUzXCI6IFwi0KTQvtGA0LzRg9C70Ysg0LTQu9GPINC20LjQt9C90LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGU0XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0YPRgdC/0LXRiNC90L7QuSDQvtGA0LPQsNC90LjQt9Cw0YbQuNC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlNVwiOiBcItCt0YTRhNC10LrRgtC40LLQvdC+0LUg0YPQv9GA0LDQstC70LXQvdC40LUg0LLRgNC10LzQtdC90LXQvFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTZcIjogXCLQn9C+0YHRgtCw0L3QvtCy0LrQsCDQuCDQtNC+0YHRgtC40LbQtdC90LjQtSDRhtC10LvQtdC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlN1wiOiBcItCY0L3RgdGC0YDRg9C80LXQvdGC0Ysg0Y3RhNGE0LXQutGC0LjQstC90L7Qs9C+INC70LjQtNC10YDRgdGC0LLQsFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZThcIjogXCLQmNC90YHRgtGA0YPQvNC10L3RgtGLINC00LvRjyDQv9GA0LXQvtC00L7Qu9C10L3QuNGPINGE0LjQvdCw0L3RgdC+0LLQvtCz0L4g0YHRgtGA0LXRgdGB0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGU5XCI6IFwi0JjQvdGB0YLRgNGD0LzQtdC90YLRiyDQtNC70Y8g0LTQvtGB0YLQuNC20LXQvdC40Y8g0YTQuNC90LDQvdGB0L7QstC+0Lkg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMTBcIjogXCLQn9GA0LjQvdGG0LjQv9GLINC/0YDQvtGG0LLQtdGC0LDQvdC40Y9cIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxMVwiOiBcItCh0L7Qt9C00LDQvdC40LUg0YPRgdC/0LXRiNC90L7Qs9C+INGB0YPQv9GA0YPQttC10YHRgtCy0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxMlwiOiBcItCa0LDQuiDRgdC+0YXRgNCw0L3QuNGC0Ywg0YPRgdC/0LXRiNC90YvQtSDRgdGD0L/RgNGD0LbQtdGB0LrQuNC1INC+0YLQvdC+0YjQtdC90LjRj1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTEzXCI6IFwi0JrQsNC6INGB0L/QsNGB0YLQuCDRgdGD0L/RgNGD0LbQtdGB0LrQuNC1INC+0YLQvdC+0YjQtdC90LjRj1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZU5hdjNTdWJUaXRsZTE0XCI6IFwi0JrQsNC6INGA0L7QtNC40YLRjCDQuCDRgNCw0YHRgtC40YLRjCDRgdGH0LDRgdGC0LvQuNCy0L7Qs9C+INC80LvQsNC00LXQvdGG0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxNVwiOiBcItCa0LDQuiDRhdC+0YDQvtGI0L4g0LLQvtGB0L/QuNGC0YvQstCw0YLRjCDQtNC10YLQtdC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMTZcIjogXCLQmtCw0Log0YEg0YPRgdC/0LXRhdC+0Lwg0LLQvtGB0L/QuNGC0YvQstCw0YLRjCDQtNC10YLQtdC5INC4INC/0L7QtNGA0L7RgdGC0LrQvtCyXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlTmF2M1N1YlRpdGxlMTdcIjogXCLQn9GA0LXQvtC00L7Qu9C10L3QuNC1INC/0L7QtNGM0LXQvNC+0LIg0Lgg0YHQv9Cw0LTQvtCyINCyINC20LjQt9C90LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxOFwiOiBcItCb0LjRh9C90YvQtSDRhtC10L3QvdC+0YHRgtC4INC4INGG0LXQu9C+0YHRgtC90L7RgdGC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUxOVwiOiBcItCa0LDQuiDRg9C70YPRh9GI0LDRgtGMINC+0YLQvdC+0YjQtdC90LjRjyDRgSDQu9GO0LTRjNC80LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUyMFwiOiBcItCa0LDQuiDQvtC/0YDQtdC00LXQu9C40YLRjCDQutC+0LzRgyDQvNC+0LbQvdC+INC00L7QstC10YDRj9GC0YxcIixcclxuICAgIFwic2VjcmljZVBhZ2VOYXYzU3ViVGl0bGUyMVwiOiBcItCa0LDQuiDQvtCx0YDQtdGB0YLQuCDRg9Cy0LXRgNC10L3QvdC+0YHRgtGMINCyINGB0LXQsdC1XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDFUaXRsZTFcIjogXCI8aSBjbGFzcz0ndGV4Jz48aW1nIGNsYXNzPSd0ZXh0LWxpbmUnIHNyYz0nLi9pbWFnZXMvdGV4dC1saW5lLnN2ZycgYWx0PSdpbWctbGluZSc+0KDQtdC80L7QvdGCPC9pPiDQttC40LfQvdC4XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDFEZXMxXCI6IFwiPHNwYW4+UNC10LzQvtC90YIg0LbQuNC30L3QuDwvc3Bhbj4g4oCTINGN0YLQviDQsdC10YHQtdC00LAsINC/0L7RgdGC0YDQvtC10L3QvdCw0Y8g0L/QviDQvtC/0YDQtdC00LXQu9C10L3QvdGL0Lwg0L/RgNC40L3RhtC40L/QsNC8LCDQsiDRhdC+0LTQtSDQutC+0YLQvtGA0L7QuSDQvtCx0YPRh9C10L3QvdGL0Lkg0YHQv9C10YbQuNCw0LvQuNGB0YIsINC90LDQt9GL0LLQsNC10LzRi9C5INC+0LTQuNGC0L7RgNC+0LwsINC/0YDQvtGB0LjRgiDRh9C10LvQvtCy0LXQutCwINCy0LfQs9C70Y/QvdGD0YLRjCDQvdCwINGB0LLQvtGOINC20LjQt9C90Ywg0Lgg0YDQsNC30LvQuNGH0L3Ri9C1INC10LUg0L7QsdC70LDRgdGC0LgsINC+0YHQvtCx0LXQvdC90L4g0L3QsCDQvNC+0LzQtdC90YLRiyDRhNC40LfQuNGH0LXRgdC60LjRhSDQuNC70Lgg0LTRg9GI0LXQstC90YvRhSDRgdGC0YDQsNC00LDQvdC40LksINC4INGA0LDRgdGB0LrQsNC30LDQsiDQvtCxINGN0YLQvtC8LCDRg9Cx0YDQsNGC0Ywg0LjQtyDRgNCw0LfRg9C80LAg0L3QsNC60L7Qv9C70LXQvdC90YvQuSDQsiDRgtC10YfQtdC90LjQtSDQttC40LfQvdC4INCz0YDRg9C3LiA8YnI+INCt0YLQvtGCINCz0YDRg9C3INCx0YvQuyDRgdC+0LfQtNCw0L0g0YLQsNC60LjQvNC4INCy0LXRidCw0LzQuCDQutCw0Log0YTQuNC30LjRh9C10YHQutC40LUg0LHQvtC70LXQt9C90LgsINGC0YDQsNCy0LzRiywg0L/QvtGC0LXRgNC4INGA0L7QtNC90YvRhSwg0LTRgNGD0LfQtdC5LCDQsdC70LjQt9C60LjRhSwg0L/QvtGC0LXRgNC4INC00LXQvdC10LMg0Lgg0LjQvNGD0YnQtdGB0YLQstCwLCDQv9GA0LXQtNCw0YLQtdC70YzRgdGC0LLQsCwg0L3QtdGD0LTQsNGH0LgsINC90LXQtNC+0YHRgtC40LPQvdGD0YLRi9C1INGG0LXQu9C4LiDQktC+0L/RgNC10LrQuCDQuNC30LLQtdGB0YLQvdC+0Lkg0L/QvtCz0L7QstC+0YDQutC1LCDQstGA0LXQvNGPINC90LUg0LvQtdGH0LjRgiDRjdGC0Lgg0YDQsNGB0YHRgtGA0L7QudGB0YLQstCwLCAtINC+0L3QuCDQvdCw0LrQsNC/0LvQuNCy0LDRjtGC0YHRjyDQsiDQvdCw0YjQtdC8INGA0LDQt9GD0LzQtSDQuCDRgtGP0LbQutC40Lwg0LPRgNGD0LfQvtC8INC00LDQstGP0YIg0L3QsCDQvdCw0YEsINC/0L7QtNGK0LXQtNCw0Y8g0LfQsNC/0LDRgSDQttC40LfQvdC10L3QvdC+0Lkg0Y3QvdC10YDQs9C40LgsINGD0LLQtdGA0LXQvdC90L7RgdGC0Lgg0LIg0YHQtdCx0LUg0Lgg0LbQtdC70LDQvdC40LUg0LTQtdC50YHRgtCy0L7QstCw0YLRjC4g0J7QvdC4INGB0L7Qt9C00LDRjtGCINC90LDRgdGC0L7RgNC+0LbQtdC90L3QvtGB0YLRjCwg0LHQtdGB0L/QvtC60L7QudGB0YLQstC+LCDRg9GB0YLQsNC70L7RgdGC0Ywg0L7RgiDQttC40LfQvdC4LCDQttC10LvQsNC90LjQtSDQstGB0LUg0LHRgNC+0YHQuNGC0YwsINGA0LDQt9C00YDQsNC20LjRgtC10LvRjNC90L7RgdGC0YwsINCw0L/QsNGC0LjRjiDQuCDQtNC10L/RgNC10YHRgdC40Y4uXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDFUaXRsZTJcIjogXCLQptC10LvRjCBw0LXQvNC+0L3RgtCwINC20LjQt9C90LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MURlczJcIjogXCLQn9C+0LzQvtGH0Ywg0LLQsNC8INC/0L7QtNC90Y/RgtGMINGB0LLQvtC5INGD0YDQvtCy0LXQvdGMINC/0YDQuNGH0LjQvdC90L7RgdGC0Lgg0Lgg0YHQv9C+0YHQvtCx0L3QvtGB0YLQtdC5INC4INC/0L7Qt9Cy0L7Qu9C40YLRjCDQstCw0Lwg0L7QsdGA0LXRgdGC0Lgg0LvRg9GH0YjQtdC1INC/0L7QvdC40LzQsNC90LjQtSDQuCDQutC+0L3RgtGA0L7Qu9GMINCy0LDRiNC10Lkg0YHQvtCx0YHRgtCy0LXQvdC90L7QuSDQttC40LfQvdC4LiDQodGC0YPQv9C10L3QuCDQuCDRgdGC0LDQtNC40Lgg0LLQsNGI0LXQs9C+INC/0YDQvtC00LLQuNC20LXQvdC40Y8g0LIg0YHQsNC80L7Qv9C+0LfQvdCw0L3QuNC4INC4INC00L7RgdGC0LjQttC10L3QuNC4INC00YPRhdC+0LLQvdC+0Lkg0YHQstC+0LHQvtC00Ysg0L/RgNC10LTRgdGC0LDQstC70Y/RjtGCINGB0L7QsdC+0Lkg0LLQvtGB0YXQvtC00Y/RidGD0Y4g0YjQutCw0LvRgyDRiNCw0LPQvtCyINC+0LTQuNGC0LjQvdCz0LAg0L/QviDRgtCw0Log0L3QsNC30YvQstCw0LXQvNC+0LzRgyDQnNC+0YHRgtGDINC6INC/0L7Qu9C90L7QuSDRgdCy0L7QsdC+0LTQtSwg0YDQsNC30YDQsNCx0L7RgtCw0L3QvdC+0LzRgyDQmy4g0KDQvtC90L7QvCDQpdCw0LHQsdCw0YDQtNC+0LwuINCS0Ysg0L/QvtC00L3QuNC80LDQtdGC0LXRgdGMINGI0LDQsyDQt9CwINGI0LDQs9C+0LwsINCy0YHRj9C60LjQuSDRgNCw0Lcg0L7QutCw0LfRi9Cy0LDRj9GB0Ywg0L3QsCDQsdC+0LvQtdC1INCy0YvRgdC+0LrQvtC8INGD0YDQvtCy0L3QtSwg0L/QvtC60LAg0L3QtSDQtNC+0YHRgtC40LPQvdC10YLQtSDQsdC+0LvQtdC1INC+0L/RgtC40LzQsNC70YzQvdC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y8g0LTRg9GI0LXQstC90L7Qs9C+INC30LTQvtGA0L7QstGM0Y8g0Lgg0L7RgdC+0LfQvdCw0L3QuNGPINGB0LXQsdGPLCDQutCw0Log0LTRg9GF0L7QstC90L7Qs9C+INGB0YPRidC10YHRgtCy0LAsINC60L7RgtC+0YDQvtC1INC90LDQt9GL0LLQsNC10YLRgdGPINGB0L7RgdGC0L7Rj9C90LjQtSDQmtCb0JjQoCAo0L7RgiDRgdC70L7QstCwIGNsZWFyIOKAkyDRh9C40YHRgtGL0LkpLiDQndC40LbQtSDQv9GA0LjQstC10LTQtdC90L4g0LrRgNCw0YLQutC+0LUg0L7Qv9C40YHQsNC90LjQtSDRgdGC0YPQv9C10L3QtdC5INCc0L7RgdGC0LAg0Lgg0YLQtSDQv9C+0LHQtdC00YssINC60L7RgtC+0YDRi9C1INGH0LXQu9C+0LLQtdC6INC/0L7Qu9GD0YfQsNC10YIsINC/0L7QtNC90Y/QstGI0LjRgdGMINC90LAg0L3QuNGFLiDQkiDQvtC/0LjRgdCw0L3QuNC4INC90LXQutC+0YLQvtGA0YvRhSDQuNC3INC90LjRhSDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0L3QviDRgdC70L7QstC+IMKr0YDQsNC90LTQsNGD0L3Cuywg0LrQvtGC0L7RgNC+0LUg0L7Qt9C90LDRh9Cw0LXRgiDQtNC10LnRgdGC0LLQuNC1INC+0LTQuNGC0LjQvdCz0LAsINC90LDQv9GA0LDQstC70LXQvdC90L7QtSDQvdCwINGD0LvQsNC20LjQstCw0L3QuNC1INC60LDQutC+0Lkt0LvQuNCx0L4g0L7QtNC90L7QuSDQuNC3INC+0LHQu9Cw0YHRgtC10Lkg0LbQuNC30L3QuC4gPGJyPiA8c3Bhbj7QkiDRhdC+0LTQtTwvc3Bhbj4g0L7QtNC40YLQuNC90LPQsCDRh9C10LvQvtCy0LXQuiDQuNC30LHQsNCy0LvRj9C10YLRgdGPINC+0YIg0Y3RgtC40YUg0YLQtdC90LXQuSDQv9GA0L7RiNC70L7Qs9C+LiDQqNCw0LMg0LfQsCDRiNCw0LPQvtC8INC+0L0g0LLQvtC30LLRgNCw0YnQsNC10YIg0YPRgtGA0LDRh9C10L3QvdGD0Y4g0LbQuNC30L3QtdC90L3Rg9GOINGN0L3QtdGA0LPQuNGOLCDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0YHQv9C+0YHQvtCx0L3QvtGB0YLQuCwg0YPQstC10YDQtdC90L3QvtGB0YLRjCDQsiDRgdC10LHQtSDQuCDQs9C+0YLQvtCy0L3QvtGB0YLRjCDRgdC80L7RgtGA0LXRgtGMINCyINCz0LvQsNC30LAg0YLRgNGD0LTQvdC+0YHRgtGP0LwuINCU0YDRg9Cz0LjQvNC4INGB0LvQvtCy0LDQvNC4LCDQstC+0LfQstGA0LDRidCw0LXRgiDRgdC/0L7RgdC+0LHQvdC+0YHRgtGMINC40LPRgNCw0YLRjCDQsiDQuNCz0YDRiyDQv9C+0LQg0L3QsNC30LLQsNC90LjQtdC8IMKr0LbQuNC30L3RjMK7INC4IMKr0LHQuNC30L3QtdGBwrssINC/0L7Qu9GD0YfQsNGPINC+0YIg0Y3RgtC+0LPQviDRg9C00L7QstC+0LvRjNGB0YLQstC40LUuIDxicj4gPHNwYW4+0J/QsNGA0LDQu9C70LXQu9GM0L3Qvjwvc3Bhbj4g0YEg0L7QtNC40YLQuNC90LPQvtC8INCy0LvQsNC00LXQu9GM0YbRiyDQuCDQotCe0J8t0LzQtdC90LXQtNC20LXRgNGLINC/0L7Qu9GD0YfQsNGO0YIg0LrQvtC90YHRg9C70YzRgtCw0YbQuNC4INC/0L4g0LLQvdC10LTRgNC10L3QuNGOINCyINC60L7QvNC/0LDQvdC40Y/RhSDQuNC90YHRgtGA0YPQvNC10L3RgtC+0LIg0YPQv9GA0LDQstC70LXQvdC40Y8sINC/0L7Qt9Cy0L7Qu9GP0Y7RidC40YUg0L/QtdGA0LXQudGC0Lgg0L7RgiDRgNGD0YfQvdC+0LPQviDRg9C/0YDQsNCy0LvQtdC90LjRjyDQuiDRhNC+0YDQvNCw0YLRgyDRgdC40YHRgtC10LzQvdC+0LPQviDQsdC40LfQvdC10YHQsCwg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10LzRi9C1INGN0LrRgdC/0LXRgNGC0L7QvCDQv9C+INC/0L7RgdGC0YDQvtC10L3QuNGOINGB0LjRgdGC0LXQvNC90L7Qs9C+INCx0LjQt9C90LXRgdCwINCV0LLQs9C10L3QuNC10Lwg0KHQvtGC0L3QuNC60L7QstGL0LwuINCi0LDQutC+0Lkg0L/QvtC00YXQvtC0INGB0L7Qt9C00LDQtdGCINGB0LjQvdC10YDQs9C40Y4uXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDFUaXRsZTNcIjogXCLQniDQv9GA0L7Qs9GA0LDQvNC80LUgwqvQoNC10LzQvtC90YIg0LbQuNC30L3QuCDQuCDQsdC40LfQvdC10YHQsMK7INCx0L7Qu9C10LUg0LTQtdGC0LDQu9GM0L3QvlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQxU3ViVGl0bGUzXCI6IFwi0JTQuNC90LDQvNC40LrQsCDRgNCw0LfQstC40YLQuNGPINC60L7QvNC/0LDQvdC40Lgg0Lgg0YHQutC+0YDQvtGB0YLRjCDRgNC+0YHRgtCwINC10LUg0LTQvtGF0L7QtNC+0LIg0L7Qv9GA0LXQtNC10LvRj9GO0YLRgdGPINGC0YDQtdC80Y8g0YHQvtGB0YLQsNCy0LvRj9GO0YnQuNC80Lg6XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDFMaXN0MzFcIjogXCLQn9C+0YLQtdC90YbQuNCw0LvQvtC8INC60L7QvNC80LXRgNGH0LXRgdC60L7QuSDQuNC00LXQuDtcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MUxpc3QzMlwiOiBcItCj0YDQvtCy0L3QtdC8INC+0YDQs9Cw0L3QuNC30LDRhtC40Lgg0LrQvtC80L/QsNC90LjQuDtcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MUxpc3QzM1wiOiBcItCe0LHRitC10LzQvtC8INC20LjQt9C90LXQvdC90L7QuSDRgdC40LvRiyDQuCDRg9GA0L7QstC90LXQvCDQutC+0LzQv9C10YLQtdC90YLQvdC+0YHRgtC4INCy0LvQsNC00LXQu9GM0YbQsCDQuCDQutC+0LzQsNC90LTRiyDQotCe0J8tINC80LXQvdC10LTQttC10YDQvtCyLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQxRGVzM1wiOiBcItCt0YLQuCDRgtGA0Lgg0YHQvtGB0YLQsNCy0LvRj9GO0YnQuNC1INC/0YDQtdC00YHRgtCw0LLQu9GP0Y7RgiDRgdC+0LHQvtC5INC/0L7RgtC10L3RhtC40LDQuyDQutC+0LzQv9Cw0L3QuNC4LCDQutC+0YLQvtGA0YvQuSDQvNC+0LbQvdC+INC/0YDQtdC00YHRgtCw0LLQuNGC0Ywg0LLQstC40LTQtSDQstC10LrRgtC+0YDQsCwg0L3QsNC/0YDQsNCy0LvQtdC90L3QvtCz0L4g0LLQstC10YDRhSwg0Log0LLRi9C20LjQstCw0L3QuNGOINC4INC/0YDQvtGG0LLQtdGC0LDQvdC40Y4uINCd0L4g0L/QviDQvNC10YDQtSDRgNCw0LfQstC40YLQuNGPINC90LXQs9Cw0YLQuNCy0L3QvtC1INCy0LvQuNGP0L3QuNC1INCy0L3QtdGI0L3QtdC5INGB0YDQtdC00Ysg0L3QsCDQutC+0LzQv9Cw0L3QuNGOINGD0LLQtdC70LjRh9C40LLQsNC10YLRgdGPLCDRh9GC0L4g0YLQsNC60LbQtSDQvNC+0LbQvdC+INC/0YDQtdC00YHRgtCw0LLQuNGC0Ywg0LIg0LLQuNC00LUg0LLQtdC60YLQvtGA0LAsINC60L7RgtC+0YDRi9C5INC90LDQv9GA0LDQstC70LXQvSDQstC90LjQtywg0Log0LTQtdCz0YDQsNC00LDRhtC40Lgg0Lgg0YHQvNC10YDRgtC4INC60L7QvNC/0LDQvdC40LguINCa0L7Qs9C00LAg0Y3RgtC4INC00LLQsCDQstC10LrRgtC+0YDQsCDRgdGC0LDQvdC+0LLRj9GC0YHRjyDRgNCw0LLQvdGLLCDRgNC+0YHRgiDQtNC+0YXQvtC00LAg0L/RgNC10LrRgNCw0YnQsNC10YLRgdGPLCDRgNCw0LfQstC40YLQuNC1INC+0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjy4g0JLQtNC+0YXQvdGD0YLRjCDQttC40LfQvdGMINCyINC60L7QvNC/0LDQvdC40Y4g0Lgg0LLQvdC+0LLRjCDQtNC+0LHQuNGC0YzRgdGPINC10LUg0YDQvtGB0YLQsCDQuCDRgNCw0LfQstC40YLQuNGPINC80L7QttC90L4g0YLQvtC70YzQutC+INCyINGC0L7QvCDRgdC70YPRh9Cw0LUsINC10YHQu9C4INC80Ysg0YPQstC10LvQuNGH0LjQvCDQvtC00L3RgyDQuNC3INGB0L7RgdGC0LDQstC70Y/RjtGJ0LjRhSDQtNCw0L3QvdC+0LPQviDRgdC/0LjRgdC60LAuIDxicj4g0J/RgNC+0LPRgNCw0LzQvNCwIMKr0KDQtdC80L7QvdGCINC20LjQt9C90Lgg0Lgg0LHQuNC30L3QtdGB0LDCuyDRgNCw0LHQvtGC0LDQtdGCINGB0L4g0LLRgtC+0YDRi9C8INC4INGC0YDQtdGC0YzQuNC8INC/0YPQvdC60YLQsNC80Lgg0YHQv9C40YHQutCwLiDQodC70LXQtNGD0LXRgiDQvtGC0LzQtdGC0LjRgtGMLCDRh9GC0L4g0YLRgNC10YLQuNC5INC/0YPQvdC60YIg0Y/QstC70Y/QtdGC0YHRjyDQvtGB0L3QvtCy0L7Qv9C+0LvQsNCz0LDRjtGJ0LjQvDog0YfQtdC8INCx0L7Qu9GM0YjQtSDRgyDRh9C10LvQvtCy0LXQutCwINC20LjQt9C90LXQvdC90L7QuSDRjdC90LXRgNCz0LjQuCwg0YLQtdC8INCx0L7Qu9GM0YjQtSDRgyDQvdC10LPQviDQutC+0L3RgtGA0L7Qu9GPLCDRgtC10Lwg0LHQvtC70YzRiNC10Lkg0LrQvtC80L/QsNC90LjQtdC5INC40LvQuCDQvtCx0LvQsNGB0YLRjNGOINC00LXRj9GC0LXQu9GM0L3QvtGB0YLQuCDQvtC9INC80L7QttC10YIg0YPQv9GA0LDQstC70Y/RgtGMLiDQktC70LDQtNC10LvRjNGG0Ysg0Lgg0KLQntCfLdC80LXQvdC10LTQttC10YDRiyDQutC+0LzQv9Cw0L3QuNC5INC/0YDQvtGF0L7QtNGP0YIg0L/RgNC+0LPRgNCw0LzQvNGLINC40L3QtNC40LLQuNC00YPQsNC70YzQvdGL0YUg0LrQvtC90YHRg9C70YzRgtCw0YbQuNC5INC/0L4g0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjiDQttC40LfQvdC10L3QvdC+0Lkg0YHQuNC70Ysg0Lgg0YPQstC10LvQuNGH0LXQvdC40Y4g0LvQuNGH0L3QvtCz0L4g0L/QvtGC0LXQvdGG0LjQsNC70LAsINC90LDQt9GL0LLQsNGO0YnQuNC10YHRjyDQvtC00LjRgtC40L3Qs9C+0LwuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MURlczFcIjogXCLCq9Cf0YDQvtCz0YDQsNC80LzQsCDCq9Cg0LXQvNC+0L3RgiDQttC40LfQvdC4wrsg0LTQsNC70LAg0LzQvdC1INC/0L7QvdGP0YLRjCwg0YfRgtC+INCy0YHQtSDQv9GA0L7QsdC70LXQvNGLLCDQutC+0YLQvtGA0YvQtSDRgyDQvNC10L3RjyDRgdC70YPRh9Cw0Y7RgtGB0Y8g4oCTINC/0YDQvtCx0LvQtdC80Ysg0L7QsdGJ0LXQvdC40Y86INCz0LTQtS3RgtC+INC90LXQtNC+0YHQutCw0LfQsNC90L4sINCz0LTQtS3RgtC+INC90LUg0YHQutCw0LfQsNC90L4uINCY0L3QvtCz0LTQsCDRjyDQvdC1INCz0L7QstC+0YDQuNC7LCDRh9GC0L4g0LTRg9C80LDRjiDQvdCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0Lgg0L/QvtGC0L7QvCDQstC40L3QuNC7INGB0LXQsdGPINC30LAg0Y3RgtC+LiA8YnI+INCh0LXQudGH0LDRgSDQttC1LCDQstGB0ZEsINGH0YLQviDQvNC90LUg0L3QtSDQvdGA0LDQstC40YLRgdGPLCDRjyDQvtC30LLRg9GH0LjQstCw0Y4uINCf0LXRgNC10LQg0YLQtdC8LCDQutCw0Log0LfQsNC60LvRjtGH0LjRgtGMINC60LDQutC+0Lkt0LvQuNCx0L4g0LTQvtCz0L7QstC+0YAg0Lgg0LLRgdGC0YPQv9C40YLRjCDQsiDQv9Cw0YDRgtC90LXRgNGB0LrQuNC1INC+0YLQvdC+0YjQtdC90LjRjywg0Y8g0LLRgdC1INC/0YDQvtCz0L7QstCw0YDQuNCy0LDRji4g0KLQsNC60LbQtSDRjyDRg9C20LUg0L3QsNGH0LDQuyDQstGL0YHRgtGD0L/QsNGC0Ywg0L3QsCDQv9GD0LHQu9C40LrQtSDQuCDRgdGC0YDQsNGF0LAg0L3QtdGCINGC0LDQutC+0LPQviwg0LrQsNC6INGA0LDQvdGM0YjQtS4gPGJyPiDQrdGC0LAg0L/RgNC+0LPRgNCw0LzQvNCwINC00LDQu9CwINC80L3QtSDRgdC40LvRiyDQuCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0L7QsdC10LTQuNGC0Ywg0YHQstC+0Lgg0YHRgtGA0LDRhdC4INC4INC40LTRgtC4INCy0L/QtdGA0LXQtCDQuiDRgdCy0L7QuNC8INGG0LXQu9GP0Lwg0LIg0LPQsNGA0LzQvtC90LjQuCDRgSDRgdC+0LHQvtC5INC4INGB0LLQvtC40Lwg0L7QutGA0YPQttC10L3QuNC10LzCuy5cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxTmFtZTFcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0KHQvtC80L7QudC70LXQslwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFQb3MxXCI6IFwi0JLQuNGG0LUt0L/RgNC10LfQuNC00LXQvdGCINC60YDRg9C/0L3QvtCz0L4g0LDQs9GA0LDRgNC90L7Qs9C+INGF0L7Qu9C00LjQvdCz0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxRGVzMlwiOiBcItCS0J7QodCh0KLQkNCd0J7QktCY0JvQmCDQnNCV0J3QryDQmNCXINCf0JXQn9Cb0JAgPGJyPiDQndCw0YEg0LLRgdC10LPQtNCwINCy0L/QtdGH0LDRgtC70Y/RjtGCINC4INCy0LTQvtGF0L3QvtCy0LvRj9GO0YIg0LvRjtC00LgsINC60L7RgtC+0YDRi9C1INC90LDRhdC+0LTRj9GCINGB0LjQu9GLINC40LfQvNC10L3Rj9GC0YzRgdGPINCyINGB0LDQvNGL0LUg0L3QtdC/0YDQvtGB0YLRi9C1INGB0LLQvtC4INCy0YDQtdC80LXQvdCwLtCf0L7RgdC70LUg0LjQvdC00LjQstC40LTRg9Cw0LvRjNC90L7QuSDQv9GA0L7Qs9GA0LDQvNC80Ysg0LLQvtC30LzQvtC20L3QviDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0YzRgdGPINC40Lcg0L/QtdC/0LvQsCwg0LrQsNC6INC/0YLQuNGG0LAg0YTQtdC90LjQutGBOiDCq9CSIMKr0J/Qu9Cw0L3QtdGC0YPCuyDRjyDQv9GA0LjRiNC70LAg0LfQsCDQv9C+0LzQvtGJ0YzRjiwg0LrQvtCz0LTQsCDQsdGL0LvQsCDRgNCw0LfQsdC40YLQsCDQvdC10YDQsNGG0LjQvtC90LDQu9GM0L3Ri9C8INC/0L7QstC10LTQtdC90LjQtdC8INGB0LLQvtC10LPQviDQvtC60YDRg9C20LXQvdC40Y8g0Lgg0L/QvtGC0LXRgNC10Lkg0YLQvtCz0L4sINGH0YLQviDQtNC+0LvQs9C+INGB0L7Qt9C00LDQstCw0LvQsC4g0K8g0L3QtSDQvNC+0LPQu9CwINC10YHRgtGMLCDRgdC/0LDRgtGMLCDQsNC00LXQutCy0LDRgtC90L4g0YDQtdCw0LPQuNGA0L7QstCw0YLRjCDQvdCwINGB0LvQvtCy0LAg0Lgg0L/QvtGB0YLRg9C/0LrQuC4gPGJyPiDQktC90YPRgtGA0Lgg0LHRi9C70LAg0L/Rg9GB0YLQvtGC0LAg0Lgg0L3QtdC/0L7QvdC40LzQsNC90LjQtSDRgtC+0LPQviwg0YfRgtC+INC20LUg0Lgg0L/QvtGH0LXQvNGDINGC0LDQuiDQv9GA0L7QuNC30L7RiNC70L4/INCf0YDQvtCz0YDQsNC80LzQsCDQv9C+0LzQvtCz0LvQsCDQvNC90LUg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGB0LjQu9GLINC4INGD0LLQtdGA0LXQvdC90L7RgdGC0Ywg0LIg0YHQtdCx0LUsINCy0L7Qu9GOINC6INC00L7RgdGC0LjQttC10L3QuNGOINGG0LXQu9C10LksINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0L/RgNCw0LLQuNC70YzQvdC+INC+0YbQtdC90LjRgtGMINGB0LjRgtGD0LDRhtC40Y4sINC/0L7QvdGP0YLRjCDQtdC1INC4INC/0YDQvtCw0L3QsNC70LjQt9C40YDQvtCy0LDRgtGMLiA8YnI+INCvINC/0L7QvdGP0LvQsCwg0LrRgtC+INC60LXQvCDRj9Cy0LvRj9C10YLRgdGPINCyINC80L7QtdC8INC+0LrRgNGD0LbQtdC90LjQuCwg0LrQsNC6INC80L3QtSDRgSDQvdC40LzQuCDQvdC10L7QsdGF0L7QtNC40LzQviDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQvtCy0LDRgtGMLCDRgSDQutC10Lwg0Lgg0LrQsNC6INGB0YLRgNC+0LjRgtGMINC+0YLQvdC+0YjQtdC90LjRjywg0LrQvtCz0L4g0Lgg0L/QvtGH0LXQvNGDINC/0L7QtNC00LXRgNC20LjQstCw0YLRjC4gPGJyPiDQodCw0LzQvtC1INGG0LXQvdC90L7QtSDQsiDQttC40LfQvdC4IOKAkyDRjdGC0L4g0L/QvtC90Y/RgtGMLCDRh9GC0L4g0LjRgdGC0LjQvdC90L4sINCwINGH0YLQviDQvNC40YjRg9GA0LAsINC+0YLQtNC10LvQuNGC0Ywg0LfQtdGA0L3QsCDQvtGCINC/0LvQtdCy0LXQuy4g0K8g0Y3RgtC+INGB0LTQtdC70LDQu9CwLiDQryDQt9C90LDRjiwg0LfQsNGH0LXQvCwg0YEg0LrQtdC8INC4INC60YPQtNCwINC40LTRgy4gPGJyPiDQryDRhdC+0YfRgyDQv9C+0LzQvtCz0LDRgtGMINC4INC/0L7QtNC00LXRgNC20LjQstCw0YLRjCwg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0L/RgNC40LfQvdCw0L3QuNC1INGB0LjQu9GM0L3Ri9C8INC70Y7QtNGP0LwuINCt0YLQviDRgtC+LCDRh9GC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L4g0LzQvdC1LCDQuCDRh9GC0L4g0Y8g0YXQvtGH0YMg0LTQsNCy0LDRgtGMINGC0LDQutC40Lwg0LbQtSDQutCw0Log0Y8uIDxicj4g0KHQv9Cw0YHQuNCx0L4sINGH0YLQviDQstC+0YHRgdGC0LDQvdC+0LLQuNC70Lgg0LzQtdC90Y8g0LjQtyDQv9C10L/Qu9CwwrsuXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MU5hbWUyXCI6IFwi0JXQu9C10L3QsCDQkNC70LXQutGB0LDQvdC00YDQvtCy0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxUG9zMlwiOiBcItCS0LvQsNC00LXQu9C10YbQsCDRgdC10YLQuCDRgdCw0LvQvtC90L7QsiDQutGA0LDRgdC+0YLRi1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFEZXMzXCI6IFwiwqvQryDQvdC1INC20LTQsNC7INC+0YIg0Y3RgtC+0Lkg0L/RgNC+0LPRgNCw0LzQvNGLINGH0LXQs9C+LdGC0L4g0L7RgdC+0LHQtdC90L3QvtCz0L4uINCd0L4g0LIg0LPQu9GD0LHQuNC90LUg0LTRg9GI0Lgg0YMg0LzQtdC90Y8g0LHRi9C70L4g0LbQtdC70LDQvdC40LUg0LjQt9C80LXQvdC40YLRjCDRgdC40YLRg9Cw0YbQuNGOLiA8YnI+INCd0LDQstC10YDQvdC+0LUsINC60LDQuiDQuCDRgyDQstGB0LXRhSDRgyDQvNC10L3RjyDQsdGL0LvQuCDQutC+0L3RhNC70LjQutGC0Ysg0L3QsCDRgNCw0LHQvtGC0LUsINC90LXQtNC+0L/QvtC90LjQvNCw0L3QuNC1INCyINGB0LXQvNGM0LUuINCc0L3QtSDQutCw0LfQsNC70L7RgdGMLCDRh9GC0L4g0Y8g0L/QtdGA0LXQs9C+0YDQtdC7LiDQndC+INC/0L7RgNCw0LHQvtGC0LDQsiDRgdC+INGB0L/QtdGG0LjQsNC70LjRgdGC0L7QvCwg0LzQvtGPINC20LjQt9C90Ywg0L3QsNGH0LDQu9CwINC80LXQvdGP0YLRjNGB0Y8uINCvINC90LDRiNGR0Lsg0YHQv9C+0YHQvtCxINGA0LDQt9GA0LXRiNC40YLRjCDQutC+0L3RhNC70LjQutGC0Ysg0Lgg0L3QsNC70LDQtNC40YLRjCDQvtCx0YnQtdC90LjQtSDRgdC+INGB0LLQvtC40LzQuCDQsdC70LjQt9C60LjQvNC4ISDQktC+INC80L3QtSDQv9C+0Y/QstC40LvQvtGB0Ywg0LzQvdC+0LPQviDRjdC90LXRgNCz0LjQuCwg0Lgg0YHQsNC8INC00LDQttC1INC90LUg0LfQsNC80LXRgtC40LssINC60LDQuiDQvdCw0YfQsNC7INC/0YDQvtC40LfQstC+0LTQuNGC0Ywg0LHQvtC70YzRiNC1ISDQmCDRh9GC0L4g0YHQsNC80L7QtSDQuNC90YLQtdGA0LXRgdC90L7QtSwg0LLRgdC1INC80L7QuCDRgdGC0LDRgtC40YHRgtC40LrQuCDQv9C+0YjQu9C4INCy0LLQtdGA0YUhIDxicj4gwqvQoNC10LzQvtC90YIg0LbQuNC30L3QuMK7INC00LDQuyDQvNC90LUg0YXQvtGA0L7RiNC40Lkg0YLQvtC70YfQvtC6INC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQvdCw0YfQsNGC0Ywg0LLRgdGRINC80LXQvdGP0YLRjCEg0KLQtdC/0LXRgNGMINGPINC30L3QsNGOLCDQutCw0Log0Y3RgtC+INC00LXQu9Cw0YLRjCDQuCDRg9Cy0LXRgNC10L0sINGH0YLQviDQstGB0LUg0L/QvtC70YPRh9C40YLRgdGPIcK7IFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFOYW1lM1wiOiBcItCS0LvQsNC00LjQvNC40YAg0KfQsNC/0LvRi9Cz0LjQvVwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzFQb3MzXCI6IFwi0JTQuNGA0LXQutGC0L7RgCDQutGA0YPQv9C90L7Qs9C+INGC0L7RgNCz0L7QstC+0LPQviDRhtC10L3RgtGA0LBcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxRGVzNFwiOiBcItCW0JjQl9Cd0Kwg0J3QkCDQk9Cg0JDQndCYINCe0JHQoNCr0JLQkCA8YnI+INCd0LAg0L/RgNC+0LPRgNCw0LzQvNC1IMKr0KDQtdC80L7QvdGCINC20LjQt9C90LjCuyDRjyDQvtGB0LLQvtCx0L7QtNC40LvRgdGPINC+0YIg0LzQvdC+0LPQuNGFINC90LDQtNC+0LXQtNC70LjQstGL0YUg0LzRi9GB0LvQtdC5INC4INC/0YDQvtCx0LvQtdC8LCDQvdCwINC60L7RgtC+0YDRi9C1INC90LUg0YXQvtGC0LXQuyDRgdC80L7RgtGA0LXRgtGMLiA8YnI+INCjINC80LXQvdGPINC+0YLQutGA0YvQu9C40YHRjCDQs9C70LDQt9CwINC90LAg0LzQvtC4INC/0L7RgdGC0YPQv9C60LguINCvINC/0L7QvdGP0LssINGH0YLQviDQvdCw0LTQtdC70LDQuyDQvNC90L7Qs9C+INC+0YjQuNCx0L7QuiDQsiDQvtGC0L3QvtGI0LXQvdC40Y/RhSDRgSDRgdC10LzRjNGR0LksINC90LAg0YDQsNCx0L7RgtC1LiA8YnI+INCV0YHQu9C4INCx0Ysg0Y8g0L3QtSDQv9GA0L7RiNGR0Lsg0L/RgNC+0LPRgNCw0LzQvNGDLCDQtNCw0LbQtSDQvdC1INC/0YDQtdC00YHRgtCw0LLQu9GP0Y4sINCz0LTQtSDQsdGLINC+0LrQsNC30LDQu9GB0Y8uINCvINCx0YvQuyDQvdCwINCz0YDQsNC90Lgg0L7QsdGA0YvQstCwLiDQodC10LnRh9Cw0YEg0LzQvtGPINC20LjQt9C90Ywg0L/QvtC80LXQvdGP0LvQsNGB0YwhINCvINC+0YnRg9GJ0LDRjiDRgdC10LHRjyDRgdGH0LDRgdGC0LvQuNCy0YvQvCDQuCDQt9C90LDRjiwg0YfRgtC+INCy0YHQtSDQsdGD0LTQtdGCINGF0L7RgNC+0YjQvi5cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcxTmFtZTRcIjogXCLQndC40LrQvtC70LDQuSDQp9C40YHRgtGP0LrQvtCyXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MVBvczRcIjogXCLQktC70LDQtNC10LvQtdGGINCx0YvRgdGC0YDQvtGA0LDRgdGC0YPRidC10LPQviDRgdGC0LDRgNGC0LDQv9CwXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJUaXRsZTFcIjogXCI8aSBjbGFzcz0ndGV4Jz48aW1nIGNsYXNzPSd0ZXh0LWxpbmUnIHNyYz0nLi9pbWFnZXMvdGV4dC1saW5lLnN2ZycgYWx0PSdpbWctbGluZSc+0J/RgNC+0LPRgNCw0LzQvNCwPC9pPiDCq9Ce0YfQuNGJ0LXQvdC40LXCu1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyU3ViVGl0bGUxXCI6IFwi0J/QvtGH0LXQvNGDINCy0Ysg0L3QtSDRgtCw0Log0Y3QvdC10YDQs9C40YfQvdGLINC4INC/0L7Qu9C90Ysg0LbQuNC30L3QuCwg0LrQsNC6INC80L7Qs9C70Lgg0LHRiyDQsdGL0YLRjFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyTGlzdDExXCI6IFwi0KLRgNGD0LTQvdC+INC70Lgg0LLQsNC8INC90LDRgdC70LDQttC00LDRgtGM0YHRjyDQttC40LfQvdGM0Y4/XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJMaXN0MTJcIjogXCLQodGH0LjRgtCw0LXRgtC1INC70Lgg0LLRiywg0YfRgtC+INGC0YDRg9C00L3QviDQsdGL0YLRjCDRgdGH0LDRgdGC0LvQuNCy0YvQvD9cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QxM1wiOiBcItCS0LDQvCDRgdC70L7QttC90L4g0YHQvtGB0YDQtdC00L7RgtC+0YfQuNGC0YzRgdGPP1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyTGlzdDE0XCI6IFwi0JHRi9Cy0LDRjtGCINC70Lgg0LLQsNGI0Lgg0LzRi9GB0LvQuCDQt9Cw0L/Rg9GC0LDQvdC90YvQvNC4P1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyTGlzdDE1XCI6IFwi0JLQsNGI0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC90LUg0Y/QstC70Y/QtdGC0YHRjyDQvtC/0YLQuNC80LDQu9GM0L3Ri9C8IC0g0Lgg0LLRiyDQvdC1INC80L7QttC10YLQtSDRgdC/0YDQsNCy0LjRgtGM0YHRjyDRgSDRjdGC0LjQvD9cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QxNlwiOiBcItCn0YPQstGB0YLQstGD0LXRgtC1INC70Lgg0LLRiyDRgdC10LHRjyDQuNGB0YLQvtGJ0ZHQvdC90YvQvNC4INCx0LXQtyDQutCw0LrQvtC5LdC70LjQsdC+INCy0LjQtNC40LzQvtC5INC/0YDQuNGH0LjQvdGLINC40L3QvtCz0LTQsCDQsiDRgtC10YfQtdC90LjQtSDQvdC10YHQutC+0LvRjNC60LjRhSDQtNC90LXQuT9cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MkRlczFcIjogXCI8c3Bhbj7Qn9GA0LjRh9C40L3QvtC5INGN0YLQuNGFINGB0LjQvNC/0YLQvtC80L7QsiDRj9Cy0LvRj9C10YLRgdGPPC9zcGFuPiDRgdC60L7Qv9C70LXQvdC40LUg0YXQuNC80LjQutCw0YLQvtCyINC40LvQuCDRgtC+0LrRgdC40L3QvtCyINCyINCy0LDRiNC10Lwg0YLQtdC70LUuINCt0YLQuCDQstC10YnQtdGB0YLQstCwLCDRgtCw0LrQuNC1INC60LDQuiDQv9C40YnQtdCy0YvQtSDQtNC+0LHQsNCy0LrQuCwg0LjRgdC/0LDRgNC10L3QuNGPINC60YDQsNGB0LjRgtC10LvQtdC5LCDQvNCw0YDQuNGF0YPQsNC90LAsINGA0LXRhtC10L/RgtGD0YDQvdGL0LUg0LvQtdC60LDRgNGB0YLQstCwLCDQv9C10YHRgtC40YbQuNC00YssINCw0LLRgtC+0LzQvtCx0LjQu9GM0L3Ri9C1INCz0LDQt9GLINC4INGA0LDQtNC40LDRhtC40Y8g0L3QsNC60LDQv9C70LjQstCw0Y7RgtGB0Y8g0LIg0LbQuNGA0L7QstGL0YUg0YLQutCw0L3Rj9GFINGC0LXQu9CwLiDQktCw0YjQtSDRgtC10LvQviDQtdGB0YLQtdGB0YLQstC10L3QvdGL0Lwg0L/Rg9GC0ZHQvCDQvdC1INC40LfQsdCw0LLQu9GP0LXRgtGB0Y8g0L7RgiDRjdGC0LjRhSDQstC10YnQtdGB0YLQsiwg0Lgg0L7QvdC4INC90LDQutCw0L/Qu9C40LLQsNGO0YLRgdGPINCyINGC0LXRh9C10L3QuNC1INC80L3QvtCz0LjRhSDQu9C10YIsINC/0YDQtdC/0Y/RgtGB0YLQstGD0Y8g0LLQsNGI0LjQvCDRg9C80YHRgtCy0LXQvdC90YvQvCDRgdC/0L7RgdC+0LHQvdC+0YHRgtGP0Lwg0Lgg0Y3QvdC10YDQs9C40LguIDxicj4g0J3QsNGA0LrQvtGC0LjQutC4INC4INC70LXQutCw0YDRgdGC0LLQsCwg0LAg0YLQsNC60LbQtSDQsNC70LrQvtCz0L7Qu9GMLCDQutC+0L3RgdC10YDQstCw0L3RgtGLLCDQutC+0YLQvtGA0YvQtSDQstGLINC/0YDQuNC90LjQvNCw0LvQuCAyMCDQu9C10YIg0L3QsNC30LDQtCwg0LTQviDRgdC40YUg0L/QvtGAINC90LDRhdC+0LTRj9GC0YHRjyDQsiDQstCw0YjQtdC8INC+0YDQs9Cw0L3QuNC30LzQtSwg0Lgg0LLRgNC10LTRj9GCINCy0LDQvCDQv9C+INGB0LXQuSDQtNC10L3RjC4g0KDQsNC00LjQsNGG0LjRjyDQvtGCINGB0L7Qu9C90LXRh9C90L7Qs9C+INC+0LbQvtCz0LAsINC60L7RgtC+0YDRg9GOINCy0Ysg0L/QvtC70YPRh9C40LvQuCDRiNC10YHRgtGMINC70LXRgiDQvdCw0LfQsNC0LCDQuCDRgdC10LPQvtC00L3RjyDQvdCw0YXQvtC00LjRgtGB0Y8g0LIg0LLQsNGI0LXQvCDRgtC10LvQtS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50MlRpdGxlMlwiOiBcItCm0LXQu9GMINC/0YDQvtCz0YDQsNC80LzRiyDCq9Ce0YfQuNGJ0LXQvdC40LXCu1wiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyRGVzMlwiOiBcItCg0LXRiNC10L3QuNC10Lwg0L/RgNC+0LHQu9C10LzRiyDQvdCw0LrQvtC/0LvQtdC90LjRjyDQsiDRgtC10LvQtSDQvtGC0YDQsNCy0LvRj9GO0YnQuNGFINCy0LXRidC10YHRgtCyINGP0LLQu9GP0LXRgtGB0Y8g0YPQtNCw0LvQtdC90LjQtSDQstGB0LXRhSDQt9Cw0LPRgNGP0LfQvdC10L3QuNC5LCDQt9Cw0LrQvtC90YHQtdGA0LLQuNGA0L7QstCw0L3QvdGL0YUg0LIg0YLQtdC70LUsINC60L7RgtC+0YDQvtC1INC/0YDQvtC40YHRhdC+0LTQuNGCINC90LAg0L/RgNC+0LPRgNCw0LzQvNC1IMKr0J7Rh9C40YnQtdC90LjQtcK7LiDQrdGC0LAg0L/RgNC+0YbQtdC00YPRgNCwINGP0LLQu9GP0LXRgtGB0Y8g0YLQvtGH0L3QvtC5INC60L7QvNCx0LjQvdCw0YbQuNC10Lkg0YTQuNC30LjRh9C10YHQutC40YUg0YPQv9GA0LDQttC90LXQvdC40Lks0L/RgNC40ZHQvNCwINCy0LjRgtCw0LzQuNC90L7Qsiwg0L/QuNGC0LDQvdC40Y8g0Lgg0L/QvtGC0LXQvdC40Y8g0LIg0YHQsNGD0L3QtSwg0YfRgtC+INC/0YDQuNCy0L7QtNC40YIg0Log0LLRi9GC0LXRgdC90LXQvdC40Y4g0L3QsNGA0LrQvtGC0LjQutC+0LIg0Lgg0YLQvtC60YHQuNC90L7QsiDQuNC3INC20LjRgNC+0LLRi9GFINC+0YLQu9C+0LbQtdC90LjQuSDQutC70LXRgtC+0Log0YLQtdC70LAuINCi0LDQutC40Lwg0L7QsdGA0LDQt9C+0LwsINC40YUg0LzQvtC20L3QviDQstGL0LLQtdGB0YLQuCDQuNC3INGC0LXQu9CwLlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyVGl0bGUzXCI6IFwi0JrQsNC6INC/0YDQvtGF0L7QtNC40YIg0L/RgNC+0LPRgNCw0LzQvNCwIMKr0J7Rh9C40YnQtdC90LjQtcK7XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJMaXN0MzFcIjogXCLQndCwINC/0YDQvtCz0YDQsNC80LzQtSAn0J7Rh9C40YnQtdC90LjQtScg0YfQtdC70L7QstC10Log0LHQtdCz0LDQtdGCINC+0L/RgNC10LTQtdC70ZHQvdC90YvQuSDQv9C10YDQuNC+0LQg0LLRgNC10LzQtdC90Lgg0LrQsNC20LTRi9C5INC00LXQvdGMLiA8YnI+INCR0LXQsyDQvdGD0LbQtdC9INC00LvRjyDRgtC+0LPQviDRh9GC0L7QsdGLINGD0YHQuNC70LjRgtGMINC60YDQvtCy0L7QvtCx0YDQsNGJ0LXQvdC40LUuINCa0YDQvtCy0Ywg0L/RgNC+0L3QuNC60LDQtdGCINCz0LvRg9Cx0LbQtSDQsiDRgtC60LDQvdC4LCDRgtGD0LTQsCwg0LPQtNC1INC90LDQutCw0L/Qu9C40LLQsNGO0YLRgdGPINC+0YLQu9C+0LbQtdC90LjRjyDRgtC+0LrRgdC40YfQvdGL0YUg0LLQtdGJ0LXRgdGC0LIsINC4INCyINGA0LXQt9GD0LvRjNGC0LDRgtC1INGN0YLQuCDQstC10YnQtdGB0YLQstCwINC/0YDQuNGF0L7QtNGP0YIg0LIg0LTQstC40LbQtdC90LjQtS5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QzMlwiOiBcItCh0YDQsNC30YMg0L/QvtGB0LvQtSDQsdC10LPQsCDRh9C10LvQvtCy0LXQuiDQuNC00LXRgiDQsiDRgdCw0YPQvdGDLiDQntCx0LjQu9GM0L3QvtC1INC/0L7RgtC+0L7RgtC00LXQu9C10L3QuNC1INC/0L7QvNC+0LPQsNC10YIg0LLRi9C00LXQu9C10L3QuNGOINGC0L7QutGB0LjRh9C90YvRhSDQstC10YnQtdGB0YLQsiDQuNC3INC+0YDQs9Cw0L3QuNC30LzQsC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3QzM1wiOiBcItCg0LXQs9GD0LvRj9GA0L3Ri9C5INC/0YDQuNC10Lwg0LLQuNGC0LDQvNC40L3QvtCyINC4INC80LjQvdC10YDQsNC70L7Qsiwg0LAg0YLQsNC60LbQtSDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0LrQvtC70LjRh9C10YHRgtCy0LAg0LzQsNGB0LXQuyDRj9Cy0LvRj9C10YLRgdGPINCy0LDQttC90YvQvCDRhNCw0LrRgtC+0YDQvtC8LCDQv9C+0LzQvtCz0LDRjtGJ0LjQvCDQstGL0LLQtdGB0YLQuCDQuNC3INGC0LXQu9CwINCy0YDQtdC00L3Ri9C1INCy0LXRidC10YHRgtCy0LAg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINGC0LrQsNC90LgsINC/0L7QstGA0LXQttC00LXQvdC90YvQtSDQvdCw0YDQutC+0YLQuNC60LDQvNC4INC4INC00YDRg9Cz0LjQvNC4INGC0L7QutGB0LjRh9C90YvQvNC4INCy0LXRidC10YHRgtCy0LDQvNC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyTGlzdDM0XCI6IFwi0KDQtdCz0YPQu9GP0YDQvdGL0Lkg0L/RgNC40LXQvCDQstC40YLQsNC80LjQvdC+0LIg0Lgg0LzQuNC90LXRgNCw0LvQvtCyLCDQsCDRgtCw0LrQttC1INC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQutC+0LvQuNGH0LXRgdGC0LLQsCDQvNCw0YHQtdC7INGP0LLQu9GP0LXRgtGB0Y8g0LLQsNC20L3Ri9C8INGE0LDQutGC0L7RgNC+0LwsINC/0L7QvNC+0LPQsNGO0YnQuNC8INCy0YvQstC10YHRgtC4INC40Lcg0YLQtdC70LAg0LLRgNC10LTQvdGL0LUg0LLQtdGJ0LXRgdGC0LLQsCDQuCDQstC+0YHRgdGC0LDQvdC+0LLQuNGC0Ywg0YLQutCw0L3QuCwg0L/QvtCy0YDQtdC20LTQtdC90L3Ri9C1INC90LDRgNC60L7RgtC40LrQsNC80Lgg0Lgg0LTRgNGD0LPQuNC80Lgg0YLQvtC60YHQuNGH0L3Ri9C80Lgg0LLQtdGJ0LXRgdGC0LLQsNC80LguXCIsXHJcbiAgICBcInNlY3JpY2VQYWdlQ29udGVudDJUaXRsZTRcIjogXCLQn9GA0L7QtNGD0LrRgiDQv9GA0L7Qs9GA0LDQvNC80YsgwqvQntGH0LjRidC10L3QuNC1wrtcIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3Q0MVwiOiBcItCS0LDRiNC1INGC0LXQu9C+LCDQvtGH0LjRidC10L3QvdC+0LUg0L7RgiDQvtGB0YLQsNGC0LrQvtCyINC+0YLRgNCw0LLQu9GP0Y7RidC40YUg0LLQtdGJ0LXRgdGC0LIsINC90LDRgNC60L7RgtC40LrQvtCyINC4INC70LXQutCw0YDRgdGC0LIsINC90LDQutC+0L/Qu9C10L3QvdGL0YUg0LIg0YLQtdGH0LXQvdC40LUg0LbQuNC30L3QuC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VDb250ZW50Mkxpc3Q0MlwiOiBcItCS0L7RgdGB0YLQsNC90L7QstC70LXQvdC90L7QtSDQt9C00L7RgNC+0LLRjNC1INC4INGD0LLQtdC70LjRh9C10L3QuNC1INGN0L3QtdGA0LPQuNC4LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZUNvbnRlbnQyTGlzdDQzXCI6IFwi0KPQu9GD0YfRiNC10L3QvdCw0Y8g0YHQv9C+0YHQvtCx0L3QvtGB0YLRjCDQvNGL0YHQu9C40YLRjCDQu9C+0LPQuNGH0LXRgdC60LgsINGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0LvRg9GH0YjQtSDQutC+0L3RhtC10L3RgtGA0LjRgNC+0LLQsNGC0Ywg0LLQvdC40LzQsNC90LjQtSwg0L/QvtCy0YvRiNC10L3QuNC1INC60L7RjdGE0YTQuNGG0LjQtdC90YLQsCDQuNC90YLQtdC70LvQtdC60YLQsC5cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyRGVzMVwiOiBcIsKr0JfQsCDQstGA0LXQvNGPINC/0YDQvtGF0L7QttC00LXQvdC40Y8g0L/RgNC+0LPRgNCw0LzQvNGLINGPINC40LfQsdCw0LLQuNC70YHRjyDQvtGCINCy0LvQuNGP0L3QuNC5INGB0L7Qu9C90LXRh9C90L7QuSDRgNCw0LTQuNCw0YbQuNC4LCDQu9C10LrQsNGA0YHRgtCyINC4INC00YDRg9Cz0LjRhSDRgtC+0LrRgdC40YfQvdGL0YUg0LLQtdGJ0LXRgdGC0LIuIDxicj4g0JzQvdC1INGB0YLQsNC70L4g0L3QsNC80L3QvtCz0L4g0LvQtdCz0YfQtSDQtNCy0LjQs9Cw0YLRjNGB0Y8uINCi0LXQv9C10YDRjCDRjyDRg9GB0L/QtdCy0LDRjiDQstGL0L/QvtC70L3Rj9GC0Ywg0LHQvtC70YzRiNC1INC30LDQtNCw0YcsINGH0LXQvCDRgNCw0L3RjNGI0LUuIDxicj4g0J3QsCDQv9GA0L7Qs9GA0LDQvNC80LUg0LTQu9GPINC80LXQvdGPINGA0LXRiNC40LvRgdGPINCy0L7Qv9GA0L7RgSDRgdC90LAuINCvINC90LDRh9Cw0Lsg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0LLRi9GB0YvQv9Cw0YLRjNGB0Y8g0Lgg0LvQtdCz0LrQviDQstGB0YLQsNCy0LDRgtGMINGD0YLRgNC+0LwuIDxicj4g0JAg0YHQsNC80L7QtSDQuNC90YLQtdGA0LXRgdC90L7QtSwg0YMg0LzQtdC90Y8g0L/QvtGP0LLQuNC70L7RgdGMINC20LXQu9Cw0L3QuNC1INGC0LLQvtGA0LjRgtGMIcK7LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzJOYW1lMVwiOiBcItCS0LjRgtCw0LvQuNC5INCX0LDQstCz0L7RgNC+0LTQvdGL0LlcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyUG9zMVwiOiBcItCh0YLQsNGA0YjQuNC5INC80LXQvdC10LTQttC10YAg0L/QviDQv9GA0L7QtNCw0LbQsNC8INGC0YDQsNC90YHQvdCw0YbQuNC+0L3QsNC70YzQvdC+0Lkg0LrQvtGA0L/QvtGA0LDRhtC40LhcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyRGVzMlwiOiBcIiDCq9Cd0Lgg0L7QtNC40L0g0Y3QvdC10YDQs9C10YLQuNC6INC90LUg0LTQsNGB0YIg0YHRgtC+0LvRjNC60L4g0Y3QvdC10YDQs9C40LgsINC60LDQuiDRjdGC0LAg0L/RgNC+0LPRgNCw0LzQvNCwISA8YnI+INCvLCDQvdCw0LLQtdGA0L3QvtC1LCDQvdC40LrQvtCz0LTQsCDQvdC1INC+0YnRg9GJ0LDQuyDRgdCy0L7QtSDRgtC10LvQviDRgtCw0LrQuNC8LiA8YnI+INCh0JjQm9Cs0J3Qq9CcLiDQp9CY0KHQotCr0JwuINCR0J7QlNCg0KvQnC4g0KHQm9CQ0JbQldCd0J3Qq9CcLiA8YnI+INCe0LTQuNC9INC40Lcg0YHQsNC80YvRhSDQutC70LDRgdGB0L3Ri9GFINGA0LXQt9GD0LvRjNGC0LDRgtC+0LIg0L/RgNC+0LPRgNCw0LzQvNGLIMKr0J7Rh9C40YnQtdC90LjRj8K7IOKAlCDRjdGC0L4g0L/QvtC90LjQvNCw0L3QuNC1INGC0L7Qs9C+LCDQutCw0Log0LjQvNC10L3QvdC+INGPINGA0LDQvdGM0YjQtSDQstGA0LXQtNC40Lsg0YHQstC+0LXQvNGDINGC0LXQu9GDLiDQotC10L/QtdGA0Ywg0Y8g0L3QtSDQsdGD0LTRgyDQv9C+0LLRgtC+0YDRj9GC0Ywg0Y3RgtC40YUg0L7RiNC40LHQvtC6LiA8YnI+INCa0L7QvdC10YfQvdC+INC20LUg0Y8g0L/QvtC70YPRh9C40Lsg0YfQuNGB0YLQvtC1INGC0LXQu9C+INC+0YIg0YDQsNC30L3Ri9GFINCy0YDQtdC00L3QvtGB0YLQtdC5LiDQktC80LXRgdGC0L4g0L/QvtGB0YLQvtGP0L3QvdC+0Lkg0YPRgdGC0LDQu9C+0YHRgtC4INC/0YDQuNGI0LvQsCDRjdC90LXRgNCz0LjRjyDQuCDRgdC40LvRiyEgPGJyPiDQryDQsdC10YHQutC+0L3QtdGH0L3QviDRgdGH0LDRgdGC0LvQuNCyLCDRh9GC0L4g0L/RgNC+0YjQtdC7INGN0YLRgyDQv9GA0L7Qs9GA0LDQvNC80YMhwrtcIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyTmFtZTJcIjogXCLQlNC80LjRgtGA0LjQuSDQkdCw0LPRg9GG0LrQuNC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MlBvczJcIjogXCLQndCw0YfQuNC90LDRjtGJ0LjQuSDQsdC40LfQvdC10YHQvNC10L1cIixcclxuICAgIFwic2VjcmljZVBhZ2VSZXcyRGVzM1wiOiBcItCg0JXQl9Cj0JvQrNCi0JDQotCrINCf0KDQldCS0KvQodCY0JvQmCDQntCW0JjQlNCQ0J3QmNCvINCSINCc0JjQm9Cb0JjQntCd0Ksg0KDQkNCXIDxicj4gwqvQryDQsdC10LfQs9GA0LDQvdC40YfQvdC+INGB0YfQsNGB0YLQu9C40LLQsCDQsdGL0YLRjCDQvdCwINC/0YDQvtCz0YDQsNC80LzQtSDCq9Ce0YfQuNGJ0LXQvdC40LXCuy4g0K3RgtC+INC90LDRgdGC0L7Rj9GJ0LjQuSDQv9C+0LTQsNGA0L7QuiDQtNC70Y8g0LzQtdC90Y8uINCe0YfQtdC90Ywg0LrRgNGD0YLQviDQv9C+0YfRg9Cy0YHRgtCy0L7QstCw0YLRjCDRgNCw0LfQvdC40YbRgyDRgSDRgtC+0LrRgdC40L3QsNC80Lgg0LIg0YLQtdC70LUg0Lgg0LHQtdC3INC90LjRhSwg0LLQtdC00Ywg0Y3RgtC+INC80L7QttC90L4g0YHQtNC10LvQsNGC0Ywg0YLQvtC70YzQutC+INC40LfQsdCw0LLQuNCy0YjQuNGB0Ywg0L7RgiDQvdC40YUsINCx0L7Qu9GM0YjQtSDQvdC40LrQsNC6LiA8YnI+INCd0LDQsdC70Y7QtNCw0Y8g0LfQsCDRgdC+0LHQvtC5LCDRjyDQt9Cw0LzQtdGC0LjQu9CwINC80L3QvtCz0L4g0L3QvtCy0L7Qs9C+ISDQryDQvdCw0YfQsNC70LAg0LvQtdCz0LrQviDQtNC10LvQuNGC0YzRgdGPLiDQnNC+0LPRgyDQv9GA0LjQvdGP0YLRjCDQv9C+0LzQvtGJ0Ywg0LvQtdCz0LrQvi4gPGJyPiDQoyDQvNC10L3RjyDRgdCy0LXRgtC70L4g0Lgg0YfQuNGB0YLQviDQsiDRgdC+0LfQvdCw0L3QuNC4LiA8YnI+INCc0LXQvdGPINC90LUg0YLRj9C90LXRgiDQvdCwINC60LDQutC40LUt0YLQviDQstGA0LXQtNC90YvQtSDQv9GA0L7QtNGD0LrRgtGLINC4INC90LAg0YHQu9Cw0LTQutC+0LUg4oCUINGN0YLQviDQutC70LDRgdGB0L3Qvi4g0KDQtdC30YPQu9GM0YLQsNGC0Ysg0L/RgNC10LLRi9GB0LjQu9C4INC+0LbQuNC00LDQvdC40Y8g0LIg0LzQuNC70LvQuNC+0L3RiyDRgNCw0LcuINCvINC30L3QsNGOLCDRh9GC0L4g0LTQsNC70YzRiNC1INC/0L7RgdC70LUg0L/RgNC+0LPRgNCw0LzQvNGLINGPINCx0YPQtNGDINC+0YHQvtC30L3QsNCy0LDRgtGMINC10YnRkSDQvNC90L7Qs9C+INGH0LXQs9C+INC90L7QstC+0LPQvsK7LlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzJOYW1lM1wiOiBcItCh0LLQtdGC0LvQsNC90LAg0JzQsNGA0YfQtdC90LrQvlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzJQb3MzXCI6IFwi0J7RgNCz0LDQvdC40LfQsNGC0L7RgCDQvNC10YDQvtC/0YDQuNGP0YLQuNC5XCIsXHJcbiAgICBcInNlY3JpY2VQYWdlUmV3MkRlczRcIjogXCLQkdCe0JvQrNCo0JUg0KDQkNCR0J7QotCrINCX0JAg0JzQldCd0KzQqNCV0JUg0JrQntCb0JjQp9CV0KHQotCS0J4g0JLQoNCV0JzQldCd0JggPGJyPiDCq9CX0LAg0LLRgNC10LzRjyDQv9GA0L7Qs9GA0LDQvNC80YsgwqvQntGH0LjRidC10L3QuNC1wrsg0Y8g0LvQuNGI0LjQu9GB0Y8g0LLRgdC10YUg0YLQvtC60YHQuNGH0L3Ri9GFINCy0LXRidC10YHRgtCyLCDQutC+0YLQvtGA0YvQtSDQvdCw0L/QvtC70L3Rj9C70Lgg0LzQvtC5INC+0YDQs9Cw0L3QuNC30LwuINCY0Lcg0LzQtdC90Y8g0LLRi9GI0LXQuyDQsNC70LrQvtCz0L7Qu9GMLCDQvNC10LTQuNC60LDQvNC10L3RgtGLLCDRgNCw0LTQuNCw0YbQuNGPINC4INC80L3QvtCz0L4g0YfQtdCz0L4g0LTRgNGD0LPQvtCz0L4sINC90LDQutC+0L/Qu9C10L3QvdC+0LPQviDQt9CwINCy0YHQtSDQvNC+0LggNDAg0LvQtdGCINC20LjQt9C90LguIDxicj4g0KHQtdC50YfQsNGBINGPINC/0L7Qu9C+0L0g0Y3QvdC10YDQs9C40Lgg0Lgg0LbQuNC30L3QtdC90L3QvtC5INGB0LjQu9GLLiDQoyDQvNC10L3RjyDRgdGC0LDQsdC40LvRjNC90L4g0YXQvtGA0L7RiNC10LUg0L3QsNGB0YLRgNC+0LXQvdC40LUuINCvINC90LDRh9Cw0Lsg0LTQtdC70LDRgtGMINCx0L7Qu9GM0YjQtSDRgNCw0LHQvtGC0Ysg0LfQsCDQvNC10L3RjNGI0LjQuSDQv9GA0L7QvNC10LbRg9GC0L7QuiDQstGA0LXQvNC10L3QuC4gPGJyPiDQoyDQvNC10L3RjyDRg9C70YPRh9GI0LjQu9C+0YHRjCDQt9GA0LXQvdC40LUsINGB0LvRg9GFINC4INC60L7QttCwLiDQndCw0LvQsNC00LjQu9C+0YHRjCDQv9C40YnQtdCy0LDRgNC10L3QuNC1LCDRjyDQvdCw0YfQsNC7INC/0LjRgtGMINC80L3QvtCz0L4g0LLQvtC00YsuINCYINC60YPRiNCw0YLRjCDQvtCy0L7RidC4LiA8YnI+INCh0LXQudGH0LDRgSDRjyDQstGB0ZEg0LLRgNC10LzRjyDRhdC+0YfRgyDRh9GC0L4t0YLQviDQtNC10LvQsNGC0Ywg0Lgg0LLRgdC10LPQtNCwINC90LDRhdC+0LbRg9GB0Ywg0LIg0YLQvtC90YPRgdC1wrsuIFwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzJOYW1lNFwiOiBcItCf0LDQstC10Lsg0JTQtdC80YfQtdC90LrQvlwiLFxyXG4gICAgXCJzZWNyaWNlUGFnZVJldzJQb3M0XCI6IFwi0KDQtdGB0YLQvtGA0LDRgtC+0YBcIlxyXG5cclxufSIsImltcG9ydCBlbktleXMgZnJvbSBcIi4uL2pzb24vbG9jYWxpemF0aW9uL2VuLmpzb25cIjtcclxuaW1wb3J0IHJ1S2V5cyBmcm9tIFwiLi4vanNvbi9sb2NhbGl6YXRpb24vcnUuanNvblwiO1xyXG5pbXBvcnQgaTE4bmV4dCBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50TGFuZyB9IGZyb20gXCIuLi91dGlscy9jb29raWVcIjtcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IGNoYW5nZUxhbmd1YWdlT25XZWJzaXRlIH0gZnJvbSBcIi4vbGFuZ3VhZ2Utc2VsZWN0LmpzXCI7XHJcblxyXG5jb25zdCBpbml0TG9jYWxpemF0aW9uID0gKCkgPT4ge1xyXG4gIGlmIChpMThuZXh0LmlzSW5pdGlhbGl6ZWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaTE4bmV4dC51c2UoaW5pdFJlYWN0STE4bmV4dCkuaW5pdCh7XHJcbiAgICBsbmc6IGdldEN1cnJlbnRMYW5nKCksXHJcbiAgICByZXNvdXJjZXM6IHtcclxuICAgICAgZW46IHtcclxuICAgICAgICB0cmFuc2xhdGlvbjoge1xyXG4gICAgICAgICAgLi4uZW5LZXlzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgdHJhbnNsYXRpb246IHtcclxuICAgICAgICAgIC4uLnJ1S2V5cyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjaGFuZ2VMYW5ndWFnZU9uV2Vic2l0ZSgpO1xyXG59O1xyXG5cclxuaW5pdExvY2FsaXphdGlvbigpOyIsImltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRMYW5nLCBzZXRMYW5ndWFnZSB9IGZyb20gXCIuLi91dGlscy9jb29raWUuanNcIjtcclxuaW1wb3J0ICcuL2kxOG4nO1xyXG5cclxuZnVuY3Rpb24gaW5pdExhbmd1YWdlU2VsZWN0KCkge1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUxhbmd1YWdlID0gbmV3IEV2ZW50KFwib25DaGFuZ2VMYW5ndWFnZVwiLCB7XCJidWJibGVzXCI6dHJ1ZSwgXCJjYW5jZWxhYmxlXCI6ZmFsc2V9KTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRMYW5nID0gZ2V0Q3VycmVudExhbmcoKTtcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxhbmd1YWdlLXNlbGVjdFwiKTtcclxuXHJcbiAgaWYgKCFsYW5ndWFnZVNlbGVjdCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZUJ0biA9XHJcbiAgbGFuZ3VhZ2VTZWxlY3QucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZC1sYW5ndWFnZVwiKTtcclxuXHJcbiAgc2VsZWN0ZWRMYW5ndWFnZUJ0bi50ZXh0Q29udGVudCA9IHNlbGVjdGVkTGFuZztcclxuXHJcbiAgY29uc3QgbGFuZ3VhZ2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmd1YWdlLWJ1dHRvbicpO1xyXG4gIGxhbmd1YWdlQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGlmKGJ0bi5kYXRhc2V0LmxhbmcgPT09IHNlbGVjdGVkTGFuZykge1xyXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgbmV3TGFuZyA9IGJ0bi5kYXRhc2V0Lmxhbmc7XHJcbiAgICAgIHNlbGVjdGVkTGFuZ3VhZ2VCdG4udGV4dENvbnRlbnQgPSBuZXdMYW5nO1xyXG4gICAgICByZW1vdmVBY3RpdmVDbGFzcyhsYW5ndWFnZUJ0bnMpO1xyXG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICBpZihpMThuZXh0Lmxhbmd1YWdlICE9PSBuZXdMYW5nKSB7XHJcbiAgICAgICAgc2V0TGFuZ3VhZ2UobmV3TGFuZykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBjaGFuZ2VMYW5ndWFnZU9uV2Vic2l0ZSgpO1xyXG4gICAgICAgICAgLy8gVHJpZ2dlciByZWFjdCBhcHAgbG9jYWxpemF0aW9uXHJcbiAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RcIikpIHtcclxuICAgICAgICAgICAgYnRuLmRpc3BhdGNoRXZlbnQob25DaGFuZ2VMYW5ndWFnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzcyhlbGVtZW50cykge1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2VPbldlYnNpdGUoKSB7XHJcblxyXG4gIGNvbnN0IGxvY2FsaXphdGlvblRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbG9jYWxpemF0aW9uXVwiKTtcclxuICBjb25zdCBsb2NhbGl6YXRpb25QbGFjZWhvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgXCJbZGF0YS1sb2NhbGl6YXRpb24tcGxhY2Vob2xkZXJdXCJcclxuICApO1xyXG5cclxuICBsb2NhbGl6YXRpb25UYWdzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5pbm5lckhUTUwgPSBgJHtpMThuZXh0LnQoZWwuZGF0YXNldC5sb2NhbGl6YXRpb24sIHtcclxuICAgICAgaW50ZXJwb2xhdGlvbjoge1xyXG4gICAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSl9YDtcclxuICB9KTtcclxuXHJcbiAgbG9jYWxpemF0aW9uUGxhY2Vob2xkZXJzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5wbGFjZWhvbGRlciA9IGAke2kxOG5leHQudChlbC5kYXRhc2V0LmxvY2FsaXphdGlvblBsYWNlaG9sZGVyKX1gO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtcclxuICBjaGFuZ2VMYW5ndWFnZU9uV2Vic2l0ZSxcclxuICBpbml0TGFuZ3VhZ2VTZWxlY3QsXHJcbn0iLCJpbXBvcnQgeyBQTEFORVRfRU5EUE9JTlRfQ09OVEFDVCwgUExBTkVUX0VORFBPSU5UX0NPVVJTRSB9IGZyb20gJy4vY29uc3RhbnRzL2xpbmsuanMnO1xyXG5pbXBvcnQgeyBQSE9ORV9SRUdFWCB9IGZyb20gJy4vY29uc3RhbnRzL3JlZ2V4LmpzJztcclxuaW1wb3J0IHsgbWFza1Bob25lTnVtYmVyIH0gZnJvbSAnLi91dGlscy9nZW5lcmFsLmpzJztcclxuaW1wb3J0IHsgaW5pdExhbmd1YWdlU2VsZWN0IH0gZnJvbSAnLi9sb2NhbGl6YXRpb24vbGFuZ3VhZ2Utc2VsZWN0LmpzJztcclxuXHJcbmluaXRMYW5ndWFnZVNlbGVjdCgpO1xyXG5cclxuLyogaGVhZGVyICovXHJcblxyXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuY29uc3QgbWVudUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbmNvbnN0IGxpbmtDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGluay1jbG9zZVwiKTtcclxuXHJcblxyXG5pZiAoYnVyZ2VyKSB7XHJcbiAgYnVyZ2VyT3V0c2lkZUNsaWNrKCk7XHJcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuTWVudSk7XHJcbn07XHJcblxyXG5pZiAobGlua0Nsb3NlLmxlbmd0aCkge1xyXG4gIGZvcih2YXIgaSA9MDtpPGxpbmtDbG9zZS5sZW5ndGg7KytpKXtcclxuICAgIGxpbmtDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNZW51KVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KGUpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJib2R5X2xvY2tcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIGlmKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlcl9hY3RpdmUnKSkge1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYnVyZ2VyX2ZpbmlzaCcpO1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9hY3RpdmUnKTtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlcl9maW5pc2gnKTtcclxuICAgIH1cclxuICBtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTWVudShlKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keV9sb2NrXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZShcImJ1cmdlcl9hY3RpdmVcIik7XHJcbiAgYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2J1cmdlcl9maW5pc2gnKTtcclxuICBtZW51Qm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1cmdlck91dHNpZGVDbGljaygpIHtcclxuICBsZXQgYmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2Ryb3AnKTtcclxuICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVudSlcclxufVxyXG5cclxuLyogcG9wVXAgKi9cclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XHJcbmNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXBcIik7XHJcbmNvbnN0IGJ0bk9wZW5Qb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuLXBvcHVwJyk7XHJcbmNvbnN0IGJ0bkNsb3NlUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcclxuXHJcblxyXG5pZiAoYnRuT3BlblBvcFVwKSB7XHJcbiAgYnRuT3BlblBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUG9wVXApO1xyXG59O1xyXG5cclxuaWYgKGJ0bkNsb3NlUG9wVXApIHtcclxuICBidG5DbG9zZVBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcFVwKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5Qb3BVcCAoZSl7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keV9sb2NrXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcFVwKGUpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5X2xvY2tcIik7XHJcbn1cclxuXHJcbi8qIG5hdm1lbnUgc2VydmljZSBwYWdlcyAqL1xyXG5cclxuY29uc3QgdGFic0J0biAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX25hdi1idG4nKTtcclxuY29uc3QgdGFic0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX2xpc3QnKTtcclxuXHJcbnRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBjdXJyZW50QnRuID0gaXRlbTtcclxuICAgICAgICBsZXQgdGFiSWQgPSBjdXJyZW50QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKTtcclxuICAgICAgICBsZXQgY3VycmVudFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpO1xyXG5cclxuICAgICAgICBpZiggISBjdXJyZW50QnRuLmNsYXNzTGlzdC5jb250YWlucygnYnRuX2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHRhYnNCdG4uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YWJzSXRlbS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdF9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgY3VycmVudFRhYi5jbGFzc0xpc3QuYWRkKCdsaXN0X2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIFN3aXBlcjpcclxuXHJcbmZ1bmN0aW9uIGRlc3Ryb3lTbGlkZXJzT25SZXNpemUoc2VsZWN0b3IsIHdpZHRoLCBvYmosIG1vcmVUaGFuKSB7XHJcbiAgY29uc3QgaW5pdCA9IHtcclxuICAgIC4uLm9iaixcclxuICB9O1xyXG5cclxuICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgY29uc3Qgc2xpZGVyU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuXHJcbiAgaWYoIXNsaWRlclNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCBpbml0KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlSW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5lZWRlZFdpZHRoID0gbW9yZVRoYW4gPyB3aW4uaW5uZXJXaWR0aCA+PSB3aWR0aCA6IHdpbi5pbm5lcldpZHRoIDw9IHdpZHRoXHJcbiAgICBpZiAobmVlZGVkV2lkdGgpIHtcclxuICAgICAgaWYgKCFzbGlkZXJTZWxlY3Rvci5jbGFzc0xpc3QuY29udGFpbnMoXCJzd2lwZXItaW5pdGlhbGl6ZWRcIikpIHtcclxuICAgICAgICBzd2lwZXIgPSBuZXcgU3dpcGVyKHNlbGVjdG9yLCBpbml0KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzbGlkZXJTZWxlY3Rvci5jbGFzc0xpc3QuY29udGFpbnMoXCJzd2lwZXItaW5pdGlhbGl6ZWRcIikpIHtcclxuICAgICAgc3dpcGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBbXCJsb2FkXCIsIFwicmVzaXplXCJdLmZvckVhY2goKGV2dCkgPT5cclxuICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKGV2dCwgdG9nZ2xlSW5pdCwgZmFsc2UpXHJcbiAgKTtcclxufVxyXG5cclxuZGVzdHJveVNsaWRlcnNPblJlc2l6ZShcIi5yZXZpZXdzLXNsaWRlclwiLCA5OTk5OSwge1xyXG4gIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgc3BlZWQ6IDgwMCxcclxuICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuLyogcmV2aWV3cyBvcGVuZXIgKi9cclxuXHJcbmNvbnN0IHJldmlld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGV4dC13cmFwXCIpO1xyXG5cclxucmV2aWV3c0Jsb2NrLmZvckVhY2goZnVuY3Rpb24ocmV2aWV3KXtcclxuICBjb25zdCBidG5PcGVuID0gcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5yZXYtb3BlbicpO1xyXG4gIGNvbnN0IGJ0bkNsb3NlID0gcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoJy5yZXYtY2xvc2UnKTtcclxuXHJcbiAgaWYoYnRuT3Blbil7XHJcbiAgICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfcmV2aWV3XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICByZXZpZXcuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9yZXZpZXdcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxubmV3IFdPVygpLmluaXQoKTtcclxuXHJcbi8qIGNhc3RvbSBhbmltICovXHJcblxyXG5mdW5jdGlvbiBvbkVudHJ5KGVudHJ5KSB7XHJcbiAgZW50cnkuZm9yRWFjaChjaGFuZ2UgPT4ge1xyXG4gICAgaWYgKGNoYW5nZS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICBjaGFuZ2UudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2VsZW1lbnQtc2hvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmxldCBvcHRpb25zID0geyB0aHJlc2hvbGQ6IFswLjVdIH07XHJcbmxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkVudHJ5LCBvcHRpb25zKTtcclxubGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVsZW1lbnQtYW5pbWF0aW9uJyk7XHJcbmZvciAobGV0IGVsbSBvZiBlbGVtZW50cykge1xyXG4gIG9ic2VydmVyLm9ic2VydmUoZWxtKTtcclxufVxyXG5cclxuLyogYWN0aXZlIGxpbmsgcGFnZSAqL1xyXG5cclxubGV0IHBhZ2VJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pZC1wYWdlXVwiKS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkLXBhZ2VcIiksXHJcbiAgICBuYXZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQtbmF2PSR7cGFnZUlkfV1gKTtcclxuXHJcbmlmKHBhZ2VJZCA9PSBuYXZJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaWQtbmF2XCIpKSB7XHJcbiAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtbGlua1wiKTtcclxufVxyXG5cclxuLyogY29udGFjdCBmb3JtICovXHJcbmluaXRDb250YWN0Rm9ybSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IGZvcm1XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXdyYXBcIik7XHJcbiAgXHJcbiAgaWYgKCFmb3JtV3JhcCkgcmV0dXJuO1xyXG4gIFxyXG4gIGNvbnN0IGZvcm0gPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RGb3JtXCIpO1xyXG5cclxuICBpZighZm9ybSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBzdWNjZXNzTXNnQmxvY2sgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tc2cnKTtcclxuICBjb25zdCBmb3JtQ29udGVudCA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRlbnQnKTtcclxuICBjb25zdCBFTUFJTF9SRUdFWCA9IC9bXkAgXFx0XFxyXFxuXStAW15AIFxcdFxcclxcbl0rXFwuW15AIFxcdFxcclxcbl0rLztcclxuICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmaXJzdE5hbWVcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNsYXN0TmFtZVwiKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpO1xyXG4gIGNvbnN0IG1lc3NhZ2VJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZUVycm9yRWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgZW1haWxFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsRXJyb3JcIik7XHJcbiAgY29uc3QgZmV0Y2hFcnJvckVsID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZldGNoLWVycm9yJyk7XHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyV3JhcCcpO1xyXG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGZpcnN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgbGFzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGVtYWlsSW5wdXQudmFsdWUpO1xyXG5cclxuICAgIGlmKCFpc0Zvcm1WYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgZW1haWw6IGVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VJbnB1dC52YWx1ZSxcclxuICAgIH1cclxuXHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG5cclxuICAgIGZldGNoKFBMQU5FVF9FTkRQT0lOVF9DT05UQUNULCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICByZWRpcmVjdDogXCJmb2xsb3dcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdCksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgc3VjY2Vzc01zZ0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgZm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgZm9ybVdyYXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1zZW5kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgZmlyc3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgdmFsaWRhdGVGb3JtKFwiZmlyc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuICBsYXN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImVtYWlsSW5wdXRcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZpZWxkLCB2YWx1ZSkge1xyXG4gICAgc3dpdGNoIChmaWVsZCkge1xyXG4gICAgICBjYXNlIFwiZmlyc3ROYW1lSW5wdXRcIjpcclxuICAgICAgICBpZih2YWx1ZSA8IDEpIHtcclxuICAgICAgICAgIGZpcnN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsYXN0TmFtZUlucHV0XCI6XHJcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICBsYXN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGxhc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiZW1haWxJbnB1dFwiOlxyXG4gICAgICAgIGlmKCFFTUFJTF9SRUdFWC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgZW1haWxFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBlbWFpbEVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIGNvbnRhY3QgZm9ybSAqL1xyXG5pbml0Q291cnNlRm9ybSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdENvdXJzZUZvcm0oKSB7XHJcbiAgY29uc3QgZm9ybVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0td3JhcFwiKTtcclxuICBcclxuICBpZiAoIWZvcm1XcmFwKSByZXR1cm47XHJcbiAgXHJcbiAgY29uc3QgZm9ybSA9IGZvcm1XcmFwLnF1ZXJ5U2VsZWN0b3IoXCIjY291cnNlRm9ybVwiKTtcclxuXHJcbiAgaWYoIWZvcm0pIHJldHVybjtcclxuXHJcbiAgY29uc3Qgc3VjY2Vzc01zZ0Jsb2NrID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtbXNnJyk7XHJcbiAgY29uc3QgZm9ybUNvbnRlbnQgPSBmb3JtV3JhcC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250ZW50Jyk7XHJcbiAgY29uc3QgZmlyc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lXCIpO1xyXG4gIGNvbnN0IGxhc3ROYW1lSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdE5hbWVcIik7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKTtcclxuICBjb25zdCBwaG9uZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZUVycm9yRWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZmlyc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgbGFzdE5hbWVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2xhc3ROYW1lRXJyb3JcIik7XHJcbiAgY29uc3QgcGhvbmVFcnJvckVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI3Bob25lRXJyb3JcIik7XHJcbiAgY29uc3QgZmV0Y2hFcnJvckVsID0gZm9ybVdyYXAucXVlcnlTZWxlY3RvcignLmZldGNoLWVycm9yJyk7XHJcbiAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGlubmVyV3JhcCcpO1xyXG4gIGxldCBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGZpcnN0TmFtZUlucHV0LnZhbHVlKTtcclxuICAgIHZhbGlkYXRlRm9ybShcImxhc3ROYW1lSW5wdXRcIiwgbGFzdE5hbWVJbnB1dC52YWx1ZSk7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJlbWFpbElucHV0XCIsIGVtYWlsSW5wdXQudmFsdWUpO1xyXG4gICAgdmFsaWRhdGVGb3JtKFwicGhvbmVJbnB1dFwiLCBwaG9uZUlucHV0LnZhbHVlKVxyXG5cclxuICAgIGlmKCFpc0Zvcm1WYWxpZCkgcmV0dXJuO1xyXG5cclxuICAgIGZldGNoRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBsYXN0TmFtZTogbGFzdE5hbWVJbnB1dC52YWx1ZSxcclxuICAgICAgZW1haWw6IGVtYWlsSW5wdXQudmFsdWUsXHJcbiAgICAgIHBob25lTnVtYmVyOiBwaG9uZUlucHV0LnZhbHVlLFxyXG4gICAgfVxyXG5cclxuICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcblxyXG4gICAgZmV0Y2goUExBTkVUX0VORFBPSU5UX0NPVVJTRSwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgcmVkaXJlY3Q6IFwiZm9sbG93XCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIHN1Y2Nlc3NNc2dCbG9jay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGZvcm1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICAgIGZvcm1XcmFwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tc2VuZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGVycm9yKTtcclxuICAgICAgICBmZXRjaEVycm9yRWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIGZpcnN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgIHZhbGlkYXRlRm9ybShcImZpcnN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcbiAgbGFzdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJsYXN0TmFtZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcbiAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICB2YWxpZGF0ZUZvcm0oXCJwaG9uZUlucHV0XCIsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmaWVsZCwgdmFsdWUpIHtcclxuICAgIHN3aXRjaCAoZmllbGQpIHtcclxuICAgICAgY2FzZSBcImZpcnN0TmFtZUlucHV0XCI6XHJcbiAgICAgICAgaWYodmFsdWUgPCAxKSB7XHJcbiAgICAgICAgICBmaXJzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICBpc0Zvcm1WYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0Zvcm1WYWxpZCA9IHRydWU7XHJcbiAgICAgICAgZmlyc3ROYW1lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibGFzdE5hbWVJbnB1dFwiOlxyXG4gICAgICAgIGlmKHZhbHVlIDwgMSkge1xyXG4gICAgICAgICAgbGFzdE5hbWVFcnJvckVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcclxuICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzRm9ybVZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBsYXN0TmFtZUVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInBob25lSW5wdXRcIjpcclxuICAgICAgICBjb25zdCBwaG9uZVZhbHVlID0gdmFsdWUgPyB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIikgOiAnJztcclxuICAgICAgICBjb25zdCBtYXNrZWRQaG9uZU51bWJlciA9IG1hc2tQaG9uZU51bWJlcihwaG9uZVZhbHVlKTtcclxuICAgICAgICBwaG9uZUlucHV0LnZhbHVlID0gbWFza2VkUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgaWYoIVBIT05FX1JFR0VYLnRlc3QobWFza2VkUGhvbmVOdW1iZXIpKSB7XHJcbiAgICAgICAgICBwaG9uZUVycm9yRWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgICAgaXNGb3JtVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNGb3JtVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIHBob25lRXJyb3JFbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogc2VydmljZXMgbWVudSBsb2dpYyAqL1xyXG5pbml0U2VydmljZU1lbnUoKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRTZXJ2aWNlTWVudSgpIHtcclxuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtXCIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYXJyb3dzJykpIHtcclxuICAgICAgY2xvc2VPcGVuSXRlbXMoKTtcclxuICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcubWVudS1pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xvc2VPcGVuSXRlbXMoKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlT3Blbkl0ZW1zKCkge1xyXG4gICAgbWVudUl0ZW0uZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1pdGVtX2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbi8qIFN0aWNreSAqL1xyXG5pbml0U3RpY2t5TWVudSgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdFN0aWNreU1lbnUoKSB7XHJcbiAgY29uc3QgbWVudUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtc2VjJyk7XHJcbiAgXHJcbiAgaWYoIW1lbnVFbCkgcmV0dXJuO1xyXG5cclxuICBjb25zdCBvcmlnaW5NZW51VG9wID0gbWVudUVsLm9mZnNldFBhcmVudC5vZmZzZXRUb3A7XHJcbiAgXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPiBvcmlnaW5NZW51VG9wKSB7XHJcbiAgICAgIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVudUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICB9O1xyXG4gIH0pXHJcbn0iLCJpbXBvcnQgaTE4bmV4dCBmcm9tIFwiaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBMQU5HLCBMQU5HU19UWVBFUyB9IGZyb20gXCIuLi9jb25zdGFudHMvY29va2llLmpzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykgPT4ge1xyXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gIGQuc2V0VGltZShkLmdldFRpbWUoKSArIGV4ZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gIGxldCBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoY25hbWUpID0+IHtcclxuICBsZXQgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgbGV0IGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICBsZXQgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KFwiO1wiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgYyA9IGNhW2ldO1xyXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09IFwiIFwiKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xyXG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TGFuZ3VhZ2UgPSAobmV3TGFuZykgPT4ge1xyXG4gIHNldENvb2tpZShMQU5HLCBuZXdMYW5nKTtcclxuICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgcmV0dXJuIGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobmV3TGFuZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50TGFuZyA9ICgpID0+IHtcclxuICBsZXQgc2VsZWN0ZWRMYW5nID0gZ2V0Q29va2llKExBTkcpO1xyXG5cclxuICBpZiAoIXNlbGVjdGVkTGFuZykge1xyXG4gICAgc2V0Q29va2llKExBTkcsIExBTkdTX1RZUEVTLlJVKTtcclxuICAgIHNlbGVjdGVkTGFuZyA9IExBTkdTX1RZUEVTLlJVO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNlbGVjdGVkTGFuZztcclxufSIsImV4cG9ydCBjb25zdCBtYXNrUGhvbmVOdW1iZXIgPSAocGhvbmVOdW1iZXIpID0+IHtcclxuICBjb25zdCBsZW5ndGggPSBwaG9uZU51bWJlci5sZW5ndGg7XHJcblxyXG4gIGlmIChsZW5ndGggPiA4KSB7XHJcbiAgICByZXR1cm4gYCgke3Bob25lTnVtYmVyLnNsaWNlKDAsIDMpfSkgJHtwaG9uZU51bWJlci5zbGljZShcclxuICAgICAgMyxcclxuICAgICAgNlxyXG4gICAgKX0gJHtwaG9uZU51bWJlci5zbGljZSg2LCA4KX0gJHtwaG9uZU51bWJlci5zbGljZSg4LCAxMCl9YDtcclxuICB9XHJcblxyXG4gIGlmIChsZW5ndGggPiA2KSB7XHJcbiAgICByZXR1cm4gYCgke3Bob25lTnVtYmVyLnNsaWNlKDAsIDMpfSkgJHtwaG9uZU51bWJlci5zbGljZShcclxuICAgICAgMyxcclxuICAgICAgNlxyXG4gICAgKX0gJHtwaG9uZU51bWJlci5zbGljZSg2KX1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxlbmd0aCA+IDMpIHtcclxuICAgIHJldHVybiBgKCR7cGhvbmVOdW1iZXIuc2xpY2UoMCwgMyl9KSAke3Bob25lTnVtYmVyLnNsaWNlKDMpfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGhvbmVOdW1iZXI7XHJcbn07XHJcbiJdfQ==

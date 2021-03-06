"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FarmingService = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FarmingService = /*#__PURE__*/function () {
  function FarmingService(investService) {
    _classCallCheck(this, FarmingService);

    this.investService = investService;
  }

  _createClass(FarmingService, [{
    key: "markets",
    value: function () {
      var _markets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(protocol) {
        var _this = this;

        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get("https://api.defitrack.io/".concat(protocol, "/staking/all-markets"));

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response.data.map(function (market) {
                  return _objectSpread(_objectSpread({}, market), {}, {
                    enter: _this.investService.investFunction(market)
                  });
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function markets(_x) {
        return _markets.apply(this, arguments);
      }

      return markets;
    }()
  }, {
    key: "marketsForToken",
    value: function () {
      var _marketsForToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(protocol, token, network) {
        var _this2 = this;

        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _axios["default"].get("https://api.defitrack.io/".concat(protocol, "/farming/markets?token=").concat(token, "&network=").concat(network));

              case 2:
                response = _context2.sent;
                return _context2.abrupt("return", response.data.map(function (market) {
                  return _objectSpread(_objectSpread({}, market), {}, {
                    enter: _this2.investService.investFunction(market)
                  });
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function marketsForToken(_x2, _x3, _x4) {
        return _marketsForToken.apply(this, arguments);
      }

      return marketsForToken;
    }()
  }, {
    key: "positions",
    value: function () {
      var _positions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(protocol, user) {
        var _this3 = this;

        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _axios["default"].get("https://api.defitrack.io/".concat(protocol, "/farming/").concat(user, "/positions"));

              case 2:
                response = _context3.sent;
                return _context3.abrupt("return", response.data.map(function (market) {
                  return _objectSpread(_objectSpread({}, market), {}, {
                    enter: _this3.investService.investFunction(market)
                  });
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function positions(_x5, _x6) {
        return _positions.apply(this, arguments);
      }

      return positions;
    }()
  }]);

  return FarmingService;
}();

exports.FarmingService = FarmingService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGYXJtaW5nU2VydmljZSIsImludmVzdFNlcnZpY2UiLCJwcm90b2NvbCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwibWFwIiwibWFya2V0IiwiZW50ZXIiLCJpbnZlc3RGdW5jdGlvbiIsInRva2VuIiwibmV0d29yayIsInVzZXIiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFybWluZy9mYXJtaW5nLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtGYXJtaW5nTWFya2V0LCBGYXJtaW5nUG9zaXRpb259IGZyb20gXCIuL2Zhcm1pbmcubW9kZWxcIjtcbmltcG9ydCB7TGVuZGluZ01hcmtldCwgTGVuZGluZ1Bvc2l0aW9ufSBmcm9tIFwiLi4vbGVuZGluZy9sZW5kaW5nLm1vZGVsXCI7XG5pbXBvcnQge0ludmVzdFNlcnZpY2V9IGZyb20gXCIuLi9pbnZlc3QvaW52ZXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UG9vbGluZ01hcmtldH0gZnJvbSBcIi4uL3Bvb2xpbmcvcG9vbGluZy5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgRmFybWluZ1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBpbnZlc3RTZXJ2aWNlOiBJbnZlc3RTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoaW52ZXN0U2VydmljZTogSW52ZXN0U2VydmljZSkge1xuICAgICAgICB0aGlzLmludmVzdFNlcnZpY2UgPSBpbnZlc3RTZXJ2aWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBtYXJrZXRzKHByb3RvY29sOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEZhcm1pbmdNYXJrZXQ+PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5kZWZpdHJhY2suaW8vJHtwcm90b2NvbH0vc3Rha2luZy9hbGwtbWFya2V0c2ApXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLm1hcCgobWFya2V0OiBGYXJtaW5nTWFya2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm1hcmtldCxcbiAgICAgICAgICAgICAgICBlbnRlcjogdGhpcy5pbnZlc3RTZXJ2aWNlLmludmVzdEZ1bmN0aW9uKG1hcmtldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG1hcmtldHNGb3JUb2tlbihwcm90b2NvbDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBuZXR3b3JrOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEZhcm1pbmdNYXJrZXQ+PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5kZWZpdHJhY2suaW8vJHtwcm90b2NvbH0vZmFybWluZy9tYXJrZXRzP3Rva2VuPSR7dG9rZW59Jm5ldHdvcms9JHtuZXR3b3JrfWApXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLm1hcCgobWFya2V0OiBGYXJtaW5nTWFya2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm1hcmtldCxcbiAgICAgICAgICAgICAgICBlbnRlcjogdGhpcy5pbnZlc3RTZXJ2aWNlLmludmVzdEZ1bmN0aW9uKG1hcmtldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHBvc2l0aW9ucyhwcm90b2NvbDogc3RyaW5nLCB1c2VyOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEZhcm1pbmdQb3NpdGlvbj4+e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZGVmaXRyYWNrLmlvLyR7cHJvdG9jb2x9L2Zhcm1pbmcvJHt1c2VyfS9wb3NpdGlvbnNgKVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5tYXAoKG1hcmtldDogRmFybWluZ1Bvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLm1hcmtldCxcbiAgICAgICAgICAgICAgICBlbnRlcjogdGhpcy5pbnZlc3RTZXJ2aWNlLmludmVzdEZ1bmN0aW9uKG1hcmtldClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7K0NBQ0Esb0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUthQSxjO0VBSVQsd0JBQVlDLGFBQVosRUFBMEM7SUFBQTs7SUFDdEMsS0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7RUFDSDs7Ozs7Z0ZBRUQsaUJBQXFCQyxRQUFyQjtRQUFBOztRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDMkJDLGlCQUFBLENBQU1DLEdBQU4sb0NBQXNDRixRQUF0QywwQkFEM0I7O2NBQUE7Z0JBQ1VHLFFBRFY7Z0JBQUEsaUNBRVdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE1BQUQsRUFBMkI7a0JBQ2hELHVDQUNPQSxNQURQO29CQUVJQyxLQUFLLEVBQUUsS0FBSSxDQUFDUixhQUFMLENBQW1CUyxjQUFuQixDQUFrQ0YsTUFBbEM7a0JBRlg7Z0JBSUgsQ0FMTSxDQUZYOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDOzs7Ozs7Ozs7Ozt3RkFVQSxrQkFBNkJOLFFBQTdCLEVBQStDUyxLQUEvQyxFQUE4REMsT0FBOUQ7UUFBQTs7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQzJCVCxpQkFBQSxDQUFNQyxHQUFOLG9DQUFzQ0YsUUFBdEMsb0NBQXdFUyxLQUF4RSxzQkFBeUZDLE9BQXpGLEVBRDNCOztjQUFBO2dCQUNVUCxRQURWO2dCQUFBLGtDQUVXQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxNQUFELEVBQTJCO2tCQUNoRCx1Q0FDT0EsTUFEUDtvQkFFSUMsS0FBSyxFQUFFLE1BQUksQ0FBQ1IsYUFBTCxDQUFtQlMsY0FBbkIsQ0FBa0NGLE1BQWxDO2tCQUZYO2dCQUlILENBTE0sQ0FGWDs7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUEsQzs7Ozs7Ozs7Ozs7a0ZBVUEsa0JBQXVCTixRQUF2QixFQUF5Q1csSUFBekM7UUFBQTs7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUFBO2dCQUFBLE9BQzJCVixpQkFBQSxDQUFNQyxHQUFOLG9DQUFzQ0YsUUFBdEMsc0JBQTBEVyxJQUExRCxnQkFEM0I7O2NBQUE7Z0JBQ1VSLFFBRFY7Z0JBQUEsa0NBRVdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUNDLE1BQUQsRUFBNkI7a0JBQ2xELHVDQUNPQSxNQURQO29CQUVJQyxLQUFLLEVBQUUsTUFBSSxDQUFDUixhQUFMLENBQW1CUyxjQUFuQixDQUFrQ0YsTUFBbEM7a0JBRlg7Z0JBSUgsQ0FMTSxDQUZYOztjQUFBO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQSxDIn0=
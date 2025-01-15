"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.getTaskListByUserId = exports.getTaskList = exports.getTaskById = exports.downloadReport = exports.destroyTask = exports.createNassignTask = void 0;
var _pdfkit = _interopRequireDefault(require("pdfkit"));
var _sequelize = require("sequelize");
var _database = _interopRequireDefault(require("../../config/database.js"));
var _TaskModel = _interopRequireDefault(require("../models/Task.model.js"));
var _rawQuery = require("../rawQuery/rawQuery.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Get semua product
var getTaskList = exports.getTaskList = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var taskList;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _TaskModel["default"].findAll();
        case 3:
          taskList = _context.sent;
          res.status(200).json({
            status: true,
            message: "successfuly",
            data: taskList
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: false,
            message: "Failed Load task"
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getTaskList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getTaskById = exports.getTaskById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var taskId, product;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          taskId = req.params.id;
          _context2.next = 4;
          return _database["default"].query((0, _rawQuery.getTaskByTaskId)(taskId), {
            type: _sequelize.QueryTypes.SELECT
          });
        case 4:
          product = _context2.sent;
          if ((product === null || product === void 0 ? void 0 : product.length) > 0) {
            res.status(200).json({
              status: true,
              message: "Success Get Detail Task",
              data: product[0]
            });
          } else {
            res.status(404).json({
              status: false,
              message: "Task id not found",
              data: null
            });
          }
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            status: false,
            message: "Failed Load task by id"
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getTaskById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getTaskListByUserId = exports.getTaskListByUserId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$query, id, priority, task_progres, filterDate, keyword, product;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$query = req.query, id = _req$query.id, priority = _req$query.priority, task_progres = _req$query.task_progres, filterDate = _req$query.filterDate, keyword = _req$query.keyword;
          _context3.next = 4;
          return _database["default"].query((0, _rawQuery.getTaskByUserId)(id, priority, task_progres, filterDate, keyword), {
            type: _sequelize.QueryTypes.SELECT
          });
        case 4:
          product = _context3.sent;
          if ((product === null || product === void 0 ? void 0 : product.length) > 0) {
            res.status(200).json({
              status: true,
              message: "success",
              data: product
            });
          } else {
            res.status(404).json({
              status: false,
              message: "user id not be found",
              data: []
            });
          }
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            status: false,
            message: "Failed Load task by user id"
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function getTaskListByUserId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var createNassignTask = exports.createNassignTask = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, id_point, task_name, task_progres, task_date, task_duedate, task_docs, id_pic, id_svp, id_priority, newTaskData, task;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body = req.body, id_point = _req$body.id_point, task_name = _req$body.task_name, task_progres = _req$body.task_progres, task_date = _req$body.task_date, task_duedate = _req$body.task_duedate, task_docs = _req$body.task_docs, id_pic = _req$body.id_pic, id_svp = _req$body.id_svp, id_priority = _req$body.id_priority;
          if (!(id_point, task_name, task_progres, task_date, task_duedate, task_docs, id_pic, id_svp, id_priority)) {
            _context4.next = 10;
            break;
          }
          //  create and assign task
          newTaskData = {
            id_point: id_point,
            task_name: task_name,
            task_progres: task_progres,
            task_date: new Date(task_date),
            task_duedate: new Date(task_duedate),
            task_docs: task_docs,
            id_pic: id_pic,
            id_svp: id_svp,
            priority_id: id_priority
          };
          task = new _TaskModel["default"](newTaskData);
          _context4.next = 7;
          return task.save();
        case 7:
          res.status(201).json({
            status: true,
            message: "Task created successfully",
            data: newTaskData
          });
          _context4.next = 11;
          break;
        case 10:
          res.status(400).json({
            status: false,
            message: "fields is required"
          });
        case 11:
          _context4.next = 16;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            status: false,
            message: "Error when creating task"
          });
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function createNassignTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var destroyTask = exports.destroyTask = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var taskDestroyed;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _TaskModel["default"].destroy({
            where: {
              id: req.params.id
            }
          });
        case 3:
          taskDestroyed = _context5.sent;
          if (taskDestroyed === 1) {
            res.status(200).json({
              status: true,
              message: "Success destroying task"
            });
          } else {
            res.status(400).json({
              status: false,
              message: "failed destroying task"
            });
          }
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            status: false,
            message: "Error when deleting task"
          });
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function destroyTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateTask = exports.updateTask = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body2, id_task, id_point, task_name, task_progres, task_date, task_duedate, task_docs, id_pic, id_svp, newTaskData, taskUpdated;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body2 = req.body, id_task = _req$body2.id_task, id_point = _req$body2.id_point, task_name = _req$body2.task_name, task_progres = _req$body2.task_progres, task_date = _req$body2.task_date, task_duedate = _req$body2.task_duedate, task_docs = _req$body2.task_docs, id_pic = _req$body2.id_pic, id_svp = _req$body2.id_svp; //  create and assign task
          newTaskData = {
            id_point: id_point,
            task_name: task_name,
            task_progres: task_progres,
            task_date: new Date(task_date),
            task_duedate: new Date(task_duedate),
            task_docs: task_docs,
            id_pic: id_pic,
            id_svp: id_svp
          };
          _context6.next = 5;
          return _TaskModel["default"].update(newTaskData, {
            where: {
              id: id_task
            }
          });
        case 5:
          taskUpdated = _context6.sent;
          if ((taskUpdated === null || taskUpdated === void 0 ? void 0 : taskUpdated[0]) === 1) {
            res.status(201).json({
              status: true,
              message: "Task updated successfully",
              data: newTaskData
            });
          } else {
            res.status(400).json({
              status: false,
              message: "failed updating task"
            });
          }
          _context6.next = 12;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            status: false,
            message: "Error when updating task"
          });
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var downloadReport = exports.downloadReport = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$query2, id, start, end, tasks, doc, user, totalPoints, tableTop;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$query2 = req.query, id = _req$query2.id, start = _req$query2.start, end = _req$query2.end;
          _context7.next = 3;
          return _database["default"].query((0, _rawQuery.filterTaskByUserId)(id, start, end), {
            type: _sequelize.QueryTypes.SELECT
          });
        case 3:
          tasks = _context7.sent;
          doc = new _pdfkit["default"]({
            size: "A4",
            margin: 50
          });
          res.setHeader("Content-Type", "application/pdf");
          res.setHeader("Content-Disposition", 'attachment; filename="task-report.pdf"');
          doc.pipe(res);

          // Header with Title
          doc.fontSize(20).font("Helvetica-Bold").text("Task Report", {
            align: "center"
          }).moveDown(1);

          // User Information
          user = tasks[0];
          doc.fontSize(14).font("Helvetica-Bold").text("User Information", {
            underline: true
          }).moveDown(0.5).font("Helvetica").fontSize(12).text("Name: ".concat(user.username)).text("Email: ".concat(user.email)).moveDown(1.5);

          // Task Overview Section
          totalPoints = 0;
          tasks.forEach(function (task) {
            return totalPoints += task.point;
          });
          doc.fontSize(14).font("Helvetica-Bold").text("Task Overview", {
            underline: true
          }).moveDown(0.5).fontSize(12).font("Helvetica").text("Total Tasks: ".concat(tasks.length)).text("Total Points: ".concat(totalPoints)).moveDown(1.5);

          // Task Details Table Header
          tableTop = doc.y;
          doc.font("Helvetica-Bold").fontSize(12);
          doc.text("ID", 50, tableTop, {
            width: 50,
            align: "left"
          }).text("Task Name", 100, tableTop, {
            width: 200,
            align: "left"
          }).text("Priority", 300, tableTop, {
            width: 80,
            align: "center"
          }).text("Progress", 380, tableTop, {
            width: 80,
            align: "center"
          }).text("Points", 460, tableTop, {
            width: 50,
            align: "right"
          });
          doc.moveDown(1);

          // Task Details Table Rows
          doc.font("Helvetica").fontSize(10);
          tasks.forEach(function (task) {
            var rowTop = doc.y;
            doc.text(task.id, 50, rowTop, {
              width: 50,
              align: "left"
            }).text(task.task_name, 100, rowTop, {
              width: 200,
              align: "left"
            }).text(task.priority, 300, rowTop, {
              width: 80,
              align: "center"
            }).text(task.task_progress, 380, rowTop, {
              width: 80,
              align: "center"
            }).text(task.point, 460, rowTop, {
              width: 50,
              align: "right"
            });
            doc.moveDown(0.5);
          });
          doc.moveDown(2);

          // Footer with Generated Date
          doc.fontSize(10).font("Helvetica-Oblique").text("Generated on: ".concat(new Date().toLocaleDateString(), " at ").concat(new Date().toLocaleTimeString()), {
            align: "right"
          });
          doc.end();
        case 23:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function downloadReport(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
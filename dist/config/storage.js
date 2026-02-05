"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Modul bawaan Node.js untuk urusan file system

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    // 1. Tentukan folder utama
    var rootDir = "assets";
    var targetDir = rootDir;

    // 2. Jika fieldnya adalah 'task_file', arahkan ke subfolder 'task'
    if (file.fieldname === "task_file") {
      targetDir = _path["default"].join(rootDir, "task");
    }

    // 3. LOGIKA OTOMATIS BUAT FOLDER
    // { recursive: true } memastikan jika folder 'assets' belum ada, 
    // maka 'assets' dan 'assets/task' akan dibuat sekaligus.
    if (!_fs["default"].existsSync(targetDir)) {
      _fs["default"].mkdirSync(targetDir, {
        recursive: true
      });
    }
    cb(null, targetDir);
  },
  filename: function filename(req, file, cb) {
    var uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + _path["default"].extname(file.originalname);
    cb(null, uniqueName);
  }
});
var fileFilter = function fileFilter(req, file, cb) {
  var allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Format file tidak didukung!"), false);
  }
};
var upload = exports.upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024
  }
});
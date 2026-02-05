import multer from "multer";
import path from "path";
import fs from "fs"; // Modul bawaan Node.js untuk urusan file system

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 1. Tentukan folder utama
    const rootDir = "assets";
    let targetDir = rootDir;

    // 2. Jika fieldnya adalah 'task_file', arahkan ke subfolder 'task'
    if (file.fieldname === "task_file") {
      targetDir = path.join(rootDir, "task");
    }

    // 3. LOGIKA OTOMATIS BUAT FOLDER
    // { recursive: true } memastikan jika folder 'assets' belum ada, 
    // maka 'assets' dan 'assets/task' akan dibuat sekaligus.
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    cb(null, targetDir);
  },
  filename: function (req, file, cb) {
    const uniqueName =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "image/jpeg", "image/png", "image/jpg",
    "application/pdf",                                          
    "application/vnd.ms-excel",                                 
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 
    "application/msword",                                       
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Format file tidak didukung!"), false);
  }
};

export const upload = multer({ 
  storage, 
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } 
});
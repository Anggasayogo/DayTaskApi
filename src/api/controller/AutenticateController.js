import Users from "../models/Users.model.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import moment from "moment-timezone";

export const register = async (req, res) => {
  try {
    const { username, email, password, role_id, divisi_id, phone } = req.body;
    const host = `${req.protocol}://${req.get('host')}`;

    // Cek email sudah digunakan atau belum
    const userExist = await Users.findOne({ where: { email } });

    if (userExist) {
      return res.status(400).json({
        status: false,
        message: "Email is already in use"
      });
    }

    // Proses avatar dari upload (jika ada)
    let avatarPath = "";
    if (req.file) {
      avatarPath = `assets/${req.file.filename}`;
    }

    // Hash password
    const hashedPassword = await argon2.hash(password);

    // Insert user baru
    const newUser = await Users.create({
      username,
      email,
      password: hashedPassword,
      role_id,
      divisi_id,
      phone,
      avatar: avatarPath
    });

    return res.status(201).json({
      status: true,
      message: "User registered successfully",
      data: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        phone: newUser.phone,
        role_id: newUser.role_id,
        divisi_id: newUser.divisi_id,
        avatar: avatarPath ? `${host}/${avatarPath}` : null
      }
    });

  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      status: false,
      message: "Registration failed"
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "User doesn't exist" });
    }

    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch) {
      return res.status(401).json({ 
        status: false,
        message: "Authentication failed" 
      });
    }

    const token = jwt.sign({ userId: user.id }, "RRQ", {
      expiresIn: "30d",
    });

    res.status(200).json({
      status: true,
      message: "Login successFully",
      user: {
        user_id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role_id: user.role_id,
        avatar: user.avatar,
      },
      token,
    });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      status: false,
      message: "Login failed" ,
    });
  }
};

export const getUsersList = async (req, res) => {
  try {
    const user = await Users.findAll({
      attributes: [
        ["id", "user_id"],
        ["username", "username"],
        ["email", "email"],
        ["phone", "phone"],
        ["avatar", "avatar"],
      ],
    });
    res.send(user);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed get user list",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params; // ID pengguna dari parameter URL
    const { username, email, phone, role_id, divisi_id } = req.body; // Hapus password dari sini
    const host = `${req.protocol}://${req.get('host')}`;

    // Cek apakah pengguna ada
    const user = await Users.findOne({
      where: { id },
    });

    if (!user) {
      return res.status(404).json({ 
        status: false, 
        message: "User not found" 
      });
    }

    // Periksa jika email yang ingin diperbarui sudah digunakan oleh pengguna lain
    if (email && email !== user.email) {
      const emailExist = await Users.findOne({
        where: { email },
      });
      if (emailExist) {
        return res.status(400).json({
          status: false,
          message: "Email is already in use by another account",
        });
      }
    }

    let avatarPath = '';
    if (req.file) { 
      avatarPath = `assets/${req.file.filename}`; 
    }

    // Update data pengguna (Tanpa Password)
    user.username = username || user.username;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.avatar = avatarPath || user.avatar;
    user.role_id = role_id || user.role_id;
    user.divisi_id = divisi_id || user.divisi_id;

    // Simpan perubahan ke database
    await user.save();

    res.status(200).json({
      status: true,
      message: "Profile updated successfully",
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        avatar: `${host}/${user.avatar}`,
        role_id: user.role_id,
        divisi_id: user.divisi_id,
      },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ 
      status: false, 
      message: "Failed to update profile" 
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { id } = req.params; // ID dari URL
    const { oldPassword, newPassword, confirmPassword } = req.body;

    // 1. Validasi Input
    if (!oldPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "Semua field password harus diisi"
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "Konfirmasi password baru tidak cocok"
      });
    }

    // 2. Cari User
    const user = await Users.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User tidak ditemukan"
      });
    }

    // 3. Verifikasi Password Lama
    const isPasswordValid = await argon2.verify(user.password, oldPassword);
    if (!isPasswordValid) {
      return res.status(400).json({
        status: false,
        message: "Password lama salah"
      });
    }

    // 4. Hash Password Baru & Simpan
    const hashedPassword = await argon2.hash(newPassword);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      status: true,
      message: "Password berhasil diperbarui"
    });

  } catch (error) {
    console.error("Error change password:", error);
    res.status(500).json({
      status: false,
      message: "Terjadi kesalahan pada server"
    });
  }
};

export const test = async (req, res) => {
  try {
  const timezone = [
    {
      zone_name: 'WIB',
      zone_code: 'Asia/Jakarta'
    },
    {
      zone_name: 'WITA',
      zone_code: 'Asia/Makassar'
    },
    {
      zone_name: 'WIT',
      zone_code: 'Asia/Jayapura'
    }
  ]
  const timeFormat = 'YYYY-MM-DD HH:mm:ss'; // Example format
  const currentTime = moment().tz(timezone[2].zone_code).format(timeFormat);

  res.status(200).send({
    timezone: timezone[2].zone_code,
    currentTime
  });

  } catch (error) {
    res.status(500).json({
      error: "Failed get user list",
    });
  }
}

import { QueryTypes } from "sequelize";
import db from "../../config/database.js";
import { createRewardQuery, deleteRewardQuery, getRewardById, getRewardList, updateRewardQuery } from "../rawQuery/rawQuery.js";

export const rewardList = async (req, res) => {
  try {
    const rewards = await db.query(
      getRewardList(),
      {
        type: QueryTypes.SELECT,
      }
    );

    return res.status(200).json({
      status: true,
      message: "Success get reward list",
      data: rewards,
    });

  } catch (error) {
    console.error("rewardList error:", error);
    return res.status(500).json({
      status: false,
      message: "Failed get reward list",
    });
  }
};


export const rewardById = async (req, res) => {
  try {
    const { id } = req.params;

    const reward = await db.query(
      getRewardById(),
      {
        replacements: { id },
        type: QueryTypes.SELECT,
      }
    );

    return res.status(200).json({
      status: true,
      message: "Success get reward",
      data: reward,
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Failed get reward",
    });
  }
};

export const createReward = async (req, res) => {
  try {
    const { id_reward, title, reward_name, voucher_code } = req.body;

    // 1. Cek apakah ID sudah ada
    const existing = await db.query(getRewardById(), {
      replacements: { id: id_reward },
      type: QueryTypes.SELECT,
    });

    if (existing.length > 0) {
      return res.status(400).json({
        status: false,
        message: `ID Reward ${id_reward} sudah ada. Gunakan ID lain atau update data yang lama.`
      });
    }

    // 2. Jika belum ada, baru insert
    await db.query(createRewardQuery(), {
      replacements: { id_reward, title, reward_name, voucher_code },
      type: QueryTypes.INSERT,
    });

    return res.status(201).json({
      status: true,
      message: "Success create reward",
    });

  } catch (error) {
    console.error("createReward error:", error);
    return res.status(500).json({ status: false, message: "Server error saat membuat reward" });
  }
};

export const updateReward = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil ID dari URL, misal: /update/1
    const { title, reward_name, voucher_code } = req.body;

    // 1. Cek dulu apakah ID tersebut ada di database
    const checkId = await db.query(getRewardById(), {
      replacements: { id },
      type: QueryTypes.SELECT,
    });

    if (checkId.length === 0) {
      return res.status(404).json({
        status: false,
        message: `Gagal Update. Reward dengan ID ${id} tidak ditemukan.`
      });
    }

    // 2. Jika ada, lakukan update
    await db.query(updateRewardQuery(), {
      replacements: { 
        id, 
        title, 
        reward_name, 
        voucher_code 
      },
      type: QueryTypes.UPDATE,
    });

    return res.status(200).json({
      status: true,
      message: `Success update reward untuk ID ${id}`,
    });

  } catch (error) {
    console.error("updateReward error:", error);
    return res.status(500).json({ 
      status: false, 
      message: "Terjadi kesalahan server saat update reward" 
    });
  }
};

export const deleteReward = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(deleteRewardQuery(), {
      replacements: { id },
      type: QueryTypes.DELETE,
    });

    return res.status(200).json({
      status: true,
      message: "Success delete reward",
    });
  } catch (error) {
    console.error("deleteReward error:", error);
    return res.status(500).json({ status: false, message: "Failed delete reward" });
  }
};

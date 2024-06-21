import { QueryTypes } from "sequelize";
import db from "../../config/database.js";
import { getRankListQuery } from "../rawQuery/rawQuery.js";

export const getRankList = async (req,res) => {
    try {
        // Query untuk menghitung total poin dan mendapatkan peringkat
        const findRankList = await db.query(getRankListQuery(),{ type: QueryTypes.SELECT })
        console.log("=========",findRankList)
        res.status(200).json({
            status: "failed updating task",
        });
    } catch (error) {
        console.log("========= 500",error.message)
        res.status(500).json({
            status: "failed get t=rank list",
        });
    }
}
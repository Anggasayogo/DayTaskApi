import { QueryTypes } from "sequelize";
import db from "../../config/database.mjs";
import { getRankListQuery } from "../rawQuery/rawQuery.mjs";

export const getRankList = async (req,res) => {
    try {
        const findRankList = await db.query(getRankListQuery(),{ type: QueryTypes.SELECT })
        res.status(200).json({
            status: "success",
            data: findRankList
        });
    } catch (error) {
        console.log("========= 500",error.message)
        res.status(500).json({
            status: "failed",
        });
    }
}
import { QueryTypes } from "sequelize";
import db from "../../config/database.js";
import { getRankListQuery } from "../rawQuery/rawQuery.js";

export const getRankList = async (req,res) => {
    try {
        const findRankList = await db.query(getRankListQuery(),{ type: QueryTypes.SELECT })
        res.status(200).json({
            status: "success",
            data: findRankList
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
        });
    }
}
import { QueryTypes } from "sequelize";
import db from "../../config/database.js";
import { getRankListQuery } from "../rawQuery/rawQuery.js";
import Point from '../models/Point.model.js';

export const getRankList = async (req,res) => {
    try {
        const findRankList = await db.query(getRankListQuery(),{ type: QueryTypes.SELECT })
        res.status(200).json({
            status: true,
            message: "Success get Rank List",
            data: findRankList
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Failed get Rank List"
        });
    }
}


export const getPointList = async (req,res) => {
    try {
        const findAllPoint = await Point.findAll();
        res.status(200).json({
            status: "success",
            data: findAllPoint
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
        });
    }
}
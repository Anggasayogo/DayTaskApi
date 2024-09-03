import Priority from "../models/Priority.model.js";

export const getPrioList = async (req,res) => {
    try {
        const findAllPrio = await Priority.findAll();
        res.status(200).json({
            status: true,
            message: "success",
            data: findAllPrio
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "failed",
            data: []
        });
    }
}
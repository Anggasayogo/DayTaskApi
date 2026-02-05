import {Router} from "express";
import {
    rewardList,
    rewardById,
    createReward,
    updateReward,
    deleteReward
} from '../../api/controller/RewardController.js'
const router = Router();

router.get('/list', rewardList)
router.get('/:id', rewardById)
router.post('/create', createReward);
router.put('/update/:id', updateReward);
router.delete('/delete/:id', deleteReward);

export default router
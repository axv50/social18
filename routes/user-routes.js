const router = require("express").Router();
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require("../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(removeUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;
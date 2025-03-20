import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    console.log("Request Body:", req.body);  // Add this line for debugging
    res.status(200).json({
        message: "ok"
    });
});


export { registerUser };

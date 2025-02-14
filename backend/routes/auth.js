const authController = require("../controllers/authController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

router.post("/refresh", authController.requestRefreshToken);
router.post("/logout", middlewareController.verifyToken, authController.userLogout);

//Register
/** POST Methods */
/**
 * @swagger
 * /v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user and return user data.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       500:
 *         description: Registration failed
 */
router.post("/register", authController.registerUser);

/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     summary: Login a user
 *     description: Login a user and return access and refresh tokens.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       404:
 *         description: Wrong username or password
 */
router.post("/login", authController.loginUser);

/**
 * @swagger
 * /v1/auth/verify-otp:
 *   post:
 *     summary: Verify OTP
 *     description: Verify the OTP sent to the user's email.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: OTP verification failed
 *       500:
 *         description: Internal server error
 */
router.post("/verify-otp", authController.verifyOtp);

router.post("/resend-otp", authController.resendOtp);

module.exports = router;
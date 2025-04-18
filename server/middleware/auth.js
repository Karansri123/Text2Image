import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  try {
    let token = req.headers.authorization || req.headers.token;

    // Check for Bearer token format
    if (token?.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized. Please log in." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({ success: false, message: "Invalid token. Please log in again." });
    }

    req.user = { id: decoded.id };
    next();

  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({ success: false, message: "Token verification failed." });
  }
};

export default userAuth;

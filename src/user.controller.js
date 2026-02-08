/**
 * User Controller
 * Handles user preferences for AI tour personalization
 */

export const createUser = async (req, res) => {
  try {
    const { name, language, interest } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "User name is required"
      });
    }

    const user = {
      id: Date.now(),
      name,
      language: language || "English",
      interest: interest || "general travel"
    };

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User creation failed"
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    // Dummy response (can connect DB later)
    res.status(200).json({
      success: true,
      data: {
        id: userId,
        name: "Guest User",
        language: "English",
        interest: "History & Culture"
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch user"
    });
  }
};

import { generateTourResponse } from "../services/ai.service.js";

/**
 * AI Personal Tour Guide Controller
 * Handles user travel questions
 */
export const aiTourGuideController = async (req, res) => {
  try {
    const {
      location,
      interest,
      language = "English",
      duration = "1 day",
      style = "friendly"
    } = req.body;

    // Validation
    if (!location || !interest) {
      return res.status(400).json({
        success: false,
        message: "Location and interest are required"
      });
    }

    // Call AI Service
    const aiResponse = await generateTourResponse({
      location,
      interest,
      language,
      duration,
      style
    });

    return res.status(200).json({
      success: true,
      data: aiResponse
    });

  } catch (error) {
    console.error("AI Controller Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "AI Tour Guide failed",
      error: error.message
    });
  }
};

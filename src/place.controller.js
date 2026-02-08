import { indiaPlaces } from "../data/indiaPlaces.js";

/**
 * Place Controller
 * Provides All-India travel information
 */

// Get all places
export const getAllPlaces = async (req, res) => {
  res.status(200).json({
    success: true,
    total: indiaPlaces.length,
    data: indiaPlaces
  });
};

// Filter by state
export const getPlacesByState = async (req, res) => {
  const { state } = req.params;

  const result = indiaPlaces.filter(
    place => place.state.toLowerCase() === state.toLowerCase()
  );

  res.status(200).json({
    success: true,
    data: result
  });
};

// Filter by category (Historical, Nature, etc.)
export const getPlacesByCategory = async (req, res) => {
  const { category } = req.params;

  const result = indiaPlaces.filter(
    place => place.category.toLowerCase() === category.toLowerCase()
  );

  res.status(200).json({
    success: true,
    data: result
  });
};

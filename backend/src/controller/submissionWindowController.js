import * as submissionWindowService from '../services/submissionWindowService.js';

export const getSubmissionWindow = async (req, res) => {
  try {
    const data = await submissionWindowService.getSubmissionWindow();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateSubmissionWindow = async (req, res) => {
  try {
    // Only admins can update submission window
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    if (!req.body) {
      return res.status(400).json({ error: "Request body required" });
    }

    const data = await submissionWindowService.updateSubmissionWindow(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
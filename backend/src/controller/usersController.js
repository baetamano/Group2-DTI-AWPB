import * as userService from '../services/usersService.js';

export const getUsers = async (req, res) => {
  try {
    // Only admins can get all users
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const data = await userService.getAllUsers();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    // Only admins can update users
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    if (!req.body) {
      return res.status(400).json({ error: "Request body required" });
    }

    const data = await userService.updateUser(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
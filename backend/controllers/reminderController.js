import Reminder from "../models/Reminder.js";

export const createReminder = async (req, res) => {
  try {
    const reminder = await Reminder.create(req.body);

    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getReminders = async (req, res) => {
  try {
    const { userId } = req.query;

    const reminders = await Reminder.find({
      userId,
    });

    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateReminder = async (req, res) => {
  try {
    const reminder =
      await Reminder.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.status(200).json(reminder);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteReminder = async (
  req,
  res
) => {
  try {
    await Reminder.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Reminder Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
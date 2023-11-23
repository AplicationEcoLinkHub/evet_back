const express = require('express');
const router = express.Router();
const Event = require('../models/evenement'); // Adjust the path based on your file structure

router.route('/add').post(async (req, res) => {
    try {
        const newEvent = new Event({
            title: req.body.title,
            time: req.body.time,
            date: req.body.date,
            description: req.body.description,
        });

        const savedEvent = await newEvent.save();

        res.status(200).json({
            message: 'Event is Added Successfully',
            event: savedEvent
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error adding event',
            error: error.message
        });
    }
});


router.route('/findByDate/:date').get(async (req, res) => {
    try {
        const date = req.params.date;

        // Assuming date is stored as a string in the 'date' field of the Event model
        const events = await Event.find({ date });

        res.status(200).json({
            message: 'Events retrieved successfully',
            events
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving events',
            error: error.message
        });
    }
});


router.route('/delete/:id').delete(async (req, res) => {
    try {
        const eventId = req.params.id;

        // Check if the event with the given ID exists
        const existingEvent = await Event.findById(eventId);
        if (!existingEvent) {
            return res.status(404).json({
                message: 'Event not found',
            });
        }

        // If the event exists, delete it
        await existingEvent.remove();

        res.status(200).json({
            message: 'Event deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting event',
            error: error.message,
        });
    }
});


module.exports = router;

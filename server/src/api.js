const express = require('express');
const morgan = require('morgan');

const router = express.Router();

// Add json and urlencoded middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(morgan('combined'));

module.exports = router;

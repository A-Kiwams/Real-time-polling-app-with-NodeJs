const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

// replace appId, key and secret with your pusher credentials
const pusher = new Pusher({
    appId: "***",
    key: "***",
    secret: "***",
    cluster: "eu",
    useTLS: true
  });

router.get('/', (req, res)=>{
    res.send('poll');
});

router.post('/', (req, res)=>{
    pusher.trigger('os-poll', 'os-vote', {
        points: 1,
        os: req.body.os
      });

      return res.jason({success: true, message: 'Thank you - Your vote count!'});
});

module.exports = router;
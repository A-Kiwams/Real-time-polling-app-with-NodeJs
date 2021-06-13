const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: "1218634",
    key: "e5a28983cb82992d6618",
    secret: "aebd8723a21ae37b7cd4",
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
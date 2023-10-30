var express = require("express");
var router = express.Router();
var AWS = require("aws-sdk");
var s3 = new AWS.S3()
var save_content = require("../save_text")


router.get("/", async function(req, res){
    let text;
    try {
        text = await s3.getObject({
            Bucket: "cyclic-outstanding-teal-gazelle-eu-west-3",
            Key: "text.json",
          }).promise()

        console.log(text)
        console.log(text.Body)
        return res.send(JSON.parse(text.Body))
    } catch (error) {
        return res.send(error)
    }

})


router.post("/", function(req, res){
    const { content } = req.body;
    save_content({content: content})
    res.status(200).json({result: "saved", statusCode: 200})
    res.end()
})


module.exports = router;
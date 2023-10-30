var express = require("express");
var router = express.Router();
var save_content = require("../save_text")


router.get("/", async function(req, res){
    // let text = await s3.getObject({
    //     Bucket: "cyclic-outstanding-teal-gazelle-eu-west-3",
    //     Key: "number.json",
    //   }).then(res => {
    //     console.log("from get ", res)
    //   }).catch(err => {
    //     console.log("from get err", err)
    //   })
    res.render("main")
})


router.post("/", function(req, res){
    const { content } = req.body;
    save_content({content: content})
    res.status(200).json({result: "saved", statusCode: 200})
    res.end()
})


module.exports = router;
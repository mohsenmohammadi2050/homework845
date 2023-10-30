var AWS = require("aws-sdk");
var s3 = new AWS.S3()


const save_content = async (content) => {
    const result = await s3.putObject({
        Body: JSON.stringify(content, null, 2),
        Bucket: "cyclic-outstanding-teal-gazelle-eu-west-3",
        Key: "text.json",
      }).promise()
    console.log("from save function ", result)
};


module.exports = save_content;
const AWS = require('aws-sdk');

const Bucket = process.env.BUCKET_NAME;
const ACL = 'public-read';

let s3;

const initS3Bucket = () => {
  s3 = new AWS.S3();
};

const upload = async (Key, Body) => s3.upload({
  Bucket, Key, Body, ACL,
}).promise().then((data) => data.Location);

module.exports = {
  initS3Bucket,
  upload,
};

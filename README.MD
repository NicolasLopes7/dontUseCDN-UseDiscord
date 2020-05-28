# Don't use CDN, use Discord

## What is that?
#### It's a free service to store your photos dynamically, instead of hosting on your server and spending more money. Basically this API has only one POST / sendFile route, send by Multipart the param file with a image, and the API will respond with a json:
```json
{
    "url": "link"
}
```
## How it works
#### Basically, I created a bot on the discord, which sends a message when the route is called, and fetches the url for this photo. At MulterConfig, we restrict the file specifications:
``` js
FileName: `$ {hash.toString ('hex')} - $ {file.originalname}`

fileSize: 10 * 1024 * 1024 (10 Mb)

allowedMimes = [
      'image / jpeg',
      'image / pjpeg',
      'image / png',
      'image / gif',
    ]
```
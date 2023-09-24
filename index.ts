import {Elysia} from 'elysia'
import {html} from '@elysiajs/html'

const app = new Elysia()
  .use(html())
  .get('/', ({html})=>html(BaseHtml))
  .listen(3001)
  
console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)

const BaseHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THE BETH STACK</title>
</head>
<body>I'm a html body</body>
</html>
`

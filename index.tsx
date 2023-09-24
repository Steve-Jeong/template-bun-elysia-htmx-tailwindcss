import {Elysia} from 'elysia'
import {html} from '@elysiajs/html'
import * as elements from "typed-html"

const app = new Elysia()
  .use(html())
  .get('/', ({html})=>
    html(
      <BaseHtml>
        <body>
          <h1>Hello World</h1>
        </body>
      </BaseHtml>
    ))  
  .listen(3001)
  
console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
)

const BaseHtml = ({children}:elements.Children) =>`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>THE BETH STACK</title>
  <script src="https://unpkg.com/htmx.org@1.9.6" integrity="sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni" crossorigin="anonymous"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
${children}
</html>
`
import {Elysia} from 'elysia'
import {html} from '@elysiajs/html'
import * as elements from "typed-html"

const app = new Elysia()
  .use(html())
  .get('/', ({html})=>html(
    <BaseHtml>
      <body class="flex w-full h-screen justify-center items-center">
        <button class="rounded-sm outline outline-offset-4 outline-2" hx-post="/clicked" hx-swap="outerHTML">
          Click Me
        </button>
      </body>
    </BaseHtml>
  ))
  .post("/clicked", ()=> <div>I'm from the server!</div>)
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
  <script src="https://unpkg.com/htmx.org@1.9.6"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
${children}
</html>
`

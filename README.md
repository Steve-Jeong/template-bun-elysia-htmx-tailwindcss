# The BETH Stack: Build Hypermedia-Driven Web Apps with Great DX and Performance
https://www.youtube.com/watch?v=cpzowDDJj24&t=345s

1. bun init
2. bun add elysia
3. Make index.ts and run bun run --watch index.ts
4. Add Elysis HTML plugin : bun add @elysiajs/html
5. Import html from '@elysiajs/html' and add .use(html()) under Elysia object
6. Add BastHtml literal string.
7. To handle JSX, install typed-html by 'bun add -d typed-html'
8. Modify tsconfig.json
   ```tsconfig.json
     "jsx": "react",
     "jsxFactory": "elements.createElement",
   ```
9. Rename index.ts to index.tsx. 
10. import * as elements from "typed-html"
11. Rerun bun run --watch index.tsx
12. Change BaseHtml to the anonymous function that accept children and return JSX string.
13. Change index.js to feed children to BaseHtml


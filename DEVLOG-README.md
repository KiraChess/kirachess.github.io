# Writing a devblog post

The devblog is static and works on GitHub Pages without a build step. Edit `posts.js` to add an entry inside the array, then commit and push it along with the site files. Once GitHub Pages publishes the change, the post appears in the devblog section of the home page automatically, newest first. Clicking its title opens the full post. No separate post page needs to be created.

For example, replace the empty array with your own content in this format:

```js
window.kiraPosts = [
  {
    slug: "my-first-update",
    date: "2026-01-25",
    title: "My first update",
    body: [
      "The first paragraph goes here.",
      "A second paragraph goes here."
    ]
  }
];
```

For more posts, add another object inside the array, separated by a comma. Use a unique, short slug with lowercase letters, numbers and hyphens; the slug forms the shareable URL (`devblog.html?post=my-first-update`). Use dates in `YYYY-MM-DD` format. Each string in `body` becomes one paragraph, and posts appear newest first. Escape double quotes inside a string as `\"` and backslashes as `\\`. Content is plain text; HTML and Markdown are displayed as text.

Keep `index.html`, `devblog.html`, `posts.js`, and `about.html` together when uploading the site. You can preview the blog locally by opening `devblog.html` in a browser; JavaScript must be enabled. Site controls and dates follow the chosen language. Posts appear as written unless you provide translations.

## Publishing on GitHub Pages

Put the site files in the root of your repository or in its `docs/` folder. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select the branch and the folder (`/ (root)` or `/docs`) containing the site. Commit and push the files to that branch. Future edits to `posts.js` are published the same way.

## Translating a post

Optionally add a `translations` object to a post, keyed by `ja`, `zh-Hans`, `es`, `de`, or `pl`. Each translation can contain a `title` and a `body` array with one translated paragraph for each English paragraph. Missing translations fall back to the English title or paragraph. The v1.0.1 hotfix post in `posts.js` is a complete example.

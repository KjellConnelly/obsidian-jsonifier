## Obsidian JSONifier

All this plugin does is convert highlighted text via `JSON.stringify(text)` or `JSON.parse(text)`.

### Example

I'm using **Obsidian.md** to write markdown, but I'm a developer who needs to send my markdown as a string using JSON.

```markdown
# My Website

Hello and welcome to *my website*. It's very cool. Here are 3 things you should know about me.

1. I like cats.
2. I like dogs.
3. ???
4. Profit!
```

So now we need to convert this into a JSON string, using this plugin. I highlight it and using the JSON.stringify() function. The result is copied to your clipboard, so paste it wherever. Now what will that string look like?

```json
"# My Website\n\nHello and welcome to *my website*. It's very cool. Here are 3 things you should know about me.\n\n1. I like cats.\n2. I like dogs.\n3. ???\n4. Profit!"
```

Ok cool! But wait... I'm coming back to this project a week later and I want to edit my markdown file... but all I saved was my JSON string! Oh no!

![alt text](grinch.gif)

Now what? Well, highlight the JSON string from above and use the JSON.parse() function. Now the result is copied to your clipboard as the original markdown. So paste it and edit it again.


### Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments.
- Publish the release.

### Adding your plugin to the community plugin list

- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

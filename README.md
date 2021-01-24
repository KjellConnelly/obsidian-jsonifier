## Obsidian JSONifier

All this plugin does is convert highlighted text via `JSON.stringify(text)` or `JSON.parse(text)`.

## How to use

1. Highlight text you can to convert
2. Use hotkey to parse selection (default `Cmd+Alt+[`) or stringify selection (default `Cmd+Alt+[`). You can update hotkeys if you'd like.
3. Paste wherever you want. (Note, selection must be a valid JSON string to parse it. So if you're copying a JSON string, make sure you select the quotes around it as well).

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

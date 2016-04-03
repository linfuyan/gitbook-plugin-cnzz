# CNZZ Analytics tracking for GitBook

A gitbook plugin to add CNZZ Analytics for your book

### Install Plugin

Install with this command:

```shell
npm install gitbook-plugin-cnzz
```

or add this to your `book.json` config:

```json
{
    "plugin": ["cnzz"]
}
```

and install it using:

```shell
gitbook install ./
```

However, this plugin have not published to npmjs.com. 

Now you can download all the source, and manually put it into the 'node_modules' directory in your book's repository. 

### Use Plugin

First you should have a CNZZ site id, you can find it in the url looks like `http://tongji.cnzz.com/main.php?c=site&a=getcode&siteid=1256685222`.

Then add your token to `book.json` config:

```json
{
    "plugin": ["cnzz"],
    "pluginsConfig": {
        "cnzz": {
        	"visible": true,
        	"style": "0",
            "siteid": "YOUR SITE ID"
        }
    }
}
```

Finally build your book with gitbook again and you'll get what you want.

### History

- Ver 0.0.1 init

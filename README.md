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

### Use Plugin

First you should have a CNZZ site id, you can find it in the url looks like `http://tongji.cnzz.com/main.php?c=site&a=getcode&siteid=1256685222`.

Then add your token to `book.json` config:

```json
{
    "plugin": ["cnzz"],
    "pluginsConfig": {
        "cnzz": {
        	"style": "0"
            "siteid": "YOUR SITE ID"
        }
    }
}
```

Finally build your book with gitbook again and you'll get what you want.

### History

- Ver 0.0.1 init

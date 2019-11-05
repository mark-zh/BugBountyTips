# One line
- One line `crt.sh` subdomain discover code
```
curl -fsSL -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0" "https://crt.sh/?CN=%25.github.com" | sort -n | uniq -c | grep -o -P '(?<=\<TD\>).*(?=\<\/TD\>)' | sed -e '/white-space:normal/d'
```
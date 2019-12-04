# One line
- One line `crt.sh` subdomain discover code

```
curl -fsSL -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0" "https://crt.sh/?CN=%25.github.com" | sort -n | uniq -c | grep -o -P '(?<=\<TD\>).*(?=\<\/TD\>)' | sed -e '/white-space:normal/d'
```

- One line `CT log` subdomain discover code

```
curl -i -L -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0' https://ctsearch.entrust.com/api/v1/certificates\?fields\=subjectDN\&domain\=github.com\&includeExpired\=true\&exactMatch\=false\&limit\=5000 | sort -u | grep -o -P '(?<=u003d).*(?=,o\\)'
```

- Subdomain take over with amass+subjack

```
amass enum -norecursive -noalts -d {target_domain} > {target_domain}.txt ; subjack -w {target_domain}.txt -t 100 -timeout 30 -ssl -c ~/subjack/fingerprints.json -v 3
```

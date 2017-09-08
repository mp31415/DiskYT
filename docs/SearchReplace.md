## Search/Replace

**Search/Replace** functionality is available in the **Edit** mode and allows to modify 
names of all the Disks and songs on the current page in one go.

(As the top page **My Stations** does not contain any Disks, the **Search/Replace** button is not available
for the page).

The basic functionality is exactly the same as in any other simple text editor. 
The only twist is support of regular expressions in the **search/replace** fields.

The **search/replace** fields are eventually fed into JavaScript **String.replace** function. 
It means if the search field follows JavaScript **regex** format, 
it will be happily applied by DiskYT. 
For example to prepend all lower case English letters in all Disk/Song names 
with the underscore symbol, put the following into **search/replace** fields:

- Search: **/[a-z]/g**
- Replace: **_$&**

See more **regex** details in the 
[JavaScript API documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).


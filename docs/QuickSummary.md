## Quick summary

Note: song and video terms are used interchangeably in this document. 
They just mean an item in a playlist.

**Disk** - a playlist

**Folder** - a collection of Disks and/or other Folders

**Station** - a top level Folder

**Play mode** - a mode to listen to music/watch videos in playlists in a single Disk or a Folder

**Edit mode** - a mode to modify Disk/Folder content (the operations include 
copy, cut, paste, merge, remove, search/replace, script transformation, name changing, 
start/end time changing, etc)

**All Stations** - displays Stations/Folders/Disks from all users (that were made publicly available)

**My Stations** - Stations/Folders/Disks created by the currently logged in user. 
The Stations may be publicly visible, unlisted or private. 
Stations/Folders/Disks/Songs may be made temporarily hidden in the **Play** mode.
	
**Search/Replace** - applies **search/replace** to the names of Stations/Folders/Disks/Songs 
across the current page. (As an advanced feature regular expressions are supported too. 
To activate them the **search/replace** fields 
must conform to JavaScript **String.replace** signature).

**JavaScript Transform** - allows either to manually modify current page data in JSON 
format or provide a custom JavaScript snippet to modify the content of the current page.
It's also possible to create a whole multi-page structure starting from the current page.
	
**Station name** - a Station name in the **Edit** mode may include two additional parts separated 
by the vertical bars ('|'): `keywords` and `slug`. 
The `keywords` are used in search across all stations. 
The `slug` is displayed as a part of the Station URL: `page/<page id>/<page slug>` to add 
a human readable element to the page URL. If the `slug` is not provided, 
it is created automatically from the Station name.
	
**Folder name** - Folder name has the same structure as a Station name, 
but the `keywords` if provided are ignored. To provide only the Folder name and its `slug` just 
use two vertical bars between them: `name||slug`.
	
**Clipboard** - when a Station/Folder/Disk is cut or a Disk is copied in the **Edit** mode, 
the corresponding element appears at the top of a page in the **Clipboard**. 
To move the element from the **Clipboard** 
to another page, go to a destination page and click on the item in the **Clipboard**.
	
**Sync** - an action available for the Disks in the **Edit** mode. It opens a page, where 
the Disk content may be copied into YouTube channel or merged with the existing YouTube playlist.
Another way to get to the same page is Control+click on a Disk in the **Play** mode.

This action also works in reverse, when you merge a YouTube playlist 
with the existing DiskYT playlist.
	
**Disk cover** - any video from a Disk may be used as a thumbnail for the Disk (Disk cover). 
The video must be selected from the Disk's list of videos 
in the **Edit** mode using the picture icon 
( ![link icon](img/picture-icon.png) ).

**Station/Folder cover** - Stations/Folders do not display their list of videos 
to choose cover from, however behind the scenes they have such a list with a single item. 
To provide this thumbnail item simply drag and drop a video or a playlist link 
from YouTube to the Station/Folder (either in the **Edit** or in the **Play** mode).
	
**Video start/end time** - start/end time may be provided in the **Edit** mode by clicking 
on the song and editing its **start/end** values. The values must be in YouTube time format 
(`00:00:00`, `hours:minutes:seconds`).
Hours and minutes are optional. Start or end time may be omitted. 
The default value for the start time is zero and omitted end time means the end of the given video.

**Song enabled/disabled** - a disabled song does not appear in the playlist in the **Play** mode, 
but can be easily restored with a single click. 
To toggle the song enabled/disabled state Control+click on the song
in the **Edit** mode and save the changes.
	
**Song renaming** - to change a Song name, in the **Edit** mode 
select its Disk and click on the Song 
in the playlist, rename it and save the changes

**Station/Folder/Disk enabled/disabled** - a disabled element is not visible in the **Play** mode. 
To toggle the **enabled/disabled** state, toggle this icon in the **Edit** mode: 
( ![link icon](img/enabled-icon.png) ).

**Station/Folder/Disk renaming** - in the **Edit** mode click on the Station/Folder/Disk name, 
rename it and save the changes.

**Unsaved changes** - in the **Edit** mode all changes initially are saved in the browser 
local storage and are sent to a server only when the **Save** button on the left is clicked. 
If the unsaved changes must be undone, 
clicking on the **Discard Changes** button on the left will 
clear the local storage and reload the page with the latest data from the server.
	
**Hide/Show Images** - sometimes when a page has too many disks to fit in the viewable area 
of the browser, it may be more convenient in the **Edit** mode to hide Station/Folder/Disk thumbnails
to fit more disks into viewable area. 
This way moving songs from one Disk to another becomes more manageable.
	
**Full screen mode** - to open the current video in the full screen mode double click on the embedded 
YouTube player in the **Play** mode (when the video is playing).

**Disk Link** - a read-only copy of another (linked) Disk. 
It always presents the current content of the linked Disk.

**YouTube playlist link** - a DiskYT Disk displaying a periodically updated copy 
of a YouTube playlist (50 latest items from the YouTube playlist). 
Many regular Disk operations are not available for such Links.
Still the items may be removed from the list if needed.



// This is an example JavaScript to demonstrate how JavaScript Transform works in DiskYT.
// This script sorts all songs/videos in every disk on a page by name.
// This may be just a starting point for your own transformations.
//
// A typical workflow may look like this:
// - create a new folder or a station in DiskYT
// - drag some long playlist into this new folder/station (in edit mode)
// - display JavaScript Transform page (hidden behind ellipsis)
// - paste the script into 'function transform' panel (replacing default 'return disks;' line)
// - run the script, apply the result, save the changes
//
// The end result must be the same collection of Disks(playlists) but with songs/videos sorted alphabetically by name.

/*
disks array example:

[
	{"id":"Ggoz8uZuYeXV","name":"My Favorite Songs","type":"disk","cover":"ktvTqknDobU",
	
	"songs":[
	
	{"id":"satYTLNtxo22","name":"Imagine Dragons - Radioactive","video_id":"ktvTqknDobU"},	
	{"id":"n4GVNPU6qiYc","name":"Numb (Official Video) - Linkin Park","video_id":"kXYiU_JCYtU"},
	{"id":"WZyQyXrDBsHb","name":"System Of A Down - Chop Suey!","video_id":"CSvFpBOe8eY"},
	...
	]
];
*/

function sortByName(d1, d2) {
	return d1.name.localeCompare(d2.name);
}


function sortByNameDesc(d1, d2) {
	return (-sortByName(d1, d2));
}

// Sort all playlists by video name.
function run(disks) {
	// sort song names in each disk
	disks.forEach(function(d) {
		// use sortByNameDesc instead of sortByName to sort in descending order
		d.songs.sort(sortByName);
	});
	
	return disks;
}

return run(disks);
// This is an example JavaScript to demonstrate how JavaScript Transform works in DiskYT.
// This script sorts all songs/videos in every disk on a page by their publishing date (from oldest to newest).
// This may be just a starting point for your own transformations.
//
// A typical workflow may look like this:
// - create a new folder or a station in DiskYT
// - drag some long playlist into this new folder/station (in edit mode)
// - display JavaScript Transform page (hidden behind ellipsis)
// - paste the script into 'function transform' panel (replacing default 'return disks;' line)
// - run the script, apply the result, save the changes
//
// The end result must be the same collection of Disks(playlists) but with songs/videos sorted by publishing time.

/*
disks array example:

[
	{"id":"Ggoz8uZuYeXV","name":"My Favorite Songs","type":"disk","cover":"ktvTqknDobU",
	
	"songs":[
	
	{"id":"satYTLNtxo22","name":"Imagine Dragons - Radioactive","video_id":"ktvTqknDobU", publishedAt: 1510091153009},	
	{"id":"n4GVNPU6qiYc","name":"Numb (Official Video) - Linkin Park","video_id":"kXYiU_JCYtU" publishedAt: 1510091152000},
	{"id":"WZyQyXrDBsHb","name":"System Of A Down - Chop Suey!","video_id":"CSvFpBOe8eY" publishedAt: 1510091151012},
	...
	]
];
*/

function sortByPublishedAt(d1, d2) {
	return d1.publishedAt - d2.publishedAt;
}


function sortByPublishedAtDesc(d1, d2) {
	return (-sortByPublishedAt(d1, d2));
}

// Sort all playlists by publishedAt property.
function run(disks) {
	// sort songs in each disk
	disks.forEach(function(d) {
		// use sortByPublishedAtDesc instead of sortByPublishedAt to sort in descending order
		// (from newest to oldest).
		d.songs.sort(sortByPublishedAt);
	});
	
	return disks;
}

return run(disks);

// This is an example JavaScript to demonstrate how JavaScript Transform works in DiskYT.
// 
// There are multiple assumptions in the script below, so don't run it blindly.
// It's provided just as a starting point.
//
// A typical workflow may look like this:
// - create a new folder or a station in DiskYT
// - drag some long playlist into this new folder/station (in edit mode)
// - display JavaScript Transform page (hidden behind ellipsis)
// - paste the script into 'function transform' panel
// - run the script, apply the result, save the changes
//
// The end result must be a collection of Disks(playlists) created from a single original playlist
// split by song's year. So songs with publishedAt property ~2017 go to "2017" playlist, 
// ~2016 go to "2016" and so on. If there is an issue with the publishedAt property songs go into "Misc"
// playlist.
//
// Again, the assumption is that there is only one playlist on a page initially.

// Split a single playlist into a collection of disks - one playlist per year.
function run(disks) {
	if (disks.length !== 1) {
		return disks;
	}

	let disk0 = disks[0];

	let newDisks = [];

	let diskMisc = {
		name: "Misc",
		songs: []
	};

	let nameToDisk = {"Misc": diskMisc};

	// create a new disk for each year from the playlist
	disk0.songs.forEach(function(song) {
		let date = new Date(song.publishedAt);
		let diskName;
		if (isNaN(date)) {
			diskName = "Misc";
		} else {
			diskName = date.getFullYear().toString();
		}
		let disk = nameToDisk[diskName];
		if (!disk) {
			disk = {
				name: diskName,
				songs: []
			};
			nameToDisk[diskName] = disk;
			newDisks.push(disk);
		}
		disk.songs.push(song);
	});

	// sort disks by name	
	newDisks.sort();

	return newDisks;
}

return run(disks); 

// This is an example JavaScript to demonstrate how JavaScript Transform works in DiskYT.
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
// The end result must be a collection of Disks(playlists) created from a single original playlist.

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

// Split a single disk into a collection of disks based on the first letter
// of the song name.
// Start a new disk everytime when the first letter changes
// Disks with less than 5 songs are merged together with the preceding disks.
function splitByFirstChar(d) {
	if (d.songs.length < 10) {
		return [d];
	}
	let arr = [];
	let prevCh = null;
	let ch;
	let disk = null;
	// split by first letter
	d.songs.forEach(function(song) {
		ch = song.name[0];
		if (ch !== prevCh) {
			disk = {
				name: ch,
				songs: []
			};
			arr.push(disk);
			prevCh = ch;
		}
		disk.songs.push(song);
	});
	
	// combine disks with a few songs together
	let arr2 = [];
	let currentDisk = null;
	arr.forEach(function(newDisk) {
		if (!currentDisk) {
			currentDisk = newDisk;
			arr2.push(currentDisk);
		} else if (newDisk.songs.length<5) {
			currentDisk.songs = currentDisk.songs.concat(newDisk.songs);
		} else {
			// check if previous one (the first one) has more than 5
			if (currentDisk.songs.length<5) {
				arr2.pop();
				newDisk.songs = currentDisk.songs.concat(newDisk.songs);
			}
			currentDisk = newDisk;
			arr2.push(currentDisk);
		}
	});
	return arr2;
}

// Split a single playlist into a collection of disks.
// The assumption is that each song name is in the following format:
// artist - song
// Each disk is then named by artist name and contains all of the songs
// for that artist from the playlist.
// If there are less than 3 songs per artist or there is no artist name
// detected the tracks are added first to the catch all disk (diskMisc).
// This catch all disk is further split by first letter of the song
// (so the disks are named A, B, etc.). Short disks are combined together.
// All disks and songs in disks are sorted alphabetically.
function run(disks) {
	let disk0 = disks[0];
	
	let newDisks = [];
	
	let diskMisc = {
		name: "Misc",
		songs: []
	};
	
	let nameToDisk = {"Misc": diskMisc};
	
	// create a new disk for each unique artist name from the playlist
	// (split song name by " - " to get the artist name).
	// Add song to diskMisc if there is no dash in the song name.
	disk0.songs.forEach(function(song) {
		let name = song.name;
		let parts = name.split(" - ");
		let diskName;
		if (parts.length > 1) {
			diskName = parts[0];
		} else {
			diskName = "Misc";
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
	
	// All disks with less than two songs merge into Misc ...
	newDisks.forEach(function(d) {
		if (d.songs.length <= 2) {
			diskMisc.songs = diskMisc.songs.concat(d.songs);
			d.removed = true;
		}
	});
	// ... and remove	
	newDisks = newDisks.filter(function(d) { return !d.removed; });
	
	// sort song names in each disk
	newDisks.forEach(function(d) {
		d.songs.sort(sortByName);
	});
	// sort song names in diskMisc too
	diskMisc.songs.sort(sortByName);
	
	// sort disks by name	
	newDisks.sort(sortByName);
	
	// split diskMisc into more disks
	let disksAZ = splitByFirstChar(diskMisc);
	
	return newDisks.concat(disksAZ);
}

return run(disks);

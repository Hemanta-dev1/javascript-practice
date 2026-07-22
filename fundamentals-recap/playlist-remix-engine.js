const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const flattened = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      flattened.push({
        ...playlists[i][j],
        source: [i, j],
      });
    }
  }

  return flattened;
}

function scoreTracks(tracks) {
  return tracks.map((track) => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120),
  }));
}

function dedupeTracks(tracks) {
  const seen = new Set();

  return tracks.filter((track) => {
    if (seen.has(track.trackId)) {
      return false;
    }

    seen.add(track.trackId);
    return true;
  });
}

function enforceArtistQuota(tracks, maxPerArtist) {
  const artistCount = {};

  return tracks.filter((track) => {
    if (!artistCount[track.artist]) {
      artistCount[track.artist] = 0;
    }

    if (artistCount[track.artist] < maxPerArtist) {
      artistCount[track.artist]++;
      return true;
    }

    return false;
  });
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId,
  }));
}

function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const limited = enforceArtistQuota(deduped, maxPerArtist);

  return buildSchedule(limited);
}

console.log("Flattened Playlists:");
console.log(flattenPlaylists(playlists));

console.log("\nScored Tracks:");
console.log(scoreTracks(flattenPlaylists(playlists)));

console.log("\nDeduplicated Tracks:");
console.log(dedupeTracks(scoreTracks(flattenPlaylists(playlists))));

console.log("\nArtist Quota (1 song per artist):");
console.log(
  enforceArtistQuota(dedupeTracks(scoreTracks(flattenPlaylists(playlists))), 1),
);

console.log("\nFinal Schedule:");
console.log(remixPlaylist(playlists, 1));

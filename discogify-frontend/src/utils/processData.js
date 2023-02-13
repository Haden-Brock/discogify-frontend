function buildDiscogsReleasePageUrl (release) { 
  return `https://www.discogs.com/release/${release.basic_information.id}`; 
}

export { buildDiscogsReleasePageUrl };
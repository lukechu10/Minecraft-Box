var generateCmd = async(options={}) => {

}

var updateVersionsListAPI = () => {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://launchermeta.mojang.com/mc/game/version_manifest.json",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    versionList.set(response);
  });
}

var getVersionInfo  = async(version) => {
  if (this.versionsInfos[version])
    return this.versionsInfos[version]
  let versionsList = await AssetsDownload.getVersionsList()
  const versionInfos = versionsList.versions.find(({id}) => id === version)
  const url = versionInfos['url']
  let path = this.path + '/versions/' + version + '/' + version + '.json'
  let exists = fs.existsSync(path)
  if (!exists) {
    await writeToFile(path, url)
  }
  return this.versionsInfos[version] = JSON.parse(await fs.readFileSync(path))
}

updateVersionsListAPI();

const REGEX_TV = /GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML|SMART\-TV|POV_TV|HbbTV|InettvBrowser|\(DTV\)|Opera TV|Viera|GTV100|Xbox|PLAYSTATION|Wii/

function isTV (a) {
  return REGEX_TV.test(a)
}

function isIos (a) {
  return /iPad|iPhone|iPod/.test(a)
}

function isAndroid (a) {
  return /android/i.test(a)
}

function isWindows (a) {
  return /Windows/.test(a)
}

function isMacOS (a) {
  return /Mac OS X/.test(a)
}

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36'

function extractDevices (ctx, userAgent = DEFAULT_USER_AGENT) {
  let tv = null
  let ios = null
  let android = null
  let windows = false
  let macOS = true

    tv = isTV(userAgent)
    ios = isIos(userAgent)
    android = isAndroid(userAgent)
  
  windows = isWindows(userAgent)
  macOS = isMacOS(userAgent)

  return { tv, ios, android, windows, macOS }
}

export default async function (ctx, inject) {
  let userAgent = ''
  if (typeof ctx.req !== 'undefined') {
    userAgent = ctx.req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent
  } else {
    <% if (options.defaultUserAgent) { %>
      userAgent = '<%= options.defaultUserAgent %>'
    <% } else { %>
      userAgent = DEFAULT_USER_AGENT
    <% } %>
  }

  const { tv, ios, android, windows, macOS } = extractDevices(ctx, userAgent)

  ctx.isTV = tv
  ctx.isIos = ios
  ctx.isAndroid = android
  ctx.isWindows = windows
  ctx.isMacOS = macOS
  inject('device', {
    <% if (options.test) { %>
    extractDevices,
    <% } %>
    isTV: tv,
    isIos: ios,
    isAndroid: android,
    isWindows: windows,
    isMacOS: macOS
  })
}

function getBrowserName() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('Chrome') !== -1) {
    return 'Chrome';
  } else if (userAgent.indexOf('Firefox') !== -1) {
    return 'Firefox';
  } else if (userAgent.indexOf('Safari') !== -1) {
    return 'Safari';
  } else if (userAgent.indexOf('Opera') !== -1) {
    return 'Opera';
  } else if (userAgent.indexOf('MSIE') !== -1) {
    return 'Internet Explorer';
  } else {
    return 'Unknown';
  }
}

function getBrowserVersion() {
  const userAgent = navigator.userAgent;
  const match = userAgent.match(/Chrome\/(\d+\.\d+)/) ||
                userAgent.match(/Firefox\/(\d+\.\d+)/) ||
                userAgent.match(/Safari\/(\d+\.\d+)/) ||
                userAgent.match(/Opera\/(\d+\.\d+)/) ||
                userAgent.match(/MSIE (\d+\.\d+)/);
  return match ? match[1] : 'Unknown';
}

function getOs() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('Windows') !== -1) {
    return 'Windows';
  } else if (userAgent.indexOf('Macintosh') !== -1) {
    return 'Mac OS';
  } else if (userAgent.indexOf('Linux') !== -1) {
    return 'Linux';
  } else if (userAgent.indexOf('Android') !== -1) {
    return 'Android';
  } else if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) {
    return 'iOS';
  } else {
    return 'Unknown';
  }
}

function getOsVersion() {
  const userAgent = navigator.userAgent;

  // Windows
  if (userAgent.indexOf("Windows") !== -1) {
    const match = userAgent.match(/Windows NT (\d+\.\d+)/);
    if (match) {
      const version = match[1];
      if (version.startsWith('10.')) {
        // Check for Windows 11 specific indicators (e.g., "Windows NT 10.0; Win64; x64")
        if (userAgent.indexOf('Windows NT 10.0; Win64; x64') !== -1) {
          return 'Windows 11';
        } else {
          return 'Windows 10';
        }
      } else {
        return 'Windows ' + version;
      }
    } else {
      return 'Unknown Windows';
    }
  }

  // macOS
  if (userAgent.indexOf("Macintosh") !== -1) {
    const match = userAgent.match(/Mac OS X (\d+_\d+)/);
    return match ? match[1].replace("_", ".") : "Unknown";
  }

  // Linux
  if (userAgent.indexOf("Linux") !== -1) {
    // Linux versioning is more complex, and extracting the exact version can be challenging
    return "Linux";
  }

  // Android
  if (userAgent.indexOf("Android") !== -1) {
    const match = userAgent.match(/Android (\d+\.\d+)/);
    return match ? match[1] : "Unknown";
  }

  // iOS
  if (userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1) {
    const match = userAgent.match(/OS (\d+)_(\d+)_(\d+)/);
    return match ? `${match[1]}.${match[2]}.${match[3]}` : "Unknown";
  }

  return "Unknown";
}
console.log(getOsVersion());

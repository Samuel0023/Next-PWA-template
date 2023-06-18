import { dirname, join } from 'path'
import withPWAInit from 'next-pwa'

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: 'public',

  buildExcludes: ['app-build-manifest.json']
})

const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve('next-pwa')
  const packageDirectory = dirname(packagePath)
  const registerJs = join(packageDirectory, 'register.js')

  return entry().then((entries) => {
    if (entries['main-app'] && !entries['main-app'].includes(registerJs)) {
      if (Array.isArray(entries['main-app'])) {
        entries['main-app'].unshift(registerJs)
      } else if (typeof entries['main-app'] === 'string') {
        entries['main-app'] = [registerJs, entries['main-app']]
      }
    }
    return entries
  })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    const entry = generateAppDirEntry(config.entry)
    config.entry = () => entry

    return config
  }
}

export default withPWA(nextConfig)

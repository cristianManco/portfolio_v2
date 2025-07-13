declare module 'next-pwa' {
  import { NextConfig } from 'next'

  interface PWAOptions {
    dest: string
    register?: boolean
    skipWaiting?: boolean
    disable?: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    runtimeCaching?: any
    buildExcludes?: string[]
    fallbacks?: Record<string, string>
    publicExcludes?: string[]
    importScripts?: string[]
  }

  export default function withPWA(options: PWAOptions): (nextConfig: NextConfig) => NextConfig
}


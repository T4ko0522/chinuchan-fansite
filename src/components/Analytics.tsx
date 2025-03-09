"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

// Google Analytics の gtag 関数の型定義
declare global {
  interface Window {
    gtag: (command: "config" | "event" | "set", targetId: string, config?: Record<string, any>) => void
    dataLayer: any[]
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}


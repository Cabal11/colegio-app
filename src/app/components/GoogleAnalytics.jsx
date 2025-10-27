"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "../lib/gtag";

export default function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return null;
}

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "./ui/icons";

type OS = "linux" | "windows" | "mac" | "unknown";

export default function DownloadButton() {
  const [os, setOS] = useState<OS>("unknown");

  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    if (platform.includes("win")) {
      setOS("windows");
    } else if (platform.includes("mac")) {
      setOS("mac");
    } else if (platform.includes("linux")) {
      setOS("linux");
    } else {
      setOS("unknown");
    }
  }, []);

  const osLabels: Record<OS, string> = {
    windows: "Download for Windows",
    mac: "Download for macOS",
    linux: "Download for Linux",
    unknown: "Download",
  };

  const osIcons: Record<OS, React.JSX.Element | null> = {
    windows: <Icons.windows />,
    mac: <Icons.mac />,
    linux: <Icons.linux />,
    unknown: null,
  };

  return (
    <Button className="idle-button hover:opacity-80">
      {osIcons[os]}
      {osLabels[os]}
    </Button>
  );
}

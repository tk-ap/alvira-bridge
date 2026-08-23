"use client";

import { useEffect, useState } from "react";

type Profile = { id: string; topic: string; offering: string; tier: string; updated_at: string };

export function BridgeConnection() {
  const [connected, setConnected] = useState<boolean | null>(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch("/api/context", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) return null;
        return response.json() as Promise<{ connected: boolean; profiles: Profile[] }>;
      })
      .then((data) => {
        setConnected(data?.connected ?? false);
        setProfiles(data?.profiles ?? []);
      })
      .catch(() => setConnected(false));
  }, []);

  if (connected === null) return <div className="connection-card">Checking ALVIRA connection…</div>;

  if (!connected) {
    return (
      <div className="connection-card">
        <div><span className="status-dot" />Bridge is ready to connect to your ALVIRA Profile.</div>
        <a className="button primary" href="/api/auth/start">Connect ALVIRA</a>
      </div>
    );
  }

  return (
    <div className="connection-card connected">
      <div><span className="status-dot live" />Connected to ALVIRA · {profiles.length} profile{profiles.length === 1 ? "" : "s"} available</div>
      <a className="button primary" href="#mcp">View MCP access</a>
    </div>
  );
}

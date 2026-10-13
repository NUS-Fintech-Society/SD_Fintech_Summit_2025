import { panelsMockData } from "@/components/panels/panelsData";
import PanelList from "@/components/panels/PanelList";

export default async function Page() {
  const panels = await getPanelsAsync(); // all panels (single-day)

  return (
    <div className="bg-custom-background min-h-screen p-8">
      {/* Title */}
      <h1 className="text-2xl text-center text-white font-bold mb-8">
        <div className="[text-shadow:_4px_3px_0px_#000000] text-5xl">
          {getPanelDayString()}
        </div>
      </h1>

      {/* Panels Section */}
      <h2 className="text-xl text-center text-white font-semibold mb-4">
        <div className="[text-shadow:_4px_3px_0px_#000000] text-3xl">
          {"PANEL DISCUSSION"}
        </div>
      </h2>

      <PanelList panels={panels} />
    </div>
  );
}

function getPanelDayString(): string {
  // change this to the actual date of the panel day
  return "9 Jan 2026";
}

async function getPanelsAsync() {
  // If panelsMockData is keyed by day (e.g. day1/day2),
  // pick the single day that panels happen on:
  const PANEL_DAY_KEY = "day1";

  return panelsMockData[PANEL_DAY_KEY] || [];
}

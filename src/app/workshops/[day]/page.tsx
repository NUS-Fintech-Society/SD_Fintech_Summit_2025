import { workshopsMockData } from "@/components/workshops/data";
import { panelsMockData } from "@/components/panels/panelsData"; // Import panels mock data
import RegisterButton from "@/components/workshops/RegisterButton";
import { IWorkShop } from "@/components/workshops/types";
import WorkshopList from "@/components/workshops/WorkshopList";
import PanelList from "@/components/panels/PanelList"; // Import the PanelList component

export default async function Page({ params }: { params: { day: string } }) {
  const day = params.day;
  const workshops = await getWorkshopsAsync(day);
  const panels = panelsMockData[day] || []; // Get panels for the day, default to empty array if no panels exist

  return (
    <div className="bg-custom-background min-h-screen p-8">
      {/* DAY label at the top */}
      <h1 className="text-2xl text-center text-white font-bold mb-8">
        <div className="[text-shadow:_4px_3px_0px_#000000] text-5xl">
          {getDayString(day)} {/* Show the dynamic day title */}
        </div>
      </h1>

      {/* Workshops Section */}
      <h2 className="text-xl text-center text-white font-semibold mb-4">
        <div className="[text-shadow:_4px_3px_0px_#000000] text-3xl">
          {"ONLINE WORKSHOPS"} {/* Show the dynamic workshop type */}
        </div>
      </h2>
      <WorkshopList workshops={workshops} />
    </div>
  );
  // return ( //TODO: change back when workshop data is set
  //   <div className="bg-custom-background min-h-screen p-8 flex items-center justify-center">
  //     <h1 className="text-4xl text-white font-bold [text-shadow:_4px_3px_0px_#000000]">
  //       To be released
  //     </h1>
  //   </div>
  // );
}

function getDayString(day: string): string {
  const dayMappings: Record<string, string> = {
    "day1": "5 Jan 2026",
    "day2": "6 Jan 2026",
  };
  return dayMappings[day] || day;
}

async function getWorkshopsAsync(day: string): Promise<IWorkShop[]> {
  const workshops: IWorkShop[] | null = workshopsMockData[day];
  if (workshops == null) return [];
  return workshops;
}
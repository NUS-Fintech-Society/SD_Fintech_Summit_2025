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
          WORKSHOPS
        </div>
      </h2>
      <WorkshopList workshops={workshops} />

      {/* Conditionally render panels only for Day 1 */}
      {day === "day1" && (
        <>
          <h2 className="text-xl text-center text-white font-semibold mt-12 mb-6">
            <div className="[text-shadow:_4px_3px_0px_#000000] text-3xl">
              PANELS
            </div>
          </h2>
          <PanelList panels={panels} />
        </>
      )}

      {/* Register Button Section */}
      <div className="flex justify-center mt-8">
        <RegisterButton />
      </div>
    </div>
  );
}

function getDayString(day: string): string {
  // Check if the string starts with 'day' and the rest is a number
  if (day.startsWith("day") && !isNaN(+day.slice(3))) {
    return `DAY ${day.slice(3)}`;
  }
  return day;
}

async function getWorkshopsAsync(day: string): Promise<IWorkShop[]> {
  const workshops: IWorkShop[] | null = workshopsMockData[day];
  if (workshops == null) return [];
  return workshops;
}
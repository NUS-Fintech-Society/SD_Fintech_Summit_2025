import { workshopsMockData } from "@/components/workshops/data";
import RegisterButton from "@/components/workshops/RegisterButton";
import { IWorkShop } from "@/components/workshops/types";
import WorkshopList from "@/components/workshops/WorkshopList";

export default async function Page({ params }: { params: { day: string } }) {
  const day = params.day;
  const workshops = await getWorkshopsAsync(day);

  return (
    <div className="bg-custom-background min-h-screen p-8">
      <h1 className="text-2xl text-center text-white font-bold mb-8">
        <div className="[text-shadow:_4px_3px_0px_#000000] text-5xl">
          WORKSHOPS
        </div>
        {getDayString(day)}
      </h1>
      <WorkshopList workshops={workshops} />
      <div className="flex justify-center">
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

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const guides = [
  {
    id: 1,
    name: "Snake Plant",
    difficulty: "Easy",
    light: "Low to Bright Indirect",
    water: "Every 2-3 weeks",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7a",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    difficulty: "Moderate",
    light: "Bright Indirect",
    water: "Weekly",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 3,
    name: "Peace Lily",
    difficulty: "Easy",
    light: "Low to Bright Indirect",
    water: "When top soil is dry",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355",
  },
];

export function CareGuideGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {guides.map((guide) => (
        <Card
          key={guide.id}
          className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <CardContent className="p-6 space-y-4">
            <div className="relative w-full h-60 mb-4 rounded-xl overflow-hidden">
              <Image
                src={guide.image}
                alt={guide.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{guide.name}</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium text-gray-900">Difficulty:</span>{" "}
                {guide.difficulty}
              </p>
              <p>
                <span className="font-medium text-gray-900">Light:</span>{" "}
                {guide.light}
              </p>
              <p>
                <span className="font-medium text-gray-900">Water:</span>{" "}
                {guide.water}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

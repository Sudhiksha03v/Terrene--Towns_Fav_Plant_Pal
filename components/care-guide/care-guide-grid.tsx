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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {guides.map((guide) => (
        <Card key={guide.id}>
          <CardContent className="p-6">
            <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
              <Image
                src={guide.image}
                alt={guide.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-4">{guide.name}</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Difficulty:</span>{" "}
                <span className="text-gray-600">{guide.difficulty}</span>
              </p>
              <p>
                <span className="font-medium">Light:</span>{" "}
                <span className="text-gray-600">{guide.light}</span>
              </p>
              <p>
                <span className="font-medium">Water:</span>{" "}
                <span className="text-gray-600">{guide.water}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
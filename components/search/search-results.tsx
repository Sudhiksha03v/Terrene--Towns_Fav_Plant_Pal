import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7a",
    category: "Low Light Plants",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    category: "Popular Plants",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355",
    category: "Air Purifying",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1597055181300-e7c3c5c9e6ff",
    category: "Large Plants",
  },
  {
    id: 5,
    name: "ZZ Plant",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1632207030334-878796558415",
    category: "Low Light Plants",
  },
  {
    id: 6,
    name: "String of Pearls",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1646554987275-6c7e7529d35b",
    category: "Hanging Plants",
  }
];

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-2 p-4">
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <Button variant="outline" className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
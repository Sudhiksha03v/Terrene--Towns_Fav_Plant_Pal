import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const posts = [
  {
    id: 1,
    title: "How to Choose the Perfect Indoor Plant",
    excerpt: "Find the ideal plant for your space and lifestyle with our comprehensive guide.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Understanding Plant Light Requirements",
    excerpt: "Learn about different light conditions and which plants thrive in them.",
    image: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "Common Plant Problems and Solutions",
    excerpt: "Identify and fix the most frequent issues that affect indoor plants.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    date: "2024-03-05",
  },
];

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <h3 className="text-xl font-medium mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href={`/blog/${post.id}`}
              className="text-sm font-medium hover:underline"
            >
              Read More →
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
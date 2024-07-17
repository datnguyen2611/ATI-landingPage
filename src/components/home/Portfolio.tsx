import { Button, Col, Row, Space } from "antd";
import { useState } from "react";
import ArticleCard from "../card/ArticleCard";
import { cn } from "@/lib/utils";
import { TagColors, tagItems } from "@/types";

interface Article {
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  tags: tagItems[];
}

const allArticles: Article[] = [
  {
    title: "Seers Digital, Finalist in the ARN Innovation Awards 2023",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    description:
      "We are thrilled to share the exciting news that Seers Digital has been chosen as a finalist in the Digital Tr...",
    image: "card-1.png",
    tags: [
      {
        value: "new",
        type: "New",
        color: TagColors.purple,
      },
      {
        value: "leadership",
        type: "Leadership",
        color: TagColors.blue,
      },
      {
        value: "news",
        type: "News",
        color: TagColors.magenta,
      },
    ],
  },
  {
    title: "The IT Skills Dilemma: A Growing Crisis",
    date: "20 Jan 2024",
    author: "Olivia Rhye",
    description:
      "In today's ever-evolving technological landscape, organizations are racing to keep up with the latest ad...",
    image: "card-2.png",
    tags: [
      {
        value: "new",
        type: "New",
        color: TagColors.purple,
      },
      {
        value: "leadership",
        type: "Leadership",
        color: TagColors.blue,
      },
      {
        value: "news",
        type: "News",
        color: TagColors.magenta,
      },
    ],
  },
  {
    title: "Seers Digital, Finalist in the ARN Innovation Awards 2023",
    date: "20 Jan 2024",
    author: "Olivia Rhye",
    description:
      "We are thrilled to share the exciting news that Seers Digital has been chosen as a finalist in the Digital Tr...",
    image: "card-3.png",
    tags: [
      {
        value: "new",
        type: "New",
        color: TagColors.purple,
      },
      {
        value: "leadership",
        type: "Leadership",
        color: TagColors.blue,
      },
      {
        value: "news",
        type: "News",
        color: TagColors.magenta,
      },
    ],
  },
  {
    title: "The IT Skills Dilemma: A Growing Crisis",
    date: "20 Jan 2024",
    author: "Olivia Rhye",
    description:
      "In today's ever-evolving technological landscape, organizations are racing to keep up with the latest ad...",
    image: "card-4.png",
    tags: [
      {
        value: "new",
        type: "New",
        color: TagColors.purple,
      },
      {
        value: "leadership",
        type: "Leadership",
        color: TagColors.blue,
      },
      {
        value: "news",
        type: "News",
        color: TagColors.magenta,
      },
    ],
  },
  {
    title: "Seers Digital, Finalist in the ARN Innovation Awards 2023",
    date: "20 Jan 2024",
    author: "Olivia Rhye",
    description:
      "We are thrilled to share the exciting news that Seers Digital has been chosen as a finalist in the Digital Tr...",
    image: "card-5.png",
    tags: [
      {
        value: "new",
        type: "New",
        color: TagColors.purple,
      },
      {
        value: "leadership",
        type: "Leadership",
        color: TagColors.blue,
      },
      {
        value: "news",
        type: "News",
        color: TagColors.magenta,
      },
    ],
  },
  {
    title: "The IT Skills Dilemma: A Growing Crisis",
    date: "20 Jan 2024",
    author: "Olivia Rhye",
    description:
      "In today's ever-evolving technological landscape, organizations are racing to keep up with the latest ad...",
    image: "card-6.png",
    tags: [
      {
        value: "new",
        type: "New",
        color: TagColors.purple,
      },
      {
        value: "leadership",
        type: "Leadership",
        color: TagColors.blue,
      },
      {
        value: "news",
        type: "News",
        color: TagColors.magenta,
      },
    ],
  },
  // Add more articles here
];

const categories = [
  { value: "all", label: "All" },
  { value: "mobile", label: "Mobile Application" },
  { value: "web", label: "Web Development" },
  { value: "blockchain", label: "Blockchain" },
  { value: "artificial", label: "Artificial Intelligence" },
];
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredArticles =
    selectedCategory === "all"
      ? allArticles
      : allArticles.filter((article) =>
          article.tags.some((e) => e.value === selectedCategory),
        );

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-center items-center gap-4 mb-4 max-sm:flex-wrap  max-sm:justify-start">
        {categories.map((category) => (
          <Button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={cn(
              "px-6 py-1.5 rounded-lg font-normal text-xl border-none",
              selectedCategory === category.value
                ? "bg-primary text-white"
                : "bg-gray-47 text-gray-600",
            )}
          >
            {category.label}
          </Button>
        ))}
      </div>
      <Row gutter={[16, 16]}>
        {filteredArticles.map((article, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={8}
          >
            <ArticleCard
              title={article.title}
              author={article.author}
              date={article.date}
              description={article.description}
              image={article.image}
              tags={article.tags}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Portfolio;

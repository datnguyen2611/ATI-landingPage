import React from "react";
import { Card, Tag, Space } from "antd";

interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  date,
  author,
  description,
  image,
  tags,
}) => {
  return (
    <Card
      cover={
        <img
          alt={title}
          src={`/card/${image}`}
        />
      }
      hoverable
      styles={{
        body: {
          padding: "24px 8px",
        },
      }}
      className="p-4"
    >
      <div className="text-warning-500 text-sm font-normal flex items-center">
        {" "}
        {author} <span className="text-lg px-0.5">&#183;</span>
        {date}
      </div>
      <Card.Meta
        title={title}
        description={description}
        className="py-4"
      />
      <div style={{ marginTop: "16px" }}>
        <Space>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              color="blue"
            >
              {tag}
            </Tag>
          ))}
        </Space>
      </div>
    </Card>
  );
};

export default ArticleCard;

import React, { useState } from "react";
import { Tabs, Tag } from "antd";

const { TabPane } = Tabs;

const BusinessArea = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const content: any = {
    "1": {
      title: "Public Blockchain",
      description:
        "In today's ever-evolving technological landscape, organizations are racing to keep up with the latest advancements. However, there's a formidable challenge on the horizon—there's a shortage of skilled IT workers. According to Foundry's 2023 CIO Tech Priorities Study, most IT leaders identify a lack of skillsets and a shortage of staff as their top technology challenges.",
      imageUrl: "banner-2.png",
      tags: ["Blockchain", "Public"],
    },
    "2": {
      title: "NFT Marketplace Development",
      description:
        "The IT Skills Dilemma: A Growing Crisis. In today’s ever-evolving technological landscape, organizations are racing to keep up with the latest advancements. However, there’s a formidable challenge on the horizon—there’s a shortage of skilled IT workers. According to Foundry’s 2023 CIO Tech Priorities Study, most IT leaders identify a lack of skillsets and a shortage of staff as their top technology challenges.",
      imageUrl: "banner-2.png",
      tags: ["New", "Leadership", "News"],
    },
    "3": {
      title: "DEX Development",
      description: "Description for DEX Development...",
      imageUrl: "banner-2.png",
      tags: ["Decentralized", "Exchange"],
    },
    "4": {
      title: "Blockchain Game Development",
      description: "Description for Blockchain Game Development...",
      imageUrl: "/banner-2.png",
      tags: ["Game", "Blockchain"],
    },
    "5": {
      title: "E-Wallet",
      description: "Description for E-Wallet...",
      imageUrl: "/banner-2.png",
      tags: ["Finance", "Wallet"],
    },
    "6": {
      title: "Private Blockchain",
      description: "Description for Private Blockchain...",
      imageUrl: "/banner-2.png",
      tags: ["Blockchain", "Private"],
    },
    "7": {
      title: "Kỹ thuật phần mềm",
      description: "Description for Kỹ thuật phần mềm...",
      imageUrl: "banner-2.png",
      tags: ["Software", "Engineering"],
    },
    "8": {
      title: "Launchpad White Label Solution",
      description: "Description for Launchpad White Label Solution...",
      imageUrl: "banner-2.png",
      tags: ["Launchpad", "Solution"],
    },
  };

  const { title, description, imageUrl, tags } =
    content[activeTab] || content["1"];

  return (
    <div className="flex mt-10 sm:flex-row flex-col">
      <Tabs
        tabPosition="left"
        className=" business-tabs sm:justify-end justify-center"
        defaultActiveKey="1"
        onChange={handleTabChange}
        destroyInactiveTabPane={true}
        tabBarGutter={16}
        renderTabBar={(props, DefaultTabBar) => (
          <DefaultTabBar
            {...props}
            className="custom-tab-bar"
          />
        )}
      >
        {Object.keys(content).map((key) => (
          <TabPane
            tab={
              <div className="text-left  sm:text-2xl text-lg font-medium">
                <span>{content[key].title}</span>
              </div>
            }
            key={key}
          />
        ))}
      </Tabs>
      <div className=" w-full ml-0 mt-4 border border-gray-300 rounded-2xl sm:ml-6 sm:mt-0">
        {imageUrl && (
          <img
            src={`/banner/${imageUrl}`}
            alt={title}
            className="w-full h-auto mb-4 rounded-t-2xl rounded-tr-2xl"
          />
        )}
        <div className="px-6 py-10">
          <h2 className="text-warning-500 text-xl font-normal mb-5">{title}</h2>
          <h1 className="text-5xl font-bold text-black-47 mb-4">{title}</h1>
          <p className="text-gray-500 font-normal text-xl mb-4">
            {description}
          </p>
          <div className="mt-4">
            {tags &&
              tags.map((tag: string, index: number) => (
                <Tag
                  key={index}
                  color={getTagColor(tag)}
                >
                  {tag}
                </Tag>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "new":
      return "blue";
    case "leadership":
      return "purple";
    case "news":
      return "red";
    case "blockchain":
      return "green";
    case "public":
      return "cyan";
    case "decentralized":
      return "orange";
    case "exchange":
      return "gold";
    case "game":
      return "magenta";
    case "finance":
      return "lime";
    case "wallet":
      return "geekblue";
    case "private":
      return "volcano";
    case "software":
      return "pink";
    case "engineering":
      return "gray";
    case "launchpad":
      return "yellow";
    case "solution":
      return "purple";
    default:
      return "default";
  }
};
export default BusinessArea;

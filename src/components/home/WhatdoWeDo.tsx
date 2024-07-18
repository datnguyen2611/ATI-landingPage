import RightIcon from "@/assets/icons/RightIcon";
import { Button, Card, Col, Row } from "antd";

interface Item {
  title: string;
  description: string;
  imgSrc: string;
  avatarSrc: string;
}

const items: Item[] = [
  {
    title: "Smoking Cessation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: "card-7.png",
    avatarSrc: "avatar-1.png",
  },
  {
    title: "Friendly Visiting",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: "card-8.png",
    avatarSrc: "avatar-2.png",
  },
  {
    title: "Overnight Stay Respite",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: "card-9.png",
    avatarSrc: "avatar-3.png",
  },
  {
    title: "Adult Day Program",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: "card-10.png",
    avatarSrc: "avatar-4.png",
  },
  {
    title: "Craving Change",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: "card-11.png",
    avatarSrc: "avatar-5.png",
  },
  {
    title: "Senior Gentle Exercise",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imgSrc: "card-12.png",
    avatarSrc: "avatar-6.png",
  },
];

const WhatdoWeDo = () => {
  return (
    <Row gutter={[16, 16]}>
      {items.map((item, index) => (
        <Col
          xs={24}
          md={12}
          lg={8}
          key={index}
        >
          <Card
            hoverable
            cover={
              <div className="relative p-4">
                <img
                  alt={item.title}
                  src={`/card/${item.imgSrc}`}
                  className="max-w-full"
                />
                <img
                  src={`/avatar/${item.avatarSrc}`}
                  alt=""
                  className="w-20 h-20 absolute  -bottom-5 left-7  "
                />
              </div>
            }
            styles={{
              body: {
                padding: "0",
              },
            }}
          >
            <div className="p-4 mt-4">
              <h2 className="font-bold text-xl text-gray-900 mb-5">
                {item.title}
              </h2>
              <p className="font-normal text-base text-gray-500 mb-5">
                {item.description}
              </p>
              <div className="w-full">
                <Button className="  flex items-center border-primary text-base text-primary border-2 ">
                  Learn more
                  <RightIcon
                    width={10}
                    height={10}
                  />
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default WhatdoWeDo;

import { Col, Row } from "antd";

interface Item {
  title: string;
  imgSrc: string;
}

const items: Item[] = [
  {
    title: "Manufacturing",
    imgSrc: "banner-3.png",
  },
  {
    title: "Retail & Ecommerce",
    imgSrc: "banner-4.png",
  },
  {
    title: "Banking & Finance",
    imgSrc: "banner-5.png",
  },
  {
    title: "Public sector",
    imgSrc: "banner-6.png",
  },
  {
    title: "Healthcare",
    imgSrc: "banner-7.png",
  },
  {
    title: "Transportation",
    imgSrc: "banner-8.png",
  },
  {
    title: "Internet Service",
    imgSrc: "banner-9.png",
  },
  {
    title: "Utilities",
    imgSrc: "banner-10.png",
  },
];

const Solutions = () => {
  return (
    <Row
      gutter={[16, 16]}
      className="max-sm:px-2"
    >
      {items.map((item, index) => (
        <Col
          xs={12}
          md={12}
          lg={6}
          key={index}
          className="group"
        >
          <div className=" w-full  img-hover overflow-hidden rounded-lg relative">
            <img
              alt={item.title}
              src={`/banner/${item.imgSrc}`}
              className="w-full h-full "
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 ">
              <span className="text-white text-lg font-semibold">
                {item.title}
              </span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
export default Solutions;

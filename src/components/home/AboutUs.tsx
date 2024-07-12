import LightningIcon from "@/assets/icons/LightningIcon";
import { Button, Card, Tabs, TabsProps } from "antd";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Our Mission",
      children: (
        <div className="text-gray-600 text-lg font-medium">
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the. It was popularised in the Lorem
            Ipsum is simply dummy text of the since
          </p>
          <p className="flex items-center mb-3">
            {" "}
            <span className="mr-2">
              <LightningIcon
                width={20}
                height={20}
              />
            </span>{" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="flex items-center">
            {" "}
            <span className="mr-2">
              <LightningIcon
                width={18}
                height={18}
              />
            </span>{" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Button
            type="default"
            className="mt-10 py-2.5 px-8 border-primary text-primary rounded-xl"
          >
            Read more
          </Button>
        </div>
      ),
    },
    {
      key: "2",
      label: "Our Vision",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Core Value",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div className=" mt-10 ">
      <div className=" rounded-lg  relative background-dots">
        <div className="flex flex-col lg:flex-row ">
          <div className="lg:w-1/2 z-10">
            <img
              src="/business-1.png"
              alt="High Five"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-black-47 ">
              Powerful agency for corporate business
            </h1>
            <p className="text-gray-600 mb-4 text-base font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
            <Tabs
              defaultActiveKey="1"
              items={items}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10 ">
          <Card
            ref={ref1}
            className="text-center border-gray-300"
          >
            <h2 className="text-[56px] mb-2 font-bold gradient-blue">
              {inView1 ? (
                <CountUp
                  end={12}
                  duration={2}
                />
              ) : (
                "0"
              )}
            </h2>

            <p className="text-black-20 text-base font-normal">
              Năm kinh nghiệm
            </p>
          </Card>
          <Card
            ref={ref2}
            className="text-center border-gray-300"
          >
            <h2 className="text-[56px] mb-2 font-bold gradient-green">
              {inView2 ? (
                <>
                  <CountUp
                    end={70}
                    duration={2}
                  />
                  +
                </>
              ) : (
                "0"
              )}
            </h2>
            <p className="text-black-20 text-base font-normal">Nhân sự</p>
          </Card>
          <Card
            ref={ref3}
            className="text-center border-gray-300"
          >
            <h2 className="text-[56px] mb-2 font-bold gradient-orange">
              {inView3 ? (
                <>
                  0
                  <CountUp
                    end={7}
                    duration={2}
                  />
                </>
              ) : (
                "0"
              )}
            </h2>
            <p className="text-black-20 text-base font-normal">Quốc gia</p>
          </Card>
          <Card
            ref={ref4}
            className="text-center border-gray-300"
          >
            <h2 className="text-[56px] mb-2 font-bold gradient-red">
              {inView4 ? (
                <>
                  {" "}
                  <CountUp
                    end={1700}
                    duration={2}
                  />
                  +
                </>
              ) : (
                "0"
              )}
            </h2>
            <p className="text-black-20 text-base font-normal">Dự án</p>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;

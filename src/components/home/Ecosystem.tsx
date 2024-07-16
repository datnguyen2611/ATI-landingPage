import { Card, Col, Row } from "antd";

const Ecosystem = () => {
  return (
    <div className="min-h-screen  p-10">
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          md={12}
          lg={10}
        >
          <Card
            hoverable
            className="bg-gray-50 h-full flex flex-col justify-center text-center"
          >
            <img
              src="/card/ecosystem-1.png"
              alt="Work Equipment"
              className="max-w-full  mx-auto mb-7"
            />
            <h2 className="text-4xl font-bold text-gray-900 mb-7">
              Work Equipment
            </h2>
            <p className="text-base font-normal text-gray-500">
              Efficiently resolve IT incidents and problems with our Incident
              and Problem Management service.
            </p>
          </Card>
        </Col>
        <Col
          xs={24}
          md={12}
          lg={6}
        >
          <Card
            hoverable
            className="gradient-blue-1"
          >
            <div className="flex justify-end ">
              <img
                src="/card/ecosystem-2.png"
                alt="Snacks. Drinks Everyday."
                className="max-w-full  "
              />
            </div>
            <h2 className="text-5xl font-bold  text-white leading-15">
              Snacks. Drinks Everyday.
            </h2>
          </Card>
        </Col>
        <Col
          xs={24}
          md={12}
          lg={8}
        >
          <Card
            hoverable
            className="bg-gray-50 h-full flex flex-col justify-center"
          >
            <h2 className="text-5xl leading-15 font-bold mb-8 gradient-green-1  ">
              Sports <br className=" hidden md:block" /> Activity
            </h2>
            <img
              src="/card/ecosystem-3.png"
              alt="Sports Activity"
              className="w-16 h-16 mb-4"
            />

            <p className="text-base  font-normal text-gray-500">
              Drive efficiency and productivity with our Business Process
              Improvement service. We analyze your existing processes.
            </p>
          </Card>
        </Col>
        <Col
          xs={24}
          md={12}
          lg={12}
        >
          <Card
            hoverable
            className="bg-gray-50 h-full  items-center justify-center flex"
          >
            <Row gutter={[16, 16]}>
              <Col span={10}>
                <img
                  src="/card/ecosystem-4.png"
                  alt="Office Near Center"
                  className="max-w-ful rounded-lg"
                />
              </Col>
              <Col span={14}>
                <div>
                  <h2 className="text-xl font-bold mb-2">Office Near Center</h2>
                  <p className="text-sm  font-normal text-gray-500 mb-3">
                    Efficiently resolve IT incidents and problems with our
                    Incident and Problem Management service.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Work Remotely</h2>
                  <p className="text-sm  font-normal text-gray-500">
                    Efficiently resolve IT incidents and problems with our
                    Incident and Problem Management service.
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col
          xs={24}
          md={12}
          lg={12}
        >
          <Card
            hoverable
            className="bg-gray-50 h-full text-center"
          >
            <img
              src="/card/ecosystem-5.png"
              alt="Course refund"
              className="max-w-full mx-auto mb-4"
            />
            <h2 className="text-4xl font-bold text-gray-900 mb-5">
              Course refund
            </h2>

            <p className="text-base font-normal text-gray-500">
              Drive efficiency and productivity with our Business Process
              Improvement service. We analyze your existing processes.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Ecosystem;

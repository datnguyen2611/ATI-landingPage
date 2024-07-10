import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <Layout className="w-full h-screen">
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;

import Header from "../../header";
import Footer from "../../footer";
import PageContainer from "../../page-container/page-container";

import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};
export default DefaultLayout;

import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import PageContainer from "../page-container/page-container";

export const DefaultLayout = () => {
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

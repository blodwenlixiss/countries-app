import Header from "../header/header";
import Footer from "../footer/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.displayName = "Layout";
export default Layout;

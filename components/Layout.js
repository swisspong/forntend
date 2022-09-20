import HeaderV2 from "./HeaderV2";
import MyFooter from "./MyFooter";

const Layout = ({ children }) => {

  return (
    <>
      <HeaderV2 />

      {children}
      <MyFooter />
    </>
  );
};

export default Layout;

import { PropsWithChildren } from "react";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};
export default PageContainer;

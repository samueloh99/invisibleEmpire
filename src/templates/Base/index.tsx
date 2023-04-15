import Header from "../../components/Header";
import Footer from "../../components/Footer";

const BaseTemplate = ({ children }: any) => (
  <div className="flex border border-white m-10 rounded-md m-auto bg-primary z-[5] min-h-[100vh] h-full">
    <div className="flex flex-col bg-black border border-white m-2 rounded-md z-[10] w-full">
      <header>
        <Header />
      </header>
      <main className="flex-grow">{children}</main>{" "}
    </div>
  </div>
);

export default BaseTemplate;

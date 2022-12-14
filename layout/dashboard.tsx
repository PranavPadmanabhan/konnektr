import BottomTabBar from "../components/Core/bottomTabBar/BottomTabBar";
import { Sidebar } from "../components/Core/Sidebar/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen  flex flex-row justify-start px-0  bg-white box-border">
      {true && <Sidebar />}
      <BottomTabBar />
      {children}
    </div>
  );
}

export default Layout;

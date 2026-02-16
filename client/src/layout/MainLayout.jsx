import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import BottomNav from "../components/layout/BottomNav";
import Footer from "../components/layout/Footer";
import LoadingPage from "../pages/LoadingPage";

const MainLayout = () => {
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    return (
        <div className="app-layout">
            <Header />

            <div className="layout-container">
                <Sidebar />

                <main className="main-content">
                    {isLoading ? <LoadingPage /> : <Outlet />}
                </main>

            </div>

            <Footer />
            <BottomNav />
        </div>
    );
};

export default MainLayout;
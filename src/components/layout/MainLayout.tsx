import { Button, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const { Header, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const toastId = toast.loading("Logging Out");

    try {
      dispatch(logout());
      toast.success("Logged Out", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong, Try Again", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>{" "}
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

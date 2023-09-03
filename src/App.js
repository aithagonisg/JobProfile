import AddProfile from "./components/AddProfile";
import ProfileListComponent from "./components/ProfileListComponent";
import CustomToast from "./components/common/CustomToast";

function App() {
  return (
    <div className="bg-componentbg h-[100%]">
      <CustomToast />
      <AddProfile />
      <ProfileListComponent />
    </div>
  );
}

export default App;

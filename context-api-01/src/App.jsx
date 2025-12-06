import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>

      <h1 className="text-5xl">Hello World!</h1>
      <Login />
      <Profile />
      <Footer />
    </UserContextProvider>
  );
}

export default App;

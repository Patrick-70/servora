import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";


function App() {

  return (

    <div className="flex min-h-screen flex-col bg-slate-50">

      <Navbar />

      <main className="flex-1 pt-20">
        <AppRoutes />
      </main>

      <Footer />

    </div>

  );

}


export default App;
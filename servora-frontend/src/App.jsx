import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-slate-900">
          Welcome to Servora
        </h1>

        <p className="mt-4 text-slate-600 text-lg">
          Your trusted local services marketplace.
        </p>
      </main>
    </div>
  )
}

export default App
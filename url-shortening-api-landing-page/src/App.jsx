import './App.css';
import Cta from './components/Cta';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import HeroForm from './components/HeroForm';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-poppins w-screen bg-[#F2F2F2]">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <HeroForm />
        <Features />
        <Cta />
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

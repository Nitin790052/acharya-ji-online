import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import PujaEssentials from "./pages/samagri/PujaEssentials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import TwoBidders from "./pages/TwoBidders";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/About";
import Media from "./pages/Media";
import BookPuja from "./pages/pujaServices/BookPuja";
import Career from "./pages/Career";
import GrihaPraveshPuja from "./pages/pujaServices/GirhaPraveshPuja";
import Login from "./pages/Login";
import VendorRegister from "./pages/VendorRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {AuthProvider}  from "@/contexts/AuthContexts";
import VendorRoute from "../src/routes/VendorRoute";
import VendorDashboardLayout from "./components/layout/VendorDashboardLayout";
import VendorDashboardRouter from "./routes/VendorDashboardRouter";
import MyPujaServices from "./vendors/pandit/MyPujaServices";
import Bookings from "./vendors/pandit/Bookings";
import AvailabilityCalendar from "./vendors/pandit/AvailabilityCalender";
import WalletEarning from "./vendors/pandit/WalletEarning";
import ReviewsRating from "./vendors/pandit/ReviewsRating";
import Notifications from "./vendors/pandit/Notifications";
import ProfileKyc from "./vendors/pandit/ProfileKyc";

const queryClient = new QueryClient();

const App = () => (
  <>
    <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
       <QueryClientProvider client={queryClient}>
        <AuthProvider>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/pujaServices/bookPuja" element={<BookPuja />} />
            <Route path="/pujaServices/girhaPraveshPuja" element={<GrihaPraveshPuja />} />
            <Route path="/samagri/essentials" element={<PujaEssentials />} />
            <Route path="/samagri/idols" element={<PujaEssentials />} />
            <Route path="/samagri/hawan" element={<PujaEssentials />} />
            <Route path="/products" element={<PujaEssentials />} />
            <Route path="/products/prasad" element={<PujaEssentials />} />
            <Route path="/products/kits" element={<PujaEssentials />} />
            <Route path="/products/festival" element={<PujaEssentials />} />
            <Route path="/bidders" element={<TwoBidders />} />
            <Route path="/career" element={<Career/>}/>
            <Route path="/media" element={<Media/>}/>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            {/*vendor/costumer part */}
            <Route path="/login" element={<Login />} />
            <Route path="/vendorRegister" element={<VendorRegister />} />
            {/* DASHBOARD ROUTES */}
 
 <Route
  path="/dashboard/vendor"
  element={
    <VendorRoute>
      <VendorDashboardLayout />
    </VendorRoute>
  }
>
  <Route index element={<VendorDashboardRouter />} />
  {/*Pnadit routes*/}
  <Route path="/dashboard/vendor/services" element={<MyPujaServices/>} />
  <Route path="/dashboard/vendor/bookings" element={<Bookings/>} />
  <Route path="/dashboard/vendor/calendar" element={<AvailabilityCalendar/>} />
  <Route path="/dashboard/vendor/wallet" element={<WalletEarning/>} />
  <Route path="/dashboard/vendor/reviews" element={<ReviewsRating/>} />
  <Route path="/dashboard/vendor/notifications" element={<Notifications/>} />
  <Route path="/dashboard/vendor/settings" element={<ProfileKyc/>} />
</Route>

{/* 
      <Route path="/dashboard/user" element={<UserRoute />}>
      <Route index element={<UserDashboard />} />
      </Route> */}

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
  </>
 
);

export default App;

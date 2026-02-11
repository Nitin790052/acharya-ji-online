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
import Login from "../src/app/vendor/login/Login";
import VendorRegister from "../src/app/vendor/pages/VendorRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {AuthProvider}  from "@/app/vendor/auth/AuthContext";
import VendorDashboardLayout from "../src/app/vendor/layout/VendorDashboardLayout";
import MyPujaServices from "../src/app/vendor/pages/vendors/pandit/MyPujaServices";
import Bookings from "../src/app/vendor/pages/vendors/pandit/Bookings";
import AvailabilityCalendar from "../src/app/vendor/pages/vendors/pandit/AvailabilityCalender";
import WalletEarning from "../src/app/vendor/pages/vendors/pandit/WalletEarning";
import ReviewsRating from "../src/app/vendor/pages/vendors/pandit/ReviewsRating";
import Notifications from "../src/app/vendor/pages/vendors/pandit/Notifications";
import ProfileKyc from "../src/app/vendor/pages/vendors/pandit/ProfileKyc";
import VendorRouteGuard from "./app/vendor/routes/VendorRouteGuard";
import VendorDashboardRouter from "./app/vendor/routes/VendorDashboardRouter";
import MyConsultations from "./app/vendor/pages/vendors/astrologer/MyConsultations";
import ReportsKundli from "./app/vendor/pages/vendors/astrologer/ReportsKundli";
import GeneratorKundliReports from "./app/vendor/pages/vendors/astrologer/GenerateKundliReports";
import AvailabilitySchedule from "./app/vendor/pages/vendors/astrologer/AvailabilitySchedule";
import WalletEarnings from "./app/vendor/pages/vendors/astrologer/WalletEarnings";
import ReviewsRatings from "./app/vendor/pages/vendors/astrologer/ReviewsRatings";
import ChatCenter from "./app/vendor/pages/vendors/astrologer/ChatCenter";
import ProfileBranding from "./app/vendor/pages/vendors/astrologer/ProfileBranding";
import AstroNotifications from "./app/vendor/pages/vendors/astrologer/AstroNotifications";
import Orders from "./app/vendor/pages/vendors/poojaSamagri/Orders";
import Products from "./app/vendor/pages/vendors/poojaSamagri/Products";
import PujaKits from "./app/vendor/pages/vendors/poojaSamagri/Pujakits";
import Inventory from "./app/vendor/pages/vendors/poojaSamagri/Inventory";
import OffersCoupons from "./app/vendor/pages/vendors/poojaSamagri/OffersCoupons";
import ShippingDelivery from "./app/vendor/pages/vendors/poojaSamagri/ShippingDelivery";
import ReviewsPuja from "./app/vendor/pages/vendors/poojaSamagri/ReviewsPuja";
import WalletPuja from "./app/vendor/pages/vendors/poojaSamagri/WalletPuja";
import NotificationPuja from "./app/vendor/pages/vendors/poojaSamagri/Notifications";
import StoreProfile from "./app/vendor/pages/vendors/poojaSamagri/StoreProfile";

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
  path="/vendor/dashboard"
  element={
    <VendorRouteGuard>
      <VendorDashboardLayout />
    </VendorRouteGuard>
  }
>

  {/* Default dashboard page */}
  <Route index element={<VendorDashboardRouter />} />

  {/* Pnadit category (RELATIVE PATHS ONLY) */}
  <Route path="services" element={<MyPujaServices />} />
  <Route path="bookings" element={<Bookings />} />
  <Route path="calendar" element={<AvailabilityCalendar />} />
  <Route path="wallet" element={<WalletEarning />} />
  <Route path="reviews" element={<ReviewsRating />} />
  <Route path="notifications" element={<Notifications />} />
  <Route path="settings" element={<ProfileKyc />} />

  {/* Astrologor category (RELATIVE PATHS ONLY) */}
  <Route path="consultations" element={<MyConsultations />} />
  <Route path="reports" element={<ReportsKundli />} />
  <Route path="generate" element={<GeneratorKundliReports />} />
  <Route path="availability" element={<AvailabilitySchedule />} />
  <Route path="wallet" element={<WalletEarnings />} />
  <Route path="reviews" element={<ReviewsRatings />} />
  <Route path="chatCenter" element={<ChatCenter />} />
  <Route path="astroNotifications" element={<AstroNotifications />} />
  <Route path="profile" element={<ProfileBranding />} />

   {/* Seller category (RELATIVE PATHS ONLY) */}
  <Route path="orders_puja" element={<Orders />} />
  <Route path="products_puja" element={<Products />} />
  <Route path="pujaKits_puja" element={<PujaKits />} />
  <Route path="inventory_puja" element={<Inventory />} />
  <Route path="offers_puja" element={<OffersCoupons />} />
  <Route path="delivery_puja" element={<ShippingDelivery />} />
  <Route path="settlement_puja" element={<WalletPuja/>}/>
  <Route path="ratings_puja" element={<ReviewsPuja/>}/>
  <Route path="notifications_puja" element={<NotificationPuja/>}/>
  <Route path="settings_puja" element={<StoreProfile/>}/>
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

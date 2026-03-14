import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import PujaEssentials from "./pages/samagri/PujaEssentials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import TwoBidders from "./pages/TwoBidders";
import AboutUs from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import FloatingButtons from "./components/FloatingButtons";
import SocialSidebar from "./components/home/SocialSidebar";
import SupportSpeedDial from "./components/common/SupportSpeedDial";
import Media from "./pages/Media";
import BookPuja from "./pages/pujaServices/BookPuja";
import Career from "./pages/Career";
import GrihaPraveshPuja from "./pages/pujaServices/GirhaPraveshPuja";
import Login from "../src/app/vendor/login/Login";
import VendorRegister from "../src/app/vendor/pages/VendorRegister";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ DONO AUTH PROVIDERS - ALAG ALAG NAMES SE IMPORT
import { AuthProvider as VendorAuthProvider } from "@/app/vendor/auth/AuthContext";
import { AuthProvider as UserAuthProvider } from "./app/user/auth/AuthContext";  // ✅ USER WALA

// Vendor Imports
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
import SevasPujas from "./app/vendor/pages/vendors/templeService/SevasPujas";
import BookingsTemple from "./app/vendor/pages/vendors/templeService/Bookings";
import Donations from "./app/vendor/pages/vendors/templeService/Donations";
import EventsTemple from "./app/vendor/pages/vendors/templeService/EventsTemple";
import StaffManagement from "./app/vendor/pages/vendors/templeService/StaffManagement";
import WalletTemple from "./app/vendor/pages/vendors/templeService/WalletTemple";
import SettingsTemple from "./app/vendor/pages/vendors/templeService/SettingsTemple";
import OrganizerEvents from "./app/vendor/pages/vendors/eventOrganizer/OrganizerEvents";
import Bookings_Organizer from "./app/vendor/pages/vendors/eventOrganizer/Bookings_Organizer";
import Attendees_Organizer from "./app/vendor/pages/vendors/eventOrganizer/Attendees_Organizer";
import WalletPayments_Organizer from "./app/vendor/pages/vendors/eventOrganizer/WalletPayments_Organizer";
import Analytics_Oraganizer from "./app/vendor/pages/vendors/eventOrganizer/Analytics_Organizer";
import ProfileSettings_Organizer from "./app/vendor/pages/vendors/eventOrganizer/ProfileSettings_Organizer";

// User Imports
import UserLogin from "./app/user/pages/UserLogin";
import RegistrationForm from "./app/user/pages/RegistrationForm";
import UserDashboardLayout from "../src/app/user/layout/UserDashboardLayout"
import UserDashboard from "./app/user/pages/UserDashboard";
import ProtectedRoute from "./app/user/ProtectedRoute";  // ✅ User Protected Route
import UserOrders from "./app/user/pages/orders/UserOrders";
import UserProfile from "./app/user/pages/headerProfile/UserProfile";
import UserHistory from "./app/user/pages/UserHistory";
import UserPayments from "./app/user/pages/UserPayments";
import PendingOrders from "./app/user/pages/orders/PendingOrders";
import ProcessingOrders from "./app/user/pages/orders/ProcessingOrders";
import CancelledOrders from "./app/user/pages/orders/CancelledOrders";
import CompletedOrders from "./app/user/pages/orders/CompletedOrders";
import Invoice from "./app/user/pages/invoice/Invoice";
import ViewInvoice from "./app/user/components/ViewInvoice";
import NotFound from "./pages/NotFound";
import TalkToAstrologer from "./pages/astrologyServices/TalkToAstrologer";
import GetKundli from "./pages/kundli/GetKundli";
import ReikiHealing from "./pages/healing/ReikiHealing";
import CrystalHealing from "./pages/healing/CrystalHealing";
import VastuConsultation from "./pages/vastu/VastuConsultation";


const queryClient = new QueryClient();

const GlobalFloatingButtons = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isDashboard = location.pathname.includes("/dashboard") || 
                       location.pathname.startsWith("/user") || 
                       location.pathname.startsWith("/vendor") ||
                       location.pathname === "/login" ||
                       location.pathname === "/vendorRegister";

    if (isDashboard) return null;

    return (
        <>
            <FloatingButtons isHomePage={isHomePage} />
            <SocialSidebar isHomePage={isHomePage} />
            <SupportSpeedDial isHomePage={isHomePage} />
        </>
    );
};

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
            <BrowserRouter>
                <ScrollToTop />
                <GlobalFloatingButtons />
                <VendorAuthProvider>
                    <UserAuthProvider>
                        <CartProvider>
                            <TooltipProvider>
                                <Toaster />
                                <Sonner />
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
                                    <Route path="/career" element={<Career />} />
                                    <Route path="/media" element={<Media />} />
                                    <Route path="/gallery" element={<Gallery />} />
                                    <Route path="/blog" element={<Blog />} />
                                    <Route path="/blog/:id" element={<Blog />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/astrologer" element={<TalkToAstrologer />} />
                                    <Route path="/astrologer/:id" element={<TalkToAstrologer />} />
                                    <Route path="/kundli" element={<GetKundli />} />
                                    <Route path="/reiki-healing" element={<ReikiHealing />} />
                                    <Route path="/crystal-healing" element={<CrystalHealing />} />
                                    <Route path="/vastu-consultation" element={<VastuConsultation />} />

                                    <Route path="/user_login" element={<UserLogin />} />
                                    <Route path="/user_login/registeration" element={<RegistrationForm />} />

                                    <Route
                                        path="/user/dashboard"
                                        element={
                                            <ProtectedRoute>
                                                <UserDashboardLayout />
                                            </ProtectedRoute>
                                        }
                                    >
                                        <Route index element={<UserDashboard />} />
                                        <Route path="order-user/order-all" element={<UserOrders />} />
                                        <Route path="order-user/order-pendings" element={<PendingOrders />} />
                                        <Route path="order-user/order-processing" element={<ProcessingOrders />} />
                                        <Route path="order-user/order-cancelled" element={<CancelledOrders />} />
                                        <Route path="order-user/order-completed" element={<CompletedOrders />} />
                                        <Route path="profile-user" element={<UserProfile />} />
                                        <Route path="history-user" element={<UserHistory />} />
                                        <Route path="payments-user" element={<UserPayments />} />
                                        <Route path="invoice/:id" element={<Invoice />} />
                                        <Route path="modal/invoice/:id" element={<ViewInvoice />} />
                                    </Route>

                                    <Route path="/login" element={<Login />} />
                                    <Route path="/vendorRegister" element={<VendorRegister />} />

                                    <Route
                                        path="/vendor/dashboard"
                                        element={
                                            <VendorRouteGuard>
                                                <VendorDashboardLayout />
                                            </VendorRouteGuard>
                                        }
                                    >
                                        <Route index element={<VendorDashboardRouter />} />
                                        <Route path="services" element={<MyPujaServices />} />
                                        <Route path="bookings" element={<Bookings />} />
                                        <Route path="calendar" element={<AvailabilityCalendar />} />
                                        <Route path="wallet" element={<WalletEarning />} />
                                        <Route path="reviews" element={<ReviewsRating />} />
                                        <Route path="notifications" element={<Notifications />} />
                                        <Route path="settings" element={<ProfileKyc />} />

                                        <Route path="consultations" element={<MyConsultations />} />
                                        <Route path="reports" element={<ReportsKundli />} />
                                        <Route path="generate" element={<GeneratorKundliReports />} />
                                        <Route path="availability" element={<AvailabilitySchedule />} />
                                        <Route path="wallet" element={<WalletEarnings />} />
                                        <Route path="reviews" element={<ReviewsRatings />} />
                                        <Route path="chatCenter" element={<ChatCenter />} />
                                        <Route path="astroNotifications" element={<AstroNotifications />} />
                                        <Route path="profile" element={<ProfileBranding />} />

                                        <Route path="orders_puja" element={<Orders />} />
                                        <Route path="products_puja" element={<Products />} />
                                        <Route path="pujaKits_puja" element={<PujaKits />} />
                                        <Route path="inventory_puja" element={<Inventory />} />
                                        <Route path="offers_puja" element={<OffersCoupons />} />
                                        <Route path="delivery_puja" element={<ShippingDelivery />} />
                                        <Route path="settlement_puja" element={<WalletPuja />} />
                                        <Route path="ratings_puja" element={<ReviewsPuja />} />
                                        <Route path="notifications_puja" element={<NotificationPuja />} />
                                        <Route path="settings_puja" element={<StoreProfile />} />

                                        <Route path="sevas_temple" element={<SevasPujas />} />
                                        <Route path="bookings_temple" element={<BookingsTemple />} />
                                        <Route path="donations_temple" element={<Donations />} />
                                        <Route path="events_temple" element={<EventsTemple />} />
                                        <Route path="staff_temple" element={<StaffManagement />} />
                                        <Route path="wallet_temple" element={<WalletTemple />} />
                                        <Route path="settings_temple" element={<SettingsTemple />} />

                                        <Route path="events_Organizer" element={<OrganizerEvents />} />
                                        <Route path="bookings_Organizer" element={<Bookings_Organizer />} />
                                        <Route path="attendees_Organizer" element={<Attendees_Organizer />} />
                                        <Route path="wallet_Organizer" element={<WalletPayments_Organizer />} />
                                        <Route path="analytics_Organizer" element={<Analytics_Oraganizer />} />
                                        <Route path="settings_Organizer" element={<ProfileSettings_Organizer />} />
                                    </Route>

                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </TooltipProvider>
                        </CartProvider>
                    </UserAuthProvider>
                </VendorAuthProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </>
);

export default App;
import { useAuth } from "@/contexts/AuthContexts";

// Dashboards
import PanditDashboard from "@/vendors/pandit/PanditDashboard";
import AstrologerDashboard from "@/vendors/astrologer/AstrologerDashboard";
import SellerDashboard from "@/vendors/poojaSamagri/SellerDashboard";
import TempleDashboard from "@/vendors/templeService/TempleDashboard";
import EventDashboard from "@/vendors/eventOrganizer/EventDashboard";
import HealerDashboard from "@/vendors/spiritualHealer/HealerDashboard";
import VedicDashboard from "@/vendors/vedicScholar/VedicDashboard";
import CommonDashboard from "@/vendors/common/CommonDashboard";
import SguideDashboard from "../vendors/spiritualGuide/SguideDashboard";

const VendorDashboardRouter = () => {
  const { user } = useAuth();

  // Safety guard (future async auth ke liye bhi)
  if (!user || !user.category) {
    return null; // ya loader
  }

  switch (user.category) {
    case "Pandit":
      return <PanditDashboard />;

    case "Astrologer":
      return <AstrologerDashboard />;

    case "Puja Samagri Seller":
      return <SellerDashboard />;

    case "Temple Services":
      return <TempleDashboard />;

    case "Event Organizer":
      return <EventDashboard />;

    case "Spiritual Guide":
      return <SguideDashboard />;

    case "Spiritual Healer":
      return <HealerDashboard/>;

    case "Vedic Scholar":
      return <VedicDashboard />;

    default:
      return <CommonDashboard />;
  }
};

export default VendorDashboardRouter;

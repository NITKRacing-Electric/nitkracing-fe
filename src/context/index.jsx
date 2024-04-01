import gsap from "gsap";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MobileView from "../components/mobileview/MobileView";
import { getAboutData } from "../services/AboutDataAPI";
import { getAchievements } from "../services/AchievementsAPI";
import { getCrowdfundingData } from "../services/CrowdFundingAPI";
import { getGalleryItems } from "../services/GalleryAPI";
import { getHomeData } from "../services/HomeDataAPI";
import { getTeamMembers } from "../services/TeamMembersAPI";
import { getTeamLeads } from "../services/TeamLeadsAPI";
import { getSupportersData } from "../services/SupportersAPI";
import { getMiscData } from "../services/MiscAPI";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, updateIsLoading] = useState(true);
  const [homeData, updateHomeData] = useState({});
  const [aboutData, updateAboutData] = useState({});
  const [galleryData, updateGalleryData] = useState({});
  const [membersData, updateMembersData] = useState({});
  const [crowdfundingData, updateCrowdFundingData] = useState({});
  const [leadsData, updateLeadsData] = useState({});
  const [supportersData, updateSupportersData] = useState({});
  const [achievementsData, updateAchievementsData] = useState({});
  const [miscData, updateMiscData] = useState({});

  const handleOpenAndClose = () => {
    setDrawerOpen((prev) => !prev);
  };

  // On first load initialize the app with all the data
  // In sanity database
  const fetchData = async () => {
    updateHomeData(await getHomeData());
    updateAchievementsData(await getAchievements());
    updateCrowdFundingData(await getCrowdfundingData());
    updateGalleryData(await getGalleryItems());
    updateMiscData(await getMiscData());
    updateSupportersData(await getSupportersData());
    updateLeadsData(await getTeamLeads());
    updateMembersData(await getTeamMembers());
    updateAboutData(await getAboutData());
    updateIsLoading(false);
  };

  useEffect(() => {
      fetchData();
  }, []);

  const value = {
    drawerOpen,
    handleOpenAndClose,
    isLoading,
    homeData,
    membersData,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

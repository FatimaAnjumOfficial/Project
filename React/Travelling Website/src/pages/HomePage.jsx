import { NftSection } from "../components/marketPlace/NftSection";
import { MarketPlaceFilters } from "../components/marketPlace/MarketPlaceFilters";
import { MarketPlaceHeader } from "../components/marketPlace/MarketPlaceHeader";
import { MarketPlaceSubmenu } from "../components/marketPlace/MarketPlaceSubmenu";
import { LayoutContainer } from "../layout/LayoutContainer";
import Body from "../layout/Body";

export function HomePage() {
  return (
    <LayoutContainer>
      <Body />
      <MarketPlaceHeader />
      {/*<MarketPlaceSubmenu />
      <MarketPlaceFilters />
      <NftSection />*/}
    </LayoutContainer>
  );
}

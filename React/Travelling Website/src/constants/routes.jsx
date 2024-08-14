import { HomePage } from "../pages/HomePage";
import { Layout } from "../layout/Layout";
import LuxuryHotels from "../pages/LuxuryHotels";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hotels/luxury-hotels",
        element: <LuxuryHotels />,
      },
    ],
  },
];

import {
  defaultDescription,
  defaultTitle,
  FRONTEND_URL,
  GraphImage,
} from "@/lib/utilsimp";
import { Metadata } from "next";
import React, { ReactNode } from "react";

// export const metadata: Metadata = {
//   title: defaultTitle,
//   description: defaultDescription,
//   openGraph: {
//     title: defaultTitle,
//     description: defaultDescription,
//     url: `${FRONTEND_URL}`,
//     type: "website",
//     images: [
//       {
//         url: `${FRONTEND_URL}${GraphImage}`,
//         width: 1200,
//         height: 800,
//         alt: defaultTitle,
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: defaultTitle,
//     description: defaultDescription,
//     images: [`${GraphImage}`],
//   },
//   alternates: {
//     canonical: `${FRONTEND_URL}`,
//   },
// };

type LayoutProps = {
  children: ReactNode;
};

const layout: React.FC<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;

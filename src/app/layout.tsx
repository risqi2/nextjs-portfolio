import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { AuthHandler, useAuth } from '@/context/Auth';
import NavbarMUI from "@/ui/NavbarMUI";

import { ReduxProviders } from "@/redux/provider";
import ThemeRegistryMaterialUI from "@/components/ThemeRegistry/ThemeRegistry";
import {NavigationEvents} from '@/components/navigation-events'
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { AppContextHandler } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Risqi's Portfolio",
  description: "This is a portfolio website",
};



// export default async function RootLayout({children}: {children: React.ReactNode;}) {

//   return (
//     <html lang="en">
//       <body className={roboto.className}>
//         <ThemeRegistryMaterialUI>
//           <NavbarMUI>
//             {children}
//           </NavbarMUI>
//         </ThemeRegistryMaterialUI>
//       </body>
//     </html>
//   );
// }

export interface Props {
  children: React.ReactNode,
}

export default async function RootLayout(props: Props) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProviders>
        <AuthHandler>
        <AppContextHandler>
        <ThemeRegistryMaterialUI>
          <NavbarMUI>
          {props.children}
          </NavbarMUI>
          <Toaster />
        </ThemeRegistryMaterialUI>
        </AppContextHandler>
        </AuthHandler>
        </ReduxProviders>
        <Suspense fallback={null}>
        <NavigationEvents/>
        </Suspense>
      </body>
    </html>
  );
}

// context
import RootContextProvider from "@/context/RootContextProvider";

// global styles
import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div>
          <RootContextProvider>{children}</RootContextProvider>
        </div>
      </body>
    </html>
  );
}

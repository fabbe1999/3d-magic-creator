import React, { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import ViewerPage from "./pages/ViewerPage";
import ModelViewerPage from "./pages/ModelViewerPage";
import Layout from "./components/Layout";
import AuthModal from "./components/AuthModal";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = () => setIsAuthModalOpen(false);

  const handleLogin = (userData) => {
    setUser(userData);
    handleCloseAuthModal();
  };

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Layout user={user} onOpenAuthModal={handleOpenAuthModal}>
              <Routes>
                {navItems.map(({ to, page: PageComponent }) => (
                  <Route 
                    key={to} 
                    path={to} 
                    element={
                      <PageComponent 
                        user={user} 
                        onOpenAuthModal={handleOpenAuthModal}
                      />
                    } 
                  />
                ))}
                <Route path="/viewer" element={<ViewerPage />} />
                <Route path="/model-viewer" element={<ModelViewerPage />} />
              </Routes>
            </Layout>
          </BrowserRouter>
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={handleCloseAuthModal}
            onLogin={handleLogin}
          />
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
import { Home, Upload, Cog, Box, Download, User, Type } from "lucide-react";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import ProcessingPage from "./pages/ProcessingPage";
import ViewerPage from "./pages/ViewerPage";
import ModelViewerPage from "./pages/ModelViewerPage";
import ExportPage from "./pages/ExportPage";
import UserDashboard from "./pages/UserDashboard";
import TextTo3DPage from "./pages/TextTo3DPage";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  {
    title: "Upload",
    to: "/upload",
    icon: <Upload className="h-4 w-4" />,
    page: <UploadPage />,
  },
  {
    title: "Text to 3D",
    to: "/text-to-3d",
    icon: <Type className="h-4 w-4" />,
    page: <TextTo3DPage />,
  },
  {
    title: "Processing",
    to: "/processing",
    icon: <Cog className="h-4 w-4" />,
    page: <ProcessingPage />,
  },
  {
    title: "Model Viewer",
    to: "/model-viewer",
    icon: <Box className="h-4 w-4" />,
    page: <ModelViewerPage />,
  },
  {
    title: "Export",
    to: "/export",
    icon: <Download className="h-4 w-4" />,
    page: <ExportPage />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <User className="h-4 w-4" />,
    page: <UserDashboard />,
  },
];
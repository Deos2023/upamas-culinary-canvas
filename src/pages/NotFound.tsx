import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 pt-20">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-3xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link to="/">
            <Home className="mr-2" size={20} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

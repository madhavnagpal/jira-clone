// import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { PenBox } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import UserLoading from "./user-loading";
import UserMenu from "./user-menu";
import BrandLogo from "./brand-logo";

async function Header() {
  //   await checkUser();

  return (
    <header className="backdrop-blur-md sticky top-0 z-50 border-b border-gray-800/50">
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/">
          <BrandLogo as="h2" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button variant="destructive" className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoading />
    </header>
  );
}

export default Header;

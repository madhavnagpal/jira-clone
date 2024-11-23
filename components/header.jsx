// import { checkUser } from "@/lib/checkUser";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { PenBox } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import UserLoading from "./user-loading";
import UserMenu from "./user-menu";

async function Header() {
  //   await checkUser();

  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent hover:from-red-400 hover:to-orange-400 transition-all duration-300">
              Scrum
            </span>
            <span className="text-gray-100 font-light tracking-wider">
              Pulse
            </span>
          </h1>
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

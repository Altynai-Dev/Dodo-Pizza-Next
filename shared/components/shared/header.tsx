'use client';

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";

interface Props {
  hasSearch: boolean;
  hasCart: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, hasSearch = true, hasCart=true }) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  const searchParams = useSearchParams();
  React.useEffect(() => {
    if(searchParams.has('paid')){
      setTimeout(() => {
        toast.success('Заказ успешно оплачен!')        
      }, 500);
    }
  }, []);
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={34} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Dodo Pizza Next</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней некуда</p>
          </div>
        </div>
        </Link>
        {hasSearch && (
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        )}

        <div className="flex items-center gap-3">
          <AuthModal open={openAuthModal} onCLose={()=> setOpenAuthModal(false)} />
          <ProfileButton onClickSignIn={()=>setOpenAuthModal(true)} />

            {hasCart && (
            <CartButton />
          )}
        </div>
      </Container>
    </header>
  );
};

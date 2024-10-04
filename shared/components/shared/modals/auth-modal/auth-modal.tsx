'use client';
import { Button, Dialog, DialogContent } from "@/shared/components/ui";
import { signIn } from "next-auth/react";
import React from "react";
import { LoginForm } from "./forms/login-form";

interface Props {
  open: boolean;
  onCLose: () => void;
}

export const AuthModal: React.FC<Props> = ({ open, onCLose }) => {
  const [type, setType] = React.useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    onCLose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        {type === "login" ? (
          <LoginForm onClose={handleClose} />
        ) : <h1>register</h1>}
        <hr />
        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            Github
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
                redirect: true,
              })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            Google
          </Button>
        </div>

        <Button variant="outline" onClick={onSwitchType} type="button" className='h-12'>
          {type === "login" ? "Регистрация" : "Войти"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

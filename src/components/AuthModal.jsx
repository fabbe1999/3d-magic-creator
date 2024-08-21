import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, Mail } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
  const [authMethod, setAuthMethod] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the auth data to your backend
    console.log('Auth submitted:', { authMethod, email, password });
    // After successful auth, you would close the modal and update the user state
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign Up / Log In</DialogTitle>
          <DialogDescription>
            Choose a method to authenticate or create an account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {!authMethod ? (
            <>
              <Button onClick={() => setAuthMethod('discord')} className="flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Continue with Discord
              </Button>
              <Button onClick={() => setAuthMethod('gmail')} className="flex items-center justify-center gap-2">
                <Mail size={20} />
                Continue with Gmail
              </Button>
              <Button onClick={() => setAuthMethod('email')} variant="outline">
                Use Email
              </Button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4"
              />
              {authMethod === 'email' && (
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mb-4"
                />
              )}
              <Button type="submit" className="w-full">
                {authMethod === 'email' ? 'Sign Up / Log In' : `Continue with ${authMethod}`}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
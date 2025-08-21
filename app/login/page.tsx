// Caminho: app/login/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Facebook, Twitter, Linkedin } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path fill="#4285F4" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12.5C5,8.75 8.36,5.73 12.19,5.73C14.03,5.73 15.6,6.33 16.84,7.38L19.09,5.18C17.22,3.46 14.86,2.5 12.19,2.5C6.92,2.5 3,6.58 3,12.5C3,18.42 6.92,22.5 12.19,22.5C17.6,22.5 21.5,18.51 21.5,12.75C21.5,12.06 21.43,11.58 21.35,11.1Z" />
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      router.push('/dashboard'); 
    }
  };

  return (
    <div className="min-h-screen w-full bg-light flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-light rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-primary mb-1">Entrar na sua conta</h2>
          <p className="text-gray-600 mb-8">Bem-vindo de volta!</p>

          <form onSubmit={handleLogin}>
            <div className="relative mb-6">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="email" placeholder="Endereço de e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            <div className="relative mb-4">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full pl-10 pr-4 py-3 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            
            <div className="flex justify-between items-center text-sm mb-6">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded text-secondary focus:ring-secondary border-gray-300" />
                Lembrar-me
              </label>
              <a href="#" className="font-medium text-secondary hover:underline">Esqueceu a senha?</a>
            </div>

            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

            <button type="submit" disabled={isLoading} className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-opacity-50 flex items-center justify-center">
              {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Ou entre com</p>
            <div className="flex justify-center gap-4">
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><GoogleIcon className="h-6 w-6" /></button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Facebook size={24} className="text-[#1877F2]" /></button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Twitter size={24} className="text-[#1DA1F2]" /></button>
              <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"><Linkedin size={24} className="text-[#0A66C2]" /></button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-primary to-secondary text-white text-center rounded-l-2xl">
            <h1 className="text-4xl font-bold mb-4">Sou novo aqui!</h1>
            <p className="mb-8 max-w-sm">Crie sua conta para começar a organizar, aprender e evoluir. Junte-se à comunidade Facillit e transforme sua jornada.</p>
            <div className="w-full flex flex-col gap-4">
                <Link href="/cadastro" passHref className="w-full">
                    <button className="w-full bg-accent text-primary font-bold py-3 px-10 rounded-lg hover:opacity-90 transition-transform transform hover:scale-105">
                        Criar sua conta Facillit
                    </button>
                </Link>
                <Link href="/acesso" passHref className="w-full">
                    <button className="w-full bg-white/20 text-white font-bold py-3 px-10 rounded-lg hover:bg-white/30 transition-all">
                        Tenho um código de acesso
                    </button>
                </Link>
            </div>
            <div className="mt-8 text-center w-full">
                <p className="text-white/70 text-sm mb-4">Ou crie sua conta com</p>
                <div className="flex justify-center gap-4">
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"><GoogleIcon className="h-6 w-6" /></button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"><Facebook size={24} className="text-white" /></button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"><Twitter size={24} className="text-white" /></button>
                  <button className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors"><Linkedin size={24} className="text-white" /></button>
                </div>
              </div>
        </div>

      </div>
    </div>
  );
}
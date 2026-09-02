'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiEye, FiEyeOff, FiLock, FiMail, FiShield } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { checkDatabaseAdmins, clearError, loginWithStaticAdmin } from '@/store/slices/authSlice';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { user, isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    dispatch(checkDatabaseAdmins());
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated && user) router.push('/admin');
  }, [isAuthenticated, user, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) return;

    try {
      await dispatch(loginWithStaticAdmin({ email, password })).unwrap();
      router.push('/admin');
    } catch (loginError) {
      console.error('Yönetici girişi başarısız:', loginError);
    }
  };

  return (
    <main className="admin-theme relative min-h-screen overflow-hidden bg-[#16110d] p-4 sm:p-6">
      <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[rgba(223,167,69,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[rgba(223,167,69,0.08)] blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center sm:min-h-[calc(100vh-3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="grid w-full overflow-hidden rounded-[34px] border border-white/10 bg-[#211a15] shadow-[0_40px_120px_rgba(0,0,0,0.42)] lg:grid-cols-[1.08fr_0.92fr]"
        >
          <section className="relative hidden min-h-[720px] overflow-hidden lg:block">
            <Image
              src="/resimler/sunny-life-yatay-solaryum.jpeg"
              alt="Sunny Life Solarium yönetim paneli"
              fill
              priority
              className="object-cover"
              sizes="55vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,11,0.08)_0%,rgba(20,15,11,0.30)_48%,rgba(20,15,11,0.94)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-12 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--lale-gold-soft)]">SUNNY LIFE YÖNETİM</p>
              <h1 className="mt-5 max-w-lg font-serif text-5xl leading-[1.04]">İçerikleriniz için güvenli kontrol alanı</h1>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/65">Galeri, haberler ve ziyaretçi mesajlarını tek panelden yönetin.</p>
            </div>
          </section>

          <section className="flex min-h-[660px] flex-col justify-center px-6 py-10 sm:px-12 lg:px-14">
            <div className="flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-2 text-xs text-white/50 transition hover:text-[var(--lale-gold-soft)]">
                <FiArrowLeft className="h-4 w-4" /> Siteye Dön
              </Link>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white/50">
                <FiShield className="h-3.5 w-3.5 text-[var(--lale-gold-soft)]" /> Korumalı Alan
              </span>
            </div>

            <div className="mt-12">
              <div className="flex h-24 w-24 items-center justify-center rounded-[26px] bg-white p-2 shadow-xl">
                <Image src="/solaryumlogo.png" alt="Sunny Life Solarium" width={1254} height={1254} className="h-full w-full object-contain" priority />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--lale-gold-soft)]">YÖNETİCİ GİRİŞİ</p>
              <h2 className="mt-4 font-serif text-4xl text-white">Tekrar hoş geldiniz</h2>
              <p className="mt-3 text-sm leading-7 text-white/55">Sunny Life yönetim paneline devam etmek için bilgilerinizi girin.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
              <label className="block space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">E-posta</span>
                <span className="relative block">
                  <FiMail className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--lale-gold-soft)]" />
                  <input
                    type="email"
                    required
                    autoComplete="username"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-2xl border border-white/12 bg-white/[0.05] py-4 pl-12 pr-5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[var(--lale-gold-soft)] focus:bg-white/[0.08]"
                    placeholder="admin@sunnylifesolarium.com"
                    disabled={isLoading}
                  />
                </span>
              </label>

              <label className="block space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">Şifre</span>
                <span className="relative block">
                  <FiLock className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--lale-gold-soft)]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-2xl border border-white/12 bg-white/[0.05] py-4 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[var(--lale-gold-soft)] focus:bg-white/[0.08]"
                    placeholder="••••••••••••"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 transition hover:text-[var(--lale-gold-soft)]"
                    aria-label={showPassword ? 'Şifreyi gizle' : 'Şifreyi göster'}
                  >
                    {showPassword ? <FiEyeOff className="h-4 w-4" /> : <FiEye className="h-4 w-4" />}
                  </button>
                </span>
              </label>

              {error && (
                <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-red-300/20 bg-red-300/10 px-4 py-3 text-center text-xs text-red-100">
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--lale-gold-soft)] px-6 py-4 text-sm font-semibold text-[#211a15] transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> Giriş yapılıyor...</> : <>Panele Giriş Yap <FiArrowRight className="h-4 w-4" /></>}
              </button>
            </form>

            <p className="mt-10 text-center text-[10px] uppercase tracking-[0.18em] text-white/30">Sunny Life Solarium &amp; Beauty · {new Date().getFullYear()}</p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

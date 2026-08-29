'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;
  const desktopLinkColor = isScrolled ? 'text-[var(--dream-dark)]' : 'text-white';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Close menu on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Simple body scroll lock without jumping to top
    if (isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('-', '')));
      }
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Admin sayfasında Header'ı gösterme
  if (isAdminPage) {
    return null;
  }

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-[20px] transition-all duration-300 ${
      isScrolled
        ? 'border-black/5 bg-[rgba(247,241,233,0.20)]'
        : 'border-white/10 bg-black/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative bg-transparent transition-all duration-300">
              <Image 
                src="/solaryumlogo.png"
                alt="Sunny Life Solarium & Beauty Logo"
                width={1254}
                height={1254}
                className={`h-12 w-12 object-contain transition-all duration-300 group-hover:scale-[1.02] sm:h-14 sm:w-14 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--lale-gold)] ${
              desktopLinkColor
            }`}>
              Ana Sayfa
            </Link>
            <Link href="/hizmetlerimiz" className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--lale-gold)] ${
              desktopLinkColor
            }`}>
              Hizmetlerimiz
            </Link>
            <Link href="/galeri" className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--lale-gold)] ${
              desktopLinkColor
            }`}>
              Galeri
            </Link>
            <Link href="/haberler" className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--lale-gold)] ${
              desktopLinkColor
            }`}>
              Haberler
            </Link>
            <Link href="/hakkimizda" className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--lale-gold)] ${
              desktopLinkColor
            }`}>
              Hakkımızda
            </Link>
            <Link href="/iletisim" className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--lale-gold)] ${
              desktopLinkColor
            }`}>
              İletişim
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`rounded-full border p-2 transition-colors duration-200 lg:hidden ${
              isScrolled
                ? 'border-[rgba(33,26,21,0.24)] bg-transparent text-[var(--dream-dark)] hover:bg-black/5'
                : 'border-white/30 bg-transparent text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 my-1 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Portal */}
        {isMenuOpen && typeof window !== 'undefined' && createPortal(
          <div className="lg:hidden fixed inset-0 z-[9999] bg-[var(--lale-emerald-deep)] text-[var(--lale-ivory)]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(212,175,55,0.26)]">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image 
                  src="/solaryumlogo.png"
                  alt="Sunny Life Solarium & Beauty Logo"
                  width={1254}
                  height={1254}
                  className="h-14 w-14 object-contain brightness-0 invert"
                  priority
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-[var(--lale-gold)] hover:bg-[rgba(212,175,55,0.10)] transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-6">
              <div className="space-y-3">
                <Link 
                  href="/" 
                  className="block border-b border-[rgba(212,175,55,0.16)] px-4 py-4 text-sm font-medium tracking-[0.12em] text-[var(--lale-ivory)] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/hizmetlerimiz" 
                  className="block border-b border-[rgba(212,175,55,0.16)] px-4 py-4 text-sm font-medium tracking-[0.12em] text-[var(--lale-ivory)] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hizmetlerimiz
                </Link>
                <Link 
                  href="/galeri" 
                  className="block border-b border-[rgba(212,175,55,0.16)] px-4 py-4 text-sm font-medium tracking-[0.12em] text-[var(--lale-ivory)] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galeri
                </Link>
                <Link 
                  href="/haberler" 
                  className="block border-b border-[rgba(212,175,55,0.16)] px-4 py-4 text-sm font-medium tracking-[0.12em] text-[var(--lale-ivory)] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Haberler
                </Link>
                <Link 
                  href="/hakkimizda" 
                  className="block border-b border-[rgba(212,175,55,0.16)] px-4 py-4 text-sm font-medium tracking-[0.12em] text-[var(--lale-ivory)] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
                <Link 
                  href="/iletisim" 
                  className="block border-b border-[rgba(212,175,55,0.16)] px-4 py-4 text-sm font-medium tracking-[0.12em] text-[var(--lale-ivory)] transition-colors duration-200 hover:text-[var(--lale-gold)]" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </Link>
              </div>
            </nav>
          </div>,
          document.body
        )}
      </div>
    </header>
  );
};

export default Header;

'use client'; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants/navigation';
import styles from './Header.module.css';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  const handleMobileDropdownToggle = (label: string) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>F</div>
          <span>Facillit</span>
        </Link>

        <nav className={`${styles.nav} ${styles.desktopNav}`} role="navigation">
          {NAVIGATION_LINKS.map((item) => (
            <div key={item.label} className={styles.navItem}>
              <Link href={item.href || '#'} className={styles.navLink}>
                {item.label}
                {item.dropdownContent && <ChevronDown size={16} className={styles.dropdownArrow} />}
              </Link>
              {item.dropdownContent && (
                <div className={styles.megaDropdown}>
                  <div className={`${styles.megaContent} ${styles[item.dropdownContent.columns]}`}>
                    {item.dropdownContent.sections.map((section) => (
                      <div key={section.title}>
                        <div className={styles.megaSection}>
                          <h3>{section.title}</h3>
                          <ul>
                            {section.links.map((link) => (
                              <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
                            ))}
                          </ul>
                        </div>
                        {section.highlight && (
                            <div className={styles.megaHighlight}>
                                <h4>{section.highlight.title}</h4>
                                <p>{section.highlight.description}</p>
                            </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        
        <div className={styles.rightSection}>
            {/* <<< MUDANÇA AQUI >>> */}
            <Link href="/login" className={`${styles.ctaButton} ${styles.desktopCta}`}>
                Começar Agora
            </Link>
            <div 
                className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
                onClick={toggleMobileMenu}
                role="button"
                tabIndex={0}
            >
                <div className={styles.hamburgerLine}></div>
                <div className={styles.hamburgerLine}></div>
                <div className={styles.hamburgerLine}></div>
            </div>
        </div>
      </div>

      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileNavContent}>
            {NAVIGATION_LINKS.map(item => (
                <div key={item.label} className={styles.mobileNavItem}>
                    <div className={styles.mobileNavLink} onClick={() => item.dropdownContent && handleMobileDropdownToggle(item.label)}>
                        {item.href ? <Link href={item.href} onClick={closeMobileMenu}>{item.label}</Link> : <span>{item.label}</span>}
                        {item.dropdownContent && <ChevronDown size={20} style={{ transform: activeMobileDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}/>}
                    </div>
                    {item.dropdownContent && (
                        <div className={`${styles.mobileDropdown} ${activeMobileDropdown === item.label ? styles.active : ''}`}>
                            <div className={styles.mobileDropdownContent}>
                                {item.dropdownContent.sections.map(section => (
                                    <div key={section.title} style={{marginBottom: '1rem'}}>
                                        <h4>{section.title}</h4>
                                        <ul>
                                            {section.links.map(link => (
                                                <li key={link.label}><Link href={link.href} onClick={closeMobileMenu}>{link.label}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
            {/* <<< E MUDANÇA AQUI >>> */}
             <div className={`${styles.mobileNavItem} ${styles.mobileCta}`}>
                <Link href="/login" className={`${styles.ctaButton} ${styles.mobileCtaButton}`} onClick={closeMobileMenu}>
                    Começar Agora
                </Link>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core'; 
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router'; 
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar implements OnInit { 
    private translate = inject(TranslateService);
    private router = inject(Router); 
    private platformId = inject(PLATFORM_ID); 

    isMenuOpen = false;
    currentLang = 'en';

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            const savedLang = localStorage.getItem('language');
            if (savedLang) {
                this.currentLang = savedLang;
                this.translate.use(savedLang);
            } else {
                const current = this.translate.currentLang;
                this.currentLang = typeof current === 'function' ? (current() || 'en') : (current || 'en');
            }
        }
    }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
    }

    scrollToSection(sectionId: string): void {
        this.closeMenu();
        const currentUrl = this.router.url.split('#')[0];

        if (currentUrl === '/' || currentUrl === '') {
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        } else {
            this.router.navigate(['/']).then(() => {
                setTimeout(() => {
                    document.getElementById(sectionId)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 0); 
            });
        }
    }

    switchLanguage(lang: string): void {
        this.translate.use(lang);
        this.currentLang = lang;
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('language', lang);
        }
        this.closeMenu();
    }
}
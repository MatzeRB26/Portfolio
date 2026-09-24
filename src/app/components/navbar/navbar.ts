import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar {
    private translate = inject(TranslateService);

    isMenuOpen = false;
    currentLang = 'en';

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
    }

    scrollToSection(sectionId: string): void {
        this.closeMenu();

        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 0);
    }

    switchLanguage(lang: string): void {
        this.translate.use(lang);
        this.currentLang = lang;
        this.closeMenu();
    }
}
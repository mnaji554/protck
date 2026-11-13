<!DOCTYPE html>
<html lang="{{ $locale }}" dir="{{ $locale === 'ar' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ __('site.hero.description') }}">
    <title>{{ __('site.title') }}</title>
    <link rel="stylesheet" href="{{ asset('css/site.css') }}">
</head>
<body>
    <header class="site-header">
        <div class="container header-content">
            <a class="brand" href="#home" aria-label="Protck">
                <img src="{{ asset('images/logo.png') }}" alt="">
                <span>Protck</span>
            </a>

            <nav class="desktop-nav" aria-label="{{ __('site.nav.label') }}">
                <a href="#home">{{ __('site.nav.home') }}</a>
                <a href="#services">{{ __('site.nav.services') }}</a>
                <a href="#why-us">{{ __('site.nav.why_us') }}</a>
                <a href="#projects">{{ __('site.nav.projects') }}</a>
                <a href="#partners">{{ __('site.nav.partners') }}</a>
                <a href="#contact">{{ __('site.nav.contact') }}</a>
                <form method="POST" action="{{ route('language.set', $locale === 'ar' ? 'en' : 'ar') }}">
                    @csrf
                    <button class="language-button" type="submit">{{ $locale === 'ar' ? 'English' : 'العربية' }}</button>
                </form>
            </nav>

            <details class="mobile-nav">
                <summary aria-label="{{ __('site.nav.menu') }}"><span></span><span></span><span></span></summary>
                <nav aria-label="{{ __('site.nav.label') }}">
                    <a href="#home">{{ __('site.nav.home') }}</a>
                    <a href="#services">{{ __('site.nav.services') }}</a>
                    <a href="#why-us">{{ __('site.nav.why_us') }}</a>
                    <a href="#projects">{{ __('site.nav.projects') }}</a>
                    <a href="#partners">{{ __('site.nav.partners') }}</a>
                    <a href="#contact">{{ __('site.nav.contact') }}</a>
                    <form method="POST" action="{{ route('language.set', $locale === 'ar' ? 'en' : 'ar') }}">
                        @csrf
                        <button class="language-button" type="submit">{{ $locale === 'ar' ? 'English' : 'العربية' }}</button>
                    </form>
                </nav>
            </details>
        </div>
    </header>

    <main>
        <section class="hero" id="home">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">{{ __('site.hero.badge') }}</p>
                    <h1>
                        {{ __('site.hero.title_before') }}
                        <span class="gradient-text">{{ __('site.hero.title_highlight') }}</span>
                        {{ __('site.hero.title_after') }}
                    </h1>
                    <p class="hero-description">{{ __('site.hero.description') }}</p>
                    <div class="hero-actions">
                        <a class="button button-primary" href="#services">{{ __('site.hero.cta') }}</a>
                        <a class="text-link" href="#contact">{{ __('site.hero.secondary') }}</a>
                    </div>
                </div>
                <div class="hero-art" aria-hidden="true">
                    <div class="hero-logo-card">
                        <img src="{{ asset('images/logo.png') }}" alt="">
                    </div>
                    <span class="hero-orbit orbit-one"></span>
                    <span class="hero-orbit orbit-two"></span>
                </div>
            </div>
        </section>

        <section class="section section-muted" id="services">
            <div class="container">
                <div class="section-heading">
                    <p class="section-kicker">{{ __('site.services.kicker') }}</p>
                    <h2>{{ __('site.services.title') }}</h2>
                    <p>{{ __('site.services.description') }}</p>
                </div>
                <div class="card-grid">
                    @forelse ($services as $service)
                        <article class="content-card service-card">
                            <span class="card-icon" aria-hidden="true">✦</span>
                            <h3>{{ $locale === 'ar' ? ($service->title_ar ?: $service->name) : $service->name }}</h3>
                            <p>{{ $locale === 'ar' ? ($service->description_ar ?: $service->description) : $service->description }}</p>
                        </article>
                    @empty
                        <p class="empty-state">{{ __('site.services.empty') }}</p>
                    @endforelse
                </div>
            </div>
        </section>

        <section class="section" id="why-us">
            <div class="container">
                <div class="section-heading">
                    <p class="section-kicker">{{ __('site.why_us.kicker') }}</p>
                    <h2>{{ __('site.why_us.title') }}</h2>
                    <p>{{ __('site.why_us.description') }}</p>
                </div>
                <div class="card-grid">
                    @forelse ($reasons as $reason)
                        <article class="content-card reason-card">
                            <span class="card-icon" aria-hidden="true">✓</span>
                            <h3>{{ $locale === 'ar' ? ($reason->title_ar ?: $reason->title) : $reason->title }}</h3>
                            <p>{{ $locale === 'ar' ? ($reason->description_ar ?: $reason->description) : $reason->description }}</p>
                        </article>
                    @empty
                        <p class="empty-state">{{ __('site.why_us.empty') }}</p>
                    @endforelse
                </div>
            </div>
        </section>

        <section class="section section-muted" id="projects">
            <div class="container">
                <div class="section-heading">
                    <p class="section-kicker">{{ __('site.projects.kicker') }}</p>
                    <h2>{{ __('site.projects.title') }}</h2>
                    <p>{{ __('site.projects.description') }}</p>
                </div>
                <div class="card-grid project-grid">
                    @forelse ($projects as $project)
                        <article class="content-card project-card">
                            @if ($project->image)
                                <img class="project-image" src="{{ $project->image }}" alt="{{ $locale === 'ar' ? ($project->title_ar ?: $project->title) : $project->title }}" loading="lazy">
                            @else
                                <div class="project-placeholder" aria-hidden="true">Protck</div>
                            @endif
                            <div class="project-content">
                                <div class="card-title-row">
                                    <h3>{{ $locale === 'ar' ? ($project->title_ar ?: $project->title) : $project->title }}</h3>
                                    @if ($project->status)
                                        <span class="status-badge">{{ $project->status }}</span>
                                    @endif
                                </div>
                                <p>{{ $locale === 'ar' ? ($project->description_ar ?: $project->description) : $project->description }}</p>
                                @if ($project->link)
                                    <a class="text-link" href="{{ $project->link }}" target="_blank" rel="noopener noreferrer">{{ __('site.projects.view') }}</a>
                                @endif
                            </div>
                        </article>
                    @empty
                        <p class="empty-state">{{ __('site.projects.empty') }}</p>
                    @endforelse
                </div>
            </div>
        </section>

        <section class="section" id="partners">
            <div class="container">
                <div class="section-heading">
                    <p class="section-kicker">{{ __('site.partners.kicker') }}</p>
                    <h2>{{ __('site.partners.title') }}</h2>
                    <p>{{ __('site.partners.description') }}</p>
                </div>
                <div class="card-grid partner-grid">
                    @forelse ($partners as $partner)
                        <article class="content-card partner-card">
                            @if ($partner->logo)
                                <img class="partner-logo" src="{{ $partner->logo }}" alt="{{ $locale === 'ar' ? ($partner->name_ar ?: $partner->name) : $partner->name }}" loading="lazy">
                            @else
                                <div class="partner-monogram" aria-hidden="true">{{ mb_substr($locale === 'ar' ? ($partner->name_ar ?: $partner->name) : $partner->name, 0, 1) }}</div>
                            @endif
                            <h3>{{ $locale === 'ar' ? ($partner->name_ar ?: $partner->name) : $partner->name }}</h3>
                            @if ($partner->description)
                                <p>{{ $locale === 'ar' ? ($partner->description_ar ?: $partner->description) : $partner->description }}</p>
                            @endif
                            @if ($partner->website)
                                <a class="text-link" href="{{ $partner->website }}" target="_blank" rel="noopener noreferrer">{{ __('site.partners.visit') }}</a>
                            @endif
                        </article>
                    @empty
                        <p class="empty-state">{{ __('site.partners.empty') }}</p>
                    @endforelse
                </div>
            </div>
        </section>

        <section class="section section-muted" id="contact">
            <div class="container">
                <div class="section-heading">
                    <p class="section-kicker">{{ __('site.contact.kicker') }}</p>
                    <h2>{{ __('site.contact.title') }}</h2>
                    <p>{{ __('site.contact.description') }}</p>
                </div>
                <div class="contact-grid">
                    <div class="contact-details">
                        <a href="tel:+966503653836"><span class="contact-symbol" aria-hidden="true">☎</span><span><strong>{{ __('site.contact.phone') }}</strong><br>+966-503653836</span></a>
                        <a href="mailto:info@protck.com"><span class="contact-symbol" aria-hidden="true">✉</span><span><strong>{{ __('site.contact.email') }}</strong><br>info@protck.com</span></a>
                        <a href="https://protck.com"><span class="contact-symbol" aria-hidden="true">◎</span><span><strong>{{ __('site.contact.website') }}</strong><br>protck.com</span></a>
                        <div><span class="contact-symbol" aria-hidden="true">⌖</span><span><strong>{{ __('site.contact.location') }}</strong><br>{{ __('site.contact.location_value') }}</span></div>
                    </div>

                    <form class="contact-form" method="POST" action="{{ route('contact.submit') }}">
                        @csrf
                        @if (session('status'))
                            <p class="form-success" role="status">{{ session('status') }}</p>
                        @endif
                        <div class="form-field">
                            <label for="name">{{ __('site.contact.name') }}</label>
                            <input id="name" name="name" type="text" value="{{ old('name') }}" autocomplete="name" required>
                            @error('name') <span class="field-error">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-field">
                            <label for="email">{{ __('site.contact.email_address') }}</label>
                            <input id="email" name="email" type="email" value="{{ old('email') }}" autocomplete="email" required>
                            @error('email') <span class="field-error">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-field">
                            <label for="phone">{{ __('site.contact.phone_number') }}</label>
                            <input id="phone" name="phone" type="tel" value="{{ old('phone') }}" autocomplete="tel">
                            @error('phone') <span class="field-error">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-field">
                            <label for="subject">{{ __('site.contact.subject') }}</label>
                            <input id="subject" name="subject" type="text" value="{{ old('subject') }}" required>
                            @error('subject') <span class="field-error">{{ $message }}</span> @enderror
                        </div>
                        <div class="form-field">
                            <label for="message">{{ __('site.contact.message') }}</label>
                            <textarea id="message" name="message" rows="5" required>{{ old('message') }}</textarea>
                            @error('message') <span class="field-error">{{ $message }}</span> @enderror
                        </div>
                        <button class="button button-primary submit-button" type="submit">{{ __('site.contact.send') }}</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <div class="container footer-content">
            <a class="brand footer-brand" href="#home"><img src="{{ asset('images/logo.png') }}" alt=""><span>Protck</span></a>
            <p>{{ __('site.footer.tagline') }}</p>
            <p>{{ __('site.footer.copyright') }}</p>
        </div>
    </footer>
</body>
</html>

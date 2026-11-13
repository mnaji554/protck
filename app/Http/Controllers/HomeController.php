<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use App\Models\Project;
use App\Models\Service;
use App\Models\WhyUsItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(Request $request): View
    {
        $locale = $request->session()->get('locale', 'ar');
        app()->setLocale($locale);

        return view('welcome', [
            'locale' => $locale,
            'services' => Service::query()->orderBy('id')->get(),
            'reasons' => WhyUsItem::query()->orderBy('id')->get(),
            'projects' => Project::query()->orderBy('id')->get(),
            'partners' => Partner::query()->orderBy('id')->get(),
        ]);
    }

    public function setLanguage(Request $request, string $locale): RedirectResponse
    {
        abort_unless(in_array($locale, ['ar', 'en'], true), 404);

        $request->session()->put('locale', $locale);

        return redirect()->route('home');
    }
}

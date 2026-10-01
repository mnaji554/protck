<?php

use App\Models\Partner;
use App\Models\Project;
use App\Models\Service;
use App\Models\WhyUsItem;
use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/contact/submit', [ContactController::class, 'store']);

Route::get('/services', function (Request $request) {
    $lang = $request->query('lang', 'ar');

    $services = Service::query()->orderBy('id')->get()->map(function ($service) use ($lang) {
        $isArabic = $lang === 'ar';

        return [
            'id' => $service->id,
            'name' => $isArabic ? ($service->title_ar ?? $service->name ?? '') : ($service->name ?? ''),
            'title_ar' => $service->title_ar,
            'description' => $isArabic ? ($service->description_ar ?? $service->description ?? '') : ($service->description ?? ''),
            'description_ar' => $service->description_ar,
            'icon' => $service->icon,
            'slug' => $service->slug ?? null,
            'service_type' => $service->service_type ?? null,
        ];
    });

    return response()->json($services);
});

Route::get('/why-us', function (Request $request) {
    $lang = $request->query('lang', 'ar');

    $items = WhyUsItem::query()->orderBy('id')->get()->map(function ($item) use ($lang) {
        return [
            'id' => $item->id,
            'title' => $lang === 'en' ? ($item->title ?? '') : ($item->title_ar ?? $item->title ?? ''),
            'title_ar' => $item->title_ar,
            'description' => $lang === 'en' ? ($item->description ?? '') : ($item->description_ar ?? $item->description ?? ''),
            'description_ar' => $item->description_ar,
            'icon' => $item->icon,
        ];
    });

    return response()->json($items);
});

Route::get('/projects', function (Request $request) {
    $lang = $request->query('lang', 'ar');

    $projects = Project::query()->orderBy('id')->get()->map(function ($project) use ($lang) {
        $isArabic = $lang === 'ar';

        return [
            'id' => $project->id,
            'title' => $isArabic ? ($project->title_ar ?? $project->title ?? '') : ($project->title ?? ''),
            'title_ar' => $project->title_ar,
            'description' => $isArabic ? ($project->description_ar ?? $project->description ?? '') : ($project->description ?? ''),
            'description_ar' => $project->description_ar,
            'image' => $project->image,
            'link' => $project->link,
            'status' => $project->status,
        ];
    });

    return response()->json($projects);
});

Route::get('/partners', function (Request $request) {
    $lang = $request->query('lang', 'ar');

    $partners = Partner::query()->orderBy('id')->get()->map(function ($partner) use ($lang) {
        $isArabic = $lang === 'ar';

        return [
            'id' => $partner->id,
            'name' => $isArabic ? ($partner->name_ar ?? $partner->name ?? '') : ($partner->name ?? ''),
            'name_ar' => $partner->name_ar,
            'description' => $isArabic ? ($partner->description_ar ?? $partner->description ?? '') : ($partner->description ?? ''),
            'description_ar' => $partner->description_ar,
            'logo' => $partner->logo,
            'website' => $partner->website,
        ];
    });

    return response()->json($partners);
});

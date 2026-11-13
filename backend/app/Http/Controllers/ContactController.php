<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse|RedirectResponse
    {
        if (! $request->expectsJson()) {
            app()->setLocale($request->session()->get('locale', 'ar'));
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:10000'],
        ]);

        Contact::create([...$validated, 'status' => 'new']);

        if ($request->expectsJson()) {
            return response()->json(['message' => 'Your message has been received.'], 201);
        }

        return redirect()->to(route('home').'#contact')->with('status', __('site.contact.success'));
    }
}

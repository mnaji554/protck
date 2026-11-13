<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/language/{locale}', [HomeController::class, 'setLanguage'])->name('language.set');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.submit');

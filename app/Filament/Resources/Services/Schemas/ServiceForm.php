<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(),
                TextInput::make('title_ar')->label('Arabic Title'),
                Textarea::make('description')->required(),
                Textarea::make('description_ar')->label('Arabic Description'),
                TextInput::make('icon')->label('Icon'),
            ]);
    }
}

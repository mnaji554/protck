<?php

namespace App\Filament\Resources\Partners\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class PartnerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->required(),
                TextInput::make('name_ar')->label('Arabic Name'),
                Textarea::make('description')->label('Description'),
                Textarea::make('description_ar')->label('Arabic Description'),
                TextInput::make('logo')->label('Logo URL'),
                TextInput::make('website')->label('Website'),
            ]);
    }
}

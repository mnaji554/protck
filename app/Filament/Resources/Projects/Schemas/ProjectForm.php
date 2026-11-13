<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')->required(),
                TextInput::make('title_ar')->label('Arabic Title'),
                Textarea::make('description')->required(),
                Textarea::make('description_ar')->label('Arabic Description'),
                TextInput::make('image')->label('Image URL'),
                TextInput::make('link')->label('Project Link'),
                TextInput::make('status')->label('Status'),
            ]);
    }
}

<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ServiceInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name'),
                TextEntry::make('title_ar')->label('Arabic Title'),
                TextEntry::make('description')->columnSpanFull(),
                TextEntry::make('description_ar')->label('Arabic Description')->columnSpanFull(),
                TextEntry::make('icon'),
            ]);
    }
}

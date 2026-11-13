<?php

namespace App\Filament\Resources\Partners\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class PartnerInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name'),
                TextEntry::make('name_ar')->label('Arabic Name'),
                TextEntry::make('description')->columnSpanFull(),
                TextEntry::make('description_ar')->label('Arabic Description')->columnSpanFull(),
                TextEntry::make('logo')->label('Logo URL'),
                TextEntry::make('website')->label('Website'),
            ]);
    }
}

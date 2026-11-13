<?php

namespace App\Filament\Resources\WhyUsItems\Pages;

use App\Filament\Resources\WhyUsItems\WhyUsItemResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListWhyUsItems extends ListRecords
{
    protected static string $resource = WhyUsItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}

<?php

namespace App\Filament\Resources\WhyUsItems\Pages;

use App\Filament\Resources\WhyUsItems\WhyUsItemResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewWhyUsItem extends ViewRecord
{
    protected static string $resource = WhyUsItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}

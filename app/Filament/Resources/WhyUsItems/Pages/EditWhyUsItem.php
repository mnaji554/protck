<?php

namespace App\Filament\Resources\WhyUsItems\Pages;

use App\Filament\Resources\WhyUsItems\WhyUsItemResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditWhyUsItem extends EditRecord
{
    protected static string $resource = WhyUsItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
        ];
    }
}

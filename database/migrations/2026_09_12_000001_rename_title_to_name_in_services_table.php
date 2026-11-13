<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (Schema::hasColumn('services', 'title') && ! Schema::hasColumn('services', 'name')) {
            Schema::table('services', function (Blueprint $table) {
                $table->renameColumn('title', 'name');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasColumn('services', 'name') && ! Schema::hasColumn('services', 'title')) {
            Schema::table('services', function (Blueprint $table) {
                $table->renameColumn('name', 'title');
            });
        }
    }
};

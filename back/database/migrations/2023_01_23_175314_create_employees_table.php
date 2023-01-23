<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('userId')->constrained('users')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->string('name')->default('Имя');
            $table->string('patronymic')->default('Отчество');
            $table->string('surname')->default('Фамилия');
            $table->string('position')->default('должность');
            $table->text('description')->default('описание');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};

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
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->nullable()
                    ->constrained('doctors')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('patient_id')->nullable()
                    ->constrained('patients')->onUpdate('cascade')->onDelete('cascade');
            $table->dateTime('record_time', $precision = 0)->nullable();
            $table->dateTime('end_time', $precision = 0)->nullable();
            $table->time('receipt_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patient_records');
    }
};

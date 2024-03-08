<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class Socialite extends Model
{
    use HasFactory, HasRoles;

    protected $table = "socialite";

    protected $fillable = [
        'user_id',
        'provider_id',
        'provider_name',
        'provider_token',
        'provider_refresh_token',
    ];


    public function user() {
        return $this->belongsTo(User::class);
    }
}

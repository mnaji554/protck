<?php

namespace Tests\Feature;

use App\Models\Service;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HomePageTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_renders_database_content_in_the_selected_language(): void
    {
        Service::create([
            'name' => 'Web development',
            'title_ar' => 'تطوير الويب',
            'description' => 'Web solutions for growing teams.',
            'description_ar' => 'حلول ويب للفرق النامية.',
        ]);

        $this->get('/')
            ->assertOk()
            ->assertSee('dir="rtl"', false)
            ->assertSee('تطوير الويب')
            ->assertSee('حلول ويب للفرق النامية.');

        $this->withSession(['locale' => 'en'])
            ->get('/')
            ->assertOk()
            ->assertSee('lang="en"', false)
            ->assertSee('Web development')
            ->assertSee('Web solutions for growing teams.');
    }

    public function test_visitors_can_switch_the_site_language(): void
    {
        $this->post('/language/en')
            ->assertRedirect(route('home'))
            ->assertSessionHas('locale', 'en');
    }
}

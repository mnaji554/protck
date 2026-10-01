<?php

namespace Tests\Feature;

use App\Models\Contact;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactSubmissionTest extends TestCase
{
    use RefreshDatabase;

    public function test_client_can_submit_a_contact_message(): void
    {
        $response = $this->postJson('/api/contact/submit', [
            'name' => 'A Client',
            'email' => 'client@example.com',
            'phone' => '+966500000000',
            'subject' => 'Project inquiry',
            'message' => 'I would like to discuss a project.',
        ]);

        $response->assertCreated()
            ->assertJsonPath('message', 'Your message has been received.');

        $this->assertDatabaseHas('contacts', [
            'email' => 'client@example.com',
            'subject' => 'Project inquiry',
            'status' => 'new',
        ]);
    }

    public function test_contact_submission_requires_a_valid_email(): void
    {
        $response = $this->postJson('/api/contact/submit', [
            'name' => 'A Client',
            'email' => 'not-an-email',
            'subject' => 'Project inquiry',
            'message' => 'Hello.',
        ]);

        $response->assertUnprocessable()
            ->assertJsonValidationErrors(['email']);

        $this->assertSame(0, Contact::count());
    }
}
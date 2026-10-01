<?php

namespace Database\Seeders;

use App\Models\Partner;
use App\Models\Project;
use App\Models\Service;
use App\Models\User;
use App\Models\WhyUsItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'password' => bcrypt('112233'),
            ]
        );

        Service::query()->delete();

        Service::insert([
            [
                'name' => 'Odoo ERP Implementation',
                'title_ar' => 'تنفيذ نظام Odoo ERP',
                'description' => 'End-to-end Odoo ERP setup, customization, and deployment for growing businesses.',
                'description_ar' => 'تنفيذ وتخصيص ونشر نظام Odoo ERP بشكل كامل للشركات النامية.',
                'icon' => 'FaCogs',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'System & Module Development',
                'title_ar' => 'تطوير الأنظمة والوحدات',
                'description' => 'Custom system and module development to streamline business operations and workflows.',
                'description_ar' => 'تطوير أنظمة ووحدات مخصصة لتسهيل عمليات العمل وسير الأعمال.',
                'icon' => 'FaCode',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Website Design & Development',
                'title_ar' => 'تصميم وتطوير المواقع',
                'description' => 'Modern, responsive websites and web applications tailored to your brand and goals.',
                'description_ar' => 'مواقع وتطبيقات ويب حديثة ومتجاوبة مصممة خصيصًا لعلامتك التجارية وأهدافك.',
                'icon' => 'FaGlobe',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Mobile Applications',
                'title_ar' => 'تطبيقات الهاتف المحمول',
                'description' => 'User-friendly mobile applications designed for engagement, productivity, and scale.',
                'description_ar' => 'تطبيقات جوال سهلة الاستخدام مصممة للارتباط والإنتاجية والتوسع.',
                'icon' => 'FaMobileAlt',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Internal Communication Programs',
                'title_ar' => 'برامج التواصل الداخلي',
                'description' => 'Effective internal communication solutions that strengthen team alignment and culture.',
                'description_ar' => 'حلول اتصال داخلية فعالة تعزز التوافق الثقافي والمهني داخل الفريق.',
                'icon' => 'FaUsers',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Business & HR Solutions',
                'title_ar' => 'حلول الأعمال والموارد البشرية',
                'description' => 'Practical business and HR system support for recruitment, operations, and workforce optimization.',
                'description_ar' => 'دعم عملي لحلول الأعمال والموارد البشرية لتوظيف القوى العاملة وتحسين التشغيل.',
                'icon' => 'FaBriefcase',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        WhyUsItem::query()->delete();

        WhyUsItem::insert([
            [
                'title' => 'Qualified and experienced team',
                'title_ar' => 'فريق عمل مؤهل وذو خبرة',
                'description' => 'Our team brings together skilled professionals with proven experience in delivering successful projects.',
                'description_ar' => 'فريقنا يجمع بين محترفين مهرة وذوي خبرة مثبتة في تنفيذ المشاريع بنجاح.',
                'icon' => 'FaUsers',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'High-quality project execution',
                'title_ar' => 'جودة عالية في تنفيذ المشاريع',
                'description' => 'We focus on precision, reliability, and excellence at every stage of the project lifecycle.',
                'description_ar' => 'نركز على الدقة والاعتمادية والتميز في كل مرحلة من مراحل تنفيذ المشروع.',
                'icon' => 'FaRocket',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Commitment to deadlines',
                'title_ar' => 'الالتزام بالمواعيد',
                'description' => 'We respect schedules and work diligently to ensure timely delivery without compromising quality.',
                'description_ar' => 'نحترم الجداول الزمنية ونعمل بجد لضمان التسليم في الوقت المناسب دون المساس بالجودة.',
                'icon' => 'FaHourglass',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Innovative solutions for client needs',
                'title_ar' => 'حلول مبتكرة تناسب احتياجات العميل',
                'description' => 'We design innovative approaches that align with your goals, challenges, and business context.',
                'description_ar' => 'نصمم حلولاً مبتكرة تتماشى مع أهدافك وتحدياتك والسياق التجاري الخاص بك.',
                'icon' => 'FaChartLine',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Competitive pricing',
                'title_ar' => 'أسعار تنافسية',
                'description' => 'We offer value-driven solutions that balance quality, efficiency, and budget.',
                'description_ar' => 'نقدم حلولاً ذات قيمة عالية توازن بين الجودة والكفاءة والميزانية.',
                'icon' => 'FaLock',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Ongoing technical support',
                'title_ar' => 'دعم فني مستمر',
                'description' => 'Our team remains available to provide continuous support before and after delivery.',
                'description_ar' => 'فريقنا متوفر دائمًا لتقديم الدعم المستمر قبل التسليم وبعده.',
                'icon' => 'FaHeadset',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Focus on measurable results',
                'title_ar' => 'التركيز على تحقيق نتائج قابلة للقياس',
                'description' => 'We measure success through clear KPIs, realistic reporting, and meaningful business impact.',
                'description_ar' => 'نقيس النجاح عبر مؤشرات أداء واضحة وتقارير واقعية وتأثير تجاري فعلي.',
                'icon' => 'FaChartLine',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        Project::query()->delete();

        Project::insert([
            [
                'title' => 'ERP Digital Transformation',
                'title_ar' => 'التحول الرقمي ERP',
                'description' => 'A comprehensive business modernization project that unified operations, reporting, and workflows across multiple departments.',
                'description_ar' => 'مشروع تحديث شامل للشركات يضم العمليات والتقارير وسير العمل عبر多个 الأقسام.',
                'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
                'link' => '#',
                'status' => 'Completed',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Customer Portal Platform',
                'title_ar' => 'منصة البوابة الإلكترونية للعملاء',
                'description' => 'A customer-facing portal built to streamline requests, support, and progress tracking through a simple interface.',
                'description_ar' => 'بوابة للعملاء تم تصميمها لتبسيط الطلبات والدعم وتتبع التقدم من خلال واجهة سهلة الاستخدام.',
                'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
                'link' => '#',
                'status' => 'Live',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Operations Automation Suite',
                'title_ar' => 'مجموعة أتمتة العمليات',
                'description' => 'An automation platform that reduced manual work, improved consistency, and accelerated internal efficiency.',
                'description_ar' => 'منصة أتمتة قللت الأعمال اليدوية وحسّنت التناسق وسرعت الكفاءة الداخلية.',
                'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
                'link' => '#',
                'status' => 'Ongoing',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        Partner::query()->delete();

        Partner::insert([
            [
                'name' => 'Odoo',
                'name_ar' => 'أودو',
                'description' => 'Strategic business software partner helping us deliver streamlined ERP workflows.',
                'description_ar' => 'شريك استراتيجي في البرمجيات التجارية يساعدنا على تقديم تدفقات ERP مبسطة.',
                'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Odoo_logo.svg',
                'website' => 'https://www.odoo.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Microsoft',
                'name_ar' => 'مايكروسوفت',
                'description' => 'Technology partner supporting scalable cloud and productivity solutions for clients.',
                'description_ar' => 'شريك تقني يدعم حلول السحابة والإنتاجية القابلة للتوسع للعملاء.',
                'logo' => 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
                'website' => 'https://www.microsoft.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Google Cloud',
                'name_ar' => 'جوجل كلاود',
                'description' => 'Cloud infrastructure partner enabling secure, modern digital services.',
                'description_ar' => 'شريك بنية سحابية يمكّن خدمات رقمية آمنة وحديثة.',
                'logo' => 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
                'website' => 'https://cloud.google.com',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

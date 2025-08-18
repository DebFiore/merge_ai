
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Mail, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Calendar,
  Database,
  Workflow,
  ArrowRight,
  CheckCircle,
  Plus,
  Link as LinkIcon
} from "lucide-react";

export default function Integrations() {
  const integrationCategories = [
    {
      title: "CRM Platforms",
      icon: Database,
      description: "Seamlessly connect with your existing CRM system",
      integrations: [
        { 
          name: "HighLevel", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/845dc46f1_HighlevelCRM.jpg", 
          status: "Available", 
          popular: true 
        },
        { 
          name: "Salesforce", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png", 
          status: "Available", 
          popular: true 
        },
        { 
          name: "HubSpot", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png", 
          status: "Available", 
          popular: true 
        },
        { 
          name: "Pipedrive", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d28420115_pipedrivelogo.png", 
          status: "Available" 
        },
        { 
          name: "Zoho CRM", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cda7e33cd_Zohocrm-logo.png", 
          status: "Available" 
        },
        { 
          name: "Microsoft Dynamics", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0dbb51468_microsoftdynamicslogo.png", 
          status: "Available" 
        }
      ]
    },
    {
      title: "Social Platforms",
      icon: MessageSquare,
      description: "Expand your reach across social networks",
      integrations: [
        { 
          name: "LinkedIn", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png", 
          status: "Available", 
          popular: true 
        },
        { 
          name: "Twitter", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png", 
          status: "Available" 
        },
        { 
          name: "Facebook", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png", 
          status: "Available" 
        },
        { 
          name: "Instagram", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/512px-Instagram_logo_2016.svg.png", 
          status: "Available" 
        },
        { 
          name: "YouTube", 
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/512px-YouTube_full-color_icon_%282017%29.svg.png", 
          status: "Available" 
        },
        { 
          name: "TikTok", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/27db47256_TikTokLogo.png", 
          status: "Available" 
        }
      ]
    },
    {
      title: "Email Platforms",
      icon: Mail,
      description: "Enhance your email marketing campaigns",
      integrations: [
        { name: "Mailchimp", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e6c3b1a7e_Mailchimp-Logo.png", status: "Available", popular: true },
        { name: "Klaviyo", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3a84304dc_klaviyo-vector-logo.png", status: "Available", popular: true },
        { name: "SendGrid", logo: "https://logowik.com/content/uploads/images/sendgrid-new-20222263.jpg", status: "Available" },
        { name: "Constant Contact", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ca391d7ab_ConstantContactLogo.png", status: "Available" },
        { name: "Mailgun", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3976f12f9_mailgunlogo.png", status: "Available" },
        { name: "Postmark", logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2949cd557_postmark-logo-png_seeklogo-464687.png", status: "Available" },
      ]
    },
    {
      title: "Analytics & Data",
      icon: BarChart3,
      description: "Connect with analytics and data enrichment tools",
      integrations: [
        { 
          name: "Google Analytics", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e015813bf_GoogleAnalyticslogo.png", 
          status: "Available" 
        },
        { 
          name: "Adobe Analytics", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9a1abfdac_AdobeAnalyticslogo.png", 
          status: "Available" 
        },
        { 
          name: "Clearbit", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b27718f83_clearbit-vector-logo-2022.jpg", 
          status: "Available" 
        },
        { 
          name: "ZoomInfo", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/256a7b77c_ZoomInfo_logo_2024svg.png", 
          status: "Available" 
        },
        { 
          name: "Apollo", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/96b359456_Apollologo.png", 
          status: "Available" 
        },
        { 
          name: "Triple Whale", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b4523c735_triple-whale-review.png", 
          status: "Available" 
        }
      ]
    },
    {
      title: "Communication",
      icon: Users,
      description: "Integrate with messaging and communication tools",
      integrations: [
        { 
          name: "Slack", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ec89a8903_Slack_Technologies_Logosvg.png", 
          status: "Available", 
          popular: true 
        },
        { 
          name: "Microsoft Teams", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/22519e8a3_Microsoft-Teams-Logo.png", 
          status: "Available" 
        },
        { 
          name: "Discord", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cd062ec38_Discord-logo.png", 
          status: "Available" 
        },
        { 
          name: "Facebook Messenger", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ff2e0e64c_Facebook_Messenger_logo_2020svg.png", 
          status: "Available" 
        },
        { 
          name: "WhatsApp", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/81e95b1b2_Whatsapp.png", 
          status: "Available",
          popular: true
        },
        { 
          name: "Telegram", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/561d14ac5_Telegram_2019_Logosvg.png", 
          status: "Available" 
        }
      ]
    },
    {
      title: "Scheduling",
      icon: Calendar,
      description: "Sync with calendar and scheduling applications",
      integrations: [
        { 
          name: "Calendly", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a4093c8bc_Calendlylogo.png", 
          status: "Available", 
          popular: true 
        },
        { 
          name: "Acuity", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7845ab488_acuity-scheduling.jpg", 
          status: "Available" 
        },
        { 
          name: "Google Calendar", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/79de2fbbd_Google_Calendar_icon_2020svg.png", 
          status: "Available" 
        },
        { 
          name: "Outlook Calendar", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/98a19d102_outlook-calendar.png", 
          status: "Available" 
        },
        { 
          name: "Zoom Calendar", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b86921c46_zoom_icon.png", 
          status: "Available" 
        },
        { 
          name: "One Calendar", 
          logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d62b3934b_OneCalendarLogo.png", 
          status: "Available" 
        }
      ]
    }
  ];

  const apiFeatures = [
    "RESTful API with comprehensive documentation",
    "Webhook support for real-time data sync",
    "Rate limiting and authentication",
    "SDK available in multiple languages",
    "Sandbox environment for testing",
    "24/7 developer support"
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {/* Hero Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#DB07b5]/10 to-[#E501E4]/10 border border-[#DB07b5]/20 mb-8">
              <LinkIcon className="w-4 h-4 text-[#DB07b5] mr-2" />
              <span className="text-sm font-medium text-white">Seamless Integrations</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Connect Your
              <span className="gradient-text block">Entire Tech Stack</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              MERGE AI integrates with 100+ popular tools and platforms, ensuring seamless 
              workflow integration and maximum productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button data-form-trigger="true" className="gradient-bg text-white px-8 py-3 rounded-full font-medium gradient-hover">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button data-form-trigger="true" variant="outline" className="px-8 py-3 rounded-full font-medium border-white/50 text-white bg-transparent hover:bg-white hover:text-[#02012d]">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-[#02012d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationCategories.map((category, index) => (
              <Card key={index} className="dark-card gradient-hover">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{category.title}</CardTitle>
                      <p className="text-gray-300 text-sm">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {category.integrations.map((integration, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-2 overflow-hidden ${
                          integration.status === 'Available'
                            ? 'bg-white'
                            : 'bg-gray-800 opacity-60'
                        }`}>
                          {integration.logo && (integration.logo.startsWith('http') || integration.logo.startsWith('//')) ? (
                            <img
                              src={integration.logo}
                              alt={`${integration.name} logo`}
                              className="w-full h-full object-contain p-1.5"
                            />
                          ) : (
                            <span className={`text-2xl font-bold ${
                              integration.status === 'Available' ? 'text-gray-800' : 'text-gray-400'
                            }`}>
                              {integration.logo}
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-medium text-gray-300 mb-1">{integration.name}</div>
                        <Badge 
                          className={`text-xs ${
                            integration.status === 'Available' 
                              ? 'bg-green-400/20 text-green-300' 
                              : 'bg-white/10 text-gray-400'
                          }`}
                        >
                          {integration.status}
                        </Badge>
                        {integration.popular && (
                          <div className="text-xs text-[#DB07b5] font-medium mt-1">Popular</div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00839C]/10 to-[#00839C]/20 border border-[#00839C]/20 mb-6">
                <Workflow className="w-4 h-4 text-[#00839C] mr-2" />
                <span className="text-sm font-medium text-white">Developer Friendly</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="gradient-text">API</span> Access
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build custom integrations and extend MERGE AI's capabilities with our 
                comprehensive API and developer tools.
              </p>

              <div className="space-y-4 mb-8">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00839C] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button data-form-trigger="true" className="gradient-bg text-white px-8 py-3 rounded-full font-medium gradient-hover">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="bg-[#0f0e3e] rounded-2xl p-8 text-white font-mono text-sm border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="ml-4 text-gray-400">API Example</span>
              </div>
              <div className="space-y-2">
                <div><span className="text-[#DB07b5]">POST</span> /api/v1/campaigns</div>
                <div className="text-gray-400">Content-Type: application/json</div>
                <div className="text-gray-400">Authorization: Bearer YOUR_TOKEN</div>
                <div className="mt-4 text-gray-300">{`{`}</div>
                <div className="ml-4 text-gray-300">"name": "Q1 Outreach",</div>
                <div className="ml-4 text-gray-300">"target_audience": "enterprise",</div>
                <div className="ml-4 text-gray-300">"channels": ["email", "linkedin"]</div>
                <div className="text-gray-300">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Request Section */}
      <section className="section-padding bg-[#02012d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/5 rounded-3xl p-12 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-[#DB07b5] to-[#E501E4] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Plus className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Tool?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly adding new integrations. Let us know what tools you use 
              and we'll prioritize building that connection.
            </p>
            
            <Button data-form-trigger="true" className="gradient-bg text-white px-10 py-3 rounded-full font-medium gradient-hover">
              Request Integration
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Connect Everything?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get started today and experience seamless integration with your favorite tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button data-form-trigger="true" className="gradient-bg text-white px-12 py-4 rounded-full text-lg font-medium gradient-hover">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button data-form-trigger="true" variant="outline" className="px-8 py-4 rounded-full text-lg font-medium border-white/50 text-white bg-transparent hover:bg-white hover:text-[#02012d]">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

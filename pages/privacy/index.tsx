import { motion } from 'framer-motion';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Seo from '../../components/Seo';
import { Mail, Shield, Lock, Eye, Cookie, Database, UserCheck, HelpCircle, FileText, AlertTriangle } from 'lucide-react';

const MotionDiv: any = motion.div;

const PrivacyPolicyPage = () => {
  return (
    <>
      <Seo 
        title="Privacy Policy | How We Protect Your Data"
        description="Learn how we collect, use & protect your personal information. Your privacy is important to us. Read our transparent data practices."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy",
          "description": "Learn how we collect, use & protect your personal information. Your privacy is important to us. Read our transparent data practices.",
          "url": "https://www.digitaldude.co.uk/privacy"
        }}
      />
      
      <div className="pt-24 min-h-screen bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30">
        <Section title="Privacy Policy" subtitle="Your privacy matters. Here's how we handle your data responsibly. This policy explains what information we collect, how we use it, and your rights regarding your personal data.">
          
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Last Updated */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-primary/5 border-primary/20 hover-glow-rgb card-gradient-hover">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-text-primary">Last Updated</h3>
                </div>
                <p className="text-text-secondary">
                  This Privacy Policy was last updated on December 15, 2024. We may update this policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
                </p>
              </Card>
            </MotionDiv>

            {/* Information We Collect */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <Database className="w-6 h-6 text-primary" />
                  1. Information We Collect
                </h2>
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Contact details:</strong> Name, email address, phone number, and physical address when you contact us or engage our services.</li>
                    <li><strong>Business information:</strong> Company name, role, industry, and project details shared for proposals and service delivery.</li>
                    <li><strong>Account information:</strong> Username, password, and preferences if you create an account on our platform.</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Usage data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation paths.</li>
                    <li><strong>Device information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                    <li><strong>Location data:</strong> General geographic location based on IP address (city/country level, not precise location).</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Information from Third Parties</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Social media:</strong> Information you choose to share when connecting through social media platforms.</li>
                    <li><strong>Service providers:</strong> Data from partners who assist us in delivering services, such as payment processors or analytics providers.</li>
                  </ul>
                </div>
              </Card>
            </MotionDiv>

            {/* How We Use Information */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <UserCheck className="w-6 h-6 text-primary" />
                  2. How We Use Information
                </h2>
                <div className="prose prose-invert max-w-none">
                  <ul className="list-disc list-inside text-text-secondary space-y-3">
                    <li><strong>Service delivery:</strong> To provide our services, fulfill contracts, and communicate with you about your projects.</li>
                    <li><strong>Communication:</strong> To respond to your inquiries, send service-related notifications, and provide customer support.</li>
                    <li><strong>Improvement:</strong> To understand how users interact with our services and improve our website, products, and customer experience.</li>
                    <li><strong>Marketing:</strong> To send you relevant updates about our services, with your consent where required by law.</li>
                    <li><strong>Legal compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
                    <li><strong>Security:</strong> To protect our services, investigate suspicious activities, and prevent fraud or security breaches.</li>
                  </ul>
                </div>
              </Card>
            </MotionDiv>

            {/* Data Protection & Security */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <Lock className="w-6 h-6 text-primary" />
                  3. Data Protection & Security
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary mb-4">
                    We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security practices include:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Encryption:</strong> All data transmission is encrypted using industry-standard SSL/TLS protocols.</li>
                    <li><strong>Access controls:</strong> Strict access controls limit data access to authorized personnel only.</li>
                    <li><strong>Infrastructure security:</strong> Secure hosting with regular security updates and monitoring.</li>
                    <li><strong>Employee training:</strong> Regular training on data protection and privacy best practices.</li>
                    <li><strong>Incident response:</strong> Established procedures for responding to security incidents and data breaches.</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    While we strive to protect your personal information, please note that no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Cookies */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <Cookie className="w-6 h-6 text-primary" />
                  4. Cookies and Tracking Technologies
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience and understand how our website is used. Cookies are small data files stored on your device that help us:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve website performance and functionality</li>
                    <li>Deliver personalized content and advertising</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Types of Cookies We Use</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Essential cookies:</strong> Necessary for website functionality (cannot be disabled)</li>
                    <li><strong>Performance cookies:</strong> Collect information about how visitors use our site</li>
                    <li><strong>Functionality cookies:</strong> Allow our website to remember choices you make</li>
                    <li><strong>Targeting cookies:</strong> Deliver relevant advertising based on your interests</li>
                  </ul>
                  
                  <p className="text-text-secondary mt-4">
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Third-Party Services */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">5. Third-Party Services</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary mb-4">
                    We may integrate with third-party services to provide our services and improve your experience. These services may collect and process your information according to their own privacy policies:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Analytics providers:</strong> Google Analytics, Mixpanel for website usage analysis</li>
                    <li><strong>Cloud services:</strong> AWS, Google Cloud for hosting and data storage</li>
                    <li><strong>Payment processors:</strong> Stripe, PayPal for transaction processing</li>
                    <li><strong>Communication tools:</strong> SendGrid, Twilio for email and SMS services</li>
                    <li><strong>Project management:</strong> Notion, Jira for project collaboration</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    We carefully select third-party service providers and require them to implement appropriate security measures. However, we are not responsible for the privacy practices of these third parties.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Data Retention */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">6. Data Retention</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary mb-4">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention periods vary depending on the type of information and the purpose for which it was collected:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Business relationship:</strong> Throughout our business relationship and for 7 years after termination for legal and accounting purposes</li>
                    <li><strong>Marketing communications:</strong> Until you unsubscribe or for as long as permitted by law</li>
                    <li><strong>Website analytics:</strong> Aggregated data is retained for performance analysis, individual data is deleted after 24 months</li>
                    <li><strong>Legal compliance:</strong> As required by applicable laws and regulations</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    When we no longer need your personal information, we will securely delete or anonymize it, unless we are required to retain it for legal or regulatory purposes.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Your Rights */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <Eye className="w-6 h-6 text-primary" />
                  7. Your Rights and Choices
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary mb-4">
                    Depending on your location and applicable laws, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information, subject to certain exceptions</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    <li><strong>Portability:</strong> Request a copy of your personal information in a structured, machine-readable format</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information in certain circumstances</li>
                    <li><strong>Withdrawal:</strong> Withdraw your consent where processing is based on consent</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    To exercise any of these rights, please contact us using the information provided in Section 8. We will respond to your request within 30 days. We may need to verify your identity before fulfilling your request.
                  </p>
                  <p className="text-text-secondary mt-4">
                    You may also have the right to lodge a complaint with a data protection authority if you believe our processing of your personal information violates applicable law.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* International Data Transfers */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">8. International Data Transfers</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the United Kingdom and choose to provide information to us, we transfer your personal information to the United Kingdom and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                  </p>
                  <p className="text-text-secondary mt-4">
                    We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your personal information will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Children's Privacy */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">9. Children's Privacy</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Changes to This Policy */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <FileText className="w-6 h-6 text-primary" />
                  10. Changes to This Privacy Policy
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We may also notify you through email or other means if the changes are significant.
                  </p>
                  <p className="text-text-secondary mt-4">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Contact Us */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  11. Contact Us
                </h2>
                <p className="text-text-secondary mb-6">
                  If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <a href="mailto:privacy@digitaldude.co.uk" className="text-primary hover:text-accent transition-colors">
                        privacy@digitaldude.co.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Postal Address</p>
                      <p className="text-text-secondary">
                        The Digital Dude Ltd.<br />
                        123 Tech Street<br />
                        London, EC1A 1AA<br />
                        United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-surface/20 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Data Protection Officer</p>
                      <p className="text-text-secondary text-sm">
                        For all data protection inquiries, please contact our appointed Data Protection Officer who is responsible for overseeing our compliance with data protection laws.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          </div>
        </Section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
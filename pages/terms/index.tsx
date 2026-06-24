import { motion } from 'framer-motion';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Seo from '../../components/Seo';
import { Mail, Phone, Scale, FileText, AlertCircle, Shield, Award } from 'lucide-react';

const MotionDiv: any = motion.div;

const TermsOfServicePage = () => {
  return (
    <>
      <Seo 
        title="Terms & Conditions | Legal Agreement for Services"
        description="Read our comprehensive terms for using our website & services. Understand your rights & responsibilities when working with our agency."
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms & Conditions",
          "description": "Read our comprehensive terms for using our website & services. Understand your rights & responsibilities when working with our agency.",
          "url": "https://www.digitaldude.co.uk/terms"
        }}
      />
      
      <div className="pt-24 min-h-screen bg-gradient-to-br from-background via-slate-900/50 to-slate-800/30">
        <Section title="Terms & Conditions" subtitle="Please review our comprehensive terms of service before using The Digital Dude's website and solutions. These terms govern your access to and use of our services.">
          
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Last Updated */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-primary/5 border-primary/20 hover-glow-rgb card-gradient-hover">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-text-primary">Last Updated</h3>
                </div>
                <p className="text-text-secondary">
                  These Terms & Conditions were last updated on December 15, 2024. We reserve the right to modify these terms at any time. Your continued use of our services after any changes constitutes acceptance of those changes.
                </p>
              </Card>
            </MotionDiv>

            {/* Acceptance of Terms */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <Scale className="w-6 h-6 text-primary" />
                  1. Acceptance of Terms
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    By accessing or using this website and our services, you agree to comply with and be bound by these Terms & Conditions, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our services.
                  </p>
                  <p className="text-text-secondary mt-4">
                    These terms apply to all visitors, users, and others who access or use our services. We may revise and update these terms at any time without notice. Your continued use of our services following the posting of changes to these terms means that you accept and agree to the changes.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Services */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">2. Services</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    The Digital Dude provides custom software development, AI & data solutions, SaaS platforms, e-commerce solutions, mobile applications, and related consulting services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-4">
                    <li>Custom software development and application design</li>
                    <li>Artificial intelligence and machine learning solutions</li>
                    <li>SaaS platform development and deployment</li>
                    <li>E-commerce website and marketplace development</li>
                    <li>Mobile application development for iOS and Android</li>
                    <li>API development and third-party integrations</li>
                    <li>Legacy system modernization and migration</li>
                    <li>Cloud infrastructure setup and management</li>
                    <li>Technical consulting and project management</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    The specific scope, deliverables, and terms of each project are defined in separate project agreements or statements of work. These terms govern the general relationship, while project-specific terms govern individual engagements.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Client Responsibilities */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">3. Client Responsibilities</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    As a client, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-4">
                    <li><strong>Provide accurate information:</strong> Supply complete, accurate, and timely project requirements, feedback, and approvals.</li>
                    <li><strong>Timely responses:</strong> Respond to requests for feedback, approvals, and information within 48 hours to avoid project delays.</li>
                    <li><strong>Legal compliance:</strong> Maintain legal compliance for business operations integrated with our solutions.</li>
                    <li><strong>Access provision:</strong> Provide necessary access to systems, accounts, and data required for project completion.</li>
                    <li><strong>Content provision:</strong> Supply all content, assets, and materials required for project completion in a timely manner.</li>
                    <li><strong>Testing participation:</strong> Participate in user acceptance testing and provide constructive feedback.</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    Failure to meet these responsibilities may result in project delays, additional costs, or suspension of services. We will make reasonable efforts to work around delays, but cannot be held responsible for missed deadlines caused by client delays.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Intellectual Property */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <Award className="w-6 h-6 text-primary" />
                  4. Intellectual Property
                </h2>
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">Ownership</h3>
                  <p className="text-text-secondary">
                    Upon full payment, clients retain full ownership of source code and assets delivered under project agreements. All intellectual property rights in the final deliverables, including but not limited to source code, designs, documentation, and other materials, are transferred to the client.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Our Rights</h3>
                  <p className="text-text-secondary">
                    The Digital Dude retains the following rights:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-2">
                    <li><strong>Portfolio use:</strong> To use anonymized case studies, visuals, and project descriptions for portfolio and marketing purposes, unless otherwise agreed in writing.</li>
                    <li><strong>Process improvements:</strong> To use knowledge and methodologies developed during projects for internal process improvements.</li>
                    <li><strong>Pre-existing IP:</strong> To retain ownership of pre-existing intellectual property, tools, frameworks, and methodologies developed independently.</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Client Representations</h3>
                  <p className="text-text-secondary">
                    You represent and warrant that any content, materials, or information you provide to us for use in connection with our services:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-2">
                    <li>Do not infringe upon any third-party intellectual property rights</li>
                    <li>Are accurate, complete, and not misleading</li>
                    <li>You have the right to provide to us for our use</li>
                  </ul>
                </div>
              </Card>
            </MotionDiv>

            {/* Payments */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">5. Payments</h2>
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">Payment Terms</h3>
                  <p className="text-text-secondary">
                    Payment terms will be outlined in individual project agreements, but typically include:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-2">
                    <li><strong>Deposit:</strong> 50% of total project cost due upon signing the agreement</li>
                    <li><strong>Interim payments:</strong> Scheduled payments aligned with project milestones</li>
                    <li><strong>Final payment:</strong> 50% of total project cost due upon project completion</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Late Payments</h3>
                  <p className="text-text-secondary">
                    Late payments may result in project delays or suspension of services. We may charge interest on overdue amounts at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Taxes</h3>
                  <p className="text-text-secondary">
                    All amounts are exclusive of taxes. You are responsible for paying all applicable taxes, duties, and fees related to your purchase of services, except for taxes based on our net income.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Refunds</h3>
                  <p className="text-text-secondary">
                    Services are non-refundable once work has commenced. In the event of project cancellation, any prepaid amounts for undelivered work may be refunded at our discretion, minus reasonable costs incurred.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Confidentiality */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">6. Confidentiality</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    Both parties agree to keep sensitive business information confidential unless disclosure is:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-4">
                    <li>Legally required</li>
                    <li>Authorized in writing by the disclosing party</li>
                    <li>Necessary for project completion</li>
                    <li>Publicly available through no fault of the receiving party</li>
                  </ul>
                  <p className="text-text-secondary mt-4">
                    Confidential information includes but is not limited to business plans, technical specifications, customer lists, financial information, and proprietary processes. This obligation survives termination of the agreement for a period of 3 years.
                  </p>
                  <p className="text-text-secondary mt-4">
                    We implement appropriate security measures to protect your confidential information, but cannot guarantee absolute security. You agree to indemnify us against claims arising from unauthorized disclosure of information that was not properly marked as confidential.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Warranty and Disclaimer */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <Shield className="w-6 h-6 text-primary" />
                  7. Warranty and Disclaimer
                </h2>
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">Our Warranty</h3>
                  <p className="text-text-secondary">
                    We warrant that services will be performed in a professional and workmanlike manner according to industry standards. This warranty is limited to corrections of defects discovered within 30 days of project completion.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Disclaimer of Warranties</h3>
                  <p className="text-text-secondary">
                    Except as expressly stated in these terms, our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-2">
                    <li>Merchantability</li>
                    <li>Non-infringement</li>
                    <li>Accuracy of results</li>
                    <li>Uninterrupted or error-free operation</li>
                    <li>Compatibility with all systems</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Third-Party Services</h3>
                  <p className="text-text-secondary">
                    We are not responsible for the performance or availability of third-party services, platforms, or technologies used in connection with our services.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Limitation of Liability */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  8. Limitation of Liability
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    To the maximum extent permitted by law, The Digital Dude's total liability arising out of or related to these terms or our services, whether in contract, tort (including negligence), or otherwise, will not exceed the total amounts paid by you to us under the applicable project agreement in the 12 months preceding the event giving rise to the claim.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Excluded Damages</h3>
                  <p className="text-text-secondary">
                    In no event will The Digital Dude be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-2">
                    <li>Loss of profits, revenue, or business opportunities</li>
                    <li>Loss of data or cost of procurement of substitute goods or services</li>
                    <li>Business interruption or downtime costs</li>
                    <li>Loss of goodwill or reputation</li>
                    <li>Any other consequential or incidental damages</li>
                  </ul>
                  
                  <p className="text-text-secondary mt-4">
                    These limitations will apply even if we have been advised of the possibility of such damages and regardless of whether the remedy fails of its essential purpose.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Termination */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">9. Termination</h2>
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">By Client</h3>
                  <p className="text-text-secondary">
                    You may terminate a project by providing 30 days' written notice. Upon termination, you will pay for all services rendered up to the effective date of termination. We will deliver all completed work products up to that point.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">By The Digital Dude</h3>
                  <p className="text-text-secondary">
                    We may terminate a project with 30 days' written notice if:
                  </p>
                  <ul className="list-disc list-inside text-text-secondary space-y-2 mt-2">
                    <li>You fail to make required payments when due</li>
                    <li>You breach any material term of these terms or the project agreement</li>
                    <li>You become insolvent or file for bankruptcy</li>
                    <li>You repeatedly fail to meet your responsibilities</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">Effect of Termination</h3>
                  <p className="text-text-secondary">
                    Upon termination, all licenses and rights granted to you will cease, except for those related to deliverables for which full payment has been received. You must immediately cease using our services and return or destroy all confidential information.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Governing Law */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">10. Governing Law</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    These Terms & Conditions are governed by the laws of England and Wales without regard to its conflict of law provisions. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts located in London, United Kingdom.
                  </p>
                  <p className="text-text-secondary mt-4">
                    You agree that any legal action or proceeding between you and The Digital Dude arising out of or relating to these terms or your use of our services must be brought in the courts of England and Wales.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Force Majeure */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">11. Force Majeure</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    Neither party will be liable for any failure or delay in performance under these terms due to causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fires, floods, earthquakes, pandemics, or other natural disasters.
                  </p>
                  <p className="text-text-secondary mt-4">
                    If a force majeure event continues for more than 30 days, either party may terminate the affected project agreement upon written notice to the other party.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Assignment */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">12. Assignment</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    You may not assign or transfer these terms or your rights and obligations hereunder, in whole or in part, without our prior written consent. We may freely assign or transfer these terms and all rights and obligations hereunder to any affiliate or in connection with a merger, acquisition, or sale of all or substantially all of our assets.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Entire Agreement */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <Card className="p-8 hover-glow-rgb card-gradient-hover">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3 heading-gradient">
                  <FileText className="w-6 h-6 text-primary" />
                  13. Entire Agreement
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-text-secondary">
                    These Terms & Conditions, together with our Privacy Policy and any project agreements, constitute the entire agreement between you and The Digital Dude regarding your use of our services and supersede all prior and contemporaneous understandings and agreements.
                  </p>
                  <p className="text-text-secondary mt-4">
                    No amendment to or modification of these terms will be binding unless in writing and signed by both parties. Our failure to enforce any provision of these terms will not constitute a waiver of that provision.
                  </p>
                </div>
              </Card>
            </MotionDiv>

            {/* Contact Information */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20">
                <h2 className="text-2xl font-bold text-text-primary mb-6 heading-gradient">Questions About These Terms</h2>
                <p className="text-text-secondary mb-6">
                  If you have questions about these Terms & Conditions, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <a href="mailto:legal@digitaldude.co.uk" className="text-primary hover:text-accent transition-colors">
                        legal@digitaldude.co.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-text-primary">Phone</p>
                      <a href="tel:+440123456789" className="text-primary hover:text-accent transition-colors">
                        +44 (0) 123 456 789
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-surface/20 rounded-lg border border-border">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Legal Department</p>
                      <p className="text-text-secondary text-sm">
                        For all legal inquiries, contract questions, or terms-related concerns, please contact our Legal Department who can provide assistance and clarification.
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

export default TermsOfServicePage;
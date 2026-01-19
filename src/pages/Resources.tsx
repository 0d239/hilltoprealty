import { useState } from 'react';
import { Home, Key, HelpCircle, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Accordion, AccordionItem } from '../components/ui/Accordion';
import {
  buyerFAQs,
  sellerFAQs,
  generalFAQs,
  buyerResources,
  sellerResources,
} from '../data/resources';
import { cn } from '../lib/utils';

type Tab = 'buyers' | 'sellers' | 'faq';

export function Resources() {
  const [activeTab, setActiveTab] = useState<Tab>('buyers');

  return (
    <div className="py-12">
      <section className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Resources</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Helpful information and guides for buyers and sellers navigating the real estate process.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-800 rounded-lg p-1">
            <TabButton
              active={activeTab === 'buyers'}
              onClick={() => setActiveTab('buyers')}
              icon={<Key className="w-4 h-4" />}
            >
              Buyers
            </TabButton>
            <TabButton
              active={activeTab === 'sellers'}
              onClick={() => setActiveTab('sellers')}
              icon={<Home className="w-4 h-4" />}
            >
              Sellers
            </TabButton>
            <TabButton
              active={activeTab === 'faq'}
              onClick={() => setActiveTab('faq')}
              icon={<HelpCircle className="w-4 h-4" />}
            >
              FAQ
            </TabButton>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'buyers' && (
            <>
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">Buyer Resources</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Everything you need to know about buying a home in San Benito County
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-700">
                    {buyerResources.map((resource) => (
                      <ResourceItem key={resource.title} resource={resource} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">Common Buyer Questions</h2>
                </CardHeader>
                <CardContent>
                  <Accordion>
                    {buyerFAQs.map((faq) => (
                      <AccordionItem key={faq.question} title={faq.question}>
                        {faq.answer}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </>
          )}

          {activeTab === 'sellers' && (
            <>
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">Seller Resources</h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Tools and services to help you sell your home for top dollar
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-700">
                    {sellerResources.map((resource) => (
                      <ResourceItem key={resource.title} resource={resource} />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-xl font-semibold text-white">Common Seller Questions</h2>
                </CardHeader>
                <CardContent>
                  <Accordion>
                    {sellerFAQs.map((faq) => (
                      <AccordionItem key={faq.question} title={faq.question}>
                        {faq.answer}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </>
          )}

          {activeTab === 'faq' && (
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-white">Frequently Asked Questions</h2>
                <p className="text-sm text-slate-400 mt-1">
                  General questions about working with Hilltop Realty
                </p>
              </CardHeader>
              <CardContent>
                <Accordion>
                  {generalFAQs.map((faq) => (
                    <AccordionItem key={faq.question} title={faq.question}>
                      {faq.answer}
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors',
        active
          ? 'bg-slate-700 text-white shadow-sm'
          : 'text-slate-400 hover:text-white'
      )}
    >
      {icon}
      {children}
    </button>
  );
}

function ResourceItem({ resource }: { resource: { title: string; description: string; url?: string } }) {
  const content = (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-slate-700 transition-colors">
      <div>
        <h3 className="font-medium text-white">{resource.title}</h3>
        <p className="text-sm text-slate-400 mt-0.5">{resource.description}</p>
      </div>
      {resource.url ? (
        <ExternalLink className="w-4 h-4 text-slate-500" />
      ) : (
        <ChevronRight className="w-4 h-4 text-slate-500" />
      )}
    </div>
  );

  if (resource.url) {
    return (
      <a href={resource.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className="cursor-pointer">{content}</div>;
}

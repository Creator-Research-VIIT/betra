import { Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { IconCard } from '@/components/IconCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Beaker,
  BookOpen,
  Users,
  BarChart3,
  Lightbulb,
  Network,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Core Activities | BETRA',
  description: 'Explore BETRA core activities including research, publications, community engagement, and policy analysis.',
}

export default function Activities() {
  const activities = [
    {
      icon: Beaker,
      title: 'Research Projects',
      description: 'Conducting rigorous applied research on critical issues affecting policy and society.',
      details: [
        'Longitudinal studies on institutional effectiveness',
        'Comparative analysis of policy outcomes',
        'Applied research for evidence-based solutions',
      ],
    },
    {
      icon: BookOpen,
      title: 'Publications & Dissemination',
      description: 'Publishing peer-reviewed research and making findings accessible to stakeholders.',
      details: [
        'Journal publications and academic papers',
        'Policy briefs and executive summaries',
        'Annual research reports and working papers',
      ],
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Building relationships with communities and fostering collaborative initiatives.',
      details: [
        'Stakeholder consultation workshops',
        'Community research initiatives',
        'Knowledge sharing forums and seminars',
      ],
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Analytics',
      description: 'Advanced statistical analysis and data visualization for strategic insights.',
      details: [
        'Statistical modeling and analysis',
        'Data visualization and dashboards',
        'Predictive analytics and forecasting',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Policy Analysis & Recommendations',
      description: 'Providing strategic policy recommendations based on rigorous analysis.',
      details: [
        'Policy impact assessment',
        'Strategic recommendations for stakeholders',
        'Policy briefings for decision-makers',
      ],
    },
    {
      icon: Network,
      title: 'Capacity Building',
      description: 'Strengthening institutional research capabilities through training and partnerships.',
      details: [
        'Research methodology training',
        'Institutional partnerships and collaboration',
        'Knowledge transfer programs',
      ],
    },
  ]

  return (
    <>

      <main>
        <Hero
          title="Our Core Activities"
          description="Comprehensive research initiatives and activities designed to advance evidence-based decision-making and institutional excellence."
        />

        {/* Overview */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-16 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">What We Do</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                BETRA engages in a diverse range of activities designed to advance research excellence and support evidence-based decision-making. Our work spans from foundational research projects to applied policy analysis and community engagement initiatives.
              </p>
              <p>
                Each activity is guided by our commitment to intellectual rigor, ethical practice, and practical impact. We collaborate with partners across sectors to ensure our research addresses real-world challenges and contributes to meaningful solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Main Activities Grid */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Key Initiatives
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card key={activity.title} className="hover:border-accent transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                    <activity.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {activity.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Current Focus */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-primary/5 p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Current Research Focus Areas</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-foreground">Short-term Priorities</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Institutional effectiveness and governance</li>
                  <li>• Policy impact assessment studies</li>
                  <li>• Digital transformation analysis</li>
                  <li>• Economic development strategies</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-foreground">Long-term Initiatives</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Sustainable development research</li>
                  <li>• Climate change policy analysis</li>
                  <li>• Social equity and inclusion studies</li>
                  <li>• Global institutional capacity building</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

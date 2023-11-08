import type { Card } from '../generics/generics'

export type IntroductionSection = {
  features?: string[]
  featureIcon?: string
} & Card

export type LandingData = {
  introductionSection: IntroductionSection
}

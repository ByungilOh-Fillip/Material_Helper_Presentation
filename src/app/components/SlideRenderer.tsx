import type { Slide } from "./slides-data";
import {
  SlideCover,
  SlideOverview,
  SlideProblem,
  SlideUsers,
  SlideValues,
  SlideVision,
  SlideFeature1,
  SlideFeature2,
  SlideFeature3,
  SlideArchitecture,
  SlideData,
  SlideMvp,
  SlideRoadmap,
  SlideImpact,
  SlideClosing,
} from "./slide-components";

type Props = { slide: Slide; index: number };

const map: Record<Slide["type"], React.ComponentType<{ index: number }>> = {
  cover: SlideCover,
  overview: SlideOverview,
  problem: SlideProblem,
  users: SlideUsers,
  values: SlideValues,
  vision: SlideVision,
  feature1: SlideFeature1,
  feature2: SlideFeature2,
  feature3: SlideFeature3,
  architecture: SlideArchitecture,
  data: SlideData,
  mvp: SlideMvp,
  roadmap: SlideRoadmap,
  impact: SlideImpact,
  closing: SlideClosing,
};

export function SlideRenderer({ slide, index }: Props) {
  const Component = map[slide.type];
  return (
    <div className="absolute inset-0">
      <Component index={index} />
    </div>
  );
}

import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LazySummarizerPage = lazy(() => import("../../pages/SummarizerPage"));

const LazyIdeaGeneratorPage = lazy(() =>
  import("../../pages/IdeaGeneratorPage")
);

const LazyRewriterPage = lazy(() => import("../../pages/RewriterPage"));

const LazyNotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

const RoutesPages = () => {
  return (
    <Routes>
      <Route index element={<LazySummarizerPage />} />
      <Route path="idea_generator" element={<LazyIdeaGeneratorPage />} />
      <Route path="rewriter" element={<LazyRewriterPage />} />
      <Route path="*" element={<LazyNotFoundPage />} />
    </Routes>
  );
};

export default RoutesPages;

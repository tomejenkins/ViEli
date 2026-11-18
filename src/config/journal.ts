export type JournalArticle = {
  slug: string;
  title: string;
  description: string;
  publishedOn: string;
};

// Add only approved articles when their pages are ready.
export const journalArticles: readonly JournalArticle[] = [];

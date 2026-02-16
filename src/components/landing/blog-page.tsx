import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  category?: string;
}

export interface BlogPageProps {
  /** Page title */
  title?: string;
  /** Page subtitle */
  subtitle?: string;
  /** Blog posts */
  posts?: BlogPost[];
  /** Show all posts button */
  showAllText?: string;
  /** Primary brand color */
  primaryColor?: string;
}

export function BlogPage({
  title = "Nyheter",
  subtitle = "De siste oppdateringene fra oss",
  posts = [],
  showAllText = "Alle nyheter",
  primaryColor = "#2B7FFF",
}: BlogPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  {post.category && (
                    <span 
                      className="text-xs font-medium uppercase tracking-wider mb-2 inline-block"
                      style={{ color: primaryColor }}
                    >
                      {post.category}
                    </span>
                  )}
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/nyheter/${post.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-sm"
                    style={{ color: primaryColor }}
                  >
                    Les mer <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">Ingen nyheter er publisert ennå.</p>
          </div>
        )}

        {/* View All CTA */}
        {posts.length > 0 && (
          <div className="mt-16 text-center">
            <a 
              href="/nyheter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors"
              style={{ 
                backgroundColor: primaryColor,
                color: '#fff'
              }}
            >
              {showAllText} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// BlogPostPage for individual blog posts
export interface BlogPostPageProps {
  title: string;
  date: string;
  category?: string;
  image?: string;
  content: string;
  primaryColor?: string;
}

export function BlogPostPage({
  title,
  date,
  category,
  image,
  content,
  primaryColor = "#2B7FFF",
}: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {category && (
            <span 
              className="text-xs font-medium uppercase tracking-wider mb-4 inline-block"
              style={{ color: primaryColor }}
            >
              {category}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {title}
          </h1>
          <p className="text-gray-500">{date}</p>
        </div>

        {/* Featured Image */}
        {image && (
          <div className="mb-12 rounded-xl overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}

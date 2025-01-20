"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/container";
import { getAllPosts } from "../../lib/posts";
import Link from "next/link"
import { Dot } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import NotFound from "@/components/notfound";
interface blogData {
  title: string;
  content: string;
  slug: string;
  description?: string;
  category?: string;
  subCategory?: string[];
  createdAt?: string;
  authorName?: string;
  estimated?: string;
  cover?: string;
}

const LatestBlog = () => {
  const [posts, setPosts] = useState<blogData[] | null>(null);  // Changed initial state to null
  const [loading, setLoading] = useState(true);

  const tanggalSort = (tanggal: string): Date => {
    const date = tanggal.split(", ");
    return new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));
  }

  const convertTanggal = (tanggal: string) => {
    const date = tanggal.split(", ");
    const dateObject = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

    const day = dateObject.toLocaleString("en-US", { day: 'numeric' });
    const month = dateObject.toLocaleString("en-US", { month: 'short' });
    const year = dateObject.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  useEffect(() => {
    document.title = "Blog | Elvira Firmansyah"
    const fetchData = async () => {
      try {
        const posts = await getAllPosts();
        const sortedData: blogData[] = posts?.sort((a, b) =>
          tanggalSort(b.createdAt ? b.createdAt : '').getTime() - tanggalSort(a.createdAt ? a.createdAt : '').getTime());
        setPosts(sortedData.slice(0, 3));  // Get only the latest 3 posts
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      }
    }

    fetchData();
  }, [])

  const loading_card = [...Array(1)];

  return (
    <Container>
      <div className="pt-3 pb-10">
        <h1 className="font-bold text-2xl md:text-3xl  tracking-title">Latest <span className="text-primary">Blog</span> </h1>
        <div className="py-5">
          {loading ? loading_card.map((_, key) => (
            <Skeleton key={key} className="border cursor-pointer border-bordersoft bg-soft hover:bg-hoversoft rounded-xl w-full h-[240px]" />
          )) :
            posts && posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {posts.map((post, key) => (
                  <div key={key} className="border border-bordersoft bg-background dark:bg-soft flex flex-col md:flex-row md:space-x-5 p-5 md:p-6 rounded-xl relative space-y-4 md:space-y-0  dark:shadow-none">
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          <Badge variant="primary">{post.category}</Badge>
                          <p className="tracking-desc">{post.createdAt ? convertTanggal(post.createdAt) : ''}</p>
                        </div>
                        <div className="space-y-1">
                          <h2 className="text-lg lg:text-xl font-extrabold hover:underline hover:decoration-primary underline-offset-4 line-clamp-2 text-ellipsis ">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h2>
                          <p className="text-desc line-clamp-3 text-ellipsis text-sm lg:text-base ">{post.description}</p>
                        </div>
                      </div>
                      <div >
                        <div className="flex items-center text-sm md:text-base" >
                          <div className="flex items-center space-x-3">
                            <Image
                              src={'/assets/img/profile.png'}
                              alt={'profile'}
                              width={1200}
                              height={800}
                              className="rounded-full w-9 h-9 object-cover "
                            />
                            <p>{post.authorName}</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute text-xs md:text-sm right-6 bottom-6 text-desc">{post.estimated}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <NotFound title="No Posts Found" description="There are no recent blog posts available." size="2xl" size_md="3xl" />
            )}
        </div>
      </div>
    </Container>
  );
}

export default LatestBlog;

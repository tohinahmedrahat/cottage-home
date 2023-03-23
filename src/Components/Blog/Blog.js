import React from 'react';
import { useQuery } from 'react-query';
import AllBlog from './AllBlog';
import BlogBanner from './BlogBanner';

const Blog = () => {

    // function About() {
    //     const navigate = useNavigate();
    //     const goBack = () => {
    //         navigate(-1);
    //     }
    //     return <>	
    //         <button onClick={goBack}>Back</button>	
    //         <p>About Page</p>
    //     </>;

    const url = 'https://cottage-home-care-services-server-site.vercel.app/blogs'

    const { data: blogs = [], isLoading, refetch } = useQuery({
        queryKey: ['blogs',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })

    

    console.log(blogs)

    return (
        <div>
            <BlogBanner>

            </BlogBanner>

            <AllBlog
            blogs={blogs}
            isLoading={isLoading}
            ></AllBlog>
        </div>
    );
};

export default Blog;
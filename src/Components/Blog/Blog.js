import React,{useContext} from 'react';
import { useQuery } from 'react-query';
import useAdmin from '../Hooks/UseAdmin';
import { AuthContext } from '../Pages/Context/AuthProvider';
import AllBlog from './AllBlog';
import BlogBanner from './BlogBanner';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
const { user } = useContext(AuthContext);
const [isAdmin] = useAdmin(user?.email);

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
            isAdmin={isAdmin}
            isLoading={isLoading}
            refetch={refetch}
            ></AllBlog>
        </div>
    );
};

export default Blog;
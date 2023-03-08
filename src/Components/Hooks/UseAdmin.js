import { useEffect, useState } from "react"

const useAdmin = email => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        if (email) {
            fetch(`https://cottage-home-care-services-server-site.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                     console.log(data)
                    setIsAdmin(data.isAdmin);
                    setAdminLoading(false)

                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]

}

export default useAdmin;
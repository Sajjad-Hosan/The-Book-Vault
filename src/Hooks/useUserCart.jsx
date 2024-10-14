import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useUserCart = () => {

    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext);

    const {refetch, data: userCart = [] } = useQuery({
        queryKey: ['userCart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`);
            return res.data;
        }
    })
    return [userCart, refetch];
};

export default useUserCart;
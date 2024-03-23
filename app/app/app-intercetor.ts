import axios from "axios";

import { apiInstance } from "../shared/api/api-instance";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const useApplyAppInterceptor = () => {
  const router = useRouter();
  useEffect(() => {
    // apiInstance.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {}
    // );
  }, [router]);
};

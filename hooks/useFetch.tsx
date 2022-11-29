import { FC, useEffect, useState } from "react";

export type TUseFetch = {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
}

export const useFetch = ({ url, method }: TUseFetch) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [error, setError] = useState<any>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [data, setData] = useState<any>(null);

  const sendApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/${url}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      // console.log(json)
      // setStatus(json.status);
      setData(data);
      setIsSuccess(true);
    } catch (error) {
      setError(error)
      setIsSuccess(false);
    }
    setLoading(false);
  }

  return { loading, error, status, data, sendApi, isSuccess }
}
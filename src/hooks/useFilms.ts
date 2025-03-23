
import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../services/api.service';


export const useFilms = () => {
  return useInfiniteQuery({
    queryKey: ['films'],
    queryFn: ({ pageParam }) => api.getFilms(pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const matches = lastPage.next.match(/page=(\d+)/);
      return matches ? parseInt(matches[1], 10) : undefined;
    },
    initialPageParam: 1,
    select: (data) => ({
      ...data,
      pages: data.pages.flatMap(page => page.results)
    }),
  });
};
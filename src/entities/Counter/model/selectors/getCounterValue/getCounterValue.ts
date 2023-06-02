import { buildSelector } from '@/shared/lib/store';

export const [useGetCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);

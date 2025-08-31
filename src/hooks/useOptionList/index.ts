import { useAppSelector } from "../../store/hooks";

export const useOptionList = () => {
  const {
    options,
    loading: reduxLoading,
    error: reduxError,
  } = useAppSelector((state) => state.dropDown);

  return { options, loading: reduxLoading, error: reduxError };
};

export default useOptionList;

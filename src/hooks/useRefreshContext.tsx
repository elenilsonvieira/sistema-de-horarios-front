import { useContext } from 'react';
import { RefreshContextDND } from '../context/RefreshContextDND';

export default function useRefreshContext() {
  const { bool, setBool } = useContext(RefreshContextDND);

  const refreshBool = () => {
    setBool(!bool);
  };

  return {
    bool,
    refreshBool,
  };
}

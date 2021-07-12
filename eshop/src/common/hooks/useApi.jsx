import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  isLoading: false,
  data: null,
};

function useApi() {
  const [state, setState] = useState(initialState);
  const history = useHistory();

  async function call(request) {
    setState({ data: null, isLoading: true });

    try {
      const { data } = await axios(request);
      setState({ data, isLoading: false });
    } catch (e) {
      history.push("/error");
      console.error(e);
    }
  }

  return {
    ...state,
    call,
  };
}

export default useApi;

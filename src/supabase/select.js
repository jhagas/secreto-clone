import { supabase } from "./supabaseClient";
import React from "react";

export default function GetData() {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();

  React.useEffect(() => {

    // fetch (SELECT) data from supabase (database) with postREST API using supabase-js
    // constanly fetching data with 500ms delay
    const fetch = setTimeout(
      async function () {
        let { data, error } = await supabase.from("form-result").select("*");
        setData(data);
        setError(error);
      }
    , 500)

    // Purge state when outside of /start route
    return () => clearTimeout(fetch);
   // call the asyncronous function
  }, [data]);

  return [ data, error ];
}
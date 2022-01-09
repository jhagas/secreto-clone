import { supabase } from "./supabaseClient";
import React from "react";

export default function GetData() {
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {

    // fetch (SELECT) data from supabase (database) with postREST API using supabase-js
    // constanly fetching data with 500ms delay
    const fetch = setTimeout(
      async function () {
        let { data, error } = await supabase.from("form-result").select("*");
        setData(data);
        setError(error);
        setLoading(false);
      }
    , 2000)

    // Purge state when outside of /start route
    return () => clearTimeout(fetch);
   // call the asyncronous function
  }, [data, error]);

  return [ data, error, loading ];
}
import { supabase } from "./supabaseClient";
import React from "react";

export default function GetData() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {

    // fetch (SELECT) data from supabase (database) with postREST API using supabase-js
    async function fetchData() {
      let tes = await supabase.from("form-result").select("*");
      setData(tes.data);
    }

   // call the asyncronous function
    fetchData();
  }, []);

  return data;
}
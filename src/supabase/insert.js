import { supabase } from "./supabaseClient";
import React from "react";

export default function UploadMsg(message) {
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const insert = {
      msg: message,
    };
    // send (INSERT) data from supabase (database) with postREST API using supabase-js
    async function postData() {
      const { error } = await supabase.from("form-result").insert([insert]);

      setError(error);
    }
    // call the asyncronous function
    if (message != null && message !== "") {
      postData();
    }
  }, [message]);

  return error;
}

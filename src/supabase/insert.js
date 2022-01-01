import { supabase } from "./supabaseClient";
import React from "react";

export default function UploadMsg(message) {
  React.useEffect(() => {
    const insert = {
      msg: message,
    };
    // send (INSERT) data from supabase (database) with postREST API using supabase-js
    async function postData() {
      const { error } = await supabase
        .from("form-result")
        .insert([insert]);

      console.log(error);
    }
    // call the asyncronous function
    postData();
  }, [message]);

  return null;
}

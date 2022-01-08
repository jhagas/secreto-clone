import UploadMsg from "../supabase/insert";
import GetData from "../supabase/select";

export default function Start() {
  // const data = "Jhagas makan banget"
  // UploadMsg(data)

  const [data, error] = GetData();

  if (data != null) {
    return (
      <>
        <h1>Tes Start</h1>
        {data.map((d) => {
          return <h1 key={d.id}>{d["msg"]}</h1>;
        })}
      </>
    );
  }

  return <h1>{error?.message}</h1>;
}

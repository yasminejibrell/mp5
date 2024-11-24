import { FormHelperText } from "@mui/material";

export default function Shortened({ url }: { url: string }) {
  return (
    url && (
      <div
        className="w-full justify-center"
        onClick={() => {
          navigator.clipboard.writeText(url);
        }}
      >
        <FormHelperText sx={{ textAlign: "center", marginTop: "30px", marginBottom: "10px", fontSize: "22px"}}>
          <p className="text-red-700">Click here to copy your personalized link!</p>
        </FormHelperText>
        <FormHelperText sx={{ textAlign: "center", marginBottom: "10px", fontSize: "20px"}}>
          <p className="w-full flex justify-center text-blue-700">{url}</p>
        </FormHelperText>
        
      </div>
    )
  );
}

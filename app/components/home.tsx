"use client";
import createAlias from "../lib/createAlias";
import { useState } from "react";
import Shortened from "./shortened";
import { Button, FormHelperText, TextField } from "@mui/material";

export default function HomePage() {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");
  const [short, setShort] = useState("");
  const [error, setError] = useState("");
  
  const submitUrl = async () => {
    setShort("");
    const res = await createAlias({ alias, url });
    if (res.length === 0) {
      setShort(window.location.href + alias);
      return;
    }

    setError(res);
  };

  return (
    <div>
      <form
        className="p-8 m-2 rounded-xl text-lg text-red-500 bg-red-100 flex flex-col justify-between items-center"
        onSubmit={(e) => {
          e.preventDefault();
          submitUrl();
        }}
      >
        <FormHelperText sx={{ textAlign: "center", marginBottom: "25px", fontSize: "25px"}}>
          <span className="text-red-900">Craft your own unique URL to share with all your family and friends!!</span>
        </FormHelperText>
        {error.length > 0 && <p>{error}</p>}
        <br></br>
        <TextField 
          variant="filled"
          sx={{ 
            backgroundColor: "white", 
            width: "100%", 
            textAlign: "center" 
          }}
          label="Alias"
          type="text"
          value={alias}
          onChange={(e) => {
            setError("");
            setAlias(e.target.value);
          }}
            />
        <TextField 
          variant="filled"
          sx={{ 
            backgroundColor: "white", 
            width: "100%", 
            textAlign: "center" 
          }}
          label="URL"
          type="text"
          value={url}
          onChange={(e) => {
            setError("");
            setUrl(e.target.value);
          }}
        />
        <div className="w-full flex justify-center">
          <Button
            sx={{ 
              width: "180px",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "14px", 
              marginTop: "25px"
            }}
            variant="contained"
            type="submit"
            disabled={alias.length === 0 || url.length === 0}
          >
            Create Personalized URL
          </Button>
        </div>
      </form>
      <Shortened url={short} />
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { EpubView, ReactReader } from "react-reader";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong: {this.state.error.message}</h1>;
    }

    return this.props.children;
  }
}

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState(0);
  const viewerRef = useRef(null);

  const handleLocationChanged = (epubcfi) => {
    if (epubcfi) {
      setLocation(epubcfi);
    }
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <ErrorBoundary>
      <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
        <Button onClick={() => router.push("/login")}>Go to Login page</Button>
        <Button onClick={() => router.push("/signup")}>
          Go to Signup page
        </Button>
        <div className="border h-full shadow-lg w-full">
          <ReactReader
            url={`${process.env.NEXT_PUBLIC_SERVER_URL}/files/1721038135_sayli_bhagat/1721065966532.epub`}
            location={location || 0}
            locationChanged={handleLocationChanged}
            loadingView={
              <div className="w-full h-full flex justify-center items-center">
                <Spinner size="md" color="default" />
              </div>
            }
            epubInitOptions={{
              openAs: "epub",
            }}
          />
        </div>
        {/* <div style={{ position: "relative", height: "100%" }}>
				<ReactEpubViewer
					url={"https://react-reader.metabits.no/files/alice.epub"}
					ref={viewerRef}
				/>
			</div> */}
      </div>
    </ErrorBoundary>
  );
}

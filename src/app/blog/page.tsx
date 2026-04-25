import React from "react";

function Page() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen gap-3">
      <p className="text-xs font-mono text-[var(--brand)] uppercase tracking-widest">
        &#47;&#47; coming soon
      </p>
      <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
        No posts yet
      </h1>
      <p className="text-sm font-mono text-muted-foreground mt-2">
        Check back later.
      </p>
    </div>
  );
}

export default Page;

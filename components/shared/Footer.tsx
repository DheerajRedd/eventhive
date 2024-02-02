import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-co gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/mobilenavlogo.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2024 EventHive. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

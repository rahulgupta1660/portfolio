import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg text-center">
      <Layout className="py-8">
        {new Date().getFullYear()} &copy; All Rights Reserved
      </Layout>
    </footer>
  );
};

export default Footer;

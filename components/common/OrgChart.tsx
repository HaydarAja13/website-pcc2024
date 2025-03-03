"use client";

import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";

import {OrganizationChart} from "primereact/organizationchart";
import {TreeNode} from "primereact/treenode";

import {organization} from "@/data";

export default function OrgChart() {
  const [data] = useState(organization);

  const nodeTemplate = (node: any) => {
    const targetRef = useRef(null);

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | any
    ) => {
      e.preventDefault();
      let targetId;
      if (node.type === "person") {
        targetId = node?.data?.href.substring(1);
      } else {
        targetId = node?.href.substring(1);
      }
      const targetElement =
        document.getElementById(targetId) || targetRef.current;
      if (targetElement) {
        const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
        const offsetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    useEffect(() => {
      const anchors = document.querySelectorAll(".scroll-link");
      anchors.forEach((anchor) => {
        anchor.addEventListener("click", handleClick);
      });

      return () => {
        anchors.forEach((anchor) => {
          anchor.removeEventListener("click", handleClick);
        });
      };
    }, []);

    if (node.type === "person") {
      return (
        <div className='flex flex-col'>
          <div className='flex flex-col items-center'>
            <Link
              href={node.data.href}
              className='scroll-link'
              onClick={handleClick}
            >
              {node.data.title}
            </Link>
          </div>
        </div>
      );
    }

    return (
      <Link href={node.href} className='scroll-link' onClick={handleClick}>
        {node.label}
      </Link>
    );
  };

  return (
    <div className='card overflow-x-auto' data-aos='zoom-in'>
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  );
}

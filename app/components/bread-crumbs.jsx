"use client";

import React from "react";
import { HomeIcon } from "./use-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const BreadCrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const isLast = index === pathSegments.length - 1;
    return { name: segment, href, isLast };
  });

  return (
    <nav className="breadcrumbs py-2 px-4 rounded-md">
      <ul className="flex items-center gap-2 text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600">
            <HomeIcon />
          </Link>
        </li>

        {breadcrumbs.map((crumb, idx) => {
          const nextCrumb = breadcrumbs[idx + 1];
          const arrowColor = nextCrumb?.isLast ? "text-primary" : "text-(--neutral-600)"; 
          return (
            <React.Fragment key={crumb.href}>
              <li>
                {crumb.isLast ? (
                  <span className="text-(--neutral-600) font-bold no-underline" style={{paddingInlineStart:"10px"}}>{t(crumb.name)}</span>
                ) : (
                  <Link href={crumb.href} className="text-(--neutral-400) font-normal hover:text-blue-600 no-underline" style={{paddingInlineStart:"10px"}}>
                    {t(crumb.name)}
                  </Link>
                )}
              </li>
              {/* {idx < breadcrumbs.length - 1 && (
                <li className={arrowColor}>{">"}</li>
              )} */}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

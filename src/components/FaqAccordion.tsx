"use client";

import { useState } from "react";
import Link from "next/link";
import type { FaqGroup } from "@/data/faq";

interface FaqAccordionProps {
  groups: FaqGroup[];
}

/** FAQ accordion — first item open by default, toggles aria + panel state. */
export default function FaqAccordion({ groups }: FaqAccordionProps) {
  // Track open state per item keyed by `${groupIndex}:${itemIndex}`.
  const [openKeys, setOpenKeys] = useState<string[]>(["0:0"]);

  const toggle = (key: string) => {
    setOpenKeys((keys) => (keys.includes(key) ? keys.filter((k) => k !== key) : [...keys, key]));
  };

  return (
    <>
      {groups.map((group, gi) => (
        <div key={group.title}>
          <h2 style={{ marginTop: 44 }}>{group.title}</h2>
          <div style={{ marginTop: 22 }}>
            {group.items.map((item, ii) => {
              const key = `${gi}:${ii}`;
              const isOpen = openKeys.includes(key);
              return (
                <div className="acc" data-open={isOpen ? "true" : "false"} key={key}>
                  <button className="acc__btn" aria-expanded={isOpen} onClick={() => toggle(key)}>
                    {item.q}
                    <span className="acc__icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="acc__panel">
                    <p>
                      {item.a}
                      {item.link ? <Link href={item.link.href}>{item.link.label}</Link> : null}
                      {item.after}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

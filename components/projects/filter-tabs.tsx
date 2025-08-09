"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

type FilterTabsProps = {
  onChange?: (value: string) => void
}

export function FilterTabs({ onChange }: FilterTabsProps = { onChange: () => {} }) {
  const [value, setValue] = useState("all")

  return (
    <Tabs
      value={value}
      onValueChange={(v) => {
        setValue(v)
        onChange && onChange(v)
      }}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All Projects</TabsTrigger>
        <TabsTrigger value="internal">Internal Tools</TabsTrigger>
        <TabsTrigger value="client">Client Solutions</TabsTrigger>
        <TabsTrigger value="oss">Open Source</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="container mx-auto px-4 py-10">
      <h3 className="mb-4 text-2xl font-semibold">FAQ</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>Do I need AI experience to join?</AccordionTrigger>
          <AccordionContent>No. We welcome beginners—bring curiosity and a builder’s mindset.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>What’s the time commitment?</AccordionTrigger>
          <AccordionContent>Plan for ~5–10 hours/week including meetings and project work.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>When do you meet?</AccordionTrigger>
          <AccordionContent>Thursdays at 6pm. Additional pod time is scheduled by each team.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>Is this only for CS majors?</AccordionTrigger>
          <AccordionContent>No. All majors welcome. Many problems need domain expertise.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q5">
          <AccordionTrigger>How much does it cost?</AccordionTrigger>
          <AccordionContent>Participation is free.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { technologies, contact } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  organization: z.string().trim().min(2, "Please enter your organisation").max(150),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).regex(/^[+\d\s()-]*$/, "Please enter a valid phone number").optional().or(z.literal("")),
  area: z.string().min(1, "Please choose an area"),
  requirement: z.string().min(1, "Please choose a requirement"),
  message: z.string().trim().min(10, "Please add a short description").max(2000),
});
type Values = z.infer<typeof schema>;

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });
  const onSubmit = (v: Values) => {
    const body = `Name: ${v.name}\nOrganisation: ${v.organization}\nEmail: ${v.email}\nPhone: ${v.phone || "-"}\nTechnology / area: ${v.area}\nRequirement: ${v.requirement}\n\n${v.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry — ${v.area}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = (name: keyof Values) => ({ "aria-invalid": !!errors[name], "aria-describedby": errors[name] ? `${name}-error` : undefined });
  const err = (name: keyof Values) => errors[name] && <em id={`${name}-error`} className="field-error">{errors[name]?.message}</em>;

  if (sent) return <div className="form-success" role="status"><span className="eyebrow">Enquiry prepared</span><h3>Thank you. Your email is ready to send.</h3><p>If your email app did not open, write to us directly at <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p><button type="button" className="finder-reset" onClick={() => setSent(false)}>Edit enquiry</button></div>;

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>Name<input autoComplete="name" {...register("name")} {...field("name")} />{err("name")}</label>
      <label>Organisation<input autoComplete="organization" {...register("organization")} {...field("organization")} />{err("organization")}</label>
      <label>Email<input type="email" autoComplete="email" {...register("email")} {...field("email")} />{err("email")}</label>
      <label>Phone<input type="tel" autoComplete="tel" {...register("phone")} {...field("phone")} />{err("phone")}</label>
      <label>Technology / Area<select defaultValue="" {...register("area")} {...field("area")}><option value="" disabled>Select</option>{technologies.map((t) => <option key={t.slug}>{t.name}</option>)}<option>Not sure yet</option></select>{err("area")}</label>
      <label>Requirement<select defaultValue="" {...register("requirement")} {...field("requirement")}><option value="" disabled>Select</option><option>New system</option><option>Upgrade or configuration</option><option>Application consultation</option><option>Service & support</option></select>{err("requirement")}</label>
      <label className="full">Message<textarea {...register("message")} {...field("message")} />{err("message")}</label>
      <button type="submit" className="action action-primary">Send enquiry<span aria-hidden="true">↗</span></button>
      <p className="form-note">Your enquiry is sent to {contact.email}. We typically respond within two working days.</p>
    </form>
  );
}

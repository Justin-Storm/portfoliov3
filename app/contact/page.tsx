"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { CheckIcon, CheckSquare2Icon, FormIcon, FormInputIcon, GraduationCapIcon, LightbulbIcon, PencilIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const addMessage = useMutation(api.messages.addMessage);

    const handleCancel = () => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
    }

    const formatPhoneNumber = (value: string) => {
        const digits = value.replace(/\D/g, "");

        const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

        if (!match) return value;

        return !match[2]
            ? match[1]
            : `(${match[1]}) ${match[2]}${match[3] ? "-" + match[3] : ""}`;
    }

    const handleSubmit = async () => {
        try {
            const newMessage = await addMessage({
                name,
                email,
                phoneNumber,
                message
            });
            if (newMessage) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-svh p-5 pt-[90] space-y-15">

            <div className="flex items-center gap-4 max-w-5xl mx-auto">
                <Separator className="flex-1" />
                <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent w-fit">Contact</h1>
                <Separator className="flex-1" />
            </div>

            
            <div className="max-w-xl mx-auto">
                {submitted ? (
                    <Empty>
                        <EmptyHeader>
                            <EmptyMedia variant={'icon'}>
                                <CheckIcon />
                            </EmptyMedia>
                            <EmptyTitle>Message Sent!</EmptyTitle>
                            <EmptyDescription>Thanks, <span className="capitalise">{name}</span>. I'll get pack to you as soon as possible.</EmptyDescription>
                        </EmptyHeader>
                        <EmptyContent className="flex justify-center gap-2">
                            <Button onClick={handleCancel}>
                                <PencilIcon />
                                Submit Another?
                            </Button>
                        </EmptyContent>
                    </Empty>
                ) : (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Contact Me</FieldLegend>
                                <FieldDescription>I will get back to you as soon as possible</FieldDescription>
                            </FieldSet>
                            <FieldGroup>
                                <Field orientation={'responsive'}>
                                    <Field className="flex-1">
                                        <FieldLabel htmlFor="name">Name*</FieldLabel>
                                        <Input 
                                            type="text"
                                            value={name}
                                            placeholder="Name"
                                            onChange={(e) => setName(e.target.value)}
                                            id="name"
                                            required
                                        />
                                    </Field>
                                    <Field className="flex-1">
                                        <FieldLabel htmlFor="email">Email*</FieldLabel>
                                        <Input 
                                            type="email"
                                            value={email}
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            id="email"
                                            required
                                        />
                                    </Field>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="phone-number">Phone Number</FieldLabel>
                                    <Input 
                                        type="tel"
                                        value={phoneNumber}
                                        placeholder="Phone Number"
                                        onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                                        id="phone-number"
                                        maxLength={14}
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="message">Message*</FieldLabel>
                                    <Textarea
                                        value={message}
                                        placeholder="Message"
                                        onChange={(e) => setMessage(e.target.value)}
                                        id="message"
                                        required
                                    />
                                </Field>
                            </FieldGroup>
                            <Field orientation={'horizontal'}>
                                <Button type="submit">
                                    <CheckIcon />
                                    Submit
                                </Button>
                                <Button 
                                    type="button" 
                                    variant={'secondary'}
                                    onClick={handleCancel}
                                    disabled={!name && !email && !phoneNumber && !message}
                                >Cancel</Button>
                            </Field>
                        </FieldGroup>
                    </form>
                )}
            </div>


        </div>
    )
}
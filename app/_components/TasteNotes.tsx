"use client";

import { useRef, type MouseEvent } from "react";

import CloseIcon from "./svgs/CloseIcon";

type Note = {
  term: string;
  description: string;
};

const notes: Note[] = [
  {
    term: "Fruity",
    description:
      "Bright, sometimes tart — stone fruit, red berries, or citrus peel. Most common in lighter roasts.",
  },
  {
    term: "Nutty & Cocoa",
    description:
      "Warm and rounded, like roasted almond, hazelnut, or dark chocolate. Common in medium roasts.",
  },
  {
    term: "Caramelized & Sweet",
    description:
      "Brown sugar, toffee, maple — the sweetness that develops as beans roast past first crack.",
  },
  {
    term: "Spice",
    description:
      "Warm baking spice like cinnamon or clove, usually layered under other notes rather than standing alone.",
  },
  {
    term: "Earthy",
    description:
      "Deep and rustic — tobacco, cedar, damp soil. Typical of darker roasts.",
  },
];

export default function TasteNotes() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function open() {
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) {
      close();
    }
  }

  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={open}>
        Taste notes
      </button>

      <dialog
        ref={dialogRef}
        className="dialog"
        aria-labelledby="taste-notes-heading"
        onClick={handleBackdropClick}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3
              id="taste-notes-heading"
              className="font-heading text-[20px] leading-[1.15] sm:text-[22px]"
            >
              Tasting notes
            </h3>
            <button
              type="button"
              className="btn-icon"
              aria-label="Close"
              onClick={close}
            >
              <CloseIcon />
            </button>
          </div>

          <p className="mt-3 max-w-[44ch] text-[13.5px] leading-[1.6] text-neutral-800">
            A general guide to the flavors you might pick up in a cup,
            independent of which roast you choose.
          </p>

          <dl className="mt-6 flex flex-col gap-4">
            {notes.map((note) => (
              <div key={note.term}>
                <dt className="font-heading text-[15px] leading-[1.2]">
                  {note.term}
                </dt>
                <dd className="mt-1 text-[13px] leading-[1.55] text-neutral-800">
                  {note.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </dialog>
    </>
  );
}

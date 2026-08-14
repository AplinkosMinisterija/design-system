import { createContext, useContext } from 'react';

export interface FieldControl {
  /** `id` the control must carry — `FieldWrapper` points its `<label for>` at it. */
  controlId: string;
  /** `id` of the rendered error message, or undefined when there is none. */
  errorId?: string;
  /** Whether the field is currently in error. */
  invalid: boolean;
  /**
   * Claims `controlId`. `FieldWrapper` only points its `<label for>` at a
   * control that has claimed it — a group of radios or buttons never does, and
   * a label pointing at nothing is worse than one pointing nowhere.
   */
  registerControl: () => void;
}

/**
 * Lets `FieldWrapper` hand the id it labels down to whichever control renders
 * inside it, without every field component having to thread the prop through.
 *
 * The alternative — each of the ~19 field components generating an id and
 * passing it to both `FieldWrapper` and its input — is the same wiring repeated
 * nineteen times, and any field that forgot it silently lost its label.
 */
export const FieldControlContext = createContext<FieldControl | undefined>(undefined);

export const useFieldControl = () => useContext(FieldControlContext);

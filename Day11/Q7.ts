type AllEvents =
  | 'click'
  | 'dblclick'
  | 'submit'
  | 'reset'
  | 'keypress';

// Keep only matching types
type MouseEvents =
  Extract<
    AllEvents,
    'click' | 'dblclick'
  >;

// Remove matching types
type NonFormEvents =
  Exclude<
    AllEvents,
    'submit' | 'reset'
  >;

function handleMouseEvent(
  e: MouseEvents
) {
  console.log(
    "Mouse Event:",
    e
  );
}

function handleNonForm(
  e: NonFormEvents
) {
  console.log(
    "Non Form Event:",
    e
  );
}

handleMouseEvent('click');
handleMouseEvent('dblclick');

handleNonForm('click');
handleNonForm('keypress');
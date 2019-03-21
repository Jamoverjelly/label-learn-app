# Label Learn App

## Core Requirements

- Initial build: animal cell image will be statically rendered

- The user can mark the image with icons using drag-and-drop

  - Location of each positioned marker is saved between page reloads
  - Icons can be removed from the image

- Labels are available and can be dragged-and-dropped onto the image area

  - Labels should "snap" onto icons already positioned on the image

- User can check their performance after adding the correct, corresponding label to each positioned icon

### Icon Markers

- The user can drag-and-drop an icon marker onto the image field

- The icon marker's position on the image is saved on the image field

- The icon marker can be moved once it's placed in the image field

- The icon marker can be returned to the icon box

### Label Markers

- The user can add new labels to the label box

- If the user attempts to add a label with the same name as an existing label, the user is notified and prompted to provide a unique name

- The user can remove labels from the collection

- The user can drag-and-drop labels from the label box onto the image field, updating the collection of rendered labels in the box

- The user can move labels on the image field once the label has been placed

- The user can return an image back into the image box, updating the rendered collection

- The label marker locations can be saved on the image once the user is satisfied with their placement

### Exam Mode

- Once saved, loading the page in exam mode converts all the positioned labels into icons

- The user can drag and drop labels from the label box onto the image where icons are present

- The user can reposition labels via drag and drop once they are placed on the image

- The user can return labels to the label box after they're placed

- Once the user has labeled as many icons as they can recall from memory, they can click finish and are scored for all labels which were correctly matched to their stored location.

  - This means the original placement of labels must store a location variable in the code and that value has to be validated when the game is scored for the user to receive a point for the correct answer
  - If the positioned label can't be validated during the scoring phase, the user loses a point
  - The area where labels may be dropped onto an icon for placement should be large enough so they fasten to the icon, covering it within a reasonable space on or surrounding that specific icon

- A timer is started once the user begins exam mode

- The user's score and time is reported to them in a modal once the game is finished and scored

- The modal prompts the user with an option to try again or close the modal

- At any time during exam mode, the user can reset the image field
  - Resetting the exam returns all currently positioned labels back to the label box
  - Resetting the exam restores the timer to 00:00
  - Resetting the exam ends exam mode

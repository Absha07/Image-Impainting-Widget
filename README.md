# Image Impainting Widget

## Objective

The goal of this project is to create a simple image inpainting widget where users can:

1. Upload an image.
2. Draw on the image to create a mask.
3. Export and display the original image and the mask image as a pair.

## How to Run the Project Locally

1. Clone the repository:
   
   git clone [https://github.com/absha07/Image-Impainting-Widget.git](https://github.com/absha07/Image-Impainting-Widget.git)

3. Navigate to the project directory:
   
  cd Image-Impainting-Widget

5. Install the required dependencies:

  npm install

6. Start the development server:

  npm run dev

7. Open your browser and visit `http://localhost:3000`.

## Libraries Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides faster development and bundling.
- **react-canvas-draw**: A simple drawing tool for React, used to create masks on images.
- **CSS Flexbox**: Used for creating a responsive layout and centering elements.

## Challenges Faced and How I Overcame Them

- **Canvas Responsiveness**: One of the challenges was ensuring that the canvas resized correctly according to the image's dimensions, without overflowing or distorting the layout. This was addressed by dynamically adjusting the canvas size using the image's aspect ratio and setting appropriate CSS styles.

- **Exporting the Mask**: Another challenge was exporting the drawn mask as a separate image. This was resolved by using the `toDataURL()` method from `react-canvas-draw`, which converts the canvas content into a base64-encoded image format.

- **Styling and Layout**: Ensuring that the original image and the mask were displayed side by side without layout issues was another challenge. This was achieved by using CSS Flexbox to center the images and ensure they fit within the available space without overflowing.

## Live Demo

You can view the live demo of the Image Inpainting Widget here:

[Live Demo](https://absha07.github.io/Image-Impainting-Widget/)

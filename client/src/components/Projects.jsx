import { useState } from "react";

export default function Projects() {

    // creates an array that holds the image file names
  const images = [
    "mainUI.png",
    "equipmentPage.png",
    "orderPage.png",
    "calculator.png",
    "locationPage.png",
    "javaApp.png",
    "menuList.png",
  ];

  // creates an array that holds caption for each image
  const captions = [
    "First Main UI",
    "Equipment Page",
    "Order Page",
    "Calculator App - C#",
    "Location Page",
    "Guessing App - Java",
    "Menu List",
  ];

  // creates an array that holds description for each image
  const descriptions = [
    "This is the main UI of my past projects.",
    "Equipment page displays photos. Clicking on a photo opens the corresponding detail page. Each detail page can hold descriptions and more images.",
    "Order page displays UI where the customer can place their order and provide the total amount.",
    "This simple calculator app was written using C# programming language. The app calculates two fractions.",
    "Location page uses the google API to calculate the distance of the user and provides different options on how the direction will be provided.",
    "This is a simple guessing app that generates a random number and the user tries to identify it. The app was written using the Java programming language.",
    "The menu list displays photos of the items and its prices. When the user hovers on each photo, additional information is shown to the user.",
  ];

  // stores and sets the index, and initializes the index to 0
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = images.length;

  // ensures that if the array reaches the last item, it will return back to 0
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % imageCount);

  // ensures that if the array reaches the first item, it will return back to the last index
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + imageCount) % imageCount);

  return (
    <>
        <h2>Projects</h2>
        <div className="leftMessage">Welcome to my Projects Page</div>
        <div className="homeGrid">
            <div id="gallerybox">
                <h3>{captions[currentIndex]}</h3>
                <div className="projectContainer">
                    <button className="leftButton" onClick={prevSlide}>&#9664;</button>
                    <img className="projectImage" src={`/images/${images[currentIndex]}`} alt={captions[currentIndex]} />
                    <button className="rightButton" onClick={nextSlide}>&#9654;</button>
                    <div className="imageCounter">
                        {currentIndex + 1} / {imageCount}
                    </div>
                </div>
                
                <p>{descriptions[currentIndex]}</p>
            </div>
        </div>

    </>
  )
}
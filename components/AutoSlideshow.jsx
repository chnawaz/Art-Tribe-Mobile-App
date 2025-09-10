// // Import required components from React Native and React
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   ImageBackground,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import { PanGestureHandler } from 'react-native-gesture-handler';


// // Get device screen dimensions for responsive design
// const { width, height } = Dimensions.get('window');

// // Main Slideshow Component
// export default function AutoSlideshow () {
//   // State to track which slide is currently active (starts from 0)
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // useRef to store the interval ID so we can clear it when needed
//   const intervalRef = useRef(null);
  
//   // Animated value for swipe gestures
//   const translateX = useRef(new Animated.Value(0)).current;

//   // Array of slide data - you can easily add more slides here
//   const slides = [
//     {
//       id: 1,
//       title: "Open AI Sora",
//       description: "Transform your words into visual masterpieces: Leverage AI technology to craft breathtaking images.",
//       background: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//     },
//     {
//       id: 2,
//       title: "AI Image Generation",
//       description: "Create stunning visuals with advanced artificial intelligence. Turn imagination into reality.",
//       background: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//     },
//     {
//       id: 3,
//       title: "Video Generation",
//       description: "Revolutionary video creation powered by AI. Bring your stories to life with cutting-edge technology.",
//       background: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//     },
//     {
//       id: 4,
//       title: "Creative Studio",
//       description: "Your complete creative workspace. Design, edit, and produce content with intelligent tools.",
//       background: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//     }
//   ];

//   // Function to go to the next slide
//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => {
//       // If we're at the last slide, go back to the first slide (0)
//       // Otherwise, go to the next slide
//       return prevSlide === slides.length - 1 ? 0 : prevSlide + 1;
//     });
//   };

//   // Function to go to a specific slide (used by dot navigation)
//   const goToSlide = (slideIndex) => {
//     setCurrentSlide(slideIndex);
//     resetAutoSlide(); // Reset the 4-second timer when manually changing slides
//   };

//   // Function to reset the automatic slide timer
//   const resetAutoSlide = () => {
//     // Clear the existing interval if it exists
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//     // Start a new interval that changes slides every 4 seconds
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, 4000); // 4000 milliseconds = 4 seconds
//   };

//   // useEffect hook runs when component mounts
//   useEffect(() => {
//     // Start the automatic slideshow when component loads
//     resetAutoSlide();
    
//     // Cleanup function: clear interval when component unmounts
//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, []); // Empty dependency array means this runs only once

//   // Handle swipe gestures
//   const onGestureEvent = Animated.event(
//     [{ nativeEvent: { translationX: translateX } }],
//     { useNativeDriver: false }
//   );

//   // Handle when swipe gesture ends
//   const onHandlerStateChange = (event) => {
//     const { translationX, state } = event.nativeEvent;
    
//     // If gesture ended and swipe distance is significant
//     if (state === 5) { // ENDED state
//       if (translationX > 50) {
//         // Swiped right - go to previous slide
//         setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
//       } else if (translationX < -50) {
//         // Swiped left - go to next slide
//         nextSlide();
//       }
      
//       // Reset gesture animation
//       Animated.spring(translateX, {
//         toValue: 0,
//         useNativeDriver: false,
//       }).start();
      
//       // Reset auto-slide timer
//       resetAutoSlide();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Wrap in PanGestureHandler for swipe functionality */}
//       <PanGestureHandler
//         onGestureEvent={onGestureEvent}
//         onHandlerStateChange={onHandlerStateChange}
//       >
//         <Animated.View style={[styles.slideContainer, { transform: [{ translateX }] }]}>
//           {/* Background Image with overlay */}
//           <ImageBackground
//             source={{ uri: slides[currentSlide].background }}
//             style={styles.backgroundImage}
//             resizeMode="cover"
//           >
//             {/* Dark overlay for better text readability */}
//             <View style={styles.overlay} />
            
//             {/* Content Container */}
//             <View style={styles.contentContainer}>
//               {/* Main Title */}
//               <Text style={styles.title}>
//                 {slides[currentSlide].title}
//               </Text>
              
//               {/* Description Text */}
//               <Text style={styles.description}>
//                 {slides[currentSlide].description}
//               </Text>
//             </View>
//           </ImageBackground>
//         </Animated.View>
//       </PanGestureHandler>

//       {/* Navigation Dots Container */}
//       <View style={styles.dotsContainer}>
//         {/* Map through slides array to create dots */}
//         {slides.map((_, index) => (
//           <TouchableOpacity
//             key={index} // Unique key for each dot
//             style={[
//               styles.dot,
//               // Active dot has different styling
//               currentSlide === index && styles.activeDot
//             ]}
//             onPress={() => goToSlide(index)} // Go to specific slide when dot is pressed
//           />
//         ))}
//       </View>
//     </View>
//   );
// };

// // StyleSheet for all component styling
// const styles = StyleSheet.create({
//   // Main container takes full screen
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
  
//   // Slide container with gesture support
//   slideContainer: {
//     flex: 1,
//   },
  
//   // Background image covers entire screen
//   backgroundImage: {
//     width: width,
//     height: height,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
//   // Semi-transparent overlay for better text readability
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.4)', // 40% transparent black
//   },
  
//   // Container for text content
//   contentContainer: {
//     paddingHorizontal: 30,
//     alignItems: 'center',
//     zIndex: 2, // Above the overlay
//   },
  
//   // Main title styling
//   title: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 20,
//     textShadowColor: 'rgba(0, 0, 0, 0.8)',
//     textShadowOffset: { width: 2, height: 2 },
//     textShadowRadius: 4,
//   },
  
//   // Description text styling
//   description: {
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//     lineHeight: 26,
//     maxWidth: 350,
//     textShadowColor: 'rgba(0, 0, 0, 0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
  
//   // Container for navigation dots
//   dotsContainer: {
//     position: 'absolute',
//     bottom: 50,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  
//   // Individual dot styling
//   dot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6, // Makes it circular
//     backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
//     marginHorizontal: 8,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.8)',
//   },
  
//   // Active dot styling
//   activeDot: {
//     backgroundColor: 'white', // Fully white
//     borderColor: 'white',
//     transform: [{ scale: 1.2 }], // Slightly larger
//   },
// });

// // Export component for use in other files
// // export default AutoSlideshow;

// ...............................

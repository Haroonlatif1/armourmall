// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// const ThreeAnimation = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     let mouseX = 0;
//     let mouseY = 0;

//     // Initialize Three.js scene
//     const scene = new THREE.Scene();

//     // Camera setup
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Renderer setup
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create a sphere
//     const geometry = new THREE.SphereGeometry(1, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const sphere = new THREE.Mesh(geometry, material);
//     scene.add(sphere);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(0, 1, 0);
//     scene.add(directionalLight);

//     // Handle mouse movement
//     const handleMouseMove = (event) => {
//       mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Move the sphere based on mouse position
//       const targetX = mouseX * 5;
//       const targetY = mouseY * 5;

//       sphere.position.x += (targetX - sphere.position.x) * 0.1;
//       sphere.position.y += (targetY - sphere.position.y) * 0.1;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       renderer.domElement.remove();
//     };
//   }, []);

//   return <div ref={containerRef} />;
// };

// export default ThreeAnimation;

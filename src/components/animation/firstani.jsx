import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';


const ThreeAnimation = () => {
  const containerRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 7;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparent background
    renderer.setClearColor(0x000000, 0); // Set background color to transparent

    // Mount renderer to container
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create and add cubes to the scene
    const cubes = [];
    const cubeCount = 15;

    for (let i = 0; i < cubeCount; i++) {
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, transparent: true, opacity: 0.6 });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3);
      scene.add(cube);
      cubes.push(cube);
    }

    // Save references for cleanup
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Handle window resize
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Add animation logic here
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'brown' }}>
        <h2 className='hollow-text3'>Customize Your Weapon</h2>
        <Link to="/contactus"><button  className="trans" style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: 'brown', border: 'none', color: 'white', cursor: 'pointer' }}>Contact us </button></Link>
      </div>
    </div>
  );
};

export default ThreeAnimation;

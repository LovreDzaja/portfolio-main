"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { WebGLRenderer, PerspectiveCamera, Mesh, MeshBasicMaterial, SphereGeometry, PointLight, PlaneGeometry, MeshStandardMaterial } from 'three';
import  TWEEN from '@tweenjs/tween.js';

const Sphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scene = new THREE.Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();

  const mainSphere = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshStandardMaterial({ color: 0xff5733, roughness: 0.5, metalness: 0.5, emissive: 0x600861, emissiveIntensity: 0.8 })
  );

  const light = new PointLight(0xffffff, 1);
  const holeSpheres: Mesh[] = [];
  const numHoles = Math.floor(Math.random() * 10) + 5;

  const getRandomPointOnSphere = () => {
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.acos(2 * Math.random() - 1);

    const radius = 1.8 + Math.random() * 0.2;

    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);

    return new THREE.Vector3(x, y, z);
  };

  const popupGeometry = new PlaneGeometry(1, 0.2);
  const popupMaterial = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
  const popupMesh = new Mesh(popupGeometry, popupMaterial);
  let popupShown = false;

  for (let i = 0; i < numHoles; i++) {
    const holeSphere = new Mesh(
      new SphereGeometry(0.05, 16, 16),
      new MeshStandardMaterial({ color: 0x8e298f })
    );
    holeSpheres.push(holeSphere);
  }

  useEffect(() => {
    camera.position.z = 2;
    scene.add(mainSphere);
    scene.add(light);

    holeSpheres.forEach((holeSphere) => {
      const randomPointOnSphere = getRandomPointOnSphere();
      holeSphere.position.copy(randomPointOnSphere);
      mainSphere.add(holeSphere);
    });

    scene.add(popupMesh);

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    window.addEventListener('resize', handleWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);

      if (!popupShown) {
        showPopup();
        popupShown = true;
      }

      mainSphere.rotation.x += 0.0005;
      mainSphere.rotation.y += 0.0005;

      holeSpheres.forEach((holeSphere) => {
        holeSphere.rotation.x += 0.02;
        holeSphere.rotation.y += 0.02;
      });

      TWEEN.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const showPopup = () => {
    new TWEEN.Tween({ opacity: 0 })
      .to({ opacity: 1 }, 1000)
      .onUpdate((obj) => {
        popupMesh.material.opacity = obj.opacity;
      })
      .start();
  };

  const fixedSpherePosition = new THREE.Vector3(0, 0, 0);
  mainSphere.position.copy(fixedSpherePosition);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, right: 0, width: '100%', height: '100%' }} />;
};

export default Sphere;

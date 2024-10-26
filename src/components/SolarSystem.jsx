import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

const SolarSystem = () => {
  useEffect(() => {
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Texture Loader
    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load("src/assets/Images/stars.jpg");
    const sunTexture = textureLoader.load("src/assets/Images/sun.jpg");
    const mercuryTexture = textureLoader.load("src/assets/Images/mercury.jpg");
    const venusTexture = textureLoader.load("src/assets/Images/venus.jpg");
    const earthTexture = textureLoader.load("src/assets/Images/earth.jpg");
    const marsTexture = textureLoader.load("src/assets/Images/mars.jpg");
    const jupiterTexture = textureLoader.load("src/assets/Images/jupiter.jpg");
    const saturnTexture = textureLoader.load("src/assets/Images/saturn.jpg");
    const uranusTexture = textureLoader.load("src/assets/Images/uranus.jpg");
    const neptuneTexture = textureLoader.load("src/assets/Images/neptune.jpg");
    const plutoTexture = textureLoader.load("src/assets/Images/pluto.jpg");
    const saturnRingTexture = textureLoader.load(
      "src/assets/Images/saturn_ring.png"
    );
    const uranusRingTexture = textureLoader.load(
      "src/assets/Images/uranus_ring.png"
    );

    // Scene
    const scene = new THREE.Scene();

    // Background
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const starBackground = cubeTextureLoader.load([
      starTexture,
      starTexture,
      starTexture,
      starTexture,
      starTexture,
      starTexture,
    ]);
    scene.background = starBackground;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-50, 50, 150);
    camera.lookAt(0, 0, 0);

    // Orbit Controls
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enableDamping = true;
    orbit.update();

    // Sun
    const sunGeo = new THREE.SphereGeometry(15, 50, 50);
    const sunMaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
    const sun = new THREE.Mesh(sunGeo, sunMaterial);
    scene.add(sun);

    // Lighting
    const sunLight = new THREE.PointLight(0xffffff, 4, 300);
    scene.add(sunLight);

    // Set a default intensity for ambient light that can be toggled
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Start with some light
    scene.add(ambientLight);

    // Paths for planets
    const path_of_planets = [];
    function createLineLoopWithMesh(radius, color, width) {
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(color).multiplyScalar(1.5),
        linewidth: width,
        opacity: 0.8,
        transparent: true,
      });
      const geometry = new THREE.BufferGeometry();
      const lineLoopPoints = [];

      const numSegments = 100;
      for (let i = 0; i <= numSegments; i++) {
        const angle = (i / numSegments) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        lineLoopPoints.push(x, 0, z);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(lineLoopPoints, 3)
      );
      const lineLoop = new THREE.LineLoop(geometry, material);
      scene.add(lineLoop);
      path_of_planets.push(lineLoop);
    }

    // Generate Planets
    const generatePlanet = (size, texture, x, ring) => {
      const planetGeo = new THREE.SphereGeometry(size, 50, 50);
      const planetMaterial = new THREE.MeshStandardMaterial({ map: texture });
      const planet = new THREE.Mesh(planetGeo, planetMaterial);
      const planetObj = new THREE.Object3D();
      planet.position.set(x, 0, 0);
      if (ring) {
        const ringGeo = new THREE.RingGeometry(
          ring.innerRadius,
          ring.outerRadius,
          32
        );
        const ringMat = new THREE.MeshBasicMaterial({
          map: ring.ringmat,
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        planetObj.add(ringMesh);
        ringMesh.position.set(x, 0, 0);
        ringMesh.rotation.x = -0.5 * Math.PI;
      }
      scene.add(planetObj);
      planetObj.add(planet);
      createLineLoopWithMesh(x, 0xffffff, 3);
      return { planetObj, planet };
    };

    const planets = [
      {
        ...generatePlanet(3.2, mercuryTexture, 28),
        rotaing_speed_around_sun: 0.004,
        self_rotation_speed: 0.004,
      },
      {
        ...generatePlanet(5.8, venusTexture, 44),
        rotaing_speed_around_sun: 0.015,
        self_rotation_speed: 0.002,
      },
      {
        ...generatePlanet(6, earthTexture, 62),
        rotaing_speed_around_sun: 0.01,
        self_rotation_speed: 0.02,
      },
      {
        ...generatePlanet(4, marsTexture, 78),
        rotaing_speed_around_sun: 0.008,
        self_rotation_speed: 0.018,
      },
      {
        ...generatePlanet(12, jupiterTexture, 100),
        rotaing_speed_around_sun: 0.002,
        self_rotation_speed: 0.04,
      },
      {
        ...generatePlanet(10, saturnTexture, 138, {
          innerRadius: 10,
          outerRadius: 20,
          ringmat: saturnRingTexture,
        }),
        rotaing_speed_around_sun: 0.0009,
        self_rotation_speed: 0.038,
      },
      {
        ...generatePlanet(7, uranusTexture, 176, {
          innerRadius: 7,
          outerRadius: 12,
          ringmat: uranusRingTexture,
        }),
        rotaing_speed_around_sun: 0.0004,
        self_rotation_speed: 0.03,
      },
      {
        ...generatePlanet(7, neptuneTexture, 200),
        rotaing_speed_around_sun: 0.0001,
        self_rotation_speed: 0.032,
      },
      {
        ...generatePlanet(2.8, plutoTexture, 216),
        rotaing_speed_around_sun: 0.0007,
        self_rotation_speed: 0.008,
      },
    ];

    // GUI Controls
    const gui = new dat.GUI();
    const options = {
      "Real view": true,
      "Show path": true,
      speed: 1,
    };

    gui.add(options, "Real view").onChange((e) => {
      console.log(`Real view toggled: ${e}`);
      ambientLight.intensity = e ? 0.5 : 0; // Set to 0.5 for "real view"
    });

    gui.add(options, "Show path").onChange((e) => {
      path_of_planets.forEach((dpath) => {
        dpath.visible = e;
      });
    });

    gui.add(options, "speed", 0, 20);

    // Animation
    const animate = () => {
      sun.rotateY(options.speed * 0.004);
      planets.forEach(
        ({
          planetObj,
          planet,
          rotaing_speed_around_sun,
          self_rotation_speed,
        }) => {
          planetObj.rotateY(options.speed * rotaing_speed_around_sun);
          planet.rotateY(options.speed * self_rotation_speed);
        }
      );
      renderer.render(scene, camera);
      orbit.update();
    };
    renderer.setAnimationLoop(animate);

    // Resize Event
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      renderer.dispose();
      gui.destroy();
      window.removeEventListener("resize", null);
    };
  }, []);

  return null;
};

export default SolarSystem;

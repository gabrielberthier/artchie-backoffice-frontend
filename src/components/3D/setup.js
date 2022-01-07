import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  Color,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

/**
 *
 * @param {HTMLElement} element
 */
export const create3dCanvas = (element, objectPath, extension) => {
  const scene = new Scene();

  const camera = new PerspectiveCamera(25, 300 / 300, 1, 1000);
  camera.position.z = 200;

  const renderer = new WebGLRenderer();
  scene.background = new Color(0xffffff);
  renderer.setSize(300, 300);
  element.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  const keyLight = new DirectionalLight(new Color("hsl(30, 100%, 75%)"), 1.0);
  keyLight.position.set(-100, 0, 100);

  const fillLight = new DirectionalLight(
    new Color("hsl(240, 100%, 75%)"),
    0.75
  );
  fillLight.position.set(100, 0, 100);

  const backLight = new DirectionalLight(0xffffff, 1.0);
  backLight.position.set(100, 0, -100).normalize();

  scene.add(keyLight);
  scene.add(fillLight);
  scene.add(backLight);

  const objLoader = createLoader(extension);

  objLoader.load(objectPath, function (object) {
    scene.add(object);
    object.position.y = 0;
  });

  const animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();
};

const createLoader = (extension) => {
  console.log(extension);
  if (extension === "obj") {
    return new OBJLoader();
  } else if (extension === "fbx") {
    return new FBXLoader();
  }
};

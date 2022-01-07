const mtlLoader = new MTLLoader();
mtlLoader.setTexturePath("/examples/3d-obj-loader/assets/");
mtlLoader.setPath("/examples/3d-obj-loader/assets/");
mtlLoader.load("r2-d2.mtl", function (materials) {
  materials.preload();

  const objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath("/examples/3d-obj-loader/assets/");
  objLoader.load("r2-d2.obj", function (object) {
    scene.add(object);
    object.position.y -= 60;
  });
});

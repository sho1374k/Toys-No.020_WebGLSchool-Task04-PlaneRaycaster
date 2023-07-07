#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
// #include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
// #include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

varying vec2 vUv;
uniform float uScale;
uniform float uTime;
uniform float uProgress;
uniform float uClick;

// const float PI  = 3.141592653589793;

void main() {
  #include <uv_vertex>
  // #include <uv2_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;
  vUv = uv;

  float x = position.x;
  float y = position.y;
  float z = position.z + (sin(uv.y * PI) + sin(uv.x * PI)) * .15 * uProgress * uClick;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x, y, z) * uScale, 1.0);
  
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <shadowmap_vertex>
  // #include <fog_vertex>
}

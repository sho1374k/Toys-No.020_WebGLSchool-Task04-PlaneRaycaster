#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform float uTime;
uniform float uProgress;
uniform float uClick;

void main() {
  #include <uv_vertex>
  #include <skinbase_vertex>
  #ifdef USE_DISPLACEMENTMAP
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinnormal_vertex>
  #endif
  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  float x = position.x + sin(uv.y * PI) * .15 * uProgress * uClick;
  float y = position.y + sin(uv.x * PI) * .15 * uProgress * uClick;
  float z = position.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vec3(x, y, z) * 1.0, 1.0);
}
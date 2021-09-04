uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
// uniform float uColorOffset;
// uniform float uColorMultiplier;

//varying float vElevation;

varying vec2 vUv;

void main()
{
    //float mixStrength =  * uColorMultiplier + uColorOffset;
    vec3 color = mix(uSurfaceColor, uDepthColor, vUv.y);
    
    gl_FragColor = vec4(color, 1.0);
}
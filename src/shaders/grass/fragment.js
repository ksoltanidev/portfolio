const fragment = `
uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

varying vec2 vUv;

void main()
{
    //float mixStrength =  * uColorMultiplier + uColorOffset;
    vec3 color = mix(uSurfaceColor, uDepthColor, vUv.y);
    
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragment;
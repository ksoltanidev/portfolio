uniform float uTime;
uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uBigWavesSpeed;

varying vec2 vUv;

void main()
{
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    float elevation = ( 1.0 - uv.y)*sin(modelPosition.y * uBigWavesFrequency.x + uTime * uBigWavesSpeed) * uBigWavesElevation;

    modelPosition.z += elevation;

    // vec4 viewPosition = viewMatrix * modelPosition;
    // vec4 projectedPosition = projectionMatrix * viewPosition;
    
    // gl_Position = projectedPosition;
    
    // // Varyings 
    // vElevation = elevation / uBigWavesElevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vUv = uv;
}
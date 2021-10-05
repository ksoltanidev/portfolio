const vertex = `
uniform float uTime;
uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uBigWavesSpeed;

varying vec2 vUv;

void main()
{
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    float smallElevation = ( 1.0 - uv.y)*sin(modelPosition.y * uBigWavesFrequency.x + uTime * uBigWavesSpeed) * uBigWavesElevation;
    //float smallElevation = ( 1.0 - uv.y)*sin(modelPosition.y * uBigWavesFrequency.x + uTime * uBigWavesSpeed * 2.0) * uBigWavesElevation * 0.5;
    //float BigElevation2 = ( 1.0 - uv.y)*sin(modelPosition.y * uBigWavesFrequency.x + uTime * uBigWavesSpeed * 0.1) * uBigWavesElevation;

    modelPosition.z += smallElevation;
    //modelPosition.z += BigElevation2;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vUv = uv;
}
`;

export default vertex;